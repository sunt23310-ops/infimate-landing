import Image from "next/image";
import Badge from "../Badge";

export default function AICapabilitiesSection() {
  return (
    <section className="w-full bg-[var(--bg-primary)] px-[120px] py-[140px] flex flex-col items-center gap-14">
      <Badge text="CORE AI CAPABILITIES" />
      <h2 className="text-[40px] font-bold text-white text-center">核心 AI 能力</h2>

      <div className="w-full grid grid-cols-2 grid-rows-2 gap-5 h-[560px]">
        {/* b1 - Skin detection with phone */}
        <div className="relative bg-[var(--bg-card)] rounded-2xl p-6 border border-white/[0.03] overflow-hidden flex">
          <div className="flex flex-col gap-3 w-1/2">
            <h3 className="text-[22px] font-semibold text-white">肤质智能检测</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">AI 驱动多维度肤质分析，精准识别肤质类型与问题</p>
          </div>
          <div className="absolute right-4 bottom-0 w-[200px] h-[340px] rounded-t-[24px] overflow-hidden">
            <Image src="/screenshots/肤质画像检测结果页.png" alt="肤质检测" fill className="object-cover object-top" />
          </div>
        </div>

        {/* b2 - Proactive service */}
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-white/[0.03] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--purple-bg)] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--purple-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/></svg>
          </div>
          <h3 className="text-xl font-semibold text-white">主动服务引擎</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">智能触达用户，生日关怀、换季提醒、签收跟进，提升用户粘性与复购率</p>
        </div>

        {/* b3 - Vanity scanner */}
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-white/[0.03] flex flex-col gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--purple-bg)] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--purple-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
          </div>
          <h3 className="text-xl font-semibold text-white">化妆台扫描</h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">拍摄化妆台照片，AI 自动识别产品并给出个性化使用建议与搭配推荐</p>
        </div>

        {/* b4 - Product recommendation with phone */}
        <div className="relative bg-[var(--bg-card)] rounded-2xl p-6 border border-white/[0.03] overflow-hidden flex">
          <div className="flex flex-col gap-3 w-1/2">
            <h3 className="text-[22px] font-semibold text-white">个性化产品推荐</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">基于用户画像与行为数据，智能推荐最匹配的商品组合</p>
          </div>
          <div className="absolute right-4 bottom-0 w-[180px] h-[320px] rounded-t-[24px] overflow-hidden">
            <Image src="/screenshots/多产品推荐-横滑卡片.png" alt="产品推荐" fill className="object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  );
}
