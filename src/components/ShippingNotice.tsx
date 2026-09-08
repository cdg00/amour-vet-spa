import { Truck, ReceiptText, MapPin } from "lucide-react";

export default function ShippingNotice() {
  return (
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-[11px] tracking-wide-editorial uppercase text-rose-bright">
          Aclaración importante
        </p>
        <h2 className="mt-3 font-serif text-2xl md:text-3xl text-foreground">
          Envíos y confirmación de compra
        </h2>

        <div className="mt-10 grid sm:grid-cols-3 gap-8 text-foreground/80">
          <div className="flex flex-col items-center gap-3">
            <Truck size={26} strokeWidth={1.3} />
            <p className="text-sm">
              Hacemos envíos en <strong>Villa Cacique</strong>, <strong>Barker</strong> y{" "}
              <strong>Tandil</strong>.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <MapPin size={26} strokeWidth={1.3} />
            <p className="text-sm">Coordinamos un punto de entrega por WhatsApp.</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ReceiptText size={26} strokeWidth={1.3} />
            <p className="text-sm">
              Es obligatorio enviar el <strong>comprobante de la compra</strong> al WhatsApp para
              confirmar el pedido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
