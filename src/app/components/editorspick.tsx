
import React from 'react';

const EditorSection = () => {
  return (
    <section className="py-16 px-4 min-h-screen flex flex-col justify-center bg-[#FAFAFA]">
      {/* Editors Pick Title */}
      <div className="text-center mb-[-30px]">
        <h2 className="text-3xl font-bold">Editor&apos;s Pick</h2>
        <p className="text-xl text-gray-700 mt-4">Problems trying to resolve the conflict between </p>
      </div>

      {/* Grid of Images */}
      <div className="flex justify-center py-10">
        <div className="flex flex-wrap gap-6 max-w-screen-xl w-full justify-center px-4">
          {/* First Image (30% Width, Fixed Height 500px) */}
          <div className="w-full md:w-[30%] h-[500px] p-2">
            <img src="edimen.png" alt="Image 1" className="w-full h-full object-cover" />
          </div>

          {/* Second Image (20% Width, Fixed Height 500px) */}
          <div className="w-full md:w-[20%] h-[500px] p-2">
            <img src="ediwomen.png" alt="Image 2" className="w-full h-full object-cover" />
          </div>

          {/* Third and Fourth Image Container (stacked in column) */}
          <div className="w-full md:w-[30%] flex flex-col gap-6 p-2">
            {/* Third Image (Width 240px, Height 242px) */}
            <div className="h-[231px] w-[240px]">
              <img src="edigirl.png" alt="Image 3" className="w-full h-full object-cover" />
            </div>

            {/* Fourth Image (Width 240px, Height 242px) */}
            <div className="h-[231px] w-[240px]">
              <img src="edikid.png" alt="Image 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorSection;
