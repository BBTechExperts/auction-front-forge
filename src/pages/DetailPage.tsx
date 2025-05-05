import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { featuredProducts } from "@/data/mockData";
import { Product } from "@/data/Product";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const DetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const product: Product | undefined = featuredProducts.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-20 text-center text-xl text-gray-700">
          Product not found.
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="container mx-auto flex-1 px-4 py-10">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-2xl shadow-md w-full h-auto"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {product.title}
              </h1>

              <p className="text-2xl text-green-700 font-semibold mb-2">
                ${product.price.toFixed(2)}
              </p>

              <div className="mb-4">
                <Badge className="mr-2">{product.condition}</Badge>
                {product.isBuyNow && <Badge variant="secondary">Buy Now</Badge>}
                {product.isAuction && <Badge variant="outline">Auction</Badge>}
              </div>

              <p className="text-gray-600 mb-2">{product.shipping}</p>

              {/* Optional Auction Info */}
              {product.isAuction && (
                <div className="text-sm text-gray-500 mb-4">
                  <p>
                    Bids: <strong>{product.bidCount ?? 0}</strong>
                  </p>
                  <p>
                    Time left: <strong>{product.timeLeft ?? "—"}</strong>
                  </p>
                </div>
              )}

              <Button className="w-full md:w-auto">
                {product.isBuyNow ? "Buy Now" : "Place Bid"}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DetailPage;
