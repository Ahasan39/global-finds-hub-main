import { Home, Search, LayoutGrid, Heart, User, Globe, Headphones, HelpCircle, LogIn } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/search" },
    { icon: LayoutGrid, label: "Categories", href: "/categories" },
    { icon: Heart, label: "Wishlist", href: "/wishlist" },
    { icon: User, label: "Profile", href: "/profile" },
];

const MobileBottomNav = () => {
    const { pathname } = useLocation();

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border/60 shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
            <div className="flex items-center justify-around h-16 px-2">
                {navItems.map(({ icon: Icon, label, href }) => {
                    const active = pathname === href;

                    if (label === "Categories") {
                        return (
                            <Sheet key={label}>
                                <SheetTrigger asChild>
                                    <button
                                        className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all active:scale-95 ${active ? "text-primary" : "text-muted-foreground hover:text-primary"
                                            }`}
                                    >
                                        <div className={`relative flex items-center justify-center w-10 h-7 rounded-xl transition-all ${active ? "bg-primary/10" : ""}`}>
                                            <Icon className={`w-5 h-5 transition-all ${active ? "scale-110" : ""}`} />
                                        </div>
                                        <span className={`text-[10px] font-bold leading-none ${active ? "text-primary" : ""}`}>
                                            {label}
                                        </span>
                                    </button>
                                </SheetTrigger>
                                <SheetContent side="left" className="w-[280px] p-0 border-none">
                                    <SheetHeader className="p-6 bg-[#007042] text-white text-left">
                                        <SheetTitle className="text-white flex items-center gap-2 font-black italic">
                                            <Globe className="w-6 h-6" /> GLOBAL CART
                                        </SheetTitle>
                                        <p className="text-white/80 text-xs font-medium mt-1 uppercase tracking-widest">Shop the entire world</p>
                                    </SheetHeader>
                                    <div className="py-4">
                                        <div className="px-6 py-4 space-y-6">
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Main Menu</p>
                                                {[
                                                    { icon: Home, label: "Home", href: "/" },
                                                    { icon: Search, label: "Browse Products", href: "/" },
                                                    { icon: LayoutGrid, label: "All Categories", href: "/" },
                                                    { icon: Heart, label: "My Wishlist", href: "/" },
                                                ].map((item, idx) => (
                                                    <Link key={idx} to={item.href} className="flex items-center gap-4 text-sm font-bold text-foreground hover:text-[#007042] transition-colors group">
                                                        <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-[#007042]" />
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                            <div className="h-px bg-border/60" />
                                            <div className="space-y-4">
                                                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none">Account & Support</p>
                                                {[
                                                    { icon: User, label: "My Account", href: "/" },
                                                    { icon: Headphones, label: "Customer Support", href: "/" },
                                                    { icon: HelpCircle, label: "How it Works", href: "/" },
                                                    { icon: LogIn, label: "Sign In / Join", href: "/" },
                                                ].map((item, idx) => (
                                                    <Link key={idx} to={item.href} className="flex items-center gap-4 text-sm font-bold text-foreground hover:text-[#007042] transition-colors group">
                                                        <item.icon className="w-5 h-5 text-muted-foreground group-hover:text-[#007042]" />
                                                        {item.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        );
                    }

                    return (
                        <Link
                            key={label}
                            to={href}
                            className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all active:scale-95 ${active ? "text-primary" : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            <div className={`relative flex items-center justify-center w-10 h-7 rounded-xl transition-all ${active ? "bg-primary/10" : ""}`}>
                                <Icon className={`w-5 h-5 transition-all ${active ? "scale-110" : ""}`} />
                                {active && (
                                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                                )}
                            </div>
                            <span className={`text-[10px] font-bold leading-none ${active ? "text-primary" : ""}`}>
                                {label}
                            </span>
                        </Link>
                    );
                })}
            </div>
            {/* Safe area for iOS */}
            <div className="h-[env(safe-area-inset-bottom)] bg-white" />
        </nav>

    );
};

export default MobileBottomNav;
