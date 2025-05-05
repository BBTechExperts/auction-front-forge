import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/data/Product";
import { featuredProducts } from "@/data/mockData"; // vervang later met je database
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const mockCurrentUserId = 123; // TODO: Replace with actual user ID from authentication context or state

const EditProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = featuredProducts.find(p => p.id === Number(id));
  const isOwner = true; // TODO: Check if the current user is the owner of the product

  const [formData, setFormData] = useState<Product | null>(null);

  useEffect(() => {
    if (product && isOwner) {
      setFormData(product);
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!formData) return;

    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev!,
      [name]: name === "price" ? parseFloat(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Saving product:", formData);
    navigate(`/product/${formData?.id}`);
  };

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center text-gray-600 text-xl">
          Product not found.
        </main>
        <Footer />
      </div>
    );
  }

  if (!isOwner) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center justify-center text-red-600 text-xl">
          You do not have access to this product.
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-10 max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData?.title || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              step="0.01"
              value={formData?.price || ""}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="shipping">Shipping information</Label>
            <Input
              id="shipping"
              name="shipping"
              value={formData?.shipping || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="condition">Condition</Label>
            <Input
              id="condition"
              name="condition"
              value={formData?.condition || ""}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="image">Image URL</Label>
            <Textarea
              id="image"
              name="image"
              value={formData?.image || ""}
              onChange={handleChange}
            />
          </div>

          <Button type="submit">Save</Button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default EditProductPage;
