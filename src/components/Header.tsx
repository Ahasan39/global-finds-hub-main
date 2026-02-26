import { useState } from "react";
import { Search, ShoppingCart, User, Globe, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-card">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <span>🌍 Free shipping on international orders over ৳5,000</span>
          <div className="hidden sm:flex items-center gap-4">
            <span>Seller Center</span>
            <span>Help & Support</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground tracking-tight">
              Globe<span className="text-primary">Cart</span>
            </span>
          </Link>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products from global marketplaces..."
                className="w-full h-11 pl-4 pr-12 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 w-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Search className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Language */}
            <button className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-muted">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Currency */}
            <button className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-muted">
              <span>৳ BDT</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {/* Login */}
            <Link
              to="/"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-xl hover:bg-secondary"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>

            {/* Cart */}
            <Link
              to="/checkout"
              className="relative flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors px-3 py-2 rounded-xl hover:bg-secondary"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-xl hover:bg-muted transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        {mobileOpen && (
          <div className="md:hidden mt-3 pb-2 animate-fade-in-up">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full h-10 pl-4 pr-12 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 h-7 w-9 bg-primary rounded-lg flex items-center justify-center">
                <Search className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
            <div className="flex gap-3 mt-3">
              <button className="flex items-center gap-1 text-sm text-muted-foreground px-3 py-1.5 rounded-lg bg-muted">
                <Globe className="w-3.5 h-3.5" /> EN
              </button>
              <button className="flex items-center gap-1 text-sm text-muted-foreground px-3 py-1.5 rounded-lg bg-muted">
                ৳ BDT
              </button>
              <Link to="/" className="flex items-center gap-1 text-sm text-muted-foreground px-3 py-1.5 rounded-lg bg-muted">
                <User className="w-3.5 h-3.5" /> Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
