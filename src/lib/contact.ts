// Brand & contact constants for Fashion Intimate
export const BRAND = {
  name: "Fashion Intimate",
  tagline: "Lencería · Diseño íntimo",
};

export const CONTACT = {
  // Argentina format for wa.me: country code 54 + 9 + area + number (no spaces)
  whatsappNumber: "5492281475723",
  phoneDisplay: "+54 9 2281 47-5723",
  location: "Barker, Villa Cacique, Tandil",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function formatARS(value: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}
