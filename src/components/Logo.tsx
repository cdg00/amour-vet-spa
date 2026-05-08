type Props = { className?: string };

export default function Logo({ className = "h-8 w-auto" }: Props) {
  return (
    <svg
      viewBox="0 0 64 40"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Fashion Intimate"
    >
      <text
        x="0"
        y="30"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="32"
        fontStyle="italic"
        fill="currentColor"
        fontWeight="500"
      >
        F
      </text>
      <text
        x="22"
        y="30"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="32"
        fontStyle="italic"
        fill="currentColor"
        fontWeight="500"
        opacity="0.7"
      >
        I
      </text>
      <line x1="0" y1="36" x2="36" y2="36" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}
