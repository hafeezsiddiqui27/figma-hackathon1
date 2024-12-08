// components/Card.tsx
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
    <div className="w-[238px] h-[615px] bg-white overflow-hidden flex flex-col">
      {/* Image Section */}
      <div className="w-full h-[390px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Details Section */}
      <div className="w-full h-[128px] p-4 justify-center ">
        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="flex items-center space-x-2 mt-2">
          <span className="line-through text-gray-500">{originalPrice}</span>
          <span className="text-green-600">{discountedPrice}</span>
        </div>
        <div className="mt-4">
          <p className="text-sm">Color options:</p>
          <div className="flex space-x-2 mt-2">
            {colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: color }}
                className="w-6 h-6 rounded-full"
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
