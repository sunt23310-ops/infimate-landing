import Link from "next/link";

export default function SubpageHeader() {
  return (
    <header className="flex items-center justify-between h-[72px] px-20 bg-[var(--bg-header)]">
      <Link href="/" className="font-inter text-2xl font-bold text-white">
        Infimate
      </Link>
      <Link href="/" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
        ← 返回首页
      </Link>
    </header>
  );
}
