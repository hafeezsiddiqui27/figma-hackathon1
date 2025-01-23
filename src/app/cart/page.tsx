// // "use client";

// // import { Button } from "@/components/ui/button";
// // import { useShoppingCart } from "use-shopping-cart";
// // import { AiOutlineDelete, AiOutlineLink } from "react-icons/ai"; // Delete and Link icons
// // import { useState } from "react";
// // import Image from "next/image";

// // interface CartEntry {
// //   id: string;
// //   name: string;
// //   price: number;
// //   currency: string;
// //   image?: string; // Make `image` optional
// //   description?: string;
// //   quantity: number;
// // }

// // export default function CartPage() {
// //   const {
// //     cartCount,
// //     cartDetails,
// //     removeItem,
// //     addItem,
// //     decrementItem, // Add decrementItem
// //     clearCart,
// //     totalPrice,
// //     redirectToCheckout,
// //   } = useShoppingCart();

// //   const [voucher, setVoucher] = useState("");
// //   const [voucherApplied, setVoucherApplied] = useState(false);
// //   const [discount, setDiscount] = useState(0);

// //   // Handle checkout redirection
// //   async function handleCheckoutClick(event: React.MouseEvent) {
// //     event.preventDefault();
// //     try {
// //       const result = await redirectToCheckout();
// //       if (result?.error) {
// //         console.log("Checkout Error:", result.error);
// //       }
// //     } catch (error) {
// //       console.log("Error during checkout:", error);
// //     }
// //   }

// //   // Apply voucher logic
// //   function applyVoucher() {
// //     if (voucher === "DISCOUNT10") {
// //       setDiscount(10); // Example: 10% discount
// //       setVoucherApplied(true);
// //     } else {
// //       setVoucherApplied(false);
// //     }
// //   }

// //   // Safe totalPrice handling (default to 0 if undefined or null)
// //   const validTotalPrice = totalPrice ?? 0;

// //   return (
// //     <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
// //       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
// //         Your Shopping Cart
// //       </h1>
// //       {cartCount === 0 ? (
// //         <div className="text-center py-10">
// //           <h2 className="text-lg text-gray-700">Your cart is empty!</h2>
// //           <p className="mt-4 text-gray-500">
// //             Start adding items to see them here.
// //           </p>
// //         </div>
// //       ) : (
// //         <div className="flex flex-col gap-10">
// //           <ul className="space-y-6">
// //             {Object.values(cartDetails ?? {}).map((entry: CartEntry) => (
// //               <li
// //                 key={entry.id}
// //                 className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
// //               >
// //                 {/* Left: Product Image */}
// //                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
// //                   <Image
// //                     src={entry.image || "/placeholder.png"} // Fallback for missing image
// //                     alt={entry.name}
// //                     width={100}
// //                     height={100}
// //                     className="object-contain"
// //                   />
// //                 </div>
// //                 {/* Right: Product Details */}
// //                 <div className="flex-1 sm:ml-6 mt-4 sm:mt-0">
// //                   <div className="flex justify-between items-center mb-3">
// //                     <h3 className="text-xl font-semibold text-gray-900">
// //                       {entry.name}
// //                     </h3>
// //                     <p className="text-xl font-semibold text-gray-900">
// //                       ${entry.price}
// //                     </p>
// //                   </div>

// //                   {/* Description Preview */}
// //                   <p className="mt-2 text-sm text-gray-600">
// //                     {entry.description
// //                       ? entry.description.length > 30
// //                         ? entry.description.slice(0, 30) + "..."
// //                         : entry.description
// //                       : "No description available"}
// //                   </p>
// //                   <a
// //                     href={`/product/${entry.id}`}
// //                     className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
// //                   >
// //                     <AiOutlineLink className="inline-block w-4 h-4 mr-1" /> View
// //                     Product
// //                   </a>

// //                   {/* Subtotal */}
// //                   <div className="mt-2 text-sm text-gray-600">
// //                     Subtotal: ${entry.price * entry.quantity}
// //                   </div>

