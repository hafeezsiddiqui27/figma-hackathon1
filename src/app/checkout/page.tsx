// // // "use client";

// // // import { useForm, Controller } from "react-hook-form";
// // // import { z } from "zod";
// // // import { zodResolver } from "@hookform/resolvers/zod";
// // // import { countries } from "countries-list"; // Example: You can replace with actual country data if needed

// // // const checkoutSchema = z.object({
// // //   firstName: z.string().min(1, "First name is required"),
// // //   lastName: z.string().min(1, "Last name is required"),
// // //   email: z.string().email("Invalid email address"),
// // //   address: z.string().min(1, "Address is required"),
// // //   city: z.string().min(1, "City is required"),
// // //   country: z.string().min(1, "Country is required"),
// // //   postalCode: z.string().min(5, "Postal code is required").max(10, "Invalid postal code"),
// // // });

// // // type CheckoutFormValues = z.infer<typeof checkoutSchema>;

// // // const CheckoutPage = () => {
// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     control,
// // //     formState: { errors },
// // //   } = useForm<CheckoutFormValues>({
// // //     resolver: zodResolver(checkoutSchema),
// // //   });

// // //   const onSubmit = (data: CheckoutFormValues) => {
// // //     console.log("Form submitted:", data);
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
// // //       <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
// // //         <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
// // //           Checkout
// // //         </h1>
// // //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// // //           {/* First and Last Name */}
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700">
// // //                 First Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 {...register("firstName")}
// // //                 className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
// // //                   errors.firstName ? "border-red-500" : ""
// // //                 }`}
// // //               />
// // //               {errors.firstName && (
// // //                 <p className="text-sm text-red-600 mt-1">
// // //                   {errors.firstName.message}
// // //                 </p>
// // //               )}
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700">
// // //                 Last Name
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 {...register("lastName")}
// // //                 className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
// // //                   errors.lastName ? "border-red-500" : ""
// // //                 }`}
// // //               />
// // //               {errors.lastName && (
// // //                 <p className="text-sm text-red-600 mt-1">
// // //                   {errors.lastName.message}
// // //                 </p>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Email */}
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">
// // //               Email
// // //             </label>
// // //             <input
// // //               type="email"
// // //               {...register("email")}
// // //               className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
// // //                 errors.email ? "border-red-500" : ""
// // //               }`}
// // //             />
// // //             {errors.email && (
// // //               <p className="text-sm text-red-600 mt-1">
// // //                 {errors.email.message}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* Address */}
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">
// // //               Address
// // //             </label>
// // //             <input
// // //               type="text"
// // //               {...register("address")}
// // //               className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
// // //                 errors.address ? "border-red-500" : ""
// // //               }`}
// // //             />
// // //             {errors.address && (
// // //               <p className="text-sm text-red-600 mt-1">
// // //                 {errors.address.message}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* City and Postal Code */}
// // //           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700">
// // //                 City
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 {...register("city")}
// // //                 className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
// // //                   errors.city ? "border-red-500" : ""
// // //                 }`}
// // //               />
// // //               {errors.city && (
// // //                 <p className="text-sm text-red-600 mt-1">
// // //                   {errors.city.message}
// // //                 </p>
// // //               )}
// // //             </div>
// // //             <div>
// // //               <label className="block text-sm font-medium text-gray-700">
// // //                 Postal Code
// // //               </label>
// // //               <input
// // //                 type="text"
// // //                 {...register("postalCode")}
// // //                 className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
// // //                   errors.postalCode ? "border-red-500" : ""
// // //                 }`}
// // //               />
// // //               {errors.postalCode && (
// // //                 <p className="text-sm text-red-600 mt-1">
// // //                   {errors.postalCode.message}
// // //                 </p>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Country */}
// // //           <div>
// // //             <label className="block text-sm font-medium text-gray-700">
// // //               Country
// // //             </label>
// // //             <Controller
// // //               name="country"
// // //               control={control}
// // //               render={({ field }) => (
// // //                 <select
// // //                   {...field}
// // //                   className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${
// // //                     errors.country ? "border-red-500" : ""
// // //                   }`}
// // //                 >
// // //                   <option value="">Select a country</option>
// // //                   {Object.entries(countries).map(([code, country]) => (
// // //                     <option key={code} value={country.name}>
// // //                       {country.name}
// // //                     </option>
// // //                   ))}
// // //                 </select>
// // //               )}
// // //             />
// // //             {errors.country && (
// // //               <p className="text-sm text-red-600 mt-1">
// // //                 {errors.country.message}
// // //               </p>
// // //             )}
// // //           </div>

