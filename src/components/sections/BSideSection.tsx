"use client";
import Image from "next/image";
import { BarChart3, Sparkles, MessageCircle, Package, Video, Users } from "lucide-react";
import Badge from "../Badge";
import { useInView } from "@/hooks/useInView";

const aiCards = [
  { icon: BarChart3, title: "智能数据分析", desc: "AI 自动解读销售数据、用户行为，生成可执行的运营策略建议", img: "/images/ai-data.jpg" },
  { icon: Sparkles, title: "商品卖点智能生成", desc: "基于商品特性与用户偏好，自动生成个性化卖点话术与推荐理由", img: "/images/ai-product.jpg" },
  { icon: MessageCircle, title: "私域反馈 & 智能客服", desc: "整合用户反馈数据，智能分类与分析，辅助产品与服务优化决策", img: "/images/ai-feedback.jpg" },
];

const bFeatures = [
  { icon: BarChart3, title: "数据看板" },
  { icon: Package, title: "商品管理" },
  { icon: Video, title: "直播管理" },
  { icon: Users, title: "用户分层" },
];

export default function BSideSection() {
  const { ref: ref1, isVisible: vis1 } = useInView();
  const { ref: ref2, isVisible: vis2 } = useInView();

  return (
    <section className="w-full bg-[var(--bg-secondary)] px-[120px] py-[140px] flex flex-col items-center gap-14">
      <Badge text="管理平台" />
      <div ref={ref1} className={`flex flex-col items-center gap-14 w-full animate-on-scroll ${vis1 ? "is-visible" : ""}`}>
        <h2 className="text-[40px] font-bold text-white text-center">运营侧 — 全方位掌控数字员工</h2>
        <p className="text-lg text-[var(--text-secondary)] text-center max-w-[700px] leading-relaxed">
          强大的后台管理系统，支持数据看板、商品管理、直播管理、用户分层等全场景运营能力
        </p>

        {/* Browser mockup */}
        <div className="w-full rounded-2xl overflow-hidden border border-white/[0.06] bg-[#1A1A2E] card-hover">
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
      </div>

      {/* AI capabilities - horizontal alternating cards with real images */}
      <div className="w-full flex flex-col items-center gap-10 mt-8">
        <div className="flex flex-col items-center gap-3">
          <Badge text="AI 赋能运营" />
          <h3 className="text-4xl font-bold text-white">AI 赋能运营全链路</h3>
        </div>
        <div ref={ref2} className={`w-full flex flex-col gap-5 animate-stagger ${vis2 ? "is-visible" : ""}`}>
          {aiCards.map((item, i) => (
            <div key={item.title} className={`w-full flex ${i % 2 === 1 ? "flex-row-reverse" : "flex-row"} items-stretch rounded-2xl overflow-hidden border border-white/[0.03] bg-[var(--bg-card)] card-hover`}>
              {/* Text side */}
              <div className="flex-1 p-8 flex flex-col justify-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--purple-bg)] flex items-center justify-center">
                  <item.icon size={20} className="text-[var(--purple-primary)]" />
                </div>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
              {/* Image side */}
              <div className="relative w-[400px] min-h-[200px]">
                <Image src={item.img} alt={item.title} fill className="object-cover opacity-60" />
                <div className={`absolute inset-0 bg-gradient-to-${i % 2 === 1 ? "r" : "l"} from-transparent to-[var(--bg-card)]`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feature tags */}
      <div className="flex gap-8 justify-center">
        {bFeatures.map((item) => (
          <div key={item.title} className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--bg-card)] border border-white/[0.03] card-hover">
            <item.icon size={20} className="text-[var(--purple-primary)]" />
            <span className="text-[15px] font-semibold text-white">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
