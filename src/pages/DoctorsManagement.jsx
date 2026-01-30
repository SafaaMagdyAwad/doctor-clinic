import { useState } from "react";
import { AdminNav } from "../components/AdminNav";
import { AdminSidebar } from "../components/AdminSidebar";

export function DoctorsManagement() {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
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
                                           
                    <div className="p-8 max-w-7xl mx-auto w-full">
                        {/* Top Section */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                            <div>
                                <h1 className="text-3xl font-black text-slate-900 dark:text-white">قائمة الأطباء</h1>
                                <p className="text-slate-500 dark:text-slate-400 mt-1">عرض وإدارة جميع الأطباء المسجلين في النظام
                                </p>
                            </div>
                            <button className="flex items-center justify-center gap-2 px-6 h-12 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                                <span className="material-symbols-outlined">add</span>
                                <span>إضافة طبيب جديد</span>
                            </button>
                        </div>
                        {/* Filters & Search */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-6 flex flex-col sm:flex-row gap-4">
                            <div className="flex-1">
                                <label className="relative flex items-center">
                                    <span className="material-symbols-outlined absolute right-4 text-slate-400">search</span>
                                    <input className="w-full h-12 pr-12 pl-4 rounded-xl border-none bg-slate-100 dark:bg-slate-800 text-sm focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-slate-500" placeholder="بحث باسم الطبيب، التخصص، أو الرمز..." type="text" />
                                </label>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex items-center gap-2 px-4 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-sm">filter_list</span>
                                    <span>تصفية</span>
                                </button>
                                <button className="flex items-center gap-2 px-4 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                                    <span className="material-symbols-outlined text-sm">download</span>
                                    <span>تصدير</span>
                                </button>
                            </div>
                        </div>
                        {/* Doctors Table */}
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                            <div className="overflow-x-auto overflow-y-visible">
                                <table className="w-full text-right border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800">
                                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">الطبيب</th>
                                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider">التخصص</th>
                                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">سعر
                                                الكشف</th>
                                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-center">الحالة
                                            </th>
                                            <th className="px-6 py-4 text-sm font-bold uppercase tracking-wider text-left">الإجراءات
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        {/* Row 1 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                                                        <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of Dr. Ahmed Mohamed" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnlL_N7hfMy5lJXn0IK4CrsuEbfdaNRNYwc3sw7cZaRiK9BRE7OnCVr2X9qNEOIOTtiBRoNPhJNTRS5p03vcxqUx3jk-FisQ7pbGmP33Hz8nrxpp0yzXYHu8hAXOM7nPgrE8xV8yc3KTsOwQ9lPiCzOshy_oVsYYFl5LNvk9F_EEbeGXf0w57kQn9h2QAMLrs7Q-o6ER42lS2RmpDmuJaLN0rPHwn8NZkbOky1-EvHXxSfvGZdPOarrfzYfiYoXyhJY-X3vlleJewP")' }}>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white">د. أحمد محمد</p>
                                                        <p className="text-xs text-slate-500">ID: #DOC-8231</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-lg">قلب
                                                    وأوعية دموية</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">٥٠٠
                                                    ج.م</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                                        <span className="size-1.5 rounded-full bg-primary" />
                                                        نشط
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-start gap-2">
                                                    <button className="size-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-all">
                                                        <span className="material-symbols-outlined text-lg">edit</span>
                                                    </button>
                                                    <button className="size-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all">
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                                                        <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of Dr. Sara Mahmoud" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBz9S-762OSDdqHNOR0ppqeigv4RwPgu2nJ9pHmX__jkvWojRI3a2zHlOd7pRyxTI367EzRI9XUgwdcTf1KfAV0rBl5dmxtOJ0q6mSV7ZHfpg80jmUglomdcifPKkBbs3c_AIYZ-1dCzWptLtBlEefPLe9I9c5iTe8ZWeWU2A_00egDIOaoMwZLSaLJsrpsfQ_ZqyqRlJhLhfnn3o-8YnDkXBNQYlzR8Vk3TOyhmtdMLhx8EpuZK9ptkShfv-GroG9o7MnTQXRyfwEj")' }}>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white">د. سارة محمود</p>
                                                        <p className="text-xs text-slate-500">ID: #DOC-7742</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm font-medium bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-lg">طب
                                                    الأطفال</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">٣٠٠
                                                    ج.م</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                                        <span className="size-1.5 rounded-full bg-primary" />
                                                        نشط
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-start gap-2">
                                                    <button className="size-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-all">
                                                        <span className="material-symbols-outlined text-lg">edit</span>
                                                    </button>
                                                    <button className="size-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all">
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                                                        <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of Dr. Laila Hassan" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDc80lzXX5odMJ8JR25zmdrPpcknYfo7pVsZpMbpLuhFgGIEHCrCZSdafOPfUfp3YWL-Cx63Z_d0wbv1heeMCZBPXiI7RQkcqRswZ2g5MKZdv7nT5AmXKaRTqa65VomJuNE4ZQ3BA9VTEhaD-6JnM-wnXomE77No4PZBdzvMrTMXHIsnsf0_b8RBDyt3YCpc2QNbAG_sYItL6PoliToXOjyLQxd4eW-KLWsP826HBOZiB7GO3IpV-ErYJrQt2c_Gvm8SXoRze8zUkgW")' }}>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white">د. ليلى حسن</p>
                                                        <p className="text-xs text-slate-500">ID: #DOC-9910</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm font-medium bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 px-3 py-1 rounded-lg">الجلدية</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">٤٠٠
                                                    ج.م</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                                        <span className="size-1.5 rounded-full bg-slate-400" />
                                                        غير نشط
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-start gap-2">
                                                    <button className="size-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-all">
                                                        <span className="material-symbols-outlined text-lg">edit</span>
                                                    </button>
                                                    <button className="size-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all">
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Row 4 */}
                                        <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm">
                                                        <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of Dr. Khalid Ali" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYfi5JpNsuKcSawJPyfiO9y8EQjrbUu652NuDhadCfdVjBlB-ysONf9BjA-ABi9y9HasDe9verpks4y2yoxKAHU8tlLGpW7cTE1FEnMI6rBrDFp_wIH1xlWfNCJ1kTa3lZMCpQf4C3av-QjzQo9R7GWS7BcYRScJKAfJPRbTRIw23UYilXjQ0IVWNdXcmTnaFnkdqvmnp_VCJqc5l6fNo_G4SzrQx07KnqTWxYb1eLebw387SnB2O3XAxNAZygQISNlrBjZRIR0MOX")' }}>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 dark:text-white">د. خالد علي</p>
                                                        <p className="text-xs text-slate-500">ID: #DOC-1120</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm font-medium bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-lg">جراحة
                                                    العظام</span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">٦٠٠
                                                    ج.م</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-center">
                                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                                                        <span className="size-1.5 rounded-full bg-primary" />
                                                        نشط
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-start gap-2">
                                                    <button className="size-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary/20 hover:text-primary transition-all">
                                                        <span className="material-symbols-outlined text-lg">edit</span>
                                                    </button>
                                                    <button className="size-8 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all">
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* Pagination */}
                            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-sm text-slate-500 dark:text-slate-400">
                                    عرض <span className="font-bold text-slate-900 dark:text-white">١</span> إلى <span className="font-bold text-slate-900 dark:text-white">٤</span> من أصل <span className="font-bold text-slate-900 dark:text-white">٢٤</span> طبيب
                                </p>
                                <div className="flex gap-1">
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-all">
                                        <span className="material-symbols-outlined rotate-180 text-sm">arrow_forward_ios</span>
                                    </button>
                                    <button className="size-9 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-sm">١</button>
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-all font-bold">٢</button>
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-all font-bold">٣</button>
                                    <button className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-all">
                                        <span className="material-symbols-outlined text-sm">arrow_forward_ios</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}