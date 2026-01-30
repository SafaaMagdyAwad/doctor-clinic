export function Login() {
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#3d524e] px-10 py-3 bg-background-light dark:bg-background-dark">
                <div className="flex items-center gap-4 text-primary">
                    <div className="size-8">
                        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_6_330)">
                                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd" />
                            </g>
                            <defs>
                                <clipPath id="clip0_6_330">
                                    <rect fill="white" height={48} width={48} />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h2 className="text-[#11211e] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">نظام حجز
                        العيادة</h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-primary text-[#11211e] text-sm font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">تواصل معنا</span>
                </button>
            </header>
            <main className="flex-grow flex flex-col md:flex-row">
                {/* Right Side: Medical Illustration (Visible on Desktop) */}
                <div className="hidden md:flex md:w-1/2 relative bg-[#1c2624] items-center justify-center p-12 overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent">
                    </div>
                    <div className="relative z-10 text-center">
                        <img alt="Medical background" className="rounded-xl shadow-2xl mb-8 max-w-full h-auto object-cover border border-primary/20" data-alt="Modern medical office with advanced healthcare equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFciAGPqTJbQ9tWxErZkKjh4HNVU3wz0QTMiWN6kYtbebnUrI8lKJKBaSZKKzvDMb-AEwC0ctxTTvlu8r_8rqKv3LMlxj6piGLMUCb4I5mTJKRGaCrb0r-Gnc87iaXCkr6xmMSjAErC_UXEUKE0RWhbmCWTXOiKE3K7NUEP1BWchF8YTelxzYsAvABuTKeOTZB9iYrB_7NV8z_hZnHsFyKTBPWHedeCW1M6WAM4vWJy7K7SDdCAoXeRXwkqrM-441MCNK40hGfR-DW" />
                        <h3 className="text-white text-2xl font-bold mb-4">إدارة عيادتك بكل سهولة</h3>
                        <p className="text-primary font-medium">نظام متكامل لحجز المواعيد وإدارة بيانات المرضى</p>
                    </div>
                </div>
                {/* Left Side: Login Form */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-24 bg-background-light dark:bg-background-dark">
                    <div className="max-w-md w-full mx-auto">
                        {/* Headline Section */}
                        <div className="mb-8">
                            <h1 className="text-[#11211e] dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-2">
                                تسجيل الدخول</h1>
                            <p className="text-[#5c7a74] dark:text-[#9eb7b2] text-base font-normal leading-normal">أهلاً بك من جديد!
                                يرجى إدخال بياناتك للدخول إلى لوحة التحكم</p>
                        </div>
                        {/* Action Panel (Error Message Example) */}
                        <div className="mb-6 @container">
                            <div className="flex flex-1 flex-col items-start justify-between gap-4 rounded-xl border border-red-500/50 bg-red-500/10 p-4 @[480px]:flex-row @[480px]:items-center">
                                <div className="flex flex-col gap-1">
                                    <p className="text-red-600 dark:text-red-400 text-sm font-bold leading-tight">خطأ في المصادقة
                                    </p>
                                    <p className="text-red-500/80 dark:text-red-300/80 text-xs font-normal leading-normal">بيانات
                                        الاعتماد التي أدخلتها غير صحيحة. يرجى المحاولة مرة أخرى.</p>
                                </div>
                                <div className="text-red-600 dark:text-red-400">
                                    <span className="material-symbols-outlined">error</span>
                                </div>
                            </div>
                        </div>
                        {/* Form Fields */}
                        <form className="space-y-4" onsubmit="return false;">
                            {/* Email Field */}
                            <div className="flex flex-col">
                                <label className="text-[#11211e] dark:text-white text-sm font-medium leading-normal pb-2">البريد
                                    الإلكتروني</label>
                                <div className="relative">
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#11211e] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3d524e] bg-white dark:bg-[#1c2624] focus:border-primary h-12 placeholder:text-[#9eb7b2] p-[15px] text-base font-normal leading-normal" placeholder="example@clinic.com" type="email" />
                                </div>
                            </div>
                            {/* Password Field */}
                            <div className="flex flex-col">
                                <label className="text-[#11211e] dark:text-white text-sm font-medium leading-normal pb-2">كلمة
                                    المرور</label>
                                <div className="relative">
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#11211e] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#3d524e] bg-white dark:bg-[#1c2624] focus:border-primary h-12 placeholder:text-[#9eb7b2] p-[15px] text-base font-normal leading-normal pl-12" placeholder="••••••••" type="password" />
                                    <button className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9eb7b2] hover:text-primary" type="button">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                </div>
                            </div>
                            {/* Actions: Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between py-2">
                                <label className="flex items-center gap-2 cursor-pointer group">
                                    <input className="rounded border-[#3d524e] bg-[#1c2624] text-primary focus:ring-primary focus:ring-offset-background-dark" type="checkbox" />
                                    <span className="text-sm text-[#5c7a74] dark:text-[#9eb7b2] group-hover:text-primary transition-colors">تذكرني</span>
                                </label>
                                <a className="text-sm font-medium text-primary hover:underline" href="#">نسيت كلمة المرور؟</a>
                            </div>
                            {/* Login Button */}
                            <button className="w-full flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-5 bg-primary text-[#11211e] text-base font-bold leading-normal tracking-[0.015em] hover:opacity-90 transition-opacity mt-4" type="submit">
                                <span>تسجيل الدخول</span>
                            </button>
                        </form>
                        {/* Support Footer */}
                        <div className="mt-10 text-center border-t border-[#3d524e] pt-6">
                            <p className="text-[#5c7a74] dark:text-[#9eb7b2] text-sm">
                                ليس لديك حساب؟
                                <a className="text-primary font-bold hover:underline mr-1" href="#">تواصل مع الإدارة</a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* Footer Decoration */}
            <footer className="p-6 text-center text-[#5c7a74] dark:text-[#9eb7b2] text-xs bg-background-light dark:bg-background-dark">
                © 2024 نظام حجز العيادة - جميع الحقوق محفوظة
            </footer>
        </div>

    )
}