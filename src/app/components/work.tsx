
import Image from "next/image";

const Aboutwork = () => {
  return (
    <section
      className="relative h-screen flex items-center bg-[#2A7CC7] bg-cover bg-center px-10"
    >
      {/* Content Section */}
      <div className="text-white space-y-6 ml-10 w-[45%]">
        {/* Work With Us */}
        <h4 className="text-[20px] leading-[30px] font-normal tracking-[0.2px]">
          WORK WITH US
        </h4>

        {/* Main Heading */}
        <h1 className="text-[58px] leading-[80px] font-bold">
          Now Let&apos;s Grow Yours
        </h1>

        {/* Description */}
        <p className="text-[14px] leading-[20px] font-normal tracking-[0.2px] max-w-[509px]">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
        </p>

        {/* Button */}
        <div className="flex items-center space-x-6">
          <button className="bg-transparent border-white border-2 text-white px-6 py-2 rounded-md transition duration-300 w-40">
            Button
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="absolute right-0 bottom-0 h-full">
        <Image
          src="/feat3.jpg"
          alt="featured product"
          height={470}
          width={470}
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default Aboutwork;
