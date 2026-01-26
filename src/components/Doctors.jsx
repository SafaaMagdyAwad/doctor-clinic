import { motion } from 'framer-motion';

const doctors = [
    {
        name: "د. أحمد علي",
        role: "استشاري أمراض القلب",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN3ZFzCW61ySbM6EoWIp1uo_GjPB5Uv3677Hd5nGbv0nM7jgIW_olsnVEpgVqmDygSoqEvLZiG2Nayp8WMCjrSqfAiM5ySyBoeikadChsLbUMcqy7ougB3pOGN2_qIvRp7-_3msVb4f3YR72oiPeIZ50rudBUZYjNUGNPtbx6ihM6FYYvv7OcVjb3dcGxlGj9zZcWSgENCXsKRnnnsqspQVZexcJcXbihbgPotm5kyXqu23JkZ8ujGo5wfczPmDgEv3vG0MTE0NDDh",
        rating: 4.9
    },
    {
        name: "د. سارة محمود",
        role: "أخصائية طب الأطفال",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDmocNsx-bMMkztGwT72SkMJGhZg0wdxdsyRgl7KpSKIHQpqbxtvUFRu3qENqC1J5p0Xnw3601e0-Q60t3-uD2tWZ-sBZy2aHPxiCSHPX-ElYd5XE9MvVcIV0WaKxdgfr2I1vGb3PmRu0wMmmSIW_7PPMd9z3d3puVU5TzRfRAMvGdWF1m6gEoYU3gK-868x7Ivr4y0uUXRwu4pXU3YtfAZbZ8bkxbR6RyYOcxqiNvG8jF0EWAeyoUd7bJ1pGON7-hvq3vSN13ELEoS",
        rating: 5.0
    },
    {
        name: "د. خالد عمر",
        role: "استشاري جراحة عامة",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbI2OKSaAGoMZAhlhKZxIgPBG6zfYTHArYxvfab7Cj94pT0Xh__dmnpJtjIB8ye90uK2uJ-AjSP5MhZmlqHx_DU9ztmEhJsl6XR6_iS13_pLycDkNVbKq69-Xo3PFh_NGmsVjF5wvQbjkJ69MOtiqE1pcwhTlROL0n03AAbH8Wz1uN4HdO0KOmzNbBAQ_oR1IurmaSYS9TPP7Sp_H3ATh4whMwd6aj-UnTM_u75hLt-ohMiHc-VQeZ6Q5aeJbsqwVjoB4gtMvKlIUT",
        rating: 4.8
    }
];

export function Doctors() {
    return (
        <section className="relative bg-slate-50 dark:bg-slate-950 py-24" id="doctors">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 dark:bg-blue-900/5 -skew-x-12 -z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[#0d141b] dark:text-white text-3xl md:text-5xl font-black mb-4">
                        تعرف على <span className="text-[#137fec]">نخبة أطبائنا</span>
                    </h2>
                    <p className="text-[#4c739a] dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        فريقنا مكرس لتقديم رعاية صحية استثنائية مبنية على الخبرة والتعاطف مع كل مريض.
                    </p>
                </motion.div>

                {/* Doctors Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {doctors.map((doctor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-[#cfdbe7] dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative h-80 overflow-hidden">
                                <motion.img 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    alt={doctor.name} 
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                                    src={doctor.image} 
                                />
                                {/* Rating Badge */}
                                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                                    <span className="text-xs font-bold dark:text-white">{doctor.rating}</span>
                                </div>
                            </div>

                            {/* Info Container */}
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-[#0d141b] dark:text-white mb-1 group-hover:text-[#137fec] transition-colors">
                                    {doctor.name}
                                </h3>
                                <p className="text-[#4c739a] dark:text-slate-400 font-medium mb-6">
                                    {doctor.role}
                                </p>
                                
                                <button className="relative w-full group/btn overflow-hidden py-4 rounded-xl border-2 border-[#137fec] text-[#137fec] font-bold transition-all duration-300 hover:text-white">
                                    <span className="relative z-10">حجز موعد</span>
                                    <div className="absolute inset-0 bg-[#137fec] translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}