export function PatientSidebar() {
    // --- Data Variables ---
    const patientProfile = {
        name: "أحمد محمد",
        id: "12345",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCR2TS0Nzpqq2YIke_Dnpg3_JNRfQ0UWawaOJAxMve2ZxtRaZ4i8j06F9oJiQXFOl7J3FkMC-Dj3pCB-bqdzW6m-aDTAL43HCh5SwdeirXtJHgn9FoVTJJ_9-OY-A_ggw7di5hjYoLbl62O3TuzHo9PF5-CaF4nZA4qLqUtOqQ-yP32Nzux97Z5bG3qTTqFprqIwhdmKd9gdTQLtEZoZCrv9AREeDGd2vz5UX2xpg-qyLOgyfDfzaYoiaoNyTZvqjEQ4whcjqeK1FaR"
    };

    const navLinks = [
        { icon: "home", label: "الرئيسية", active: true, href: "#" },
        { icon: "calendar_today", label: "المواعيد", active: false, href: "#" },
        { icon: "description", label: "السجلات الطبية", active: false, href: "#" },
        { icon: "payments", label: "المدفوعات", active: false, href: "#" },
    ];

    const bottomLinks = [
        { icon: "settings", label: "الإعدادات", href: "#" },
    ];

    return (
        <aside className="w-72 bg-white dark:bg-[#111716] border-l border-slate-200 dark:border-slate-800 flex flex-col h-screen sticky top-0 transition-colors z-50">
            <div className="p-6 flex flex-col h-full">
                
                {/* Brand Logo */}
                <div className="flex items-center gap-3 text-primary mb-10 px-2">
                    <div className="size-11 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-white text-2xl">medical_services</span>
                    </div>
                    <h1 className="text-2xl font-black tracking-tight dark:text-white">شفاء</h1>
                </div>

                {/* Profile Card */}
                <div className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-800/40 rounded-[1.25rem] border border-slate-100 dark:border-slate-800 mb-8">
                    <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl size-11 shadow-sm" 
                        style={{ backgroundImage: `url("${patientProfile.avatar}")` }}
                    />
                    <div className="flex flex-col overflow-hidden">
                        <h1 className="text-sm font-bold truncate dark:text-white">{patientProfile.name}</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                            مريض رقم #{patientProfile.id}
                        </p>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="flex flex-col gap-1.5 flex-grow">
                    {navLinks.map((link, idx) => (
                        <SidebarLink key={idx} {...link} />
                    ))}
                </nav>

                {/* Bottom Section */}
                <div className="mt-auto flex flex-col gap-1.5 pt-6 border-t border-slate-100 dark:border-slate-800">
                    {bottomLinks.map((link, idx) => (
                        <SidebarLink key={idx} {...link} />
                    ))}
                    
                    <button className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-500/10 transition-all font-bold group w-full text-right">
                        <span className="material-symbols-outlined group-hover:rotate-12 transition-transform">logout</span>
                        <span className="text-sm">تسجيل الخروج</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}

// Helper component for clean Sidebar Links
function SidebarLink({ icon, label, active = false, href = "#" }) {
    return (
        <a 
            href={href} 
            className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group ${
                active 
                ? "bg-primary text-white shadow-lg shadow-primary/20" 
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary"
            }`}
        >
            <span className={`material-symbols-outlined transition-transform group-hover:scale-110 ${active ? "text-white" : ""}`}>
                {icon}
            </span>
            <span className="text-sm font-bold">{label}</span>
        </a>
    );
}