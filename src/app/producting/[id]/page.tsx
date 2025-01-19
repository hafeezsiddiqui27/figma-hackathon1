// // import { client } from "@/sanity/lib/client";
// // import { notFound } from "next/navigation";
// // import { AiOutlineHeart } from "react-icons/ai";
// // import Nav1 from "@/app/components/Nav/Nav1";
// // import NavLight from "@/app/components/Nav/NavLight";
// // import AddToBag from "@/app/components/AddToBag";

// // // Define a color map for Tailwind classes
// // const colorMap: Record<string, string> = {
// //   black: "bg-black",
// //   blue: "bg-blue-500",
// //   red: "bg-red-500",
// //   green: "bg-green-500",
// //   yellow: "bg-yellow-500",
// //   gray: "bg-gray-500",
// //   white: "bg-white",
// //   pink: "bg-pink-500",
// //   purple: "bg-purple-500",
// // };

// // type Product = {
// //   _id: string;
// //   name: string;
// //   price: number;
// //   discountPercentage: number;
// //   priceWithoutDiscount: number;
// //   availability: string;
// //   description: string;
// //   availableColors: string[];
// //   rating: number;
// //   image: string;
// // };

// // export async function generateStaticParams() {
// //   const products = await client.fetch(`*[_type == "product"]{_id}`);
// //   console.log("Static Params Products:", products); // Debugging
// //   return products.map((product: { _id: string }) => ({
// //     id: product._id,
// //   }));
// // }

// // const ProductPage = async ({ params }: { params: { id: string } }) => {
// //   console.log("Params ID:", params.id); // Debugging

// //   const product: Product | null = await client.fetch(`
// //     *[_type == "producting"] {
// //       _id,
// //       title,
// //       description,
// //       price,
// //       priceWithoutDiscount,
// //       rating,
// //       ratingCount,
// //       productImage {
// //         asset -> {
// //           url
// //         }
// //       },
// //       isNew,
// //       tags
// //     }
// //   `,
// //     { id: params.id }
// //   );
// //   console.log("Fetched Product:", product);
// //   if (!product) {
// //     console.error("Product not found for ID:", params.id); // Debugging
// //     notFound();
// //     return null; // This line prevents further execution
// //   }

// //   const discountedPrice =
// //     product.price - (product.price * product.discountPercentage) / 100;

// //   return (
// //     <div>
// //       <Nav1 />
// //       <NavLight />
// //       <div className="flex flex-col justify-center ml-20 mt-16 md:flex-row gap-8">
// //         {/* Left: Product Image */}
// //         <div className="w-full md:w-[606px] h-[400px] overflow-hidden flex justify-center">
// //           <img
// //             src={product.image || "/placeholder.png"}
// //             alt={product.name}
// //             className="w-full h-full object-cover"
// //           />
// //         </div>

// //         {/* Right: Product Details */}
// //         <div className="w-full md:w-[calc(100%-506px)]">
// //           {/* Title */}
// //           <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

// //           {/* Rating */}
// //           <div className="flex items-center mb-4">
// //             <span className="text-yellow-500 text-3xl">
// //               {"★".repeat(Math.floor(product.rating))}{" "}
// //               {product.rating % 1 !== 0 && "☆"}
// //             </span>
// //           </div>

// //           {/* Price */}
// //           <p className="text-[#BDBDBD] text-[20px] font-bold mt-2">
// //             <span className="line-through text-gray-500">
// //               ${product.price.toFixed(2)}
// //             </span>{" "}
// //             <span className="text-[#23856D]">
// //               ${discountedPrice.toFixed(2)}
// //             </span>
// //           </p>

// //           {/* Availability */}
// //           <p className="text-md text-gray-500 mb-4 my-4">
// //             <strong>Availability:</strong>{" "}
// //             <span
// //               className={
// //                 product.availability === "in-stock"
// //                   ? "text-green-600"
// //                   : "text-red-600"
// //               }
// //             >
// //               {product.availability}
// //             </span>
// //           </p>

// //           {/* Description */}
// //           <div className="prose mb-4 italic text-sm">{product.description}</div>

// //           {/* Color Options */}
// //           {/* {product.availableColors.length > 0 && (
// //             <div className="flex gap-4 mb-4">
// //               <span className="font-semibold">Color:</span> */}
// //               {/* <div className="flex gap-2">
// //                 {product.availableColors.map((color, index) => (
// //                   <button
// //                     key={index}
// //                     className={`w-6 h-6 rounded-full ${
// //                       colorMap[color] || "bg-gray-500"
// //                     }`}
// //                     title={color}
// //                   ></button>
// //                 ))}
// //               </div> */}
// //             </div>
// //           {/* )} */}

