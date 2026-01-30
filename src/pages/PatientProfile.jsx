import { useState } from "react";
import { PatientNavbar } from "../components/PatientNavbar";
import { PatientSidebar } from "../components/PatienySidebar";

export function PatientProfile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // --- Data Variables ---
    const userProfile = {
        name: "أحمد",
        dailySummary: "لديك موعد واحد مقرر اليوم."
    };

    const stats = [
        { title: "المواعيد القادمة", value: "3", trend: "+1 هذا الأسبوع", icon: "event", color: "blue" },
        { title: "المكتملة", value: "12", trend: "تم الانتهاء بنجاح", icon: "task_alt", color: "emerald" },
        { title: "الملغاة", value: "1", trend: "لا توجد تحديثات", icon: "cancel", color: "rose" }
    ];

    const nextAppointment = {
        day: "12",
        month: "سبتمبر",
        weekday: "الاثنين",
        type: "استشارة عامة",
        status: "مؤكد",
        doctorName: "د. سارة المنصوري",
        specialty: "أخصائي الجراحة العامة - مستشفى الملك فيصل",
        time: "10:30 صباحاً",
        location: "العيادة رقم 402"
    };

    const recommendedDoctors = [
        { name: "د. خالد العتيبي", specialty: "أخصائي قلب وأوعية دموية", rating: "4.9", imgIdx: 0 },
        { name: "د. مريم صالح", specialty: "أخصائية طب الأطفال", rating: "4.8", imgIdx: 1 },
        { name: "د. عمر زيد", specialty: "أخصائي عظام ومفاصل", rating: "5.0", imgIdx: 2 }
    ];

    const quickActions = [
        { icon: "person_search", label: "البحث عن طبيب" },
        { icon: "account_circle", label: "تعديل ملفي الشخصي" },
        { icon: "history", label: "سجل الزيارات" }
    ];

    return (
        <div className="bg-slate-50 dark:bg-[#0a0f0e] text-slate-900 dark:text-slate-100 min-h-screen flex transition-colors duration-300">
            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Navigation */}
            <div className={`
                fixed inset-y-0 right-0 z-50 transform transition-transform duration-300 ease-in-out
                lg:relative lg:translate-x-0 
                ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:hidden"}
            `}>
                <PatientSidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            {/* Main Content */}
            <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden">
                <PatientNavbar setIsSidebarOpen={setIsSidebarOpen} />
                
                <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-10">
                    
                    {/* Welcome Header */}
                    <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                                أهلاً بك، <span className="text-primary">{userProfile.name}</span> 👋
                            </h2>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">
                                {userProfile.dailySummary}
                            </p>
                        </div>
                        <button className="flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold shadow-lg shadow-primary/25 active:scale-95 transition-all w-full md:w-auto">
                            <span className="material-symbols-outlined">add_circle</span>
                            حجز موعد جديد
                        </button>
                    </header>

                    {/* Stats Grid */}
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {stats.map((stat, idx) => (
                            <StatCard key={idx} {...stat} />
                        ))}
                    </section>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Widgets Column */}
                        <div className="lg:col-span-2 space-y-10">
                            
                            {/* Next Appointment Widget */}
                            <section>
                                <div className="flex items-center gap-3 mb-5">
                                    <h3 className="text-xl font-bold">الموعد القادم</h3>
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                    </span>
                                </div>
                                <div className="bg-gradient-to-br from-primary to-teal-600 rounded-[2rem] p-6 md:p-8 text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
                                    <div className="absolute -right-16 -bottom-16 size-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
                                    
                                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 text-center md:text-right">
                                        <div className="bg-white/20 p-5 rounded-2xl backdrop-blur-xl flex flex-col items-center justify-center min-w-[130px] border border-white/30 shadow-inner">
                                            <span className="text-5xl font-black">{nextAppointment.day}</span>
                                            <span className="text-lg font-medium opacity-90">{nextAppointment.month}</span>
                                            <span className="text-xs mt-2 bg-white/40 px-3 py-1 rounded-full font-bold uppercase tracking-wider">{nextAppointment.weekday}</span>
                                        </div>
                                        
                                        <div className="flex-grow">
                                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
                                                <span className="px-3 py-1 bg-white/20 rounded-lg text-[11px] font-bold uppercase">{nextAppointment.type}</span>
                                                <span className="px-3 py-1 bg-emerald-400 text-emerald-950 rounded-lg text-[11px] font-bold flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[14px]">verified</span> {nextAppointment.status}
                                                </span>
                                            </div>
                                            <h4 className="text-2xl md:text-3xl font-bold">{nextAppointment.doctorName}</h4>
                                            <p className="opacity-90 text-sm md:text-base font-medium mt-1">{nextAppointment.specialty}</p>
                                            
                                            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 mt-6">
                                                <div className="flex items-center gap-2 text-sm font-medium">
                                                    <span className="material-symbols-outlined opacity-70">schedule</span>
                                                    {nextAppointment.time}
                                                </div>
                                                <div className="flex items-center gap-2 text-sm font-medium">
                                                    <span className="material-symbols-outlined opacity-70">location_on</span>
                                                    {nextAppointment.location}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col gap-3 w-full md:w-auto">
                                            <button className="px-8 py-3 bg-white text-primary rounded-xl font-bold hover:shadow-xl transition-all hover:-translate-y-0.5">تعديل الموعد</button>
                                            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold border border-white/30 backdrop-blur-sm transition-all">إلغاء</button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Recommended Doctors */}
                            <section>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold">أطباء مقترحون لك</h3>
                                    <a className="text-primary hover:underline text-sm font-bold flex items-center gap-1 group" href="#">
                                        عرض الكل
                                        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
                                    </a>
                                </div>
                                <div className="flex gap-5 overflow-x-auto pb-6 no-scrollbar snap-x">
                                    {recommendedDoctors.map((doc, idx) => (
                                        <DoctorCard key={idx} {...doc} />
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Side Widgets Column */}
                        <aside className="space-y-8">
                            {/* Quick Actions */}
                            <section>
                                <h3 className="text-xl font-bold mb-4">إجراءات سريعة</h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {quickActions.map((action, idx) => (
                                        <QuickActionBtn key={idx} {...action} />
                                    ))}
                                </div>
                            </section>

                            {/* Medical Records Skeleton */}
                            <section>
                                <h3 className="text-xl font-bold mb-4">السجلات الأخيرة</h3>
                                <div className="bg-white dark:bg-[#111716] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-5">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="flex gap-4 animate-pulse">
                                            <div className="size-12 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0" />
                                            <div className="flex-grow space-y-3 py-1">
                                                <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full" />
                                                <div className="h-2 w-1/2 bg-slate-100 dark:bg-slate-800 rounded-full" />
                                            </div>
                                        </div>
                                    ))}
                                    <div className="pt-2 text-center">
                                        <p className="text-[11px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest italic">جاري تحميل السجلات...</p>
                                    </div>
                                </div>
                            </section>
                        </aside>
                    </div>
                </div>
            </main>
            
            <style dangerouslySetInnerHTML={{ __html: `
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            ` }} />
        </div>
    );
}

