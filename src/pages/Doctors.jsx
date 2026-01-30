import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Doctors() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-white">
            <div className="flex flex-col min-h-screen">
                {/* Top Navigation Bar */}
                <Navbar />
                <main className="flex-1 flex flex-col lg:flex-row max-w-[1440px] mx-auto w-full px-6 lg:px-20 py-8 gap-8">
                    {/* Side Filters */}
                    <aside className="w-full lg:w-72 flex flex-col gap-6 shrink-0">
                        <div className="bg-white dark:bg-slate-900/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-lg font-bold">تصفية النتائج</h3>
                                <span className="material-symbols-outlined text-primary">filter_list</span>
                            </div>
                            <div className="space-y-6">
                                {/* Specialty */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 block">التخصص</label>
                                    <div className="space-y-2">
                                        <label className="flex items-center gap-3 p-2 rounded-lg bg-primary/10 border border-primary/20 cursor-pointer">
                                            <span className="material-symbols-outlined text-primary text-sm">stethoscope</span>
                                            <span className="text-sm font-medium">الكل</span>
                                        </label>
                                        <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                            <span className="material-symbols-outlined text-slate-400 text-sm">cardiology</span>
                                            <span className="text-sm">القلب والأوعية</span>
                                        </label>
                                        <label className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                                            <span className="material-symbols-outlined text-slate-400 text-sm">psychiatry</span>
                                            <span className="text-sm">الأعصاب</span>
                                        </label>
                                    </div>
                                </div>
                                {/* City */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 block">المدينة</label>
                                    <select className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-primary">
                                        <option>الرياض</option>
                                        <option>جدة</option>
                                        <option>الدمام</option>
                                    </select>
                                </div>
                                {/* Price Range */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 block">نطاق
                                        السعر (ريال)</label>
                                    <input className="w-full accent-primary bg-slate-200 dark:bg-slate-700 h-1.5 rounded-lg appearance-none cursor-pointer" type="range" />
                                    <div className="flex justify-between mt-2 text-xs text-slate-400">
                                        <span>50</span>
                                        <span>500+</span>
                                    </div>
                                </div>
                                {/* Rating */}
                                <div>
                                    <label className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3 block">التقييم</label>
                                    <div className="flex gap-1">
                                        <span className="material-symbols-outlined text-yellow-500 text-xl cursor-pointer">star</span>
                                        <span className="material-symbols-outlined text-yellow-500 text-xl cursor-pointer">star</span>
                                        <span className="material-symbols-outlined text-yellow-500 text-xl cursor-pointer">star</span>
                                        <span className="material-symbols-outlined text-yellow-500 text-xl cursor-pointer">star</span>
                                        <span className="material-symbols-outlined text-slate-300 dark:text-slate-600 text-xl cursor-pointer">star</span>
                                    </div>
                                </div>
                                <button className="w-full py-3 rounded-xl border border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
                                    مسح الفلاتر
                                </button>
                            </div>
                        </div>
                    </aside>
                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col gap-6">
                        {/* Search & Sorting */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                                <input className="w-full h-14 pr-12 pl-4 rounded-xl border-none bg-white dark:bg-slate-900/50 shadow-sm focus:ring-2 focus:ring-primary text-base" placeholder="ابحث عن طبيب أو تخصص..." type="text" />
                            </div>
                            <div className="flex bg-slate-200 dark:bg-slate-800 p-1 rounded-xl h-14 shrink-0">
                                <button className="flex-1 px-6 rounded-lg bg-white dark:bg-slate-900 shadow-sm text-sm font-bold flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined text-sm">trending_up</span>
                                    الأعلى تقييماً
                                </button>
                                <button className="flex-1 px-6 rounded-lg text-slate-500 dark:text-slate-400 text-sm font-medium flex items-center justify-center gap-2">
                                    السعر الأقل
                                </button>
                            </div>
                        </div>
                        {/* Doctor Listing Grid */}
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            {/* Doctor Card 1 */}
                            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:border-primary/50 transition-all group">
                                <div className="flex gap-5">
                                    <div className="relative shrink-0">
                                        <div className="size-24 rounded-xl bg-cover bg-center border-2 border-slate-100 dark:border-slate-800" data-alt="Portrait of Dr. Ahmed" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDO_j9vLv354RIxSvMqN7B1T0Sm4axm7Ip5XdsoC-6I53FtoUe5U5eU4_UFjHUsrxrHsd_xQ5wYye5Rznh-Ku34SCD7EcnSv1YZ_jE5dm3cQblyloJbyRYUKjcWtcIqFzxlL3_NIIkOuLgMKHWkdupxeqwpVgc-UJ_3auJGe6_o6AjwSbB1kVTfY04MvwlpW8OEFaZCGmfLPb6Vtmh7yGTNqJQCnLYQByy0zlJTbH5Wvyvzr8sSkRPTKQy5mQxAjZlwYzVPxWEt63Uu")' }}>
                                        </div>
                                        <div className="absolute -bottom-1 -left-1 size-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full">
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-lg font-bold group-hover:text-primary transition-colors">د. أحمد
                                                    محمد</h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">استشاري جراحة القلب والصدر
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-600 px-2 py-0.5 rounded text-xs font-bold">
                                                <span>4.9</span>
                                                <span className="material-symbols-outlined text-xs">star</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-4 items-center">
                                            <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                <span className="material-symbols-outlined text-sm">payments</span>
                                                <span>الكشف: 250 ريال</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                                <span>متاح غداً 4:00 م</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-3">
                                    <button className="flex-1 h-11 bg-primary text-background-dark font-bold rounded-xl flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-sm">event_available</span>
                                        احجز الآن
                                    </button>
                                    <button className="px-5 h-11 border border-slate-200 dark:border-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
                                        الملف الشخصي
                                    </button>
                                </div>
                            </div>
                            {/* Doctor Card 2 */}
                            <div className="bg-white dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 hover:border-primary/50 transition-all group">
                                <div className="flex gap-5">
                                    <div className="relative shrink-0">
                                        <div className="size-24 rounded-xl bg-cover bg-center border-2 border-slate-100 dark:border-slate-800" data-alt="Portrait of Dr. Sarah" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOsDD1ujhgqVRqxneq3O4BKRNWn-aC8mA5Q_8l_vRwAiahvhxKvEL3Z02yMVyRPwNgD-6rZGoLs5qMgtCnQNVvaFh6njX3l1Bhi7n0AS3kbyphIGBzs5iCawxOLjm2VlhuAoAA8ROBjEleUaXWdrW0d3RJ_TXaHLiPxGkQJuJ0S6SlHERTio96y_hUHZeNP5-P6PnKkx5ydYORCluv5lD9E7WYDLORFqPLVUEVLQgnThKou97GqRIyI_0fUdtnD4WcGLNpMR-Q4jcb")' }}>
                                        </div>
                                        <div className="absolute -bottom-1 -left-1 size-5 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full">
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-lg font-bold group-hover:text-primary transition-colors">د. سارة
                                                    خالد</h4>
                                                <p className="text-sm text-slate-500 dark:text-slate-400">أخصائية طب الأطفال</p>
                                            </div>
                                            <div className="flex items-center gap-1 bg-yellow-500/10 text-yellow-600 px-2 py-0.5 rounded text-xs font-bold">
                                                <span>4.8</span>
                                                <span className="material-symbols-outlined text-xs">star</span>
                                            </div>
                                        </div>
                                        <div className="mt-4 flex flex-wrap gap-4 items-center">
                                            <div className="flex items-center gap-1.5 text-xs text-slate-500">
                                                <span className="material-symbols-outlined text-sm">payments</span>
                                                <span>الكشف: 180 ريال</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-primary font-semibold">
                                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                                <span>متاح اليوم 7:30 م</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex gap-3">
                                    <button className="flex-1 h-11 bg-primary text-background-dark font-bold rounded-xl flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-sm">event_available</span>
                                        احجز الآن
                                    </button>
                                    <button className="px-5 h-11 border border-slate-200 dark:border-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800">
                                        الملف الشخصي
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Empty State (Hidden for preview, but code provided as requested) */}
                        {/* To show empty state, add 'hidden' to the doctor grid and remove it from here */}
                        <div className="hidden flex flex-col items-center justify-center py-20 bg-white dark:bg-slate-900/30 rounded-3xl border border-dashed border-slate-300 dark:border-slate-700">
                            <div className="size-32 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">person_search</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">لم يتم العثور على نتائج</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-xs text-center">جرب تغيير معايير البحث أو
                                مسح الفلاتر المحددة للعثور على الأطباء.</p>
                            <button className="px-8 py-3 bg-primary/20 text-primary font-bold rounded-xl hover:bg-primary/30 transition-all">
                                مسح كافة الفلاتر
                            </button>
                        </div>
                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 mt-4">
                            <button className="size-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-400">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                            <button className="size-10 rounded-lg flex items-center justify-center bg-primary text-background-dark font-bold shadow-lg shadow-primary/20">1</button>
                            <button className="size-10 rounded-lg flex items-center justify-center bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">2</button>
                            <button className="size-10 rounded-lg flex items-center justify-center bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">3</button>
                            <span className="px-2 text-slate-400">...</span>
                            <button className="size-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                        </div>
                    </div>
                </main>
                {/* Footer Footer */}
                <Footer />
            </div>
        </div>

    )
}