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
    <div className=" w-[100%] md:w-[350px] h-[400px] md:h-[440px] py-5 flex items-center justify-between flex-col gap-1 bg-white rounded">
      <div className="rounded rounded-md  w-[280px] h-[280px] md:h-[320px] md:w-[320px] flex items-center justify-center ">
        <Image
          src={selectedImage}
          alt="spice chicken"
          width={300}
          height={300}
          className="w-full rounded rounded-md"
        />
      </div>
      <div className="relative w-[320px]">
        <Swiper
          slidesPerView={4}
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
