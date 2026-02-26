import { marketplaces } from "@/data/mockData";

const MarketplaceNav = () => {
  return (
    <div className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground whitespace-nowrap shrink-0 transition-colors">
            🌍 All Sources
          </button>
          {marketplaces.map((mp) => (
            <button
              key={mp.id}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground whitespace-nowrap shrink-0 transition-colors"
            >
              <span className="text-base">{mp.logo}</span>
              {mp.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketplaceNav;
