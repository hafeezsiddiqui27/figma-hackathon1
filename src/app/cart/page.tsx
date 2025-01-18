// // // // //                 <div className="flex-1 ml-6">
// // // // //                   <div className="flex justify-between items-center mb-3">
// // // // //                     <h3 className="text-xl font-semibold text-gray-900">{entry.name}</h3>
// // // // //                     <p className="text-xl font-semibold text-gray-900">${entry.price}</p>
// // // // //                   </div>

// // // // //                   {/* Description Preview */}
// // // // //                   <p className="mt-1 text-sm text-gray-500">

// // // // //                   {entry.description
// // // // //                     ? entry.description.length > 60
// // // // //                       ? entry.description.slice(0, 60) + "..."
// // // // //                       : entry.description
// // // // //                     : "No description available"}
// // // // //                 </p>
// // // // //                   <a
// // // // //                     href={`/product/${entry.id}`}
// // // // //                     className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
// // // // //                   >
// // // // //                     <AiOutlineLink className="inline-block w-4 h-4 mr-1" /> View Product
// // // // //                   </a>

// // // // //                   {/* Quantity Selector */}
// // // // //                   <div className="flex items-center mt-4 space-x-6">
// // // // //                     <button
// // // // //                       onClick={() => handleQuantityChange(entry, "decrease")}
// // // // //                       disabled={entry.quantity <= 1}
// // // // //                       className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition duration-200"
// // // // //                     >
// // // // //                       -
// // // // //                     </button>
// // // // //                     <span className="text-lg text-gray-600">Qty: {entry.quantity}</span>
// // // // //                     <button
// // // // //                       onClick={() => handleQuantityChange(entry, "increase")}
// // // // //                       className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
// // // // //                     >
// // // // //                       +
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Remove Button */}
// // // // //                 <button
// // // // //                   onClick={() => removeItem(entry.id)}
// // // // //                   className="ml-4 text-red-500 hover:text-red-700"
// // // // //                 >
// // // // //                   <AiOutlineDelete className="w-6 h-6" />
// // // // //                 </button>
// // // // //               </li>
// // // // //             ))}
// // // // //           </ul>

// // // // //           {/* Cart Summary */}
// // // // //           <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
// // // // //             <div className="flex justify-between text-lg font-semibold text-gray-900">
// // // // //               <p>Total:</p>
// // // // //               <p>${totalPrice}</p>
// // // // //             </div>
// // // // //             <p className="mt-2 text-sm text-gray-500">
// // // // //               Shipping and taxes are calculated at checkout.
// // // // //             </p>
// // // // //             <div className="mt-6">
// // // // //               <Button
// // // // //                 onClick={handleCheckoutClick}
// // // // //                 className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md"
// // // // //               >
// // // // //                 Proceed to Checkout
// // // // //               </Button>
// // // // //             </div>
// // // // //             <div className="mt-6 text-center text-sm text-gray-500">
// // // // //               <p>
// // // // //                 OR{" "}
// // // // //                 <a
// // // // //                   href="/"
// // // // //                   className="font-medium text-green-600 hover:text-green-500"
// // // // //                 >
// // // // //                   Continue Shopping
// // // // //                 </a>
// // // // //               </p>
// // // // //             </div>
// // // // //             <div className="mt-6 text-center">
// // // // //               <Button
// // // // //                 onClick={clearCart}
// // // // //                 className="bg-red-600 text-white hover:bg-red-700 w-full py-3 rounded-md"
// // // // //               >
// // // // //                 Clear Cart
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // "use client";

// // // // import { Button } from "@/components/ui/button";
// // // // import { useShoppingCart } from "use-shopping-cart";
// // // // import { AiOutlineDelete, AiOutlineLink } from "react-icons/ai"; // Delete and Link icons
// // // // import { useState } from "react";

