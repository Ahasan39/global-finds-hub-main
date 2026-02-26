export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  badge: string;
  country: string;
  countryFlag: string;
  seller: string;
  availability: string;
  estimatedDelivery: string;
  description: string;
  specifications: Record<string, string>;
  source?: string;
}

export interface Category {
  id: number;
  title: string;
  icon: string;
  count: number;
}

export interface Marketplace {
  id: string;
  name: string;
  logo: string;
  color: string;
}

export const marketplaces: Marketplace[] = [
  { id: "1688", name: "1688.com", logo: "🏭", color: "hsl(25 95% 53%)" },
  { id: "taobao", name: "Taobao", logo: "🛒", color: "hsl(15 85% 55%)" },
  { id: "alibaba", name: "Alibaba", logo: "🌐", color: "hsl(25 80% 50%)" },
  { id: "amazon", name: "Amazon", logo: "📦", color: "hsl(35 90% 50%)" },
  { id: "pinduoduo", name: "Pinduoduo", logo: "🔴", color: "hsl(0 75% 55%)" },
];

export const categories: Category[] = [
  { id: 1, title: "Electronics", icon: "Smartphone", count: 2340 },
  { id: 2, title: "Fashion", icon: "Shirt", count: 5120 },
  { id: 3, title: "Home & Garden", icon: "Home", count: 1870 },
  { id: 4, title: "Beauty", icon: "Sparkles", count: 3210 },
  { id: 5, title: "Sports", icon: "Dumbbell", count: 980 },
  { id: 6, title: "Toys & Games", icon: "Gamepad2", count: 1540 },
  { id: 7, title: "Automotive", icon: "Car", count: 760 },
  { id: 8, title: "Books", icon: "BookOpen", count: 4200 },
];

