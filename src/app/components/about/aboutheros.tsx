import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Header from "../aboutheader";

// Team data
const teamMembers = [
  {
    name: "John Doe",
    profession: "Designer",
    social: { facebook: "#", instagram: "#", twitter: "#" },
    image: "/feat1.jpg",
  },
  {
    name: "Jane Smith",
    profession: "Developer",
    social: { facebook: "#", instagram: "#", twitter: "#" },
    image: "/feat1.jpg",
  },
  {
    name: "Sam Wilson",
    profession: "Project Manager",
    social: { facebook: "#", instagram: "#", twitter: "#" },
    image: "/feat1.jpg",
  },
];

// Statistics data
const stats = [
  { value: "15K", label: "Happy Customers" },
  { value: "150K", label: "Monthly Visitors" },
  { value: "15", label: "Countries Worldwide" },
  { value: "100+", label: "Top Partners" },
];

const AboutAndTeam: React.FC = () => {
  return (
    <div>
      <Header />
      {/* About Us Section */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8">
          <div className="w-full text-center md:text-left md:w-1/2 md:ml-16">
            <h3 className="text-[#252B42] font-bold text-[16px] mb-6">
              ABOUT COMPANY
            </h3>
            <h1 className="text-[#252B42] font-bold text-[32px] sm:text-[48px] md:text-[58px] mb-6">
              ABOUT US
            </h1>
            <p className="text-[#737373] text-[16px] sm:text-[18px] md:text-[20px] mt-5">
              We know how large objects will act, <br />
              but things on a small scale
            </p>
            <div className="mt-7 flex justify-center md:justify-start">
              <button className="px-4 py-3 bg-[#23A6F0] text-[#FAFAFA] rounded-md hover:bg-blue-500 transition-all text-center text-[16px]">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/about/aboutheros.png"
              alt="aboutus"
              height={280}
              width={415}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>
      <div className="flex flex-col sm:flex-row w-full items-start gap-6 py-8 mx-4 sm:mx-20">
        <div>
          <h3 className="text-[#E74040] text-[14px] mb-8">Problems trying</h3>
          <h2 className="font-bold text-[24px] text-[#252B42] sm:mt-2">
            Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do{" "}
            <br /> met sent.
          </h2>
        </div>
        <p className="text-[#737373] text-[14px] sm:mt-16 mt-8 sm:mx-20 mx-4">
          Problems trying to resolve the conflict between the two major realms
          of
          <br />
          Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Statistics Section */}
      <section>
        <div className="flex flex-col items-center mt-11 px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-16 mt-16 w-full px-4 sm:px-0">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <h3 className="font-bold text-[#252B42] text-[48px] sm:text-[58px]">
                  {value}
                </h3>
                <h2 className="font-bold text-[#737373] text-[14px] sm:text-[16px]">
                  {label}
                </h2>
              </div>
            ))}
          </div>
          <div className="mt-16 sm:mt-20 w-full flex justify-center px-0">
            <Image
              src="/about/aboutvideo.png"
              alt="problem"
              width={800}
              height={500}
              className="w-full max-w-[100%] sm:max-w-none h-auto"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <h2 className="text-center text-[40px] font-bold mb-20 text-[#252B42]">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 px-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Use Next.js Image component */}
              <Image
                src={member.image}
                alt={member.name}
                width={316}
                height={231}
                className="mx-auto"
              />
              <h3 className="mt-6 text-[16px] font-bold text-[#252B42]">
                {member.name}
              </h3>
              <p className="text-[#737373] text-[14px] mt-3">
                {member.profession}
              </p>
              <div className="flex justify-center mt-3 space-x-4">
                {/* Social media icons */}
                <Link href={member.social.facebook} className="text-[#23A6F0]">
                  <FaFacebookF size={25} />
                </Link>
                <Link href={member.social.instagram} className="text-[#23A6F0]">
                  <FaInstagram size={25} />
                </Link>
                <Link href={member.social.twitter} className="text-[#23A6F0]">
                  <FaTwitter size={25} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-[#FAFAFA] flex justify-center items-center mt-20 w-full">
        <Image
          src="/about/aboutcomp.png"
          alt="video"
          layout="responsive"
          width={800}
          height={700}
          className="w-full h-auto"
        />
      </div>

      <section>
        <div className="bg-[#2A7CC7] w-full h-auto py-10 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Text Section */}
            <div className="text-left w-full md:w-1/2">
              <h3 className="text-[#FFFFFF] font-bold text-[16px] mb-4 md:mb-6">
                WORK WITH US
              </h3>
              <h2 className="text-[#FFFFFF] font-bold text-[28px] md:text-[40px] mb-4 md:mb-6">
                Now Let&apos;s grow Yours
              </h2>
              <p className="text-[#FFFFFF] text-[14px] md:text-[16px] mb-6">
                The gradual accumulation of information about atomic and <br />
                small-scale behavior during the first quarter of the 20th
              </p>
              <button className="border px-6 py-2 md:px-9 md:py-3 text-[#FFFFFF] rounded-md transition-transform hover:scale-110 hover:bg-[#1E6CB3] hover:border-transparent">
                Button
              </button>
            </div>

            {/* Image Section */}
            <div className="hidden md:block md:w-1/2">
              <Image
                src="/feat3.jpg"
                alt="work"
                height={300}
                width={590}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAndTeam;
