'use client'
import ProductsIntro from "@/components/ProductsIntro";
import ProductsList from "@/components/ProductsList";
import { useEffect } from "react";

const AllProducts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    return (
      <div>
        <ProductsIntro/>
        <ProductsList/>
      </div>
    );
  };
  
  export default AllProducts;
  