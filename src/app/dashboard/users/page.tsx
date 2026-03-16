import { LayoutDashboard, Video, Package, LogOut, Plus } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Video, label: "直播库", active: false },
  { icon: Package, label: "商品库", active: false },
];

const statsCards = [
  { value: "12,458", label: "总用户数", color: "text-[var(--bs-text)]" },
  { value: "8", label: "活跃分群", color: "text-[var(--bs-text)]" },
  { value: "76.3%", label: "触达率", color: "text-[var(--bs-text)]" },
  { value: "23.8%", label: "转化率", color: "text-[var(--bs-primary)]" },
];

const tableRows = [
  { name: "高价值复购用户", count: "3,247", reach: "89.2%", convert: "34.5%", status: "运行中", statusColor: "bg-[#22C55E20] text-[#22C55E]" },
  { name: "新用户首购引导", count: "1,893", reach: "72.1%", convert: "18.3%", status: "运行中", statusColor: "bg-[#22C55E20] text-[#22C55E]" },
  { name: "沉睡用户唤醒", count: "4,521", reach: "45.6%", convert: "12.1%", status: "已暂停", statusColor: "bg-[#FFD70020] text-[#FFD700]" },
];

export default function UserSegmentPage() {
  return (
    <div className="flex h-screen bg-[var(--bs-bg)] font-noto">
      {/* Sidebar */}
      <aside className="w-[280px] bg-[var(--bs-sidebar)] text-white flex flex-col justify-between p-8 shrink-0">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--bs-primary)] flex items-center justify-end gap-0.5 px-1.5">
              <div className="w-1 h-2.5 bg-white rounded-sm" />
              <div className="w-1 h-[18px] bg-white rounded-sm" />
              <div className="w-1 h-3.5 bg-white rounded-sm" />
            </div>
            <span className="text-base font-bold tracking-wider">赛博数据</span>
          </div>
          <nav className="flex flex-col gap-1">
            <span className="text-[10px] font-medium text-[#555555] tracking-widest mb-2">菜单</span>
            {navItems.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg ${item.active ? "bg-white/10" : "hover:bg-white/5"} transition-colors`}
              >
                {item.active && <div className="w-1 h-5 rounded-full bg-[var(--bs-primary)]" />}
                <item.icon size={18} className={item.active ? "text-white" : "text-[#666666]"} />
                <span className={`text-sm font-medium ${item.active ? "text-white" : "text-[#666666]"}`}>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[var(--bs-primary)] flex items-center justify-center text-white text-sm font-bold">A</div>
            <span className="text-sm text-white">管理员</span>
          </div>
          <button className="w-8 h-8 rounded-md bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
            <LogOut size={16} className="text-white" />
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-12 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <span className="text-[11px] text-[#999999]">首页 / 用户分层</span>
          <div className="flex items-center justify-between">
            <h1 className="text-[28px] font-bold text-[var(--bs-text)]">用户分层管理</h1>
            <button className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[var(--bs-primary)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
              <Plus size={16} />
              新建分群
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6">
          {statsCards.map((s) => (
            <div key={s.label} className="bg-white rounded-lg border border-[var(--bs-border)] p-6 flex flex-col gap-2">
              <span className={`font-inter text-[32px] font-bold ${s.color}`}>{s.value}</span>
              <span className="text-sm text-[var(--bs-text-muted)]">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-[var(--bs-text)]">用户分群列表</h2>
          <div className="rounded-lg border border-[var(--bs-border)] overflow-hidden">
            <div className="grid grid-cols-[1fr_120px_100px_100px_80px] bg-[#F5F5F5] px-4 py-3">
              <span className="text-xs font-semibold text-[var(--bs-text-muted)]">分群名称</span>
              <span className="text-xs font-semibold text-[var(--bs-text-muted)]">用户数</span>
              <span className="text-xs font-semibold text-[var(--bs-text-muted)]">触达率</span>
              <span className="text-xs font-semibold text-[var(--bs-text-muted)]">转化率</span>
              <span className="text-xs font-semibold text-[var(--bs-text-muted)]">状态</span>
            </div>
            {tableRows.map((row) => (
              <div key={row.name} className="grid grid-cols-[1fr_120px_100px_100px_80px] px-4 py-4 border-t border-[var(--bs-border)] bg-white">
                <span className="text-sm text-[var(--bs-text)]">{row.name}</span>
                <span className="font-inter text-sm text-[var(--bs-text)]">{row.count}</span>
                <span className="font-inter text-sm text-[var(--bs-text)]">{row.reach}</span>
                <span className="font-inter text-sm font-semibold text-[var(--bs-primary)]">{row.convert}</span>
                <span className={`text-xs px-2 py-1 rounded w-fit ${row.statusColor}`}>{row.status}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
