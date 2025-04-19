import Image from "next/image";

interface ImageProps {
  img: string;
}
export default function ProductImage({ img }: ImageProps) {
  return (
    <div className=" relative w-[300px] h-[300px] m-4">
      <div className="aboslute bg-gray-200 rounded rounde-md top-0 right-0 w-[300px] h-[300px]"></div>
      <div className="absolute rounded rounded-md -top-2 -right-2">
        <Image
          src={img}
          alt="spice chicken"
          width={300}
          height={300}
          className="w-full rounded rounded-md"
        />
      </div>
    </div>
  );
}
