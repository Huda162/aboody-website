"use client";
import { useTranslation } from "react-i18next";
import ProductImage from "./ProductImage";

interface ImageProps {
  product: {
    id: number;
    name_ar: string;
    name_en: string;
    weight: string;
    image: string[];
    description_ar: string;
    description_en: string;
  };
}
export default function ProductDetails({ product }: ImageProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row p-5 lg:p-10 ">
      <ProductImage img={product.image} />
      <div className="flex flex-col gap-10 items-start bg-[#EE303C] justify-start m-0 md:m-5 p-5  lg:p-10 text-lg rounded rounded-lg">
        <p className="text-white text-[22px]  xl:border xl:border-[#82c440] py-1 px-2 font-semibold rounded-lg bg-[#82c440]">
          {i18n.language === "ar" ? product.name_ar : product.name_en}
        </p>
        <p className="text-white font-semibold">{t("weight")}: {product.weight}</p>
        <p className="text-white text-[16px]">
          {i18n.language === "ar"
            ? product.description_ar
            : product.description_en}
        </p>
      </div>
    </div>
  );
}
