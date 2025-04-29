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
    <div className="flex gap-3 flex-col md:flex-row bg-[#EE303C] p-5 lg:p-10 rounded rounded-lg">
      <ProductImage img={product.image} />
      <div className="flex flex-col gap-5 items-start justify-start m-4 p-3 text-lg">
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
