import { useState } from "react";
import { PatientNavbar } from "../components/PatientNavbar";
import { PatientSidebar } from "../components/PatienySidebar";

export function PatientBookings() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState("upcoming");

    // --- Data Extraction ---
    const tabs = [
        { id: "upcoming", label: "المواعيد القادمة" },
        { id: "previous", label: "المواعيد السابقة" },
        { id: "cancelled", label: "الملغاة" },
    ];

    const bookings = [
        {
            id: 1,
            doctor: "د. سارة أحمد",
            specialty: "أخصائي طب الأسنان",
            date: "الخميس، 25 مايو 2024",
            time: "10:30 صباحاً",
            status: "مؤكد",
            statusColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
            img: "https://i.pravatar.cc/150?u=sara",
        },
        {
            id: 2,
            doctor: "د. خالد عبدالله",
            specialty: "استشاري أمراض القلب",
            date: "الأحد، 28 مايو 2024",
            time: "02:00 مساءً",
            status: "قيد الانتظار",
            statusColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
            img: "https://i.pravatar.cc/150?u=khaled",
        }
    ];

    return (
        <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen flex transition-colors duration-300 font-sans" dir="rtl">
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Navigation */}
            <aside className={`
                fixed inset-y-0 right-0 z-50 transform transition-transform duration-300 ease-in-out
                lg:relative lg:translate-x-0 
                ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:hidden"}
            `}>
                <PatientSidebar onClose={() => setIsSidebarOpen(false)} />
            </aside>

            {/* Main Content */}
            <main className="flex-1 h-screen overflow-y-auto">
                <PatientNavbar setIsSidebarOpen={setIsSidebarOpen} />
                
                <div className="max-w-5xl mx-auto p-4 md:p-8">
                    {/* Page Heading */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-slate-900 dark:text-white">
                                حجوزاتي الشخصية
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                إدارة ومتابعة جميع مواعيدك الطبية في مكان واحد
                            </p>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold shadow-sm hover:border-emerald-500 transition-all">
                            <span className="material-symbols-outlined text-emerald-500">filter_list</span>
                            <span>تصفية حسب التاريخ</span>
                        </button>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="mb-8 border-b border-slate-200 dark:border-slate-800">
                        <div className="flex gap-8 overflow-x-auto no-scrollbar">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative pb-4 text-sm font-bold transition-all whitespace-nowrap ${
                                        activeTab === tab.id 
                                        ? "text-emerald-600 dark:text-emerald-400" 
                                        : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                                    }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <div className="absolute bottom-0 w-full h-0.5 bg-emerald-500 rounded-full" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Appointments List */}
                    <div className="grid grid-cols-1 gap-4">
                        {bookings.map((booking) => (
                            <div key={booking.id} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 md:p-6 transition-all hover:shadow-md hover:border-emerald-500/30">
                                <div className="flex flex-col lg:flex-row justify-between gap-6">
                                    {/* Doctor Info */}
                                    <div className="flex flex-1 gap-5">
                                        <div className="relative shrink-0">
                                            <img 
                                                src={booking.img} 
                                                alt={booking.doctor}
                                                className="w-20 h-20 rounded-2xl object-cover shadow-sm"
                                            />
                                            <div className={`absolute -bottom-2 -right-2 px-2 py-0.5 rounded-md text-[10px] font-bold shadow-sm ${booking.statusColor}`}>
                                                {booking.status}
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <p className="text-emerald-600 dark:text-emerald-400 text-xs font-bold mb-1 uppercase tracking-wide">
                                                {booking.specialty}
                                            </p>
                                            <h3 className="text-slate-900 dark:text-white text-xl font-bold mb-3">
                                                {booking.doctor}
                                            </h3>
                                            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-slate-500 dark:text-slate-400 text-sm">
                                                <div className="flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-emerald-500 text-lg">calendar_month</span>
                                                    <span>{booking.date}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="material-symbols-outlined text-emerald-500 text-lg">schedule</span>
                                                    <span>{booking.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Actions */}
                                    <div className="flex flex-row lg:flex-col justify-center gap-3 shrink-0 lg:min-w-[160px]">
                                        <button className="flex-1 lg:w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-xl text-sm font-bold hover:bg-emerald-500 hover:text-white transition-all">
                                            <span className="material-symbols-outlined text-lg">event_repeat</span>
                                            <span>إعادة جدولة</span>
                                        </button>
                                        <button className="flex-1 lg:w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-transparent text-rose-500 border border-rose-500/20 rounded-xl text-sm font-bold hover:bg-rose-500/10 transition-all">
                                            <span className="material-symbols-outlined text-lg">cancel</span>
                                            <span>إلغاء</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Loading State */}
                        <div className="mt-6 flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                                جاري تحميل المزيد...
                            </div>
                            <button className="px-10 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-600 dark:text-slate-400 text-sm font-bold hover:text-emerald-500 hover:border-emerald-500 transition-all">
                                عرض جميع المواعيد السابقة
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}