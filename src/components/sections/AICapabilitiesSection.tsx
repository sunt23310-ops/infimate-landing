"use client";
import Image from "next/image";
import Badge from "../Badge";
import { useInView } from "@/hooks/useInView";

export default function AICapabilitiesSection() {
  const { ref, isVisible } = useInView();

  return (
    <section className="w-full bg-[var(--bg-primary)] px-[120px] py-[140px] flex flex-col gap-14">
      <Badge text="核心 AI 能力" />
      <div ref={ref} className={`flex flex-col items-center gap-14 w-full animate-on-scroll ${isVisible ? "is-visible" : ""}`}>
        <h2 className="text-[40px] font-bold text-white text-center">核心 AI 能力</h2>
        <p className="text-lg text-[var(--text-secondary)] text-center max-w-[680px] leading-relaxed -mt-4">
          基于大语言模型与多模态 AI 技术，为直播电商场景量身打造四大核心能力模块，全面赋能主播私域运营
        </p>

        <div className="w-full grid grid-cols-2 grid-rows-2 gap-5 h-[560px]">
          {/* b1 - Skin detection with phone */}
          <div className="relative bg-[var(--bg-card)] rounded-2xl p-6 border border-white/[0.03] overflow-hidden flex card-hover">
            <div className="flex flex-col gap-3 w-1/2">
              <h3 className="text-[22px] font-semibold text-white">肤质智能检测</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                用户只需上传一张自拍照，AI 即可从水油平衡、毛孔状态、色斑分布、皱纹深度等 8 个维度进行全面肤质评估，生成专属肤质报告并推荐针对性护肤方案
              </p>
            </div>
            <div className="absolute right-4 bottom-0 w-[200px] h-[340px] rounded-t-[24px] overflow-hidden">
              <Image src="/screenshots/肤质画像检测结果页.png" alt="肤质检测" fill className="object-cover object-top" />
            </div>
          </div>

          {/* b2 - Proactive service */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-white/[0.03] flex flex-col gap-4 card-hover">
            <div className="w-10 h-10 rounded-lg bg-[var(--purple-bg)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--purple-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/><path d="M4 2C2.8 3.7 2 5.7 2 8"/><path d="M22 8c0-2.3-.8-4.3-2-6"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-white">主动服务引擎</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              基于用户生命周期与行为事件，自动触发个性化关怀消息：生日祝福与专属优惠、换季护肤提醒、快递签收后的使用指导、复购周期智能提醒。让每位用户感受到"被记住"的温暖，有效提升复购率 30%+
            </p>
          </div>

          {/* b3 - Vanity scanner */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 border border-white/[0.03] flex flex-col gap-4 card-hover">
            <div className="w-10 h-10 rounded-lg bg-[var(--purple-bg)] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--purple-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>
            </div>
            <h3 className="text-xl font-semibold text-white">化妆台扫描</h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              用户拍摄化妆台照片，AI 通过视觉识别自动检测所有美妆产品的品牌与品类，结合用户肤质档案给出使用顺序建议、成分冲突预警以及个性化的产品搭配推荐，帮助用户科学护肤
            </p>
          </div>

          {/* b4 - Product recommendation with phone */}
          <div className="relative bg-[var(--bg-card)] rounded-2xl p-6 border border-white/[0.03] overflow-hidden flex card-hover">
            <div className="flex flex-col gap-3 w-1/2">
              <h3 className="text-[22px] font-semibold text-white">个性化产品推荐</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                融合用户画像、消费偏好、肤质数据与浏览行为，通过协同过滤与深度学习算法实时生成千人千面的商品推荐列表，平均点击转化率提升 45%
              </p>
            </div>
            <div className="absolute right-4 bottom-0 w-[180px] h-[320px] rounded-t-[24px] overflow-hidden">
              <Image src="/screenshots/多产品推荐-横滑卡片.png" alt="产品推荐" fill className="object-cover object-top" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
