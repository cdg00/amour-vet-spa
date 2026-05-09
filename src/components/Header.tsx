import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { CATEGORIES } from "@/lib/categories";
import { useSessionId } from "@/hooks/use-session-id";
import { getCart } from "@/lib/cart.functions";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sessionId = useSessionId();
  const fetchCart = useServerFn(getCart);

  const { data: cart } = useQuery({
    queryKey: ["cart", sessionId],
    queryFn: () => fetchCart({ data: { sessionId: sessionId! } }),
    enabled: !!sessionId,
    refetchOnWindowFocus: true,
  });
  const count = (cart ?? []).reduce((s, l) => s + l.qty, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-lg text-foreground" aria-label="Inicio">
          Fashion Intimate
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to="/shop"
              search={{ category: c.slug }}
              className="text-[11px] tracking-wide-editorial uppercase text-foreground/70 hover:text-rose-bright transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Buscar"
            className="text-foreground/70 hover:text-rose-bright transition-colors hidden sm:block"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>
          <Link
            to="/cart"
            aria-label="Carrito"
            className="relative text-foreground/70 hover:text-rose-bright transition-colors"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-rose-bright px-1 text-[10px] font-medium text-rose-bright-foreground">
                {count}
              </span>
            )}
          </Link>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/shop"
                    search={{ category: c.slug }}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-xs tracking-wide-editorial uppercase text-foreground/70 hover:text-rose-bright"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
