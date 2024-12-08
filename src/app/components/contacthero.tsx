
import Image from "next/image";
import Aboutwork from "./work";
import Aboutheader from "./aboutheader";


const Contacthero = () => {
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
      <div className="text-black space-y-6 w-[38%] ml-10">
      
        {/* Summer 2020 */}
        <h4 className="text-[14px] leading-[30px] font-normal tracking-[0.2px]">
        CONTACT US
        </h4>

        {/* Vita Classic Product */}
        <h1 className="text-[58px] leading-[80px] font-bold">
        Get in touch 
today!
        </h1>

        {/* Description */}
        <p className="text-[14px] leading-[20px] font-normal tracking-[0.2px] max-w-[509px]">
          We know how large objects will act, We know how our objects will act, We
          know.
        </p>

        {/* Price and Button */}
        <div className="flex items-center flex-col space-x-6">
       
        <button className=" transition text-sm duration-300 w-48">
        Phone ; +451 215 215 
          </button>
          {/* Buy Now Button */}
          <button className=" transition text-sm mr-28 duration-300 w-48">
            Phone ; +451 215 215 
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
     
      
        <div>
        <div className="flex justify-center items-center mt-20">
        <Image src={"/cont1.png"} alt="video" height={700} width={700} /> </div>
          </div>
           
      </div>
  );
};
 
export default Contacthero;
