import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const sessionSchema = z.string().min(8).max(100);

export type CartLine = {
  id: string;
  product_id: string;
  variant_id: string | null;
  color: string | null;
  variant_stock: number | null;
  qty: number;
  product: {
    id: string;
    name: string;
    category: string;
    price: number;
  } | null;
};

export const getCart = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ sessionId: sessionSchema }).parse(d))
  .handler(async ({ data }) => {
    const { data: rows, error } = await supabaseAdmin
      .from("cart_items")
      .select(
        "id, product_id, variant_id, qty, products:products(id,name,category,price), product_variants:product_variants(id,color,stock)",
      )
      .eq("session_id", data.sessionId)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (rows ?? []).map((r: any) => ({
      id: r.id,
      product_id: r.product_id,
      variant_id: r.variant_id,
      color: r.product_variants?.color ?? null,
      variant_stock: r.product_variants?.stock ?? null,
      qty: r.qty,
      product: r.products,
    })) as CartLine[];
  });

export const addToCart = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({
      sessionId: sessionSchema,
      productId: z.string().uuid(),
      variantId: z.string().uuid().optional(),
      qty: z.number().int().min(1).max(99),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    let variantId = data.variantId ?? null;
    if (!variantId) {
      const { data: v } = await supabaseAdmin
        .from("product_variants")
        .select("id")
        .eq("product_id", data.productId)
        .eq("active", true)
        .limit(1)
        .maybeSingle();
      variantId = v?.id ?? null;
    }

    let available = 99;
    if (variantId) {
      const { data: v, error: vErr } = await supabaseAdmin
        .from("product_variants")
        .select("stock, color")
        .eq("id", variantId)
        .maybeSingle();
      if (vErr) throw new Error(vErr.message);
      if (!v) throw new Error("Variante no encontrada");
      if (v.stock <= 0) throw new Error("Sin stock disponible en ese color");
      available = v.stock;
    }

    const q = supabaseAdmin
      .from("cart_items")
      .select("id, qty")
      .eq("session_id", data.sessionId)
      .eq("product_id", data.productId);
    const { data: existing } = variantId
      ? await q.eq("variant_id", variantId).maybeSingle()
      : await q.is("variant_id", null).maybeSingle();

    if (existing) {
      const newQty = Math.min(available, existing.qty + data.qty);
      const { error } = await supabaseAdmin
        .from("cart_items")
        .update({ qty: newQty })
        .eq("id", existing.id);
      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabaseAdmin.from("cart_items").insert({
        session_id: data.sessionId,
        product_id: data.productId,
        variant_id: variantId,
        qty: Math.min(available, data.qty),
      });
      if (error) throw new Error(error.message);
    }
    return { ok: true };
  });

export const updateCartQty = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({
      sessionId: sessionSchema,
      itemId: z.string().uuid(),
      qty: z.number().int().min(1).max(99),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("cart_items")
      .update({ qty: data.qty })
      .eq("id", data.itemId)
      .eq("session_id", data.sessionId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const removeFromCart = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({
      sessionId: sessionSchema,
      itemId: z.string().uuid(),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("cart_items")
      .delete()
      .eq("id", data.itemId)
      .eq("session_id", data.sessionId);
    if (error) throw new Error(error.message);
    return { ok: true };
  });

export const checkoutOrder = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({
      sessionId: sessionSchema,
      phone: z.string().trim().min(8).max(20).regex(/^[0-9 +()-]+$/, "Teléfono inválido"),
      name: z.string().trim().max(80).optional(),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    const { data: rows, error: cartErr } = await supabaseAdmin
      .from("cart_items")
      .select(
        "qty, variant_id, products:products(id,name,price), product_variants:product_variants(id,color,stock)",
      )
      .eq("session_id", data.sessionId);
    if (cartErr) throw new Error(cartErr.message);
    if (!rows || rows.length === 0) throw new Error("El carrito está vacío");

    const items = rows.map((r: any) => ({
      product_id: r.products?.id,
      variant_id: r.variant_id ?? null,
      color: r.product_variants?.color ?? null,
      name: r.products?.name,
      qty: r.qty,
      price: Number(r.products?.price ?? 0),
    }));

    // Validate stock before creating the order
    for (const r of rows as any[]) {
      if (r.product_variants && r.qty > r.product_variants.stock) {
        throw new Error(
          `Sin stock suficiente de ${r.products?.name}${r.product_variants.color ? ` (${r.product_variants.color})` : ""}`,
        );
      }
    }
    const total = items.reduce((sum, it) => sum + it.qty * it.price, 0);

    const { data: order, error } = await supabaseAdmin
      .from("orders")
      .insert({
        session_id: data.sessionId,
        customer_phone: data.phone,
        customer_name: data.name ?? null,
        items,
        total,
      })
      .select("id, total")
      .single();
    if (error) throw new Error(error.message);

    // Decrement stock per variant
    for (const it of items) {
      if (it.variant_id) {
        await supabaseAdmin.rpc("decrement_variant_stock", {
          _variant_id: it.variant_id,
          _qty: it.qty,
        } as never);
      }
    }

    // Clear cart
    await supabaseAdmin.from("cart_items").delete().eq("session_id", data.sessionId);

    return { orderId: order.id, total: Number(order.total), items };
  });
