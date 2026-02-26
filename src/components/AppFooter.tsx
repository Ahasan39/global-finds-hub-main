import { Globe, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const AppFooter = () => {
  return (
    <footer className="footer-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-footer-fg tracking-tight">
                Globe<span className="text-primary">Cart</span>
              </span>
            </div>
            <p className="text-sm text-footer-fg/60 leading-relaxed">
              Your gateway to global products. Shop from 120+ countries with secure payments and fast delivery to Bangladesh.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-footer-fg/10 flex items-center justify-center text-footer-fg/60 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-sm font-semibold text-footer-fg mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2.5">
              {["Electronics", "Fashion", "Home & Garden", "Beauty", "Sports"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-footer-fg/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-footer-fg mb-4 uppercase tracking-wider">Customer Support</h4>
            <ul className="space-y-2.5">
              {["Help Center", "Track Order", "Shipping Info", "Returns & Refunds", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-footer-fg/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-footer-fg mb-4 uppercase tracking-wider">About</h4>
            <ul className="space-y-2.5">
              {["About GlobeCart", "Careers", "Press", "Blog", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-footer-fg/60 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment methods & copyright */}
        <div className="mt-12 pt-8 border-t border-footer-fg/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-footer-fg/40">
            © 2026 GlobeCart. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {["Visa", "Mastercard", "bKash", "Nagad", "COD"].map((method) => (
              <span
                key={method}
                className="text-[10px] font-medium text-footer-fg/50 bg-footer-fg/10 px-2.5 py-1 rounded-md"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
