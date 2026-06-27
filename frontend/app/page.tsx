export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F172A] text-white" dir="rtl">
      
      {/* هدر */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <span className="text-2xl font-bold text-emerald-400">کجا برم؟</span>
        <nav className="flex gap-6 text-sm text-white/70">
          <a href="/places" className="hover:text-white transition">مکان‌ها</a>
          <a href="/companions" className="hover:text-white transition">همسفر</a>
          <a href="#" className="hover:text-white transition">درباره ما</a>
        </nav>
      </header>

      {/* هیرو */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-32 gap-6">
        <h1 className="text-5xl font-extrabold leading-tight">
          سفرت رو هوشمند <span className="text-emerald-400">برنامه‌ریزی کن</span>
        </h1>
        <p className="text-white/60 text-lg max-w-xl">
          کجا برم بهت کمک میکنه مقصد مناسب پیدا کنی، همسفر بیابی و سفر رویایی‌ات رو بسازی
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-bold transition">
            شروع کن
          </button>
          <button className="border border-white/20 hover:border-white/50 text-white px-8 py-3 rounded-full transition">
            بیشتر بدان
          </button>
        </div>
      </section>

      {/* کارت‌های مکان */}
      <section className="px-8 pb-20">
        <h2 className="text-2xl font-bold mb-8 text-center">مقصدهای پیشنهادی</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition">
            <div className="text-4xl mb-4">🏔️</div>
            <h3 className="text-xl font-bold mb-2">اصفهان</h3>
            <p className="text-white/50 text-sm mb-4">شهر نصف جهان با معماری بی‌نظیر و بازار تاریخی</p>
            <div className="flex justify-between items-center">
              <span className="text-emerald-400 text-sm">از ۵۰۰ هزار تومان</span>
              <span className="text-white/30 text-xs">۳ تا ۵ روز</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition">
            <div className="text-4xl mb-4">🌊</div>
            <h3 className="text-xl font-bold mb-2">کیش</h3>
            <p className="text-white/50 text-sm mb-4">جزیره آفتابی با ساحل‌های زیبا و تفریحات متنوع</p>
            <div className="flex justify-between items-center">
              <span className="text-emerald-400 text-sm">از ۸۰۰ هزار تومان</span>
              <span className="text-white/30 text-xs">۲ تا ۴ روز</span>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="text-xl font-bold mb-2">ماسوله</h3>
            <p className="text-white/50 text-sm mb-4">روستای پلکانی سرسبز در دل جنگل‌های گیلان</p>
            <div className="flex justify-between items-center">
              <span className="text-emerald-400 text-sm">از ۳۰۰ هزار تومان</span>
              <span className="text-white/30 text-xs">۱ تا ۳ روز</span>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}