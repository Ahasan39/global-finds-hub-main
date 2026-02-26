import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star, Heart, Share2, ShoppingCart, Minus, Plus, Truck,
  ShieldCheck, ArrowLeft, ChevronRight, QrCode,
  ShieldAlert, Clock, Search, Info, Package, RotateCcw
} from "lucide-react";
import Header from "@/components/Header";
import MobileBottomNav from "@/components/MobileBottomNav";
import AppFooter from "@/components/AppFooter";
import { products } from "@/data/mockData";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [activeTab, setActiveTab] = useState<"specs" | "description" | "reviews">("specs");
  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
        <AppFooter />
        <MobileBottomNav />
      </div>
    );
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const variations = [
    { size: "S", price: product.price, stock: 0 },
    { size: "M", price: product.price, stock: 5 },
    { size: "L", price: product.price, stock: 13 },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Header />

      {/* ─── Mobile: Back + Action bar ─── */}
      <div className="lg:hidden sticky top-14 z-40 bg-white/90 backdrop-blur-sm border-b border-border/50 px-3 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-1.5 text-sm font-bold text-foreground">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className={`p-2 rounded-full transition-all ${wishlisted ? "text-red-500 bg-red-50" : "text-muted-foreground hover:bg-secondary"}`}
          >
            <Heart className={`w-5 h-5 ${wishlisted ? "fill-red-500" : ""}`} />
          </button>
          <button className="p-2 rounded-full text-muted-foreground hover:bg-secondary transition-all">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 pb-32 lg:pb-8">

        {/* Desktop breadcrumb */}
        <nav className="hidden lg:flex items-center gap-2 text-[13px] text-muted-foreground mb-4">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium truncate">{product.title}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* ═══ MAIN CONTENT ═══ */}
          <div className="flex-1 space-y-4">

            {/* ── Product card: Image + Info ── */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

              {/* Image section – mobile is stacked, desktop is side-by-side */}
              <div className="flex flex-col md:flex-row md:gap-6 md:p-6">

                {/* Image Gallery */}
                <div className="md:w-[380px] shrink-0">
                  {/* Main image */}
                  <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden bg-secondary/20 md:rounded-xl group">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover md:group-hover:scale-105 transition-transform duration-500"
                    />
                    {discount > 0 && (
                      <span className="absolute top-3 left-3 bg-red-500 text-white text-[11px] font-black px-2 py-1 rounded-full shadow">
                        -{discount}%
                      </span>
                    )}
                    {/* Mobile wishlist overlay */}
                    <div className="absolute inset-0 pointer-events-none" />
                  </div>
                  {/* Thumbnails */}
                  <div className="flex gap-2 overflow-x-auto px-3 py-2.5 md:px-0 md:mt-3 scrollbar-hide">
                    {[...Array(5)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`w-16 h-16 md:w-20 md:h-20 rounded-xl border-2 shrink-0 overflow-hidden transition-all ${activeImage === i ? "border-primary shadow-md scale-105" : "border-transparent opacity-60 hover:opacity-100"}`}
                      >
                        <img src={product.image} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 px-3 pb-4 md:px-0 md:pb-0 space-y-4">
                  {/* Title + Seller */}
                  <div>
                    <h1 className="text-[15px] md:text-xl font-bold text-foreground leading-snug mb-2 mt-2 md:mt-0">{product.title}</h1>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap">
                      <div className="flex items-center gap-1.5 cursor-pointer group">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-black text-primary">GC</div>
                        <span className="group-hover:text-primary transition-colors text-xs font-semibold">{product.seller || "International Store"}</span>
                      </div>
                      <span className="text-border">|</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-foreground text-xs">{product.rating}</span>
                        <span className="text-xs">({product.reviews.toLocaleString()} sold)</span>
                      </div>
                    </div>
                  </div>

                  {/* Offer banner */}
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200/60 rounded-xl p-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-lg shrink-0">🔥</span>
                      <div className="min-w-0">
                        <p className="text-[12px] font-black text-amber-900 leading-tight truncate">Ramadan Offer! Buy ৳1000+ Get 5% Off</p>
                        <button className="text-[10px] font-bold text-amber-700 underline">View Rules</button>
                      </div>
                    </div>
                    <div className="bg-amber-600 text-white text-[9px] font-black px-2 py-1 rounded-lg flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3" /> 07:09h
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-black text-primary">৳{product.price.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground line-through font-medium">৳{product.originalPrice.toLocaleString()}</span>
                    {discount > 0 && (
                      <span className="text-xs font-black text-red-500 bg-red-50 px-2 py-0.5 rounded-full">{discount}% OFF</span>
                    )}
                  </div>

                  {/* Size Selector */}
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mb-2">Select Size</p>
                    <div className="flex gap-2 flex-wrap">
                      {variations.map((v) => (
                        <button
                          key={v.size}
                          onClick={() => setSelectedSize(v.size)}
                          disabled={v.stock === 0}
                          className={`w-12 h-12 rounded-xl border-2 text-sm font-black transition-all active:scale-95 ${v.stock === 0
                              ? "border-border/40 text-muted-foreground/40 bg-secondary/20 line-through cursor-not-allowed"
                              : selectedSize === v.size
                                ? "border-primary bg-primary text-white shadow-md shadow-primary/20"
                                : "border-border/60 text-foreground hover:border-primary/50"
                            }`}
                        >
                          {v.size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-4">
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Quantity</p>
                    <div className="flex items-center gap-3 bg-secondary/30 rounded-xl p-1">
                      <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm hover:bg-primary hover:text-white transition-all active:scale-90">
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center font-black text-base">{qty}</span>
                      <button onClick={() => setQty(qty + 1)} className="w-8 h-8 flex items-center justify-center rounded-lg bg-white shadow-sm hover:bg-primary hover:text-white transition-all active:scale-90">
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Trust badges row */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: <Truck className="w-4 h-4 text-primary" />, text: "Fast Ship" },
                      { icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, text: "Guaranteed" },
                      { icon: <RotateCcw className="w-4 h-4 text-blue-500" />, text: "Easy Return" },
                    ].map((b) => (
                      <div key={b.text} className="flex flex-col items-center gap-1 py-2 bg-secondary/20 rounded-xl">
                        {b.icon}
                        <span className="text-[10px] font-bold text-muted-foreground">{b.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Desktop buy buttons */}
                  <div className="hidden md:grid grid-cols-2 gap-3 pt-2">
                    <button className="bg-primary text-white font-black py-3 rounded-xl text-sm hover:brightness-105 transition-all shadow-md shadow-primary/20 active:scale-[0.98]">
                      Buy Now
                    </button>
                    <button className="bg-white border-2 border-primary text-primary font-black py-3 rounded-xl text-sm hover:bg-primary/5 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" /> Add to Cart
                    </button>
                  </div>

                  {/* App Promo */}
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-3.5 flex items-center gap-3">
                    <span className="text-2xl">📱</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs font-black text-[#1e2a3b]">Buy from Global Cart App!</h3>
                      <p className="text-[10px] text-muted-foreground">Scan QR for exclusive app deals</p>
                    </div>
                    <button className="flex items-center gap-1.5 bg-white border border-border py-1.5 px-3 rounded-lg text-[11px] font-bold shadow-sm hover:shadow-md transition-all shrink-0">
                      <QrCode className="w-3.5 h-3.5 text-primary" /> Scan
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Seller Info ── */}
            <div className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black text-base">PB</div>
                  <div>
                    <h3 className="font-bold text-[13px] text-foreground">Pehnawa By Bin Akram's</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-muted-foreground/30 fill-muted-foreground/20" />)}
                      <span className="text-[11px] text-muted-foreground ml-1">No ratings yet</span>
                    </div>
                  </div>
                </div>
                <button className="text-[11px] font-bold text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-all">
                  Visit Store
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Delivery & Shipping", "Dispute Resolution", "Product Accuracy", "After-Sales"].map((label) => (
                  <div key={label} className="space-y-1.5">
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      <span>{label}</span><span>0</span>
                    </div>
                    <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-0 bg-primary rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Trending from Store ── */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-0.5">
                <div className="w-1 h-5 bg-primary rounded-full" />
                <h2 className="font-black text-[15px] text-foreground">Trending from Store</h2>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-hide -mx-3 px-3">
                {products.slice(0, 6).map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="min-w-[140px] w-[140px] bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md group transition-all shrink-0 active:scale-95">
                    <div className="aspect-square overflow-hidden bg-secondary/20">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400" />
                    </div>
                    <div className="p-2.5">
                      <p className="text-[11px] font-bold text-foreground line-clamp-2 leading-tight h-7">{p.title}</p>
                      <p className="text-sm font-black text-primary mt-1">৳{p.price.toLocaleString()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Tabs: Specs / Description / Reviews ── */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="flex border-b border-border overflow-x-auto scrollbar-hide">
                {(["specs", "description", "reviews"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-4 text-[13px] font-black whitespace-nowrap transition-all relative shrink-0 ${activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {tab === "specs" ? "📋 Specs" : tab === "description" ? "📄 Description" : "⭐ Reviews"}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full" />}
                  </button>
                ))}
              </div>
              <div className="p-4">
                {activeTab === "specs" && (
                  <div className="rounded-xl overflow-hidden border border-border/50">
                    <table className="w-full text-[13px]">
                      <tbody className="divide-y divide-border/30">
                        {Object.entries({
                          "Weight": "N/A", "Bottom Style": "Flared sharara",
                          "Color Type": "Lilac", "Dupatta Fabric": "Organza",
                          "Product ID": "ULT4461", "Lining": "Full lining",
                          "Pieces": "3 pc (top + bottom + dupatta)", "Type": "Festive/party wear",
                          "Season": "All season", "Shirt Fabric": "Organza",
                          "Top Style": "Long shirt", "Trouser": "Silk",
                        }).map(([k, v], i) => (
                          <tr key={k} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                            <td className="px-4 py-2.5 font-bold text-muted-foreground w-2/5 border-r border-border/30 text-[12px]">{k}</td>
                            <td className="px-4 py-2.5 font-medium text-foreground text-[12px]">{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === "description" && (
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{product.description}</p>
                )}
                {activeTab === "reviews" && (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Star className="w-8 h-8 text-muted-foreground/30" />
                    </div>
                    <p className="text-sm font-bold text-muted-foreground">No reviews yet</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Be the first to review this product</p>
                  </div>
                )}
              </div>
            </div>

            {/* ── Danger Banner ── */}
            <div className="bg-red-50 border border-red-200/60 rounded-2xl p-4 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-black text-[13px] text-red-700 mb-1">যে পণ্যগুলো Global Cart-এ অর্ডার করা যাবে না</h3>
                <p className="text-[11px] text-red-600/80 leading-relaxed">
                  নিষেধ পণ্যের মধ্যে রয়েছে: ব্রান্ড কপি, সিগারেট, অ্যালকোহল, মাদকদ্রব্য, ড্রোন, বিস্ফোরক, ক্ষতিকর রাসায়নিক ও অন্যান্য।
                </p>
              </div>
            </div>

            {/* ── Related Products ── */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 px-0.5">
                <div className="w-1 h-5 bg-primary rounded-full" />
                <h2 className="font-black text-[15px] text-foreground">Related Products</h2>
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full ml-1">✨ AI</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {products.slice(10, 15).map((p) => (
                  <Link key={p.id} to={`/product/${p.id}`} className="bg-white rounded-2xl border border-border/50 overflow-hidden shadow-sm hover:shadow-md group transition-all active:scale-95">
                    <div className="aspect-square overflow-hidden bg-secondary/20">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400" />
                    </div>
                    <div className="p-2.5">
                      <p className="text-[11px] font-bold text-foreground line-clamp-2 leading-tight">{p.title}</p>
                      <p className="text-sm font-black text-primary mt-1">৳{p.price.toLocaleString()}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* ═══ DESKTOP RIGHT SIDEBAR ═══ */}
          <div className="hidden lg:flex flex-col gap-4 w-[300px] xl:w-[320px] shrink-0 h-fit lg:sticky lg:top-24">

            {/* Shipping Box */}
            <div className="bg-white rounded-2xl shadow-sm border border-border/30 overflow-hidden divide-y divide-border/30">
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest flex items-center gap-1.5">
                    Shipping <Info className="w-3.5 h-3.5" />
                  </h3>
                  <span className="flex items-center gap-1 text-xs font-bold text-foreground">
                    <MapPinIcon className="w-3.5 h-3.5 text-primary" /> To Bangladesh
                  </span>
                </div>
                <div className="bg-secondary/20 border border-border/40 rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:border-primary/40 transition-all">
                  <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                    <Truck className="w-4.5 h-4.5 w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-black text-foreground">Fashion Accessories</p>
                    <p className="text-[10px] text-muted-foreground flex items-center justify-between">
                      By Air · Global Cart Shipping
                      <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full text-[9px] font-black">Active</span>
                    </p>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-foreground">{qty} Piece(s)</span>
                  <span className="font-black">৳{(product.price * qty).toLocaleString()}</span>
                </div>
                <div className="flex justify-between border-t border-dashed border-border/50 pt-3">
                  <span className="font-black text-foreground">Total</span>
                  <span className="font-black text-primary text-lg">৳{(product.price * qty).toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-muted-foreground">Local delivery charge added at checkout</p>
                <div className="grid gap-2.5 pt-1">
                  <button className="w-full bg-primary text-white font-black py-3 rounded-xl text-[13px] hover:brightness-105 transition-all shadow-md shadow-primary/20 active:scale-[0.98] uppercase tracking-wide">
                    Buy Now
                  </button>
                  <button className="w-full bg-white border-2 border-primary text-primary font-black py-3 rounded-xl text-[13px] hover:bg-primary/5 transition-all active:scale-[0.98] flex items-center justify-center gap-2 uppercase tracking-wide">
                    <ShoppingCart className="w-4 h-4" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* GlobalDrop Promo */}
            <div className="relative group overflow-hidden rounded-2xl h-[190px] shadow-sm">
              <img src="https://images.unsplash.com/photo-1556742049-df626c954546?w=600&h=400&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Dropshipping" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e63000] via-[#e63000]/70 to-transparent" />
              <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                <h3 className="text-base font-black leading-snug mb-1">Dropship with GlobalDrop!</h3>
                <p className="text-[11px] opacity-80 mb-3">No stock, no risk. Just sell & grow.</p>
                <button className="self-start bg-white text-[#e63000] font-black text-[11px] px-4 py-2 rounded-xl shadow-md hover:-translate-y-0.5 transition-all active:translate-y-0">
                  Start Dropshipping
                </button>
              </div>
            </div>

            {/* Assurance */}
            <div className="bg-white rounded-2xl shadow-sm p-4 space-y-3">
              <h3 className="text-xs font-black text-muted-foreground uppercase tracking-widest border-b border-border/50 pb-2.5">Global Cart Assurance</h3>
              {[
                { icon: <ShieldCheck className="w-4 h-4 text-emerald-500" />, text: "100% money back guarantee" },
                { icon: <Clock className="w-4 h-4 text-blue-500" />, text: "On time delivery guarantee" },
                { icon: <Search className="w-4 h-4 text-purple-500" />, text: "Detailed quality inspection" },
                { icon: <Truck className="w-4 h-4 text-amber-500" />, text: "Lower exchange loss" },
                { icon: <Package className="w-4 h-4 text-rose-500" />, text: "Secure & insured packaging" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-secondary/30 flex items-center justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-[12px] font-bold text-muted-foreground group-hover:text-foreground transition-all">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ MOBILE STICKY BOTTOM CTA ═══ */}
      <div className="fixed bottom-16 left-0 right-0 z-40 lg:hidden bg-white border-t border-border/60 px-4 py-3 shadow-[0_-4px_24px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setWishlisted(!wishlisted)}
            className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 transition-all active:scale-90 shrink-0 ${wishlisted ? "border-red-500 bg-red-50 text-red-500" : "border-border text-muted-foreground hover:border-primary"
              }`}
          >
            <Heart className={`w-5 h-5 ${wishlisted ? "fill-red-500" : ""}`} />
          </button>
          <button className="flex-1 py-3.5 bg-white border-2 border-primary text-primary font-black text-[13px] rounded-xl hover:bg-primary/5 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </button>
          <button className="flex-1 py-3.5 bg-primary text-white font-black text-[13px] rounded-xl hover:brightness-105 transition-all active:scale-[0.98] shadow-md shadow-primary/20">
            Buy Now
          </button>
        </div>
      </div>

      <AppFooter />
      <MobileBottomNav />
    </div>
  );
};

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default ProductDetails;
