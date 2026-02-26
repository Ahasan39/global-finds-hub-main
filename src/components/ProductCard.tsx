import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "@/data/mockData";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

const ProductCard = ({ product, compact = false }: ProductCardProps) => {
  const discount = product.originalPrice > product.price
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link
      to={`/product/${product.id}`}
      className="group bg-card rounded-xl border border-border shadow-sm hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col relative"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1.5">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-badge-api text-white px-2 py-1 rounded-md shadow-sm tracking-wide">
            ⚡ {product.badge}
          </span>
        </div>

        {/* Discount & Country */}
        <div className="absolute top-2 right-2 flex flex-col gap-1.5 items-end">
          {discount > 0 && (
            <div className="bg-accent text-accent-foreground text-[11px] font-black px-2 py-1 rounded-md shadow-sm">
              -{discount}%
            </div>
          )}
        </div>

        {/* Country Label */}
        <div className="absolute bottom-2 left-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold bg-white/90 dark:bg-black/80 backdrop-blur-md text-foreground px-2 py-1 rounded-md shadow-sm">
            <span>{product.countryFlag}</span> {product.country}
          </span>
        </div>

        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          className="absolute bottom-2 right-2 w-8 h-8 bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-muted-foreground hover:bg-destructive hover:text-white transition-all shadow-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <Heart className="w-4 h-4" />
        </button>
      </div>

      {/* Info */}
      <div className={`p-3 flex flex-col flex-1 bg-card z-10 ${compact ? 'gap-1.5' : 'gap-2.5'}`}>
        <h3 className={`font-semibold text-card-foreground line-clamp-2 leading-snug min-h-[40px] ${compact ? 'text-xs' : 'text-sm'}`}>
          {product.title}
        </h3>

        {/* Rating & Shipping - hide in compact */}
        {!compact && (
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                <Star className="w-3.5 h-3.5 fill-star text-star" />
              </div>
              <span className="text-[11px] font-medium text-foreground">{product.rating}</span>
              <span className="text-[10px] text-muted-foreground">({product.reviews})</span>
            </div>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">Ships 10-20 Days</span>
          </div>
        )}

        {/* Price */}
        <div className={compact ? "mt-auto" : ""}>
          <div className="flex items-baseline gap-1.5">
            <span className={`font-extrabold text-foreground ${compact ? 'text-[15px]' : 'text-lg'}`}>
              ৳{product.price.toLocaleString()}
            </span>
            <span className={`text-price-original font-medium line-through ${compact ? 'text-[10px]' : 'text-[11px]'}`}>
              ৳{product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Add to cart - absolute positioning to slide over price/rating area */}
        {!compact && (
          <div className="absolute bottom-0 left-0 w-full p-2 translate-y-[110%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20 bg-card/95 backdrop-blur-sm">
            <button
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
              className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-bold py-2.5 rounded-lg hover:bg-primary/90 transition-all shadow-md active:scale-95"
            >
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
