import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/categories";

export default function CategoryGrid() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-wide-editorial uppercase text-rose-bright">
            Colecciones
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-foreground">
            Explorá por categoría
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                to="/shop"
                search={{ category: c.slug }}
                className="group block"
              >
                <div className="relative aspect-square overflow-hidden bg-muted">
                  <img
                    src={c.image}
                    alt={c.label}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="font-serif text-lg text-foreground">{c.label}</h3>
                  <p className="text-[10px] tracking-wide-editorial uppercase text-muted-foreground mt-1">
                    {c.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
