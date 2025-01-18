"use client";

import { useShoppingCart } from "use-shopping-cart";
// import { urlFor } from "@/sanity/lib/image";
import { AiOutlineShoppingCart } from "react-icons/ai";

export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    // image: urlFor(image).url(),
    image: image,
    price_id: price_id,
  };
  return (
    <button
      className="flex items-center gap-2 py-2 px-4 border rounded-full text-black hover:bg-green-400"
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      <AiOutlineShoppingCart />
    </button>
  );
}
