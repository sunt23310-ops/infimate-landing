"use client";
import { User, Brain, Settings, Bot } from "lucide-react";
import Badge from "../Badge";
import { useInView } from "@/hooks/useInView";

const solutions = [
  { icon: User, title: "人设化对话引擎", desc: "复刻主播语言风格与情感温度，打造高度拟真的专属 AI 助手，实现与用户的情感化互动" },
  { icon: Brain, title: "电商知识大脑", desc: "实时对接商品库、知识图谱与用户画像，提供精准的专业问答与个性化推荐" },
  { icon: Settings, title: "运营工具平台", desc: "场景化运营、用户分层、数据看板，全方位掌控数字员工的服务状态与效果" },
];

export default function SolutionSection() {
  const { ref, isVisible } = useInView();

  return (
    <section id="solutions" className="w-full bg-[var(--bg-primary)] px-[120px] py-[100px] flex flex-col gap-14">
      <Badge text="解决方案" />
      <div ref={ref} className={`flex flex-col items-center gap-14 w-full animate-on-scroll ${isVisible ? "is-visible" : ""}`}>
        <h2 className="text-[40px] font-bold text-white text-center">Infimate — 人设化 AI Agent 解决方案</h2>
        <p className="text-lg text-[var(--text-secondary)] text-center max-w-[800px] leading-relaxed">
          基于大语言模型与多模态技术，为直播主播打造专属 AI 数字员工，实现&ldquo;诊断-推荐-验证&rdquo;用户体验闭环
        </p>

        <div className="relative w-full h-[560px]">
          <div className="absolute w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,134,248,0.14)_0%,transparent_70%)] pointer-events-none glow-pulse" />

          {/* Center orb with pulse */}
          <div className={`absolute left-1/2 top-[165px] w-[150px] h-[150px] rounded-full bg-gradient-to-b from-[var(--purple-primary)] to-[var(--purple-dark)] flex items-center justify-center orb-pulse animate-scale-in ${isVisible ? "is-visible" : ""}`}>
            <Bot size={60} className="text-white" />
          </div>

          {/* Connection lines */}
          <div className="absolute left-[calc(50%-225px)] top-[238px] w-[160px] h-[3px] bg-gradient-to-r from-transparent to-[rgba(184,134,248,0.37)] rounded-full" />
          <div className="absolute left-[calc(50%+65px)] top-[238px] w-[160px] h-[3px] bg-gradient-to-r from-[rgba(184,134,248,0.37)] to-transparent rounded-full" />
          <div className="absolute left-1/2 -translate-x-1/2 top-[315px] w-[3px] h-[65px] bg-gradient-to-b from-[rgba(184,134,248,0.37)] to-transparent rounded-full" />

          {/* Glow dots */}
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(184,134,248,0.37)] left-[calc(50%-180px)] top-[237px]" />
          <div className="absolute w-1 h-1 rounded-full bg-[rgba(184,134,248,0.25)] left-[calc(50%-140px)] top-[238px]" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(184,134,248,0.37)] left-[calc(50%+180px)] top-[237px]" />
          <div className="absolute w-1 h-1 rounded-full bg-[rgba(184,134,248,0.25)] left-[calc(50%+140px)] top-[238px]" />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[rgba(184,134,248,0.37)] left-1/2 -translate-x-1/2 top-[345px]" />
          <div className="absolute w-1 h-1 rounded-full bg-[rgba(184,134,248,0.25)] left-1/2 -translate-x-1/2 top-[365px]" />

          {/* Card 1 - Left */}
          <div className={`absolute left-0 top-[140px] w-[340px] bg-[var(--bg-card)] rounded-2xl p-6 border border-[rgba(184,134,248,0.09)] shadow-[0_0_20px_0_rgba(184,134,248,0.07)] card-hover animate-fade-left ${isVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col gap-3">
              <div className="w-11 h-11 rounded-[10px] bg-[rgba(184,134,248,0.08)] flex items-center justify-center">
                <User size={22} className="text-[var(--purple-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{solutions[0].title}</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{solutions[0].desc}</p>
            </div>
          </div>

          {/* Card 2 - Right */}
          <div className={`absolute right-0 top-[140px] w-[340px] bg-[var(--bg-card)] rounded-2xl p-6 border border-[rgba(184,134,248,0.09)] shadow-[0_0_20px_0_rgba(184,134,248,0.07)] card-hover animate-fade-right ${isVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col gap-3">
              <div className="w-11 h-11 rounded-[10px] bg-[rgba(184,134,248,0.08)] flex items-center justify-center">
                <Brain size={22} className="text-[var(--purple-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{solutions[1].title}</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{solutions[1].desc}</p>
            </div>
          </div>

          {/* Card 3 - Bottom center */}
          <div className={`absolute left-1/2 -translate-x-1/2 top-[380px] w-[420px] bg-[var(--bg-card)] rounded-2xl p-6 border border-[rgba(184,134,248,0.09)] shadow-[0_0_20px_0_rgba(184,134,248,0.07)] card-hover animate-on-scroll ${isVisible ? "is-visible" : ""}`} style={{ animationDelay: "0.45s" }}>
            <div className="flex flex-col gap-3">
              <div className="w-11 h-11 rounded-[10px] bg-[rgba(184,134,248,0.08)] flex items-center justify-center">
                <Settings size={22} className="text-[var(--purple-primary)]" />
              </div>
              <h3 className="text-lg font-semibold text-white">{solutions[2].title}</h3>
              <p className="text-[13px] text-[var(--text-muted)] leading-relaxed">{solutions[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
