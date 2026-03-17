import SubpageHeader from "@/components/SubpageHeader";
import { CircleCheck } from "lucide-react";

const demoFeatures = [
  "全流程产品功能演示",
  "定制化解决方案咨询",
  "行业案例与 ROI 分析",
  "免费试用机会",
];

export default function DemoPage() {
  return (
    <main className="bg-[var(--bg-primary)] text-white min-h-screen">
      <SubpageHeader />
      <div className="h-[72px]" />
      <section className="flex items-center gap-20 px-[120px] py-[100px]">
        <div className="flex-1 flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--purple-bg)] border border-[var(--purple-border)] self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--purple-primary)]" />
            <span className="font-inter text-xs font-semibold text-[var(--purple-primary)] tracking-wider">BOOK A DEMO</span>
          </div>
          <h1 className="text-[44px] font-bold">预约产品演示</h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            了解 Infimate 如何为您的直播电商业务提供智能化解决方案。我们的专家团队将为您提供一对一演示与方案咨询
          </p>
          <div className="flex flex-col gap-5">
            {demoFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <CircleCheck size={20} className="text-[var(--purple-primary)] shrink-0" />
                <span className="text-base text-[var(--text-feature)]">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[480px] bg-[var(--bg-card)] rounded-[20px] border border-white/[0.06] p-10 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">填写信息</h2>
          {[
            { label: "公司名称", placeholder: "请输入公司名称", type: "text" },
            { label: "联系人姓名", placeholder: "请输入联系人姓名", type: "text" },
            { label: "手机号码", placeholder: "请输入手机号码", type: "tel" },
          ].map((field) => (
            <div key={field.label} className="flex flex-col gap-2">
              <label className="text-sm text-[var(--text-secondary)]">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="h-12 px-4 rounded-lg bg-[#0A0A1A] border border-white/10 text-white text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--purple-primary)] transition-colors"
              />
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[var(--text-secondary)]">需求描述</label>
            <textarea
              placeholder="请简要描述您的需求与业务场景..."
              className="h-[120px] px-4 py-3 rounded-lg bg-[#0A0A1A] border border-white/10 text-white text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--purple-primary)] transition-colors resize-none"
            />
          </div>
          <button className="h-[52px] rounded-xl bg-gradient-to-b from-[var(--purple-primary)] to-[var(--purple-dark)] text-white text-base font-semibold hover:opacity-90 transition-opacity">
            提交预约
          </button>
        </div>
      </section>
    </main>
  );
}
