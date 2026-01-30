export function AdminSidebar({ onClose }) {
  const NAV_LINKS = [
    { id: 1, label: "لوحة التحكم", icon: "dashboard", active: true },
    { id: 2, label: "الأطباء", icon: "person_add", active: false },
    { id: 3, label: "المرضى", icon: "group", active: false },
    { id: 4, label: "المواعيد", icon: "calendar_month", active: false },
    { id: 5, label: "التقارير المالية", icon: "payments", active: false },
    { id: 6, label: "الإعدادات", icon: "settings", active: false },
  ];

  return (
    <aside className="w-72 h-full bg-white/50 dark:bg-[#111716]/50 border-l border-slate-200 dark:border-[#293835] flex flex-col justify-between p-4 shadow-2xl lg:shadow-none">
      <div className="flex flex-col gap-8">
        {/* Header with Close Button for Mobile */}
        <div className="flex items-center justify-between px-2">
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-full size-10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white">medical_services</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-base font-bold">نظام العيادة</h1>
              <p className="text-slate-500 dark:text-[#9eb7b2] text-xs">لوحة الإدارة الشاملة</p>
            </div>
          </div>
          
          {/* Close button visible only on mobile screens */}
          <button 
            onClick={onClose} 
            className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-[#293835] rounded-full transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href="#"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${
                link.active
                  ? "bg-primary/10 text-primary border border-primary/20 font-bold"
                  : "text-slate-600 dark:text-[#9eb7b2] hover:bg-slate-100 dark:hover:bg-[#293835] font-medium"
              }`}
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <p className="text-sm">{link.label}</p>
            </a>
          ))}
        </nav>
      </div>

      <button className="w-full flex cursor-pointer items-center justify-center rounded-xl h-12 px-4 bg-primary text-background-dark text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
        <span className="material-symbols-outlined ml-2">add_circle</span>
        <span className="truncate">إضافة موعد جديد</span>
      </button>
    </aside>
  );
}