// // // // "use client";
// // // // import React, { useState } from "react";

// // // // type FilterProps = {
// // // //   onApplyFilters: (filters: {
// // // //     priceRange: [number, number];
// // // //     brand: string[];
// // // //     inStock: boolean;
// // // //   }) => void;
// // // //   availableBrands: string[];
// // // // };

// // // // export default function FilterPanel({
// // // //   onApplyFilters,
// // // //   availableBrands,
// // // // }: FilterProps) {
// // // //   const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
// // // //   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
// // // //   const [inStock, setInStock] = useState(false);

// // // //   const toggleBrand = (brand: string) => {
// // // //     setSelectedBrands((prev) =>
// // // //       prev.includes(brand)
// // // //         ? prev.filter((b) => b !== brand)
// // // //         : [...prev, brand]
// // // //     );
// // // //   };

// // // //   const handleApplyFilters = () => {
// // // //     onApplyFilters({ priceRange, brand: selectedBrands, inStock });
// // // //   };

// // // //   return (
// // // //     <div className="p-4 bg-gray-100 rounded-md">
// // // //       <h2 className="font-bold text-lg mb-4">Filters</h2>

// // // //       {/* Price Range */}
// // // //       <div className="mb-4">
// // // //         <label className="block text-sm font-medium">Price Range:</label>
// // // //         <div className="flex items-center gap-4">
// // // //           <input
// // // //             type="number"
// // // //             className="w-16 p-1 border rounded"
// // // //             value={priceRange[0]}
// // // //             onChange={(e) =>
// // // //               setPriceRange([Number(e.target.value), priceRange[1]])
// // // //             }
// // // //             min={0}
// // // //           />
// // // //           <span className="text-sm">to</span>
// // // //           <input
// // // //             type="number"
// // // //             className="w-16 p-1 border rounded"
// // // //             value={priceRange[1]}
// // // //             onChange={(e) =>
// // // //               setPriceRange([priceRange[0], Number(e.target.value)])
// // // //             }
// // // //             min={0}
// // // //           />
// // // //         </div>
// // // //       </div>

// // // //       {/* Brand Selection */}
// // // //       <div className="mb-4">
// // // //         <label className="block text-sm font-medium">Brand:</label>
// // // //         <div className="flex flex-wrap gap-2">
// // // //           {availableBrands.map((brand) => (
// // // //             <label key={brand} className="inline-flex items-center gap-2">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 className="rounded"
// // // //                 checked={selectedBrands.includes(brand)}
// // // //                 onChange={() => toggleBrand(brand)}
// // // //               />
// // // //               {brand}
// // // //             </label>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       {/* In Stock Toggle */}
// // // //       <div className="mb-4">
// // // //         <label className="inline-flex items-center gap-2">
// // // //           <input
// // // //             type="checkbox"
// // // //             className="rounded"
// // // //             checked={inStock}
// // // //             onChange={(e) => setInStock(e.target.checked)}
// // // //           />
// // // //           In Stock Only
// // // //         </label>
// // // //       </div>

// // // //       {/* Apply Filters Button */}
// // // //       <button
// // // //         onClick={handleApplyFilters}
// // // //         className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
// // // //       >
// // // //         Apply Filters
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { useState } from "react";

// // // interface FilterPanelProps {
// // //   products: {
// // //     _id: string;
// // //     title: string;
// // //     price: number;
// // //     tags: string[];
// // //   }[];
// // //   onFilteredProductsChange: (filteredProducts: any[]) => void;
// // // }

// // // export default function FilterPanel({
// // //   products,
// // //   onFilteredProductsChange,
// // // }: FilterPanelProps) {
// // //   const [minPrice, setMinPrice] = useState(0);
// // //   const [maxPrice, setMaxPrice] = useState(1000);
// // //   const [selectedTags, setSelectedTags] = useState<string[]>([]);
// // //   const [sortBy, setSortBy] = useState<"lowToHigh" | "highToLow" | "none">("none");

// // //   // Extract unique tags from products
// // //   const tags = Array.from(new Set(products.flatMap((p) => p.tags)));

// // //   // Apply filters and sorting
// // //   const applyFilters = () => {
// // //     let filtered = products.filter((product) => {
// // //       const matchesPrice =
// // //         product.price >= minPrice && product.price <= maxPrice;
// // //       const matchesTags =
// // //         selectedTags.length === 0 ||
// // //         selectedTags.some((tag) => product.tags.includes(tag));
// // //       return matchesPrice && matchesTags;
// // //     });

// // //     // Sort products
// // //     if (sortBy === "lowToHigh") {
// // //       filtered.sort((a, b) => a.price - b.price);
// // //     } else if (sortBy === "highToLow") {
// // //       filtered.sort((a, b) => b.price - a.price);
// // //     }

// // //     // Pass filtered products to parent component
// // //     onFilteredProductsChange(filtered);
// // //   };

// // //   // Reset filters
// // //   const resetFilters = () => {
// // //     setMinPrice(0);
// // //     setMaxPrice(1000);
// // //     setSelectedTags([]);
// // //     setSortBy("none");
// // //     onFilteredProductsChange(products); // Reset to all products
// // //   };

