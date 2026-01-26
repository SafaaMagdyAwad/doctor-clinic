export function Footer() {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="flex flex-col gap-6 col-span-1 md:col-span-2">
                    <div className="flex items-center gap-2 text-[#137fec]">
                        <span className="material-symbols-outlined text-3xl font-bold">health_and_safety</span>
                        <span className="text-2xl font-black text-[#0d141b] dark:text-white">عيادة الشفاء</span>
                    </div>
                    <p className="text-[#4c739a] dark:text-slate-400 max-w-sm">نحن نؤمن بأن الصحة هي أغلى ما يملك
                        الإنسان، ولذلك نكرس كل جهودنا لتوفير الرعاية التي تليق بكم وبأسركم.</p>
                    <div className="flex gap-4">
                        <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#137fec] hover:bg-[#137fec] hover:text-white transition" href="#"><span className="material-symbols-outlined">share</span></a>
                        <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[#137fec] hover:bg-[#137fec] hover:text-white transition" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-[#0d141b] dark:text-white font-bold mb-6">روابط سريعة</h4>
                    <ul className="flex flex-col gap-4 text-[#4c739a] dark:text-slate-400 text-sm">
                        <li><a className="hover:text-[#137fec] transition" href="#">عن العيادة</a></li>
                        <li><a className="hover:text-[#137fec] transition" href="#">الأسئلة الشائعة</a></li>
                        <li><a className="hover:text-[#137fec] transition" href="#">سياسة الخصوصية</a></li>
                        <li><a className="hover:text-[#137fec] transition" href="#">شروط الاستخدام</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-[#0d141b] dark:text-white font-bold mb-6">أوقات العمل</h4>
                    <ul className="flex flex-col gap-4 text-[#4c739a] dark:text-slate-400 text-sm">
                        <li className="flex justify-between"><span>السبت - الخميس:</span> <span>8 ص - 10 م</span></li>
                        <li className="flex justify-between"><span>الجمعة:</span> <span>4 م - 10 م</span></li>
                        <li className="flex justify-between font-bold text-[#137fec] mt-2"><span>الطوارئ:</span> <span>24
                            ساعة</span></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-[1200px] mx-auto px-6 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-[#4c739a] dark:text-slate-500">
                © 2024 عيادة الشفاء. جميع الحقوق محفوظة.
            </div>
        </footer>

    )
}