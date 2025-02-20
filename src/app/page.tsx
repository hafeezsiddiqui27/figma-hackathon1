import Nav1 from "./components/Nav/Nav1";
import NavLight from "./components/Nav/NavLight";
import EditorSection from "./components/home/editorspick";
import FeaturedProducts from "./components/home/feauturedProducts";
import ClassicProduct from "./components/home/classicprod";
// import NeuralProduct from "./components/neuralprod";
import Header from "./components/aboutheader";
import Herosection from "./components/hero";
import FeaturedPosts from "./components/home/featuredposts";


export default function Home() {
  return (
    <div className="overflow-x-hidden  w-full">
      {/* Navs for larger screens */}
      <div className="hidden md:block">
        <Nav1 />
        <NavLight />
      </div>

      {/* Header for smaller screens */}
      <div className="md:hidden">
        <Header />
      </div>

      {/* Main content sections */}
      <Herosection />
      {/* <ImageSlider /> */}
      <EditorSection />
      <FeaturedProducts />
      <ClassicProduct />
      {/* <NeuralProduct /> */}
      <FeaturedPosts />
    </div>
  );
}
