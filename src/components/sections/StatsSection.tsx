const stats = [
  { value: "<1s", label: "响应速度" },
  { value: "80%+", label: "标准咨询承接" },
  { value: "7×24", label: "全天候在线" },
  { value: "99.9%", label: "系统可用率" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[var(--purple-dark)] to-[var(--purple-primary)] px-[120px] py-20 flex justify-around items-center">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-2">
          <span className="font-inter text-5xl font-bold text-white">{s.value}</span>
          <span className="text-base text-white/80">{s.label}</span>
        </div>
      ))}
    </section>
  );
}
