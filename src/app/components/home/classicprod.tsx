
// export default ClassicProduct;
import Image from "next/image";

const ClassicProduct = () => {
  return (
    <section
      className="relative h-auto flex items-center justify-center bg-cover bg-center px-4 py-10 sm:px-10"
      style={{ backgroundImage: "url('/greenbg.png')" }} // Replace with your image path
    >
      {/* Content Section */}
      <div className="text-white space-y-6 w-full sm:w-[28%] ml-0 sm:ml-10 text-center sm:text-left">
        {/* Summer 2020 */}
        <h4 className="text-[18px] sm:text-[20px] leading-[30px] font-normal tracking-[0.2px]">
          SUMMER 2020
        </h4>

        {/* Vita Classic Product */}
        <h1 className="text-[40px] sm:text-[58px] leading-[60px] sm:leading-[80px] font-bold">
          Vita Classic <br />
          Product
        </h1>

        {/* Description */}
        <p className="text-[12px] sm:text-[14px] leading-[20px] sm:leading-[20px] font-normal tracking-[0.2px] max-w-[509px] mx-auto sm:mx-0">
          We know how large objects will act, We know how our objects will act, We
          know.
        </p>

        {/* Price and Button */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-4 sm:space-y-0 mt-6">
          {/* Price */}
          <span className="text-[20px] sm:text-[24px] font-bold">$16.48</span>

          {/* Buy Now Button */}
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 w-full sm:w-40">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-8 sm:mt-0">
        <Image
          src="/grbgim.png"
          alt="featured product"
          height={430}
          width={430}
          className="object-contain w-[80%] sm:w-[430px]"
        />
      </div>
    </section>
  );
};

export default ClassicProduct;
