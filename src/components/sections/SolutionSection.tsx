import { User, Brain, Settings } from "lucide-react";
import Badge from "../Badge";

const solutions = [
  { icon: User, title: "人设化对话引擎", desc: "复刻主播语言风格与情感温度，实现多轮自然对话，让用户感受真实的 AI 主播互动" },
  { icon: Brain, title: "电商知识大脑", desc: "深度理解商品特性、用户偏好、消费场景，实现精准的个性化推荐与专业咨询" },
  { icon: Settings, title: "运营工具平台", desc: "一站式管理后台，涵盖数据看板、商品管理、直播管理、用户分层等全场景运营能力" },
];

export default function SolutionSection() {
  return (
    <section id="solutions" className="w-full bg-[var(--bg-primary)] px-[120px] py-[100px] flex flex-col items-center gap-14">
      <Badge text="OUR SOLUTION" />
      <h2 className="text-[40px] font-bold text-white text-center">Infimate — 人设化 AI Agent 解决方案</h2>
      <p className="text-lg text-[var(--text-secondary)] text-center max-w-[800px] leading-relaxed">
        基于大语言模型与多模态技术，为直播主播打造专属 AI 数字员工，实现&ldquo;诊断-推荐-验证&rdquo;用户体验闭环
      </p>
      <div className="w-full grid grid-cols-3 gap-6">
        {solutions.map((item) => (
          <div key={item.title} className="bg-[var(--bg-card)] rounded-2xl p-8 flex flex-col gap-4 border border-white/[0.03]">
            <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center">
              <item.icon size={24} className="text-[var(--purple-primary)]" />
            </div>
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
