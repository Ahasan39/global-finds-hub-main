import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Truck, MapPin, CheckCircle2, CreditCard, Smartphone, Banknote, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import AppFooter from "@/components/AppFooter";
import { products } from "@/data/mockData";

const cartItems = [
  { product: products[0], qty: 1 },
  { product: products[2], qty: 2 },
];

const Checkout = () => {
  const [payment, setPayment] = useState("card");

  const subtotal = cartItems.reduce((s, item) => s + item.product.price * item.qty, 0);
  const shipping = subtotal >= 5000 ? 0 : 150;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Continue Shopping
        </Link>

        {/* Step Indicator */}
        <div className="mb-10 max-w-2xl">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-secondary rounded-full -z-10"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[50%] h-1 bg-primary rounded-full -z-10"></div>

            {[
              { label: "Shipping", icon: <MapPin className="w-5 h-5" />, active: true, completed: true },
              { label: "Payment", icon: <CreditCard className="w-5 h-5" />, active: true, completed: false },
              { label: "Review", icon: <CheckCircle2 className="w-5 h-5" />, active: false, completed: false },
            ].map((step, i) => (
              <div key={step.label} className="flex flex-col items-center gap-2 bg-background px-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${step.completed ? "bg-primary border-primary text-primary-foreground" :
                    step.active ? "bg-card border-primary text-primary shadow-sm" : "bg-card border-border text-muted-foreground"
                  }`}>
                  {step.icon}
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider ${step.active ? "text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
              </div>
            ))}
          </div>
        </div>

        <h1 className="text-3xl font-black text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Shipping form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-2xl border border-border/50 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Truck className="w-6 h-6 text-primary" /> Delivery Details
              </h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: "Full Name", placeholder: "John Doe", span: false },
                  { label: "Phone Number", placeholder: "+880 1XXX-XXXXXX", span: false },
                  { label: "Street Address", placeholder: "House #, Road #, Area", span: true },
                  { label: "City", placeholder: "Dhaka", span: false },
                  { label: "Postal Code", placeholder: "1200", span: false },
                ].map((field) => (
                  <div key={field.label} className={`relative group ${field.span ? "sm:col-span-2" : ""}`}>
                    <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">{field.label}</label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full h-12 px-4 rounded-xl border-2 border-border/50 bg-background text-sm focus:outline-none focus:ring-0 focus:border-primary transition-all shadow-sm hover:border-border"
                    />
                  </div>
                ))}
                <div className="relative group">
                  <label className="block text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Country</label>
                  <select className="w-full h-12 px-4 rounded-xl border-2 border-border/50 bg-background text-sm focus:outline-none focus:ring-0 focus:border-primary transition-all shadow-sm hover:border-border appearance-none cursor-pointer">
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" /> Payment Method
                </h2>
                <div className="hidden sm:flex items-center gap-1.5 bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                  <ShieldCheck className="w-4 h-4" /> 256-bit Encrypted
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { id: "card", label: "Card", icon: <CreditCard className="w-6 h-6" /> },
                  { id: "mobile", label: "Mobile Banking", icon: <Smartphone className="w-6 h-6" /> },
                  { id: "cod", label: "Cash on Delivery", icon: <Banknote className="w-6 h-6" /> },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPayment(m.id)}
                    className={`flex flex-col items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all group ${payment === m.id
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border text-muted-foreground hover:border-primary/40 hover:bg-secondary/50"
                      }`}
                  >
                    <div className={`${payment === m.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"} transition-colors`}>{m.icon}</div>
                    <span className={`text-sm font-bold ${payment === m.id ? "text-primary" : "text-foreground"} transition-colors`}>{m.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card rounded-2xl border border-border/50 p-6 sm:p-8 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-muted border border-border/50 shrink-0">
                      <img src={item.product.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground line-clamp-2 leading-tight">{item.product.title}</p>
                      <p className="text-xs font-medium text-muted-foreground mt-1 tracking-wide">QTY: {item.qty}</p>
                      <p className="text-sm font-black text-foreground mt-1">৳{(item.product.price * item.qty).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-3 border-t border-border/50 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">৳{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-muted-foreground">Shipping</span>
                  <span className="font-semibold text-foreground">{shipping === 0 ? "Free" : `৳${shipping}`}</span>
                </div>
                <div className="flex justify-between text-lg font-black pt-4 border-t border-border/50 mt-2">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary tracking-tight">৳{total.toLocaleString()}</span>
                </div>
              </div>

              <button className="w-full mt-8 bg-accent text-accent-foreground font-black py-4 rounded-xl hover:brightness-110 transition-all text-base shadow-md hover:shadow-lg active:scale-[0.98] uppercase tracking-wide">
                Place Order Securely
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs font-semibold text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Payments are secure and encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Checkout;
