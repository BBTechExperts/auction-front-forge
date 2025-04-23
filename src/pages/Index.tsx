
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CategorySidebar from "@/components/CategorySidebar";
import ProductGrid from "@/components/ProductGrid";
import FeaturedBanner from "@/components/FeaturedBanner";
import CategoryBadges from "@/components/CategoryBadges";
import Footer from "@/components/Footer";
import { featuredProducts, popularProducts } from "@/data/mockData";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Category pills */}
        <div className="container mx-auto px-4 py-4">
          <CategoryBadges />
        </div>

        {/* Featured Banner */}
        <div className="container mx-auto px-4 py-4">
          <FeaturedBanner />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar (hidden on mobile) */}
            <div className="hidden md:block">
              <CategorySidebar />
            </div>

            {/* Products */}
            <div className="flex-1 md:ml-8">
              {/* Featured Products */}
              <div className="mb-12">
                <ProductGrid products={featuredProducts} title="Featured Deals" />
              </div>
              
              {/* Popular Products */}
              <div className="mb-8">
                <ProductGrid products={popularProducts} title="Most Popular" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
