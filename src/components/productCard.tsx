import Image from "next/image";
import Link from "next/link";

interface productCardProps {
  product: {
    id: number;
    name: string;
    weight: string;
    image: string;
    description: string;
  };
}

export default function ProductCard({ product }: productCardProps) {
  return (
    <div className="w-full group bg-white xl:bg-white pb-[5px] shadow-sm shadow-slate-300 rounded-md min-h-[330px] relative">
      {/* <div className="w-full h-full absolute bg-black-100">

      </div> */}
      <Image
        src={product?.image}
        alt="spice chicken"
        width={150}
        height={150}
        className="w-full p-2"
      />
      <div className="flex items-center justify-center">
        <div className=" border border-[#EE303C] m-1 w-1/4"></div>
      </div>
      <div className="flex items-center justify-between p-2 gap-3 flex-row-reverse">
        <p className="font-semibold text-gray-600">{product.name}</p>
        <p className="font-semibold text-[#EE303C]">{product.weight}</p>
        <Link
          href={`/single-product/${product.id}`}
          className="bg-gray-500 py-1 px-2 text-white rounded-md text-sm cursor-pointer hover:bg-[#EE303C] transition-all duration-500"
        >
          التفاصيل
        </Link>
      </div>
      <div className="flex items-center justify-center text-gray-300 p-2">
        <p className="text-right">{product.description.slice(0, 60)}...</p>
      </div>
    </div>
  );
}
