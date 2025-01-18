// components/ProductCard.tsx
import React from "react";

interface ProductCardProps {
  title: string;
  image: string;
  price: string;
  slug: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, price, slug }) => {
  return (
    <div className="product-card">
      <a href={`/products/${slug}`} className="block">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-lg font-bold mt-2">{title}</h3>
        <p className="text-gray-600">{price}</p>
      </a>
    </div>
  );
};

export default ProductCard;
