interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--purple-bg)] border border-[var(--purple-border)]">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--purple-primary)]" />
      <span className="font-inter text-xs font-semibold text-[var(--purple-primary)] tracking-wider">
        {text}
      </span>
    </div>
  );
}
