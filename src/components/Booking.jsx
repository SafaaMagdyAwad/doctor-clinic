import { motion } from 'framer-motion';

export function Booking() {
    return (
        <section className="py-24 px-6 relative overflow-hidden" id="booking">
            {/* Background Accent Blobs */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />
            
            <div className="max-w-[1200px] mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-[#137fec] rounded-[3rem] p-8 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-500/20"
                >
                    {/* Dynamic Background Patterns */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        
                        {/* Content Side */}
                        <div className="text-white space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="space-y-4"
                            >
                                <h2 className="text-4xl md:text-5xl font-black leading-tight">احجز موعدك الآن</h2>
                                <p className="text-blue-50 text-lg leading-relaxed opacity-90">
                                    لا تتردد في طلب الاستشارة الطبية. فريقنا جاهز للرد على استفساراتكم وتنسيق مواعيدكم بما يتناسب مع جدولكم الخاص.
                                </p>
                            </motion.div>

                            <motion.ul 
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.1 } },
                                    hidden: { opacity: 0 }
                                }}
                                className="space-y-5"
                            >
                                {[
                                    "تأكيد فوري للحجز عبر الرسائل النصية",
                                    "إمكانية إلغاء أو تغيير الموعد بسهولة",
                                    "خصوصية تامة لبيانات المرضى"
                                ].map((text, i) => (
                                    <motion.li 
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, x: 20 },
                                            visible: { opacity: 1, x: 0 }
                                        }}
                                        className="flex items-center gap-4 text-white/90"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-sm font-bold">check</span>
                                        </span>
                                        <span className="font-medium">{text}</span>
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </div>

                        {/* Form Side */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2rem] shadow-2xl"
                        >
                            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="col-span-2">
                                        <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300 mr-1">الاسم بالكامل</label>
                                        <input 
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl py-4 px-5 focus:bg-white dark:focus:bg-slate-900 focus:border-[#137fec] outline-none transition-all text-sm" 
                                            placeholder="أدخل اسمك الثلاثي" 
                                            type="text" 
                                        />
                                    </div>
                                    
                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300 mr-1">رقم الهاتف</label>
                                        <input 
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl py-4 px-5 focus:border-[#137fec] outline-none transition-all text-sm" 
                                            placeholder="05xxxxxxxx" 
                                            type="tel" 
                                        />
                                    </div>

                                    <div className="col-span-2 sm:col-span-1">
                                        <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300 mr-1">القسم</label>
                                        <select className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl py-4 px-5 focus:border-[#137fec] outline-none transition-all text-sm appearance-none">
                                            <option>اختر العيادة</option>
                                            <option>الطب العام</option>
                                            <option>طب الأسنان</option>
                                            <option>الأطفال</option>
                                        </select>
                                    </div>

                                    <div className="col-span-2">
                                        <label className="block text-sm font-bold mb-2 text-slate-700 dark:text-slate-300 mr-1">تاريخ الموعد</label>
                                        <input 
                                            className="w-full bg-slate-50 dark:bg-slate-800 border-2 border-transparent rounded-2xl py-4 px-5 focus:border-[#137fec] outline-none transition-all text-sm" 
                                            type="date" 
                                        />
                                    </div>
                                </div>

                                <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#137fec] hover:bg-[#0d69c7] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-500/30 transition-all mt-4 flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    تأكيد الحجز الآن
                                    <span className="material-symbols-outlined">calendar_month</span>
                                </motion.button>
                            </form>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}