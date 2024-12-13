// // import React from 'react'
// // import Image from 'next/image'

// // const Herosection = () => {
// //   return (
// //     <div className="relative w-full h-[716px] bg-cover">
// //       {/* Background Image */}
// //       <Image
// //         src="/hero.jpg"
// //         alt="maingirl"
// //         height={716}
// //         width={1440}
// //         className="w-full h-full object-cover"
// //       />
      
// //       {/* Text Overlay */}
// //       <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
// //         <div className="w-full sm:w-[599px] h-auto gap-[25px] text-center sm:text-left">
// //           <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-white">
// //             SUMMER 2020
// //           </h5>
// //           <h1 className="font-montserrat font-bold text-[40px] sm:text-[58px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-white">
// //             NEW COLLECTION
// //           </h1>
// //           <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px] tracking-[0.2px] text-white w-full sm:w-[376px]">
// //             We know how large objects will act,
// //             but things on a small scale.
// //           </h4>
// //           <br />
// //           <button className="w-full sm:w-auto bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] gap-[10px] text-white font-montserrat">
// //            Shop Now
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Herosection
// import React from 'react';
// import Image from 'next/image';

// const Herosection = () => {
//   return (
//     <div className="relative w-full h-[716px] sm:h-[716px] bg-cover">
//       {/* Background Image */}
//       <Image 
//         src="/hero.jpg" 
//         alt="maingirl" 
//         height={716} 
//         width={1440} 
//         className="w-full h-full object-cover" 
//       />

//       {/* Text Overlay */}
//       <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start p-8 sm:p-12">
//         <div className="flex flex-col gap-4 sm:gap-[25px] text-center sm:text-left w-full sm:w-[599px]">
//           <h5 className="font-montserrat font-bold text-[12px] sm:text-[16px] leading-[16px] sm:leading-[24px] tracking-[0.1px] text-white">
//             SUMMER 2020
//           </h5>
//           <h1 className="font-montserrat font-bold text-[28px] sm:text-[58px] leading-[36px] sm:leading-[80px] tracking-[0.2px] text-white">
//             NEW COLLECTION
//           </h1>
//           <h4 className="font-montserrat font-normal text-[14px] sm:text-[20px] leading-[20px] sm:leading-[30px] tracking-[0.2px] text-white w-full sm:w-[376px]">
//             We know how large objects will act, 
//             but things on a small scale.
//           </h4>
//           <button className="w-full sm:w-auto bg-[#2DC071] py-3 sm:py-[12px] px-[30px] sm:px-[40px] rounded-[5px] text-white font-montserrat">
//             Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Herosection;
import React from "react";

const  Herosection = () => {
  return (
    <div className="relative bg-[url('/hero.jpg')] bg-cover bg-center sm:bg-[top_center] lg:bg-center h-[400px] sm:h-[600px] lg:h-[716px] ">
      {/* Overlay */}
      <div className="absolute inset-0"></div>

      {/* Text Content */}
      <div className="absolute top-40 lg:left-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:text-left text-center text-white px-4">
        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-wide mb-2 sm:mb-4">
          SUMMER 2024
        </h2>
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-bold mb-4 sm:mb-6 leading-tight">
          NEW COLLECTION
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed mb-4 sm:mb-8">
          We Know How Large Objects Will Act, <br />
          But Things On a Small Scale.
        </p>
        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Herosection;