// // //   return (
// // //     <div className="bg-white p-6 rounded-lg shadow-lg">
// // //       <h2 className="text-xl font-semibold mb-4">Filters</h2>

// // //       {/* Price Range */}
// // //       <div className="mb-6">
// // //         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //           Price Range
// // //         </label>
// // //         <div className="flex space-x-4">
// // //           <input
// // //             type="number"
// // //             value={minPrice}
// // //             onChange={(e) => setMinPrice(Number(e.target.value))}
// // //             className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             placeholder="Min Price"
// // //           />
// // //           <input
// // //             type="number"
// // //             value={maxPrice}
// // //             onChange={(e) => setMaxPrice(Number(e.target.value))}
// // //             className="w-1/2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //             placeholder="Max Price"
// // //           />
// // //         </div>
// // //       </div>

// // //       {/* Tag Selection */}
// // //       <div className="mb-6">
// // //         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //           Tags
// // //         </label>
// // //         <div className="space-y-2">
// // //           {tags.map((tag) => (
// // //             <label key={tag} className="flex items-center">
// // //               <input
// // //                 type="checkbox"
// // //                 checked={selectedTags.includes(tag)}
// // //                 onChange={(e) => {
// // //                   if (e.target.checked) {
// // //                     setSelectedTags([...selectedTags, tag]);
// // //                   } else {
// // //                     setSelectedTags(selectedTags.filter((t) => t !== tag));
// // //                   }
// // //                 }}
// // //                 className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
// // //               />
// // //               <span className="text-sm text-gray-700">{tag}</span>
// // //             </label>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Price Sorting */}
// // //       <div className="mb-6">
// // //         <label className="block text-sm font-medium text-gray-700 mb-2">
// // //           Sort By Price
// // //         </label>
// // //         <select
// // //           value={sortBy}
// // //           onChange={(e) =>
// // //             setSortBy(e.target.value as "lowToHigh" | "highToLow" | "none")
// // //           }
// // //           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         >
// // //           <option value="none">None</option>
// // //           <option value="lowToHigh">Low to High</option>
// // //           <option value="highToLow">High to Low</option>
// // //         </select>
// // //       </div>

// // //       {/* Buttons */}
// // //       <div className="flex space-x-4">
// // //         <button
// // //           onClick={applyFilters}
// // //           className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
// // //         >
// // //           Apply Filters
// // //         </button>
// // //         <button
// // //           onClick={resetFilters}
// // //           className="w-1/2 bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
// // //         >
// // //           Reset Filters
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { useState } from "react";

// // interface FilterPanelProps {
// //   products: {
// //     _id: string;
// //     title: string;
// //     price: number;
// //     tags: string[];
// //   }[];
// //   onFilteredProductsChange: (filteredProducts: any[]) => void;
// // }

// // export default function FilterPanel({
// //   products,
// //   onFilteredProductsChange,
// // }: FilterPanelProps) {
// //   const [minPrice, setMinPrice] = useState(0);
// //   const [maxPrice, setMaxPrice] = useState(1000);
// //   const [selectedTags, setSelectedTags] = useState<string[]>([]);
// //   const [sortBy, setSortBy] = useState<"lowToHigh" | "highToLow" | "none">("none");

// //   const tags = Array.from(new Set(products.flatMap((p) => p.tags)));

// //   const applyFilters = () => {
// //     let filtered = products.filter((product) => {
// //       const matchesPrice =
// //         product.price >= minPrice && product.price <= maxPrice;
// //       const matchesTags =
// //         selectedTags.length === 0 ||
// //         selectedTags.some((tag) => product.tags.includes(tag));
// //       return matchesPrice && matchesTags;
// //     });

// //     if (sortBy === "lowToHigh") {
// //       filtered.sort((a, b) => a.price - b.price);
// //     } else if (sortBy === "highToLow") {
// //       filtered.sort((a, b) => b.price - a.price);
// //     }

// //     onFilteredProductsChange(filtered);
// //   };

// //   const resetFilters = () => {
// //     setMinPrice(0);
// //     setMaxPrice(1000);
// //     setSelectedTags([]);
// //     setSortBy("none");
// //     onFilteredProductsChange(products);
// //   };

// //   return (
// //     <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-200">
// //       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>

// //           {/* {sort by} */}
// //           <div className="mb-6">
// //         <label className="block text-sm font-medium text-gray-700 mb-2">
// //           Sort By Price
// //         </label>
// //         <select
// //           value={sortBy}
// //           onChange={(e) =>
// //             setSortBy(e.target.value as "lowToHigh" | "highToLow" | "none")
// //           }
// //           className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //         >
// //           <option value="none">None</option>
// //           <option value="lowToHigh">Low to High</option>
// //           <option value="highToLow">High to Low</option>
// //         </select>
// //           </div>
// //           {/* Price Range */}
// //       <div className="mb-6">
// //         <label className="block text-sm font-medium text-gray-700 mb-2">
// //           Price Range
// //         </label>
// //         <div className="flex items-center space-x-4">
// //           <input
// //             type="number"
// //             value={minPrice}
// //             onChange={(e) => setMinPrice(Number(e.target.value))}
// //             className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //             placeholder="Min"
// //           />
// //           <input
// //             type="number"
// //             value={maxPrice}
// //             onChange={(e) => setMaxPrice(Number(e.target.value))}
// //             className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
// //             placeholder="Max"
// //           />
// //         </div>
// //       </div>