// //                   {/* Quantity Selector */}
// //                   <div className="flex items-center mt-4 space-x-6">
// //                     {/* Decrease Quantity Button */}
// //                     <button
// //                       onClick={() => decrementItem(entry.id)} // Use decrementItem
// //                       disabled={entry.quantity <= 1}
// //                       className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition duration-200"
// //                     >
// //                       -
// //                     </button>
// //                     <span className="text-lg text-gray-600">
// //                       Qty: {entry.quantity}
// //                     </span>
// //                     {/* Increase Quantity Button */}
// //                     <button
// //                       onClick={() => addItem({ ...entry, quantity: 1 })} // Use addItem to increase
// //                       className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
// //                     >
// //                       +
// //                     </button>
// //                     {/* Remove Item Button */}
// //                     <button
// //                       onClick={() => removeItem(entry.id)}
// //                       className="ml-auto text-red-500 hover:text-red-700 mt-2"
// //                     >
// //                       <AiOutlineDelete className="w-6 h-6 " />
// //                     </button>
// //                   </div>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>

// //           {/* Cart Summary */}
// //           <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
// //             {/* Subtotal */}
// //             <div className="flex justify-between text-lg font-semibold text-gray-900">
// //               <p>Subtotal:</p>
// //               <p>${validTotalPrice}</p>
// //             </div>

// //             {/* Voucher Input */}
// //             <div className="mt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
// //               <input
// //                 type="text"
// //                 value={voucher}
// //                 onChange={(e) => setVoucher(e.target.value)}
// //                 placeholder="Enter voucher code"
// //                 className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-3/4 mb-2 sm:mb-0"
// //               />
// //               <Button
// //                 onClick={applyVoucher}
// //                 className="w-full sm:w-1/4 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md"
// //               >
// //                 Apply
// //               </Button>
// //             </div>
// //             {voucherApplied && (
// //               <p className="mt-4 text-green-600">Voucher applied! 10% off</p>
// //             )}

// //             {/* Total (after applying voucher) */}
// //             <div className="flex justify-between text-lg font-semibold text-gray-900 mt-4">
// //               <p>Total:</p>
// //               <p>
// //                 ${discount > 0
// //                   ? validTotalPrice - (validTotalPrice * discount) / 100
// //                   : validTotalPrice}
// //               </p>
// //             </div>

// //             <p className="mt-2 text-sm text-gray-500">
// //               Shipping and taxes are calculated at checkout.
// //             </p>

// //             {/* Checkout Button */}
// //             <div className="mt-6">
// //               <Button
// //                 onClick={handleCheckoutClick}
// //                 className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md"
// //               >
// //                 Proceed to Checkout
// //               </Button>
// //             </div>
// //             <div className="mt-6 text-center text-sm text-gray-500">
// //               <p>
// //                 OR{" "}
// //                 <a
// //                   href="/"
// //                   className="font-medium text-green-600 hover:text-green-500"
// //                 >
// //                   Continue Shopping
// //                 </a>
// //               </p>
// //             </div>
// //             <div className="mt-6 text-center">
// //               <Button
// //                 onClick={clearCart}
// //                 className="bg-red-600 text-white hover:bg-red-700 w-full py-3 rounded-md"
// //               >
// //                 Clear Cart
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }
// "use client";

// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";
// import { AiOutlineDelete } from "react-icons/ai"; // Removed Link icon import
// import { useState } from "react";
// import Image from "next/image";
// import Link from "next/link"; // Import Link from Next.js

// interface CartEntry {
//   id: string;
//   name: string;
//   price: number;
//   currency: string;
//   image?: string; // Make `image` optional
//   description?: string;
//   quantity: number;
// }

// export default function CartPage() {
//   const {
//     cartCount,
//     cartDetails,
//     removeItem,
//     addItem,
//     decrementItem, // Add decrementItem
//     clearCart,
//     totalPrice,
//     redirectToCheckout,
//   } = useShoppingCart();

//   const [voucher, setVoucher] = useState("");
//   const [voucherApplied, setVoucherApplied] = useState(false);
//   const [discount, setDiscount] = useState(0);

//   // Handle checkout redirection
//   async function handleCheckoutClick(event: React.MouseEvent) {
//     event.preventDefault();
//     try {
//       const result = await redirectToCheckout();
//       if (result?.error) {
//         console.log("Checkout Error:", result.error);
//       }
//     } catch (error) {
//       console.log("Error during checkout:", error);
//     }
//   }

