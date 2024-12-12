import Image from "next/image";
import Nav1 from "../components/Nav1";
import NavLight from "../components/NavLight";
import ShopSection from "../components/Shopsection";
import Footer from "../components/Footer";
import Card from "../components/home/featcard";

const ShopPage = () => {
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
    },
    {
      image: "/feat3.jpg",
      title: "Graphic Design",
      desc: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
    },
    {
      image: "/feat4.jpg",
      title: "Graphic Design",
      desc: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
    },
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
    },
    {
      image: "/feat3.jpg",
      title: "Graphic Design",
      desc: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
    },
    {
      image: "/feat4.jpg",
      title: "Graphic Design",
      desc: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
    },
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
    },
    {
      image: "/feat3.jpg",
      title: "Graphic Design",
      desc: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
    },
    {
      image: "/feat4.jpg",
      title: "Graphic Design",
      desc: "English Department",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
      colors: ["#0000FF", "#00FF00", "#FFA500", "#001F3F"], // Blue, Green, Orange, Dark Navy Blue
    },
  ];

  return (
    <div className="bg-white">
      <Nav1 />
      <NavLight />

      <ShopSection />

      <section className="py-6 w-full">
        <div className="relative w-full h-[300px]">
          <Image
            src="/aboutcomplogo.png"
            alt="logos"
            layout="fill" // Ensures the image covers the full container
            objectFit="contain" // Keeps the image aspect ratio intact while ensuring it fits within the container
            className="absolute inset-0 w-full h-full"
          />
        </div>
      </section>
      <Footer />

      {/* Products Section */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Bandage</h2>

        <div>
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
        </div>
      </section>

      {/* Pagination */}
      <div className="flex justify-center space-x-4 py-6">
        <button className="px-4 py-2 border rounded">First</button>
        <button className="px-4 py-2 border rounded">1</button>
        <button className="px-4 py-2 border bg-gray-200 rounded">2</button>
        <button className="px-4 py-2 border rounded">3</button>
        <button className="px-4 py-2 border rounded">Next</button>
      </div>
    </div>
  );
};

export default ShopPage;
