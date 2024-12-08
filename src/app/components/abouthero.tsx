
import Image from "next/image";
import Aboutwork from "./work";
import Aboutheader from "./aboutheader";


const AboutHero = () => {
    return (
        <div className="">
            <Aboutheader />
    <section className="relative h-screen flex items-center justify-around bg-cover bg-center px-10 bg-white overflow-hidden">
      {/* Eclipse Background */}
      <div className="absolute w-full h-full pointer-events-none">
        {/* Large Eclipse */}
        <div
          className="absolute bg-[#FFE9EA] rounded-full opacity-30"
          style={{
            width: "484.06px",
            height: "484.06px",
            top: "50%",
            right: "30%",
            transform: "translate(50%, -50%)",
          }}
        ></div>

        {/* Small Eclipse */}
        <div
          className="absolute bg-[#FFE9EA] rounded-full opacity-50"
          style={{
            width: "77.39px",
            height: "77.39px",
            top: "25%",
            right: "50%",
            transform: "translate(50%, -50%)",
          }}
              ></div>
               <div
          className="absolute bg-[#FFE9EA] rounded-full opacity-50"
          style={{
            width: "40.39px",
            height: "40.39px",
            top: "70%",
            right: "8%",
            transform: "translate(50%, -50%)",
          }}
        ></div>
      </div>

      {/* Content Section */}
      <div className="text-black space-y-6 w-[28%] ml-10">
      
        {/* Summer 2020 */}
        <h4 className="text-[14px] leading-[30px] font-normal tracking-[0.2px]">
        ABOUT COMPANY
        </h4>

        {/* Vita Classic Product */}
        <h1 className="text-[58px] leading-[80px] font-bold">
        ABOUT US
        </h1>

        {/* Description */}
        <p className="text-[14px] leading-[20px] font-normal tracking-[0.2px] max-w-[509px]">
          We know how large objects will act, We know how our objects will act, We
          know.
        </p>

        {/* Price and Button */}
        <div className="flex items-center space-x-6">
       

          {/* Buy Now Button */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300 w-48">
            GET QUOTE NOW
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative z-10 mb-32 mr-14 flex justify-center items-center mt-20">
        <Image
          src="/abouthero.png"
          alt="featured product"
          height={430}
          width={430}
          className="object-contain"
        />
      </div>
      </section>
     
      <section className="bg-white py-10 flex">
  <div className="container mx-auto px-4">
    <div className="flex justify-around items-center text-left">
      {/* Heading and Paragraph in a Row */}
      <h3 className="text-[24px] font-bold leading-[32px] tracking-[0.1px] w-[35%]">
        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
      </h3>
      <p className="text-[14px] leading-[20px] font-normal tracking-[0.2px] w-[40%]">
        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
      </p>
    </div>
  </div>
</section>

            <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around items-center text-center">
          {/* Single Stat Item */}
          <div className="flex flex-col space-y-2 w-[20%]">
            <span className="text-4xl font-bold">15k</span>
            <span className="text-gray-600">Happy Customers</span>
          </div>

          <div className="flex flex-col space-y-2 w-[20%]">
            <span className="text-4xl font-bold">150k</span>
            <span className="text-gray-600">Monthly Visitors</span>
          </div>

          <div className="flex flex-col space-y-2 w-[20%]">
            <span className="text-4xl font-bold">15</span>
            <span className="text-gray-600">Countries Worldwide</span>
          </div>

          <div className="flex flex-col space-y-2 w-[20%]">
            <span className="text-4xl font-bold">100+</span>
            <span className="text-gray-600">Top Partners</span>
          </div>
        </div>
      </div>
            </section>
            <section >
                <div className="flex justify-center items-center mt-20">
                <Image src={"/aboutvideo.png"} alt="video" height={700} width={700} /> </div>
                <div className="bg-[#FAFAFA] flex justify-center items-center mt-20 ">
                <Image src={"/aboutcomp.png"} alt="vido" height={700} width={700}/>
                </div>
                <Aboutwork />
            </section>
           
      </div>
  );
};

export default AboutHero;