//   // Apply voucher logic
//   function applyVoucher() {
//     if (voucher === "DISCOUNT10") {
//       setDiscount(10); // Example: 10% discount
//       setVoucherApplied(true);
//     } else {
//       setVoucherApplied(false);
//     }
//   }

//   // Safe totalPrice handling (default to 0 if undefined or null)
//   const validTotalPrice = totalPrice ?? 0;

//   return (
//     <div className="container mx-auto  px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
//         Your Shopping Cart
//       </h1>
//       {cartCount === 0 ? (
//         <div className="text-center py-10">
//           <h2 className="text-lg text-gray-700">Your cart is empty!</h2>
//           <p className="mt-4 text-gray-500">
//             Start adding items to see them here.
//           </p>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-10">
//           <ul className="space-y-6">
//             {Object.values(cartDetails ?? {}).map((entry: CartEntry) => (
//               <li
//                 key={entry.id}
//                 className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
//               >
//                 {/* Left: Product Image */}
//                 <Link href={`/product/${entry.id}`} passHref>
//                   <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md  cursor-pointer ">
//                     <Image
//                       src={entry.image || "/placeholder.png"} // Fallback for missing image
//                       alt={entry.name}
//                       width={80}
//                       height={80}
//                       className="object-contain mt-6"
//                     />
//                   </div>
//                 </Link>

//                 {/* Right: Product Details */}
//                 <div className="flex-1 sm:ml-6  sm:mt-0">
//                   <div className="flex justify-between items-center ">
//                     <Link href={`/product/${entry.id}`} passHref>
//                       <h3 className="text-xl font-semibold text-gray-900 cursor-pointer">
//                         {entry.name}
//                       </h3>
//                     </Link>
//                     <div className="flex flex-col">
//                     <p className="text-xl font-semibold text-gray-900">
//                       ${entry.price}
//                     </p>
//                     <div className=" text-sm text-gray-600 relative right-0">
//                     Subtotal: ${entry.price * entry.quantity}
//                       </div>
//                       <button
//                       onClick={() => removeItem(entry.id)}
//                       className="ml-auto text-red-500 hover:text-red-700 mt-4 mr-4"
//                     >
//                       <AiOutlineDelete className="w-6 h-6 " />
//                     </button>

//                       </div>
//                   </div>

//                   {/* Subtotal */}

//                   {/* Quantity Selector */}
//                   <div className="flex items-center  space-x-6">
//                     {/* Decrease Quantity Button */}
//                     <button
//                       onClick={() => decrementItem(entry.id)} // Use decrementItem
//                       disabled={entry.quantity <= 1}
//                       className="px-2 text-lg font-semibold text-red-600 disabled:opacity-50 transition duration-200"
//                     >
//                       -
//                     </button>
//                     <span className="text-lg text-gray-600">
//                       Qty: {entry.quantity}
//                     </span>
//                     {/* Increase Quantity Button */}
//                     <button
//                       onClick={() => addItem({ ...entry, quantity: 1 })} // Use addItem to increase
//                       className="px-2  text-lg font-semibold text-green-600 transition duration-200"
//                     >
//                       +
//                     </button>
//                     {/* Remove Item Button */}

//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>

//           {/* Cart Summary */}
//           <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
//             {/* Subtotal */}
//             <div className="flex justify-between text-lg font-semibold text-gray-900">
//               <p>Subtotal:</p>
//               <p>${validTotalPrice}</p>
//             </div>

//             {/* Voucher Input */}
//             <div className="mt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
//               <input
//                 type="text"
//                 value={voucher}
//                 onChange={(e) => setVoucher(e.target.value)}
//                 placeholder="Enter voucher code"
//                 className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-3/4 mb-2 sm:mb-0"
//               />
//               <Button
//                 onClick={applyVoucher}
//                 className="w-full sm:w-1/4 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md"
//               >
//                 Apply
//               </Button>
//             </div>
//             {voucherApplied && (
//               <p className="mt-4 text-green-600">Voucher applied! 10% off</p>
//             )}

//             {/* Total (after applying voucher) */}
//             <div className="flex justify-between text-lg font-semibold text-gray-900 mt-4">
//               <p>Total:</p>
//               <p>
//                 ${discount > 0
//                   ? validTotalPrice - (validTotalPrice * discount) / 100
//                   : validTotalPrice}
//               </p>
//             </div>

