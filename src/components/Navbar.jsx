import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Change background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "الرئيسية", href: "#" },
        { name: "خدماتنا", href: "#services" },
        { name: "أطباؤنا", href: "#doctors" },
        { name: "من نحن", href: "#whyUs" },
        { name: "اتصل بنا", href: "#booking" },
    ];

    return (
        <header 
            className={`sticky top-0 z-[100] transition-all duration-300 ${
                isScrolled 
                ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-md py-2" 
                : "bg-transparent py-4"
            }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
                
                {/* Logo Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 text-[#137fec]"
                >
                    <div className="w-10 h-10 bg-[#137fec] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                        <svg fill="none" viewBox="0 0 48 48" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-[#0d141b] dark:text-white text-xl font-black tracking-tight">
                        عيادة الشفاء
                    </h2>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            className="text-[#4c739a] dark:text-slate-300 text-sm font-bold hover:text-[#137fec] dark:hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-[#137fec] transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <motion.a 
                        href="#booking"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:flex cursor-pointer items-center justify-center rounded-xl h-11 px-6 bg-[#137fec] text-white text-sm font-bold shadow-lg shadow-blue-500/25 transition hover:bg-blue-600"
                    >
                        احجز موعدك
                    </motion.a>

                    {/* Mobile Menu Toggle */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex items-center justify-center w-10 h-10 text-slate-600 dark:text-slate-300"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {mobileMenuOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-bold text-slate-700 dark:text-slate-200 hover:text-[#137fec]"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a 
                                href="#booking"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full py-4 bg-[#137fec] text-white text-center rounded-xl font-bold"
                            >
                                احجز موعدك الآن
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}