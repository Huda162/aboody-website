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
import { useEffect, useState } from "react";

interface ImageProps {
  img: { url: string }[];
}
export default function ProductImage({ img }: ImageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (img && img.length > 0) {
      setSelectedImage(img[0].url);
    }
  }, [img]);
  return (
    <div className="w-full md:w-[350px] h-[400px] md:h-[440px] py-5 flex flex-col items-center justify-between gap-1 bg-white rounded">
      <div className="rounded-md w-[280px] h-[280px] md:h-[320px] md:w-[320px] flex items-center justify-center">
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="product image"
            width={300}
            height={300}
            className="w-full rounded-md"
          />
        )}
      </div>
      <div className="relative w-[320px]">
        <Swiper
          slidesPerView={4}
          spaceBetween={3}
          freeMode={true}
          dir="ltr"
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
          className="w-full h-[100px]"
        >
          {img?.map((image, index) => (
            <SwiperSlide
              key={index}
              onClick={() => setSelectedImage(image.url)}
            >
              <Image
                src={image.url}
                alt={`thumbnail-${index}`}
                width={300}
                height={300}
                className="w-full rounded-md cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