// //           {/* Add to Cart and Wishlist */}
// //           <div className="flex gap-4 mt-6">
// //             <AddToBag
// //               currency="USD"
// //               description={product.description}
// //               image={product.image}
// //               name={product.name}
// //               price={product.price}
// //               key={product._id}
// //               price_id={product._id}
// //             />
// //             <button className="flex items-center gap-2 py-2 px-4 border rounded-full text-black hover:bg-red-700">
// //               <AiOutlineHeart />
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //   );
// // };

// // export default ProductPage;
// import { client } from "@/sanity/lib/client";
// import { notFound } from "next/navigation";
// import { AiOutlineHeart } from "react-icons/ai";
// import Nav1 from "@/app/components/Nav/Nav1";
// import NavLight from "@/app/components/Nav/NavLight";
// import AddToBag from "@/app/components/AddToBag";

// // Define a color map for Tailwind classes (for color selections)
// const colorMap: Record<string, string> = {
//   black: "bg-black",
//   blue: "bg-blue-500",
//   red: "bg-red-500",
//   green: "bg-green-500",
//   yellow: "bg-yellow-500",
//   gray: "bg-gray-500",
//   white: "bg-white",
//   pink: "bg-pink-500",
//   purple: "bg-purple-500",
// };

// type Product = {
//   _id: string;
//   title: string;
//   price: number;
//   discountPercentage: number;
//   priceWithoutDiscount: number;
//   availability: string;
//   description: string;
//   availableColors: string[];
//   rating: number;
//   productImage: { asset: { url: string } };
//   tags: string[];
// };

// export async function generateStaticParams() {
//   const products = await client.fetch(`*[_type == "producting"]{_id}`);
//   console.log("Static Params Products:", products); // Debugging
//   return products.map((product: { _id: string }) => ({
//     id: product._id,
//   }));
// }

// const ProductPage = async ({ params }: { params: { id: string } }) => {
//   console.log("Params ID:", params.id); // Debugging

//   const product: Product | null = await client.fetch(
//     `*[_type == "producting" && _id == $id]{
//       _id,
//       title,
//       description,
//       price,
//       priceWithoutDiscount,
//       discountPercentage,
//       rating,
//       tags,
//       productImage {
//         asset -> {
//           url
//         }
//       },
//       availability
//     }[0]`,
//     { id: params.id }
//   );
//   console.log("Fetched Product:", product);

//   if (!product) {
//     console.error("Product not found for ID:", params.id); // Debugging
//     notFound();
//     return null; // This line prevents further execution
//   }

//   const discountedPrice =
//     product.price - (product.price * product.discountPercentage) / 100;

//   return (
//     <div>
//       <Nav1 />
//       <NavLight />
//       <div className="container mx-auto px-4 mt-16 md:mt-24">
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left: Product Image */}
//           <div className="w-full md:w-1/2 h-[400px] overflow-hidden flex justify-center">
//             <img
//               src={product.productImage?.asset.url || "/placeholder.png"}
//               alt={product.title}
//               className="w-full h-full object-cover rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Right: Product Details */}
//           <div className="w-full md:w-1/2">
//             {/* Title */}
//             <h1 className="text-4xl font-semibold text-gray-800 mb-4">{product.title}</h1>

//             {/* Rating */}
//             <div className="flex items-center mb-6">
//               <div className="flex gap-1 text-yellow-500">
//                 {"★".repeat(Math.floor(product.rating))}{" "}
//                 {product.rating % 1 !== 0 && "☆"}
//               </div>
//             </div>

//             {/* Price */}
//             <div className="text-lg font-bold text-gray-800 mb-4">
//               <span className="line-through text-gray-500">
//                 ${product.price.toFixed(2)}
//               </span>{" "}
//               <span className="text-green-500">${discountedPrice.toFixed(2)}</span>
//             </div>

//             {/* Availability */}
//             <p className="text-md text-gray-600 mb-4">
//               <strong>Availability:</strong>{" "}
//               <span
//                 className={`${
//                   product.availability === "in-stock" ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {product.availability}
//               </span>
//             </p>

//             {/* Description */}
//             <div className="prose mb-6 text-sm text-gray-600">{product.description}</div>

