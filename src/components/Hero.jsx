import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative max-w-[1200px] mx-auto px-6 py-12 md:py-24 @container overflow-hidden">
            {/* Background Decorative Blob */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-3xl -z-10" />

            <div className="flex flex-col-reverse gap-12 md:flex-row items-center">
                
                {/* Text Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8 w-full md:w-1/2"
                >
                    <div className="flex flex-col gap-6">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#0d141b] dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-tight"
                        >
                            رعايتكم الصحية هي <span className="text-[#137fec]">أولويتنا القصوى</span>
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-[#4c739a] dark:text-slate-400 text-lg leading-relaxed max-w-[540px]"
                        >
                            نقدم أفضل الخدمات الطبية المتميزة مع فريق من الأطباء المتخصصين لرعايتك ورعاية أسرتك بأحدث التقنيات العالمية والمعايير الدولية.
                        </motion.p>
                    </div>

                    {/* Buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="flex min-w-[170px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-[#137fec] text-white text-lg font-bold transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#137fec]/30 active:scale-95">
                            احجز الآن
                        </button>
                        <button className="flex min-w-[170px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-[#e7edf3] dark:border-slate-700 bg-transparent text-[#0d141b] dark:text-white text-lg font-bold transition-all hover:bg-[#e7edf3] dark:hover:bg-slate-800">
                            استشارة طبية
                        </button>
                    </motion.div>

                    {/* Trust Badges */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800"
                    >
                        <div className="flex -space-x-3 space-x-reverse">
                            {["https://img.freepik.com/free-vector/smiling-female-doctor-white-lab-coat-illustration_1308-182489.jpg?semt=ais_hybrid&w=740&q=80", "https://img.freepik.com/free-vector/smiling-female-doctor-white-lab-coat-illustration_1308-182489.jpg?semt=ais_hybrid&w=740&q=80", "https://img.freepik.com/free-vector/smiling-female-doctor-white-lab-coat-illustration_1308-182489.jpg?semt=ais_hybrid&w=740&q=80"].map((i) => (
                                <motion.img 
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    alt="Doctor" 
                                    className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-900 object-cover shadow-sm"
                                    src={i} 
                                />
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-[#0d141b] dark:text-white">+5000</span>
                            <span className="text-sm text-[#4c739a] dark:text-slate-400">مريض يثق بنا شهرياً</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Image Side */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 relative"
                >
                    {/* Floating Card */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-6 -right-6 z-20 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-100 dark:border-slate-700"
                    >
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-slate-500">متصل الآن</span>
                            <span className="text-sm font-bold dark:text-white">أطباء متاحون</span>
                        </div>
                    </motion.div>

                    {/* Main Image Container */}
                    <div className="relative w-full aspect-square md:aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#137fec]/40 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                        <motion.img 
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.6 }}
                            alt="Doctor Professional" 
                            className="w-full h-full object-cover" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq4X-uDXE7Ny3EkDjzjzXtw-0BGxmXxoIsSeqGiRkb3LrhXldWak-XrvDPq5ZLRzWzoTtgErAKN3wgfhSCWWDFENIq6sZNw3NGbhFgl4sbAX-MWQDiA-zNv_pPPY0M_RVnE_gdNbcTWt5-5Jly8Kc8cSw4tEbJ3_SfzOnst2YcmHQ1Aa3QvsUgWMiG8duzkiOx1klWV-BCl3AmdKmHXHYW0gxOKU_D9zMBWryTbsIGfLQ9DJuv7CoPcXbpYGkGINbmX9sF3VN62bFu" 
                        />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-600 rounded-2xl -z-10 rotate-12" />
                </motion.div>

            </div>
        </section>
    );
}