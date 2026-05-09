import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-lingerie.jpg";
import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lencería de encaje sobre seda"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-background">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[11px] tracking-wide-editorial uppercase text-primary"
        >
          Lencería de lujo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-4 font-serif text-5xl leading-[1.05] md:text-7xl text-balance"
        >
          Fashion Intimate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-background/80 tracking-editorial"
        >
          Diseño íntimo, calce perfecto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10"
        >
          <Link
            to="/shop"
            className="inline-block border border-background bg-background/10 backdrop-blur-sm px-10 py-3.5 text-[11px] tracking-wide-editorial uppercase text-background transition-all hover:bg-background hover:text-foreground"
          >
            Ver Colección
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          className="mt-10 flex justify-center"
        >
          <Logo className="h-20 w-20 md:h-24 md:w-24" />
        </motion.div>
      </div>
    </section>
  );
}
