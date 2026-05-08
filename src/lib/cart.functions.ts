import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const sessionSchema = z.string().min(8).max(100);

export type CartLine = {
  id: string;
  product_id: string;
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
      .select("id, product_id, qty, products:products(id,name,category,price)")
      .eq("session_id", data.sessionId)
      .order("created_at", { ascending: false });
    if (error) throw new Error(error.message);
    return (rows ?? []).map((r: any) => ({
      id: r.id,
      product_id: r.product_id,
      qty: r.qty,
      product: r.products,
    })) as CartLine[];
  });

export const addToCart = createServerFn({ method: "POST" })
  .inputValidator((d) =>
    z.object({
      sessionId: sessionSchema,
      productId: z.string().uuid(),
      qty: z.number().int().min(1).max(99),
    }).parse(d),
  )
  .handler(async ({ data }) => {
    // Upsert: if exists, increment qty
    const { data: existing } = await supabaseAdmin
      .from("cart_items")
      .select("id, qty")
      .eq("session_id", data.sessionId)
      .eq("product_id", data.productId)
      .maybeSingle();

    if (existing) {
      const newQty = Math.min(99, existing.qty + data.qty);
      const { error } = await supabaseAdmin
        .from("cart_items")
        .update({ qty: newQty })
        .eq("id", existing.id);
      if (error) throw new Error(error.message);
    } else {
      const { error } = await supabaseAdmin.from("cart_items").insert({
        session_id: data.sessionId,
        product_id: data.productId,
        qty: data.qty,
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
      .select("qty, products:products(id,name,price)")
      .eq("session_id", data.sessionId);
    if (cartErr) throw new Error(cartErr.message);
    if (!rows || rows.length === 0) throw new Error("El carrito está vacío");

    const items = rows.map((r: any) => ({
      product_id: r.products?.id,
      name: r.products?.name,
      qty: r.qty,
      price: Number(r.products?.price ?? 0),
    }));
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

    // Clear cart
    await supabaseAdmin.from("cart_items").delete().eq("session_id", data.sessionId);

    return { orderId: order.id, total: Number(order.total), items };
  });
