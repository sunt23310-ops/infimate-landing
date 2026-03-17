"use client";
import { useInView } from "@/hooks/useInView";

export default function SectionDivider() {
  const { ref, isVisible } = useInView(0.5);

  return (
    <div ref={ref} className="relative w-full h-px flex justify-center">
      <div className={`h-full bg-gradient-to-r from-transparent via-[var(--purple-primary)]/20 to-transparent section-divider-animate ${isVisible ? "is-visible" : ""}`} />
    </div>
  );
}
