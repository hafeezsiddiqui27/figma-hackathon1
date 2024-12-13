
// import Image from "next/image";
// import React from "react";

// const EditorSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center text-center mt-16 mb-7 bg-[#FAFAFA] pt-3">
//       <div>
//         <h2 className="text-[#252B42] font-bold text-[24px] mb-2">
//           EDITOR&apos;S PICK
//         </h2>
//         <p className="text-[#737373] text-[14px]">
//           Problems Trying to Resolve the Conflict Between
//         </p>
//       </div>

//       <div className="hidden sm:flex justify-center items-start gap-6 mt-6">
//         <div className="relative">
//           <Image src={"/edimen.png"} alt="men" width={509} height={500} />
//           <div className="absolute bottom-4 left-4 w-[160px] h-[48px] bg-white flex items-center justify-center">
//             <span className="text-[#252B42] font-bold text-lg">MEN</span>
//           </div>
//         </div>

//         <div className="relative">
//           <Image src={"/ediwomen.png"} alt="women" width={240} height={500} />
//           <div className="absolute bottom-4 left-4 w-[160px] h-[48px] bg-white flex items-center justify-center">
//             <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
//           </div>
//         </div>

//         <div className="flex flex-col gap-6">
//           <div className="relative">
//             <Image src={"/edigirl.png"} alt="accessories" width={240} height={242} />
//             <div className="absolute bottom-4 left-4 w-[160px] h-[48px] bg-white flex items-center justify-center">
//               <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
//             </div>
//           </div>

//           <div className="relative">
//             <Image src={"/edikid.png"} alt="kids" width={240} height={242} />
//             <div className="absolute bottom-4 left-4 w-[160px] h-[48px] bg-white flex items-center justify-center">
//               <span className="text-[#252B42] font-bold text-lg">KIDS</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="sm:hidden flex flex-col items-center justify-center gap-6 mt-6">
//         <div className="relative w-[90%] sm:w-full">
//           <Image src={"/men.png"} alt="men" width={509} height={500} />
//           <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//             <span className="text-[#252B42] font-bold text-lg">MEN</span>
//           </div>
//         </div>

//         <div className="relative w-[90%] sm:w-full ml-24">
//           <Image src={"/women.png"} alt="women" width={240} height={500} />
//           <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//             <span className="text-[#252B42] font-bold text-lg">WOMEN</span>
//           </div>
//         </div>

//         <div className="flex flex-col gap-6 w-[90%] sm:w-full">
//           <div className="relative ml-12">
//             <Image src={"/accessories.png"} alt="accessories" width={240} height={242} />
//             <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//               <span className="text-[#252B42] font-bold text-lg">ACCESSORIES</span>
//             </div>
//           </div>

//           <div className="relative ml-12">
//             <Image src={"/kids.png"} alt="kids" width={240} height={242} />
//             <div className="absolute bottom-4 left-4 w-[170px] h-[48px] bg-white flex items-center justify-center">
//               <span className="text-[#252B42] font-bold text-lg">KIDS</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditorSection;
import Image from "next/image";
import React from "react";

const EditorSection = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-16 mb-7 bg-[#FAFAFA] pt-3">
      {/* Heading */}
      <div>
        <h2 className="text-[#252B42] font-bold text-[24px] mb-2">
          EDITOR&apos;S PICK
        </h2>
        <p className="text-[#737373] text-[14px]">
          Problems Trying to Resolve the Conflict Between
        </p>
      </div>

      {/* Images for Large Screens */}
      <div className="hidden sm:flex justify-center items-start gap-6 mt-6">
        <div className="relative">
          <Image src="/edimen.png" alt="men" width={509} height={500} />
        </div>
        <div className="relative">
          <Image src="/ediwomen.png" alt="women" width={240} height={500} />
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative">
            <Image src="/edigirl.png" alt="accessories" width={240} height={242} />
          </div>
          <div className="relative">
            <Image src="/edikid.png" alt="kids" width={240} height={242} />
          </div>
        </div>
      </div>

      {/* Images for Small Screens */}
      <div className="sm:hidden flex flex-col items-center gap-6 mt-6">
        <div className="relative w-[90%] sm:w-full">
          <Image src="/edimen.png" alt="men" width={509} height={500} className="w-full h-auto" />
        </div>
        <div className="relative w-[90%] sm:w-full">
          <Image src="/ediwomen.png" alt="women" width={240} height={500} className="w-full h-auto" />
        </div>
        <div className="relative w-[90%] sm:w-full">
          <Image src="/edigirl.png" alt="accessories" width={240} height={242} className="w-full h-auto" />
        </div>
        <div className="relative w-[90%] sm:w-full">
          <Image src="/edikid.png" alt="kids" width={240} height={242} className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default EditorSection;