// // // // export default function CartPage() {
// // // //   const {
// // // //     cartCount,
// // // //     cartDetails,
// // // //     removeItem,
// // // //     addItem,
// // // //     clearCart,
// // // //     totalPrice,
// // // //     redirectToCheckout,
// // // //   } = useShoppingCart();

// // // //   const [voucher, setVoucher] = useState("");
// // // //   const [voucherApplied, setVoucherApplied] = useState(false);
// // // //   const [discount, setDiscount] = useState(0);

// // // //   // Handle checkout redirection
// // // //   async function handleCheckoutClick(event: React.MouseEvent) {
// // // //     event.preventDefault();
// // // //     try {
// // // //       const result = await redirectToCheckout();
// // // //       if (result?.error) {
// // // //         console.log("Checkout Error:", result.error);
// // // //       }
// // // //     } catch (error) {
// // // //       console.log("Error during checkout:", error);
// // // //     }
// // // //   }

// // // //   // Handle quantity change (increment/decrement)
// // // //   function handleQuantityChange(entry: any, action: "increase" | "decrease") {
// // // //     let updatedQuantity = entry.quantity;

// // // //     if (action === "increase") {
// // // //       updatedQuantity += 1; // Increase quantity
// // // //     } else if (action === "decrease") {
// // // //       updatedQuantity -= 1; // Decrease quantity
// // // //     }

// // // //     // If quantity is zero or less, remove the item from the cart
// // // //     if (updatedQuantity <= 0) {
// // // //       removeItem(entry.id);
// // // //     } else {
// // // //       // Update the item with the new quantity
// // // //       addItem({
// // // //         ...entry,
// // // //         quantity: updatedQuantity,
// // // //       });
// // // //     }
// // // //   }

// // // //   // Apply voucher logic
// // // //   function applyVoucher() {
// // // //     if (voucher === "DISCOUNT10") {
// // // //       setDiscount(10); // Example: 10% discount
// // // //       setVoucherApplied(true);
// // // //     } else {
// // // //       setVoucherApplied(false);
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
// // // //       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
// // // //         Your Shopping Cart
// // // //       </h1>
// // // //       {cartCount === 0 ? (
// // // //         <div className="text-center py-10">
// // // //           <h2 className="text-lg text-gray-700">Your cart is empty!</h2>
// // // //           <p className="mt-4 text-gray-500">Start adding items to see them here.</p>
// // // //         </div>
// // // //       ) : (
// // // //         <div className="flex flex-col gap-10">
// // // //           <ul className="space-y-6">
// // // //             {Object.values(cartDetails ?? {}).map((entry) => (
// // // //               <li
// // // //                 key={entry.id}
// // // //                 className="flex items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
// // // //               >
// // // //                 {/* Left: Product Image */}
// // // //                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
// // // //                   <img
// // // //                     src={entry.image as string}
// // // //                     alt={entry.name}
// // // //                     width={100}
// // // //                     height={100}
// // // //                     className="object-contain"
// // // //                   />
// // // //                 </div>
// // // //                 {/* Right: Product Details */}
// // // //                 <div className="flex-1 ml-6">
// // // //                   <div className="flex justify-between items-center mb-3">
// // // //                     <h3 className="text-xl font-semibold text-gray-900">{entry.name}</h3>
// // // //                     <p className="text-xl font-semibold text-gray-900">
// // // //                       ${entry.price}
// // // //                     </p>
// // // //                   </div>

// // // //                   {/* Description Preview */}
// // // //                   <p className="mt-2 text-sm text-gray-600">
// // // //                 {entry.description
// // // //                     ? entry.description.length > 30
// // // //                       ? entry.description.slice(0, 30) + "..."
// // // //                       : entry.description
// // // //                     : "No description available"}
// // // //                   </p>
// // // //                   <a
// // // //                     href={`/product/${entry.id}`}
// // // //                     className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
// // // //                   >
// // // //                     <AiOutlineLink className="inline-block w-4 h-4 mr-1" /> View Product
// // // //                   </a>

