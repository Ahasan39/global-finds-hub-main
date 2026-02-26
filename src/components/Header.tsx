import { useState } from "react";
import {
  Search, ShoppingCart, Globe, ChevronDown,
  Heart, MapPin, Smartphone, Headphones, LayoutGrid, Camera, X, Bell,
  Building2, Package
} from "lucide-react";
import { Link } from "react-router-dom";

const marketplaces = [
  { id: "1688", name: "1688.com", icon: <Building2 className="w-4 h-4 text-[#f97316]" />, color: "#f97316" },
  { id: "taobao", name: "Taobao", icon: <ShoppingCart className="w-4 h-4 text-[#f97316]" />, color: "#f97316" },
  { id: "alibaba", name: "Alibaba", icon: <Globe className="w-4 h-4 text-[#2563eb]" />, color: "#2563eb" },
  { id: "amazon", name: "Amazon", icon: <Package className="w-4 h-4 text-[#f97316]" />, color: "#f97316" },
  { id: "pinduoduo", name: "Pinduoduo", icon: <Heart className="w-4 h-4 text-[#ef4444]" />, color: "#ef4444" },
];

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMarketplace, setActiveMarketplace] = useState("all");

  return (
    <>
      <header className="sticky top-0 z-50 bg-white lg:shadow-none shadow-sm">
        {/* ── Desktop‑only top utility bar ── */}
        <div className="hidden lg:block bg-white border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Smartphone className="w-3.5 h-3.5" /> Global Cart App
              </a>
              <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Headphones className="w-3.5 h-3.5" /> Support
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Heart className="w-3.5 h-3.5" /> Wishlist
              </a>
              <div className="flex items-center gap-1.5 cursor-pointer hover:text-primary">
                Ship to: <span className="flex items-center gap-1 text-foreground ml-1"><MapPin className="w-3 h-3 text-[#10b981]" /> BD</span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                <span className="text-foreground">EN / BDT</span> <ChevronDown className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Main header row ── */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          {/* Mobile layout */}
          <div className="flex lg:hidden items-center gap-3 h-14">
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-8 h-8 rounded-full bg-[#007042] flex items-center justify-center shadow-md">
                <Globe className="w-4.5 h-4.5 text-white w-5 h-5" />
              </div>
              <span className="text-[17px] font-black text-[#1e2a3b] tracking-tight leading-none">
                Global<span className="text-[#007042]">Cart</span>
              </span>
            </Link>

            <div
              className="flex-1 flex items-center bg-secondary/30 rounded-xl border border-border/60 px-3 gap-2 h-9 cursor-text"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-4 h-4 text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground/60 flex-1 truncate">Search products...</span>
              <Camera className="w-4 h-4 text-muted-foreground/50 shrink-0" />
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
                <Bell className="w-5 h-5 text-foreground" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-[#10b981] rounded-full border border-white" />
              </button>
              <Link to="/checkout" className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
                <ShoppingCart className="w-5 h-5 text-foreground" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#10b981] text-white text-[9px] font-black rounded-full flex items-center justify-center border border-white">0</span>
              </Link>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:flex items-center gap-5 py-3">
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#007042] flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-[#1e2a3b] tracking-tighter leading-none">
                Global Cart
              </span>
            </Link>

            <button className="flex items-center gap-2 text-sm font-bold text-foreground bg-[#f3f4f6] px-4 py-2.5 rounded-xl hover:bg-[#e5e7eb] transition-all shrink-0">
              <LayoutGrid className="w-5 h-5 text-[#007042]" />
              All Categories <ChevronDown className="w-4 h-4 text-muted-foreground ml-1" />
            </button>

            <div className="flex-1 max-w-2xl flex items-center bg-white rounded-xl border border-[#e5e7eb] focus-within:border-[#007042] transition-all overflow-hidden">
              <button className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-foreground bg-[#f3f4f6] border-r border-[#e5e7eb] hover:bg-[#e5e7eb] transition-colors shrink-0">
                All <ChevronDown className="w-3 h-3 text-muted-foreground" />
              </button>
              <input
                type="text"
                placeholder="Search products, brands and more..."
                className="flex-1 bg-transparent border-none text-sm px-4 h-11 focus:ring-0 placeholder:text-muted-foreground/50"
              />
              <div className="flex items-center gap-3 pr-2 shrink-0">
                <Camera className="w-5 h-5 text-muted-foreground hover:text-[#007042] cursor-pointer transition-colors" />
                <button className="w-10 h-10 flex items-center justify-center bg-[#007042] text-white rounded-lg hover:brightness-110 transition-all">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link to="/checkout" className="relative p-2 hover:bg-secondary/50 rounded-xl transition-all group">
                <ShoppingCart className="w-6 h-6 text-foreground group-hover:text-[#007042] transition-colors" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#10b981] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-sm">0</span>
              </Link>
              <Link to="/" className="flex items-center gap-2.5 group hover:bg-[#f3f4f6] px-3 py-1.5 rounded-xl transition-all border border-transparent">
                <div className="w-9 h-9 rounded-full bg-[#f3f4f6] flex items-center justify-center text-muted-foreground group-hover:bg-[#007042] group-hover:text-white transition-all shadow-sm text-sm font-black">
                  G
                </div>
                <div>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase leading-none mb-0.5">Welcome</p>
                  <p className="text-xs font-black text-foreground leading-none">Sign In</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Marketplace Navigation Bar (Sticky, Gapless, Single Row) */}
        <div className="bg-white border-t-[3px] border-[#007042] border-b border-border/60">
          <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-12">
            <div className="grid grid-cols-6 lg:flex items-center lg:gap-8 py-1.5 lg:py-0">
              {/* "All" tab */}
              <button
                onClick={() => setActiveMarketplace("all")}
                className={`flex flex-col lg:flex-row items-center justify-center gap-0.5 lg:gap-2 py-1 lg:py-3.5 px-0.5 lg:px-0 transition-all relative ${activeMarketplace === "all"
                  ? "bg-[#007042]/10 lg:bg-transparent text-[#007042]"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                <Globe className={`w-3.5 lg:w-4 h-3.5 lg:h-4 ${activeMarketplace === "all" ? "text-[#007042]" : "text-[#10b981]"}`} />
                <span className="text-[9px] xs:text-[10px] lg:text-sm font-bold truncate text-center">
                  <span className="lg:inline hidden">All Marketplace</span>
                  <span className="lg:hidden inline">All</span>
                </span>
                {activeMarketplace === "all" && <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[3px] bg-[#007042] rounded-t-full" />}
              </button>

              {marketplaces.map((mp) => (
                <button
                  key={mp.id}
                  onClick={() => setActiveMarketplace(mp.id)}
                  className={`flex flex-col lg:flex-row items-center justify-center gap-0.5 lg:gap-2 py-1 lg:py-3.5 px-0.5 lg:px-0 transition-all relative ${activeMarketplace === mp.id
                    ? "bg-[#007042]/10 lg:bg-transparent text-[#007042]"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  <span className="shrink-0 scale-[0.85] lg:scale-100">{mp.icon}</span>
                  <span className="text-[9px] xs:text-[10px] lg:text-sm font-bold truncate text-center">
                    {mp.name.replace(".com", "")}
                  </span>
                  {activeMarketplace === mp.id && <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[3px] bg-[#007042] rounded-t-full" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>



      {/* ── Mobile full-screen search overlay ── */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col lg:hidden" onClick={() => setSearchOpen(false)}>
          <div className="flex items-center gap-3 px-4 pt-4 pb-3 border-b border-border" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSearchOpen(false)} className="p-2 rounded-full hover:bg-secondary shrink-0">
              <X className="w-5 h-5" />
            </button>
            <div className="flex-1 flex items-center bg-secondary/30 rounded-xl border border-primary ring-2 ring-primary/10 px-3 gap-2 h-10">
              <Search className="w-4 h-4 text-primary shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Search products, brands..."
                className="flex-1 bg-transparent border-none text-sm focus:ring-0"
              />
              <Camera className="w-4 h-4 text-muted-foreground shrink-0" />
            </div>
          </div>
          {/* Quick searches */}
          <div className="px-4 pt-4">
            <p className="text-[11px] font-black text-muted-foreground uppercase tracking-widest mb-3">Trending Searches</p>
            <div className="flex flex-wrap gap-2">
              {["Women Dress", "Electronics", "Sneakers", "Phone Cases", "Watches", "Bags", "Toys"].map((q) => (
                <button key={q} className="px-3 py-1.5 bg-secondary/50 rounded-full text-xs font-bold text-foreground hover:bg-primary hover:text-white transition-all">
                  {q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
