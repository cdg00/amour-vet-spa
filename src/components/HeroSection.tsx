import { motion } from "framer-motion";
import heroImage from "@/assets/hero-clinic.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Interior de clínica veterinaria de lujo"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 text-xs tracking-wide-editorial uppercase text-primary"
        >
          Pet Shop & Clínica Veterinaria
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl leading-tight text-foreground md:text-7xl md:leading-tight"
        >
          Amor Canino
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground tracking-editorial"
        >
          Cuidado veterinario integral con la excelencia y calidez que tu mascota merece.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-10"
        >
          <a
            href="#servicios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servicios")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block border border-primary bg-primary px-8 py-3 text-xs tracking-wide-editorial uppercase text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
          >
            Nuestros Servicios
          </a>
        </motion.div>
      </div>
    </section>
  );
}