// // // //                   {/* Subtotal */}
// // // //                   <div className="mt-2 text-sm text-gray-600">
// // // //                     Subtotal: ${entry.price * entry.quantity}
// // // //                   </div>

// // // //                   {/* Quantity Selector */}
// // // //                   <div className="flex items-center mt-4 space-x-6">
// // // //                     <button
// // // //                       onClick={() => handleQuantityChange(entry, "decrease")}
// // // //                       disabled={entry.quantity <= 1}
// // // //                       className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition duration-200"
// // // //                     >
// // // //                       -
// // // //                     </button>
// // // //                     <span className="text-lg text-gray-600">Qty: {entry.quantity}</span>
// // // //                     <button
// // // //                       onClick={() => handleQuantityChange(entry, "increase")}
// // // //                       className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
// // // //                     >
// // // //                       +
// // // //                     </button>
// // // //                     <button
// // // //                   onClick={() => removeItem(entry.id)}
// // // //                   className="ml-auto text-red-500 hover:text-red-700 mt-2"
// // // //                 >
// // // //                   <AiOutlineDelete className="w-6 h-6 " />
// // // //                 </button>
// // // //                   </div>

// // // //                 </div>

// // // //                 {/* Remove Button (Now at bottom right) */}

// // // //               </li>
// // // //             ))}
// // // //           </ul>

// // // //           {/* Cart Summary */}
// // // //           <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
// // // //             {/* Subtotal */}
// // // //             <div className="flex justify-between text-lg font-semibold text-gray-900">
// // // //               <p>Subtotal:</p>
// // // //               <p>${totalPrice}</p>
// // // //             </div>

// // // //             {/* Voucher Input */}
// // // //             <div className="mt-4 flex justify-between text-sm text-gray-600">
// // // //               <input
// // // //                 type="text"
// // // //                 value={voucher}
// // // //                 onChange={(e) => setVoucher(e.target.value)}
// // // //                 placeholder="Enter voucher code"
// // // //                 className="px-4 py-2 border border-gray-300 rounded-lg w-3/4"
// // // //               />
// // // //               <Button
// // // //                 onClick={applyVoucher}
// // // //                 className="w-1/4 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md"
// // // //               >
// // // //                 Apply
// // // //               </Button>
// // // //             </div>
// // // //             {voucherApplied && (
// // // //               <p className="mt-4 text-green-600">Voucher applied! 10% off</p>
// // // //             )}

// // // //             {/* Total (after applying voucher) */}
// // // //             <div className="flex justify-between text-lg font-semibold text-gray-900 mt-4">
// // // //               <p>Total:</p>
// // // //               <p>
// // // //                 ${discount > 0
// // // //                   ? totalPrice - (totalPrice * discount) / 100
// // // //                   : totalPrice}
// // // //               </p>
// // // //             </div>

// // // //             <p className="mt-2 text-sm text-gray-500">
// // // //               Shipping and taxes are calculated at checkout.
// // // //             </p>

// // // //             {/* Checkout Button */}
// // // //             <div className="mt-6">
// // // //               <Button
// // // //                 onClick={handleCheckoutClick}
// // // //                 className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md"
// // // //               >
// // // //                 Proceed to Checkout
// // // //               </Button>
// // // //             </div>
// // // //             <div className="mt-6 text-center text-sm text-gray-500">
// // // //               <p>
// // // //                 OR{" "}
// // // //                 <a
// // // //                   href="/"
// // // //                   className="font-medium text-green-600 hover:text-green-500"
// // // //                 >
// // // //                   Continue Shopping
// // // //                 </a>
// // // //               </p>
// // // //             </div>
// // // //             <div className="mt-6 text-center">
// // // //               <Button
// // // //                 onClick={clearCart}
// // // //                 className="bg-red-600 text-white hover:bg-red-700 w-full py-3 rounded-md"
// // // //               >
// // // //                 Clear Cart
// // // //               </Button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   );
// // // // }
// // // "use client";

