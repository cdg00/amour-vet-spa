import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Trash2 } from "lucide-react";
import {
  getCart,
  removeFromCart,
  updateCartQty,
  checkoutOrder,
} from "@/lib/cart.functions";
import { CATEGORY_IMAGE, type CategorySlug } from "@/lib/categories";
import { formatARS, whatsappLink, BANK } from "@/lib/contact";
import { useSessionId } from "@/hooks/use-session-id";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Carrito · Fashion Intimate" }] }),
  component: CartPage,
});

const phoneSchema = z.string().trim().min(8).max(20).regex(/^[0-9 +()-]+$/, "Solo números");

function CartPage() {
  const sessionId = useSessionId();
  const fetchCart = useServerFn(getCart);
  const removeFn = useServerFn(removeFromCart);
  const updateFn = useServerFn(updateCartQty);
  const checkoutFn = useServerFn(checkoutOrder);
  const qc = useQueryClient();

  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart", sessionId],
    queryFn: () => fetchCart({ data: { sessionId: sessionId! } }),
    enabled: !!sessionId,
  });

  const remove = useMutation({
    mutationFn: (itemId: string) =>
      removeFn({ data: { sessionId: sessionId!, itemId } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });

  const updateQty = useMutation({
    mutationFn: ({ itemId, qty }: { itemId: string; qty: number }) =>
      updateFn({ data: { sessionId: sessionId!, itemId, qty } }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["cart"] }),
  });

  const checkout = useMutation({
    mutationFn: () =>
      checkoutFn({
        data: { sessionId: sessionId!, phone, name: name || undefined },
      }),
    onSuccess: (res) => {
      qc.invalidateQueries({ queryKey: ["cart"] });
      const lines = res.items
        .map(
          (it: any) =>
            `• ${it.qty}× ${it.name}${it.color && it.color !== "Único" ? ` — Color: ${it.color}` : ""} — ${formatARS(it.price)} c/u = ${formatARS(it.price * it.qty)}`,
        )
        .join("\n");
      const msg =
        `Hola Fashion Intimate, hago el siguiente pedido:\n\n` +
        `Pedido #${res.orderId.slice(0, 8)}\n\n` +
        `${lines}\n\n` +
        `Total a pagar: ${formatARS(res.total)}\n\n` +
        `Mis datos:\n` +
        `${name ? `Nombre: ${name}\n` : ""}` +
        `Teléfono: ${phone}\n` +
        `${address ? `Dirección/Entrega: ${address}\n` : ""}` +
        `\nDatos bancarios para transferencia:\n` +
        `Alias: ${BANK.alias}\n` +
        `Titular: ${BANK.holder}\n\n` +
        `Una vez realizada la transferencia, envío el comprobante por este chat para confirmar la compra.`;
      window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    },
    onError: (e) => toast.error(e.message ?? "No se pudo finalizar"),
  });

  const items = cart ?? [];
  const total = items.reduce(
    (s, l) => s + l.qty * Number(l.product?.price ?? 0),
    0,
  );

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = phoneSchema.safeParse(phone);
    if (!r.success) return toast.error(r.error.issues[0]?.message ?? "Teléfono inválido");
    if (items.length === 0) return toast.error("El carrito está vacío");
    checkout.mutate();
  }

  return (
    <div className="pt-32 pb-24 mx-auto max-w-5xl px-6">
      <div className="text-center mb-12">
        <p className="text-[11px] tracking-wide-editorial uppercase text-rose-bright">Carrito</p>
        <h1 className="mt-3 font-serif text-4xl text-foreground">Tu pedido</h1>
      </div>

      {isLoading ? (
        <p className="text-center text-muted-foreground">Cargando…</p>
      ) : items.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">Tu carrito está vacío.</p>
          <Link
            to="/shop"
            className="mt-6 inline-block border border-foreground px-6 py-3 text-[11px] tracking-wide-editorial uppercase hover:bg-foreground hover:text-background transition-colors"
          >
            Ir a la tienda
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-[1fr_360px] gap-12">
          <div className="divide-y divide-border">
            {items.map((line) => {
              const img = CATEGORY_IMAGE[(line.product?.category ?? "lenceria") as CategorySlug];
              return (
                <div key={line.id} className="py-6 flex gap-5">
                  <img src={img} alt="" className="h-24 w-20 object-cover bg-muted" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-base text-foreground">
                        {line.product?.name ?? "Producto"}
                      </h3>
                      {line.color && line.color !== "Único" && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Color: {line.color}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">
                        {formatARS(Number(line.product?.price ?? 0))} × {line.qty} ={" "}
                        <span className="text-foreground">
                          {formatARS(Number(line.product?.price ?? 0) * line.qty)}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-border text-sm">
                        <button
                          onClick={() => updateQty.mutate({ itemId: line.id, qty: Math.max(1, line.qty - 1) })}
                          className="px-3 py-1 hover:bg-muted"
                        >−</button>
                        <span className="px-3">{line.qty}</span>
                        <button
                          onClick={() => updateQty.mutate({ itemId: line.id, qty: Math.min(line.variant_stock ?? 99, line.qty + 1) })}
                          className="px-3 py-1 hover:bg-muted"
                        >+</button>
                      </div>
                      <button
                        onClick={() => remove.mutate(line.id)}
                        aria-label="Eliminar"
                        className="text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="bg-secondary/40 p-6 h-fit">
            <h2 className="font-serif text-xl text-foreground">Resumen</h2>
            <div className="mt-4 flex justify-between text-sm">
              <span className="text-muted-foreground">Total</span>
              <span className="font-medium text-foreground">{formatARS(total)}</span>
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
              Coordinamos pago (transferencia o efectivo) y envío por WhatsApp.
            </p>

            <form onSubmit={submit} className="mt-6 space-y-3">
              <input
                type="text"
                placeholder="Tu nombre (opcional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-rose-bright"
              />
              <input
                type="tel"
                inputMode="tel"
                placeholder="Tu número de celular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-rose-bright"
              />
              <input
                type="text"
                placeholder="Dirección / Entrega (opcional)"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-rose-bright"
              />
              <p className="text-[11px] text-muted-foreground">
                Pago por transferencia — Alias: {BANK.alias} · Titular: {BANK.holder}
              </p>
              <button
                type="submit"
                disabled={checkout.isPending}
                className="w-full bg-rose-bright text-rose-bright-foreground py-4 text-[11px] tracking-wide-editorial uppercase hover:opacity-90 disabled:opacity-60 transition-opacity"
              >
                {checkout.isPending ? "Procesando…" : "Confirmar pedido por WhatsApp"}
              </button>
            </form>
          </aside>
        </div>
      )}
    </div>
  );
}
