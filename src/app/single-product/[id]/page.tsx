import ProductDetails from "@/components/ProductDetails";
import SectionTitle from "@/components/sectionTitle";

interface Props {
  params: {
    id: string;
  };
}

const SingleProduct = ({ params }: Props) => {
  const product = {
    id: 1,
    name: "بهار دجاج خاص",
    description:
      "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
    image: "/assets/images/product.png",
    weight: "100غم",
  };
  return (
    <div className="container min-h-[90vh] mx-auto pt-[10%]">
      <SectionTitle title="Product Details" />
      <ProductDetails product={product}/>
    </div>
  );
};

export default SingleProduct;
