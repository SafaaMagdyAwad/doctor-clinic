import { motion } from 'framer-motion';

export function CTA() {
    return (
        <section className="max-w-[1200px] mx-auto px-6 py-24">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative  bg-[#137fec]  rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-2xl shadow-blue-500/20"
            >
                {/* Decorative Abstract Shapes */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                {/* Content Side */}
                <div className="relative z-10 w-full md:w-1/2 flex flex-col gap-8 text-white text-center md:text-right">
                    <div className="flex flex-col gap-4">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-5xl font-black leading-tight"
                        >
                            جاهزون لاستقبالكم <br /> 
                            <span className="text-blue-100">على مدار الساعة</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-white/80 text-lg max-w-lg mx-auto md:mr-0"
                        >
                            لا تتردد في الاتصال بنا لحالات الطوارئ أو الاستفسارات العامة. فريقنا الطبي متاح دائماً لخدمتكم.
                        </motion.p>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4 justify-center md:justify-start"
                    >
                        {/* Call Card */}
                        <motion.a 
                            href="tel:920001234"
                            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 transition-colors"
                        >
                            <div className="relative">
                                <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                                <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#137fec]">
                                    <span className="material-symbols-outlined text-2xl font-bold">call</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-white/60 font-medium">اتصل بنا</p>
                                <p className="text-xl font-black">920001234</p>
                            </div>
                        </motion.a>

                        {/* Mail Card */}
                        <motion.a 
                            href="mailto:info@shifa.sa"
                            whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 transition-colors"
                        >
                            <div className="w-12 h-12 bg-blue-400/30 rounded-xl flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-2xl">mail</span>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-white/60 font-medium">راسلنا</p>
                                <p className="text-xl font-black">info@shifa.sa</p>
                            </div>
                        </motion.a>
                    </motion.div>
                </div>

                {/* Map Side */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative w-full md:w-1/2 group"
                >
                    <div className="relative h-64 md:h-96 w-full rounded-[2rem] overflow-hidden border-4 border-white/20 shadow-2xl">
                        {/* Map Image/Placeholder */}
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-ELCZ944jo0h6Zqr_nesAgVnwPCxJxnGqAJfP-uJebwRboey-HOwmDPpqlAMx3-x9xTIuq_KqM3Ww9djIHv4bnI4mdJcGFPcQlxZAPebRj9oXRaRpUjvY4no-MpgvUxYheMbhqJ-XFSV5Hyos-3WDsWJLRr8eeXE_LPgKoFLngp7zfHCpE0DYIbTf58pNWb_VhYDeI1bWKgk2gV94gy75t8ymxUfImtJb-0eVaE35DhuIT62O3331ahJ2WMpazdjfuRkhnhu5g1l" 
                            alt="Map"
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                        />
                        
                        {/* Map Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        
                        {/* Pin & Button */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                            <motion.div 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-12 h-12 bg-[#137fec] rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-500/50"
                            >
                                <span className="material-symbols-outlined text-3xl">location_on</span>
                            </motion.div>
                            <div className="bg-white dark:bg-slate-900 text-[#0d141b] dark:text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                الرياض، حي المروج
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}