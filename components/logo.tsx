import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "default" | "inverse";
  size?: "nav" | "footer";
  priority?: boolean;
  className?: string;
  onClick?: () => void;
};

const sizes = {
  nav: "h-9 w-auto sm:h-10",
  footer: "h-11 w-auto",
};

export function Logo({
  variant = "default",
  size = "nav",
  priority = false,
  className,
  onClick,
}: LogoProps) {
  const inverse = variant === "inverse";

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Khaira.co home"
      className={cn(
        "group inline-flex shrink-0 items-center rounded-lg",
        className,
      )}
    >
      <Image
        src="/brand/khaira-logo.png"
        alt="Khaira.co growth and automation"
        width={1000}
        height={265}
        priority={priority}
        sizes="220px"
        className={cn(
          "w-auto transition-transform duration-300 group-hover:-translate-y-0.5",
          sizes[size],
          inverse && "brightness-0 invert",
        )}
      />
    </Link>
  );
}
