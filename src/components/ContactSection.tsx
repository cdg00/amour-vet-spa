import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Av. Principal 1234, Ciudad",
  },
  {
    icon: Clock,
    label: "Horarios",
    value: "Lun–Sáb: 8:00–20:00 · Dom: 9:00–14:00",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 11 1234-5678",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contacto" className="py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs tracking-wide-editorial uppercase text-primary">Estamos cerca</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">Contacto</h2>
        </motion.div>

        <Separator className="mx-auto mt-10 mb-14 max-w-16 bg-primary/30" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid gap-10 md:grid-cols-3"
        >
          {info.map((item) => (
            <div key={item.label} className="text-center">
              <item.icon size={20} className="mx-auto mb-3 text-primary" strokeWidth={1.5} />
              <p className="text-[10px] tracking-wide-editorial uppercase text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-foreground">{item.value}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <Button
            asChild
            className="rounded-sm bg-primary px-10 py-6 text-xs tracking-wide-editorial uppercase text-primary-foreground hover:bg-burgundy-light"
          >
            <a
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
            >
              Conectar a WhatsApp
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
