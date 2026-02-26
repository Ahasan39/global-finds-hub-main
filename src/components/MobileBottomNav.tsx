import { Home, Search, LayoutGrid, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

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
                    return (
                        <Link
                            key={label}
                            to={href}
                            className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-all active:scale-95 ${active ? "text-primary" : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            <div className={`relative flex items-center justify-center w-10 h-7 rounded-xl transition-all ${active ? "bg-primary/10" : ""}`}>
                                <Icon className={`w-5 h-5 transition-all ${active ? "scale-110" : ""}`} />
                                {/* Active dot */}
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
