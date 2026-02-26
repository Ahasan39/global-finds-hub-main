import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTABanner from "@/components/CTABanner";
import AppFooter from "@/components/AppFooter";
import MobileBottomNav from "@/components/MobileBottomNav";
import PromoModal from "@/components/PromoModal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 lg:pb-0">
      <Header />
      <HeroSection />
      <CategoryGrid />
      <ProductGrid />
      <HowItWorks />
      <WhyChooseUs />
      <CTABanner />
      <AppFooter />
      <MobileBottomNav />
      <PromoModal />
    </div>
  );
};


export default Index;


