import { useState } from "react";
import { CreditCard, Smartphone, Banknote, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Continue Shopping
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shipping form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <h2 className="text-lg font-semibold text-card-foreground mb-5">Shipping Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Full Name", placeholder: "John Doe", span: false },
                  { label: "Phone Number", placeholder: "+880 1XXX-XXXXXX", span: false },
                  { label: "Street Address", placeholder: "House #, Road #, Area", span: true },
                  { label: "City", placeholder: "Dhaka", span: false },
                  { label: "Postal Code", placeholder: "1200", span: false },
                ].map((field) => (
                  <div key={field.label} className={field.span ? "sm:col-span-2" : ""}>
                    <label className="block text-sm font-medium text-card-foreground mb-1.5">{field.label}</label>
                    <input
                      type="text"
                      placeholder={field.placeholder}
                      className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-1.5">Country</label>
                  <select className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all">
                    <option>Bangladesh</option>
                    <option>India</option>
                    <option>Pakistan</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
              <h2 className="text-lg font-semibold text-card-foreground mb-5">Payment Method</h2>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { id: "card", label: "Card", icon: <CreditCard className="w-5 h-5" /> },
                  { id: "mobile", label: "Mobile Banking", icon: <Smartphone className="w-5 h-5" /> },
                  { id: "cod", label: "Cash on Delivery", icon: <Banknote className="w-5 h-5" /> },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setPayment(m.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-sm font-medium ${
                      payment === m.id
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {m.icon}
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-card sticky top-28">
              <h2 className="text-lg font-semibold text-card-foreground mb-5">Order Summary</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <img src={item.product.image} alt="" className="w-16 h-16 rounded-xl object-cover bg-muted" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-card-foreground line-clamp-2">{item.product.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">Qty: {item.qty}</p>
                      <p className="text-sm font-semibold text-foreground mt-0.5">৳{(item.product.price * item.qty).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2 border-t border-border pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-card-foreground">৳{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-card-foreground">{shipping === 0 ? "Free" : `৳${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">৳{total.toLocaleString()}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-accent text-accent-foreground font-semibold py-3.5 rounded-xl hover:brightness-110 transition-all text-sm">
                Place Order
              </button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                By placing your order, you agree to our Terms & Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Checkout;
