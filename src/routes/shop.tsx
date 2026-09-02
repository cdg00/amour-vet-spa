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
      { title: "Tienda · Fashion Intimate" },
      { name: "description", content: "Catálogo completo de lencería, bombachas, medias, maquillaje, accesorios y más." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const { category } = Route.useSearch();
  return <ShopCatalog category={category} />;
}
