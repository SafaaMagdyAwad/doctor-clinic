import { useState } from "react";
import { DoctorNavbar } from "../components/DoctorNavbar";
import { DoctorSidebar } from "../components/DoctorSidebar";

// --- Extracted Data ---
const DASHBOARD_METRICS = [
    { label: "مواعيد اليوم", value: "١٢", trend: "١٠%", icon: "event_available", color: "primary" },
    { label: "بانتظار الموافقة", value: "٥", trend: null, icon: "pending_actions", color: "amber-500" },
    { label: "تم إنجازها هذا الأسبوع", value: "٤٨", trend: "٥%", icon: "task_alt", color: "blue-500" }
];

const TIMELINE_DATA = [
    { time: "٠٩:٠٠", title: "أحمد محمد - فحص دوري", duration: "٤٥ دقيقة", room: "الغرفة ٣٠٢", active: true },
    { time: "١٠:٣٠", title: "سارة محمود - استشارة", duration: "مراجعة نتائج التحاليل", active: false },
    { time: "١١:١٥", title: "خالد عبدالله - متابعة", duration: "متابعة ما بعد العملية", active: false }
];

export function DoctorDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-slate-50 dark:bg-[#0a0f0e] text-slate-900 dark:text-white min-h-screen font-sans" dir="rtl">
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
                    
                    <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8">
                        
                        {/* 1. Metrics Grid */}
                        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {DASHBOARD_METRICS.map((item, idx) => (
                                <MetricCard key={idx} {...item} />
                            ))}
                        </section>

                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                            {/* 2. Daily Schedule (Timeline) */}
                            <section className="xl:col-span-8 bg-white dark:bg-[#1a2d29] rounded-2xl border border-slate-200 dark:border-[#2d4440] shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-slate-200 dark:border-[#2d4440] flex justify-between items-center">
                                    <h2 className="text-lg font-bold">الجدول الزمني لليوم</h2>
                                    <button className="text-emerald-500 text-sm font-bold flex items-center gap-1 hover:underline">
                                        <span>عرض التقويم</span>
                                        <span className="material-symbols-outlined text-sm">calendar_month</span>
                                    </button>
                                </div>
                                <div className="p-6">
                                    {TIMELINE_DATA.map((item, idx) => (
                                        <TimelineItem key={idx} {...item} isLast={idx === TIMELINE_DATA.length - 1} />
                                    ))}
                                </div>
                            </section>

                            {/* 3. Pending Requests */}
                            <section className="xl:col-span-4 flex flex-col gap-6">
                                <div className="bg-white dark:bg-[#1a2d29] rounded-2xl border border-slate-200 dark:border-[#2d4440] p-6 shadow-sm">
                                    <div className="flex justify-between items-center mb-6">
                                        <h2 className="text-lg font-bold">طلبات معلقة</h2>
                                        <span className="bg-amber-500/10 text-amber-600 px-3 py-1 rounded-full text-xs font-bold border border-amber-500/20">
                                            ٥ طلبات
                                        </span>
                                    </div>
                                    <div className="space-y-4">
                                        <RequestCard name="ليلى محمد" initials="ل.م" time="منذ ٢٠ دقيقة" details="الأربعاء المقبل، ٠٤:٠٠ م" />
                                        <RequestCard name="مازن ناصر" initials="م.ن" time="منذ ساعة" details="غداً، ٠١:٣٠ م" color="blue" />
                                    </div>
                                    <button className="w-full mt-6 py-3 border border-slate-200 dark:border-[#2d4440] rounded-xl text-slate-500 dark:text-[#9eb7b2] text-xs font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
                                        مشاهدة الكل
                                    </button>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

// --- Helper Components for Cleanliness ---

function MetricCard({ label, value, trend, icon, color }) {
    return (
        <div className="flex flex-col gap-4 rounded-2xl p-6 bg-white dark:bg-[#1a2d29] shadow-sm border border-slate-200 dark:border-[#2d4440] hover:border-emerald-500/50 transition-colors">
            <div className="flex justify-between items-start">
                <div className={`p-3 bg-${color}/10 rounded-xl text-${color}`}>
                    <span className="material-symbols-outlined">{icon}</span>
                </div>
                {trend && (
                    <p className="text-emerald-500 text-sm font-bold flex items-center gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        <span className="material-symbols-outlined text-sm">trending_up</span> {trend}
                    </p>
                )}
            </div>
            <div>
                <p className="text-slate-500 dark:text-[#9eb7b2] text-sm font-medium">{label}</p>
                <p className="text-slate-900 dark:text-white text-3xl font-black mt-1">{value}</p>
            </div>
        </div>
    );
}

function TimelineItem({ time, title, duration, room, active, isLast }) {
    return (
        <div className="grid grid-cols-[80px_1fr] gap-x-4">
            <div className="flex flex-col items-center gap-1 pt-1">
                <p className="text-slate-400 dark:text-[#9eb7b2] text-xs font-bold">{time}</p>
                <div className={`w-3 h-3 rounded-full ${active ? 'bg-emerald-500 ring-4 ring-emerald-500/20' : 'bg-slate-300 dark:bg-[#3d524e]'}`} />
                {!isLast && <div className="w-[2px] bg-slate-100 dark:bg-[#3d524e] flex-1 my-1" />}
            </div>
            <div className={`${!isLast ? 'pb-8' : ''}`}>
                <div className={`p-4 rounded-2xl border transition-all ${active ? 'bg-emerald-50 dark:bg-[#293835] border-emerald-200 dark:border-emerald-500/30 shadow-sm' : 'border-transparent bg-slate-50/50 dark:bg-[#293835]/20'}`}>
                    <p className="text-slate-900 dark:text-white text-base font-bold">{title}</p>
                    <div className="flex gap-4 mt-2">
                        <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-[#9eb7b2]">
                            <span className="material-symbols-outlined text-sm">timer</span> {duration}
                        </span>
                        {room && (
                            <span className="flex items-center gap-1 text-[11px] text-slate-500 dark:text-[#9eb7b2]">
                                <span className="material-symbols-outlined text-sm">location_on</span> {room}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function RequestCard({ name, initials, time, details, color = "emerald" }) {
    const colorClass = color === "blue" ? "blue" : "emerald";
    return (
        <div className="p-4 bg-slate-50 dark:bg-[#293835]/40 rounded-2xl border border-slate-100 dark:border-[#2d4440] hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
                <div className={`size-10 rounded-full bg-${colorClass}-500/10 flex items-center justify-center text-${colorClass}-500 font-bold text-xs`}>
                    {initials}
                </div>
                <div className="flex-1">
                    <p className="text-slate-900 dark:text-white text-sm font-bold">{name}</p>
                    <p className="text-slate-400 dark:text-[#9eb7b2] text-[10px]">{time}</p>
                </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-[#9eb7b2] mt-3 bg-white/50 dark:bg-white/5 p-2 rounded-lg border border-slate-100 dark:border-white/5">
                طلب: {details}
            </p>
            <div className="flex gap-2 mt-4">
                <button className="flex-1 bg-emerald-500 dark:bg-primary text-white dark:text-[#111716] text-xs font-bold py-2.5 rounded-xl hover:brightness-110 transition-all shadow-sm">
                    قبول
                </button>
                <button className="flex-1 bg-rose-500/10 text-rose-500 text-xs font-bold py-2.5 rounded-xl hover:bg-rose-500/20 transition-all">
                    رفض
                </button>
            </div>
        </div>
    );
}