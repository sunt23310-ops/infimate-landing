import Image from "next/image";
import Badge from "../Badge";

const painPoints = [
  { num: "01", title: "主播精力瓶颈", desc: "持续工作时长受限、排期受限，头部主播个人依赖性强且可复制性低", img: "/images/pain1-streamer.jpg" },
  { num: "02", title: "私域运营成本激增", desc: "流量成本攀升，人工客服成本居高不下，精细化运营难以规模化", img: "/images/pain2-cost.jpg" },
  { num: "03", title: "用户咨询无法即时响应", desc: "粉丝海量咨询、个性化推荐需求难以通过直播或人工客服有效满足", img: "/images/pain3-chat.jpg" },
  { num: "04", title: "非直播时段价值浪费", desc: "直播间隔期用户活跃度低，预热种草、售后跟进、复购引导缺乏有效触达", img: "/images/pain4-time.jpg" },
];

function BentoCard({ item, tall }: { item: typeof painPoints[number]; tall: boolean }) {
  return (
    <div className={`relative rounded-[20px] overflow-hidden border border-white/[0.03] ${tall ? "flex-1" : "h-[220px]"}`}>
      {/* Background image */}
      <Image src={item.img} alt={item.title} fill className="object-cover opacity-30" />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,20,0.95)] via-[rgba(10,10,20,0.7)] to-[rgba(10,10,20,0.3)]" />
      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3 p-6 h-full justify-end">
        <span className="font-inter text-[48px] font-bold text-[rgba(184,134,248,0.15)] leading-none">{item.num}</span>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );
}

export default function PainPointsSection() {
  return (
    <section className="w-full bg-[#161630] px-[120px] py-[100px] flex flex-col items-center gap-14">
      <Badge text="INDUSTRY CHALLENGES" />
      <h2 className="text-[40px] font-bold text-white text-center">直播电商正面临前所未有的挑战</h2>

      {/* Bento grid: 2 columns, asymmetric staggered */}
      <div className="w-full flex gap-5 h-[600px]">
        <div className="flex-1 flex flex-col gap-5">
          <BentoCard item={painPoints[0]} tall />
          <BentoCard item={painPoints[1]} tall={false} />
        </div>
        <div className="flex-1 flex flex-col gap-5">
          <BentoCard item={painPoints[2]} tall={false} />
          <BentoCard item={painPoints[3]} tall />
        </div>
      </div>
    </section>
  );
}
