import SubpageHeader from "@/components/SubpageHeader";
import Badge from "@/components/Badge";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "使命", desc: "通过人设化 AI 技术，让每个主播的IP价值得到最大化释放，助力每一位用户" },
  { icon: Eye, title: "愿景", desc: "成为全球领先的直播电商 AI 服务平台，让 AI 数字员工成为每个主播的标配" },
  { icon: Heart, title: "价值观", desc: "以用户为中心的创新、以品质为导向的研发、共赢合作的生态理念，打造价值为先" },
];

const milestones = [
  { date: "2025 Q1", desc: "公司成立，核心团队组建完成" },
  { date: "2025 Q3", desc: "首个头部主播 AI Agent 上线" },
  { date: "2026 Q1", desc: "运营管理平台 V2.0 发布" },
  { date: "2026 Q4", desc: "服务头部客户超 50 家" },
];

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-white min-h-screen">
      <SubpageHeader />
      <div className="h-[72px]" />

      {/* Hero */}
      <section className="flex flex-col items-center gap-8 px-[120px] py-[100px]">
        <Badge text="ABOUT US" />
        <h1 className="text-[44px] font-bold text-center">让 AI 赋予每个 IP 无限生命力</h1>
        <p className="text-lg text-[var(--text-secondary)] text-center max-w-[700px] leading-relaxed">
          Infimate 致力于通过人设化 AI Agent 技术，帮助直播电商行业实现降本增效与用户体验升级
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[var(--bg-secondary)] px-[120px] py-20 flex flex-col gap-12">
        <h2 className="text-[32px] font-bold">我们的使命与愿景</h2>
        <div className="grid grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-[var(--bg-card)] rounded-2xl p-6 flex flex-col gap-5 border border-white/[0.03]">
              <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center">
                <v.icon size={24} className="text-[var(--purple-primary)]" />
              </div>
              <h3 className="text-xl font-semibold">{v.title}</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="px-[120px] py-20 flex flex-col items-center gap-12">
        <h2 className="text-[32px] font-bold">发展里程碑</h2>
        <div className="w-full grid grid-cols-4 gap-6">
          {milestones.map((m) => (
            <div key={m.date} className="bg-[var(--bg-card)] rounded-2xl p-6 flex flex-col gap-3 border border-white/[0.03]">
              <span className="font-inter text-sm font-semibold text-[var(--purple-primary)]">{m.date}</span>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
