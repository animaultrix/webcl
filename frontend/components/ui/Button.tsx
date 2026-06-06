import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
};

const variants = {
  primary:
    "bg-[#c8a45d] text-black hover:bg-[#d9b86e] focus-visible:outline-[#c8a45d]",
  secondary:
    "border border-white/45 bg-white/10 text-white hover:bg-white hover:text-black focus-visible:outline-white",
  dark:
    "bg-black text-white hover:bg-[#29231d] focus-visible:outline-[#c8a45d]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-sm px-6 text-sm font-semibold uppercase transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
