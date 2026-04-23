import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Amor Canino — Pet Shop & Clínica Veterinaria" },
      { name: "description", content: "Clínica veterinaria boutique con servicios integrales de salud animal. Consultas, cirugía, laboratorio, hospitalización y más." },
      { name: "author", content: "Amor Canino" },
      { property: "og:title", content: "Amor Canino — Pet Shop & Clínica Veterinaria" },
      { property: "og:description", content: "Clínica veterinaria boutique con servicios integrales de salud animal. Consultas, cirugía, laboratorio, hospitalización y más." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Amor Canino — Pet Shop & Clínica Veterinaria" },
      { name: "twitter:description", content: "Clínica veterinaria boutique con servicios integrales de salud animal. Consultas, cirugía, laboratorio, hospitalización y más." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/be5858b4-7eea-4d51-83aa-801148f1e956/id-preview-d85a6dd7--9ebe0526-8d4a-4085-9374-b4be342d9a67.lovable.app-1776310570789.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/be5858b4-7eea-4d51-83aa-801148f1e956/id-preview-d85a6dd7--9ebe0526-8d4a-4085-9374-b4be342d9a67.lovable.app-1776310570789.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
