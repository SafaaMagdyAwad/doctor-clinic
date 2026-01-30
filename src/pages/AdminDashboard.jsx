import { useState } from "react";
import { AdminNav } from "../components/AdminNav";
import { AdminSidebar } from "../components/AdminSidebar";

export function AdminDashboard() {
    const STATS_DATA = [
        { label: "إجمالي الأطباء", value: "١٥٠", growth: "+٥%", icon: "stethoscope", color: "primary" },
        { label: "إجمالي المرضى", value: "١,٢٠٠", growth: "+١٢%", icon: "groups", color: "blue-500" },
        { label: "إجمالي المواعيد", value: "٤٥٠", growth: "+٨%", icon: "event_available", color: "amber-500" },
        { label: "إجمالي الإيرادات", value: "٢٥,٠٠٠ ر.س", growth: "-٢%", icon: "account_balance_wallet", color: "primary", negative: true },
    ];
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white min-h-screen">
            <div className="flex h-screen overflow-hidden">

                {/* Mobile Overlay */}
                {isSidebarOpen && (
                    <div 
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}
                
                {/* Sidebar Navigation Container */}
                <div className={`
                    fixed inset-y-0 right-0 z-50 transform transition-transform duration-300 ease-in-out
                    lg:relative lg:translate-x-0 lg:flex
                    ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
                `}>
                    <AdminSidebar onClose={() => setIsSidebarOpen(false)} />
                </div>
                
                {/* Main Content */}
                <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden flex flex-col">
                    <AdminNav setIsSidebarOpen={setIsSidebarOpen} /> 
                               
                    <div className="p-8 space-y-8">
                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {STATS_DATA.map((stat, index) => (
                                <div key={index} className="flex flex-col gap-3 rounded-2xl p-6 bg-white dark:bg-[#111716] border border-slate-200 dark:border-[#3d524e] shadow-sm">
                                    <div className="flex justify-between items-start">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined">{stat.icon}</span>
                                        </div>
                                        <span className={`${stat.negative ? 'text-[#fa5838] bg-[#fa5838]/10' : 'text-[#0bda4d] bg-[#0bda4d]/10'} text-xs font-bold px-2 py-1 rounded-full`}>
                                            {stat.growth}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-slate-500 dark:text-[#9eb7b2] text-sm font-medium">{stat.label}</p>
                                        <p className="text-slate-900 dark:text-white text-3xl font-bold mt-1">{stat.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Charts Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Line Chart Card */}
                            <div className="flex flex-col rounded-2xl bg-white dark:bg-[#111716] border border-slate-200 dark:border-[#3d524e] p-6 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-lg font-bold">اتجاهات المواعيد اليومية
                                        </h3>
                                        <p className="text-slate-500 dark:text-[#9eb7b2] text-sm">معدل الحجوزات خلال الأسبوع الحالي
                                        </p>
                                    </div>
                                    <div className="text-left">
                                        <p className="text-primary text-2xl font-bold">٤٥٠ موعد</p>
                                        <span className="text-[#0bda4d] text-xs font-bold">+١٠% نمو</span>
                                    </div>
                                </div>
                                <div className="flex-1 min-h-[250px] flex flex-col justify-end">
                                    <svg className="w-full" fill="none" height={180} preserveAspectRatio="none" viewBox="0 0 472 150" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 109C18 109 18 21 36 21C54 21 54 41 72 41C90 41 90 93 108 93C127 93 127 33 145 33C163 33 163 101 181 101C199 101 199 61 217 61C236 61 236 45 254 45C272 45 272 121 290 121C308 121 308 149 326 149C344 149 344 1 363 1C381 1 381 81 399 81C417 81 417 129 435 129C453 129 453 25 472 25" stroke="#1abc9c" strokeLinecap="round" strokeWidth={3} />
                                        <path d="M0 109C18 109 18 21 36 21C54 21 54 41 72 41C90 41 90 93 108 93C127 93 127 33 145 33C163 33 163 101 181 101C199 101 199 61 217 61C236 61 236 45 254 45C272 45 272 121 290 121C308 121 308 149 326 149C344 149 344 1 363 1C381 1 381 81 399 81C417 81 417 129 435 129C453 129 453 25 472 25V149H0V109Z" fill="url(#line_gradient)" />
                                        <defs>
                                            <linearGradient gradientUnits="userSpaceOnUse" id="line_gradient" x1={236} x2={236} y1={1} y2={149}>
                                                <stop stopColor="#1abc9c" stopOpacity="0.2" />
                                                <stop offset={1} stopColor="#1abc9c" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <div className="flex justify-between mt-4 px-2">
                                        <p className="text-slate-400 dark:text-[#9eb7b2] text-[11px] font-bold">السبت</p>
                                        <p className="text-slate-400 dark:text-[#9eb7b2] text-[11px] font-bold">الأحد</p>
                                        <p className="text-slate-400 dark:text-[#9eb7b2] text-[11px] font-bold">الأثنين</p>
                                        <p className="text-slate-400 dark:text-[#9eb7b2] text-[11px] font-bold">الثلاثاء</p>
                                        <p className="text-slate-400 dark:text-[#9eb7b2] text-[11px] font-bold">الأربعاء</p>
                                        <p className="text-slate-400 dark:text-[#9eb7b2] text-[11px] font-bold">الخميس</p>
                                        <p className="text-slate-400 dark:text-[#9eb7b2] text-[11px] font-bold">الجمعة</p>
                                    </div>
                                </div>
                            </div>
                            {/* Bar Chart Card */}
                            <div className="flex flex-col rounded-2xl bg-white dark:bg-[#111716] border border-slate-200 dark:border-[#3d524e] p-6 shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <div>
                                        <h3 className="text-slate-900 dark:text-white text-lg font-bold">أعلى التخصصات الطبية</h3>
                                        <p className="text-slate-500 dark:text-[#9eb7b2] text-sm">أداء الأقسام خلال الشهر الحالي</p>
                                    </div>
                                    <button className="text-primary text-sm font-bold flex items-center gap-1">
                                        عرض الكل
                                        <span className="material-symbols-outlined text-sm">arrow_back_ios_new</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-5 gap-4 flex-1 items-end min-h-[250px] px-2">
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <div className="bg-primary/20 hover:bg-primary transition-colors w-full rounded-t-lg" style={{ height: 120 }} />
                                        <p className="text-slate-500 dark:text-[#9eb7b2] text-[11px] font-bold text-center">الباطنية
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <div className="bg-primary hover:bg-primary/80 transition-colors w-full rounded-t-lg" style={{ height: 180 }} />
                                        <p className="text-slate-500 dark:text-[#9eb7b2] text-[11px] font-bold text-center">الأسنان
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <div className="bg-primary/20 hover:bg-primary transition-colors w-full rounded-t-lg" style={{ height: 150 }} />
                                        <p className="text-slate-500 dark:text-[#9eb7b2] text-[11px] font-bold text-center">الأطفال
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <div className="bg-primary/20 hover:bg-primary transition-colors w-full rounded-t-lg" style={{ height: 90 }} />
                                        <p className="text-slate-500 dark:text-[#9eb7b2] text-[11px] font-bold text-center">الجلدية
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 w-full">
                                        <div className="bg-primary/20 hover:bg-primary transition-colors w-full rounded-t-lg" style={{ height: 70 }} />
                                        <p className="text-slate-500 dark:text-[#9eb7b2] text-[11px] font-bold text-center">العيون
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Recent Activity Section */}
                        <div className="rounded-2xl bg-white dark:bg-[#111716] border border-slate-200 dark:border-[#3d524e] shadow-sm overflow-hidden">
                            <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-[#293835]">
                                <h3 className="text-slate-900 dark:text-white text-lg font-bold">آخر النشاطات</h3>
                                <div className="flex gap-2">
                                    <button className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-[#293835] text-xs font-bold text-slate-600 dark:text-white">الكل</button>
                                    <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 dark:text-[#9eb7b2]">المواعيد</button>
                                    <button className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 dark:text-[#9eb7b2]">المرضى</button>
                                </div>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-[#293835]">
                                {/* Activity Item 1 */}
                                <div className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-[#1a2b27] transition-colors group">
                                    <div className="size-10 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center text-blue-600">
                                        <span className="material-symbols-outlined">add_task</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            <span className="font-bold">سارة أحمد</span> قامت بحجز موعد جديد مع <span className="text-primary font-bold">د. خالد منصور</span>
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-[#9eb7b2] mt-0.5">منذ ٥ دقائق • عيادة الأسنان
                                        </p>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 px-3 py-1 text-xs font-bold text-primary border border-primary rounded-lg transition-all">عرض
                                        التفاصيل</button>
                                </div>
                                {/* Activity Item 2 */}
                                <div className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-[#1a2b27] transition-colors group">
                                    <div className="size-10 rounded-full bg-[#0bda4d]/10 flex items-center justify-center text-[#0bda4d]">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            تم استلام دفعة جديدة بقيمة <span className="font-bold">٣٥٠ ر.س</span> من المريض <span className="font-bold">محمد العتيبي</span>
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-[#9eb7b2] mt-0.5">منذ ١٥ دقيقة • فاتورة رقم
                                            #INV-882</p>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 px-3 py-1 text-xs font-bold text-primary border border-primary rounded-lg transition-all">عرض
                                        التفاصيل</button>
                                </div>
                                {/* Activity Item 3 */}
                                <div className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-[#1a2b27] transition-colors group">
                                    <div className="size-10 rounded-full bg-amber-100 dark:bg-amber-500/10 flex items-center justify-center text-amber-600">
                                        <span className="material-symbols-outlined">update</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            <span className="font-bold">د. مريم يوسف</span> قامت بتحديث جدول مواعيدها الأسبوعي
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-[#9eb7b2] mt-0.5">منذ ساعة • قسم الأطفال</p>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 px-3 py-1 text-xs font-bold text-primary border border-primary rounded-lg transition-all">عرض
                                        التفاصيل</button>
                                </div>
                                {/* Activity Item 4 */}
                                <div className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-[#1a2b27] transition-colors group">
                                    <div className="size-10 rounded-full bg-red-100 dark:bg-red-500/10 flex items-center justify-center text-red-600">
                                        <span className="material-symbols-outlined">cancel</span>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-900 dark:text-white">
                                            تم إلغاء موعد المريض <span className="font-bold">فهد الدوسري</span>
                                        </p>
                                        <p className="text-xs text-slate-500 dark:text-[#9eb7b2] mt-0.5">منذ ساعتين • بناءً على طلب
                                            المريض</p>
                                    </div>
                                    <button className="opacity-0 group-hover:opacity-100 px-3 py-1 text-xs font-bold text-primary border border-primary rounded-lg transition-all">عرض
                                        التفاصيل</button>
                                </div>
                            </div>
                            <div className="bg-slate-50 dark:bg-[#1a2b27] p-4 text-center">
                                <button className="text-sm font-bold text-primary hover:underline">مشاهدة جميع النشاطات</button>
                            </div>
                        </div>
                    </div>
                    <footer className="p-8 text-center text-slate-400 dark:text-[#9eb7b2] text-xs border-t border-slate-100 dark:border-[#293835]">
                        <p>© ٢٠٢٤ نظام إدارة العيادات الشامل - جميع الحقوق محفوظة.</p>
                    </footer>
                </main>
            </div>
        </div>

    )
}