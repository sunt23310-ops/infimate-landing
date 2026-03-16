import Image from "next/image";
import GradientButton from "../GradientButton";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[700px] bg-[var(--bg-primary)] overflow-hidden">
      {/* Glow effects */}
      <div className="absolute w-[600px] h-[600px] left-[750px] -top-20 rounded-full bg-[radial-gradient(circle,rgba(184,134,248,0.125)_0%,transparent_70%)] opacity-70 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] left-[100px] top-[350px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.07)_0%,transparent_70%)] opacity-50 pointer-events-none" />

      <div className="flex items-center h-full px-[120px]">
        {/* Left content */}
        <div className="flex flex-col gap-8 w-[620px] relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(184,134,248,0.08)] self-start">
            <span className="w-2 h-2 rounded-full bg-[var(--purple-primary)]" />
            <span className="font-inter text-[13px] font-medium text-[var(--purple-primary)]">AI 驱动的直播电商革命</span>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[52px] font-bold text-white leading-tight">让每一位主播，拥有</h1>
            <h1 className="text-[52px] font-bold leading-tight bg-gradient-to-r from-[#E8DBFF] to-[var(--purple-primary)] bg-clip-text text-transparent">
              永不下线的 AI 数字员工
            </h1>
          </div>
          <p className="text-lg text-[var(--text-secondary)]">
            人设化 AI Agent，7×24 小时私域互动 · 精准推荐 · 降本增效
          </p>
          <div className="flex gap-4">
            <GradientButton href="/demo">预约演示</GradientButton>
            <a href="#products" className="px-9 py-4 rounded-xl border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors inline-block">
              了解更多
            </a>
          </div>
        </div>

        {/* Right phone mockup */}
        <div className="absolute right-[120px] top-[100px] w-[340px] h-[620px]">
          <div className="absolute inset-0 rounded-[40px] bg-[#1A1A2E] border border-white/10 overflow-hidden">
            <Image src="/screenshots/综合聊天界面.png" alt="AI Chat" fill className="object-cover object-top" />
          </div>
          <div className="absolute -inset-20 rounded-full bg-[radial-gradient(circle,rgba(184,134,248,0.15)_0%,transparent_70%)] -z-10" />
        </div>
      </div>
    </section>
  );
}
