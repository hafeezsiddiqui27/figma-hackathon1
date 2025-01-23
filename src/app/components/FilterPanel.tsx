
"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";

interface Product {
  _id: string;
  title: string;
  price: number;
  rating: number;
  ratingCount: number;
  productImage: { asset: { url: string } };
  isNew: boolean;
  tags: string[];
}

interface FilterPanelProps {
  products: Product[];
  onFilteredProductsChange: (filteredProducts: Product[]) => void;
}

export default function FilterPanel({
  products,
  onFilteredProductsChange,
}: FilterPanelProps) {
  const [isOpen, setIsOpen] = useState(false); // State to manage filter panel visibility
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState<"lowToHigh" | "highToLow" | "none">("none");

  // Apply filters and sorting
  const applyFilters = () => {
    const filtered = products.filter((product) => {
      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;
      return matchesPrice;
    });

    // Sort products
    if (sortBy === "lowToHigh") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === "highToLow") {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Pass filtered products to parent component
    onFilteredProductsChange(filtered);
  };

  // Reset filters
  const resetFilters = () => {
    setMinPrice(0);
    setMaxPrice(1000);
    setSortBy("none");
    onFilteredProductsChange(products); // Reset to all products
  };

  return (
    <div className="relative">
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out shadow-md transform hover:scale-105"
      >
        <Filter className="h-5 w-5" />
        <span className="font-semibold text-lg">Filters</span>
      </button>

      {/* Filter Panel (Collapsible) */}
      {isOpen && (
        <div className="absolute z-10 mt-2 bg-white p-6 rounded-2xl shadow-xl w-full max-w-md border border-gray-200">
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>

          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>

          {/* Price Range */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Price Range
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Min"
              />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Max"
              />
            </div>
          </div>

          {/* Sort By */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sort By Price
            </label>
            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "lowToHigh" | "highToLow" | "none")
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="none">None</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4 mt-8">
            <button
              onClick={resetFilters}
              className="flex-1 py-3 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-200"
            >
              Reset
            </button>
            <button
              onClick={applyFilters}
              className="flex-1 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
}