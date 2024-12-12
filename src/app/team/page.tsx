// export default Team
import React from "react";

import Header from "../components/aboutheader";
import Image from "next/image";
import Teamuser from "../components/Teamuser";

const Team = () => {
  return (
    <div>
      <Header />
      <section className="flex flex-col justify-center items-center">
        <h2 className="mt-20 text-gray-500">WHAT WE DO</h2>
        <h1 className="font-montserrat text-5xl font-bold leading-[80px] tracking-[0.2px] text-center underline decoration-transparent">
          Innovation tailored for you
        </h1>

        <div className="flex flex-row">
          <a
            href="/"
            className="font-montserrat text-sm font-bold leading-[24px] tracking-[0.2px] text-center underline decoration-transparent"
          >
            Home
          </a>
          <span className="mx-2"> &gt; </span>
          <span className="font-montserrat text-sm font-bold leading-[24px] tracking-[0.2px] text-center">
            Team
          </span>
        </div>

        <div className="w-full h-[140px] mb-48 flex justify-center items-center mt-36">
          <Image src="/teamheros.png" alt="hero" width={1000} height={500} />
        </div>

        {/* Use Tailwind CSS grid to ensure only 3 Teamuser components per row */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 gap-6 w-full">
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
            <Teamuser
              picture="/feat1.jpg"
              username="John Doe"
              profession="Software Developer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
