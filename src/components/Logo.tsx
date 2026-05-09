import logoSrc from "@/assets/logo.jpeg";

type Props = { className?: string };

export default function Logo({ className = "h-10 w-10" }: Props) {
  return (
    <img
      src={logoSrc}
      alt="Fashion Intimate"
      className={`${className} aspect-square rounded-full object-cover ring-1 ring-border`}
    />
  );
}
