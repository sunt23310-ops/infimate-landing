import SubpageHeader from "@/components/SubpageHeader";

const sections = [
  {
    title: "1. 服务说明",
    content: "Infimate 为用户提供人设化 AI Agent 及相关工具服务，可以帮助用户提升直播电商业务效率，覆盖智能对话、精准推荐、运营管理等功能模块。服务内容将根据市场与技术发展持续更新。",
  },
  {
    title: "2. 用户责任",
    content: "登录及使用服务时应遵守相关法律法规，不得利用平台进行任何违法或侵权行为。使用者应确保提交信息真实合规，因虚假信息导致的一切后果由用户自行承担。如有违规，Infimate 有权暂停或终止服务。",
  },
  {
    title: "3. 知识产权",
    content: "Infimate 平台上的所有内容、技术、商标、界面设计均受知识产权法保护。未经书面授权，用户不得复制、修改、传播或利用平台内容用于商业目的，否则将承担相应法律责任。",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-white min-h-screen">
      <SubpageHeader />
      <section className="px-[280px] py-20 flex flex-col gap-10">
        <h1 className="text-4xl font-bold">服务条款</h1>
        <p className="text-sm text-[var(--text-muted)]">最后更新日期：2026 年 3 月 1 日</p>
        {sections.map((s) => (
          <div key={s.title} className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{s.content}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
