import { Search, ShoppingCart, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-7 h-7" />,
    step: "01",
    title: "Choose Marketplace",
    desc: "Explore millions of products from Amazon, Alibaba, or 1688.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    step: "02",
    title: "We Import & Verify",
    desc: "Our agents source, inspect, and handle customs processing for you.",
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    step: "03",
    title: "Secure Checkout",
    desc: "Pay safely in local currency with bKash, cards, or bank transfer.",
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    step: "04",
    title: "Fast Global Delivery",
    desc: "We manage international logistics direct to your doorstep.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-12 py-8 sm:py-12 lg:py-16">
      <div className="text-center mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          How GlobeCart Works
        </h2>
        <p className="mt-2 text-muted-foreground">
          Shop globally in 4 simple steps
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div
            key={s.step}
            className="relative text-center group"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] border-t-[3px] border-dashed border-primary/20 z-0" />
            )}
            <div className="relative z-10 bg-card p-6 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all h-full hover:-translate-y-1">
              <div className="w-24 h-24 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-inner group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-500">
                {s.icon}
              </div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-black rounded-lg uppercase tracking-widest mb-4">Step {s.step}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
