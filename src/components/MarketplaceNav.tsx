import { useState } from "react";
import { Building2, ShoppingCart, Globe, Package, Heart } from "lucide-react";

const marketplaces = [
  { id: "1688", name: "1688.com", icon: <Building2 className="w-4 h-4 text-[#f97316]" />, color: "#f97316" },
  { id: "taobao", name: "Taobao", icon: <ShoppingCart className="w-4 h-4 text-[#f97316]" />, color: "#f97316" },
  { id: "alibaba", name: "Alibaba", icon: <Globe className="w-4 h-4 text-[#2563eb]" />, color: "#2563eb" },
  { id: "amazon", name: "Amazon", icon: <Package className="w-4 h-4 text-[#f97316]" />, color: "#f97316" },
  { id: "pinduoduo", name: "Pinduoduo", icon: <Heart className="w-4 h-4 text-[#ef4444]" />, color: "#ef4444" },
];

const MarketplaceNav = () => {
  const [active, setActive] = useState("all");

  return (
    <div className="bg-white border-t-[3px] border-[#007042] border-b border-border/60 sticky top-14 lg:top-[124px] z-30 transition-all">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">

          {/* "All" tab */}
          <button
            onClick={() => setActive("all")}
            className={`flex items-center gap-2 py-3.5 text-sm font-bold whitespace-nowrap shrink-0 transition-all relative group ${active === "all" ? "text-[#007042]" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            <Globe className={`w-4 h-4 ${active === "all" ? "text-[#007042]" : "text-[#10b981]"}`} />
            <span>All</span>
            {active === "all" && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#007042] rounded-t-full" />}
          </button>

          {marketplaces.map((mp) => (
            <button
              key={mp.id}
              onClick={() => setActive(mp.id)}
              className={`flex items-center gap-2 py-3.5 text-sm font-bold whitespace-nowrap shrink-0 transition-all relative group ${active === mp.id ? "text-[#007042]" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {mp.icon}
              <span className="group-hover:translate-y-[-1px] transition-transform">{mp.name}</span>
              {active === mp.id && <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#007042] rounded-t-full" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceNav;
