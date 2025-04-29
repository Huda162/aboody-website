import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Products from "@/components/Produtcs";

export default function Page() {
  return (
    <div>
      <Intro />
      <div className="product-bg pb-10 rounded-none">
        <About />
        <Products />
        <Contact />
      </div>
    </div>
  );
}
