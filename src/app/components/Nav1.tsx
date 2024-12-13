// // components/NavBar.tsx
// import React from 'react';
// import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

// const Nav1 = () => {
//   return (
//     <nav className="bg-[#252B42] text-white h-[58px] w-full mx-auto">
//       <div className="flex justify-between items-center h-full px-4 text-sm">
        
//         {/* Left Section: Phone and Email */}
//         <div className="flex items-center space-x-4 ">
//           <a href="tel:(225) 555-0118" className="flex items-center">
//             <FaPhoneAlt className="mr-2" />
//             (225) 555-0118
//           </a>
//           <a href="mailto:michelle.rivera@example.com" className="flex items-center">
//             <FaEnvelope className="mr-2" />
//             michelle.rivera@example.com
//           </a>
//         </div>

//         {/* Middle Section: Deal Promo */}
//         <div className="text-center flex-1">
//           <p className="font-semibold">Follow Us and get 40% off</p>
//         </div>

//         {/* Right Section: Social Media Icons */}
//               <div className="flex items-center space-x-4 mr-5">
//                   <p>Follow Us</p>
//           <a href="#" className="text-white hover:text-blue-500">
//             <FaInstagram className=" " />
//           </a>
//           <a href="#" className="text-white hover:text-blue-500">
//             <FaFacebook className=" " />
//           </a>
//           <a href="#" className="text-white hover:text-blue-500">
//             <FaTwitter className=" " />
//           </a>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Nav1;
// components/NavBar.tsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Nav1 = () => {
  return (
    <nav className="bg-[#252B42] text-white h-[58px] w-full mx-auto lg:block hidden">
      <div className="flex justify-between items-center h-full px-4 text-sm">
        
        {/* Left Section: Phone and Email */}
        <div className="flex items-center space-x-4 ">
          <a href="tel:(225) 555-0118" className="flex items-center">
            <FaPhoneAlt className="mr-2" />
            (225) 555-0118
          </a>
          <a href="mailto:michelle.rivera@example.com" className="flex items-center">
            <FaEnvelope className="mr-2" />
            michelle.rivera@example.com
          </a>
        </div>

        {/* Middle Section: Deal Promo */}
        <div className="text-center flex-1">
          <p className="font-semibold">Follow Us and get 40% off</p>
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex items-center space-x-4 mr-5">
          <p>Follow Us</p>
          <a href="#" className="text-white hover:text-blue-500">
            <FaInstagram className=" " />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <FaFacebook className=" " />
          </a>
          <a href="#" className="text-white hover:text-blue-500">
            <FaTwitter className=" " />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav1;
