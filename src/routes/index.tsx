import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import ShopCatalog from "@/components/ShopCatalog";

const search = z.object({
  category: z.string().optional(),
});

export const Route = createFileRoute("/")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Tienda · Fashion Intimate" },
      { name: "description", content: "Catálogo completo de lencería, bombachas, medias, maquillaje, accesorios y más." },
      { property: "og:title", content: "Tienda · Fashion Intimate" },
      { property: "og:description", content: "Catálogo completo de lencería, bombachas, medias, maquillaje, accesorios y más." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomeShopPage,
});

function HomeShopPage() {
  const { category } = Route.useSearch();
  return <ShopCatalog category={category} />;
}
