// // "use client";

// // import { Button } from "@/components/ui/button";
// // import { useShoppingCart } from "use-shopping-cart";
// // import { AiOutlineDelete } from "react-icons/ai";

// // import Image from "next/image";
// // import Link from "next/link";
// // import EmptyCartPage from "../components/EmptyCart";

// // import AuthGuard from "../components/Checkauth";
// // interface CartEntry {
// //   id: string;
// //   name: string;
// //   price: number;
// //   currency: string;
// //   image?: string;
// //   description?: string;
// //   quantity: number;
// // }

// // export default function CartPage() {
// //   const {
// //     cartCount,
// //     cartDetails,
// //     removeItem,
// //     addItem,
// //     decrementItem,
// //     clearCart,
// //     totalPrice,
// //     redirectToCheckout,
// //   } = useShoppingCart();

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

// //   // Safe totalPrice handling (default to 0 if undefined or null)
// //   const validTotalPrice = totalPrice ?? 0;
  

// //   return (
// //     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-x-hidden">
// //       <AuthGuard >
// //       <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-6">
        
// //         Your Shopping Cart
// //       </h1>
// //       {cartCount === 0 ? (
// //         <EmptyCartPage />
// //       ) : (
// //         <div className="flex flex-col gap-6">
// //           {/* Cart Items */}
// //           <ul className="space-y-3">
// //             {Object.values(cartDetails ?? {}).map((entry: CartEntry) => (
// //               <li
// //                 key={entry.id}
// //                 className="flex items-center justify-between bg-emerald-50 shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
// //               >
// //                 {/* Left: Product Image */}
// //                 <Link href={`/product/${entry.id}`} passHref>
// //                   <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 overflow-hidden rounded-md cursor-pointer">
// //                     <Image
// //                       src={entry.image || "/placeholder.png"} // Fallback for missing image
// //                       alt={entry.name}
// //                       width={64}
// //                       height={64}
// //                       className="object-cover w-full h-full"
// //                     />
// //                   </div>
// //                 </Link>

// //                 {/* Middle: Product Details */}
// //                 <div className="flex-1 ml-3">
// //                   <Link href={`/product/${entry.id}`} passHref>
// //                     <h3 className="text-sm sm:text-base font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
// //                       {entry.name}
// //                     </h3>
// //                   </Link>

// //                   {/* Quantity Selector */}
// //                   <div className="flex items-center space-x-3 mt-1">
// //                     <button
// //                       onClick={() => decrementItem(entry.id)}
// //                       disabled={entry.quantity <= 1}
// //                       className="px-1.5 text-lg font-semibold text-red-800 disabled:opacity-50 transition duration-200"
// //                     >
// //                       -
// //                     </button>
// //                     <span className="text-sm text-gray-600">
// //                       Qty: {entry.quantity}
// //                     </span>
// //                     <button
// //                       onClick={() => addItem({ ...entry, quantity: 1 })}
// //                       className="px-1.5 text-lg font-semibold text-green-600 transition duration-200"
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                 </div>

// //                 {/* Right: Price and Remove Button */}
// //                 <div className="flex flex-col items-end">
// //                   <p className="text-sm sm:text-base font-semibold text-gray-900">
// //                     ${entry.price}
// //                   </p>
// //                   <button
// //                     onClick={() => removeItem(entry.id)}
// //                     className="text-red-500 hover:text-red-700 mt-1"
// //                   >
// //                     <AiOutlineDelete className="w-5 h-5" />
// //                   </button>
// //                 </div>
// //               </li>
// //             ))}
// //           </ul>

// //           {/* Cart Summary (Unchanged) */}
// //           <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
// //             {/* Subtotal */}
// //             <div className="flex justify-between text-lg font-semibold text-gray-900">
// //               <p>Total:</p>
// //               <p>${validTotalPrice}</p>
// //             </div>

// //             {/* Voucher Input */}

