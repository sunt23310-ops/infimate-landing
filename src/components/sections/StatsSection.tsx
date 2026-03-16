"use client";
import { useEffect, useRef, useState } from "react";
import { Zap, MessageCircle, Clock4, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const stats = [
  { icon: Zap, value: "<1s", numericPart: 1, prefix: "<", suffix: "s", label: "响应速度" },
  { icon: MessageCircle, value: "80%+", numericPart: 80, prefix: "", suffix: "%+", label: "标准咨询承接" },
  { icon: Clock4, value: "7×24", numericPart: 7, prefix: "", suffix: "×24", label: "全天候在线" },
  { icon: ShieldCheck, value: "99.9%", numericPart: 99.9, prefix: "", suffix: "%", label: "系统可用率" },
];

function AnimatedStat({ item, isVisible }: { item: typeof stats[number]; isVisible: boolean }) {
  const [displayed, setDisplayed] = useState("0");
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 1500;
    const start = performance.now();
    const target = item.numericPart;
    const isDecimal = target % 1 !== 0;

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setDisplayed(isDecimal ? current.toFixed(1) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [isVisible, item.numericPart]);

  return (
    <div className="flex flex-col items-center gap-3">
      <item.icon size={28} className="text-white/80" />
      <span className="font-inter text-5xl font-bold text-white">
        {isVisible ? `${item.prefix}${displayed}${item.suffix}` : item.value}
      </span>
      <span className="text-base text-white/80">{item.label}</span>
    </div>
  );
}

export default function StatsSection() {
  const { ref, isVisible } = useInView(0.3);

  return (
    <section ref={ref} className="w-full bg-gradient-to-b from-[var(--purple-dark)] to-[var(--purple-primary)] px-[120px] py-20 flex justify-around items-center">
      {stats.map((s) => (
        <AnimatedStat key={s.label} item={s} isVisible={isVisible} />
      ))}
    </section>
  );
}
