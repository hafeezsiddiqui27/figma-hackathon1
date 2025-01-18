import React from "react";
import PricingPlans from "../components/price/Pricingplans";
import Aboutheader from "../components/aboutheader";
import PricingFAQs from "../components/price/pricingfaq";
import Image from "next/image";
import FreeTrial from "../components/price/Freetrial";

const Pricy = () => {
  return (
    <div>
      <div>
        <Aboutheader />
        <div className="flex flex-col items-center w-full  py-20">
          {/* Header Section */}
          <div className="text-center">
            <h2 className="text-[#737373] font-bold text-[16px] mt-5">
              PRICING
            </h2>
            <h1 className="text-[40px] md:text-[58px] font-bold mt-3 text-[#252B42]">
              Simple Pricing
            </h1>
          </div>
        </div>
        <PricingPlans />
        <section className="py-6 w-full">
          <h3 className="text-[#252B42] text-[20px] mt-24 text-center sm:text-[24px]">
            Trusted By Over 4000 Big Companies
          </h3>
          <div className="relative w-full h-[300px]">
            <Image
              src="/aboutcomplogo.png"
              alt="logos"
              layout="fill" // Ensures the image covers the full container
              objectFit="contain" // Keeps the image aspect ratio intact while ensuring it fits within the container
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </section>
        <PricingFAQs />
        <FreeTrial />
      </div>
    </div>
  );
};

export default Pricy;
