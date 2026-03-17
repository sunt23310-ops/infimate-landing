import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[72px] px-20 bg-[var(--bg-header)] backdrop-blur-md border-b border-white/[0.04] transition-all duration-300">
      <Link href="/" className="font-inter text-2xl font-bold text-white">
        Infimate
      </Link>
      <nav className="flex items-center gap-10">
        <Link href="/#products" className="text-[15px] text-[var(--text-secondary)] hover:text-white transition-colors">产品能力</Link>
        <Link href="/#solutions" className="text-[15px] text-[var(--text-secondary)] hover:text-white transition-colors">解决方案</Link>
        <Link href="/#cases" className="text-[15px] text-[var(--text-secondary)] hover:text-white transition-colors">客户案例</Link>
        <Link href="/about" className="text-[15px] text-[var(--text-secondary)] hover:text-white transition-colors">关于我们</Link>
      </nav>
      <Link
        href="/demo"
        className="px-6 py-2.5 rounded-lg bg-gradient-to-b from-[var(--purple-primary)] to-[var(--purple-dark)] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        预约演示
      </Link>
    </header>
  );
}
