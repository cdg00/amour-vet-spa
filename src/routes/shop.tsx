import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import ShopCatalog from "@/components/ShopCatalog";

const search = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/shop")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Fashion Íntima - Tienda de Lencería · Catálogo" },
      { name: "description", content: "Catálogo oficial de Fashion Íntima. Lencería, indumentaria y accesorios." },
      { property: "og:title", content: "Fashion Íntima - Tienda de Lencería" },
      { property: "og:description", content: "Catálogo oficial de Fashion Íntima. Lencería, indumentaria y accesorios." },
      { property: "og:image", content: "https://fashionnintimate.lovable.app/social-fashion-intima.jpg" },
      { name: "twitter:image", content: "https://fashionnintimate.lovable.app/social-fashion-intima.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { category } = Route.useSearch();
  return <ShopCatalog category={category} />;
}
