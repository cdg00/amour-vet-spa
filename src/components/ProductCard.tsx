import { Link } from "@tanstack/react-router";
import { CATEGORY_IMAGE, type CategorySlug } from "@/lib/categories";
import { formatARS } from "@/lib/contact";
import type { Product } from "@/lib/products.functions";

export default function ProductCard({ product }: { product: Product }) {
  const img = CATEGORY_IMAGE[product.category as CategorySlug];
  return (
    <Link to="/product/$id" params={{ id: product.id }} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={img}
          alt={product.name}
          width={800}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-90"
        />
      </div>
      <div className="mt-3">
        <h3 className="font-serif text-base text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-foreground/70">{formatARS(product.price)}</p>
      </div>
    </Link>
  );
}
