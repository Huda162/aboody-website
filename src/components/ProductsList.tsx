"use client";
import { useTranslation } from "react-i18next";
import ProductCard from "./productCard";
import SectionTitle from "./sectionTitle";
import useFetchData from "hooks/general/useFetchData";

export default function ProductsList() {
  const {t, i18n} = useTranslation()
  const { data, loading } = useFetchData("products");
  const products = [
    {
      id: 1,
      name_ar: "بهار دجاج خاص",
      name_en: "fried chicken spices",
      description_ar:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      description_en:
        "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
      image: "/assets/images/product.png",
      weight: "100",
    },
    {
      id: 1,
      name_ar: "بهار دجاج خاص",
      name_en: "fried chicken spices",
      description_ar:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      description_en:
        "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
      image: "/assets/images/product.png",
      weight: "100",
    },
    {
      id: 1,
      name_ar: "بهار دجاج خاص",
      name_en: "fried chicken spices",
      description_ar:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      description_en:
        "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
      image: "/assets/images/product.png",
      weight: "100",
    },
    {
      id: 1,
      name_ar: "بهار دجاج خاص",
      name_en: "fried chicken spices",
      description_ar:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      description_en:
        "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
      image: "/assets/images/product.png",
      weight: "100",
    },
    {
      id: 1,
      name_ar: "بهار دجاج خاص",
      name_en: "fried chicken spices",
      description_ar:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      description_en:
        "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
      image: "/assets/images/product.png",
      weight: "100",
    },
    {
      id: 1,
      name_ar: "بهار دجاج خاص",
      name_en: "fried chicken spices",
      description_ar:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      description_en:
        "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
      image: "/assets/images/product.png",
      weight: "100",
    },
    {
      id: 1,
      name_ar: "بهار دجاج خاص",
      name_en: "fried chicken spices",
      description_ar:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      description_en:
        "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
      image: "/assets/images/product.png",
      weight: "100",
    },
  ];
  return (
    <div className="h-full w-full product-bg">
      <section className="container mx-auto md:mx-auto py-5 px-5 md:px-2">
        <SectionTitle title={t("aboody products")} />
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 md:gap-2 lg:gap-4 py-5">
          {data?.data?.map((product:any, index:number) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
