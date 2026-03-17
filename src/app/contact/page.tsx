"use client";

import { useState } from "react";
import SubpageHeader from "@/components/SubpageHeader";
import Badge from "@/components/Badge";
import { Mail, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, text: "support@infimate.ai" },
  { icon: MapPin, text: "北京市朝阳区数字云科数字人基地" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    const subject = encodeURIComponent(`[官网留言] 来自 ${form.name}`);
    const body = encodeURIComponent(`姓名：${form.name}\n邮箱：${form.email}\n\n留言内容：\n${form.message}`);
    window.open(`mailto:support@infimate.ai?subject=${subject}&body=${body}`);
  };

  return (
    <main className="bg-[var(--bg-primary)] text-white min-h-screen">
      <SubpageHeader />
      <div className="h-[72px]" />
      <section className="flex items-center gap-20 px-[120px] py-[100px]">
        <div className="flex-1 flex flex-col gap-10">
          <Badge text="CONTACT US" />
          <h1 className="text-[44px] font-bold">联系我们</h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            无论您有产品咨询、合作洽谈还是技术支持需求，我们随时为您提供服务
          </p>
          <div className="flex flex-col gap-6">
            {contactInfo.map((c) => (
              <div key={c.text} className="flex items-center gap-4">
                <c.icon size={20} className="text-[var(--purple-primary)] shrink-0" />
                <span className="text-base text-[var(--text-feature)]">{c.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[480px] bg-[var(--bg-card)] rounded-[20px] border border-white/[0.06] p-10 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">给我们留言</h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[var(--text-secondary)]">您的姓名</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="请输入姓名" className="h-12 px-4 rounded-lg bg-[#0A0A1A] border border-white/10 text-white text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--purple-primary)] transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[var(--text-secondary)]">联系邮箱</label>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} type="email" placeholder="请输入邮箱地址" className="h-12 px-4 rounded-lg bg-[#0A0A1A] border border-white/10 text-white text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--purple-primary)] transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[var(--text-secondary)]">留言内容</label>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="请输入留言内容..." className="h-[120px] px-4 py-3 rounded-lg bg-[#0A0A1A] border border-white/10 text-white text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--purple-primary)] transition-colors resize-none" />
          </div>
          <button onClick={handleSubmit} className="h-[52px] rounded-xl bg-gradient-to-b from-[var(--purple-primary)] to-[var(--purple-dark)] text-white text-base font-semibold hover:opacity-90 transition-opacity">
            发送留言
          </button>
        </div>
      </section>
    </main>
  );
}
