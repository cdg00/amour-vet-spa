CREATE TABLE public.product_variants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES public.products(id) ON DELETE CASCADE,
  color text NOT NULL,
  color_hex text,
  stock integer NOT NULL DEFAULT 1,
  active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (product_id, color)
);

GRANT SELECT ON public.product_variants TO anon;
GRANT SELECT ON public.product_variants TO authenticated;
GRANT ALL ON public.product_variants TO service_role;

ALTER TABLE public.product_variants ENABLE ROW LEVEL SECURITY;

CREATE POLICY product_variants_public_read ON public.product_variants
  FOR SELECT USING (active = true);

ALTER TABLE public.cart_items
  ADD COLUMN variant_id uuid REFERENCES public.product_variants(id) ON DELETE CASCADE;

INSERT INTO public.product_variants (product_id, color, stock)
SELECT id, 'Único', GREATEST(stock, 1) FROM public.products;

CREATE OR REPLACE FUNCTION public.decrement_variant_stock(_variant_id uuid, _qty integer)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_stock integer;
BEGIN
  UPDATE public.product_variants
  SET stock = GREATEST(0, stock - _qty)
  WHERE id = _variant_id
  RETURNING stock INTO new_stock;
  RETURN new_stock;
END;
$$;