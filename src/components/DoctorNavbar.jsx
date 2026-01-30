import React from 'react';

// --- Data Extraction ---
const NAV_DATA = {
    uiLabels: {
        title: "لوحة تحكم الطبيب",
        searchPlaceholder: "بحث عن مريض أو سجل...",
        statusAvailable: "متاح الآن",
    },
    // You can easily add more notification logic here later
    hasNotifications: true 
};

export function DoctorNavbar({ setIsSidebarOpen }) {
    return (
        <header className="flex items-center justify-between sticky top-0 z-30 w-full 
            bg-white/80 dark:bg-[#0a0f0e]/80 backdrop-blur-md 
            border-b border-slate-200 dark:border-[#293835] 
            px-4 md:px-8 py-3 transition-colors duration-300">
            
            <div className="flex items-center gap-4 lg:gap-8 flex-1">
                {/* 1. Mobile & Tablet Sidebar Toggle */}
                <button 
                    onClick={() => setIsSidebarOpen(prev => !prev)}
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-600 dark:text-slate-300"
                    aria-label="Toggle Sidebar"
                >
                    <span className="material-symbols-outlined text-2xl">menu_open</span>
                </button>

                {/* 2. Logo Section */}
                <div className="flex items-center gap-3 shrink-0">
                    <div className="size-8 text-emerald-500 dark:text-primary">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="hidden lg:block text-slate-900 dark:text-white text-lg font-bold tracking-tight">
                        {NAV_DATA.uiLabels.title}
                    </h2>
                </div>

                {/* 3. Unified Search Bar */}
                <div className="relative w-full max-w-md hidden sm:block group">
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
                        search
                    </span>
                    <input 
                        className="w-full bg-slate-100 dark:bg-[#1c2624] border border-transparent dark:border-[#293835] 
                        rounded-xl py-2 pr-10 pl-4 text-sm 
                        focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 dark:focus:border-primary
                        text-slate-900 dark:text-white transition-all outline-none" 
                        placeholder={NAV_DATA.uiLabels.searchPlaceholder} 
                        type="text" 
                    />
                </div>
            </div>

            {/* 4. Action Buttons */}
            <div className="flex items-center gap-2 md:gap-4">
                {/* Availability Badge */}
                <button className="hidden xs:flex items-center justify-center gap-2 rounded-xl h-10 px-4 
                    bg-emerald-500 dark:bg-primary text-white dark:text-[#111716] 
                    text-xs md:text-sm font-bold shadow-lg shadow-emerald-500/10 
                    transition-all hover:brightness-110 active:scale-95">
                    <span className="material-symbols-outlined text-lg">check_circle</span>
                    <span>{NAV_DATA.uiLabels.statusAvailable}</span>
                </button>

                {/* Icon Buttons Group */}
                <div className="flex items-center gap-1.5 md:gap-2">
                    <button className="flex items-center justify-center rounded-xl h-10 w-10 
                        bg-slate-100 dark:bg-[#293835] text-slate-600 dark:text-white 
                        hover:bg-slate-200 dark:hover:bg-[#3d524e] relative transition-colors">
                        <span className="material-symbols-outlined">notifications</span>
                        {NAV_DATA.hasNotifications && (
                            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-[#0a0f0e]" />
                        )}
                    </button>
                    
                    <button className="flex items-center justify-center rounded-xl h-10 w-10 
                        bg-slate-100 dark:bg-[#293835] text-slate-600 dark:text-white 
                        hover:bg-slate-200 dark:hover:bg-[#3d524e] transition-colors">
                        <span className="material-symbols-outlined">account_circle</span>
                    </button>
                </div>
            </div>
        </header>
    );
}