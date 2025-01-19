"use client";
import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { ShoppingCartIcon } from "lucide-react";

const CartIcon = () => {
  const { cartCount } = useShoppingCart();

  return (
    <a href="/cart" className="text-blue-500 relative">
      <ShoppingCartIcon className="text-2xl" />

      {/* Conditionally render the badge only if cartCount is defined and greater than 0 */}
      {cartCount !== undefined && cartCount > 0 && (
        <span
          className="absolute -top-3 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          style={{ fontSize: "12px", display: "flex" }}
        >
          {cartCount}
        </span>
      )}
    </a>
  );
};

export default CartIcon;
