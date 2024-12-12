
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const FreeTrial = () => {
  return (
    <div>
      <div className="py-12 bg-[#FFFFFF] text-center px-4 sm:px-8 mt-10">
        {/* Heading */}
        <h2 className="text-[24px] sm:text-[32px] font-bold text-[#252B42] leading-tight">
          Start your 14 days Free Trial
        </h2>

        {/* Subtext */}
        <p className="text-[#737373] text-[14px] sm:text-[16px] mt-4 max-w-md mx-auto w-1/2 leading-relaxed">
          Met minim Mollie non deserunt Alamo est sit cliquey dolor do met sent.
          RELUIT official consequat.
        </p>

        {/* Button */}
        <button className="mt-6 bg-[#23A6F0] rounded-md text-[14px] sm:text-[16px] font-bold text-[#FFFFFF] px-6 sm:px-8 py-3 hover:bg-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105">
          Try it free now
        </button>

        {/* Social Icons */}
        <div className="flex justify-center mt-10 gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-[#55ACEE] hover:opacity-80 transition-opacity duration-200"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="#"
            className="text-[#395185] hover:opacity-80 transition-opacity duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF size={24} />
          </Link>
          <Link
            href="#"
            className="text-[#000000] hover:opacity-80 transition-opacity duration-200"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="#"
            className="text-[#0A66C2] hover:opacity-80 transition-opacity duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeTrial;
