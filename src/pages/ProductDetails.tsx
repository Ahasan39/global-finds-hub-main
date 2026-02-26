import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { products } from "@/data/mockData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">("description");

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
        <AppFooter />
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-foreground font-medium truncate">{product.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Images */}
          <div className="space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-muted aspect-square">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1 text-xs font-semibold bg-badge-api text-primary-foreground px-3 py-1 rounded-lg">
                ⚡ {product.badge}
              </span>
              {discount > 0 && (
                <span className="absolute top-4 right-4 bg-accent text-accent-foreground text-sm font-bold px-3 py-1 rounded-lg">
                  -{discount}%
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`rounded-xl overflow-hidden border-2 cursor-pointer transition-colors ${i === 0 ? "border-primary" : "border-border hover:border-primary/40"}`}>
                  <img src={product.image} alt="" className="w-full aspect-square object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div className="space-y-5">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">{product.title}</h1>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-star text-star" : "text-border"}`} />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviews.toLocaleString()} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">৳{product.price.toLocaleString()}</span>
              <span className="text-lg text-price-original line-through">৳{product.originalPrice.toLocaleString()}</span>
              {discount > 0 && <span className="text-sm font-semibold text-accent">Save {discount}%</span>}
            </div>

            <div className="space-y-3 border-t border-b border-border py-5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Availability</span>
                <span className="font-medium text-primary">{product.availability}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Ships from</span>
                <span className="font-medium text-card-foreground">{product.countryFlag} {product.country}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Seller</span>
                <span className="font-medium text-card-foreground">{product.seller}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Est. Delivery</span>
                <span className="font-medium text-card-foreground">{product.estimatedDelivery}</span>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-foreground">Quantity</span>
              <div className="flex items-center border border-border rounded-xl overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-accent text-accent-foreground font-semibold py-3.5 rounded-xl hover:brightness-110 transition-all">
                Buy Now
              </button>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-destructive transition-colors">
                <Heart className="w-4 h-4" /> Wishlist
              </button>
              <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>

            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4 text-primary" /> Free shipping over ৳5,000
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" /> Buyer Protection
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14">
          <div className="flex border-b border-border">
            {(["description", "specs", "reviews"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium capitalize transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {tab === "specs" ? "Specifications" : tab}
              </button>
            ))}
          </div>
          <div className="py-8">
            {activeTab === "description" && (
              <p className="text-muted-foreground leading-relaxed max-w-3xl">{product.description}</p>
            )}
            {activeTab === "specs" && (
              <div className="max-w-lg">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-border last:border-0">
                    <span className="text-sm text-muted-foreground">{key}</span>
                    <span className="text-sm font-medium text-foreground">{val}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "reviews" && (
              <p className="text-muted-foreground">No reviews yet. Be the first to review!</p>
            )}
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default ProductDetails;
