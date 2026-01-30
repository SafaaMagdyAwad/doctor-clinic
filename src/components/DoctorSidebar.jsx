import React from 'react';

// --- Data Extraction ---
const DOCTOR_INFO = {
    name: "د. أحمد علي",
    role: "استشاري جراحة القلب",
    image: "https://i.pravatar.cc/150?u=doctor-ahmed", // Reliable placeholder
};

const SIDEBAR_LINKS = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: 'dashboard', active: true },
    { id: 'patients', label: 'المرضى', icon: 'group', active: false },
    { id: 'records', label: 'السجلات الطبية', icon: 'description', active: false },
    { id: 'reports', label: 'التقارير', icon: 'analytics', active: false },
    { id: 'settings', label: 'الإعدادات', icon: 'settings', active: false },
];

export function DoctorSidebar({ onClose }) {
    return (
        <aside className="h-full w-72 flex flex-col justify-between p-5 transition-colors duration-300
            bg-white dark:bg-[#0a0f0e] 
            border-l border-slate-200 dark:border-[#293835] 
            shadow-xl lg:shadow-none">
            
            <div className="flex flex-col gap-8">
                {/* Header & Mobile Close Button */}
                <div className="flex items-center justify-between lg:justify-center px-2">
                    <div className="flex items-center gap-3">
                        <div 
                            className="bg-center bg-cover rounded-2xl size-12 border-2 border-emerald-500 shadow-lg shadow-emerald-500/20" 
                            style={{ backgroundImage: `url(${DOCTOR_INFO.image})` }}
                        />
                        <div className="flex flex-col">
                            <h1 className="text-slate-900 dark:text-white text-sm font-bold leading-tight">
                                {DOCTOR_INFO.name}
                            </h1>
                            <p className="text-emerald-600 dark:text-emerald-400 text-[11px] font-medium">
                                {DOCTOR_INFO.role}
                            </p>
                        </div>
                    </div>
                    
                    {/* Only visible on mobile/tablet */}
                    <button 
                        onClick={onClose}
                        className="lg:hidden p-2 text-slate-400 hover:text-rose-500 transition-colors"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-1.5">
                    {SIDEBAR_LINKS.map((link) => (
                        <a 
                            key={link.id}
                            href="#"
                            className={`
                                flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                                ${link.active 
                                    ? "bg-emerald-500 dark:bg-primary text-white dark:text-[#111716] shadow-lg shadow-emerald-500/20 dark:shadow-primary/10 font-bold" 
                                    : "text-slate-500 dark:text-[#9eb7b2] hover:bg-slate-100 dark:hover:bg-[#1c2624] hover:text-emerald-600 dark:hover:text-white"
                                }
                            `}
                        >
                            <span className={`material-symbols-outlined text-[22px] ${link.active ? '' : 'group-hover:scale-110 transition-transform'}`}>
                                {link.icon}
                            </span>
                            <p className="text-[13px]">{link.label}</p>
                        </a>
                    ))}
                </nav>
            </div>

            {/* Logout Button */}
            <div className="pt-6 border-t border-slate-100 dark:border-[#293835]">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl 
                    text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 
                    transition-all duration-200 group">
                    <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                        logout
                    </span>
                    <p className="text-sm font-bold">تسجيل الخروج</p>
                </button>
            </div>
        </aside>
    );
}