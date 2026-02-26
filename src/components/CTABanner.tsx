import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTABanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
      <div className="hero-gradient rounded-2xl px-8 py-12 sm:px-12 sm:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
          Are you ready to shop globally?
        </h2>
        <p className="text-primary-foreground/70 text-sm sm:text-base mb-8 max-w-lg mx-auto">
          Join 50,000+ happy customers in Bangladesh who shop from international marketplaces with ease.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-8 py-3.5 rounded-xl hover:brightness-110 transition-all shadow-lg"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-foreground/25 transition-all border border-primary-foreground/20"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
