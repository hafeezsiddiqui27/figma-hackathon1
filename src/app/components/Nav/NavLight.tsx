// // // // components/NavLight.tsx
// // // "use client"
// // // import React from 'react';
// // // import { FaUser, FaShoppingCart, FaHeart, FaChevronDown } from 'react-icons/fa';
// // // import SearchBar from '../searchBar';

// // // import { useShoppingCart } from 'use-shopping-cart';

// // // const NavLight = () => {
// // //   const { cartCount } = useShoppingCart()
// // //   return (
// // //     <nav className="bg-white w-full h-[58px] mx-auto  shadow-md">
// // //       <div className="flex justify-between items-center h-full px-6">

// // //         {/* Left Section: "BANDAGE" with style */}
// // //         <div className="text-2xl font-bold text-black">
// // //           BANDAGE
// // //         </div>

// // //         {/* Middle Section: Links with black text */}
// // //         <div className="flex space-x-8">
// // //           <a href="/" className="text-black hover:text-gray-700">Home</a>
// // //           <a href="/listing" className="text-black hover:text-gray-700 flex items-center">
// // //             Shop <FaChevronDown className="ml-1 text-sm" />
// // //           </a>
// // //           <a href="/about" className="text-black hover:text-gray-700">About</a>
// // //           <a href="/team" className="text-black hover:text-gray-700">Team</a>
// // //           <a href="/contact" className="text-black hover:text-gray-700">Contact</a>
// // //         </div>

// // //         {/* Right Section: Blue text with icons */}
// // //         <div className="flex items-center space-x-6">
// // //           <a href="#" className="text-blue-500 flex items-center">
// // //             <FaUser className="mr-2" />
// // //             Login/Signup
// // //           </a>
// // //           {/* <a href="#" className="text-blue-500">
// // //             <FaSearch className="" />
// // //           </a> */}
// // //           <SearchBar />
// // //           {/* <a href="/cart" className="text-blue-500">
// // //             <FaShoppingCart className="" />
// // //           </a> */}
// // //            <a href="/cart" className="text-blue-500 relative">
// // //         <FaShoppingCart className="text-2xl" />

// // //         {/* Display cart count as a badge */}
// // //         {cartCount && cartCount > 0 && (
// // //           <span
// // //             className="absolute -top-3 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
// // //             style={{ fontSize: "12px" }}
// // //           >
// // //             {cartCount}
// // //           </span>
// // //         )}
// // //       </a>
// // //           <a href="#" className="text-blue-500">
// // //             <FaHeart className="" />
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default NavLight;
// // "use client"
// // import React from 'react';
// // import { FaUser, FaHeart, FaChevronDown } from 'react-icons/fa';
// // import SearchBar from '../searchBar';
// // import CartIcon from '../CartIcon';

// // const NavLight = () => {

// //   return (
// //     <nav className="bg-white w-full h-[58px] mx-auto shadow-md overflow-x-hidden">
// //       <div className="flex justify-between items-center h-full px-6 sm:px-8 lg:px-10">

// //         {/* Left Section: "BANDAGE" with style */}
// //         <div className="text-2xl font-bold text-black">
// //           BANDAGE
// //         </div>

// //         {/* Middle Section: Links with black text */}
// //         <div className="hidden md:flex space-x-8">
// //           <a href="/" className="text-black hover:text-gray-700">Home</a>
// //           <a href="/listing" className="text-black hover:text-gray-700 flex items-center">
// //             Shop <FaChevronDown className="ml-1 text-sm" />
// //           </a>
// //           <a href="/about" className="text-black hover:text-gray-700">About</a>
// //           <a href="/team" className="text-black hover:text-gray-700">Team</a>
// //           <a href="/contact" className="text-black hover:text-gray-700">Contact</a>
// //         </div>

// //         {/* Right Section: Blue text with icons */}
// //         <div className="flex items-center space-x-6">
// //           <a href="#" className="text-blue-500 flex items-center hidden sm:flex">
// //             <FaUser className="mr-2" />
// //             Login/Signup
// //           </a>

// //           <SearchBar />
// //           <CartIcon />
// //           <a href="#" className="text-blue-500">
// //             <FaHeart className="" />
// //           </a>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden flex items-center">
// //           <button className="text-blue-500">
// //             <FaChevronDown />
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu (Hamburger for smaller screens) */}
// //       <div className="md:hidden bg-white shadow-md py-2 space-y-4 px-6">
// //         <a href="/" className="text-black hover:text-gray-700">Home</a>
// //         <a href="/listing" className="text-black hover:text-gray-700">Shop</a>
// //         <a href="/about" className="text-black hover:text-gray-700">About</a>
// //         <a href="/team" className="text-black hover:text-gray-700">Team</a>
// //         <a href="/contact" className="text-black hover:text-gray-700">Contact</a>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default NavLight;
// "use client";
// import React, { useState } from "react";
// import {
//   FaUser,
//   FaHeart,
//   FaChevronDown,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import SearchBar from "../Searchbar";
// import CartIcon from "../CartIcon";