// // // import { Button } from "@/components/ui/button";
// // // import { useShoppingCart } from "use-shopping-cart";
// // // import { AiOutlineDelete, AiOutlineLink } from "react-icons/ai"; // Delete and Link icons
// // // import { useState } from "react";

// // // export default function CartPage() {
// // //   const {
// // //     cartCount,
// // //     cartDetails,
// // //     removeItem,
// // //     addItem,
// // //     clearCart,
// // //     totalPrice,
// // //     redirectToCheckout,
// // //   } = useShoppingCart();

// // //   const [voucher, setVoucher] = useState("");
// // //   const [voucherApplied, setVoucherApplied] = useState(false);
// // //   const [discount, setDiscount] = useState(0);

// // //   // Handle checkout redirection
// // //   async function handleCheckoutClick(event: React.MouseEvent) {
// // //     event.preventDefault();
// // //     try {
// // //       const result = await redirectToCheckout();
// // //       if (result?.error) {
// // //         console.log("Checkout Error:", result.error);
// // //       }
// // //     } catch (error) {
// // //       console.log("Error during checkout:", error);
// // //     }
// // //   }

// // //   // Handle quantity change (increment/decrement)
// // //   function handleQuantityChange(entry: any, action: "increase" | "decrease") {
// // //     let updatedQuantity = entry.quantity;

// // //     if (action === "increase") {
// // //       updatedQuantity += 1; // Increase quantity
// // //     } else if (action === "decrease" && updatedQuantity > 1) {
// // //       updatedQuantity -= 1; // Decrease quantity only if more than 1
// // //     }

// // //     // If quantity is zero or less, remove the item from the cart
// // //     if (updatedQuantity <= 0) {
// // //       removeItem(entry.id);
// // //     } else {
// // //       // Update the item with the new quantity
// // //       addItem({
// // //         ...entry,
// // //         quantity: updatedQuantity,
// // //       });
// // //     }
// // //   }

// // //   // Apply voucher logic
// // //   function applyVoucher() {
// // //     if (voucher === "DISCOUNT10") {
// // //       setDiscount(10); // Example: 10% discount
// // //       setVoucherApplied(true);
// // //     } else {
// // //       setVoucherApplied(false);
// // //     }
// // //   }

// // //   // Safe totalPrice handling (default to 0 if undefined or null)
// // //   const validTotalPrice = totalPrice ?? 0;

// // //   return (
// // //     <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
// // //       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
// // //         Your Shopping Cart
// // //       </h1>
// // //       {cartCount === 0 ? (
// // //         <div className="text-center py-10">
// // //           <h2 className="text-lg text-gray-700">Your cart is empty!</h2>
// // //           <p className="mt-4 text-gray-500">Start adding items to see them here.</p>
// // //         </div>
// // //       ) : (
// // //         <div className="flex flex-col gap-10">
// // //           <ul className="space-y-6">
// // //             {Object.values(cartDetails ?? {}).map((entry) => (
// // //               <li
// // //                 key={entry.id}
// // //                 className="flex items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
// // //               >
// // //                 {/* Left: Product Image */}
// // //                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
// // //                   <img
// // //                     src={entry.image as string}
// // //                     alt={entry.name}
// // //                     width={100}
// // //                     height={100}
// // //                     className="object-contain"
// // //                   />
// // //                 </div>
// // //                 {/* Right: Product Details */}
// // //                 <div className="flex-1 ml-6">
// // //                   <div className="flex justify-between items-center mb-3">
// // //                     <h3 className="text-xl font-semibold text-gray-900">{entry.name}</h3>
// // //                     <p className="text-xl font-semibold text-gray-900">
// // //                       ${entry.price}
// // //                     </p>
// // //                   </div>