//             <p className="mt-2 text-sm text-gray-500">
//               Shipping and taxes are calculated at checkout.
//             </p>

//             {/* Checkout Button */}
//             <div className="mt-6">
//               <Button
//                 onClick={handleCheckoutClick}
//                 className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md"
//               >
//                 Proceed to Checkout
//               </Button>
//             </div>
//             <div className="mt-6 text-center text-sm text-gray-500">
//               <p>
//                 OR{" "}
//                 <a
//                   href="/"
//                   className="font-medium text-green-600 hover:text-green-500"
//                 >
//                   Continue Shopping
//                 </a>
//               </p>
//             </div>
//             <div className="mt-6 text-center">
//               <Button
//                 onClick={clearCart}
//                 className="bg-red-600 text-white hover:bg-red-700 w-full py-3 rounded-md"
//               >
//                 Clear Cart
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { AiOutlineDelete } from "react-icons/ai";

import Image from "next/image";
import Link from "next/link";
import EmptyCartPage from "../components/EmptyCart";

interface CartEntry {
  id: string;
  name: string;
  price: number;
  currency: string;
  image?: string;
  description?: string;
  quantity: number;
}

export default function CartPage() {
  const {
    cartCount,
    cartDetails,
    removeItem,
    addItem,
    decrementItem,
    clearCart,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  // Handle checkout redirection
  async function handleCheckoutClick(event: React.MouseEvent) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("Checkout Error:", result.error);
      }
    } catch (error) {
      console.log("Error during checkout:", error);
    }
  }

  // Apply voucher logic

  // Safe totalPrice handling (default to 0 if undefined or null)
  const validTotalPrice = totalPrice ?? 0;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-x-hidden">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-6">
        Your Shopping Cart
      </h1>
      {cartCount === 0 ? (
        <EmptyCartPage />
      ) : (
        <div className="flex flex-col gap-6">
          {/* Cart Items */}
          <ul className="space-y-3">
            {Object.values(cartDetails ?? {}).map((entry: CartEntry) => (
              <li
                key={entry.id}
                className="flex items-center justify-between bg-emerald-50 shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
              >
                {/* Left: Product Image */}
                <Link href={`/product/${entry.id}`} passHref>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 overflow-hidden rounded-md cursor-pointer">
                    <Image
                      src={entry.image || "/placeholder.png"} // Fallback for missing image
                      alt={entry.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </Link>

                {/* Middle: Product Details */}
                <div className="flex-1 ml-3">
                  <Link href={`/product/${entry.id}`} passHref>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
                      {entry.name}
                    </h3>
                  </Link>

                  {/* Quantity Selector */}
                  <div className="flex items-center space-x-3 mt-1">
                    <button
                      onClick={() => decrementItem(entry.id)}
                      disabled={entry.quantity <= 1}
                      className="px-1.5 text-lg font-semibold text-red-800 disabled:opacity-50 transition duration-200"
                    >
                      -
                    </button>
                    <span className="text-sm text-gray-600">
                      Qty: {entry.quantity}
                    </span>
                    <button
                      onClick={() => addItem({ ...entry, quantity: 1 })}
                      className="px-1.5 text-lg font-semibold text-green-600 transition duration-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Right: Price and Remove Button */}
                <div className="flex flex-col items-end">
                  <p className="text-sm sm:text-base font-semibold text-gray-900">
                    ${entry.price}
                  </p>
                  <button
                    onClick={() => removeItem(entry.id)}
                    className="text-red-500 hover:text-red-700 mt-1"
                  >
                    <AiOutlineDelete className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart Summary (Unchanged) */}
          <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
            {/* Subtotal */}
            <div className="flex justify-between text-lg font-semibold text-gray-900">
              <p>Total:</p>
              <p>${validTotalPrice}</p>
            </div>

            {/* Voucher Input */}

            {/* Total (after applying voucher) */}

            <p className="mt-2 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            {/* Checkout Button */}
            <div className="mt-6">
              <Button
                onClick={handleCheckoutClick}
                className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md"
              >
                Proceed to Checkout
              </Button>
            </div>
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <Link
                  href="/"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Continue Shopping
                </Link>
              </p>
            </div>
            <div className="mt-6 text-center">
              <Button
                onClick={clearCart}
                className="bg-red-600 text-white hover:bg-red-700 w-full py-3 rounded-md"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
