import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { getProduct } from "@/lib/products.functions";
import { addToCart } from "@/lib/cart.functions";
import { CATEGORY_IMAGE, type CategorySlug, categoryLabel } from "@/lib/categories";
import { formatARS } from "@/lib/contact";
import { useSessionId } from "@/hooks/use-session-id";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const fetchProduct = useServerFn(getProduct);
  const add = useServerFn(addToCart);
  const sessionId = useSessionId();
  const qc = useQueryClient();
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const [variantId, setVariantId] = useState<string | null>(null);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct({ data: { id } }),
  });

  const m = useMutation({
    mutationFn: () =>
      add({
        data: {
          sessionId: sessionId!,
          productId: id,
          ...(selected ? { variantId: selected.id } : {}),
          qty,
        },
      }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Agregado al carrito");
    },
    onError: (e) => toast.error(e.message ?? "No se pudo agregar"),
  });

  if (isLoading) {
    return <div className="pt-32 pb-24 text-center text-muted-foreground">Cargando…</div>;
  }
  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <p className="text-muted-foreground">Producto no encontrado.</p>
        <Link to="/shop" className="mt-4 inline-block underline text-rose-bright">Volver a la tienda</Link>
      </div>
    );
  }

  const variants = product.variants ?? [];
  const selected =
    variants.find((v) => v.id === variantId) ??
    variants.find((v) => v.stock > 0) ??
    variants[0] ??
    null;
  const maxQty = selected ? Math.max(1, selected.stock) : 99;
  const soldOut = !!selected && selected.stock <= 0;
  const showColors = variants.length > 1 || (variants[0]?.color ?? "Único") !== "Único";

  const img = product.image_url || CATEGORY_IMAGE[product.category as CategorySlug];

  return (
    <div className="pt-28 pb-24 mx-auto max-w-6xl px-6">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
        <div className="aspect-[4/5] overflow-hidden bg-muted">
          <img src={img} alt={product.name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[10px] tracking-wide-editorial uppercase text-rose-bright">
            {categoryLabel(product.category)}
          </p>
          <h1 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">{product.name}</h1>
          <p className="mt-4 text-2xl text-foreground">{formatARS(product.price)}</p>
          {product.description && (
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
          )}

          {showColors && (
            <div className="mt-8">
              <span className="text-[10px] tracking-wide-editorial uppercase text-muted-foreground">
                Color
              </span>
              <div className="mt-3 flex flex-wrap gap-2">
                {variants.map((v) => {
                  const out = v.stock <= 0;
                  const active = selected?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      disabled={out}
                      onClick={() => {
                        setVariantId(v.id);
                        setQty(1);
                      }}
                      className={`flex items-center gap-2 border px-3 py-2 text-xs transition-colors ${
                        active
                          ? "border-rose-bright text-foreground"
                          : "border-border text-foreground/70 hover:border-foreground/40"
                      } ${out ? "opacity-45 line-through cursor-not-allowed" : ""}`}
                    >
                      {v.color_hex && (
                        <span
                          className="h-4 w-4 rounded-full border border-border"
                          style={{ backgroundColor: v.color_hex }}
                        />
                      )}
                      {v.color}
                      {out && <span className="ml-1 no-underline">· Agotado</span>}
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                {soldOut
                  ? "Sin stock en este color"
                  : selected
                    ? `${selected.stock} disponible${selected.stock === 1 ? "" : "s"}`
                    : ""}
              </p>
            </div>
          )}

          <div className="mt-8 flex items-center gap-3">
            <span className="text-[10px] tracking-wide-editorial uppercase text-muted-foreground">
              Cantidad
            </span>
            <div className="flex items-center border border-border">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="px-3 py-2 hover:bg-muted"
                aria-label="Restar"
              >−</button>
              <span className="px-4 text-sm">{qty}</span>
              <button
                onClick={() => setQty(Math.min(maxQty, qty + 1))}
                className="px-3 py-2 hover:bg-muted"
                aria-label="Sumar"
              >+</button>
            </div>
          </div>

          <button
            onClick={() => m.mutate()}
            disabled={!sessionId || m.isPending || soldOut}
            className="mt-8 bg-foreground text-background px-8 py-4 text-[11px] tracking-wide-editorial uppercase hover:bg-rose-bright hover:text-rose-bright-foreground transition-colors disabled:opacity-60"
          >
            {soldOut ? "Agotado" : m.isPending ? "Agregando…" : "Agregar al carrito"}
          </button>

          <button
            onClick={() => navigate({ to: "/cart" })}
            className="mt-3 text-[11px] tracking-wide-editorial uppercase text-foreground/60 hover:text-rose-bright"
          >
            Ir al carrito →
          </button>
        </div>
      </div>
    </div>
  );
}