// // //                   {/* Description Preview */}
// // //                   <p className="mt-2 text-sm text-gray-600">
// // //                     {entry.description
// // //                       ? entry.description.length > 30
// // //                         ? entry.description.slice(0, 30) + "..."
// // //                         : entry.description
// // //                       : "No description available"}
// // //                   </p>
// // //                   <a
// // //                     href={`/product/${entry.id}`}
// // //                     className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
// // //                   >
// // //                     <AiOutlineLink className="inline-block w-4 h-4 mr-1" /> View Product
// // //                   </a>

// // //                   {/* Subtotal */}
// // //                   <div className="mt-2 text-sm text-gray-600">
// // //                     Subtotal: ${entry.price * entry.quantity}
// // //                   </div>

// // //                   {/* Quantity Selector */}
// // //                   <div className="flex items-center mt-4 space-x-6">
// // //                     <button
// // //                       onClick={() => handleQuantityChange(entry, "decrease")}
// // //                       disabled={entry.quantity <= 1}
// // //                       className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition duration-200"
// // //                     >
// // //                       -
// // //                     </button>
// // //                     <span className="text-lg text-gray-600">Qty: {entry.quantity}</span>
// // //                     <button
// // //                       onClick={() => handleQuantityChange(entry, "increase")}
// // //                       className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
// // //                     >
// // //                       +
// // //                     </button>
// // //                     <button
// // //                       onClick={() => removeItem(entry.id)}
// // //                       className="ml-auto text-red-500 hover:text-red-700 mt-2"
// // //                     >
// // //                       <AiOutlineDelete className="w-6 h-6 " />
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               </li>
// // //             ))}
// // //           </ul>

// // //           {/* Cart Summary */}
// // //           <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
// // //             {/* Subtotal */}
// // //             <div className="flex justify-between text-lg font-semibold text-gray-900">
// // //               <p>Subtotal:</p>
// // //               <p>${validTotalPrice}</p>
// // //             </div>

// // //             {/* Voucher Input */}
// // //             <div className="mt-4 flex justify-between text-sm text-gray-600">
// // //               <input
// // //                 type="text"
// // //                 value={voucher}
// // //                 onChange={(e) => setVoucher(e.target.value)}
// // //                 placeholder="Enter voucher code"
// // //                 className="px-4 py-2 border border-gray-300 rounded-lg w-3/4"
// // //               />
// // //               <Button
// // //                 onClick={applyVoucher}
// // //                 className="w-1/4 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md"
// // //               >
// // //                 Apply
// // //               </Button>
// // //             </div>
// // //             {voucherApplied && (
// // //               <p className="mt-4 text-green-600">Voucher applied! 10% off</p>
// // //             )}

// // //             {/* Total (after applying voucher) */}
// // //             <div className="flex justify-between text-lg font-semibold text-gray-900 mt-4">
// // //               <p>Total:</p>
// // //               <p>
// // //                 ${discount > 0
// // //                   ? validTotalPrice - (validTotalPrice * discount) / 100
// // //                   : validTotalPrice}
// // //               </p>
// // //             </div>

// // //             <p className="mt-2 text-sm text-gray-500">
// // //               Shipping and taxes are calculated at checkout.
// // //             </p>

// // //             {/* Checkout Button */}
// // //             <div className="mt-6">
// // //               <Button
// // //                 onClick={handleCheckoutClick}
// // //                 className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md"
// // //               >
// // //                 Proceed to Checkout
// // //               </Button>
// // //             </div>
// // //             <div className="mt-6 text-center text-sm text-gray-500">
// // //               <p>
// // //                 OR{" "}
// // //                 <a
// // //                   href="/"
// // //                   className="font-medium text-green-600 hover:text-green-500"
// // //                 >
// // //                   Continue Shopping
// // //                 </a>
// // //               </p>
// // //             </div>
// // //             <div className="mt-6 text-center">
// // //               <Button
// // //                 onClick={clearCart}
// // //                 className="bg-red-600 text-white hover:bg-red-700 w-full py-3 rounded-md"
// // //               >
// // //                 Clear Cart
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { Button } from "@/components/ui/button";
// // import { useShoppingCart } from "use-shopping-cart";
// // import { AiOutlineDelete, AiOutlineLink } from "react-icons/ai"; // Delete and Link icons
// // import { useState } from "react";

