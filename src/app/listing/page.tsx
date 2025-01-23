import Nav1 from "../components/Nav/Nav1";
import NavLight from "../components/Nav/NavLight";
import ShopSection from "../components/Shopsection";

import Header from "../components/aboutheader";

import ProductList from "../products/page";

const ShopPage = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* <Nav1 />
      <NavLight /> */}
      <div className="hidden md:block">
        <Nav1 />
        <NavLight />
      </div>

      <div className="md:hidden">
        <Header />
      </div>
      <ShopSection />

      {/* Products Section */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-6">Bandage</h2>

        <div>
          {/* <div className="flex flex-wrap justify-center gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                slug="1"
                image={product.image}
                title={product.title}
                originalPrice={product.originalPrice}
                discountedPrice={product.discountedPrice}
                colors={product.colors}
              />
            ))}
          </div> */}
          <ProductList />
        </div>
      </section>

      {/* Pagination */}
   
    </div>
  );
};

export default ShopPage;
