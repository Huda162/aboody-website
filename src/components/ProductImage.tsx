"use client";
import Image from "next/image";
import {
  EffectCreative,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";

interface ImageProps {
  img: string[];
}
export default function ProductImage({ img }: ImageProps) {
  const [selectedImage, setSelectedImage] = useState(img[0]);
  return (
    <div className=" w-[90%] md:w-[300px] h-[400px] m-4 flex items-center justify-between flex-col gap-1 bg-white p-3 rounded">
      <div className="rounded rounded-md  w-[280px] h-[280px] flex items-center justify-center ">
        <Image
          src={selectedImage}
          alt="spice chicken"
          width={300}
          height={300}
          className="w-full rounded rounded-md"
        />
      </div>
      <div className="relative w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={3}
          freeMode={true}
          dir="ltr"
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="w-full h-[100px]"
        >
          {img.map((image) => (
            <SwiperSlide onClick={()=>{setSelectedImage(image)}}>
              <Image
                src={image}
                alt="spice chicken"
                width={300}
                height={300}
                className="w-full rounded rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
}