// // export default function CartPage() {
// //   const {
// //     cartCount,
// //     cartDetails,
// //     removeItem,
// //     addItem,
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

// //   // Handle quantity change (increment/decrement)
// //   function handleQuantityChange(entry: any, action: "increase" | "decrease") {
// //     let updatedQuantity = entry.quantity;

// //     if (action === "increase") {
// //       updatedQuantity += 1; // Increase quantity
// //     } else if (action === "decrease") {
// //       // Decrease quantity but only to a minimum of 1
// //       if (updatedQuantity > 1) {
// //         updatedQuantity -= 1;
// //       } else {
// //         // Instead of just decreasing, remove the item when quantity hits 1
// //         removeItem(entry.id);
// //         return;
// //       }
// //     }

// //     // Update the item with the new quantity or remove it if quantity reaches zero
// //     addItem({
// //       ...entry,
// //       quantity: updatedQuantity,
// //     });
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
// //     <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
// //       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
// //         Your Shopping Cart
// //       </h1>
// //       {cartCount === 0 ? (
// //         <div className="text-center py-10">
// //           <h2 className="text-lg text-gray-700">Your cart is empty!</h2>
// //           <p className="mt-4 text-gray-500">Start adding items to see them here.</p>
// //         </div>
// //       ) : (
// //         <div className="flex flex-col gap-10">
// //           <ul className="space-y-6">
// //             {Object.values(cartDetails ?? {}).map((entry) => (
// //               <li
// //                 key={entry.id}
// //                 className="flex items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
// //               >
// //                 {/* Left: Product Image */}
// //                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
// //                   <img
// //                     src={entry.image as string}
// //                     alt={entry.name}
// //                     width={100}
// //                     height={100}
// //                     className="object-contain"
// //                   />
// //                 </div>
// //                 {/* Right: Product Details */}
// //                 <div className="flex-1 ml-6">
// //                   <div className="flex justify-between items-center mb-3">
// //                     <h3 className="text-xl font-semibold text-gray-900">{entry.name}</h3>
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
// //                     <AiOutlineLink className="inline-block w-4 h-4 mr-1" /> View Product
// //                   </a>

// //                   {/* Subtotal */}
// //                   <div className="mt-2 text-sm text-gray-600">
// //                     Subtotal: ${entry.price * entry.quantity}
// //                   </div>

// //                   {/* Quantity Selector */}
// //                   <div className="flex items-center mt-4 space-x-6">
// //                     <button
// //                       onClick={() => handleQuantityChange(entry, "decrease")}
// //                       disabled={entry.quantity <= 1}
// //                       className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition duration-200"
// //                     >
// //                       -
// //                     </button>
// //                     <span className="text-lg text-gray-600">Qty: {entry.quantity}</span>
// //                     <button
// //                       onClick={() => handleQuantityChange(entry, "increase")}
// //                       className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
// //                     >
// //                       +
// //                     </button>
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
// //             <div className="mt-4 flex justify-between text-sm text-gray-600">
// //               <input
// //                 type="text"
// //                 value={voucher}
// //                 onChange={(e) => setVoucher(e.target.value)}
// //                 placeholder="Enter voucher code"
// //                 className="px-4 py-2 border border-gray-300 rounded-lg w-3/4"
// //               />
// //               <Button
// //                 onClick={applyVoucher}
// //                 className="w-1/4 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md"
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
// import { AiOutlineDelete, AiOutlineLink } from "react-icons/ai"; // Delete and Link icons
// import { useState } from "react";

// export default function CartPage() {
//   const {
//     cartCount,
//     cartDetails,
//     removeItem,
//     addItem,
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

