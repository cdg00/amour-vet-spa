import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, Mail, Music2, Upload, Play } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Camila Gómez · UGC Content Creator" },
      { name: "description", content: "Portafolio de contenido UGC de Camila Gómez. Videos orgánicos y auténticos para marcas de moda, belleza y lifestyle." },
      { property: "og:title", content: "Camila Gómez · UGC Content Creator" },
      { property: "og:description", content: "Portafolio UGC. Conectá con tu audiencia a través de contenido auténtico." },
    ],
  }),
  component: PortfolioPage,
});

type VideoSlot = {
  id: string;
  src: string | null;
  title: string;
  tiktokUrl: string;
};

const INITIAL_SLOTS: VideoSlot[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `slot-${i + 1}`,
  src: null,
  title: `Proyecto ${i + 1}`,
  tiktokUrl: "https://www.tiktok.com/",
}));

const STORAGE_KEY = "camila-ugc-videos";

function PortfolioPage() {
  const [slots, setSlots] = useState<VideoSlot[]>(INITIAL_SLOTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as VideoSlot[];
        // src URLs from previous sessions are blob: URLs that no longer exist
        setSlots(parsed.map((s) => ({ ...s, src: s.src?.startsWith("blob:") ? null : s.src })));
      }
    } catch {}
  }, []);

  const persist = (next: VideoSlot[]) => {
    setSlots(next);
    try {
      const safe = next.map((s) => ({ ...s, src: s.src?.startsWith("blob:") ? null : s.src }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safe));
    } catch {}
  };

  const handleFile = (id: string, file: File) => {
    if (!file.type.startsWith("video/")) return;
    const url = URL.createObjectURL(file);
    persist(slots.map((s) => (s.id === id ? { ...s, src: url } : s)));
  };

  return (
    <div className="min-h-screen" style={{ background: "#FBF7F1", color: "#3B2E22" }}>
      {/* Header */}
      <header className="px-6 pt-28 pb-20 text-center">
        <p
          className="text-[11px] uppercase mb-6"
          style={{ letterSpacing: "0.4em", color: "#9C8569" }}
        >
          Portafolio · 2026
        </p>
        <h1
          className="font-serif text-6xl md:text-8xl leading-[0.95] tracking-tight"
          style={{ color: "#2D2418" }}
        >
          Camila Gómez
        </h1>
        <p
          className="mt-6 text-sm md:text-base uppercase"
          style={{ letterSpacing: "0.35em", color: "#7A6750" }}
        >
          UGC Content Creator · Portafolio de Contenido
        </p>
        <div className="mx-auto mt-10 h-px w-20" style={{ background: "#C9B89A" }} />
      </header>

      {/* About */}
      <section className="px-6 pb-24 max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ color: "#2D2418" }}>
          Sobre mí
        </h2>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: "#6B5A45" }}>
          Soy Camila, creadora de contenido UGC especializada en videos orgánicos y auténticos
          para marcas de moda, belleza y lifestyle. Mi enfoque combina la estética cuidada con
          la frescura de lo cotidiano: piezas que se sienten reales, generan confianza y conectan
          con tu audiencia desde el primer segundo. Trabajo con marcas que buscan presencia
          genuina, storytelling honesto y resultados que se traducen en comunidad.
        </p>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p
            className="text-[11px] uppercase mb-3"
            style={{ letterSpacing: "0.4em", color: "#9C8569" }}
          >
            Mosaico UGC
          </p>
          <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#2D2418" }}>
            Trabajos seleccionados
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {slots.map((slot) => (
            <VideoCard key={slot.id} slot={slot} onFile={(f) => handleFile(slot.id, f)} />
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer className="px-6 pb-24 pt-12 text-center border-t" style={{ borderColor: "#E8DCC8" }}>
        <h2 className="font-serif text-4xl md:text-5xl mb-6" style={{ color: "#2D2418" }}>
          ¿Trabajamos juntos?
        </h2>
        <p className="max-w-xl mx-auto mb-10 text-sm md:text-base" style={{ color: "#7A6750" }}>
          Estoy disponible para colaboraciones, campañas y producción de contenido UGC a medida
          para tu marca.
        </p>
        <a
          href="mailto:hola@camilagomez.com"
          className="inline-block px-10 py-4 text-sm uppercase font-medium transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{
            background: "#8B6F4E",
            color: "#FBF7F1",
            letterSpacing: "0.25em",
            borderRadius: "2px",
          }}
        >
          ¡Hagamos equipo! Contactar
        </a>

        <div className="mt-12 flex items-center justify-center gap-6">
          <SocialIcon href="https://instagram.com/" label="Instagram">
            <Instagram size={18} strokeWidth={1.4} />
          </SocialIcon>
          <SocialIcon href="https://www.tiktok.com/" label="TikTok">
            <Music2 size={18} strokeWidth={1.4} />
          </SocialIcon>
          <SocialIcon href="mailto:hola@camilagomez.com" label="Email">
            <Mail size={18} strokeWidth={1.4} />
          </SocialIcon>
        </div>

        <p
          className="mt-10 text-[11px] uppercase"
          style={{ letterSpacing: "0.35em", color: "#9C8569" }}
        >
          hola@camilagomez.com
        </p>
        <p className="mt-8 text-[10px]" style={{ color: "#B5A48A" }}>
          © {new Date().getFullYear()} Camila Gómez · UGC Creator
        </p>
      </footer>
    </div>
  );
}

