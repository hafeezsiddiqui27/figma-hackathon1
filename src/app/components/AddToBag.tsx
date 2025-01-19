// "use client";

// import { AiOutlineShoppingCart } from "react-icons/ai";

// import { useShoppingCart } from "use-shopping-cart";

// interface AddToBagProps {
//   currency: string;
//   description: string;
//   image: string;
//   name: string;
//   price: number;
//   price_id: string;
// }

// export default function AddToBag({
//   currency,
//   description,
//   image,
//   name,
//   price,
//   price_id,
// }: AddToBagProps) {
//   const { addItem } = useShoppingCart();

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
//       onClick={() => addItem(product)}
//       className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
//     >
//       <AiOutlineShoppingCart />
//     </button>
//   );
// }
"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "use-shopping-cart";
import { toast, ToastContainer } from "react-toastify"; // Import toast

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

  // Function to add item to cart and show a toast
  const handleAddToCart = () => {
    addItem(product); // Add item to cart
    toast.success(`${name} has been added to your cart!`, {
      position: "top-right", // Position of the toast
      autoClose: 3000, // Duration for the toast to be visible
      hideProgressBar: false, // Show progress bar (optional)
      closeOnClick: true, // Allow closing on click
      pauseOnHover: true, // Pause on hover
      draggable: true, // Allow dragging
      progress: undefined, // Optional, can specify a progress bar
    });
  };

  return (
    <button
      onClick={handleAddToCart} // Use the new function for onClick
      className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
    >
      <AiOutlineShoppingCart />
      <ToastContainer />
    </button>
  );
}
