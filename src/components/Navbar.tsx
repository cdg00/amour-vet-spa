import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:py-5">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2">
          <img src={logo} alt="Amor Canino" className="h-10 w-auto" />
        </button>

        {/* Desktop */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => scrollTo(l.href)}
                className="text-xs tracking-wide-editorial uppercase text-foreground/70 transition-colors hover:text-primary"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="bg-background/98 backdrop-blur-md border-b border-border px-6 pb-6 md:hidden"
          >
            <ul className="flex flex-col gap-5 pt-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-xs tracking-wide-editorial uppercase text-foreground/70 hover:text-primary"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
