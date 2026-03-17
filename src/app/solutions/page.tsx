import SubpageHeader from "@/components/SubpageHeader";
import Badge from "@/components/Badge";
import GradientButton from "@/components/GradientButton";
import { MessageSquare, ShoppingBag, BarChart3 } from "lucide-react";

const features = [
  { icon: MessageSquare, title: "人设化 AI 对话", desc: "深度定制主播人设风格，支持多轮自然对话，打造有温度的 AI 互动体验，实现私域用户的精细化服务" },
  { icon: ShoppingBag, title: "智能选品推荐", desc: "基于用户画像与消费行为分析，精准匹配商品推荐策略，提升转化率与客单价" },
  { icon: BarChart3, title: "数据驱动运营", desc: "实时监控用户行为数据，AI 自动生成运营策略建议，持续优化私域运营效果" },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-white min-h-screen">
      <SubpageHeader />
      <div className="h-[72px]" />

      {/* Hero */}
      <section className="flex flex-col items-center gap-8 px-[120px] py-[100px]">
        <Badge text="SOLUTIONS" />
        <h1 className="text-[44px] font-bold text-center">主播/MCN 机构解决方案</h1>
        <p className="text-lg text-[var(--text-secondary)] text-center max-w-[700px] leading-relaxed">
          为头部主播与 MCN 机构提供一站式人设化 AI Agent 解决方案，实现私域流量高效运营与用户体验升级
        </p>
        <GradientButton href="/demo">预约演示</GradientButton>
      </section>

      {/* Core Features */}
      <section className="bg-[var(--bg-secondary)] px-[120px] py-20 flex flex-col gap-12">
        <h2 className="text-[32px] font-bold">核心功能</h2>
        <div className="grid grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-[var(--bg-card)] rounded-2xl p-6 flex flex-col gap-5 border border-white/[0.03]">
              <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center">
                <f.icon size={24} className="text-[var(--purple-primary)]" />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
