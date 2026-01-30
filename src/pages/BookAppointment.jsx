import { useState } from "react";
import { PatientNavbar } from "../components/PatientNavbar";
import { PatientSidebar } from "../components/PatienySidebar";

export function BookAppointment() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about"); // about, schedule, reviews

  return (
    <div className="bg-[#f8fafc] dark:bg-[#060b0a] text-slate-900 dark:text-slate-100 min-h-screen flex transition-colors duration-300 font-sans" dir="rtl">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <div className={`
        fixed inset-y-0 right-0 z-50 w-72 transform transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full lg:hidden"}
      `}>
        <PatientSidebar onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden relative">
        <PatientNavbar setIsSidebarOpen={setIsSidebarOpen} />

        <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT: Main Content Area (8 columns) */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Doctor Profile Card */}
              <div className="bg-white dark:bg-[#111d1a] rounded-2xl p-6 border border-slate-200 dark:border-[#293835] shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-right">
                  <div className="relative group">
                    <div className="size-32 md:size-40 rounded-2xl overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                      <img 
                        alt="Doctor" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" 
                      />
                    </div>
                    <div className="absolute -bottom-2 right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      <span>موثق</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">د. أحمد محمد علي</h2>
                        <p className="text-primary font-semibold mt-1 text-lg">استشاري جراحة القلب والأوعية الدموية</p>
                        
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-4 text-sm text-slate-500 dark:text-[#9eb7b2]">
                          <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-[#1a2b28] px-3 py-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-lg">location_on</span>
                            مستشفى النور، الرياض
                          </span>
                          <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-[#1a2b28] px-3 py-1.5 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-lg">payments</span>
                            ٢٠٠ ريال / كشف
                          </span>
                        </div>
                      </div>
                      <button className="bg-slate-100 dark:bg-[#293835] hover:bg-primary/10 hover:text-primary p-3 rounded-xl transition-all">
                        <span className="material-symbols-outlined">share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "التقييم", val: "٤.٩", icon: "star", color: "text-yellow-400" },
                  { label: "المرضى", val: "+١,٢٠٠", icon: "group", color: "text-blue-400" },
                  { label: "الخبرة", val: "١٥ سنة", icon: "workspace_premium", color: "text-emerald-400" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white dark:bg-[#111d1a] rounded-2xl p-5 border border-slate-200 dark:border-[#293835] text-center hover:border-primary/30 transition-colors shadow-sm">
                    <p className="text-slate-500 dark:text-[#9eb7b2] text-xs font-medium uppercase tracking-wider mb-2">{stat.label}</p>
                    <div className="flex justify-center items-center gap-2">
                      <span className="text-2xl font-black">{stat.val}</span>
                      <span className={`material-symbols-outlined ${stat.color} fill-1`}>{stat.icon}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tabs Section */}
              <div className="bg-white dark:bg-[#111d1a] rounded-2xl border border-slate-200 dark:border-[#293835] overflow-hidden shadow-sm">
                <div className="flex border-b border-slate-200 dark:border-[#293835] bg-slate-50/50 dark:bg-black/20">
                  {['about', 'schedule', 'reviews'].map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-6 py-4 text-sm font-bold transition-all ${
                        activeTab === tab 
                        ? "text-primary border-b-2 border-primary bg-white dark:bg-[#111d1a]" 
                        : "text-slate-500 hover:text-primary"
                      }`}
                    >
                      {tab === 'about' ? 'نبذة' : tab === 'schedule' ? 'المواعيد' : 'التقييمات'}
                    </button>
                  ))}
                </div>

                <div className="p-6 md:p-8">
                  {activeTab === 'about' && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        عن الدكتور
                      </h3>
                      <p className="text-slate-600 dark:text-[#9eb7b2] leading-relaxed text-base">
                        الدكتور أحمد محمد علي هو استشاري جراحة القلب والأوعية الدموية بخبرة تزيد عن ١٥ عاماً في علاج
                        الحالات المعقدة. حصل على زمالة كلية الجراحين الملكية وحائز على عدة جوائز دولية في الابتكار
                        الطبي.
                      </p>

                      <h3 className="text-lg font-bold mt-8 mb-4 flex items-center gap-2">
                        <div className="w-1 h-6 bg-primary rounded-full" />
                        التخصصات
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {["تغيير صمامات القلب", "جراحة الشرايين التاجية", "علاج الدوالي", "قسطرة تشخيصية"].map(tag => (
                          <span key={tag} className="bg-slate-100 dark:bg-[#293835] px-4 py-2 rounded-xl text-sm font-medium hover:bg-primary hover:text-white transition-colors cursor-default">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 pt-8 border-t border-slate-200 dark:border-[#293835]">
                        <h3 className="text-lg font-bold mb-4">الموقع على الخريطة</h3>
                        <div className="aspect-video rounded-2xl overflow-hidden grayscale-[0.5] hover:grayscale-0 transition-all duration-700 border border-slate-200 dark:border-[#293835]">
                          <div className="w-full h-full bg-[#e2e8f0] dark:bg-[#1a2b28] flex items-center justify-center relative">
                             <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/46.71,24.71,12/800x450?access_token=YOUR_TOKEN')] bg-cover opacity-30" />
                             <div className="relative z-10 text-center p-4">
                                <span className="material-symbols-outlined text-5xl text-primary animate-bounce">location_on</span>
                                <p className="font-bold mt-2">حي السليمانية، الرياض</p>
                             </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT: Booking Sidebar (4 columns) */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-white dark:bg-[#111d1a] rounded-2xl border-2 border-primary/20 dark:border-[#293835] p-6 shadow-xl shadow-primary/5">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="p-2 bg-primary/10 rounded-lg">
                    <span className="material-symbols-outlined text-primary block">calendar_month</span>
                  </span>
                  حجز موعد جديد
                </h3>

                <div className="mb-6">
                  <p className="text-sm font-bold mb-4 text-slate-700 dark:text-slate-300">اختر التاريخ</p>
                  <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                    {[
                      { day: "السبت", date: "٢٠", active: true },
                      { day: "الأحد", date: "٢١", active: false },
                      { day: "الاثنين", date: "٢٢", active: false },
                      { day: "الثلاثاء", date: "٢٣", disabled: true },
                    ].map((item, i) => (
                      <button 
                        key={i}
                        disabled={item.disabled}
                        className={`flex-shrink-0 w-20 h-24 rounded-2xl flex flex-col items-center justify-center transition-all border-2 ${
                          item.active 
                          ? "bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105" 
                          : "bg-slate-50 dark:bg-[#1a2b28] border-transparent hover:border-primary/50 opacity-70"
                        } ${item.disabled ? "opacity-30 cursor-not-allowed grayscale" : ""}`}
                      >
                        <span className="text-[10px] font-medium opacity-80">{item.day}</span>
                        <span className="text-2xl font-black my-1">{item.date}</span>
                        <span className="text-[10px] font-bold">اكتوبر</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <p className="text-sm font-bold mb-4 text-slate-700 dark:text-slate-300">الوقت المتاح</p>
                  <div className="grid grid-cols-3 gap-2">
                    {["٠٩:٠٠", "٠٩:٣٠", "١٠:٠٠", "١٠:٣٠", "١١:٠٠", "٠٤:٠٠", "٠٤:٣٠", "٠٥:٠٠"].map((time, i) => (
                      <button 
                        key={i}
                        className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                          i === 2 
                          ? "bg-primary text-white border-primary shadow-md" 
                          : "bg-slate-50 dark:bg-[#1a2b28] border-slate-200 dark:border-[#293835] hover:border-primary text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-black/20 rounded-2xl p-4 space-y-3 mb-8 border border-slate-100 dark:border-[#293835]">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-[#9eb7b2]">سعر الكشفية</span>
                    <span className="font-bold">٢٠٠ ريال</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 dark:text-[#9eb7b2]">رسوم الخدمة</span>
                    <span className="font-bold text-emerald-500">مجاناً</span>
                  </div>
                  <div className="border-t border-slate-200 dark:border-[#293835] pt-3 flex justify-between items-center">
                    <span className="font-bold">الإجمالي</span>
                    <span className="font-black text-2xl text-primary">٢٠٠ ريال</span>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-[#16a085] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3">
                  <span>تأكيد الحجز</span>
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
                
                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                   <span className="material-symbols-outlined text-sm">info</span>
                   <span>إلغاء الحجز متاح حتى ٢٤ ساعة قبل الموعد</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}