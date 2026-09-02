import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { listFeatured } from "@/lib/products.functions";
import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  const fetchFeatured = useServerFn(listFeatured);
  const { data, isLoading } = useQuery({
    queryKey: ["featured"],
    queryFn: () => fetchFeatured(),
  });

  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] tracking-wide-editorial uppercase text-rose-bright">
              Destacados
            </p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">
              Nuestra selección
            </h2>
          </div>
          <Link
            to="/"
            className="hidden sm:inline-block text-[11px] tracking-wide-editorial uppercase text-foreground/70 hover:text-rose-bright border-b border-foreground/30 pb-1"
          >
            Ver todo
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="aspect-[4/5] bg-muted animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
            {(data ?? []).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
