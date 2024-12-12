// // import React from 'react'

// // const Aboutheader = () => {
// //   return (
// //       <div>
// //            <header className="bg-white py-6 shadow">
// //         <div className="container mx-auto flex justify-between items-center px-4">
// //           <h1 className="text-2xl font-bold">Bandage</h1>
// //           <nav className="space-x-6">
// //                             <a href="/" className="hover:text-blue-600">Home</a>
// //                             <a href="/about" className="hover:text-blue-600">About</a>
// //             <a href="/team" className="hover:text-blue-600">Team</a>
// //             <a href="/pricing" className="hover:text-blue-600">Pricing</a>
// //             <a href="/contact" className="hover:text-blue-600">Contact</a>
// //           </nav>
// //           <div className="space-x-4 mr-10">
// //             <button className="text-blue-500">Login</button>
// //             <button className="bg-blue-500 text-white px-4 py-2 rounded">Become a member</button>
// //           </div>
// //         </div>
// //       </header>
// //     </div>
// //   )
// // }

// // export default Aboutheader
// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import {
//   FiArrowRight,
//   FiMenu,
//   FiX,
//   FiSearch,
//   FiShoppingCart,
// } from "react-icons/fi";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prevState) => !prevState);
//   };

//   return (
//     <header className="bg-white shadow-md py-4 w-[80vw] md:w-full">
//       <div className="container mx-auto flex items-center justify-between px-4">
//         {/* Logo */}
//         <div className="text-[24px] font-bold text-[#252B42] mr-8">
//           {" "}
//           {/* Add mr-8 for margin-right */}
//           Bandage
//         </div>

//         {/* Navbar (Desktop) */}
//         <nav className="hidden md:flex flex-row items-center gap-8 text-[14px] text-[#737373] font-bold ml-20">
//           <ul className="list-none flex gap-8">
//             {" "}
//             {/* Add list-none here to remove dots */}
//             <Link href="/">
//               <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
//                 Home
//               </li>
//             </Link>
//             <Link href="/product">
//               <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
//                 Product
//               </li>
//             </Link>
//             <Link href="/pricing">
//               <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
//                 Pricing
//               </li>
//             </Link>
//             <Link href="/contact">
//               <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
//                 Contact
//               </li>
//             </Link>
//           </ul>
//         </nav>

//         {/* Icons and Buttons */}
//         <div className="flex items-center gap-4 ml-auto">
//           {/* Search Icon (Hidden on desktop) */}
//           <button className="md:hidden flex items-center justify-center p-2  text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
//             <FiSearch size={20} />
//           </button>

//           {/* Add to Cart Icon (Hidden on desktop) */}
//           <button className="md:hidden flex items-center justify-center p-2 text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
//             <FiShoppingCart size={20} />
//           </button>

//           {/* Login Button (Hidden on mobile) */}
//           <button className="hidden md:block px-4 py-2 text-[#23A6F0] rounded hover:bg-[#23A6F0] font-bold hover:text-white transition-all">
//             Login
//           </button>

//           {/* Become a member Button (Hidden on mobile) */}
//           <button className="hidden md:flex items-center gap-2 px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-all">
//             Become a member
//             <FiArrowRight className="text-lg" />
//           </button>

//           {/* Mobile Hamburger Menu (Appears at the end on mobile) */}
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMobileMenu} className="text-[#252B42]">
//               {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu (Appears when hamburger icon is clicked) */}
//       <div
//         className={`md:hidden ${
//           isMobileMenuOpen ? "block" : "hidden"
//         } bg-white shadow-md mt-4 px-4 py-6 flex justify-center items-center x`}
//       >
//         <ul className="list-none flex flex-col gap-4 text-[20px] text-[#737373] font-bold">
//           {" "}
//           {/* Add list-none here too */}
//           <Link href="/">
//             <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
//               Home
//             </li>
//           </Link>
//           <Link href="/product">
//             <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
//               Product
//             </li>
//           </Link>
//           <Link href="/pricing">
//             <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
//               Pricing
//             </li>
//           </Link>
//           <Link href="/contact">
//             <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
//               Contact
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FiArrowRight,
  FiMenu,
  FiX,
  FiSearch,
  FiShoppingCart,
} from "react-icons/fi";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-white shadow-md py-4 w-screen">
      <div className="mx-auto flex items-center justify-between px-4 w-full max-w-screen-xl">
        {/* Logo */}
        <div className="text-[24px] font-bold text-[#252B42] mr-8">
          Bandage
        </div>

        {/* Navbar (Desktop) */}
        <nav className="hidden md:flex flex-row items-center gap-8 text-[14px] text-[#737373] font-bold ml-20">
          <ul className="list-none flex gap-8">
            <Link href="/">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Home
              </li>
            </Link>
            <Link href="/product">
              <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
                Product
              </li>
            </Link>
            <Link href="/pricing">
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
          {/* Search Icon (Hidden on desktop) */}
          <button className="md:hidden flex items-center justify-center p-2 text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
            <FiSearch size={20} />
          </button>

          {/* Add to Cart Icon (Hidden on desktop) */}
          <button className="md:hidden flex items-center justify-center p-2 text-[#252B42] hover:text-[#23A6F0] hover:border-[#23A6F0] transition-all">
            <FiShoppingCart size={20} />
          </button>

          {/* Login Button (Hidden on mobile) */}
          <button className="hidden md:block px-4 py-2 text-[#23A6F0] rounded hover:bg-[#23A6F0] font-bold hover:text-white transition-all">
            Login
          </button>

          {/* Become a member Button (Hidden on mobile) */}
          <button className="hidden md:flex items-center gap-2 px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-all">
            Become a member
            <FiArrowRight className="text-lg" />
          </button>

          {/* Mobile Hamburger Menu (Appears at the end on mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="text-[#252B42]">
              {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Appears when hamburger icon is clicked) */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white shadow-md mt-4 px-4 py-6 w-full`}
      >
        <ul className="list-none flex flex-col gap-4 text-[20px] text-[#737373] font-bold">
          <Link href="/">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Home
            </li>
          </Link>
          <Link href="/product">
            <li className="cursor-pointer hover:text-[#23A6F0] transition-all">
              Product
            </li>
          </Link>
          <Link href="/pricing">
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
