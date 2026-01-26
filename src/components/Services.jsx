import { motion } from 'framer-motion';

const servicesData = [
    {
        icon: "stethoscope",
        title: "الطب العام",
        desc: "فحوصات دورية وشاملة لجميع أفراد الأسرة مع نخبة من أطباء الباطنة.",
    },
    {
        icon: "child_care",
        title: "طب الأطفال",
        desc: "عناية خاصة ونمو صحي لأطفالكم في بيئة مريحة ومهيئة لصغار السن.",
    },
    {
        icon: "favorite",
        title: "أمراض القلب",
        desc: "تشخيص دقيق باستخدام أحدث أجهزة السونار وتخطيط القلب المتقدم.",
    },
    {
        icon: "biotech",
        title: "المختبر",
        desc: "تحاليل مخبرية دقيقة وسريعة مع إمكانية الحصول على النتائج إلكترونياً.",
    }
];

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Delay between each card
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
};

export function Services() {
    return (
        <section className="relative bg-white dark:bg-slate-900 py-24 overflow-hidden" id="services">
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/5 rounded-full blur-[120px] -z-10" />

            <div className="max-w-[1200px] mx-auto px-6">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-4 mb-16 text-center md:text-right"
                >
                    <span className="text-[#137fec] font-extrabold text-sm uppercase tracking-[0.2em]">
                        خدماتنا المتميزة
                    </span>
                    <h2 className="text-[#0d141b] dark:text-white text-3xl md:text-5xl font-black">
                        رعاية شاملة تحت <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#137fec] to-blue-400">سقف واحد</span>
                    </h2>
                </motion.div>

                {/* Services Grid */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.2 }
                            }}
                            className="group relative flex flex-col gap-5 rounded-2xl border border-[#cfdbe7] dark:border-slate-800 bg-white dark:bg-slate-800/40 p-8 transition-all hover:shadow-2xl hover:shadow-blue-500/10 hover:border-[#137fec]/40"
                        >
                            {/* Animated Icon Container */}
                            <div className="w-14 h-14 rounded-xl bg-[#137fec]/10 flex items-center justify-center text-[#137fec] transition-colors group-hover:bg-[#137fec] group-hover:text-white">
                                <span className="material-symbols-outlined text-3xl transition-transform group-hover:scale-110">
                                    {service.icon}
                                </span>
                            </div>

                            <div className="flex flex-col gap-3">
                                <h3 className="text-[#0d141b] dark:text-white text-xl font-bold">
                                    {service.title}
                                </h3>
                                <p className="text-[#4c739a] dark:text-slate-400 text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>

                            {/* Subtle Arrow on hover */}
                            <div className="mt-2 flex items-center gap-2 text-[#137fec] font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                                عرض التفاصيل
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}