import MarketplaceProductSection from "./MarketplaceProductSection";
import { products, marketplaces } from "@/data/mockData";

const ProductGrid = () => {
  return (
    <div className="py-0">
      {marketplaces.map((mp) => {
        const mpProducts = products.filter((p) => p.source === mp.id);
        return (
          <MarketplaceProductSection
            key={mp.id}
            marketplace={mp}
            products={mpProducts}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
