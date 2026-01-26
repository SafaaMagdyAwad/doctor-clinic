import { motion } from 'framer-motion';

const reviews = [
    {
        name: "محمد الحربي",
        role: "مريض قسم العيون",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpY0jzmZJq1EsQ5p0cIcQ8OdyALbkcklXjlI0X632Xa7vrRfxN2maSIsBFLJrdhEOsAHu4deEkUqbfBl4j-Aeoactmj2lSYwIRSaECbL8lTPnBfKAmTeFFD7qckNdRIThGWy0WJRqvC3RBAODgmTHwFb_MbSl9tSshzNKw9wGMOtgYXJSlOlkAThh5NKiPckgBzX4Y9EfYw-P5a-DXQFahj3XhKisSG6T8eVQqtXZRelHplOt8kk2ty0mPvHmlgAmjwaWUYtLqtWBq",
        text: "تجربة ممتازة جداً، العيادة نظيفة والتعامل راقي من الاستقبال حتى الأطباء. دقة في المواعيد واهتمام حقيقي بالمريض.",
        rating: 5
    },
    {
        name: "نورة السعيد",
        role: "والدة مريض",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsal9iRWwVNkMOG3_nnScrK3TJrEAldy0gl5FKj3VJN7eRlXqiHPGikFwIdRMrXHEW6L02XpK4RStZuQr-8M9JVv5KFar7zXtfzfCwQKtGmeT6OyOX1Zk6bpvascSzAQeZi68UwEp2ESLCUmo1lSWsGwj7xLXFK46v70o-G6Yv7xwj8EB2-gEVkJFLTm1yRqnpehBgfSkRBwOdyR8w7IT-9O5x2su34TvtbSf7WPPVGP4wd9jLXUHFCN3C7fzuiHXQwO6pES4zTqbP",
        text: "أشكر قسم الأطفال على صبرهم وتعاملهم اللطيف مع طفلي. جعلوا زيارة الطبيب تجربة غير مخيفة أبداً ومريحة جداً لنا.",
        rating: 5
    }
];

export function Testimonials() {
    return (
        <section className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden" id="testimonials">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 dark:from-slate-950 to-transparent" />

            <div className="max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#137fec] font-black text-sm uppercase tracking-widest block mb-4">آراء المراجعين</span>
                    <h2 className="text-[#0d141b] dark:text-white text-3xl md:text-5xl font-black">ماذا يقول <span className="text-[#137fec]">مرضانا</span></h2>
                </motion.div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {reviews.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="relative group bg-slate-50 dark:bg-slate-800/40 p-8 md:p-10 rounded-[2rem] border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                        >
                            {/* Large Floating Quote Icon */}
                            <span className="material-symbols-outlined text-[#137fec]/10 text-8xl absolute top-6 left-6 group-hover:text-[#137fec]/20 transition-colors pointer-events-none">
                                format_quote
                            </span>

                            {/* Stars */}
                            <div className="flex gap-1 mb-6 relative z-10">
                                {[...Array(item.rating)].map((_, i) => (
                                    <motion.span 
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 + (i * 0.1) }}
                                        className="material-symbols-outlined text-yellow-400 fill-1 text-2xl"
                                    >
                                        star
                                    </motion.span>
                                ))}
                            </div>

                            <p className="text-[#4c739a] dark:text-slate-300 text-lg md:text-xl leading-relaxed mb-8 italic relative z-10">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-14 h-14 rounded-full p-1 bg-gradient-to-tr from-[#137fec] to-blue-300">
                                    <div 
                                        className="w-full h-full rounded-full bg-cover bg-center border-2 border-white dark:border-slate-800" 
                                        style={{ backgroundImage: `url("${item.image}")` }} 
                                    />
                                </div>
                                <div className="text-right">
                                    <h5 className="font-black text-[#0d141b] dark:text-white text-lg">{item.name}</h5>
                                    <p className="text-sm text-[#137fec] font-medium">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}