// // //           {/* Submit Button */}
// // //           <div className="text-center">
// // //             <button
// // //               type="submit"
// // //               className="w-full bg-blue-600 text-white font-medium py-3 rounded-md shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition duration-150"
// // //             >
// // //               Continue to Delivery
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CheckoutPage;
// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button"; // Assuming you have a custom Button component
// // import { useForm } from "react-hook-form";
// // import { FaShippingFast, FaRegCreditCard } from "react-icons/fa";
// // import { IoIosWarning } from "react-icons/io";

// // interface FormData {
// //   fullName: string;
// //   email: string;
// //   address: string;
// //   city: string;
// //   postalCode: string;
// //   phoneNumber: string;
// //   country: string;
// // }

// // export default function CheckoutPage() {
// //   const [country] = useState("Pakistan");
// //   const [deliveryFee] = useState(200); // Fixed delivery fee for Pakistan
// //   const [totalPrice, setTotalPrice] = useState(1200); // Example total price
// //   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

// //   const onSubmit = (data: FormData) => {
// //     // Handle submission logic (e.g., save data or redirect)
// //     console.log(data);
// //   };

// //   return (
// //     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
// //       <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Checkout</h1>

// //       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
// //         {/* Name and Email */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
// //           <div className="col-span-1">
// //             <label className="text-gray-600 font-medium" htmlFor="fullName">
// //               Full Name
// //             </label>
// //             <input
// //               {...register("fullName", { required: "Full Name is required" })}
// //               id="fullName"
// //               type="text"
// //               placeholder="John Doe"
// //               className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //             />
// //             {errors.fullName && (
// //               <p className="text-red-600 text-sm">{errors.fullName.message}</p>
// //             )}
// //           </div>
// //           <div className="col-span-1">
// //             <label className="text-gray-600 font-medium" htmlFor="email">
// //               Email Address
// //             </label>
// //             <input
// //               {...register("email", {
// //                 required: "Email is required",
// //                 pattern: {
// //                   value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
// //                   message: "Invalid email address",
// //                 },
// //               })}
// //               id="email"
// //               type="email"
// //               placeholder="example@mail.com"
// //               className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //             />
// //             {errors.email && (
// //               <p className="text-red-600 text-sm">{errors.email.message}</p>
// //             )}
// //           </div>
// //         </div>

// //         {/* Address */}
// //         <div>
// //           <label className="text-gray-600 font-medium" htmlFor="address">
// //             Address
// //           </label>
// //           <textarea
// //             {...register("address", { required: "Address is required" })}
// //             id="address"
// //             placeholder="Enter your address"
// //             rows={4}
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //           />
// //           {errors.address && (
// //             <p className="text-red-600 text-sm">{errors.address.message}</p>
// //           )}
// //         </div>

