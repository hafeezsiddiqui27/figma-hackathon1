
import React from "react";

interface CardProps {
  image: string;
  title: string;
  originalPrice: string;
  discountedPrice: string;
  colors: string[]; // Array of color options
}

const Card: React.FC<CardProps> = ({ image, title, originalPrice, discountedPrice, colors }) => {
  return (
    <div className="flex flex-col items-center p-4 mt-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg">
      {/* Image Section */}
      <div className="w-full">
        <img
          src={image}
          alt={title}
          className="w-[250px] h-[300px] object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="mt-4 text-center">
        <h3 className="text-[#252B42] text-[16px] font-bold">{title}</h3>
        <p className="text-[#737373] text-[14px]">English Department</p> {/* Assuming static text for now */}
        <p className="text-[#BDBDBD] text-[16px] font-bold mt-2">
          {originalPrice}{" "}
          <span className="text-[#23856D]">{discountedPrice}</span>
        </p>

        {/* Color options */}
        <div className="flex justify-center gap-2 mt-4">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
