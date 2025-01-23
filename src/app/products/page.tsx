"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import Image from "next/image";
import FilterPanel from "../components/FilterPanel";
import Pagination from "../components/Pagination";

type Product = {
  _id: string;
  title: string;
  description?: string;
  price: number;
  priceWithoutDiscount?: number;
  rating: number;
  ratingCount: number;
  productImage: { asset: { url: string } };
  isNew: boolean;
  tags: string[];
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Items per page

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`*[_type == "products"] {
          _id,
          title,
          description,
          price,
          priceWithoutDiscount,
          rating,
          ratingCount,
          productImage {
            asset -> {
              url
            }
          },
          isNew,
          tags
        }`);
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!products.length)
    return <div className="text-center py-8">No products available.</div>;

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>

      {/* Filter Panel */}
      <div className="mb-8">
        <FilterPanel
          products={products}
          onFilteredProductsChange={setFilteredProducts}
        />
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {currentItems.map((product) => (
          <Link href={`/products/${product._id}`} key={product._id} passHref>
            <div className="flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg bg-white">
              <div className="w-full flex justify-center">
                <div className="w-[250px] h-[300px] overflow-hidden">
                  <Image
                    src={product.productImage.asset.url}
                    alt={`Image of ${product.title}`}
                    width={250}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-[#252B42] text-[16px] font-bold">
                  {product.title}
                </h3>
                <p className="text-[#737373] text-[14px] block">
                  {product.description
                    ? product.description.length > 30
                      ? product.description.slice(0, 30) + "..."
                      : product.description
                    : "No description available"}
                </p>
                <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
                  ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}{" "}
                  {product.priceWithoutDiscount ? (
                    <span className="text-[#23856D] line-through">
                      ${product.priceWithoutDiscount.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  ) : (
                    <span className="text-gray-500 text-sm">No discount</span>
                  )}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </section>
  );
}
