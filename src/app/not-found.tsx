"use client";

import Link from "next/link";
import FeaturedProducts from "./components/home/feauturedProducts";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#F7F7F7] px-6 py-10">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#252B42] mb-4 animate-bounce">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-[#2DC071] mb-4">
          Uh-oh, You&apos;ve Lost Your Way!
        </h2>
        <p className="text-gray-600 text-lg mb-6 max-w-lg mx-auto">
          It looks like the page you&apos;re looking for is on vacation. Don&apos;t worry — it&apos;s not your fault! Our page just decided to take a break.
        </p>
        <Link href="/" passHref>
          <button className="px-8 py-4 bg-[#2DC071] text-white text-xl rounded-full hover:bg-green-700 transition-all shadow-lg">
            Bring Me Home!
          </button>
        </Link>
      </div>

      <div className="mt-12 w-full">
        <h3 className="text-2xl font-bold text-[#252B42] text-center mb-6">
          While You&apos;re Here,Scroll Down Check Out Our Featured Products!
        </h3>
        <FeaturedProducts />
      </div>

      <div className="mt-8">
        <p className="text-sm text-[#737373] text-center">
          (We promise they won&apos;t disappear like the missing page!)
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