function VideoCard({ slot, onFile }: { slot: VideoSlot; onFile: (f: File) => void }) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className="group relative overflow-hidden transition-all"
      style={{
        background: "#FFFFFF",
        border: `1px solid ${dragging ? "#8B6F4E" : "#E8DCC8"}`,
        borderRadius: "4px",
        boxShadow: dragging
          ? "0 20px 40px -20px rgba(139,111,78,0.25)"
          : "0 8px 24px -16px rgba(60,40,20,0.15)",
      }}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) onFile(file);
      }}
    >
      <div
        className="relative aspect-[9/16] w-full overflow-hidden"
        style={{ background: "#F2E9D8" }}
      >
        {slot.src ? (
          <video
            src={slot.src}
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex h-full w-full flex-col items-center justify-center gap-3 text-center px-6 transition-colors hover:bg-[#EDE0CA]"
          >
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ background: "#FFFFFF", border: "1px solid #D9C7A8" }}
            >
              <Play size={22} strokeWidth={1.4} style={{ color: "#8B6F4E" }} />
            </div>
            <p
              className="text-[10px] uppercase"
              style={{ letterSpacing: "0.3em", color: "#9C8569" }}
            >
              Arrastrá tu video
            </p>
            <p className="text-xs" style={{ color: "#7A6750" }}>
              o hacé clic para subir un .mp4
            </p>
          </button>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="video/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
          }}
        />
      </div>

      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="flex items-center gap-1.5 text-[10px] uppercase transition-colors hover:opacity-70"
            style={{ letterSpacing: "0.2em", color: "#8B6F4E" }}
            title="Reemplazar video"
          >
            <Upload size={12} strokeWidth={1.6} />
            Subir
          </button>
        </div>

        <a
          href={slot.tiktokUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[11px] transition-colors hover:opacity-70"
          style={{ color: "#3B2E22" }}
        >
          <TikTokGlyph />
          <span style={{ letterSpacing: "0.1em" }}>Ver en TikTok</span>
        </a>
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-11 w-11 items-center justify-center rounded-full transition-all hover:scale-110"
      style={{ background: "#FFFFFF", border: "1px solid #E8DCC8", color: "#8B6F4E" }}
    >
      {children}
    </a>
  );
}

function TikTokGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.66a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04z" />
    </svg>
  );
}
