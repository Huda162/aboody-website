// "use client";
import ProductUse from "@/components/ProdcutUse";
import ProductDetails from "@/components/ProductDetails";
import SingleProductPage from "@/components/ProductPageClient";
import ProductRecommendation from "@/components/ProductsRecommendation";
import SectionTitle from "@/components/sectionTitle";
import useFetchData from "hooks/general/useFetchData";
import { useTranslation } from "react-i18next";

interface PageProps  {
  params: {
    id: string;
  };
}

type Params = Promise<{ id: string }>;

export default async function SingleProduct ({ params }: {params:Params} ) {
  // const { t, i18n } = useTranslation();
  const { id } = await params;
  // const { data, loading } = useFetchData(`products/${id}`);
  return (
   <SingleProductPage id={id}/>
  );
};

// export default SingleProduct;
