import Link from "next/link";
import { ReactNode } from "react";

interface GradientButtonProps {
  href?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function GradientButton({ href, children, size = "md", className = "" }: GradientButtonProps) {
  const sizeClasses = {
    sm: "px-6 py-2.5 text-sm",
    md: "px-9 py-4 text-base",
    lg: "px-12 py-5 text-lg",
  };

  const classes = `inline-flex items-center justify-center rounded-xl bg-gradient-to-b from-[var(--purple-primary)] to-[var(--purple-dark)] text-white font-semibold hover:opacity-90 transition-opacity ${sizeClasses[size]} ${className}`;

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }
  return <button className={classes}>{children}</button>;
}
