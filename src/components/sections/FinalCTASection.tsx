import GradientButton from "../GradientButton";

export default function FinalCTASection() {
  return (
    <section className="relative w-full bg-[var(--bg-secondary)] py-[120px] flex flex-col items-center gap-8 overflow-hidden">
      <div className="absolute w-[800px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(184,134,248,0.19)_0%,transparent_70%)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <h2 className="text-[44px] font-bold text-white text-center relative z-10">开启 AI 数字员工时代</h2>
      <p className="text-lg text-[var(--text-secondary)] text-center relative z-10">
        让每一位主播的影响力突破时间与空间的限制，触达每一位用户
      </p>
      <GradientButton href="/demo" size="lg" className="relative z-10">预约演示</GradientButton>
    </section>
  );
}
