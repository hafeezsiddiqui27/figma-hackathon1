// components/NavLight.tsx
import React from 'react';
import { FaUser, FaSearch, FaShoppingCart, FaHeart, FaChevronDown } from 'react-icons/fa';

const NavLight = () => {
  return (
    <nav className="bg-white w-full h-[58px] mx-auto  shadow-md">
      <div className="flex justify-between items-center h-full px-6">
        
        {/* Left Section: "BANDAGE" with style */}
        <div className="text-2xl font-bold text-black">
          BANDAGE
        </div>
        
        {/* Middle Section: Links with black text */}
        <div className="flex space-x-8">
          <a href="#" className="text-black hover:text-gray-700">Home</a>
          <a href="/pricing" className="text-black hover:text-gray-700 flex items-center">
            Shop <FaChevronDown className="ml-1 text-sm" />
          </a>
          <a href="/about" className="text-black hover:text-gray-700">About</a>
          <a href="/team" className="text-black hover:text-gray-700">Blog</a>
          <a href="/team" className="text-black hover:text-gray-700">Contact</a>
        </div>

        {/* Right Section: Blue text with icons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-blue-500 flex items-center">
            <FaUser className="mr-2" />
            Login/Signup
          </a>
          <a href="#" className="text-blue-500">
            <FaSearch className="" />
          </a>
          <a href="#" className="text-blue-500">
            <FaShoppingCart className="" />
          </a>
          <a href="#" className="text-blue-500">
            <FaHeart className="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavLight;
