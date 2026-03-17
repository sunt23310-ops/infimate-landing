import SubpageHeader from "@/components/SubpageHeader";

const sections = [
  {
    title: "1. 信息收集",
    content: "我们在您使用 Infimate 服务时可能收集以下信息：账户注册信息（姓名、邮箱、手机号）、使用行为与偏好、设备信息及日志数据。所有信息的收集均遵循合法、正当、必要的原则。",
  },
  {
    title: "2. 信息使用",
    content: "收集的信息将用于：提供和优化 AI Agent 服务，个性化用户体验与产品推荐，发送服务与产品通知更新。未经用户授权，我们不会将您的个人信息用于其他目的，也不会向第三方出售或披露。",
  },
  {
    title: "3. 信息保护",
    content: "我们采用业界标准的安全技术与管理措施，包括数据加密传输与存储、定期安全审计与压力测试、严格的数据访问权限控制。如有安全事件发生，我们会在法定时间内通知相关用户并采取补救措施。",
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-white min-h-screen">
      <SubpageHeader />
      <div className="h-[72px]" />
      <section className="px-[280px] py-20 flex flex-col gap-10">
        <h1 className="text-4xl font-bold">隐私政策</h1>
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
