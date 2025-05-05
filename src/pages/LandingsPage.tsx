import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";

const LandingPage = () => {
  const [flag, setFlag] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Replace with your real flag validation logic
    const correctFlag = "ebay{product_card_pwned}";

    if (flag.trim() === correctFlag) {
      toast({
        title: "✅ Correct flag!",
        description: "You've successfully completed this challenge.",
      });
      // TODO: Show completion screen.
    } else {
      toast({
        title: "❌ Incorrect flag",
        description: "Try again or inspect the code more closely...",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-grow py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-xl text-center">
          <h1 className="text-4xl font-bold text-ebay-dark mb-6">
            Welcome to Hackertron 💻
          </h1>

          <p className="text-lg text-gray-700 mb-4">
            Your mission: find the hidden flag buried somewhere in this eCommerce platform.
          </p>
          <p className="text-gray-600 mb-6">
            This is a template for a CTF challenge. Your goal is to find the flag and submit it below.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-4">
            <Input
              type="text"
              placeholder="Enter flag here"
              value={flag}
              onChange={(e) => setFlag(e.target.value)}
              className="w-full max-w-md"
            />
            <Button type="submit" className="w-full max-w-md">
              Submit Flag
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
