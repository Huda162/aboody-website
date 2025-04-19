import Image from "next/image";
import ProductImage from "./ProductImage";

interface ImageProps {
  product: {
    id: number;
    name: string;
    weight: string;
    image: string;
    description: string;
  };
}
export default function ProductDetails({ product }: ImageProps) {
  return (
    <div className="flex gap-3 flex-col md:flex-row">
        <ProductImage img={product.image}/>
        <div className="flex flex-col gap-2 items-start justify-center">
            <p className="text-[#82c440] border border-[#82c440] py-1 px-2 font-semibold rounded-full">{product.name}</p>
            <p className="text-gray-500 font-semibold">الوزن: {product.weight}</p>
            <p className="text-gray-300 font-sm">{product.description}{product.description}</p>
        </div>
    </div>
  );
}
