 "use client";

// // // import { useShoppingCart } from "use-shopping-cart";
// // // // import { urlFor } from "@/sanity/lib/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

// // // export interface ProductCart {
// // //   name: string;
// // //   description: string;
// // //   price: number;
// // //   currency: string;
// // //   image: any;
// // //   price_id: string;
// // // }

// // // export default function AddToBag({
// // //   currency,
// // //   description,
// // //   image,
// // //   name,
// // //   price,
// // //   price_id,
// // // }: ProductCart) {
// // //   const { addItem, handleCartClick } = useShoppingCart();

// // //   const product = {
// // //     name: name,
// // //     description: description,
// // //     price: price,
// // //     currency: currency,
// // //     // image: urlFor(image).url(),
// // //     image: image,
// // //     price_id: price_id,
// // //   };
// // //   return (
// // //     <button
// // //       className="flex items-center gap-2 py-2 px-4 border rounded-full text-black hover:bg-green-400"
// // //       onClick={() => {
// // //         addItem(product), handleCartClick();
// // //       }}
// // //     >
// // //       <AiOutlineShoppingCart />
// // //     </button>
// // //   );
// // // }
// // "use client";

// // import { useShoppingCart } from "use-shopping-cart";
// // import { AiOutlineShoppingCart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// // export interface ProductCart {
// //   name: string;
// //   description: string;
// //   price: number;
// //   currency: string;
// //   image: string; // Changed to `string` from `any`
// //   price_id: string;
// // }

// // export default function AddToBag({
// //   currency,
// //   description,
// //   image,
// //   name,
// //   price,
// //   price_id,
// // }: ProductCart) {
// //   const { addItem, removeItem, cartDetails, handleCartClick } = useShoppingCart();

// //   const product = {
// //     name: name,
// //     description: description,
// //     price: price,
// //     currency: currency,
// //     image: image,
// //     price_id: price_id,
// //   };

// //   const handleAddToBag = () => {
// //     addItem(product); // Adds the product to the cart
// //     handleCartClick(); // Handle the cart click
// //   };

// //   const handleIncreaseQuantity = (productId: string) => {
// //     if (cartDetails && cartDetails[productId]) {
// //       const item = cartDetails[productId];
// //       // Adding the item again to increase the quantity
// //       addItem({
// //         ...item,
// //         quantity: item.quantity + 1, // Increment the quantity by 1
// //       });
// //     }
// //   };

// //   const handleDecreaseQuantity = (productId: string) => {
// //     if (cartDetails && cartDetails[productId]) {
// //       const item = cartDetails[productId];
// //       if (item.quantity > 1) {
// //         // Decrease quantity by removing and re-adding the item
// //         addItem({
// //           ...item,
// //           quantity: item.quantity - 1, // Decrement the quantity by 1
// //         });
// //       } else {
// //         // Remove the item if the quantity is 1
// //         removeItem(productId);
// //       }
// //     }
// //   };

// //   return (
// //     <div>
// //       <button
// //         className="flex items-center gap-2 py-2 px-4 border rounded-full text-black hover:bg-green-400"
// //         onClick={handleAddToBag}
// //       >
// //         <AiOutlineShoppingCart />
// //       </button>

// //       {/* Quantity Buttons */}
// //       <div className="flex items-center gap-2 mt-4">
// //         <button
// //           onClick={() => handleDecreaseQuantity(price_id)} // Decrease quantity
// //           className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50"
// //         >
// //           <AiOutlineMinus />
// //         </button>

// //         {/* Quantity Display */}
// //         <span className="text-lg">
// //           {cartDetails && cartDetails[price_id]?.quantity ? cartDetails[price_id].quantity : 0}
// //         </span>

// //         <button
// //           onClick={() => handleIncreaseQuantity(price_id)} // Increase quantity
// //           className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
// //         >
// //           <AiOutlinePlus />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useShoppingCart } from "use-shopping-cart";
// import { AiOutlineShoppingCart } from "react-icons/ai";

// export interface ProductCart {
//   name: string;
//   description: string;
//   price: number;
//   currency: string;
//   image: string; // Updated type to string for image URL
//   price_id: string;
// }

// export default function AddToBag({
//   currency,
//   description,
//   image,
//   name,
//   price,
//   price_id,
// }: ProductCart) {
//   const { addItem, handleCartClick } = useShoppingCart();

//   const product = {
//     name: name,
//     description: description,
//     price: price,
//     currency: currency,
//     image: image,
//     price_id: price_id,
//   };

//   return (
//     <button
//       className="flex items-center gap-2 py-2 px-4 border rounded-full text-black hover:bg-green-400"
//       onClick={() => {
//         addItem(product);
//         handleCartClick();
//       }}
//     >
//       <AiOutlineShoppingCart />
//     </button>
//   );
// }

import { useShoppingCart } from "use-shopping-cart";

interface AddToBagProps {
  currency: string;
  description: string;
  image: string;
  name: string;
  price: number;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: AddToBagProps) {
  const { addItem } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: image,
    price_id: price_id,
  };

  return (
    <button
      onClick={() => addItem(product)}
      className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
    >
      <AiOutlineShoppingCart />
    </button>
  );
}
