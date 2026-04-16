import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-warm py-12">
      <Separator className="mx-auto mb-10 max-w-6xl bg-border/40" />
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-serif text-lg text-primary">Amor Canino</p>
        <p className="mt-2 text-[11px] tracking-editorial text-muted-foreground">
          Pet Shop & Clínica Veterinaria · Todos los derechos reservados © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
