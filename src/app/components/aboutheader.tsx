"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import CartIcon from "./CartIcon";
import SearchBar from "./FindBar";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white shadow-md py-4 w-full">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 max-w-screen-xl">
        {/* Logo */}
        <div className="text-[24px] font-bold text-[#252B42] mr-8">Bandage</div>
        <div className="relative">
          <SearchBar />
        </div>

        {/* Navbar (Desktop) */}
        <nav className="hidden md:flex flex-row items-center gap-6 text-[14px] text-[#737373] font-bold ml-10">
          <ul className="list-none flex gap-6">
            <Link href="/">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Home
              </li>
            </Link>
            <Link href="/listing">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Product
              </li>
            </Link>
            <Link href="/price">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Pricing
              </li>
            </Link>
            <Link href="/contact">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Contact
              </li>
            </Link>
          </ul>
        </nav>

        {/* Icons and Buttons */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search Bar */}

          {/* Cart Icon */}
          <CartIcon />

          {/* Login Button (Hidden on mobile) */}
          <button className="hidden md:block px-4 py-2 text-[#23A6F0] rounded hover:bg-[#23A6F0] font-bold hover:text-white transition-all">
            Login
          </button>

          {/* Become a member Button (Hidden on mobile) */}
          <button className="hidden md:flex items-center gap-2 px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-all">
            Become a member
            <FiArrowRight className="text-lg" />
          </button>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-[#252B42]">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white shadow-md mt-4 px-4 py-6 w-full`}
      >
        <ul className="list-none flex flex-col gap-4 text-[18px] text-[#737373] font-bold">
          <Link href="/">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Home
            </li>
          </Link>
          <Link href="/listing">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Product
            </li>
          </Link>
          <Link href="/price">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Pricing
            </li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