//   // Handle quantity change (increment/decrement)
//   function handleQuantityChange(entry: any, action: "increase" | "decrease") {
//     let updatedQuantity = entry.quantity;

//     if (action === "increase") {
//       updatedQuantity += 1; // Increase quantity
//     } else if (action === "decrease") {
//       // Decrease quantity only if more than 1
//       if (updatedQuantity > 1) {
//         updatedQuantity -= 1;
//       } else {
//         // Optionally remove the item when quantity is 1 and decrease is pressed
//         removeItem(entry.id);
//         return;
//       }
//     }

//     // Update the item with the new quantity
//     addItem({
//       ...entry,
//       quantity: updatedQuantity,
//     });
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
//     <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
//         Your Shopping Cart
//       </h1>
//       {cartCount === 0 ? (
//         <div className="text-center py-10">
//           <h2 className="text-lg text-gray-700">Your cart is empty!</h2>
//           <p className="mt-4 text-gray-500">Start adding items to see them here.</p>
//         </div>
//       ) : (
//         <div className="flex flex-col gap-10">
//           <ul className="space-y-6">
//             {Object.values(cartDetails ?? {}).map((entry) => (
//               <li
//                 key={entry.id}
//                 className="flex items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
//               >
//                 {/* Left: Product Image */}
//                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                   <img
//                     src={entry.image as string}
//                     alt={entry.name}
//                     width={100}
//                     height={100}
//                     className="object-contain"
//                   />
//                 </div>
//                 {/* Right: Product Details */}
//                 <div className="flex-1 ml-6">
//                   <div className="flex justify-between items-center mb-3">
//                     <h3 className="text-xl font-semibold text-gray-900">{entry.name}</h3>
//                     <p className="text-xl font-semibold text-gray-900">
//                       ${entry.price}
//                     </p>
//                   </div>

//                   {/* Description Preview */}
//                   <p className="mt-2 text-sm text-gray-600">
//                     {entry.description
//                       ? entry.description.length > 30
//                         ? entry.description.slice(0, 30) + "..."
//                         : entry.description
//                       : "No description available"}
//                   </p>
//                   <a
//                     href={`/product/${entry.id}`}
//                     className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
//                   >
//                     <AiOutlineLink className="inline-block w-4 h-4 mr-1" /> View Product
//                   </a>

//                   {/* Subtotal */}
//                   <div className="mt-2 text-sm text-gray-600">
//                     Subtotal: ${entry.price * entry.quantity}
//                   </div>

//                   {/* Quantity Selector */}
//                   <div className="flex items-center mt-4 space-x-6">
//                     <button
//                       onClick={() => handleQuantityChange(entry, "decrease")}
//                       disabled={entry.quantity <= 1}
//                       className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition duration-200"
//                     >
//                       -
//                     </button>
//                     <span className="text-lg text-gray-600">Qty: {entry.quantity}</span>
//                     <button
//                       onClick={() => handleQuantityChange(entry, "increase")}
//                       className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
//                     >
//                       +
//                     </button>
//                     <button
//                       onClick={() => removeItem(entry.id)}
//                       className="ml-auto text-red-500 hover:text-red-700 mt-2"
//                     >
//                       <AiOutlineDelete className="w-6 h-6 " />
//                     </button>
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
//             <div className="mt-4 flex justify-between text-sm text-gray-600">
//               <input
//                 type="text"
//                 value={voucher}
//                 onChange={(e) => setVoucher(e.target.value)}
//                 placeholder="Enter voucher code"
//                 className="px-4 py-2 border border-gray-300 rounded-lg w-3/4"
//               />
//               <Button
//                 onClick={applyVoucher}
//                 className="w-1/4 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md"
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
import { AiOutlineDelete, AiOutlineLink } from "react-icons/ai"; // Delete and Link icons
import { useState } from "react";

