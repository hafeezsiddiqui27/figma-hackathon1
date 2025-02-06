
// // // "use client";
// // // import React, { useState } from "react";
// // // import {
// // //   FaUser,
// // //   FaHeart,
// // //   FaChevronDown,
// // //   FaBars,
// // //   FaTimes,
// // // } from "react-icons/fa";
// // // import SearchBar from "../FindBar";
// // // import CartIcon from "../CartIcon";

// // // const NavLight = () => {
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// // //   const toggleMobileMenu = () => {
// // //     setIsMobileMenuOpen((prevState) => !prevState);
// // //   };

// // //   return (
// // //     <nav className="bg-white w-full h-[58px] mx-auto shadow-md">
// // //       <div className="flex justify-between items-center h-full px-6 sm:px-8 lg:px-10">
// // //         {/* Left Section: "BANDAGE" with style */}
// // //         <div className="text-2xl font-bold text-black">BANDAGE</div>

// // //         {/* Middle Section: Links with black text */}
// // //         <div className="hidden md:flex space-x-8">
// // //           <a href="/" className="text-black hover:text-gray-700">
// // //             Home
// // //           </a>
// // //           <a
// // //             href="/listing"
// // //             className="text-black hover:text-gray-700 flex items-center"
// // //           >
// // //             Shop <FaChevronDown className="ml-1 text-sm" />
// // //           </a>
// // //           <a href="/about" className="text-black hover:text-gray-700">
// // //             About
// // //           </a>
// // //           <a href="/team" className="text-black hover:text-gray-700">
// // //             Team
// // //           </a>
// // //           <a href="/contact" className="text-black hover:text-gray-700">
// // //             Contact
// // //           </a>
// // //         </div>

// // //         {/* Right Section: Blue text with icons */}
// // //         <div className="flex items-center space-x-6">
// // //           <a href="#" className="text-blue-500 flex items-center  sm:flex">
// // //             <FaUser className="mr-2" />
// // //             Login/Signup
// // //           </a>

// // //           {/* SearchBar */}
// // //           <div className="relative">
// // //             <SearchBar />
// // //           </div>

// // //           {/* CartIcon */}
// // //           <CartIcon />

// // //           {/* Wishlist Icon */}
// // //           <a href="#" className="text-blue-500">
// // //             <FaHeart className="" />
// // //           </a>
// // //         </div>

// // //         {/* Mobile Menu Button */}
// // //         <div className="md:hidden flex items-center">
// // //           <button onClick={toggleMobileMenu} className="text-blue-500">
// // //             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// // //           </button>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu (Hamburger for smaller screens) */}
// // //       {isMobileMenuOpen && (
// // //         <div className="md:hidden bg-white shadow-md py-2 space-y-4 px-6">
// // //           <a href="/" className="text-black hover:text-gray-700 block">
// // //             Home
// // //           </a>
// // //           <a href="/listing" className="text-black hover:text-gray-700 block">
// // //             Shop
// // //           </a>
// // //           <a href="/about" className="text-black hover:text-gray-700 block">
// // //             About
// // //           </a>
// // //           <a href="/team" className="text-black hover:text-gray-700 block">
// // //             Team
// // //           </a>
// // //           <a href="/contact" className="text-black hover:text-gray-700 block">
// // //             Contact
// // //           </a>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // };

// // // export default NavLight;
// // "use client";
// // import React, { useState } from "react";
// // import {
// //   FaUser,
// //   FaHeart,
// //   FaChevronDown,
// //   FaBars,
// //   FaTimes,
// // } from "react-icons/fa";
// // import SearchBar from "../FindBar";
// // import CartIcon from "../CartIcon";
// // import Link from "next/link"; // Import Link from Next.js
// // import { UserButton } from "@clerk/nextjs";

// // const NavLight = () => {
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// //   const toggleMobileMenu = () => {
// //     setIsMobileMenuOpen((prevState) => !prevState);
// //   };

// //   return (
// //     <nav className="bg-white w-full h-[58px] mx-auto shadow-md">
// //       <div className="flex justify-between items-center h-full px-6 sm:px-8 lg:px-10">
// //         {/* Left Section: "BANDAGE" with style */}
// //         <div className="text-2xl font-bold text-black">BANDAGE</div>

// //         {/* Middle Section: Links with black text */}
// //         <div className="hidden md:flex space-x-8">
// //           <Link href="/" className="text-black hover:text-gray-700">
// //             Home
// //           </Link>
// //           <Link href="/listing" className="text-black hover:text-gray-700 flex items-center">
// //             Shop <FaChevronDown className="ml-1 text-sm" />
// //           </Link>
// //           <Link href="/about" className="text-black hover:text-gray-700">
// //             About
// //           </Link>
// //           <Link href="/team" className="text-black hover:text-gray-700">
// //             Team
// //           </Link>
// //           <Link href="/contact" className="text-black hover:text-gray-700">
// //             Contact
// //           </Link>
// //         </div>

// //         {/* Right Section: Blue text with icons */}
// //         <div className="flex items-center space-x-6">
// //           <Link href="/sign-in" className="text-blue-500 flex items-center sm:flex">
// //             <FaUser className="mr-2" />
// //             Login/Signup
// //             <UserButton />
// //           </Link>

// //           {/* SearchBar */}
// //           <div className="relative">
// //             <SearchBar />
// //           </div>

// //           {/* CartIcon */}
// //           <CartIcon />

