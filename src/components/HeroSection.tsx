import { useState, useEffect } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

/**
 * Animated Counter Component
 */
const Counter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Use ease-out quad for smoother finish
      const easedPercentage = 1 - (1 - percentage) * (1 - percentage);

      setCount(Math.floor(easedPercentage * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient">
      {/* Background blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/10 blur-3xl rounded-full" />

      {/* Mobile: hero image as subtle background overlay */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.08,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* Left content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 text-[11px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm">
              🌍 Trusted by <Counter end={50000} suffix="+" /> Buyers in Bangladesh
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Shop the World,{" "}
              <span className="text-accent font-extrabold drop-shadow-sm block sm:inline">
                Delivered Home
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-md leading-relaxed mx-auto lg:mx-0">
              Access millions of products from 1688, Taobao, Alibaba, Amazon — all in one platform.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all shadow-xl text-sm sm:text-base"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                Start Shopping
              </Link>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl hover:bg-white/10 transition-all border-2 border-white/30 text-sm sm:text-base backdrop-blur-sm"
              >
                How It Works <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4 border-t border-white/10">
              {[
                { end: 120, suffix: "+", label: "Countries" },
                { end: 2, suffix: "M+", label: "Products" },
                { end: 50, suffix: "K+", label: "Buyers" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl sm:text-2xl font-black text-white">
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] sm:text-sm font-medium text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust logos */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 opacity-60">
              <span className="text-[10px] sm:text-xs font-medium text-white/70 uppercase tracking-wider">Sourcing From</span>
              {["Amazon", "Alibaba", "1688", "Taobao"].map((b) => (
                <span key={b} className="font-black text-white text-xs sm:text-base">{b}</span>
              ))}
            </div>
          </div>

          {/* Right image — desktop only */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src={heroBanner}
                alt="Global marketplace"
                className="rounded-2xl shadow-2xl w-full object-cover max-h-[380px]"
              />
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="text-xs font-bold text-foreground">Live Tracking</div>
                  <div className="text-[10px] text-muted-foreground">
                    <Counter end={12} duration={3000} /> orders shipping now
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-white rounded-xl shadow-lg px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-sm">🏭</div>
                <div>
                  <div className="text-xs font-bold text-foreground">1688 · Taobao</div>
                  <div className="text-[10px] text-muted-foreground">Direct from source</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

