import lenceria from "@/assets/cat-lenceria.jpg";
import bombachas from "@/assets/cat-bombachas.jpg";
import medias from "@/assets/cat-medias.jpg";
import maquillaje from "@/assets/cat-maquillaje.jpg";
import accesorios from "@/assets/cat-accesorios.jpg";
import boxers from "@/assets/cat-boxers.jpg";
const mallas = "/products/malla-1.jpeg";

export type CategorySlug =
  | "lenceria"
  | "bombachas"
  | "medias"
  | "maquillaje"
  | "accesorios"
  | "boxers"
  | "mallas";

export const CATEGORIES: {
  slug: CategorySlug;
  label: string;
  subtitle: string;
  image: string;
}[] = [
  { slug: "lenceria", label: "Lencería", subtitle: "Conjuntos", image: lenceria },
  { slug: "bombachas", label: "Bombachas", subtitle: "Cola less · Vedetinas", image: bombachas },
  { slug: "medias", label: "Medias", subtitle: "Soquetes · 3/4", image: medias },
  { slug: "maquillaje", label: "Maquillaje", subtitle: "Belleza", image: maquillaje },
  { slug: "accesorios", label: "Accesorios", subtitle: "Detalles", image: accesorios },
  { slug: "boxers", label: "Boxer", subtitle: "Hombre", image: boxers },
  { slug: "mallas", label: "Mallas", subtitle: "Verano", image: mallas },
];

export const CATEGORY_IMAGE: Record<CategorySlug, string> = {
  lenceria, bombachas, medias, maquillaje, accesorios, boxers, mallas,
};

export function categoryLabel(slug: string): string {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
