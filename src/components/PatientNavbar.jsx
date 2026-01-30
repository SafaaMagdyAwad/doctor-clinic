export function PatientNavbar({ setIsSidebarOpen }) {
    // --- Data Variables ---
    const user = {
        name: "أحمد محمد",
        roleLabel: "حساب مريض",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBL2L6JCY24wEIAQMylUOuo0C9HCT84KADyID8Vu_X94LOa-IaaA127Fqj0sm9XXB0PG9hW80UOvMkVX7umW7kA8nSIJTtLDA1MUfQbpioaJhB5MbZ9gkmpomxuIeUpj11JJL_WIQDJZ3kWy-l8hhMyykNVJ7uYopi1Qv3VAJBBMNQf0EgImQA-A4l2DeCuL4cX78CcmTFK-t8KUPDe_CxaxlIn0sk0yr0MbEcUu2grO6_neUNqbUCdYhDqxJ_bSl8vKeUyO1nsZJvb",
        hasNotifications: true
    };

    const uiLabels = {
        searchPlaceholder: "البحث..."
    };

    return (
        <header className="sticky top-0 z-40 flex items-center justify-between bg-white/80 dark:bg-[#0a0f0e]/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 md:px-8 py-4 transition-colors">
            
            {/* Search Section */}
            <div className="flex items-center gap-4 flex-1">
                {/* Toggle Button */}
                <button 
                    onClick={() => setIsSidebarOpen((prev) => !prev)}
                    className="p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-600 dark:text-slate-300"
                >
                    <span className="material-symbols-outlined">menu_open</span>
                </button>

                <div className="relative w-full max-w-md hidden sm:block">
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                        search
                    </span>
                    <input 
                        className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-2xl py-2.5 pr-10 pl-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none" 
                        placeholder={uiLabels.searchPlaceholder} 
                        type="text" 
                    />
                </div>
            </div>

            {/* Actions Section */}
            <div className="flex items-center gap-2 md:gap-5">
                {/* Notifications */}
                <button className="relative p-2.5 bg-slate-100 dark:bg-slate-800 rounded-2xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-90">
                    <span className="material-symbols-outlined">notifications</span>
                    {user.hasNotifications && (
                        <span className="absolute top-2.5 right-2.5 size-2.5 bg-rose-500 rounded-full border-2 border-white dark:border-[#0a0f0e]" />
                    )}
                </button>
                
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden xs:block" />
                
                {/* User Profile Info */}
                <div className="flex items-center gap-3 pl-1">
                    <div className="flex flex-col items-end hidden sm:flex">
                        <span className="text-sm font-bold leading-tight">{user.name}</span>
                        <span className="text-[10px] text-primary font-bold uppercase tracking-tighter">
                            {user.roleLabel}
                        </span>
                    </div>
                    <div 
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-2xl size-10 border-2 border-primary/20 shadow-sm" 
                        style={{ backgroundImage: `url("${user.avatar}")` }}
                    />
                </div>
            </div>
        </header>
    );
}