import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { subscribeNewsletter } from "@/lib/newsletter.functions";

const schema = z.object({
  phone: z.string().trim().min(8).max(20).regex(/^[0-9 +()-]+$/, "Solo números"),
});

export default function NewsletterWhatsApp() {
  const [phone, setPhone] = useState("");
  const subscribe = useServerFn(subscribeNewsletter);
  const m = useMutation({
    mutationFn: (p: string) => subscribe({ data: { phone: p } }),
    onSuccess: () => {
      toast.success("¡Listo! Te vamos a escribir por WhatsApp con las novedades.");
      setPhone("");
    },
    onError: (e) => toast.error(e.message ?? "No pudimos guardar tu número"),
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse({ phone });
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Número inválido");
      return;
    }
    m.mutate(r.data.phone);
  }

  return (
    <section className="py-20 bg-primary/30">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground">
          Recibí nuestras novedades en tu WhatsApp
        </h3>
        <p className="mt-3 text-sm text-foreground/70">
          Lanzamientos, restock y promos exclusivas.
        </p>
        <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="tel"
            inputMode="tel"
            placeholder="Ingresar número de celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1 bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-rose-bright transition-colors"
          />
          <button
            type="submit"
            disabled={m.isPending}
            className="bg-rose-bright text-rose-bright-foreground px-6 py-3 text-[11px] tracking-wide-editorial uppercase hover:opacity-90 disabled:opacity-60 transition-opacity"
          >
            {m.isPending ? "Enviando…" : "Suscribirme"}
          </button>
        </form>
      </div>
    </section>
  );
}
