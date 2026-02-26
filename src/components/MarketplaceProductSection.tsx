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
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
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
        <button className="flex items-center gap-1 text-sm font-medium text-primary hover:underline underline-offset-4">
          View All <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Product grid - 5 columns on desktop like MoveOn */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} compact />
        ))}
      </div>
    </section>
  );
};

export default MarketplaceProductSection;
