"use client";
import ProductUse from "@/components/ProdcutUse";
import ProductDetails from "@/components/ProductDetails";
import ProductRecommendation from "@/components/ProductsRecommendation";
import SectionTitle from "@/components/sectionTitle";
import useFetchData from "hooks/general/useFetchData";
import { useTranslation } from "react-i18next";

interface Props  {
    id: string | string[] | undefined;
}


export default function SingleProductPage ({ id }: Props ) {
  const { t, i18n } = useTranslation();
  const { data, loading } = useFetchData(`products/${id}`);
  return (
    // <div className="h-full w-full product-bg">
    <div className="container min-h-[90vh] mx-auto pt-[3%] px-4">
      {/* <SectionTitle title={t("product details")} /> */}
      <ProductDetails product={data?.product} />
      <ProductUse steps={data?.product?.preparation_steps}/>
      <SectionTitle title={t("you might also like")} />
      <ProductRecommendation products = {data.related_product}/>
    </div>
    // </div>
  );
};

// export default SingleProduct;
