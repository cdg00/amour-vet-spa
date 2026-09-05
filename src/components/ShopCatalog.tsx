import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { listProducts } from "@/lib/products.functions";
import ProductCard from "@/components/ProductCard";
import { CATEGORIES, categoryLabel } from "@/lib/categories";

interface ShopCatalogProps {
  category?: string;
}

export default function ShopCatalog({ category: initialCategory }: ShopCatalogProps) {
  const [category, setCategory] = useState<string | undefined>(initialCategory);

  useEffect(() => {
    setCategory(initialCategory);
  }, [initialCategory]);

  const fetchProducts = useServerFn(listProducts);
  const { data, isLoading } = useQuery({
    queryKey: ["products", "all"],
    queryFn: () => fetchProducts({ data: {} }),
  });

  const products = (data ?? []).filter(
    (p) => !category || p.category === category
  );

  const filterClass = (active: boolean) =>
    `px-4 py-2 text-[10px] tracking-wide-editorial uppercase border transition-colors cursor-pointer ${
      active
        ? "bg-foreground text-background border-foreground"
        : "border-border text-foreground/70 hover:border-rose-bright hover:text-rose-bright"
    }`;

  return (
    <div className="pt-32 pb-24 mx-auto max-w-7xl px-6">
      <div className="text-center mb-12">
        <p className="text-[11px] tracking-wide-editorial uppercase text-rose-bright">Tienda</p>
        <h1 className="mt-3 font-serif text-4xl md:text-5xl text-foreground">
          {category ? categoryLabel(category) : "Todas las colecciones"}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          type="button"
          onClick={() => setCategory(undefined)}
          className={filterClass(!category)}
        >
          Ver Todo
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.slug}
            type="button"
            onClick={() => setCategory(c.slug)}
            className={filterClass(category === c.slug)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-[4/5] bg-muted animate-pulse" />
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-muted-foreground">No hay productos en esta categoría.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
