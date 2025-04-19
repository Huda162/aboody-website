import ProductCard from "./productCard";
import SectionTitle from "./sectionTitle";

export default function ProductsList() {
  const products = [
    {
      id:1,
      name: "بهار دجاج خاص",
      description:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      image: "/assets/images/product.png",
      weight: "100غم",
    },
    {
      id:2,
      name: "بهار دجاج خاص",
      description:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      image: "/assets/images/product.png",
      weight: "100غم",
    },
    {
      id:3,
      name: "بهار دجاج خاص",
      description:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      image: "/assets/images/product.png",
      weight: "100غم",
    },
    {
      id:4,
      name: "بهار دجاج خاص",
      description:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      image: "/assets/images/product.png",
      weight: "100غم",
    },
    {
      id:5,
      name: "بهار دجاج خاص",
      description:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      image: "/assets/images/product.png",
      weight: "100غم",
    },
    {
      id:6,
      name: "بهار دجاج خاص",
      description:
        "بهار الدجاج هو خليط من التوابل يُستخدم لإضفاء نكهة غنية ولذيذة على الدجاج، سواء كان.....",
      image: "/assets/images/product.png",
      weight: "100غم",
    },
  ];
  return (
    <div className="h-full w-full product-bg">

    <section className="container mx-auto py-5 px-5 md:px-0">
      <SectionTitle title="Aboody Products" />
      <div className="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 gap-4 py-5">
        {products.map((product, index) => (
            <ProductCard product={product} key={index}/>
        ))}
      </div>
    </section>
        </div>
  );
}
