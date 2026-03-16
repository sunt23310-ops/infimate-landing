import { Battery, TrendingUp, MessageCircleWarning, Timer } from "lucide-react";
import Badge from "../Badge";

const painPoints = [
  { icon: Battery, title: "主播精力瓶颈", desc: "持续工作时长受限、排期受限，头部主播个人依赖性强且可复制性低" },
  { icon: TrendingUp, title: "私域运营成本高昂", desc: "流量成本攀升，人工客服成本居高不下，精细化运营难以规模化" },
  { icon: MessageCircleWarning, title: "用户咨询无法即时响应", desc: "粉丝海量咨询、个性化推荐需求难以通过直播或人工客服有效满足" },
  { icon: Timer, title: "非直播时段价值浪费", desc: "直播间隔期用户活跃度低，预热种草、售后跟进、复购引导缺乏有效触达" },
];

export default function PainPointsSection() {
  return (
    <section className="w-full bg-[var(--bg-secondary)] px-[120px] py-[100px] flex flex-col items-center gap-14">
      <Badge text="INDUSTRY CHALLENGES" />
      <h2 className="text-[40px] font-bold text-white text-center">直播电商正面临前所未有的挑战</h2>
      <div className="w-full grid grid-cols-4 gap-5">
        {painPoints.map((item) => (
          <div key={item.title} className="bg-[var(--bg-card)] rounded-2xl p-6 flex flex-col gap-4 border border-white/[0.03]">
            <div className="w-12 h-12 rounded-xl bg-[var(--purple-bg)] flex items-center justify-center">
              <item.icon size={24} className="text-[var(--purple-primary)]" />
            </div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
