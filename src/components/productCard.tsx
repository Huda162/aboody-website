"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface productCardProps {
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

export default function ProductCard({ product }: productCardProps) {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-full group bg-white xl:bg-white pb-[5px] shadow-sm shadow-slate-300 rounded-md min-h-[250px] md:min-h-[330px] relative product-card">
      <div className="product-image-wrapper">
        <Image
          src={product?.image}
          alt="spice chicken"
          width={150}
          height={150}
          className="w-full p-2"
        />
        {/* Black overlay on hover */}
        <Image
          src="/assets/images/drops.png"
          alt="drop1"
          width={175}
          height={175}
          className="drop drop1"
        />
        <div className="absolute inset-0 m-2 rounded bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
      </div>
      <div className="flex items-center justify-center">
        <div className=" border border-[#EE303C] m-1 w-1/4"></div>
      </div>
      <div className="flex items-center justify-between p-2 gap-3 flex-col xl:flex-row md:flex-row">
        <p className="font-semibold text-gray-600">
          {i18n.language === "ar" ? product.name_ar : product.name_en}
        </p>
        <div className="flex justify-between items-center w-full md:w-fit gap-3">
          <p className="font-semibold text-[#EE303C]">
            {product.weight}
            {t("g")}
          </p>
          <Link
            href={`/single-product/${product.id}`}
            className="bg-gray-500 py-1 px-2 text-white rounded-md text-sm cursor-pointer hover:bg-[#EE303C] transition-all duration-500 w-full md-w-fit text-center"
          >
            {t("details")}
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center text-gray-300 p-2 hidden xl:flex md:flex">
        <p className="text-start">
          {i18n.language === "ar"
            ? product.description_ar.slice(0, 60)
            : product.description_en.slice(0, 60)}
          ...
        </p>
      </div>
    </div>
  );
}
