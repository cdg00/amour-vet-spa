import logoSrc from "@/assets/logo.jpeg";

type Props = { className?: string };

export default function Logo({ className = "h-10 w-auto" }: Props) {
  return (
    <img
      src={logoSrc}
      alt="Fashion Intimate"
      className={`${className} object-contain`}
    />
  );
}