// //         {/* City, Postal Code, and Phone Number */}
// //         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
// //           <div className="col-span-1">
// //             <label className="text-gray-600 font-medium" htmlFor="city">
// //               City
// //             </label>
// //             <input
// //               {...register("city", { required: "City is required" })}
// //               id="city"
// //               type="text"
// //               placeholder="Karachi"
// //               className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //             />
// //             {errors.city && <p className="text-red-600 text-sm">{errors.city.message}</p>}
// //           </div>
// //           <div className="col-span-1">
// //             <label className="text-gray-600 font-medium" htmlFor="postalCode">
// //               Postal Code
// //             </label>
// //             <input
// //               {...register("postalCode", { required: "Postal code is required" })}
// //               id="postalCode"
// //               type="text"
// //               placeholder="12345"
// //               className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //             />
// //             {errors.postalCode && (
// //               <p className="text-red-600 text-sm">{errors.postalCode.message}</p>
// //             )}
// //           </div>
// //           <div className="col-span-1">
// //             <label className="text-gray-600 font-medium" htmlFor="phoneNumber">
// //               Phone Number
// //             </label>
// //             <input
// //               {...register("phoneNumber", { required: "Phone number is required" })}
// //               id="phoneNumber"
// //               type="text"
// //               placeholder="03123456789"
// //               className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
// //             />
// //             {errors.phoneNumber && (
// //               <p className="text-red-600 text-sm">{errors.phoneNumber.message}</p>
// //             )}
// //           </div>
// //         </div>

// //         {/* Country */}
// //         <div>
// //           <label className="text-gray-600 font-medium" htmlFor="country">
// //             Country
// //           </label>
// //           <input
// //             value="Pakistan"
// //             readOnly
// //             className="w-full p-3 mt-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
// //           />
// //         </div>

// //         {/* Shipping Fee & Total */}
// //         <div className="flex justify-between items-center mt-6">
// //           <div className="flex items-center space-x-2">
// //             <FaShippingFast className="text-gray-500" />
// //             <span className="text-lg text-gray-700 font-medium">Shipping Fee</span>
// //           </div>
// //           <span className="text-lg font-medium text-gray-700">₨{deliveryFee}</span>
// //         </div>

// //         <div className="flex justify-between items-center mt-2">
// //           <div className="flex items-center space-x-2">
// //             <FaRegCreditCard className="text-gray-500" />
// //             <span className="text-lg text-gray-700 font-medium">Total</span>
// //           </div>
// //           <span className="text-lg font-semibold text-gray-900">₨{totalPrice + deliveryFee}</span>
// //         </div>

// //         {/* Submit Button */}
// //         <Button
// //           type="submit"
// //           className="w-full bg-green-600 text-white hover:bg-green-700 py-3 rounded-md mt-6"
// //         >
// //           Proceed to Payment
// //         </Button>
// //       </form>
// //     </div>
// //   );
// // }
// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { useShoppingCart } from "use-shopping-cart";
// import { useRouter } from "next/navigation";
// import { loadStripe } from "@stripe/stripe-js";
// import { AiOutlineArrowLeft } from "react-icons/ai";

// // Load Stripe with your public key
// const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || "");

// const CheckoutPage = () => {
//   const { cartDetails, totalPrice, clearCart } = useShoppingCart();
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "Pakistan", // Fixed country as per requirement
//   });

//   const [loading, setLoading] = useState(false);

//   // Safe totalPrice handling (default to 0 if undefined or null)
//   const validTotalPrice = totalPrice ?? 0;

//   // Handle form field changes
//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Proceed to payment
//   const handleProceedToPayment = async (event: React.MouseEvent) => {
//     event.preventDefault();
//     setLoading(true);

//     // Prepare cart items for Stripe Checkout
//     const lineItems = Object.values(cartDetails ?? {}).map((entry) => ({
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
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Go back to cart page
//   const handleBackToCart = () => {
//     router.push("/cart");
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">Checkout</h1>

//         <form>
//           {/* Shipping Details Form */}
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
//             {/* Name */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
//             {/* Phone */}
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                 Phone Number
//               </label>
//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>

//             {/* Country */}
//             <div>
//               <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                 Country
//               </label>
//               <input
//                 type="text"
//                 id="country"
//                 name="country"
//                 value={formData.country}
//                 readOnly
//                 className="mt-2 p-3 border border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
//             {/* Address */}
//             <div>
//               <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleInputChange}
//                 className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>

