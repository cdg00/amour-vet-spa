// Fotos adicionales por producto (galería). Clave = id del producto.
export const PRODUCT_GALLERY: Record<string, string[]> = {
  // Cola less de algodón (talle 3XL) — 2 fotos
  "924cf1dc-f038-47e7-be99-9a6a309d63f3": [
    "/products/colaless-3xl-a.jpeg",
    "/products/colaless-3xl-b.jpeg",
  ],
  // Medias 3/4 elemento — fotos de los colores
  "11111111-0000-4000-8000-0000000000a5": [
    "/products/medias-34-elemento-1.jpeg",
    "/products/medias-34-elemento-2.jpeg",
    "/products/medias-34-elemento-3.jpeg",
  ],
};

export function galleryFor(productId: string, fallback: string): string[] {
  const g = PRODUCT_GALLERY[productId];
  return g && g.length > 0 ? g : [fallback];
}
