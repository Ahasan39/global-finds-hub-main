import {
  Globe, Facebook, Twitter, Instagram, Youtube, Mail,
  MapPin, ChevronRight, Apple, Download, Headphones,
  ShieldCheck, Truck, Clock, PlayCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <footer className="bg-[#0f1923] text-white">
      {/* Top CTA bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <Headphones className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest">24/7 Customer Support</p>
              <p className="text-lg font-black text-white">+880 9666 700000</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-bold text-white/50">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Secure Payments
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-xs font-bold text-white/50">
              <Truck className="w-4 h-4 text-emerald-400" /> Fast Global Shipping
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-xs font-bold text-white/50">
              <Clock className="w-4 h-4 text-emerald-400" /> On-Time Delivery
            </div>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand col - wider */}
          <div className="lg:col-span-2 space-y-5 pr-0 lg:pr-8">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight leading-none">Global Cart</span>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Global Marketplace</p>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Your gateway to sourcing products globally from China, India, USA and 120+ countries with secure delivery to your doorstep.
            </p>
            <div className="flex items-start gap-3 text-sm text-white/50">
              <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>Plot 1020, Road 9, Avenue 9, Mirpur DOHS, Dhaka 1216, Bangladesh</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/50">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span>support@globalcart.com.bd</span>
            </div>
            <div className="flex gap-3 pt-1">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white/30">Our Services</h4>
            <ul className="space-y-3">
              {["Buy & Ship for Me", "Ship for Me", "Request for Quote", "Cost Calculator", "Dropshipping"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors -ml-1 shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white/30">Support</h4>
            <ul className="space-y-3">
              {["Help Center", "Track My Order", "Returns & Refunds", "Shipping Info", "Contact Us", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-2 group">
                    <ChevronRight className="w-3.5 h-3.5 text-primary/50 group-hover:text-primary transition-colors -ml-1 shrink-0" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* App Download */}
          <div className="space-y-5">
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white/30">Get the App</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5 hover:bg-white/10 hover:border-primary/40 transition-all group">
                <Apple className="w-7 h-7 text-white shrink-0" />
                <div>
                  <p className="text-[9px] font-bold text-white/40 uppercase">Available on the</p>
                  <p className="text-sm font-black text-white leading-tight">App Store</p>
                </div>
              </a>
              <a href="#" className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5 hover:bg-white/10 hover:border-primary/40 transition-all group">
                <PlayCircle className="w-7 h-7 text-white shrink-0" />
                <div>
                  <p className="text-[9px] font-bold text-white/40 uppercase">Get it on</p>
                  <p className="text-sm font-black text-white leading-tight">Google Play</p>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3.5">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shrink-0">
                  <Download className="w-7 h-7 text-[#0f1923]" />
                </div>
                <p className="text-[11px] text-white/40 font-semibold leading-snug">Scan to download the Global Cart app</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment methods */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col items-center gap-6">
            {/* We Accept heading */}
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-sm font-black text-primary uppercase tracking-widest px-2">We Accept</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            {/* Payment logos */}
            <div className="flex items-center justify-center">
              <img
                src="/we-accept-payment.png"
                alt="We Accept - citytouch, DBBL NEXUS, American Express, bKash, Rocket"
                className="max-w-full h-auto max-h-24 object-contain drop-shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-medium">
            {/* Copyright */}
            <p className="text-white/25">
              &copy; 2019&ndash;2026 Global Cart Technologies Ltd. All rights reserved.
            </p>
            {/* Legal links */}
            <div className="flex items-center gap-5 font-bold text-white/30">
              <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
            {/* Developer credit */}
            <p className="text-white/25">
              Designed &amp; Developed by{" "}
              <a
                href="https://ahasan39.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/70 font-black transition-colors underline underline-offset-2"
              >
                Ahasan39
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 w-11 h-11 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/30 hover:-translate-y-1 transition-all z-50"
      >
        <ChevronRight className="w-5 h-5 -rotate-90" />
      </button>
    </footer>
  );
};

export default AppFooter;