// //           {/* Wishlist Icon */}
// //           <Link href="#" className="text-blue-500">
// //             <FaHeart />
// //           </Link>
// //         </div>

// //         {/* Mobile Menu Button */}
// //         <div className="md:hidden flex items-center">
// //           <button onClick={toggleMobileMenu} className="text-blue-500">
// //             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
// //           </button>
// //         </div>
// //       </div>

// //       {/* Mobile Menu (Hamburger for smaller screens) */}
// //       {isMobileMenuOpen && (
// //         <div className="md:hidden bg-white shadow-md py-2 space-y-4 px-6">
// //           <Link href="/" className="text-black hover:text-gray-700 block">
// //             Home
// //           </Link>
// //           <Link href="/listing" className="text-black hover:text-gray-700 block">
// //             Shop
// //           </Link>
// //           <Link href="/about" className="text-black hover:text-gray-700 block">
// //             About
// //           </Link>
// //           <Link href="/team" className="text-black hover:text-gray-700 block">
// //             Team
// //           </Link>
// //           <Link href="/contact" className="text-black hover:text-gray-700 block">
// //             Contact
// //           </Link>
// //         </div>
// //       )}
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
// import SearchBar from "../FindBar";
// import CartIcon from "../CartIcon";
// import Link from "next/link"; // Import Link from Next.js
// import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs"; // Import SignedIn, SignedOut

// const NavLight = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prevState) => !prevState);
//   };

//   return (
//     <nav className="bg-white w-full h-[58px] mx-auto shadow-md">
//       <div className="flex justify-between items-center h-full px-6 sm:px-8 lg:px-10">
//         {/* Left Section: "BANDAGE" with style */}
//         <div className="text-2xl font-bold text-black">BANDAGE</div>

//         {/* Middle Section: Links with black text */}
//         <div className="hidden md:flex space-x-8">
//           <Link href="/" className="text-black hover:text-gray-700">
//             Home
//           </Link>
//           <Link href="/listing" className="text-black hover:text-gray-700 flex items-center">
//             Shop <FaChevronDown className="ml-1 text-sm" />
//           </Link>
//           <Link href="/about" className="text-black hover:text-gray-700">
//             About
//           </Link>
//           <Link href="/team" className="text-black hover:text-gray-700">
//             Team
//           </Link>
//           <Link href="/contact" className="text-black hover:text-gray-700">
//             Contact
//           </Link>
//         </div>

//         {/* Right Section: Blue text with icons */}
//         <div className="flex items-center space-x-6">
//           {/* Conditionally Render Login/Signup or UserButton based on authentication */}
          

//           {/* SearchBar */}
//           <div className="relative">
//             <SearchBar />
//           </div>

//           {/* CartIcon */}
//           <CartIcon />

//           {/* Wishlist Icon */}
//           <Link href="#" className="text-blue-500">
//             <FaHeart />
//           </Link>

//           <SignedOut>
//             <Link href="/sign-in" className="text-blue-500 flex items-center sm:flex">
//               <FaUser className="mr-2" />
//               Login/Signup
//             </Link>
//           </SignedOut>

//           <SignedIn>
//             <UserButton />
//           </SignedIn>
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
//           <Link href="/" className="text-black hover:text-gray-700 block">
//             Home
//           </Link>
//           <Link href="/listing" className="text-black hover:text-gray-700 block">
//             Shop
//           </Link>
//           <Link href="/about" className="text-black hover:text-gray-700 block">
//             About
//           </Link>
//           <Link href="/team" className="text-black hover:text-gray-700 block">
//             Team
//           </Link>
//           <Link href="/contact" className="text-black hover:text-gray-700 block">
//             Contact
//           </Link>
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
import Link from "next/link"; // Import Link from Next.js
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs"; // Import SignedIn, SignedOut

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
          <Link href="/" className="text-black hover:text-gray-700">
            Home
          </Link>
          <Link href="/listing" className="text-black hover:text-gray-700 flex items-center">
            Shop <FaChevronDown className="ml-1 text-sm" />
          </Link>
          <Link href="/about" className="text-black hover:text-gray-700">
            About
          </Link>
          <Link href="/team" className="text-black hover:text-gray-700">
            Team
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-700">
            Contact
          </Link>
        </div>

        {/* Right Section: Blue text with icons */}
        <div className="flex items-center space-x-6">
          {/* SearchBar */}
          <div className="relative">
            <SearchBar />
          </div>

          {/* CartIcon */}
          <CartIcon />

          {/* Wishlist Icon */}
          <Link href="#" className="text-blue-500">
            <FaHeart />
          </Link>

          {/* Conditionally Render Login/Signup or UserButton based on authentication */}
          <SignedOut>
            <Link href="/sign-in" className="text-blue-500 flex items-center sm:flex">
              <FaUser className="mr-2" />
              Login/Signup
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
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
          <Link href="/" className="text-black hover:text-gray-700 block">
            Home
          </Link>
          <Link href="/listing" className="text-black hover:text-gray-700 block">
            Shop
          </Link>
          <Link href="/about" className="text-black hover:text-gray-700 block">
            About
          </Link>
          <Link href="/team" className="text-black hover:text-gray-700 block">
            Team
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-700 block">
            Contact
          </Link>

          {/* Add Login/Signup or UserButton in Mobile Menu */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <SignedOut>
              <Link href="/sign-in" className="text-blue-500 flex items-center sm:flex">
                <FaUser className="mr-2" />
                Login/Signup
              </Link>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavLight;
