import { CreditCard, Banknote, MapPin } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export default function PaymentLocation() {
  return (
    <section className="py-20 bg-primary/30">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground">
          Medios de pago y ubicación
        </h3>

        <div className="mt-10 grid sm:grid-cols-3 gap-8 text-foreground/80">
          <div className="flex flex-col items-center gap-3">
            <CreditCard size={28} strokeWidth={1.3} />
            <p className="text-sm">Transferencia bancaria</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Banknote size={28} strokeWidth={1.3} />
            <p className="text-sm">Efectivo</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin size={28} strokeWidth={1.3} />
            <p className="text-sm">{CONTACT.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
