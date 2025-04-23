
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight } from "lucide-react";

interface Category {
  id: number;
  name: string;
  count: number;
  subCategories?: Category[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "Electronics",
    count: 4329,
    subCategories: [
      { id: 11, name: "Cell Phones", count: 1254 },
      { id: 12, name: "Computers", count: 872 },
      { id: 13, name: "Cameras", count: 423 },
      { id: 14, name: "TV & Home Audio", count: 687 },
    ],
  },
  {
    id: 2,
    name: "Fashion",
    count: 5641,
    subCategories: [
      { id: 21, name: "Women", count: 2358 },
      { id: 22, name: "Men", count: 1843 },
      { id: 23, name: "Jewelry", count: 937 },
      { id: 24, name: "Shoes", count: 1204 },
    ],
  },
  {
    id: 3,
    name: "Home & Garden",
    count: 2876,
    subCategories: [
      { id: 31, name: "Furniture", count: 742 },
      { id: 32, name: "Kitchen", count: 953 },
      { id: 33, name: "Decor", count: 634 },
      { id: 34, name: "Garden", count: 547 },
    ],
  },
  {
    id: 4,
    name: "Collectibles",
    count: 3254,
    subCategories: [
      { id: 41, name: "Antiques", count: 742 },
      { id: 42, name: "Sports", count: 953 },
      { id: 43, name: "Art", count: 634 },
      { id: 44, name: "Coins", count: 547 },
    ],
  },
  {
    id: 5,
    name: "Toys & Hobbies",
    count: 1832,
  },
  {
    id: 6,
    name: "Automotive",
    count: 2134,
  },
  {
    id: 7,
    name: "Sporting Goods",
    count: 1987,
  },
];

const CategoryItem = ({ category }: { category: Category }) => {
  const [expanded, setExpanded] = useState(false);
  const hasSubCategories = category.subCategories && category.subCategories.length > 0;

  return (
    <div className="mb-1">
      <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-ebay-secondary cursor-pointer"
           onClick={() => hasSubCategories && setExpanded(!expanded)}>
        <div className="flex items-center">
          {hasSubCategories ? (
            expanded ? (
              <ChevronDown className="h-4 w-4 mr-1 text-ebay-dark" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-1 text-ebay-dark" />
            )
          ) : (
            <div className="w-5" />
          )}
          <span className="text-sm font-medium">{category.name}</span>
        </div>
        <span className="text-xs text-gray-500">({category.count})</span>
      </div>

      {expanded && hasSubCategories && (
        <div className="ml-5 border-l border-ebay-border pl-2 mt-1">
          {category.subCategories.map((subCategory) => (
            <div key={subCategory.id} className="flex items-center justify-between py-1.5 px-3 rounded-md hover:bg-ebay-secondary cursor-pointer">
              <span className="text-sm">{subCategory.name}</span>
              <span className="text-xs text-gray-500">({subCategory.count})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const CategorySidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-full md:w-64 bg-white border-r border-ebay-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Categories</h2>
        <Button variant="ghost" size="sm" className="h-8 text-xs" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Hide' : 'Show'}
        </Button>
      </div>

      {isOpen && (
        <div>
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySidebar;
