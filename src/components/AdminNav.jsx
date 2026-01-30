export function AdminNav({ setIsSidebarOpen }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-[#293835] px-4 md:px-8 py-4 sticky top-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-10">
      <div className="flex items-center gap-3 md:gap-6 flex-1">
        
        {/* Hamburger Menu Button - Visible only on mobile */}
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden size-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-[#293835] text-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-[#3d524e] transition-colors"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <h2 className="text-slate-900 dark:text-white text-lg md:text-xl font-bold tracking-tight whitespace-nowrap">
          لوحة تحكم الإدارة
        </h2>

        {/* Search Bar - Hidden on mobile, shows from md up */}
        <div className="relative w-full max-w-md hidden md:block">
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[#9eb7b2]">search</span>
          <input 
            className="w-full h-11 pr-11 pl-4 rounded-xl border-none bg-slate-100 dark:bg-[#293835] text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/50" 
            placeholder="بحث عن مريض، طبيب أو موعد..." 
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex gap-2">
          {/* Notifications */}
          <button className="size-10 md:size-11 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-[#293835] relative">
            <span className="material-symbols-outlined text-sm md:text-base">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-background-light dark:border-background-dark" />
          </button>
          
          {/* Chat - Hidden on very small screens to save space */}
          <button className="hidden xs:flex size-10 md:size-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-[#293835]">
            <span className="material-symbols-outlined text-sm md:text-base">chat_bubble</span>
          </button>
        </div>

        <div className="h-8 w-[1px] bg-slate-200 dark:bg-[#293835] mx-1 md:mx-2" />
        
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-slate-900 dark:text-white text-left">أحمد المحمد</p>
            <p className="text-[10px] text-slate-500 dark:text-[#9eb7b2] text-right">مدير النظام</p>
          </div>
          <div 
            className="rounded-full size-10 md:size-11 border-2 border-primary/20 bg-cover bg-center shadow-sm" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlgGLMOZ_jwwrBLPI9jm-bnioM38rfAFenT7wmwXTbVaEzYUpIF71AxTLovwNITaduEVS6DroepnOmfPhP05O8AE-qmjg97ADCvgRkB0dkAdVrLrTHbYZNYxnMyXlRLf_DJ9jy3HPY125mjZy0B0lrYqdiIcfK7jtDSuJjVcF35Caydr7hWabw-NqU0jkOhpjD-l7LhLPpLXahQOVvV8cFDBfibD57RNdTNEJKuErjNzZ6VaX0NHXATYdCWf4q7n33wQQrqveuj7q4")' }}
          />
        </div>
      </div>
    </header>
  );
}