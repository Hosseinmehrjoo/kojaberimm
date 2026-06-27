"use client";
import { useState } from "react";

const companions = [
  {
    id: 1,
    name: "علی رضایی",
    age: 28,
    city: "تهران",
    emoji: "👨‍💼",
    destination: "اصفهان",
    date: "۱۵ مرداد",
    duration: "۳ روز",
    tripType: "فرهنگی",
    budget: "متوسط",
    description: "دنبال همسفر آروم و علاقه‌مند به تاریخ هستم. صبح‌ها زود بیدار میشم و دوست دارم همه جاذبه‌ها رو ببینم.",
    tags: ["غیرسیگاری", "صبح‌بیدار", "عکاسی"],
  },
  {
    id: 2,
    name: "سارا محمدی",
    age: 25,
    city: "مشهد",
    emoji: "👩‍🎨",
    destination: "ماسوله",
    date: "۲۰ مرداد",
    duration: "۲ روز",
    tripType: "طبیعت",
    budget: "کم",
    description: "عاشق طبیعت‌گردی هستم و دنبال همسفری میگردم که بتونیم با هزینه کم سفر خوبی داشته باشیم.",
    tags: ["طبیعت‌دوست", "کم‌هزینه", "پیاده‌روی"],
  },
  {
    id: 3,
    name: "رضا کریمی",
    age: 32,
    city: "اصفهان",
    emoji: "👨‍💻",
    destination: "کیش",
    date: "۱ شهریور",
    duration: "۴ روز",
    tripType: "تفریحی",
    budget: "زیاد",
    description: "میخوام یه سفر راحت و لاکچری داشته باشم. هتل خوب و غذای خوب برام مهمه.",
    tags: ["هتل خوب", "غذاخور", "شنا"],
  },
  {
    id: 4,
    name: "نیلوفر احمدی",
    age: 27,
    city: "شیراز",
    emoji: "👩‍🔬",
    destination: "دماوند",
    date: "۱۰ شهریور",
    duration: "۲ روز",
    tripType: "طبیعت",
    budget: "متوسط",
    description: "کوهنورد هستم و دنبال همسفر با تجربه کوهنوردی میگردم. باید آمادگی جسمی داشته باشی.",
    tags: ["کوهنوردی", "ورزشکار", "ماجراجو"],
  },
  {
    id: 5,
    name: "امیر حسینی",
    age: 30,
    city: "تبریز",
    emoji: "👨‍🍳",
    destination: "شیراز",
    date: "۵ شهریور",
    duration: "۵ روز",
    tripType: "فرهنگی",
    budget: "متوسط",
    description: "عاشق غذاهای محلی و فرهنگ شهرهای مختلفم. دنبال همسفر کنجکاو و خوش‌مشرب هستم.",
    tags: ["غذاگرد", "اجتماعی", "تاریخ‌دوست"],
  },
  {
    id: 6,
    name: "مریم صادقی",
    age: 24,
    city: "تهران",
    emoji: "👩‍🎤",
    destination: "قشم",
    date: "۲۵ مرداد",
    duration: "۳ روز",
    tripType: "طبیعت",
    budget: "متوسط",
    description: "اولین سفرمه به قشم و دنبال همسفری هستم که قبلاً رفته باشه و مسیرها رو بلد باشه.",
    tags: ["اولین سفر", "ساحل‌دوست", "شاد"],
  },
];

const budgetColors: Record<string, string> = {
  کم: "bg-green-500/20 text-green-300",
  متوسط: "bg-yellow-500/20 text-yellow-300",
  زیاد: "bg-red-500/20 text-red-300",
};

const tripColors: Record<string, string> = {
  فرهنگی: "bg-blue-500/20 text-blue-300",
  تفریحی: "bg-purple-500/20 text-purple-300",
  طبیعت: "bg-emerald-500/20 text-emerald-300",
};

export default function Companions() {
  const [active, setActive] = useState("همه");

  const filtered = active === "همه" ? companions : companions.filter((c) => c.tripType === active);

  return (
    <main className="min-h-screen bg-[#0F172A] text-white" dir="rtl">

      {/* هدر */}
      <header className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        <a href="/" className="text-2xl font-bold text-emerald-400">کجا برم؟</a>
        <nav className="flex gap-6 text-sm text-white/70">
          <a href="/places" className="hover:text-white transition">مکان‌ها</a>
          <a href="/companions" className="text-white font-bold">همسفر</a>
          <a href="#" className="hover:text-white transition">درباره ما</a>
        </nav>
      </header>

      {/* عنوان */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-extrabold mb-4">پیدا کردن همسفر</h1>
        <p className="text-white/50 text-lg">با آدم‌های هم‌سلیقه سفر کن</p>
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
        {filtered.map((c) => (
          <div
            key={c.id}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-3xl">
                {c.emoji}
              </div>
              <div>
                <h3 className="font-bold text-lg">{c.name}</h3>
                <p className="text-white/40 text-sm">{c.age} ساله — {c.city}</p>
              </div>
            </div>

            <div className="flex gap-2 mb-3">
              <span className={`text-xs px-3 py-1 rounded-full ${tripColors[c.tripType]}`}>
                {c.tripType}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full ${budgetColors[c.budget]}`}>
                بودجه {c.budget}
              </span>
            </div>

            <div className="bg-white/5 rounded-xl p-3 mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/40">مقصد</span>
                <span className="font-bold text-emerald-400">{c.destination}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-white/40">تاریخ</span>
                <span>{c.date}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/40">مدت</span>
                <span>{c.duration}</span>
              </div>
            </div>

            <p className="text-white/50 text-sm mb-4 leading-relaxed">{c.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {c.tags.map((tag) => (
                <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/60">
                  {tag}
                </span>
              ))}
            </div>

            <button className="w-full bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-400 py-2 rounded-xl text-sm font-bold transition">
              درخواست همسفری
            </button>
          </div>
        ))}
      </section>

    </main>
  );
}