export default function CartPage() {
  const {
    cartCount,
    cartDetails,
    removeItem,
    addItem,
    clearCart,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const [voucher, setVoucher] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

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

  // Function for directly decreasing quantity
  function decreaseQuantity(entry: any) {
    if (entry.quantity > 1) {
      // If quantity is more than 1, decrease it
      addItem({
        ...entry,
        quantity: entry.quantity - 1,
      });
    } else {
      // If quantity is 1, remove the item from the cart
      removeItem(entry.id);
    }
  }

  // Function for increasing quantity
  function increaseQuantity(entry: any) {
    addItem({
      ...entry,
      quantity: entry.quantity + 1,
    });
  }

  // Apply voucher logic
  function applyVoucher() {
    if (voucher === "DISCOUNT10") {
      setDiscount(10); // Example: 10% discount
      setVoucherApplied(true);
    } else {
      setVoucherApplied(false);
    }
  }

  // Safe totalPrice handling (default to 0 if undefined or null)
  const validTotalPrice = totalPrice ?? 0;

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
        Your Shopping Cart
      </h1>
      {cartCount === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-lg text-gray-700">Your cart is empty!</h2>
          <p className="mt-4 text-gray-500">
            Start adding items to see them here.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-10">
          <ul className="space-y-6">
            {Object.values(cartDetails ?? {}).map((entry) => (
              <li
                key={entry.id}
                className="flex items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Left: Product Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={entry.image as string}
                    alt={entry.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                {/* Right: Product Details */}
                <div className="flex-1 ml-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {entry.name}
                    </h3>
                    <p className="text-xl font-semibold text-gray-900">
                      ${entry.price}
                    </p>
                  </div>

                  {/* Description Preview */}
                  <p className="mt-2 text-sm text-gray-600">
                    {entry.description
                      ? entry.description.length > 30
                        ? entry.description.slice(0, 30) + "..."
                        : entry.description
                      : "No description available"}
                  </p>
                  <a
                    href={`/product/${entry.id}`}
                    className="text-blue-600 hover:text-blue-800 mt-2 inline-block"
                  >
                    <AiOutlineLink className="inline-block w-4 h-4 mr-1" /> View
                    Product
                  </a>

                  {/* Subtotal */}
                  <div className="mt-2 text-sm text-gray-600">
                    Subtotal: ${entry.price * entry.quantity}
                  </div>

                  {/* Quantity Selector */}
                  <div className="flex items-center mt-4 space-x-6">
                    <button
                      onClick={() => decreaseQuantity(entry)}
                      disabled={entry.quantity <= 1}
                      className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition duration-200"
                    >
                      -
                    </button>
                    <span className="text-lg text-gray-600">
                      Qty: {entry.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(entry)}
                      className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(entry.id)}
                      className="ml-auto text-red-500 hover:text-red-700 mt-2"
                    >
                      <AiOutlineDelete className="w-6 h-6 " />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart Summary */}
          <div className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto">
            {/* Subtotal */}
            <div className="flex justify-between text-lg font-semibold text-gray-900">
              <p>Subtotal:</p>
              <p>${validTotalPrice}</p>
            </div>

            {/* Voucher Input */}
            <div className="mt-4 flex justify-between text-sm text-gray-600">
              <input
                type="text"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                placeholder="Enter voucher code"
                className="px-4 py-2 border border-gray-300 rounded-lg w-3/4"
              />
              <Button
                onClick={applyVoucher}
                className="w-1/4 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md"
              >
                Apply
              </Button>
            </div>
            {voucherApplied && (
              <p className="mt-4 text-green-600">Voucher applied! 10% off</p>
            )}

            {/* Total (after applying voucher) */}
            <div className="flex justify-between text-lg font-semibold text-gray-900 mt-4">
              <p>Total:</p>
              <p>
                $
                {discount > 0
                  ? validTotalPrice - (validTotalPrice * discount) / 100
                  : validTotalPrice}
              </p>
            </div>

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
                <a
                  href="/"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Continue Shopping
                </a>
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
