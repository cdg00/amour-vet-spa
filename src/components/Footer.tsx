import { Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import { CONTACT, BRAND } from "@/lib/contact";
import { CATEGORIES } from "@/lib/categories";

export default function Footer() {
  return (
    <footer className="bg-secondary/60 border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Logo className="h-8 w-auto text-foreground" />
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {BRAND.tagline}. Diseñamos prendas y detalles para sentirte única todos los días.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm text-foreground mb-4">Tienda</h4>
            <ul className="space-y-2">
              {CATEGORIES.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/shop"
                    search={{ category: c.slug }}
                    className="text-xs text-muted-foreground hover:text-rose-bright transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin size={14} strokeWidth={1.5} className="mt-0.5 shrink-0" />
                <span>{CONTACT.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} strokeWidth={1.5} className="shrink-0" />
                <a
                  href={`tel:+${CONTACT.whatsappNumber}`}
                  className="hover:text-rose-bright transition-colors"
                >
                  {CONTACT.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm text-foreground mb-4">Medios de pago</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>· Transferencia bancaria</li>
              <li>· Efectivo</li>
            </ul>
            <p className="mt-4 text-[10px] tracking-wide-editorial uppercase text-muted-foreground">
              Coordinamos envío por WhatsApp
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border text-center">
          <p className="text-[10px] tracking-editorial text-muted-foreground">
            © {new Date().getFullYear()} {BRAND.name} · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
