
// export default ClassicProduct;
import Image from "next/image";

const ClassicProduct = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-around bg-cover bg-center px-10 "
      style={{ backgroundImage: "url('/greenbg.png')" }} // Replace with your image path
    >
      {/* Content Section */}
      <div className="text-white space-y-6 w-[28%] ml-10">
        {/* Summer 2020 */}
        <h4 className="text-[20px] leading-[30px] font-normal tracking-[0.2px]">
          SUMMER 2020
        </h4>

        {/* Vita Classic Product */}
        <h1 className="text-[58px] leading-[80px] font-bold">
          Vita Classic <br />
          Product
        </h1>

        {/* Description */}
        <p className="text-[14px] leading-[20px] font-normal tracking-[0.2px] max-w-[509px]">
          We know how large objects will act, We know how our objects will act, We
          know.
        </p>

        {/* Price and Button */}
        <div className="flex items-center space-x-6">
          {/* Price */}
          <span className="text-[24px] font-bold">$16.48</span>

          {/* Buy Now Button */}
          <button className="bg-green-500 text-white px-6 py-2 rounded-md  hover:bg-green-600 transition duration-300 w-40">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-20">
        <Image
          src="/grbgim.png"
          alt="featured product"
          height={430}
          width={430}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default ClassicProduct;
