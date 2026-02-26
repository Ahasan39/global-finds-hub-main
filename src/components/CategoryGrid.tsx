import React from "react";

/* ── Category data with images ── */
const categories = [
  {
    id: "electronics",
    title: "Electronics",
    count: "2,340",
    image: "/cat_electronics.png",
    gradient: "from-blue-600 to-indigo-700",
    emoji: "📱",
  },
  {
    id: "fashion",
    title: "Fashion",
    count: "5,120",
    image: "/cat_fashion.png",
    gradient: "from-pink-500 to-rose-600",
    emoji: "👗",
  },
  {
    id: "home",
    title: "Home & Garden",
    count: "1,870",
    image: "/cat_home_garden.png",
    gradient: "from-orange-500 to-amber-600",
    emoji: "🏡",
  },
  {
    id: "beauty",
    title: "Beauty",
    count: "3,210",
    image: "/cat_beauty.png",
    gradient: "from-fuchsia-500 to-purple-600",
    emoji: "💄",
  },
  {
    id: "sports",
    title: "Sports",
    count: "980",
    image: "/cat_sports.png",
    gradient: "from-emerald-500 to-green-600",
    emoji: "🏋️",
  },
  {
    id: "toys",
    title: "Toys & Games",
    count: "1,540",
    image: "/cat_toys.png",
    gradient: "from-yellow-400 to-orange-500",
    emoji: "🎮",
  },
  {
    id: "automotive",
    title: "Automotive",
    count: "760",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop",
    gradient: "from-slate-600 to-gray-700",
    emoji: "🚗",
  },
  {
    id: "books",
    title: "Books",
    count: "4,200",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    gradient: "from-amber-600 to-yellow-700",
    emoji: "📚",
  },
];

/* ── Single card ── */
const CategoryCard = ({ cat }: { cat: typeof categories[0] }) => (
  <div className="relative shrink-0 w-[160px] sm:w-[200px] h-[120px] sm:h-[140px] rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    {/* Background image — clearly visible */}
    <img
      src={cat.image}
      alt={cat.title}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
    />
    {/* Subtle bottom scrim only — lets image breathe */}
    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/75 to-transparent" />
    {/* Label at bottom */}
    <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between">
      <div>
        <h3 className="text-white font-black text-[13px] sm:text-[14px] leading-tight drop-shadow-md">{cat.title}</h3>
        <p className="text-white/70 text-[10px] font-bold leading-none mt-0.5">{cat.count} items</p>
      </div>
      <span className="text-xl leading-none drop-shadow-md">{cat.emoji}</span>
    </div>
    {/* Hover ring */}
    <div className="absolute inset-0 rounded-2xl ring-2 ring-white/0 group-hover:ring-white/50 transition-all duration-300" />
  </div>
);

/* ── Infinite marquee ── */
const CategoryGrid = () => {
  // Duplicate for seamless loop
  const doubled = [...categories, ...categories];

  return (
    <section className="py-8 sm:py-12 lg:py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-12 mb-5 sm:mb-7">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-foreground">Browse Categories</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">Explore products across global marketplaces</p>
          </div>
          <button className="text-xs sm:text-sm font-bold text-primary hover:underline shrink-0">See all</button>
        </div>
      </div>

      {/* Marquee wrapper — full bleed, overflows container */}
      <div
        className="relative w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* Scrolling track */}
        <div
          className="flex gap-4 px-4"
          style={{
            animation: "marquee-rtl 28s linear infinite",
            width: "max-content",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
        >
          {doubled.map((cat, i) => (
            <CategoryCard key={`${cat.id}-${i}`} cat={cat} />
          ))}
        </div>
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default CategoryGrid;
