"use client";
import Image from "next/image";
import Badge from "../Badge";
import { useInView } from "@/hooks/useInView";

const features = [
  "多模态沟通 — 文字/语音/图片/小程序卡片",
  "肤质智能检测 — 拍照分析多维度肤质状态",
  "化妆台扫描 — 识别产品并给出使用建议",
  "个性化推荐 — 基于用户画像的精准商品推荐",
  "主动服务 — 生日关怀/换季提醒/签收跟进",
];

export default function CSideSection() {
  const { ref: textRef, isVisible: textVis } = useInView();
  const { ref: phoneRef, isVisible: phoneVis } = useInView();

  return (
    <section id="products" className="w-full bg-[var(--bg-secondary)] px-[120px] py-[140px] flex items-center gap-20">
      <div className="flex flex-col gap-10 w-[520px]">
        <Badge text="用户体验" />
        <div ref={textRef} className={`flex flex-col gap-10 animate-fade-left ${textVis ? "is-visible" : ""}`}>
          <h2 className="text-4xl font-bold text-white">用户侧 — 像真人主播一样对话</h2>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed">
            AI 数字员工支持文字、语音、图片等多模态互动，为用户提供真实的主播对话体验
          </p>
          <div className={`flex flex-col gap-5 animate-stagger ${textVis ? "is-visible" : ""}`}>
            {features.map((f) => (
              <div key={f} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--purple-primary)] shrink-0" />
                <span className="text-[15px] text-[var(--text-feature)]">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={phoneRef} className={`relative w-[560px] h-[600px] animate-scale-in ${phoneVis ? "is-visible" : ""}`}>
        <div className="absolute left-0 top-[60px] w-[260px] h-[480px] rounded-[32px] bg-white border border-white/10 overflow-hidden z-10 shadow-2xl phone-float-delay-1">
          <Image src="/screenshots/肤质检测聊天界面.png" alt="肤质检测" fill className="object-cover object-top" />
        </div>
        <div className="absolute left-[130px] top-0 w-[320px] h-[560px] rounded-[36px] bg-white border border-white/10 overflow-hidden z-20 shadow-2xl phone-float">
          <Image src="/screenshots/综合聊天界面.png" alt="综合聊天" fill className="object-cover object-top" />
        </div>
        <div className="absolute right-0 top-[60px] w-[260px] h-[480px] rounded-[32px] bg-white border border-white/10 overflow-hidden z-10 shadow-2xl phone-float-delay-2">
          <Image src="/screenshots/化妆台扫描聊天界面.png" alt="化妆台扫描" fill className="object-cover object-top" />
        </div>
        <div className="absolute left-[180px] -top-10 w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle,rgba(184,134,248,0.2)_0%,transparent_70%)] glow-pulse" />
      </div>
    </section>
  );
}
