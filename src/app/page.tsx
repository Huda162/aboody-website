"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Products from "@/components/Produtcs";
import useFetchData from "hooks/general/useFetchData";

export default function Page() {
  const { data, loading } = useFetchData("homepage");
  return (
    <div>
      <Intro />
      <div className="product-bg pb-10 rounded-none">
        <About about={data?.about_us} />
        <Products />
        <Contact />
      </div>
    </div>
  );
}
