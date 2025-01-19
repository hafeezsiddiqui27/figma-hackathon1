// // "use client";
// // import { useEffect, useState } from "react";
// // import { client } from "@/sanity/lib/client";

// // import Link from "next/link";

// // type Product = {
// //   _id: string;
// //   name: string;
// //   // slug: {
// //   //   current: string;
// //   // };
// //   rating: number;
// //   price: number;
// //   discountedprice: number | null; // Discounted price might be null
// //   availability: "in-stock" | "out-of-stock";
// //   description?: string;
// //   availableColors?: string[];
// //   image: string;
// // };

// // export default function ProductList() {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //         const data = await client.fetch(
// //           // `*[_type == "pro"] {
// //           //   _id,
// //           //   title,
// //           //   slug,
// //           //   rating,
// //           //   price,
// //           //   discountedprice,
// //           //   availability,
// //           //   description,
// //           //   availableColors,
// //           //     "image": image.asset->url
// //           // }`
// //           `*[_type == "product"] {
// //   _id,
// //   name,
// //   description,
// //   price,
// //   discountPercentage,
// //   priceWithoutDiscount,
// //   rating,
// //   ratingCount,
// //   tags,
// //   sizes,
// //   "image": image.asset->url
// // }
// // `
// //         );
// //         setProducts(data);
// //         console.log(data);
// //       } catch (err) {
// //         setError("Failed to fetch products");
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div>{error}</div>;
// //   if (!products.length) return <div>No products available.</div>;

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
// //       <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
// //         {products.map((product) => (
// //           <div
// //             key={product._id}
// //             className="flex flex-col flex-wrap gap-6 items-center p-4 mt-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg"
// //           >
// //             {/* Image Section */}
// //             <div className="w-full flex justify-center">
// //               {/* <img
// //                 src={product.images[0] || "/placeholder.png"}
// //                 alt={product.title}
// //                 className="w-[250px] h-[300px] object-cover"
// //               /> */}
// //               <div className="w-full flex justify-center">
// //                 <img
// //                   src={product.image} // Check for images array length
// //                   alt={product.name}
// //                   className="w-[250px] h-[300px] object-cover"
// //                 />
// //               </div>
// //             </div>

// //             {/* Details Section */}
// //             <Link
// //                 href={`/product/${product._id}`} // Ensure slug exists
// //                 passHref
// //               >
// //             <div className="mt-4 text-center">
// //               <h3 className="text-[#252B42] text-[16px] font-bold">
// //                 {product.name}
// //               </h3>
// //               <p className="text-[#737373] text-[14px] block">
// //                 {product.description
// //                   ? product.description.length > 30
// //                     ? product.description.slice(0, 30) + "..."
// //                     : product.description
// //                   : "No description available"}
// //               </p>

// //               <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
// //                 ${product.price.toFixed(2)}{" "}
// //                 {product.discountedprice ? (
// //                   <span className="text-[#23856D]">
// //                     ${product.discountedprice.toFixed(2)}
// //                   </span>
// //                 ) : (
// //                   <span className="text-gray-500 text-sm">No discount</span>
// //                 )}
// //                 </p>
// //                 </Link>

// //               {/* Color options */}
// //               {product.availableColors?.length ? (
// //                 <div className="flex justify-center gap-2 mt-4">
// //                   {product.availableColors.map((color, index) => (
// //                     <div
// //                       key={index}
// //                       className="w-4 h-4 rounded-full"
// //                       style={{ backgroundColor: color }}
// //                     />
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <p className="text-gray-500 text-sm"></p>
// //               )}
             
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }
// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import AuraLoadingBar from "../components/AuraLoadingBar";

// type Product = {
//   _id: string;
//   name: string;
//   description?: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   rating: number;
//   image: string;
// };

// export default function ProductList() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await client.fetch(
//           `*[_type == "product"] {
//             _id,
//             name,
//             description,
//             price,
//             priceWithoutDiscount,
//             rating,
//             "image": image.asset->url
//           }`
//         );
//         setProducts(data);
//       } catch (err) {
//         setError("Failed to fetch products");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // if (loading) return <div className="text-center py-8"><AuraLoadingBar /></div>;
//   if (error) return <div className="text-red-500 text-center">{error}</div>;
//   if (!products.length) return <div className="text-center py-8">No products available.</div>;

//   return (
//     <section className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
//       <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
//         {products.map((product) => (
//           <Link href={`/product/${product._id}`} key={product._id} passHref>
//             <div className="flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
//               <div className="w-full flex justify-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-[250px] h-[300px] object-cover"
//                 />
//               </div>
//               <div className="mt-4 text-center">
//                 <h3 className="text-[#252B42] text-[16px] font-bold">{product.name}</h3>
//                 <p className="text-[#737373] text-[14px] block">
//                   {product.description
//                     ? product.description.length > 30
//                       ? product.description.slice(0, 30) + "..."
//                       : product.description
//                     : "No description available"}
//                 </p>
//                 <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
//                   ${product.price.toFixed(2)}{" "}
//                   {product.priceWithoutDiscount ? (
//                     <span className="text-[#23856D]">
//                       ${product.priceWithoutDiscount.toFixed(2)}
//                     </span>
//                   ) : (
//                     <span className="text-gray-500 text-sm">No discount</span>
//                   )}
//                 </p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
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
  const [itemsPerPage] = useState(8); // Number of items per page

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "producting"] {
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
          }
        `);
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
          <Link href={`/producting/${product._id}`} key={product._id} passHref>
            <div className="flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
              <div className="w-full flex justify-center">
                <div className="w-[250px] h-[300px] overflow-hidden">
                  <img
                    src={product.productImage.asset.url}
                    alt={product.title}
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
                  ${product.price.toFixed(2)}{" "}
                  {product.priceWithoutDiscount ? (
                    <span className="text-[#23856D]">
                      ${product.priceWithoutDiscount.toFixed(2)}
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