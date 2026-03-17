"use client";
import Badge from "../Badge";
import { useInView } from "@/hooks/useInView";

const results = [
  { value: "35%", label: "用户活跃度提升" },
  { value: "60%", label: "人工客服成本降低" },
  { value: "20%", label: "复购率提升" },
];

export default function CaseStudySection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="cases" className="w-full bg-[var(--bg-primary)] px-[120px] py-[140px] flex flex-col gap-14">
      <Badge text="客户案例" />
      <div ref={ref} className={`flex flex-col items-center gap-14 w-full animate-on-scroll ${isVisible ? "is-visible" : ""}`}>
        <h2 className="text-[40px] font-bold text-white text-center">头部客户信赖之选</h2>

        <div className={`w-full rounded-[20px] p-[1px] bg-gradient-to-br from-[rgba(184,134,248,0.3)] via-transparent to-[rgba(124,58,237,0.15)] shadow-[0_0_30px_0_rgba(184,134,248,0.1)] border-glow animate-scale-in ${isVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.15s" }}>
          <div className="w-full bg-[var(--bg-card)] rounded-[20px] p-12 flex items-center gap-12 card-hover">
            <div className="flex-1 flex flex-col gap-6">
              <span className="font-inter text-[64px] font-bold text-[var(--purple-primary)] leading-none">&ldquo;</span>
              <p className="text-lg text-[var(--text-feature)] leading-relaxed -mt-8">
                通过 Infimate 的人设化 AI Agent，我们实现了私域用户的 7×24 小时智能服务。AI 数字员工不仅完美复刻了主播的语言风格，还能根据用户画像进行精准推荐，显著提升了用户粘性和转化率。
              </p>
              <p className="text-sm font-medium text-[var(--text-muted)]">— 头部直播电商公司运营负责人</p>
            </div>

            <div className="w-[360px] flex flex-col gap-6">
              {results.map((r) => (
                <div key={r.label} className="flex flex-col gap-1">
                  <span className="font-inter text-4xl font-bold text-[var(--purple-primary)]">{r.value}</span>
                  <span className="text-sm text-[var(--text-secondary)]">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
