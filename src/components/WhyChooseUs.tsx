import { ShieldCheck, Globe, Truck, Users } from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    title: "Secure Payment",
    desc: "SSL-encrypted transactions with buyer protection on every order.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Global Sourcing",
    desc: "Products aggregated from 120+ countries via trusted API integrations.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    title: "Fast Delivery",
    desc: "Optimized logistics with real-time tracking to your doorstep.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Trusted Sellers",
    desc: "Verified international sellers with quality assurance guarantee.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-secondary/50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-12 py-8 sm:py-12 lg:py-16">
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Why Choose GlobeCart?
          </h2>
          <p className="mt-2 text-muted-foreground">
            Your trusted global shopping partner
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-card-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
