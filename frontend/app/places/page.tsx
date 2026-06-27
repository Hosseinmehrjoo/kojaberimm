"use client";
import { useState } from "react";

const places = [
  {
    id: 1,
    name: "اصفهان",
    type: "فرهنگی",
    emoji: "🏛️",
    description: "شهر نصف جهان با معماری بی‌نظیر، بازار تاریخی و مسجد امام",
    price: 500000,
    days: "۳ تا ۵ روز",
    tags: ["تاریخی", "فرهنگی", "خانوادگی"],
  },
  {
    id: 2,
    name: "کیش",
    type: "تفریحی",
    emoji: "🌊",
    description: "جزیره آفتابی با ساحل‌های زیبا، تفریحات آبی و مراکز خرید",
    price: 800000,
    days: "۲ تا ۴ روز",
    tags: ["ساحلی", "تفریحی", "زوج‌ها"],
  },
  {
    id: 3,
    name: "ماسوله",
    type: "طبیعت",
    emoji: "🌿",
    description: "روستای پلکانی سرسبز در دل جنگل‌های گیلان با هوای دلپذیر",
    price: 300000,
    days: "۱ تا ۳ روز",
    tags: ["طبیعت", "کوهستان", "آرامش"],
  },
  {
    id: 4,
    name: "شیراز",
    type: "فرهنگی",
    emoji: "🌹",
    description: "شهر شعر و ادب با باغ ارم، تخت جمشید و حافظیه",
    price: 600000,
    days: "۳ تا ۵ روز",
    tags: ["تاریخی", "فرهنگی", "دوستان"],
  },
  {
    id: 5,
    name: "دماوند",
    type: "طبیعت",
    emoji: "🏔️",
    description: "بلندترین قله ایران، مناسب برای کوهنوردی و طبیعت‌گردی",
    price: 200000,
    days: "۲ تا ۳ روز",
    tags: ["کوهنوردی", "طبیعت", "ماجراجویی"],
  },
  {
    id: 6,
    name: "قشم",
    type: "طبیعت",
    emoji: "🦅",
    description: "بزرگ‌ترین جزیره خلیج فارس با دره ستارگان و جنگل حرا",
    price: 700000,
    days: "۳ تا ۵ روز",
    tags: ["طبیعت", "ساحلی", "اکوتوریسم"],
  },
];

const typeColors: Record<string, string> = {
  فرهنگی: "bg-blue-500/20 text-blue-300",
  تفریحی: "bg-purple-500/20 text-purple-300",
  طبیعت: "bg-emerald-500/20 text-emerald-300",
};

export default function Places() {
  const [active, setActive] = useState("همه");

  const filtered = active === "همه" ? places : places.filter((p) => p.type === active);

  return (
    <main className="min-h-screen bg-[#0F172A] text-white" dir="rtl">

      {/* هدر */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <a href="/" className="text-2xl font-bold text-emerald-400">کجا برم؟</a>
        <nav className="flex gap-6 text-sm text-white/70">
          <a href="/places" className="text-white font-bold">مکان‌ها</a>
          <a href="/companions" className="hover:text-white transition">همسفر</a>
          <a href="#" className="hover:text-white transition">درباره ما</a>
        </nav>
      </header>

      {/* عنوان */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-extrabold mb-4">مقصدهای گردشگری</h1>
        <p className="text-white/50 text-lg">بهترین مکان‌ها برای سفر بعدیت رو پیدا کن</p>
      </section>

      {/* فیلتر */}
      <div className="flex justify-center gap-3 mb-12 flex-wrap px-4">
        {["همه", "فرهنگی", "طبیعت", "تفریحی"].map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full border text-sm transition ${
              active === f
                ? "border-emerald-400 text-emerald-400"
                : "border-white/20 hover:border-emerald-400 hover:text-emerald-400"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* کارت‌ها */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-8 pb-20">
        {filtered.map((place) => (
          <div
            key={place.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 hover:bg-white/8 transition cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-5xl">{place.emoji}</span>
              <span className={`text-xs px-3 py-1 rounded-full ${typeColors[place.type]}`}>
                {place.type}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{place.name}</h3>
            <p className="text-white/50 text-sm mb-4 leading-relaxed">{place.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {place.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/60">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center border-t border-white/10 pt-4">
              <span className="text-emerald-400 text-sm font-bold">
                از {place.price.toLocaleString("fa-IR")} تومان
              </span>
              <span className="text-white/30 text-xs">{place.days}</span>
            </div>
          </div>
        ))}
      </section>

    </main>
  );
}