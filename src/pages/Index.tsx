import Header from "@/components/Header";
import MarketplaceNav from "@/components/MarketplaceNav";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import AppFooter from "@/components/AppFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MarketplaceNav />
      <HeroSection />
      <CategoryGrid />
      <ProductGrid />
      <HowItWorks />
      <WhyChooseUs />
      <CTABanner />
      <AppFooter />
    </div>
  );
};

export default Index;
