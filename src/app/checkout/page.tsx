// "use client";

// import { useShoppingCart } from "use-shopping-cart";
// import { Button } from "@/components/ui/button"; // Update with your Button component location
// import { useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { toast } from "react-toastify";

// const stripePromise = loadStripe("your_stripe_public_key"); // Your public Stripe key

// export default function CheckoutPage() {
//   const { cartDetails, totalPrice, clearCart } = useShoppingCart();
//   const [isLoading, setIsLoading] = useState(false);
//   const [billingDetails, setBillingDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "US",
//   });
//   const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

//   const stripe = useStripe();
//   const elements = useElements();

//   const cartItems = Object.values(cartDetails ?? {}).map((entry: any) => ({
//     name: entry.name,
//     description: entry.description,
//     amount: entry.price * 100, // Convert to cents
//     currency: entry.currency,
//     quantity: entry.quantity,
//     images: [entry.image],
//   }));

//   // Handle checkout
//   const handleCheckout = async (event: React.FormEvent) => {
//     event.preventDefault();
//     setIsLoading(true);

//     if (!stripe || !elements) {
//       toast.error("Stripe has not loaded yet. Please try again.");
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch("/api/create-checkout-session", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ cartItems }),
//       });

//       const session = await response.json();
//       const { id: sessionId } = session;

//       const { error } = await stripe.redirectToCheckout({ sessionId });

//       if (error) {
//         toast.error(`Error: ${error.message}`);
//       } else {
//         toast.success("Checkout successful!");
//         clearCart();
//       }
//     } catch (error) {
//       toast.error("Error during checkout.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-4xl font-semibold text-center text-gray-900 mb-8">
//         Checkout
//       </h1>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Left: Cart Items */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//             Your Order
//           </h2>

//           {Object.values(cartDetails ?? {}).map((entry: any) => (
//             <div
//               key={entry.id}
//               className="flex justify-between items-center mb-4"
//             >
//               <div className="flex gap-4">
//                 <img
//                   src={entry.image}
//                   alt={entry.name}
//                   className="w-20 h-20 object-contain"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold">{entry.name}</h3>
//                   <p className="text-sm text-gray-600">{entry.description}</p>
//                   <p className="text-sm text-gray-600">Qty: {entry.quantity}</p>
//                 </div>
//               </div>
//               <div className="text-lg font-semibold">
//                 ${entry.price * entry.quantity}
//               </div>
//             </div>
//           ))}

//           <div className="mt-6 flex justify-between text-xl font-semibold text-gray-900">
//             <p>Total:</p>
//             <p>${totalPrice}</p>
//           </div>
//         </div>

//         {/* Right: Address & Payment */}
//         <div className="bg-white shadow-lg rounded-lg p-6">
//           <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//             Billing Information
//           </h2>

//           <form onSubmit={handleCheckout}>
//             {/* Name and Email */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 className="mt-1 block w-full p-3 border rounded-lg"
//                 value={billingDetails.name}
//                 onChange={(e) =>
//                   setBillingDetails({ ...billingDetails, name: e.target.value })
//                 }
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 className="mt-1 block w-full p-3 border rounded-lg"
//                 value={billingDetails.email}
//                 onChange={(e) =>
//                   setBillingDetails({
//                     ...billingDetails,
//                     email: e.target.value,
//                   })
//                 }
//                 required
//               />
//             </div>

//             {/* Address Fields */}
//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full p-3 border rounded-lg"
//                   value={billingDetails.address}
//                   onChange={(e) =>
//                     setBillingDetails({
//                       ...billingDetails,
//                       address: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   City
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full p-3 border rounded-lg"
//                   value={billingDetails.city}
//                   onChange={(e) =>
//                     setBillingDetails({
//                       ...billingDetails,
//                       city: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Postal Code
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-1 block w-full p-3 border rounded-lg"
//                   value={billingDetails.postalCode}
//                   onChange={(e) =>
//                     setBillingDetails({
//                       ...billingDetails,
//                       postalCode: e.target.value,
//                     })
//                   }
//                   required
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">
//                   Country
//                 </label>
//                 <select
//                   className="mt-1 block w-full p-3 border rounded-lg"
//                   value={billingDetails.country}
//                   onChange={(e) =>
//                     setBillingDetails({
//                       ...billingDetails,
//                       country: e.target.value,
//                     })
//                   }
//                   required
//                 >
//                   <option value="US">United States</option>
//                   {/* Add other countries if needed */}
//                 </select>
//               </div>
//             </div>

//             {/* Payment: Stripe Card Element */}
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600">
//                 Card Details
//               </label>
//               <CardElement className="mt-2 border p-3 rounded-lg" />
//             </div>

//             {/* Submit Button */}
//             <div className="mt-6">
//               <Button
//                 type="submit"
//                 disabled={
//                   isPaymentProcessing || isLoading || !stripe || !elements
//                 }
//                 className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md"
//               >
//                 {isPaymentProcessing ? "Processing..." : "Complete Checkout"}
//               </Button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

const page = () => {
  return <div>page</div>;
};

export default page;
