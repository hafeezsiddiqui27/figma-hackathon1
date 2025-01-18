import Image from "next/image";

const ShopSection = () => {
  // Array containing data for each card
  const shopItems = [
    { src: "/pricing/top1.png", title: "Cloths", items: "5 Items" },
    { src: "/home/hero.jpg", title: "Cloths", items: "5 Items" },
    { src: "/pricing/top2.png", title: "Cloths", items: "5 Items" },
    { src: "/pricing/top3.png", title: "Cloths", items: "5 Items" },
    { src: "/pricing/top4.png", title: "Cloths", items: "3 Items" },
  ];

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Shop</h2>
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {shopItems.map((item, index) => (
          <div
            key={index}
            className="text-white h-60 flex flex-col items-center justify-center text-center text-xl font-bold relative overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-fill opacity-90"
            />
            {/* Text Overlay */}
            <div className="relative z-10">
              <h3>{item.title}</h3>
              <p>{item.items}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopSection;
