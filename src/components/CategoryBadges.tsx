
import { Button } from "@/components/ui/button";

const categories = [
  { name: "Electronics", icon: "📱" },
  { name: "Fashion", icon: "👕" },
  { name: "Home & Garden", icon: "🏡" },
  { name: "Collectibles", icon: "🏆" },
  { name: "Toys", icon: "🧸" },
  { name: "Vehicles", icon: "🚗" },
  { name: "Sports", icon: "⚽" },
  { name: "Business", icon: "💼" },
  { name: "Jewelry", icon: "💍" },
  { name: "Health", icon: "🧪" },
];

const CategoryBadges = () => {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="flex space-x-2 min-w-max">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="outline"
            className="flex items-center px-4 py-2 rounded-full border border-ebay-border hover:border-ebay-primary bg-white hover:bg-white"
          >
            <span className="mr-2">{category.icon}</span>
            <span className="text-xs sm:text-sm">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBadges;
