"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

type Product = {
  _id: string;
  title: string;
  description?: string;
  price: number;
  priceWithoutDiscount?: number;
  productImage: { asset: { url: string } };
};

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "products"] {
            _id,
            title,
            description,
            price,
            priceWithoutDiscount,
            productImage {
              asset -> {
                url
              }
            }
          }
        `);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  return (
    <div className="relative ml-4 w-[30vw] md:w-[20vw] max-w-md">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Loading State */}
      {loading && (
        <div className="absolute z-10 w-full mt-2 bg-white border hidden border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm text-gray-500">Loading...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm text-red-500">{error}</p>
        </div>
      )}

      {/* Search Results Dropdown */}
      {searchQuery && filteredProducts.length > 0 && (
        <div className="absolute z-40 w-full mt-2 bg-white border  border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredProducts.map((product) => (
            <Link
              href={`/products/${product._id}`}
              key={product._id}
              passHref
            >
              <div className="flex items-center p-3 hover:bg-gray-100 cursor-pointer">
                {/* Product Image */}
                <div className="w-10 h-10 flex-shrink-0">
                  <Image
                    src={product.productImage.asset.url}
                    alt={product.title}
                    width={50}
                    height={50

                    }
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                {/* Product Title and Price */}
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {product.title}
                  </p>
                  <p className="text-sm text-gray-500">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {searchQuery && !loading && filteredProducts.length === 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3">
          <p className="text-sm text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
}
