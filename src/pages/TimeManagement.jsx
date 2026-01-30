import { useState } from "react";
import { DoctorNavbar } from "../components/DoctorNavbar";
import { DoctorSidebar } from "../components/DoctorSidebar";

export function TimeManagement() {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
            <div className="flex h-screen overflow-hidden">
                   {/* Mobile Overlay */}
                                {isSidebarOpen && (
                                    <div 
                                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity"
                                        onClick={() => setIsSidebarOpen(false)}
                                    />
                                )}
                
                                {/* Sidebar Navigation */}
                                <div className={`
                                    fixed inset-y-0 right-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
                                    lg:relative lg:translate-x-0 
                                    ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
                                `}>
                                    <DoctorSidebar onClose={() => setIsSidebarOpen(false)} />
                                </div>
                
                                {/* Main Content Area */}
                                <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                                    <DoctorNavbar setIsSidebarOpen={setIsSidebarOpen} />
                                    
                    {/* Page Body */}
                    <div className="p-8 max-w-5xl mx-auto w-full">
                        {/* Page Heading */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                            <div className="space-y-2">
                                <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">إدارة جدول
                                    المواعيد الإسبوعي</h1>
                                <p className="text-slate-500 dark:text-[#9eb7b2] text-base leading-relaxed">قم بتحديد ساعات العمل
                                    الصباحية والمسائية وفترات الاستراحة لكل يوم من أيام الأسبوع.</p>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-3 bg-slate-100 dark:bg-[#293835] text-slate-900 dark:text-white rounded-xl text-sm font-bold hover:bg-slate-200 dark:hover:bg-[#344b46] transition-colors">
                                <span className="material-symbols-outlined text-base">add_circle</span>
                                إضافة فترة زمنية
                            </button>
                        </div>
                        {/* Days Navigation Tabs */}
                        <div className="mb-8 overflow-x-auto">
                            <div className="flex border-b border-slate-200 dark:border-[#3d524e] gap-4 min-w-max">
                                <button className="flex flex-col items-center justify-center border-b-2 border-primary text-primary pb-3 px-4 transition-all">
                                    <span className="text-sm font-bold tracking-wide">السبت</span>
                                </button>
                                <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-400 dark:text-[#9eb7b2] pb-3 px-4 hover:text-slate-600 dark:hover:text-white transition-all">
                                    <span className="text-sm font-bold tracking-wide">الأحد</span>
                                </button>
                                <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-400 dark:text-[#9eb7b2] pb-3 px-4 hover:text-slate-600 dark:hover:text-white transition-all">
                                    <span className="text-sm font-bold tracking-wide">الإثنين</span>
                                </button>
                                <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-400 dark:text-[#9eb7b2] pb-3 px-4 hover:text-slate-600 dark:hover:text-white transition-all">
                                    <span className="text-sm font-bold tracking-wide">الثلاثاء</span>
                                </button>
                                <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-400 dark:text-[#9eb7b2] pb-3 px-4 hover:text-slate-600 dark:hover:text-white transition-all">
                                    <span className="text-sm font-bold tracking-wide">الأربعاء</span>
                                </button>
                                <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-400 dark:text-[#9eb7b2] pb-3 px-4 hover:text-slate-600 dark:hover:text-white transition-all">
                                    <span className="text-sm font-bold tracking-wide">الخميس</span>
                                </button>
                                <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-400 dark:text-[#9eb7b2] pb-3 px-4 hover:text-slate-600 dark:hover:text-white transition-all text-red-400">
                                    <span className="text-sm font-bold tracking-wide">الجمعة (مغلق)</span>
                                </button>
                            </div>
                        </div>
                        {/* Daily Status Toggle */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between p-6 rounded-2xl border border-slate-200 dark:border-[#3d524e] bg-white dark:bg-[#111716] shadow-sm">
                                <div className="space-y-1">
                                    <p className="text-slate-900 dark:text-white text-lg font-bold">استقبال المواعيد يوم السبت</p>
                                    <p className="text-slate-500 dark:text-[#9eb7b2] text-sm">قم بتفعيل هذا الخيار ليتمكن المرضى من
                                        الحجز في هذا اليوم</p>
                                </div>
                                <label className="relative flex h-8 w-14 cursor-pointer items-center rounded-full border-none bg-slate-200 dark:bg-[#293835] p-1 transition-colors has-[:checked]:bg-primary">
                                    <input defaultChecked className="sr-only peer" type="checkbox" />
                                    <div className="h-6 w-6 rounded-full bg-white shadow-md transition-all peer-checked:translate-x-6">
                                    </div>
                                </label>
                            </div>
                        </div>
                        {/* Time Slots Grid */}
                        <div className="space-y-6">
                            <h3 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">more_time</span>
                                الفترات الزمنية المحددة
                            </h3>
                            {/* Slot 1: Active Work */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-5 rounded-2xl border border-primary/30 bg-primary/5 dark:bg-primary/10 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 h-full w-1 bg-primary" />
                                <div className="md:col-span-1 text-slate-400">
                                    <span className="material-symbols-outlined">drag_indicator</span>
                                </div>
                                <div className="md:col-span-4 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-[#9eb7b2] block">وقت البدء</label>
                                    <div className="flex items-center gap-3 bg-white dark:bg-[#1c2826] border border-slate-200 dark:border-[#3d524e] rounded-xl px-4 py-2">
                                        <span className="material-symbols-outlined text-sm text-slate-400">schedule</span>
                                        <input className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full" type="text" defaultValue="09:00 AM" />
                                    </div>
                                </div>
                                <div className="md:col-span-4 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-[#9eb7b2] block">وقت
                                        الانتهاء</label>
                                    <div className="flex items-center gap-3 bg-white dark:bg-[#1c2826] border border-slate-200 dark:border-[#3d524e] rounded-xl px-4 py-2">
                                        <span className="material-symbols-outlined text-sm text-slate-400">schedule</span>
                                        <input className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full" type="text" defaultValue="01:00 PM" />
                                    </div>
                                </div>
                                <div className="md:col-span-2 text-center">
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">فترة
                                        عمل</span>
                                </div>
                                <div className="md:col-span-1 text-left">
                                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </div>
                            {/* Slot 2: Break Time */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-5 rounded-2xl border border-slate-200 dark:border-[#3d524e] bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 h-full w-1 bg-orange-400" />
                                <div className="md:col-span-1 text-slate-400">
                                    <span className="material-symbols-outlined">drag_indicator</span>
                                </div>
                                <div className="md:col-span-4 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-[#9eb7b2] block">وقت البدء</label>
                                    <div className="flex items-center gap-3 bg-white dark:bg-[#1c2826] border border-slate-200 dark:border-[#3d524e] rounded-xl px-4 py-2">
                                        <span className="material-symbols-outlined text-sm text-slate-400">schedule</span>
                                        <input className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full" type="text" defaultValue="01:00 PM" />
                                    </div>
                                </div>
                                <div className="md:col-span-4 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-[#9eb7b2] block">وقت
                                        الانتهاء</label>
                                    <div className="flex items-center gap-3 bg-white dark:bg-[#1c2826] border border-slate-200 dark:border-[#3d524e] rounded-xl px-4 py-2">
                                        <span className="material-symbols-outlined text-sm text-slate-400">schedule</span>
                                        <input className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full" type="text" defaultValue="02:00 PM" />
                                    </div>
                                </div>
                                <div className="md:col-span-2 text-center">
                                    <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold">استراحة</span>
                                </div>
                                <div className="md:col-span-1 text-left">
                                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                            </div>
                            {/* Slot 3: Conflict Slot (Error State) */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-5 rounded-2xl border-2 border-red-500/50 bg-red-500/5 dark:bg-red-500/10 relative overflow-hidden group">
                                <div className="absolute right-0 top-0 h-full w-1 bg-red-500" />
                                <div className="md:col-span-1 text-slate-400">
                                    <span className="material-symbols-outlined">drag_indicator</span>
                                </div>
                                <div className="md:col-span-4 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-[#9eb7b2] block">وقت البدء</label>
                                    <div className="flex items-center gap-3 bg-white dark:bg-[#1c2826] border border-red-500/50 rounded-xl px-4 py-2">
                                        <span className="material-symbols-outlined text-sm text-red-500">warning</span>
                                        <input className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full text-red-500" type="text" defaultValue="01:30 PM" />
                                    </div>
                                </div>
                                <div className="md:col-span-4 space-y-2">
                                    <label className="text-xs font-bold text-slate-500 dark:text-[#9eb7b2] block">وقت
                                        الانتهاء</label>
                                    <div className="flex items-center gap-3 bg-white dark:bg-[#1c2826] border border-slate-200 dark:border-[#3d524e] rounded-xl px-4 py-2">
                                        <span className="material-symbols-outlined text-sm text-slate-400">schedule</span>
                                        <input className="bg-transparent border-none p-0 text-sm font-bold focus:ring-0 w-full" type="text" defaultValue="06:00 PM" />
                                    </div>
                                </div>
                                <div className="md:col-span-2 text-center">
                                    <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold">فترة
                                        عمل</span>
                                </div>
                                <div className="md:col-span-1 text-left">
                                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined">delete</span>
                                    </button>
                                </div>
                                <div className="md:col-start-2 md:col-span-10">
                                    <p className="text-xs text-red-500 font-bold mt-2 flex items-center gap-1">
                                        <span className="material-symbols-outlined text-xs">error</span>
                                        عذراً، هذا الوقت يتداخل مع فترة الاستراحة المحددة مسبقاً
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Summary Panel */}
                        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 pointer-events-none" data-alt="Abstract subtle pattern background" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1abc9c 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                            </div>
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                                <div className="flex items-center gap-6">
                                    <div className="p-4 rounded-2xl bg-primary/20 text-primary border border-primary/30">
                                        <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: '"wght" 200' }}>calendar_month</span>
                                    </div>
                                    <div className="space-y-1">
                                        <h4 className="text-xl font-bold">ملخص ساعات عمل السبت</h4>
                                        <p className="text-slate-400 text-sm">إجمالي 8 ساعات عمل - ساعة واحدة استراحة</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-colors font-bold text-sm">نسخ
                                        الإعدادات لباقي الأيام</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Footer Meta */}
                    <footer className="mt-auto p-8 border-t border-slate-200 dark:border-[#293835] text-center">
                        <p className="text-slate-400 text-xs font-medium">نظام العيادة SaaS © 2024 - جميع الحقوق محفوظة</p>
                    </footer>
                </main>
                {/* Right Side Panel (Calendar Preview/Quick Links) */}
                <aside className="w-80 border-r border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0d1614] hidden xl:flex flex-col p-6 overflow-y-auto">
                    <h4 className="text-slate-900 dark:text-white font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">event_available</span>
                        المعاينة المباشرة
                    </h4>
                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-white dark:bg-[#111716] border border-slate-200 dark:border-[#3d524e] shadow-sm">
                            <p className="text-xs font-bold text-slate-400 dark:text-[#9eb7b2] mb-3">اليوم الحالي</p>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-bold">12 يونيو، 2024</span>
                                <span className="text-xs font-bold text-primary">6 مرضى متبقين</span>
                            </div>
                        </div>
                        <div className="p-1 rounded-xl bg-white dark:bg-[#111716] border border-slate-200 dark:border-[#3d524e]">
                            <div className="grid grid-cols-7 gap-1 p-2">
                                <div className="text-[10px] text-center font-bold text-slate-400">س</div>
                                <div className="text-[10px] text-center font-bold text-slate-400">ح</div>
                                <div className="text-[10px] text-center font-bold text-slate-400">ن</div>
                                <div className="text-[10px] text-center font-bold text-slate-400">ث</div>
                                <div className="text-[10px] text-center font-bold text-slate-400">ر</div>
                                <div className="text-[10px] text-center font-bold text-slate-400">خ</div>
                                <div className="text-[10px] text-center font-bold text-slate-400">ج</div>
                                {/* Calendar Days Mock */}
                                <div className="h-8 flex items-center justify-center text-xs font-medium text-slate-400">28</div>
                                <div className="h-8 flex items-center justify-center text-xs font-medium text-slate-400">29</div>
                                <div className="h-8 flex items-center justify-center text-xs font-medium text-slate-400">30</div>
                                <div className="h-8 flex items-center justify-center text-xs font-medium bg-primary text-slate-900 rounded-lg font-bold">
                                    1</div>
                                <div className="h-8 flex items-center justify-center text-xs font-medium">2</div>
                                <div className="h-8 flex items-center justify-center text-xs font-medium">3</div>
                                <div className="h-8 flex items-center justify-center text-xs font-medium">4</div>
                            </div>
                        </div>
                        <div className="mt-8 space-y-4">
                            <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest">تلميحات ذكية</h5>
                            <div className="flex gap-3 items-start p-3 bg-primary/10 rounded-xl border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-xl">lightbulb</span>
                                <p className="text-xs leading-relaxed text-slate-600 dark:text-[#9eb7b2]">
                                    تمت ملاحظة زيادة الطلب على الحجوزات مساء يوم السبت. هل ترغب في تمديد الفترة المسائية؟
                                </p>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>

    )
}