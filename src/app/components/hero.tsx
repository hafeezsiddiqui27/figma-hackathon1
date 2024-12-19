
// import React from "react";

// const  Herosection = () => {
//   return (
// <div className="relative w-full bg-[url('/hero.jpg')] bg-cover bg-center sm:bg-[top_center] lg:bg-center h-[400px] sm:h-[600px] lg:h-[716px]">

//       {/* Overlay */}
//       <div className="absolute inset-0"></div>

//       {/* Text Content */}
//       <div className="absolute top-40 lg:left-24 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:transform-none lg:text-left text-center text-white px-4">
//         <h2 className="text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-wide mb-2 sm:mb-4">
//           SUMMER 2024
//         </h2>
//         <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[58px] font-bold mb-4 sm:mb-6 leading-tight">
//           NEW COLLECTION
//         </h1>
//         <p className="text-[14px] sm:text-[16px] md:text-[20px] leading-relaxed mb-4 sm:mb-8">
//           We Know How Large Objects Will Act, <br />
//           But Things On a Small Scale.
//         </p>
//         <button className="px-4 py-2 sm:px-6 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
//           SHOP NOW
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Herosection;
import React from "react";

const Herosection = () => {
  return (
    <div className="relative w-full bg-[url('/hero.jpg')] bg-cover bg-center sm:bg-[top_center] lg:bg-center h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[716px]">
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
        <button className="px-4 py-2 sm:px-5 sm:py-3 bg-[#2DC071] text-white font-bold rounded hover:bg-green-700 transition-all">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Herosection;
