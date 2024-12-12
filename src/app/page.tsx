import Nav1 from "./components/Nav1";
import NavLight from "./components/NavLight";
import EditorSection from "./components/home/editorspick";
import FeaturedProducts from "./components/home/feauturedProducts";
import ClassicProduct from "./components/home/classicprod";
import NeuralProduct from "./components/neuralprod";

import Herosection from "./components/hero";
import FeaturedPosts from "./components/home/featuredposts";

export default function Home() {
  return (
    <div>
      <Nav1 />
      <NavLight />

      <Herosection />
      <EditorSection />
      <FeaturedProducts />
      <ClassicProduct />
      <NeuralProduct />
      <FeaturedPosts />
    </div>
  );
}
