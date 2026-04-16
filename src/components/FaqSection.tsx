import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const faqs = [
  {
    q: "¿Necesito agendar cita previa?",
    a: "Recomendamos agendar cita para garantizar atención inmediata. Sin embargo, aceptamos emergencias sin cita las 24 horas.",
  },
  {
    q: "¿Qué incluye el chequeo preventivo?",
    a: "Incluye examen físico completo, evaluación de peso y condición corporal, revisión de oídos, ojos y boca, auscultación cardiopulmonar y recomendaciones de vacunación y desparasitación.",
  },
  {
    q: "¿Atienden emergencias fuera de horario?",
    a: "Sí, contamos con servicio de emergencias 24/7. Comunícate por WhatsApp para coordinar la atención inmediata.",
  },
  {
    q: "¿Cuáles son las formas de pago aceptadas?",
    a: "Aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias. También ofrecemos planes de pago para cirugías programadas.",
  },
  {
    q: "¿Puedo quedarme con mi mascota durante la hospitalización?",
    a: "Permitimos visitas en horarios establecidos. Nuestro equipo te mantendrá informado con reportes diarios sobre la evolución de tu mascota.",
  },
];

export default function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="faq" className="bg-warm py-28 md:py-36">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-xs tracking-wide-editorial uppercase text-primary">Resolvemos tus dudas</p>
          <h2 className="mt-3 font-serif text-4xl text-foreground md:text-5xl">
            Preguntas Frecuentes
          </h2>
        </motion.div>

        <Separator className="mx-auto mt-10 mb-12 max-w-16 bg-primary/30" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-serif text-base font-normal hover:text-primary hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