// --- Sub-components remain the same ---
function StatCard({ title, value, trend, icon, color }) {
    const colors= {
        blue: "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400",
        emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
        rose: "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400"
    };

    return (
        <div className="bg-white dark:bg-[#111716] p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between group hover:border-primary transition-all duration-300">
            <div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold">{title}</p>
                <h3 className="text-3xl font-black mt-1 group-hover:scale-110 origin-right transition-transform">{value}</h3>
                <p className={`text-xs mt-2 font-bold flex items-center gap-1 ${color === 'rose' ? 'text-slate-400' : 'text-emerald-500'}`}>
                    {color !== 'rose' && <span className="material-symbols-outlined text-xs">trending_up</span>}
                    {trend}
                </p>
            </div>
            <div className={`size-14 rounded-2xl ${colors[color]} flex items-center justify-center group-hover:rotate-6 transition-all shadow-sm`}>
                <span className="material-symbols-outlined text-3xl">{icon}</span>
            </div>
        </div>
    );
}

function DoctorCard({ name, specialty, rating, imgIdx }) {
    return (
        <div className="min-w-[260px] snap-start bg-white dark:bg-[#111716] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all group">
            <div className="relative mb-4">
                <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden ring-4 ring-slate-50 dark:ring-slate-900 shadow-inner">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={`http://googleusercontent.com/profile/picture/${imgIdx}`} alt={name} />
                </div>
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-[#1a2221]/90 backdrop-blur-md px-2.5 py-1 rounded-xl text-[11px] font-black flex items-center gap-1.5 shadow-sm border border-slate-100 dark:border-slate-700">
                    <span className="material-symbols-outlined text-[14px] text-amber-500">star</span>
                    {rating}
                </div>
            </div>
            <h4 className="font-bold text-base mb-1">{name}</h4>
            <p className="text-slate-500 dark:text-slate-400 text-xs font-medium">{specialty}</p>
            <button className="w-full mt-5 py-3 border-2 border-primary/20 text-primary rounded-xl text-xs font-black hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-[0.98]">
                حجز موعد الآن
            </button>
        </div>
    );
}

function QuickActionBtn({ icon, label }) {
    return (
        <button className="flex items-center gap-4 p-4 bg-white dark:bg-[#111716] border border-slate-200 dark:border-slate-800 rounded-2xl hover:bg-primary hover:text-white group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">{icon}</span>
            </div>
            <span className="font-bold text-[15px]">{label}</span>
        </button>
    );
}