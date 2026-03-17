import SubpageHeader from "@/components/SubpageHeader";
import Badge from "@/components/Badge";

const jobs = [
  {
    title: "高级 NLP 算法工程师",
    desc: "负责人设化对话引擎的核心算法研发，包括多轮对话管理、情感分析、风格迁移等，推动 AI 技术在直播电商场景的创新应用",
    location: "上海",
    type: "全职",
  },
  {
    title: "全栈开发工程师",
    desc: "负责运营管理平台的前后端开发，熟悉 React + Node.js 技术栈，有企业级 SaaS 产品开发经验优先",
    location: "上海",
    type: "全职",
  },
  {
    title: "产品经理",
    desc: "负责 AI Agent 产品规划与需求设计，深度理解直播电商行业痛点与用户需求，主导核心功能设计与迭代",
    location: "上海",
    type: "全职",
  },
];

export default function JoinPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-white min-h-screen">
      <SubpageHeader />
      <div className="h-[72px]" />
      <section className="flex flex-col items-center gap-14 px-[120px] py-[100px]">
        <Badge text="JOIN US" />
        <h1 className="text-[44px] font-bold text-center">加入我们，共创 AI 未来</h1>
        <div className="w-full flex flex-col gap-6">
          {jobs.map((job) => (
            <div key={job.title} className="bg-[var(--bg-card)] rounded-2xl p-8 flex justify-between items-start border border-white/[0.03]">
              <div className="flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed max-w-[700px]">{job.desc}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0 ml-8">
                <span className="text-sm text-[var(--text-secondary)]">{job.location}</span>
                <span className="text-sm text-[var(--text-muted)]">·</span>
                <span className="text-sm text-[var(--text-secondary)]">{job.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
