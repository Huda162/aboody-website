"use client";
import { useTranslation } from "react-i18next";
import ProductImage from "./ProductImage";
import Image from "next/image";

interface productCardProps {
  product: {
    image: string;
    description_ar: string;
    description_en: string;
  };
}

export default function ProdcutRecCard({ product }: productCardProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <div className="step-bg w-[150px] h-[150px] lg:w-[250px] lg:h-[250px] flex items-end justify-center">
        <Image
          src={product?.image}
          alt="spice chicken"
          width={150}
          height={150}
          className="p-2 w-[90%]"
        />
      </div>
      <div>
        {i18n.language === "ar"
          ? product?.description_ar
          : product?.description_en}
      </div>
    </div>
  );
}