//             {/* City */}
//             <div>
//               <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                 City
//               </label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleInputChange}
//                 className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
//             {/* Postal Code */}
//             <div>
//               <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
//                 Postal Code
//               </label>
//               <input
//                 type="text"
//                 id="postalCode"
//                 name="postalCode"
//                 value={formData.postalCode}
//                 onChange={handleInputChange}
//                 className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
//                 required
//               />
//             </div>
//           </div>

//           {/* Cart Summary */}
//           <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
//             <div className="flex justify-between text-lg font-semibold text-gray-800">
//               <p>Total:</p>
//               <p>${validTotalPrice}</p>

//             </div>

//             <div className="mt-4 text-sm text-gray-500">
//               Shipping and taxes are calculated at checkout.
//             </div>
//           </div>

//           <div className="mt-8 flex justify-between items-center">
//             <Button
//               onClick={handleBackToCart}
//               className="bg-gray-300 text-gray-800 hover:bg-gray-400 py-3 px-8 rounded-md flex items-center"
//             >
//               <AiOutlineArrowLeft className="mr-2" />
//               Back to Cart
//             </Button>

//             {/* Proceed to Payment Button */}
//             <Button
//               onClick={handleProceedToPayment}
//               className="bg-green-600 text-white hover:bg-green-700 py-3 px-8 rounded-md"
//               disabled={loading}
//             >
//               {loading ? "Processing..." : "Proceed to Payment"}
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { AiOutlineArrowLeft } from "react-icons/ai";

// Load Stripe with your public key
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY || "");

const CheckoutPage = () => {
  const { cartDetails, totalPrice,  } = useShoppingCart();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Pakistan", // Fixed country as per requirement
  });

  const [loading, setLoading] = useState(false);

  // Safe totalPrice handling (default to 0 if undefined or null)
  const validTotalPrice = totalPrice ?? 0;

  // Calculate the shipping fee based on city
  const shippingFee = formData.city.toLowerCase() === "karachi" ? 150 : 300;

  // Calculate the total price including the shipping fee
  const totalWithShipping = validTotalPrice + shippingFee;

  // Handle form field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Proceed to payment
  const handleProceedToPayment = async (event: React.MouseEvent) => {
    event.preventDefault();
    setLoading(true);

    // Prepare cart items for Stripe Checkout
    const lineItems = Object.values(cartDetails ?? {}).map((entry) => ({
      price_data: {
        currency: entry.currency,
        product_data: {
          name: entry.name,
          images: [entry.image || "/placeholder.png"], // Fallback for missing image
        },
        unit_amount: entry.price * 100, // Stripe expects the amount in cents
      },
      quantity: entry.quantity,
    }));

    try {
      // Make API request to create the Checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({ sessionId });
        if (error) {
          console.error("Stripe Checkout Error:", error);
        }
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  // Go back to cart page
  const handleBackToCart = () => {
    router.push("/cart");
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Checkout
        </h1>

        <form>
          {/* Shipping Details Form */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Country */}
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                readOnly
                className="mt-2 p-3 border border-gray-300 rounded-md w-full bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* City */}
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 mt-6">
            {/* Postal Code */}
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                className="mt-2 p-3 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Cart Summary */}
          <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-between text-lg font-semibold text-gray-800">
              <p>Total:</p>
              <p>${validTotalPrice}</p>
            </div>

            <div className="flex justify-between text-lg font-semibold text-gray-800 mt-4">
              <p>Shipping Fee:</p>
              <p>${shippingFee}</p>
            </div>

            <div className="flex justify-between text-lg font-semibold text-gray-800 mt-4">
              <p>Final Total:</p>
              <p>${totalWithShipping}</p>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </div>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <Button
              onClick={handleBackToCart}
              className="bg-gray-300 text-gray-800 hover:bg-gray-400 py-3 px-8 rounded-md flex items-center"
            >
              <AiOutlineArrowLeft className="mr-2" />
              Back to Cart
            </Button>

            {/* Proceed to Payment Button */}
            <Button
              onClick={handleProceedToPayment}
              className="bg-green-600 text-white hover:bg-green-700 py-3 px-8 rounded-md"
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
