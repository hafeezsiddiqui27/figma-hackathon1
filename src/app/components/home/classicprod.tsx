
// // export default ClassicProduct;
// import Image from "next/image";

// const ClassicProduct = () => {
//   return (
//     <section
//       className="relative h-auto flex items-center justify-center bg-cover bg-center px-4 py-10 sm:px-10"
//       style={{ backgroundImage: "url('/greenbg.png')" }} // Replace with your image path
//     >
//       {/* Content Section */}
//       <div className="text-white space-y-6 w-full sm:w-[28%] ml-0 sm:ml-10 text-center sm:text-left">
//         {/* Summer 2020 */}
//         <h4 className="text-[18px] sm:text-[20px] leading-[30px] font-normal tracking-[0.2px]">
//           SUMMER 2020
//         </h4>

//         {/* Vita Classic Product */}
//         <h1 className="text-[40px] sm:text-[58px] leading-[60px] sm:leading-[80px] font-bold">
//           Vita Classic <br />
//           Product
//         </h1>

//         {/* Description */}
//         <p className="text-[12px] sm:text-[14px] leading-[20px] sm:leading-[20px] font-normal tracking-[0.2px] max-w-[509px] mx-auto sm:mx-0">
//           We know how large objects will act, We know how our objects will act, We
//           know.
//         </p>

//         {/* Price and Button */}
//         <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 mt-6">
//           {/* Price */}
//           <span className="text-[20px] sm:text-[24px] font-bold">$16.48</span>

//           {/* Buy Now Button */}
//           <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 w-full sm:w-40">
//             ADD TO CART
//           </button>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="flex justify-center items-center mt-8 sm:mt-0">
//         <Image
//           src="/grbgim.png"
//           alt="featured product"
//           height={430}
//           width={430}
//           className="object-contain w-[80%] sm:w-[430px]"
//         />
//       </div>
//     </section>
//   );
// };

// export default ClassicProduct;
import Image from "next/image";


const ClassicProduct: React.FC = () => {
 

  return (
    <div className="flex flex-col items-center justify-center text-center mt-28 mb-7 overflow-x-hidden">
   

      <div className="bg-[#23856D] sm:h-[990px] md:h-[713px] w-full mt-16 pt-7 flex items-center justify-between flex-col md:flex-row">
        {/* Text Section */}
        <div className="text-white space-y-4 ml-4 sm:ml-12 md:ml-36 text-center sm:text-left">
          <h3 className="text-[20px]">SUMMER 2020</h3>
          <h2 className="text-[40px] sm:text-[50px] md:text-[58px] font-bold">
            Vita Classic <br /> <span>Product</span>
          </h2>
          <p className="text-[14px] sm:text-[16px]">
            We know how large objects will act, We know <br />
            <span>how objects will act, We know</span>
          </p>

          {/* Price and Button Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 sm:mt-8 pb-7">
            <h3 className="text-[24px] font-bold">{`$16.48`}</h3>
            <button className="text-[14px] font-bold bg-[#2DC071] py-4 px-10 rounded-md hover:bg-green-600 mt-4 sm:mt-0">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full sm:w-[400px] md:w-[510px] flex-shrink-0">
          <Image
            src={"/grbgim.png"}
            alt="classic"
            width={510}
            height={685}
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="flex items-center justify-between mt-16 flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-auto">
          <Image
            src={"/neuralprod.png"}
            alt="universe"
            height={704}
            width={682}
            className="w-full"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left w-full md:w-auto mt-6 md:mt-0">
          <h3 className="text-[#BDBDBD] font-bold text-[16px]">SUMMER 2020</h3>
          <h2 className="text-[#252B42] font-bold text-[30px] sm:text-[40px] mt-8">
            Part of the Neural <br /> Universe
          </h2>
          <p className="text-[#737373] text-[14px] sm:text-[20px] mt-7">
            We know how large objects will act, <br />
            but things on a small scale.
          </p>
          <div className="flex gap-5 mt-5 justify-center md:justify-start">
            <button className="text-white text-[14px] font-bold py-3 px-8 rounded-md bg-[#23A6F0] hover:bg-transparent hover:text-blue-500 md:bg-[#2DC071] md:hover:bg-transparent md:hover:text-[#2DC071]">
              Buy Now
            </button>
            <button className="text-[#23A6F0] text-[14px] font-bold py-3 px-8 rounded-md border-2 border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white md:border-[#2DC071] md:text-[#2DC071] md:hover:bg-transparent md:hover:bg-green-500">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ClassicProduct;