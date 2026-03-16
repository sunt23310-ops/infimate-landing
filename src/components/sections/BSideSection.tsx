import Image from "next/image";
import { BarChart3, Sparkles, MessageCircle, Package, Video, Users } from "lucide-react";
import Badge from "../Badge";

const aiCards = [
  { icon: BarChart3, title: "智能数据分析", desc: "AI 自动解读销售数据、用户行为，生成可执行的运营策略建议" },
  { icon: Sparkles, title: "商品卖点智能生成", desc: "基于商品特性与用户偏好，自动生成个性化卖点话术与推荐理由" },
  { icon: MessageCircle, title: "私域反馈 & 智能客服", desc: "整合用户反馈数据，智能分类与分析，辅助产品与服务优化决策" },
];

const bFeatures = [
  { icon: BarChart3, title: "数据看板" },
  { icon: Package, title: "商品管理" },
  { icon: Video, title: "直播管理" },
  { icon: Users, title: "用户分层" },
];

export default function BSideSection() {
  return (
    <section className="w-full bg-[var(--bg-secondary)] px-[120px] py-[100px] flex flex-col items-center gap-14">
      <Badge text="MANAGEMENT PLATFORM" />
      <h2 className="text-[40px] font-bold text-white text-center">运营侧 — 全方位掌控数字员工</h2>
      <p className="text-lg text-[var(--text-secondary)] text-center max-w-[700px] leading-relaxed">
        强大的后台管理系统，支持数据看板、商品管理、直播管理、用户分层等全场景运营能力
      </p>

      {/* Browser mockup */}
      <div className="w-full rounded-2xl overflow-hidden border border-white/[0.06] bg-[#1A1A2E]">
        <div className="flex items-center gap-2 px-5 h-11 bg-[#111118] border-b border-white/[0.06]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27CA40]" />
          <div className="ml-4 px-4 py-1 rounded bg-white/5">
            <span className="font-inter text-xs text-[var(--text-muted)]">admin.infimate.ai/dashboard</span>
          </div>
        </div>
        <div className="relative w-full h-[600px]">
          <Image src="/screenshots/Dashboard.png" alt="Dashboard" fill className="object-cover object-top" />
        </div>
      </div>

      {/* AI capabilities */}
      <div className="w-full flex flex-col items-center gap-10 mt-8">
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--purple-bg)] border border-[var(--purple-border)]">
            <span className="font-inter text-xs font-semibold text-[var(--purple-primary)] tracking-wider">AI-POWERED CAPABILITIES</span>
          </div>
          <h3 className="text-4xl font-bold text-white">AI 赋能运营全链路</h3>
        </div>
        <div className="w-full grid grid-cols-3 gap-5">
          {aiCards.map((item) => (
            <div key={item.title} className="bg-[var(--bg-card)] rounded-2xl p-6 flex flex-col gap-4 border border-white/[0.03]">
              <div className="w-10 h-10 rounded-lg bg-[var(--purple-bg)] flex items-center justify-center">
                <item.icon size={20} className="text-[var(--purple-primary)]" />
              </div>
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Feature tags */}
      <div className="flex gap-8 justify-center">
        {bFeatures.map((item) => (
          <div key={item.title} className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--bg-card)] border border-white/[0.03]">
            <item.icon size={20} className="text-[var(--purple-primary)]" />
            <span className="text-[15px] font-semibold text-white">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
