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
      className="group bg-card rounded-xl border border-border shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-0.5 flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold bg-badge-api text-primary-foreground px-1.5 py-0.5 rounded">
            ⚡ {product.badge}
          </span>
          <span className="inline-flex items-center gap-1 text-[9px] font-medium bg-card/90 backdrop-blur-sm text-card-foreground px-1.5 py-0.5 rounded">
            {product.countryFlag} {product.country}
          </span>
        </div>
        {/* Wishlist */}
        <button
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          className="absolute top-2 right-2 w-7 h-7 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-destructive hover:text-destructive-foreground transition-colors opacity-0 group-hover:opacity-100"
        >
          <Heart className="w-3.5 h-3.5" />
        </button>
        {/* Discount */}
        {discount > 0 && (
          <div className="absolute bottom-2 left-2 bg-accent text-accent-foreground text-[10px] font-bold px-1.5 py-0.5 rounded">
            -{discount}%
          </div>
        )}
      </div>

      {/* Info */}
      <div className={`p-3 flex flex-col flex-1 ${compact ? 'gap-1.5' : 'gap-2'}`}>
        <h3 className={`font-medium text-card-foreground line-clamp-2 leading-snug ${compact ? 'text-xs' : 'text-sm'}`}>
          {product.title}
        </h3>

        {/* Rating - hide in compact */}
        {!compact && (
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-star text-star" : "text-border"}`}
                />
              ))}
            </div>
            <span className="text-[10px] text-muted-foreground">({product.reviews.toLocaleString()})</span>
          </div>
        )}

        {/* Price */}
        <div className="mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className={`font-bold text-foreground ${compact ? 'text-sm' : 'text-base'}`}>
              ৳{product.price.toLocaleString()}
            </span>
            <span className={`text-price-original line-through ${compact ? 'text-[10px]' : 'text-xs'}`}>
              ৳{product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Add to cart - only in non-compact */}
        {!compact && (
          <button
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
            className="mt-1 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-medium py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