// //       {/* Tags */}
// //       <div className="mb-6">
// //         <label className="block text-sm font-medium text-gray-700 mb-2">
// //           Tags
// //         </label>
// //         <div className="grid grid-cols-2 gap-3">
// //           {tags.map((tag) => (
// //             <label
// //               key={tag}
// //               className="flex items-center space-x-2 text-sm text-gray-600"
// //             >
// //               <input
// //                 type="checkbox"
// //                 checked={selectedTags.includes(tag)}
// //                 onChange={(e) => {
// //                   if (e.target.checked) {
// //                     setSelectedTags([...selectedTags, tag]);
// //                   } else {
// //                     setSelectedTags(selectedTags.filter((t) => t !== tag));
// //                   }
// //                 }}
// //                 className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
// //               />
// //               <span>{tag}</span>
// //             </label>
// //           ))}
// //         </div>
// //       </div>

// //       {/* Sort By */}
    

// //       {/* Action Buttons */}
// //       <div className="flex items-center space-x-4">
// //         <button
// //           onClick={resetFilters}
// //           className="flex-1 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-200"
// //         >
// //           Reset
// //         </button>
// //         <button
// //           onClick={applyFilters}
// //           className="flex-1 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
// //         >
// //           Apply
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { Filter, X } from "lucide-react";

// interface FilterPanelProps {
//   products: {
//     _id: string;
//     title: string;
//     price: number;
//   }[];
//   onFilteredProductsChange: (filteredProducts: any[]) => void;
// }

// export default function FilterPanel({
//   products,
//   onFilteredProductsChange,
// }: FilterPanelProps) {
//   const [isOpen, setIsOpen] = useState(false); // State to manage filter panel visibility
//   const [minPrice, setMinPrice] = useState(0);
//   const [maxPrice, setMaxPrice] = useState(1000);
//   const [sortBy, setSortBy] = useState<"lowToHigh" | "highToLow" | "none">("none");

//   // Apply filters and sorting
//   const applyFilters = () => {
//     let filtered = products.filter((product) => {
//       const matchesPrice =
//         product.price >= minPrice && product.price <= maxPrice;
//       return matchesPrice;
//     });

//     // Sort products
//     if (sortBy === "lowToHigh") {
//       filtered.sort((a, b) => a.price - b.price);
//     } else if (sortBy === "highToLow") {
//       filtered.sort((a, b) => b.price - a.price);
//     }

//     // Pass filtered products to parent component
//     onFilteredProductsChange(filtered);
//   };

//   // Reset filters
//   const resetFilters = () => {
//     setMinPrice(0);
//     setMaxPrice(1000);
//     setSortBy("none");
//     onFilteredProductsChange(products); // Reset to all products
//   };

//   return (
//     <div className="relative">
//       {/* Filter Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
//       >
//         <Filter className="h-5 w-5" />
//         <span>Filters</span>
//       </button>

//       {/* Filter Panel (Collapsible) */}
//       {isOpen && (
//         <div className="absolute z-10 mt-2 bg-white p-6 rounded-xl shadow-md w-full max-w-md border border-gray-200">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//           >
//             <X className="h-5 w-5" />
//           </button>

//           <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filters</h2>

//           {/* Price Range */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Price Range
//             </label>
//             <div className="flex items-center space-x-4">
//               <input
//                 type="number"
//                 value={minPrice}
//                 onChange={(e) => setMinPrice(Number(e.target.value))}
//                 className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Min"
//               />
//               <input
//                 type="number"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(Number(e.target.value))}
//                 className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 placeholder="Max"
//               />
//             </div>
//           </div>

//           {/* Sort By */}
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Sort By Price
//             </label>
//             <select
//               value={sortBy}
//               onChange={(e) =>
//                 setSortBy(e.target.value as "lowToHigh" | "highToLow" | "none")
//               }
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="none">None</option>
//               <option value="lowToHigh">Low to High</option>
//               <option value="highToLow">High to Low</option>
//             </select>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center space-x-4">
//             <button
//               onClick={resetFilters}
//               className="flex-1 py-2 text-sm font-medium text-gray-600 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition duration-200"
//             >
//               Reset
//             </button>
//             <button
//               onClick={applyFilters}
//               className="flex-1 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
//             >
//               Apply
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Filter, X } from "lucide-react";

interface FilterPanelProps {
  products: {
    _id: string;
    title: string;
    price: number;
  }[];
  onFilteredProductsChange: (filteredProducts: any[]) => void;
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
    let filtered = products.filter((product) => {
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
