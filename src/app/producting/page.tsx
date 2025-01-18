// // "use client";
// // import { useEffect, useState } from "react";
// // import { client } from "@/sanity/lib/client";
// // import Link from "next/link";

// // type Product = {
// //   _id: string;
// //   name: string;
// //   description?: string;
// //   price: number;
// //   priceWithoutDiscount?: number;
// //   rating: number;
// //   image: string;
// // };

// // export default function ProductList() {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     const fetchProducts = async () => {
// //       try {
// //          const data = await client.fetch (`*[_type == "producting"] {
// //           _id,
// //           title,
// //           description,
// //           productImage,
// //           price,
// //           discountPercentage,
// //           priceWithoutDiscount,
// //           rating,
// //           ratingCount,
// //           tags,
// //           isNew,
// //           sizes
// //         }
// //         `)
// //         // (`*[_type=="producting"]{
// //         //     _id,
// //         //     title,
// //         //     "imageUrl" :productImage.asset -> url,
// //         //     price,
// //         //     tags,
// //         //     dicountPercentage,
// //         //     description,
// //         //     isNew
// //         // }`);

// //         setProducts(data);
// //       } catch (err) {
// //         setError("Failed to fetch products");
// //         console.error(err);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchProducts();
// //   }, []);

// //   // if (loading) return <div className="text-center py-8"><AuraLoadingBar /></div>;
// //   if (error) return <div className="text-red-500 text-center">{error}</div>;
// //   if (!products.length) return <div className="text-center py-8">No products available.</div>;

// //   return (
// //     <section className="container mx-auto px-4 py-8">
// //       <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
// //       <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
// //         {products.map((product) => (
// //           <Link href={`/product/${product._id}`} key={product._id} passHref>
// //             <div className="flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
// //               <div className="w-full flex justify-center">
// //                 <img
// //                   src={product.image}
// //                   alt={product.name}
// //                   className="w-[250px] h-[300px] object-cover"
// //                 />
// //               </div>
// //               <div className="mt-4 text-center">
// //                 <h3 className="text-[#252B42] text-[16px] font-bold">{product.name}</h3>
// //                 <p className="text-[#737373] text-[14px] block">
// //                   {product.description
// //                     ? product.description.length > 30
// //                       ? product.description.slice(0, 30) + "..."
// //                       : product.description
// //                     : "No description available"}
// //                 </p>
// //                 <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
// //                   ${product.price.toFixed(2)}{" "}
// //                   {product.priceWithoutDiscount ? (
// //                     <span className="text-[#23856D]">
// //                       ${product.priceWithoutDiscount.toFixed(2)}
// //                     </span>
// //                   ) : (
// //                     <span className="text-gray-500 text-sm">No discount</span>
// //                   )}
// //                 </p>
// //               </div>
// //             </div>
// //           </Link>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// "use client";
// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

// type Product = {
//   _id: string;
//   title: string;
//   description?: string;
//   price: number;
//   priceWithoutDiscount?: number;
//   rating: number;
//   ratingCount: number;
//   productImage: { asset: { url: string } };
//   isNew: boolean;
//   tags: string[];
// };

// export default function ProductList() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // Fetching products using GROQ
//         const data = await client.fetch(`
//           *[_type == "producting"] {
//             _id,
//             title,
//             description,
//             price,
//             priceWithoutDiscount,
//             rating,
//             ratingCount,
//             productImage {
//               asset -> {
//                 url
//               }
//             },
//             isNew,
//             tags
//           }
//         `);

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

//   if (loading) return <div className="text-center py-8">Loading...</div>;
//   if (error) return <div className="text-red-500 text-center">{error}</div>;
//   if (!products.length) return <div className="text-center py-8">No products available.</div>;

//   return (
//     <section className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
//       <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
//         {products.map((product) => (
//           <Link href={`/producting/${product._id}`} key={product._id} passHref>
//             <div className="flex flex-col items-center p-4 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
//               <div className="w-full flex justify-center">
//                 <img
//                   src={product.productImage.asset.url}
//                   alt={product.title}
//                   className="w-[250px] h-[300px] object-cover"

//                 />
//               </div>
//               <div className="mt-4 text-center">
//                 <h3 className="text-[#252B42] text-[16px] font-bold">{product.title}</h3>
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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;
  if (!products.length)
    return <div className="text-center py-8">No products available.</div>;

  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
        {products.map((product) => (
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
    </section>
  );
}
