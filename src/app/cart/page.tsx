
"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { AiOutlineDelete, AiOutlineLink } from "react-icons/ai"; // Delete and Link icons
import { useState } from "react";

interface CartEntry {
  id: string;
  name: string;
  price: number;
  currency: string;
  image?: string; // Make `image` optional
  description?: string;
  quantity: number;
}

export default function CartPage() {
  const {
    cartCount,
    cartDetails,
    removeItem,
    addItem,
    decrementItem, // Add decrementItem
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
            {Object.values(cartDetails ?? {}).map((entry: CartEntry) => (
              <li
                key={entry.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Left: Product Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={entry.image || "/placeholder.png"} // Fallback for missing image
                    alt={entry.name}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                {/* Right: Product Details */}
                <div className="flex-1 sm:ml-6 mt-4 sm:mt-0">
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
                    {/* Decrease Quantity Button */}
                    <button
                      onClick={() => decrementItem(entry.id)} // Use decrementItem
                      disabled={entry.quantity <= 1}
                      className="px-4 py-2 text-lg font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 disabled:opacity-50 transition duration-200"
                    >
                      -
                    </button>
                    <span className="text-lg text-gray-600">
                      Qty: {entry.quantity}
                    </span>
                    {/* Increase Quantity Button */}
                    <button
                      onClick={() => addItem({ ...entry, quantity: 1 })} // Use addItem to increase
                      className="px-4 py-2 text-lg font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition duration-200"
                    >
                      +
                    </button>
                    {/* Remove Item Button */}
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
            <div className="mt-4 flex flex-col sm:flex-row justify-between text-sm text-gray-600">
              <input
                type="text"
                value={voucher}
                onChange={(e) => setVoucher(e.target.value)}
                placeholder="Enter voucher code"
                className="px-4 py-2 border border-gray-300 rounded-lg w-full sm:w-3/4 mb-2 sm:mb-0"
              />
              <Button
                onClick={applyVoucher}
                className="w-full sm:w-1/4 bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-md"
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
                ${discount > 0
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