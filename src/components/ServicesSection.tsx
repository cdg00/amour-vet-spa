import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "@/components/ui/separator";

const categories = [
  {
    title: "Atención Médica Primaria",
    description:
      "Consultas de rutina, chequeos preventivos, vacunación, desparasitación interna y externa, y emisión de certificados de salud.",
    details: ["Consultas generales", "Vacunación", "Desparasitación", "Certificados de salud"],
  },
  {
    title: "Diagnóstico y Laboratorio",
    description:
      "Análisis de sangre, orina y heces, ecografías abdominales y radiografías para un diagnóstico preciso.",
    details: ["Laboratorio clínico", "Rayos X", "Ecografía", "Análisis especializados"],
  },
  {
    title: "Cirugía y Especialidades",
    description:
      "Cirugía general y ortopédica, dermatología, neurología y traumatología con equipos de última generación.",
    details: ["Cirugía general", "Ortopedia", "Dermatología", "Neurología"],
  },
  {
    title: "Hospitalización",
    description:
      "Internación con monitoreo continuo, cuidados intensivos y seguimiento post-operatorio personalizado.",
    details: ["Cuidados intensivos", "Monitoreo 24h", "Post-operatorio", "Terapia de fluidos"],
  },
  {
    title: "Servicios Complementarios",
    description:
      "Odontología veterinaria, farmacia interna, estética canina y felina, y programas de medicina preventiva.",
    details: ["Odontología", "Farmacia", "Estética", "Medicina preventiva"],
  },
];

function ServiceCard({ category, index }: { category: (typeof categories)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="group">
        <span className="text-[10px] tracking-wide-editorial uppercase text-muted-foreground">
          0{index + 1}
        </span>
        <h3 className="mt-2 font-serif text-2xl text-foreground">{category.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {category.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {category.details.map((d) => (
            <li
              key={d}
              className="rounded-sm bg-secondary px-3 py-1.5 text-[11px] tracking-editorial uppercase text-secondary-foreground"
            >
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="servicios" className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs tracking-wide-editorial uppercase text-primary">Lo que ofrecemos</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">Servicios</h2>
        </motion.div>

        <Separator className="mx-auto mt-10 mb-16 max-w-16 bg-primary/30" />

        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {categories.map((cat, i) => (
            <ServiceCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
