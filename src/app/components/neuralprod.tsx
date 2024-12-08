
import Image from "next/image";

const NeuralProduct = () => {
  return (
    <section
      className="relative h-screen flex items-center ml-40 bg-white bg-cover bg-center px-10 "
     
      >
           {/* Image Section */}
      <div className="flex justify-center items-center mb-16">
        <Image
          src="/neuralprod.png"
          alt="featured product"
          height={500}
          width={500}
          className="object-contain"
        />
      </div>
      {/* Content Section */}
      <div className="text-black space-y-6 w-[40%] ">
        {/* Summer 2020 */}
        <h4 className="text-[20px] leading-[30px] font-normal text-gray-500 text-sm tracking-[0.2px]">
          SUMMER 2020
        </h4>

        {/* Vita Classic Product */}
        {/* <h1 className="text-[58px]  font-bold">
          Part of the Neural Universe
        </h1> */}
                <h2 className="text-[40px] leading-[50px] font-bold tracking-[0.2px]">
          Part of the Neural Universe
        </h2>

        {/* Description */}
        <p className="text-[14px] leading-[20px] font-normal tracking-[0.2px] max-w-[509px]">
          We know how large objects will act, We know how our objects will act, We
          know.
        </p>

        {/* Price and Button */}
        <div className="flex items-center space-x-6">
          {/* Price */}
        

          {/* Buy Now Button */}
          <button className="bg-green-500 text-black px-6 py-2 rounded-md  hover:bg-green-600 transition duration-300 w-40">
            BUY NOW
                  </button>
                  <button className="bg-white text-black px-6 py-2 rounded-md  border-green-500 border-2 transition duration-300 w-40">
            READ MORE
          </button>
        </div>
      </div>

     
    </section>
  );
};

export default NeuralProduct;
