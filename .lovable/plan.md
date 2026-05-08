ns# Plan: Fashion Intimate — Tienda de lencería de lujo

Reemplazo completo del sitio actual (Amor Canino) por una tienda e-commerce minimalista estilo Apple, con carrito funcional y persistencia en Lovable Cloud.

## 1. Identidad visual

- **Paleta** (en `src/styles.css`, oklch):
  - Fondo: blanco seda `oklch(0.99 0.003 20)`
  - Primario: rosa pastel `oklch(0.85 0.06 15)`
  - Acento: rosa brillante (botón WhatsApp) `oklch(0.72 0.15 10)`
  - Gris suave: `oklch(0.55 0.01 280)`
  - Borde: `oklch(0.93 0.005 20)`
- **Tipografía**: Playfair Display (serif para titulares) + Inter (cuerpo)
- **Logo**: monograma "FI" minimalista en SVG (entrelazado, serif)

## 2. Backend (Lovable Cloud)

Activar Lovable Cloud y crear:

- `products` (id, name, category, price, image_url, description, stock, active)
- `cart_items` (id, session_id, product_id, qty, created_at) — RLS abierta por session_id en cookie
- `orders` (id, session_id, customer_phone, items jsonb, total, status, created_at)
- `subscribers` (id, phone, created_at) — para newsletter WhatsApp

Datos seed: 3-4 productos por categoría con placeholders neutros.

## 3. Estructura de rutas (TanStack)

```
src/routes/
  __root.tsx          (header/footer compartidos)
  index.tsx           (home: hero + categorías + destacados + testimonios)
  shop.tsx            (catálogo con filtro por categoría via query)
  product.$id.tsx     (detalle producto + agregar al carrito)
  cart.tsx            (carrito + checkout vía WhatsApp)
```

## 4. Componentes clave

- `Header`: logo FI a la izq, menú central (Lencería, Bombachas, Medias, Maquillaje, Accesorios, Boxers, Bufandas), ícono lupa + carrito con contador a la der.
- `HeroSection`: imagen oscurecida overlay, título serif gigante, botón "Ver Colección".
- `CategoryGrid`: 7 tarjetas circulares/cuadradas con hover suave.
- `FeaturedProducts`: grid 4 columnas, hover aclara imagen.
- `Testimonials`: 3 frases cortas en serif itálico.
- `NewsletterWhatsApp`: input celular con validación (Zod) → guarda en `subscribers`.
- `Footer`: ubicación (Barker, Villa Cacique, Tandil), tel 2281 475723, métodos de pago (transferencia/efectivo) en íconos grises, mapa minimalista (placeholder).
- `WhatsAppFloat`: botón rosa flotante (no verde estándar), abre chat al +54 9 2281 475723.
- `CartDrawer` o página `/cart`: lista items, total, botón "Finalizar pedido por WhatsApp" que arma mensaje con el detalle.

## 5. Carrito (server functions)

- `addToCart`, `getCart`, `updateQty`, `removeItem`, `clearCart` en `src/lib/cart.functions.ts`
- Identificación por `session_id` en cookie httpOnly (sin login requerido)
- Checkout: crea registro en `orders` y redirige a `wa.me/5492281475723?text=...` con detalle

## 6. Imágenes placeholder

Genero con IA imágenes art directed low-key elegantes (estilo editorial):
- 1 hero (encaje delicado low key)
- 7 imágenes de categoría (cuadradas, neutras y estéticas)

## 7. SEO

`head()` por ruta con titles/descriptions específicas. Idioma `es`. og:image del hero.

## Detalles técnicos

- Validación Zod en todas las entradas (teléfono argentino, qty 1-99).
- RLS: `cart_items` y `subscribers` insertables por anon; `products` solo lectura pública; `orders` insert anon, sin select público.
- WhatsApp: número configurable en una constante `src/lib/contact.ts`.
- Eliminar componentes viejos: `HeroSection.tsx`, `Navbar.tsx`, `ServicesSection.tsx`, `FaqSection.tsx`, `ContactSection.tsx`, `WhatsAppButton.tsx`, `Footer.tsx`, `assets/hero-clinic.jpg`, `assets/logo.png`.

¿Procedo con esta implementación?
