// components/FeaturedProducts.tsx
import React from "react";
import Card from "./featcard";

const FeaturedProducts = () => {
    const products = [
        {
          image: "/feat1.jpg",
          title: "Graphic Design",
          desc: "English Department",
          originalPrice: "$16.48",
          discountedPrice: "$6.48",
          colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
        },
        {
            image: "/feat2.jpg",
            title: "Graphic Design",
            desc: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
          },   {
            image: "/feat3.jpg",
            title: "Graphic Design",
            desc: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
          },   {
            image: "/feat4.jpg",
            title: "Graphic Design",
            desc: "English Department",
            originalPrice: "$16.48",
            discountedPrice: "$6.48",
            colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
          },
      ];
      

  return (
    <section className="py-16 px-4">
      {/* Top Section */}
      <div className="w-[691px] h-[102px] mx-auto text-center mb-12">
        <h4 className="text-[20px] font-bold  text-[#737373] mb-2">Featured Products</h4>
        <h3 className="text-xl text-[252b42] mb-2 text-[24px] font-bold">BESTSELLER PRODUCTS</h3>
        <p className="text-sm text-gray-500">Problems trying to resolve the conflict between</p>
      </div>

      {/* Featured Products Cards */}
          <div className="flex flex-wrap justify-center gap-6">
        
              {products.map((product, index) => (
            
          <Card
            key={index}
            image={product.image}
            title={product.title}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            colors={product.colors}
                      />
                      
        ))}
                  
      </div>
    </section>
  );
};

export default FeaturedProducts;
