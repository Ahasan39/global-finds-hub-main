import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import type { Product, Marketplace } from "@/data/mockData";

interface MarketplaceProductSectionProps {
  marketplace: Marketplace;
  products: Product[];
}

const MarketplaceProductSection = ({ marketplace, products }: MarketplaceProductSectionProps) => {
  if (products.length === 0) return null;

  return (
    <section className="py-8 sm:py-10 lg:py-12 border-b border-border/40 bg-gradient-to-b from-secondary/10 to-transparent">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-12">
        {/* Section header with marketplace branding */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-secondary px-4 py-2 rounded-xl">
              <span className="text-xl">{marketplace.logo}</span>
              <span className="text-sm font-semibold text-foreground">{marketplace.name}</span>
            </div>
            <span className="text-sm text-muted-foreground hidden sm:inline">
              Trending products from {marketplace.name}
            </span>
          </div>
          <button className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group">
            View All from {marketplace.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product grid - 5 columns on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceProductSection;
