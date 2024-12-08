import Image from "next/image";
import Nav1 from "./components/Nav1";
import NavLight from "./components/NavLight";
import EditorSection from "./components/editorspick";
import FeaturedProducts from "./components/feauturedProducts";
import ClassicProduct from "./components/classicprod";

export default function Home() {
  return (
    <div>
      <Nav1 />
      <NavLight />
      <div className="relative mt-[0px]"> {/* Adjust the margin-top to match your navbar height */}
      {/* Hero Image */}
      <Image
        src="/hero1.jpg"
        alt="hero image"
        height={800}
        width={800}
        className="object-cover w-full h-screen"
        />
      </div>
      <EditorSection />
      <FeaturedProducts />
      <ClassicProduct />
   </div>
  );
}
