
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Bell, Heart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-ebay-border shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top navbar with logo and account */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/products" className="flex items-center">
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-ebay-red via-ebay-primary to-ebay-green">
                eBuy
              </h1>
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full max-w-2xl">
              <Input
                type="search"
                placeholder="Search for anything"
                className="pr-12 py-2 rounded-full w-full"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-full rounded-l-none rounded-r-full bg-ebay-accent hover:bg-ebay-primary text-white"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Navigation icons */}
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-ebay-dark">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-ebay-dark">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-ebay-dark">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-ebay-dark">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-ebay-dark">
              <Link to="/">🚩</Link>
            </Button>
          </nav>
        </div>

        {/* Mobile search bar */}
        <div className="block md:hidden pb-3">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search for anything"
              className="pr-12 py-1 rounded-full"
            />
            <Button
              size="icon"
              className="absolute right-0 top-0 h-full rounded-l-none rounded-r-full bg-ebay-accent hover:bg-ebay-primary text-white"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
