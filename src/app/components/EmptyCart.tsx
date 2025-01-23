"use client";

import Link from "next/link";
import FeauturedProducts from "./home/feauturedProducts"; // Import your FeaturedProducts component

const EmptyCartPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#F7F7F7] px-6 py-10 overflow-x-hidden">
      <div className="text-center">
        <h1 className="text-6xl sm:text-7xl font-bold text-[#252B42] mb-4 animate-bounce">
          🛒
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#2DC071] mb-4">
          Your Cart is Feeling Lonely!
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl mb-6 max-w-lg mx-auto">
          It looks like your cart is empty. Don&apos;t worry — it&apos;s not
          your fault! Our products are just waiting for you to add them to the
          party.
        </p>
        <Link href="/products" passHref>
          <button className="px-8 py-4 bg-[#2DC071] text-white text-xl sm:text-2xl rounded-full hover:bg-green-700 transition-all shadow-lg">
            Let&apos;s Go Shopping!
          </button>
        </Link>
      </div>

      <div className="mt-12 w-full">
        <h3 className="text-2xl sm:text-3xl font-bold text-[#252B42] text-center mb-6">
          While You&apos;re Here, Scroll Down to Check Out Our Featured
          Products!
        </h3>
        <FeauturedProducts />
      </div>

      <div className="mt-8">
        <p className="text-sm sm:text-base text-[#737373] text-center">
          (We promise they won&apos;t disappear like the items in your cart!)
        </p>
      </div>
    </section>
  );
};

export default EmptyCartPage;