// const NavLight = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prevState) => !prevState);
//   };

//   return (
//     <nav className="bg-white w-full h-[58px] mx-auto shadow-md overflow-x-hidden">
//       <div className="flex justify-between items-center h-full px-6 sm:px-8 lg:px-10">
//         {/* Left Section: "BANDAGE" with style */}
//         <div className="text-2xl font-bold text-black">BANDAGE</div>

//         {/* Middle Section: Links with black text */}
//         <div className="hidden md:flex space-x-8">
//           <a href="/" className="text-black hover:text-gray-700">
//             Home
//           </a>
//           <a
//             href="/listing"
//             className="text-black hover:text-gray-700 flex items-center"
//           >
//             Shop <FaChevronDown className="ml-1 text-sm" />
//           </a>
//           <a href="/about" className="text-black hover:text-gray-700">
//             About
//           </a>
//           <a href="/team" className="text-black hover:text-gray-700">
//             Team
//           </a>
//           <a href="/contact" className="text-black hover:text-gray-700">
//             Contact
//           </a>
//         </div>

//         {/* Right Section: Blue text with icons */}
//         <div className="flex items-center space-x-6">
//           <a
//             href="#"
//             className="text-blue-500 flex items-center hidden sm:flex"
//           >
//             <FaUser className="mr-2" />
//             Login/Signup
//           </a>

//           {/* SearchBar */}
//           <div className="relative">
//             <SearchBar />
//           </div>

//           {/* CartIcon */}
//           <CartIcon />

//           {/* Wishlist Icon */}
//           <a href="#" className="text-blue-500">
//             <FaHeart className="" />
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button onClick={toggleMobileMenu} className="text-blue-500">
//             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu (Hamburger for smaller screens) */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-md py-2 space-y-4 px-6">
//           <a href="/" className="text-black hover:text-gray-700 block">
//             Home
//           </a>
//           <a href="/listing" className="text-black hover:text-gray-700 block">
//             Shop
//           </a>
//           <a href="/about" className="text-black hover:text-gray-700 block">
//             About
//           </a>
//           <a href="/team" className="text-black hover:text-gray-700 block">
//             Team
//           </a>
//           <a href="/contact" className="text-black hover:text-gray-700 block">
//             Contact
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavLight;
"use client";
import React, { useState } from "react";
import {
  FaUser,
  FaHeart,
  FaChevronDown,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import SearchBar from "../FindBar";
import CartIcon from "../CartIcon";

const NavLight = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white w-full h-[58px] mx-auto shadow-md">
      <div className="flex justify-between items-center h-full px-6 sm:px-8 lg:px-10">
        {/* Left Section: "BANDAGE" with style */}
        <div className="text-2xl font-bold text-black">BANDAGE</div>

        {/* Middle Section: Links with black text */}
        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-black hover:text-gray-700">
            Home
          </a>
          <a
            href="/listing"
            className="text-black hover:text-gray-700 flex items-center"
          >
            Shop <FaChevronDown className="ml-1 text-sm" />
          </a>
          <a href="/about" className="text-black hover:text-gray-700">
            About
          </a>
          <a href="/team" className="text-black hover:text-gray-700">
            Team
          </a>
          <a href="/contact" className="text-black hover:text-gray-700">
            Contact
          </a>
        </div>

        {/* Right Section: Blue text with icons */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-blue-500 flex items-center  sm:flex">
            <FaUser className="mr-2" />
            Login/Signup
          </a>

          {/* SearchBar */}
          <div className="relative">
            <SearchBar />
          </div>

          {/* CartIcon */}
          <CartIcon />

          {/* Wishlist Icon */}
          <a href="#" className="text-blue-500">
            <FaHeart className="" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-blue-500">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Hamburger for smaller screens) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-2 space-y-4 px-6">
          <a href="/" className="text-black hover:text-gray-700 block">
            Home
          </a>
          <a href="/listing" className="text-black hover:text-gray-700 block">
            Shop
          </a>
          <a href="/about" className="text-black hover:text-gray-700 block">
            About
          </a>
          <a href="/team" className="text-black hover:text-gray-700 block">
            Team
          </a>
          <a href="/contact" className="text-black hover:text-gray-700 block">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavLight;
