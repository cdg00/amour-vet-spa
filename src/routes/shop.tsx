import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { listProducts } from "@/lib/products.functions";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, categoryLabel } from "@/lib/categories";
import { Link } from "@tanstack/react-router";

const search = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Tienda · Fashion Intimate" },
      { name: "description", content: "Catálogo completo de lencería, bombachas, medias, maquillaje, accesorios y más." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { category } = Route.useSearch();
  const fetchProducts = useServerFn(listProducts);
  const { data, isLoading } = useQuery({
    queryKey: ["products", category ?? "all"],
    queryFn: () => fetchProducts({ data: { category } }),
  });

  return (
    <div className="pt-32 pb-24 mx-auto max-w-7xl px-6">
      <div className="text-center mb-12">
        <p className="text-[11px] tracking-wide-editorial uppercase text-rose-bright">Tienda</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-foreground">
          {category ? categoryLabel(category) : "Todas las colecciones"}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <Link
          to="/shop"
          className={`px-4 py-2 text-[10px] tracking-wide-editorial uppercase border transition-colors ${
            !category
              ? "bg-foreground text-background border-foreground"
              : "border-border text-foreground/70 hover:border-rose-bright hover:text-rose-bright"
          }`}
        >
          Todo
        </Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            to="/shop"
            search={{ category: c.slug }}
            className={`px-4 py-2 text-[10px] tracking-wide-editorial uppercase border transition-colors ${
              category === c.slug
                ? "bg-foreground text-background border-foreground"
                : "border-border text-foreground/70 hover:border-rose-bright hover:text-rose-bright"
            }`}
          >
            {c.label}
          </Link>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-muted animate-pulse" />
          ))}
        </div>
      ) : (data ?? []).length === 0 ? (
        <p className="text-center text-muted-foreground">No hay productos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {(data ?? []).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
