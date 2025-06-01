"use client";
import Image from "next/image";
import {
  EffectCreative,
  FreeMode,
  Navigation,
  Pagination,
  Thumbs,
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
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (img && img.length > 0) {
      setSelectedImage(img[0].url);
    }
  }, [img]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(img[index].url);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handlePrev = () => {
    const newIndex = (lightboxIndex - 1 + img.length) % img.length;
    setLightboxIndex(newIndex);
    setSelectedImage(img[newIndex].url);
  };

  const handleNext = () => {
    const newIndex = (lightboxIndex + 1) % img.length;
    setLightboxIndex(newIndex);
    setSelectedImage(img[newIndex].url);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') {
          closeLightbox();
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        } else if (e.key === 'ArrowRight') {
          handleNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxIndex]);

  return (
    <div className="w-full md:w-[350px] h-[400px] md:h-[440px] py-5 flex flex-col items-center justify-between gap-1 bg-white rounded">
      <div 
        className="rounded-md w-[280px] h-[280px] md:h-[320px] md:w-[320px] flex items-center justify-center cursor-zoom-in"
        onClick={() => {
          const initialIndex = img.findIndex(image => image.url === selectedImage);
          if (initialIndex >= 0) openLightbox(initialIndex);
        }}
      >
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
              onClick={() => {
                setSelectedImage(image.url);
                setLightboxIndex(index);
              }}
            >
              <Image
                src={image.url}
                alt={`thumbnail-${index}`}
                width={300}
                height={300}
                className={`w-full rounded-md cursor-pointer ${selectedImage === image.url ? 'border-2 border-[#EE303C]' : ''}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Lightbox Modal with semi-transparent background */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-2xl z-50 hover:text-gray-300"
          >
            &times;
          </button>
          
          <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
            <Swiper
              initialSlide={lightboxIndex}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="w-full h-full"
              onSlideChange={(swiper) => {
                setLightboxIndex(swiper.activeIndex);
                setSelectedImage(img[swiper.activeIndex].url);
              }}
            >
              {img?.map((image, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <Image
                    src={image.url}
                    alt={`product-image-${index}`}
                    width={800}
                    height={800}
                    className="object-contain w-full h-full"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
          >
            &lt;
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
          >
            &gt;
          </button> */}
        </div>
      )}
    </div>
  );
}