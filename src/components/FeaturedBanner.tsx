
import { Button } from "@/components/ui/button";

const FeaturedBanner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-ebay-primary to-ebay-accent rounded-lg overflow-hidden shadow-md">
      <div className="container mx-auto p-6 md:p-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Spring Sale</h2>
            <p className="mb-4 text-sm md:text-base">
              Up to 60% off on electronics, fashion, home goods, and more. Limited time offer!
            </p>
            <Button className="bg-white text-ebay-primary hover:bg-ebay-secondary hover:text-ebay-primary">
              Shop Now
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Spring Sale" 
              className="w-3/4 md:w-auto h-auto rounded-lg shadow-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
