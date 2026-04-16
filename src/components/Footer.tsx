import { Separator } from "@/components/ui/separator";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-warm py-12">
      <Separator className="mx-auto mb-10 max-w-6xl bg-border/40" />
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center text-center">
        <img src={logo} alt="Amor Canino" className="h-16 w-auto mb-2" />
        <p className="mt-2 text-[11px] tracking-editorial text-muted-foreground">
          Pet Shop & Clínica Veterinaria · Todos los derechos reservados © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
