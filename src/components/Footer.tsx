import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-footer)] px-[120px] pt-[60px] pb-10 flex flex-col gap-12">
      <div className="flex justify-between">
        <div className="w-[300px] flex flex-col gap-4">
          <span className="font-inter text-2xl font-bold text-white">Infimate</span>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            人设化 AI Agent 解决方案提供商，助力直播电商行业实现智能化转型升级
          </p>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white">产品</span>
            <span className="text-[13px] text-[var(--text-muted)]">AI 聊天小程序</span>
            <span className="text-[13px] text-[var(--text-muted)]">数字员工定制</span>
            <span className="text-[13px] text-[var(--text-muted)]">运营管理后台</span>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white">解决方案</span>
            <Link href="/solutions" className="text-[13px] text-[var(--text-muted)] hover:text-white transition-colors">主播/MCN机构</Link>
            <Link href="/solutions" className="text-[13px] text-[var(--text-muted)] hover:text-white transition-colors">私域运营</Link>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-white">关于</span>
            <Link href="/about" className="text-[13px] text-[var(--text-muted)] hover:text-white transition-colors">关于我们</Link>
            <Link href="/contact" className="text-[13px] text-[var(--text-muted)] hover:text-white transition-colors">联系我们</Link>
          </div>
        </div>
      </div>
      <div className="h-px bg-white/[0.06]" />
      <div className="flex justify-between items-center">
        <span className="font-inter text-xs text-[var(--text-muted)]">© 2026 Infimate. All rights reserved.</span>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-xs text-[var(--text-muted)] hover:text-white transition-colors">隐私政策</Link>
          <Link href="/terms" className="text-xs text-[var(--text-muted)] hover:text-white transition-colors">服务条款</Link>
        </div>
      </div>
    </footer>
  );
}
