import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type Variant = {
  id: string;
  color: string;
  color_hex: string | null;
  stock: number;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string | null;
  stock: number;
  featured: boolean;
  image_url: string | null;
  variants?: Variant[];
};

const SELECT = "id,name,category,price,description,stock,featured,image_url";

export const listProducts = createServerFn({ method: "GET" })
  .inputValidator((d: { category?: string } | undefined) => d ?? {})
  .handler(async ({ data }) => {
    const q = supabaseAdmin
      .from("products")
      .select(SELECT)
      .eq("active", true)
      .order("created_at", { ascending: false });
    if (data.category) q.eq("category", data.category as never);
    const { data: rows, error } = await q;
    if (error) throw new Error(error.message);
    return (rows ?? []) as Product[];
  });

export const listFeatured = createServerFn({ method: "GET" }).handler(async () => {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select(SELECT)
    .eq("active", true)
    .eq("featured", true)
    .limit(8);
  if (error) throw new Error(error.message);
  return (data ?? []) as Product[];
});

export const getProduct = createServerFn({ method: "GET" })
  .inputValidator((d) => z.object({ id: z.string().uuid() }).parse(d))
  .handler(async ({ data }) => {
    const { data: row, error } = await supabaseAdmin
      .from("products")
      .select(
        SELECT +
          ",product_variants(id,color,color_hex,stock,active)",
      )
      .eq("id", data.id)
      .eq("active", true)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row) return null;
    const r = row as any;
    const variants = ((r.product_variants ?? []) as any[])
      .filter((v) => v.active)
      .map((v) => ({
        id: v.id,
        color: v.color,
        color_hex: v.color_hex,
        stock: v.stock,
      }));
    delete r.product_variants;
    return { ...r, variants } as Product;
  });
