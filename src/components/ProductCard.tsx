
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Heart, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  bidCount?: number;
  timeLeft?: string;
  shipping: string;
  condition: string;
  rating?: number;
  isFeatured?: boolean;
  isBuyNow?: boolean;
  isAuction?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="group overflow-hidden h-full border border-ebay-border hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <div className="overflow-hidden h-48">
          <img 
            src={product.image} 
            alt={product.title}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        
        <Button
          variant="ghost" 
          size="icon"
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full h-8 w-8"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart 
            className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-ebay-dark'}`} 
          />
        </Button>

        {product.isFeatured && (
          <Badge className="absolute top-2 left-2 bg-ebay-yellow text-ebay-dark">
            Featured
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="text-sm font-medium line-clamp-2 hover:text-ebay-primary cursor-pointer">
          {product.title}
        </h3>
        
        <div className="mt-2 space-y-1">
          <div className="flex items-center justify-between">
            <div className="text-md font-semibold">${product.price.toFixed(2)}</div>
            {product.isAuction && (
              <Badge variant="outline" className="text-xs">
                {product.bidCount} bid{product.bidCount !== 1 ? 's' : ''}
              </Badge>
            )}
          </div>
          
          {product.isBuyNow && (
            <div className="text-xs font-semibold text-ebay-green">
              Buy It Now
            </div>
          )}

          {product.isAuction && product.timeLeft && (
            <div className="flex items-center text-xs text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              <span>{product.timeLeft}</span>
            </div>
          )}
          
          <div className="text-xs text-gray-500">
            {product.shipping}
          </div>
          
          <div className="flex items-center text-xs text-gray-500">
            <span className="mr-1">{product.condition}</span>
            {product.rating && (
              <div className="flex items-center ml-2">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-0.5" />
                <span>{product.rating}</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button variant="outline" size="sm" className="w-full text-xs">
          {product.isAuction ? 'Place Bid' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