// //             {/* Total (after applying voucher) */}

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
// //                 <Link
// //                   href="/"
// //                   className="font-medium text-green-600 hover:text-green-500"
// //                 >
// //                   Continue Shopping
// //                 </Link>
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
// //               </div>
              
// //             </div>
          
// //         )}
// //         </AuthGuard>
// //     </div>
// //   );
// // }
// "use client";

// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";
// import { AiOutlineDelete } from "react-icons/ai";
// import Image from "next/image";
// import Link from "next/link";
// import EmptyCartPage from "../components/EmptyCart";
// import AuthGuard from "../components/Checkauth";
// import { loadStripe } from "@stripe/stripe-js";

// // Load Stripe with your public key
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || "");

// interface CartEntry {
//   id: string;
//   name: string;
//   price: number;
//   currency: string;
//   image?: string;
//   description?: string;
//   quantity: number;
// }

// export default function CartPage() {
//   const {
//     cartCount,
//     cartDetails,
//     removeItem,
//     addItem,
//     decrementItem,
//     clearCart,
//     totalPrice,
//     redirectToCheckout,
//   } = useShoppingCart();

//   // Handle checkout redirection
//   async function handleCheckoutClick(event: React.MouseEvent) {
//     event.preventDefault();

//     // Prepare cart items for Stripe Checkout
//     const lineItems = Object.values(cartDetails ?? {}).map((entry: CartEntry) => ({
//       price_data: {
//         currency: entry.currency,
//         product_data: {
//           name: entry.name,
//           images: [entry.image || "/placeholder.png"], // Fallback for missing image
//         },
//         unit_amount: entry.price * 100, // Stripe expects the amount in cents
//       },
//       quantity: entry.quantity,
//     }));

//     try {
//       // Make API request to create the Checkout session
//       const response = await fetch("/api/checkout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ lineItems }),
//       });

//       const { sessionId } = await response.json();

//       // Redirect to Stripe Checkout
//       const stripe = await stripePromise;
//       if (stripe) {
//         const { error } = await stripe.redirectToCheckout({ sessionId });
//         if (error) {
//           console.error("Stripe Checkout Error:", error);
//         }
//       }
//     } catch (error) {
//       console.error("Error during checkout:", error);
//     }
//   }

//   // Safe totalPrice handling (default to 0 if undefined or null)
//   const validTotalPrice = totalPrice ?? 0;

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-x-hidden">
//       <AuthGuard>
//         <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-6">
//           Your Shopping Cart
//         </h1>
//         {cartCount === 0 ? (
//           <EmptyCartPage />
//         ) : (
//           <div className="flex flex-col gap-6">
//             {/* Cart Items */}
//             <ul className="space-y-3">
//               {Object.values(cartDetails ?? {}).map((entry: CartEntry) => (
//                 <li
//                   key={entry.id}
//                   className="flex items-center justify-between bg-emerald-50 shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
//                 >
//                   {/* Left: Product Image */}
//                   <Link href={`/product/${entry.id}`} passHref>
//                     <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 overflow-hidden rounded-md cursor-pointer">
//                       <Image
//                         src={entry.image || "/placeholder.png"} // Fallback for missing image
//                         alt={entry.name}
//                         width={64}
//                         height={64}
//                         className="object-cover w-full h-full"
//                       />
//                     </div>
//                   </Link>

//                   {/* Middle: Product Details */}
//                   <div className="flex-1 ml-3">
//                     <Link href={`/product/${entry.id}`} passHref>
//                       <h3 className="text-sm sm:text-base font-semibold text-gray-900 cursor-pointer hover:text-blue-600">
//                         {entry.name}
//                       </h3>
//                     </Link>

//                     {/* Quantity Selector */}
//                     <div className="flex items-center space-x-3 mt-1">
//                       <button
//                         onClick={() => decrementItem(entry.id)}
//                         disabled={entry.quantity <= 1}
//                         className="px-1.5 text-lg font-semibold text-red-800 disabled:opacity-50 transition duration-200"
//                       >
//                         -
//                       </button>
//                       <span className="text-sm text-gray-600">
//                         Qty: {entry.quantity}
//                       </span>
//                       <button
//                         onClick={() => addItem({ ...entry, quantity: 1 })}
//                         className="px-1.5 text-lg font-semibold text-green-600 transition duration-200"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>

