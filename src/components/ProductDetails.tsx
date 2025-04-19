"use client";
import { useTranslation } from "react-i18next";
import ProductImage from "./ProductImage";

interface ImageProps {
  product: {
    id: number;
    name_ar: string;
    name_en: string;
    weight: string;
    image: string;
    description_ar: string;
    description_en: string;
  };
}
export default function ProductDetails({ product }: ImageProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex gap-3 flex-col md:flex-row">
      <ProductImage img={product.image} />
      <div className="flex flex-col gap-2 items-start justify-center text-lg">
        <p className="text-[#82c440]  xl:border xl:border-[#82c440] py-1 px-2 font-semibold rounded-full">
          {i18n.language === "ar" ? product.name_ar : product.name_en}
        </p>
        <p className="text-gray-500 font-semibold">{t("weight")}: {product.weight}</p>
        <p className="text-gray-300 text-sm">
          {i18n.language === "ar"
            ? product.description_ar
            : product.description_en}
        </p>
      </div>
    </div>
  );
}
