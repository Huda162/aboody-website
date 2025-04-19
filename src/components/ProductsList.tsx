"use client";
import ProductCard from "./productCard";
import SectionTitle from "./sectionTitle";

export default function ProductsList() {
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
      <section className="container mx-auto py-5 px-5 md:px-0">
        <SectionTitle title="Aboody Products" />
        <div className="grid grid-cols-2 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 py-5">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