//                   {/* Right: Price and Remove Button */}
//                   <div className="flex flex-col items-end">
//                     <p className="text-sm sm:text-base font-semibold text-gray-900">
//                       ${entry.price}
//                     </p>
//                     <button
//                       onClick={() => removeItem(entry.id)}
//                       className="text-red-500 hover:text-red-700 mt-1"
//                     >
//                       <AiOutlineDelete className="w-5 h-5" />
//                     </button>
//                   </div>
//                 </li>
//               ))}
//             </ul>

//             {/* Cart Summary */}
//             <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
//               {/* Subtotal */}
//               <div className="flex justify-between text-lg font-semibold text-gray-900">
//                 <p>Total:</p>
//                 <p>${validTotalPrice}</p>
//               </div>

//               {/* Voucher Input */}
//               {/* Voucher logic can go here */}

//               {/* Total (after applying voucher) */}
//               <p className="mt-2 text-sm text-gray-500">
//                 Shipping and taxes are calculated at checkout.
//               </p>

//               {/* Checkout Button */}
//               <div className="mt-6">
//                 <Button
//                   onClick={handleCheckoutClick}
//                   className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md"
//                 >
//                   Proceed to Checkout
//                 </Button>
//               </div>

//               {/* Continue Shopping Button */}
//               <div className="mt-6 text-center text-sm text-gray-500">
//                 <p>
//                   OR{" "}
//                   <Link
//                     href="/"
//                     className="font-medium text-green-600 hover:text-green-500"
//                   >
//                     Continue Shopping
//                   </Link>
//                 </p>
//               </div>

//               {/* Clear Cart Button */}
//               <div className="mt-6 text-center">
//                 <Button
//                   onClick={clearCart}
//                   className="bg-red-600 text-white hover:bg-red-700 w-full py-3 rounded-md"
//                 >
//                   Clear Cart
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </AuthGuard>
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
import AuthGuard from "../components/Checkauth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const {
    cartCount,
    cartDetails,
    removeItem,
    addItem,
    decrementItem,
    clearCart,
    totalPrice,
  } = useShoppingCart();
  const router = useRouter();

  // Safe totalPrice handling (default to 0 if undefined or null)
  const validTotalPrice = totalPrice ?? 0;

  // Redirect to Checkout when Proceed to Checkout is clicked
  const handleCheckoutClick = () => {
    // Redirect to the checkout page
    router.push("/checkout");
  };

  useEffect(() => {
    // Redirect to the cart page if the cart is empty
    if (cartCount === 0) {
      router.push("/cart");
    }
  }, [cartCount, router]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 overflow-x-hidden">
      <AuthGuard>
        <h1 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-6">
          Your Shopping Cart
        </h1>
        {cartCount === 0 ? (
          <EmptyCartPage />
        ) : (
          <div className="flex flex-col gap-6">
            {/* Cart Items */}
            <ul className="space-y-3">
              {Object.values(cartDetails ?? {}).map((entry) => (
                <li
                  key={entry.id}
                  className="flex items-center justify-between bg-emerald-50 shadow-sm rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                >
                  {/* Left: Product Image */}
                  <Link href={`/product/${entry.id}`} passHref>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 overflow-hidden rounded-md cursor-pointer">
                      <Image
                        src={entry.image || "/placeholder.png"}
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

            {/* Cart Summary */}
            <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
              {/* Subtotal */}
              <div className="flex justify-between text-lg font-semibold text-gray-900">
                <p>Total:</p>
                <p>${validTotalPrice}</p>
              </div>

              {/* Voucher Input */}
              {/* Voucher logic can go here */}

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

              {/* Continue Shopping Button */}
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

              {/* Clear Cart Button */}
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
      </AuthGuard>
    </div>
  );
}
