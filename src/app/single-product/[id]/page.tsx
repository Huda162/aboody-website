"use client";
import ProductUse from "@/components/ProdcutUse";
import ProductDetails from "@/components/ProductDetails";
import ProductRecommendation from "@/components/ProductsRecommendation";
import SectionTitle from "@/components/sectionTitle";
import { useTranslation } from "react-i18next";

// interface Props {
//   params: {
//     id: string;
//   };
// }

const SingleProduct = () => {
  const { t, i18n } = useTranslation();
  const product = {
    id: 1,
    name_ar: "بهار دجاج خاص",
    name_en: "fried chicken spices",
    description_ar:
      "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
    description_en:
      "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
    image: ["/assets/images/product.png", "/assets/images/can1.png", "/assets/images/can2.png", "/assets/images/can2.png", "/assets/images/can2.png", "/assets/images/can2.png", "/assets/images/can2.png"],
    weight: "100",
  };
  return (
    // <div className="h-full w-full product-bg">
    <div className="container min-h-[90vh] mx-auto pt-[3%] px-4">
      {/* <SectionTitle title={t("product details")} /> */}
      <ProductDetails product={product} />
      <ProductUse />
      <SectionTitle title={t("you might also like")} />
      <ProductRecommendation/>
    </div>
    // </div>
  );
};

export default SingleProduct;
