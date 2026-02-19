import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesBar from "@/components/FeaturesBar";
import ProductGrid from "@/components/ProductGrid";
import AboutSection from "@/components/AboutSection";
import CartSheet from "@/components/CartSheet";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesBar />
        <ProductGrid />
        <AboutSection />
      </main>
      <CartSheet />
      <Footer />
    </div>
  );
};

export default Index;
