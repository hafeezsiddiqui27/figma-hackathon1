
import Link from "next/link";
import React from "react";

const Herosection = () => {
  return (
    <div className="relative w-full bg-[url('/home/hero.jpg')] bg-cover bg-center sm:bg-[top_center] lg:bg-center h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[716px]">
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-start lg:pl-16 text-white text-center lg:text-left px-4 sm:px-6 md:px-8">
        <h2 className="text-[12px] sm:text-[14px] md:text-[16px] font-semibold tracking-wide mb-2 sm:mb-3">
          SUMMER 2024
        </h2>
        <h1 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[58px] font-bold mb-4 sm:mb-5 leading-tight">
          NEW COLLECTION
        </h1>
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed mb-4 sm:mb-6">
          We Know How Large Objects Will Act, <br />
          But Things On a Small Scale.
        </p>
    

<Link href="/producting">
  <button className="px-4 py-2 sm:px-5 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
    SHOP NOW
  </button>
</Link>

      </div>
    </div>
  );
};

export default Herosection;
