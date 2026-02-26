import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground text-xs font-medium px-3 py-1.5 rounded-full">
              🌍 Trusted by 50,000+ Buyers in Bangladesh
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight tracking-tight">
              Shop the World,
              <br />
              <span className="text-accent">Delivered Home</span>
            </h1>
            <p className="text-sm sm:text-base text-primary-foreground/75 max-w-md leading-relaxed">
              Access millions of products from 1688, Taobao, Alibaba, Amazon — all in one platform with secure payments and fast delivery.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-7 py-3 rounded-xl hover:brightness-110 transition-all shadow-lg text-sm"
              >
                Shop Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground font-semibold px-7 py-3 rounded-xl hover:bg-primary-foreground/25 transition-all border border-primary-foreground/20 text-sm"
              >
                How It Works
              </Link>
            </div>
            <div className="flex gap-6 pt-2">
              {[
                { value: "120+", label: "Countries" },
                { value: "2M+", label: "Products" },
                { value: "50K+", label: "Happy Buyers" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-bold text-primary-foreground">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img
                src={heroBanner}
                alt="Global marketplace network"
                className="rounded-2xl shadow-2xl w-full object-cover max-h-[380px]"
              />
              <div className="absolute -bottom-3 -left-3 bg-card rounded-xl shadow-card-hover px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-sm">📦</div>
                <div>
                  <div className="text-xs font-semibold text-card-foreground">Live Tracking</div>
                  <div className="text-[10px] text-muted-foreground">12 orders shipping now</div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-card rounded-xl shadow-card-hover px-3 py-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-sm">🏭</div>
                <div>
                  <div className="text-xs font-semibold text-card-foreground">1688 · Taobao</div>
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
