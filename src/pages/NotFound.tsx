
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-16 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold text-ebay-primary mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <div className="space-y-4">
            <p className="text-gray-500">
              The page might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
            <Button asChild className="bg-ebay-primary hover:bg-ebay-accent">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
