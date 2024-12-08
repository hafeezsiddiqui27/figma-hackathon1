import Image from "next/image";

const ShopSection = () => {
  // Array containing data for each card
  const shopItems = [
    { src: "/feat1.jpg", title: "Cloths", items: "5 Items" },
    { src: "/feat2.jpg", title: "Cloths", items: "5 Items" },
    { src: "/feat3.jpg", title: "Cloths", items: "5 Items" },
    { src: "/feat4.jpg", title: "Cloths", items: "5 Items" },
  ];

  return (
    <section className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6">Shop</h2>
      <div className="grid grid-cols-4 gap-4">
        {shopItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 h-60 flex flex-col items-center justify-center text-center text-xl font-bold relative overflow-hidden"
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
