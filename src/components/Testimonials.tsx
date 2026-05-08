const items = [
  { quote: "El calce perfecto. Me encantó la atención y la calidad de la seda.", author: "Camila R." },
  { quote: "Diseños que se sienten únicos. Volvería a comprar sin dudar.", author: "Lucía M." },
  { quote: "Una experiencia distinta. El detalle del packaging fue hermoso.", author: "Sofía A." },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-28 bg-background">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-wide-editorial uppercase text-rose-bright">Testimonios</p>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground">Lo que dicen</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {items.map((t, i) => (
            <figure key={i} className="text-center">
              <blockquote className="font-serif italic text-lg leading-relaxed text-foreground/80">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[10px] tracking-wide-editorial uppercase text-muted-foreground">
                — {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
