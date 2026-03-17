import SubpageHeader from "@/components/SubpageHeader";
import Badge from "@/components/Badge";
import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Mail, text: "contact@infimate.ai" },
  { icon: Phone, text: "400-888-9999" },
  { icon: MapPin, text: "上海市浦东新区陆家嘴金融中心" },
];

export default function ContactPage() {
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
            <input placeholder="请输入姓名" className="h-12 px-4 rounded-lg bg-[#0A0A1A] border border-white/10 text-white text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--purple-primary)] transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[var(--text-secondary)]">联系邮箱</label>
            <input type="email" placeholder="请输入邮箱地址" className="h-12 px-4 rounded-lg bg-[#0A0A1A] border border-white/10 text-white text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--purple-primary)] transition-colors" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-[var(--text-secondary)]">留言内容</label>
            <textarea placeholder="请输入留言内容..." className="h-[120px] px-4 py-3 rounded-lg bg-[#0A0A1A] border border-white/10 text-white text-sm placeholder:text-[var(--text-muted)] outline-none focus:border-[var(--purple-primary)] transition-colors resize-none" />
          </div>
          <button className="h-[52px] rounded-xl bg-gradient-to-b from-[var(--purple-primary)] to-[var(--purple-dark)] text-white text-base font-semibold hover:opacity-90 transition-opacity">
            发送留言
          </button>
        </div>
      </section>
    </main>
  );
}