//             {/* Tags (optional display) */}
//             <div className="flex gap-3 flex-wrap mb-4">
//               {product.tags.map((tag, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-blue-100 text-blue-700 text-xs py-1 px-3 rounded-full"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Add to Cart and Wishlist */}
//             <div className="flex gap-6 mt-6">
//               <AddToBag
//                 currency="USD"
//                 description={product.description}
//                 image={product.productImage?.asset.url}
//                 name={product.title}
//                 price={product.price}
//                 key={product._id}
//                 price_id={product._id}
//               />
//               <button className="flex items-center gap-2 py-2 px-4 border rounded-full text-black hover:bg-red-700">
//                 <AiOutlineHeart />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
import Nav1 from "@/app/components/Nav/Nav1";
import NavLight from "@/app/components/Nav/NavLight";
import AddToBag from "@/app/components/AddToBag";
import Header from "@/app/components/aboutheader";
import SocialShare from "@/app/components/Share";

// Define a color map for Tailwind classes (for color selections)
const colorMap: Record<string, string> = {
  black: "bg-black",
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  gray: "bg-gray-500",
  white: "bg-white",
  pink: "bg-pink-500",
  purple: "bg-purple-500",
};

type Product = {
  _id: string;
  title: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  availability: string;
  description: string;
  availableColors: string[]; // Optional
  rating: number;
  productImage: { asset: { url: string } };
  tags: string[]; // Optional
};

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "producting"]{_id}`);
  return products.map((product: { _id: string }) => ({
    id: product._id,
  }));
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product: Product | null = await client.fetch(
    `*[_type == "producting" && _id == $id]{
      _id,
      title,
      description,
      price,
      priceWithoutDiscount,
      discountPercentage,
      rating,
      tags,
      productImage {
        asset -> {
          url
        }
      },
      availability,
      availableColors
    }[0]`,
    { id: params.id }
  );

  if (!product) {
    notFound();
    return null;
  }

  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="bg-gray-50">
      <div className="hidden md:block">
        <Nav1 />
        <NavLight />
      </div>

      {/* Header for smaller screens */}
      <div className="md:hidden">
        <Header />
      </div>
      <div className="container mx-auto px-6 mt-16 md:mt-24">
        <div className="flex flex-col lg:flex-row gap-12 bg-white p-8 rounded-xl shadow-lg">
          {/* Left: Product Image */}
          <div className="w-full lg:w-1/2 h-[500px] overflow-hidden flex justify-center rounded-lg shadow-xl">
            <img
              src={product.productImage?.asset.url || "/placeholder.png"}
              alt={product.title}
              className="w-full h-full object-cover transition-all duration-300 transform hover:scale-105"
            />
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2">
            {/* Title */}
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              {product.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex gap-1 text-yellow-500">
                {"★".repeat(Math.floor(product.rating))}{" "}
                {product.rating % 1 !== 0 && "☆"}:{"Rating: Not Specified"}
              </div>
            </div>

            {/* Price */}
            <div className="text-lg font-semibold text-gray-800 mb-6">
              <span className="line-through text-gray-500">
                ${product.price.toFixed(2)}
              </span>{" "}
              <span className="text-green-500">
                ${discountedPrice.toFixed(2)}
              </span>
            </div>

            {/* Availability */}
            <p className="text-md text-gray-600 mb-6">
              <strong>Availability:</strong>
              <span className="text-green-400">In Stock</span>
              <span
                className={`${
                  product.availability === "in-stock"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {product.availability}
              </span>
            </p>

            {/* Color Options */}
            {Array.isArray(product.availableColors) &&
              product.availableColors.length > 0 && (
                <div className="flex gap-4 mb-6">
                  <span className="font-semibold text-gray-600">Color:</span>
                  <div className="flex gap-2">
                    {product.availableColors.map((color, index) => (
                      <button
                        key={index}
                        className={`w-6 h-6 rounded-full ${colorMap[color] || "bg-gray-500"}`}
                        title={color}
                      ></button>
                    ))}
                  </div>
                </div>
              )}

            {/* Tags */}
            {Array.isArray(product.tags) && product.tags.length > 0 && (
              <div className="flex gap-3 flex-wrap mb-6">
                {product.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 text-xs py-1 px-3 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Add to Cart and Wishlist */}
            <div className="flex gap-6 mb-8">
              <AddToBag
                currency="USD"
                description={product.description}
                image={product.productImage?.asset.url}
                name={product.title}
                price={product.price}
                key={product._id}
                price_id={product._id}
              />
              <button className="flex items-center gap-2 py-2 px-4 border rounded-full text-black hover:bg-red-700 transition duration-300">
                <AiOutlineHeart />
              </button>
              <SocialShare />
            </div>
          </div>
        </div>

        {/* Description Below Product Details */}
        <div className="prose text-sm text-gray-700 bg-gray-50 p-6 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product Description
          </h2>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
