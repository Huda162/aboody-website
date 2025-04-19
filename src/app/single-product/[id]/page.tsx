'use client'
import ProductDetails from "@/components/ProductDetails";
import SectionTitle from "@/components/sectionTitle";
import { useTranslation } from "react-i18next";

interface Props {
  params: {
    id: string;
  };
}

const SingleProduct = ({ params }: Props) => {
  const {t, i18n} = useTranslation()
  const product =  {
    id: 1,
    name_ar: "بهار دجاج خاص",
    name_en: "fried chicken spices",
    description_ar:
      "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
    description_en:
      "Chicken seasoning is a blend of spices used to add a rich and delicious flavor to chicken, whether it's...",
    image: "/assets/images/product.png",
    weight: "100",
  }
  return (
    <div className="container min-h-[90vh] mx-auto pt-[10%] px-4">
      <SectionTitle title={t("product details")} />
      <ProductDetails product={product}/>
    </div>
  );
};

export default SingleProduct;
