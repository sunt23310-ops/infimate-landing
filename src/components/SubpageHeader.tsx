import Link from "next/link";

export default function SubpageHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[72px] px-20 bg-[var(--bg-header)] backdrop-blur-md border-b border-white/[0.04]">
      <Link href="/" className="font-inter text-2xl font-bold text-white">
        Infimate
      </Link>
      <Link href="/" className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">
        ← 返回首页
      </Link>
    </header>
  );
}