export const products: Product[] = [
  {
    id: 1,
    title: "Wireless Noise Cancelling Headphones Pro Max",
    price: 4599,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 2341,
    badge: "Imported via API",
    country: "China",
    countryFlag: "🇨🇳",
    seller: "TechWorld Global",
    availability: "In Stock",
    estimatedDelivery: "7-12 Business Days",
    description: "Experience premium sound quality with our top-of-the-line wireless noise cancelling headphones. Features advanced ANC technology, 40-hour battery life, and ultra-comfortable memory foam ear cushions.",
    specifications: { "Driver Size": "40mm", "Battery Life": "40 hours", "Bluetooth": "5.3", "Weight": "250g", "Noise Cancellation": "Active (ANC)" },
    source: "1688",
  },
  {
    id: 2,
    title: "Smart Fitness Watch with Heart Rate Monitor",
    price: 3299,
    originalPrice: 5499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    rating: 4.3,
    reviews: 1876,
    badge: "Imported via API",
    country: "USA",
    countryFlag: "🇺🇸",
    seller: "FitTech USA",
    availability: "In Stock",
    estimatedDelivery: "10-15 Business Days",
    description: "Track your fitness goals with precision. Features GPS, heart rate monitoring, blood oxygen levels, and 14-day battery life.",
    specifications: { "Display": "1.4\" AMOLED", "Battery": "14 days", "Water Resistance": "5ATM", "Sensors": "HR, SpO2, GPS", "Compatibility": "iOS & Android" },
    source: "amazon",
  },
  {
    id: 3,
    title: "Portable Bluetooth Speaker Waterproof IPX7",
    price: 1899,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 3102,
    badge: "Imported via API",
    country: "Japan",
    countryFlag: "🇯🇵",
    seller: "AudioJapan Inc",
    availability: "In Stock",
    estimatedDelivery: "8-14 Business Days",
    description: "Powerful 360° sound in a compact, waterproof design. Perfect for outdoor adventures with 20-hour playback.",
    specifications: { "Power": "30W", "Battery": "20 hours", "Waterproof": "IPX7", "Bluetooth": "5.0", "Weight": "680g" },
    source: "alibaba",
  },
  {
    id: 4,
    title: "Ultra-Slim Laptop Stand Ergonomic Aluminum",
    price: 1299,
    originalPrice: 2100,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 892,
    badge: "Imported via API",
    country: "Germany",
    countryFlag: "🇩🇪",
    seller: "ErgoPro Europe",
    availability: "In Stock",
    estimatedDelivery: "12-18 Business Days",
    description: "Premium aluminum laptop stand with adjustable height. Improves posture and keeps your laptop cool.",
    specifications: { "Material": "Aluminum Alloy", "Max Load": "15kg", "Adjustable": "6 Angles", "Compatible": "10-17\" Laptops", "Weight": "320g" },
    source: "alibaba",
  },
  {
    id: 5,
    title: "Mechanical Gaming Keyboard RGB Backlit",
    price: 2799,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1541140532154-b024d700b90a?w=400&h=400&fit=crop",
    rating: 4.4,
    reviews: 1563,
    badge: "Imported via API",
    country: "South Korea",
    countryFlag: "🇰🇷",
    seller: "GameGear Korea",
    availability: "In Stock",
    estimatedDelivery: "9-13 Business Days",
    description: "Professional gaming keyboard with hot-swappable switches, per-key RGB lighting, and aircraft-grade aluminum frame.",
    specifications: { "Switches": "Hot-Swappable", "Layout": "Full Size", "Backlight": "Per-Key RGB", "Connection": "USB-C / Wireless", "Anti-ghosting": "N-Key Rollover" },
    source: "taobao",
  },
  {
    id: 6,
    title: "Organic Cotton Oversized Hoodie Premium",
    price: 2199,
    originalPrice: 3800,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 724,
    badge: "Imported via API",
    country: "Turkey",
    countryFlag: "🇹🇷",
    seller: "EcoWear Istanbul",
    availability: "In Stock",
    estimatedDelivery: "10-16 Business Days",
    description: "Sustainably sourced 100% organic cotton hoodie. Oversized fit with premium stitching and brushed fleece interior.",
    specifications: { "Material": "100% Organic Cotton", "Fit": "Oversized", "Care": "Machine Washable", "Sizes": "S-3XL", "Certification": "GOTS Certified" },
    source: "taobao",
  },
  {
    id: 7,
    title: "Professional Drone 4K Camera GPS Return",
    price: 8999,
    originalPrice: 14500,
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=400&fit=crop",
    rating: 4.2,
    reviews: 456,
    badge: "Imported via API",
    country: "China",
    countryFlag: "🇨🇳",
    seller: "SkyVision Tech",
    availability: "Limited Stock",
    estimatedDelivery: "7-10 Business Days",
    description: "Capture stunning aerial footage with 4K HDR camera, 3-axis gimbal stabilization, and 35-minute flight time.",
    specifications: { "Camera": "4K HDR 48MP", "Flight Time": "35 min", "Range": "10km", "GPS": "Auto Return", "Weight": "570g" },
    source: "1688",
  },
  {
    id: 8,
    title: "Stainless Steel Vacuum Insulated Water Bottle",
    price: 899,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 5230,
    badge: "Imported via API",
    country: "India",
    countryFlag: "🇮🇳",
    seller: "HydroIndia Co",
    availability: "In Stock",
    estimatedDelivery: "5-8 Business Days",
    description: "Keep drinks hot for 12 hours or cold for 24 hours. BPA-free, leak-proof design with premium matte finish.",
    specifications: { "Capacity": "750ml", "Material": "18/8 Stainless Steel", "Insulation": "Double Wall Vacuum", "BPA Free": "Yes", "Weight": "350g" },
    source: "pinduoduo",
  },
  // Extra products for denser sections
  {
    id: 9,
    title: "Women's Casual Blazer Jacket Slim Fit",
    price: 3450,
    originalPrice: 5800,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 1120,
    badge: "Imported via API",
    country: "China",
    countryFlag: "🇨🇳",
    seller: "FashionHub CN",
    availability: "In Stock",
    estimatedDelivery: "7-12 Business Days",
    description: "Elegant slim-fit blazer perfect for office or casual wear. Premium fabric with satin lining.",
    specifications: { "Material": "Polyester Blend", "Fit": "Slim", "Sizes": "XS-XXL", "Lining": "Satin", "Care": "Dry Clean" },
    source: "1688",
  },
  {
    id: 10,
    title: "Minimalist Leather Crossbody Bag Unisex",
    price: 1850,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 890,
    badge: "Imported via API",
    country: "China",
    countryFlag: "🇨🇳",
    seller: "BagMaster Co",
    availability: "In Stock",
    estimatedDelivery: "8-14 Business Days",
    description: "Stylish minimalist crossbody bag made from premium PU leather. Perfect daily companion.",
    specifications: { "Material": "PU Leather", "Size": "22x15x6cm", "Strap": "Adjustable", "Closure": "Magnetic Snap", "Pockets": "3" },
    source: "taobao",
  },
];
