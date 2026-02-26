import { ArrowRight, Globe, ShieldCheck, Truck, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-12 py-8 sm:py-12 lg:py-16">
      <div className="hero-gradient rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="text-left space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
              Ready to shop <span className="text-accent drop-shadow-sm">Globally?</span>
            </h2>
            <p className="text-white/90 text-lg max-w-lg font-medium leading-relaxed">
              Join 50,000+ happy customers in Bangladesh who shop from international marketplaces with ease.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-8 py-4 rounded-xl hover:brightness-110 hover:scale-[1.02] transition-all shadow-xl text-base"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all border border-white/30 backdrop-blur-md shadow-lg"
              >
                Browse Categories
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                <ShieldCheck className="w-5 h-5 text-accent" /> Secure Payment
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm font-semibold">
                <Truck className="w-5 h-5 text-accent" /> Logistics Handled
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-end relative">
            <div className="relative w-[300px] h-[300px] bg-white/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm shadow-2xl">
              <Globe className="w-48 h-48 text-white/30 animate-[spin_60s_linear_infinite]" />
              <div className="absolute top-1/4 right-1/4 bg-white/10 p-3 rounded-2xl backdrop-blur-md border border-white/20 shadow-xl animate-bounce">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
