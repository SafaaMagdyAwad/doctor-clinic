import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const faqData = [
    {
        title: "أحدث التقنيات الطبية",
        content: "نستخدم أحدث الأجهزة التشخيصية والعلاجية المعتمدة عالمياً لضمان دقة النتائج وسلامة المرضى.",
        icon: "biotech"
    },
    {
        title: "فريق طبي خبير ومتميز",
        content: "يضم طاقمنا نخبة من الاستشاريين والأخصائيين ذوي الخبرات الطويلة في مختلف التخصصات.",
        icon: "groups"
    },
    {
        title: "بيئة آمنة ومعقمة",
        content: "نتبع بروتوكولات تعقيم صارمة لضمان بيئة صحية آمنة لكل مراجع وزائر وفق المعايير الدولية.",
        icon: "sanitizer"
    }
];

export function WhyUs() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-24 max-w-[1200px] mx-auto px-6 overflow-hidden" id='whyUs'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                {/* Text & Accordion Side */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[#0d141b] dark:text-white text-3xl md:text-5xl font-black leading-tight mb-6">
                        لماذا تختار <span className="text-[#137fec]">عيادة الشفاء؟</span>
                    </h2>
                    <p className="text-[#4c739a] dark:text-slate-400 mb-10 text-lg leading-relaxed">
                        نحن نلتزم بتقديم أعلى مستويات الجودة في الرعاية الصحية من خلال دمج الخبرة الطبية مع التكنولوجيا الحديثة.
                    </p>

                    <div className="flex flex-col gap-4">
                        {faqData.map((item, index) => (
                            <div 
                                key={index}
                                className={`rounded-2xl border transition-all duration-300 ${
                                    activeIndex === index 
                                    ? "border-[#137fec] bg-blue-50/30 dark:bg-blue-900/10 shadow-lg shadow-blue-500/5" 
                                    : "border-[#cfdbe7] dark:border-slate-800 bg-white dark:bg-slate-900"
                                }`}
                            >
                                <button 
                                    onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-right"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`material-symbols-outlined ${activeIndex === index ? "text-[#137fec]" : "text-slate-400"}`}>
                                            {item.icon}
                                        </span>
                                        <span className="text-[#0d141b] dark:text-white font-bold text-lg">
                                            {item.title}
                                        </span>
                                    </div>
                                    <motion.span 
                                        animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                        className="material-symbols-outlined text-[#137fec]"
                                    >
                                        expand_more
                                    </motion.span>
                                </button>
                                
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-[#4c739a] dark:text-slate-400 text-sm leading-relaxed px-6 pb-6 pr-14">
                                                {item.content}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Image & Interactive Stats Side */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Floating Achievement Card */}
                    <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute -bottom-8 -right-8 z-20 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-blue-50 dark:border-slate-700 hidden md:flex items-center gap-4"
                    >
                        <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-white shadow-lg shadow-yellow-400/30">
                            <span className="material-symbols-outlined">star</span>
                        </div>
                        <div>
                            <p className="text-2xl font-black dark:text-white">15+</p>
                            <p className="text-xs text-slate-500 dark:text-slate-400">سنة من الخبرة</p>
                        </div>
                    </motion.div>

                    {/* Decorative Background Circles */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#137fec]/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" />

                    {/* Main Image */}
                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            alt="Clinic Interior" 
                            className="w-full h-full object-cover aspect-[4/5]" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuByQLomDEoVbCo8wJC2jDWs1u3KLoSeUqI8y42w_coZldOJw9qwBou5TWcFovkDz3sAhhDr6fQtyLbS-T0Yvb2KsTJhStJxw0MqArjvUZVaM8wRj40tfmsjnKuzSUgTE6m3l0Y6co0x52yr6T52PDtiECVXOUBOZqTzp9QsNB4K88nK0xRpbj-Ek-tcrKFXPyXXRYtiClYtC2bUfykLtFNCLMoW-IJuP33R8CdDl8rOwbPCvboFZYMoKVY6CsTqlGKMX7Thiwr6rI1S" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}