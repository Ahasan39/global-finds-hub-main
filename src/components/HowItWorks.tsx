import { Search, ShoppingCart, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: <Search className="w-7 h-7" />,
    step: "01",
    title: "Browse & Search",
    desc: "Explore millions of products from global marketplaces all in one place.",
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    step: "02",
    title: "Add to Cart",
    desc: "Select your items and add them to cart with automatic BDT conversion.",
  },
  {
    icon: <CreditCard className="w-7 h-7" />,
    step: "03",
    title: "Secure Payment",
    desc: "Pay safely with bKash, Nagad, cards, or cash on delivery.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    step: "04",
    title: "Fast Delivery",
    desc: "We handle international shipping and deliver straight to your door.",
  },
];

const HowItWorks = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <div className="text-center mb-10">
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
              <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
            )}
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {s.icon}
              </div>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">Step {s.step}</span>
              <h3 className="text-base font-semibold text-foreground mt-2 mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
