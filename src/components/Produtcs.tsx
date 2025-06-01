"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  EffectFade,
  EffectFlip,
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface ProductsProps {
  products: {
    id: number;
    name_ar: string;
    name_en: string;
    product_image: string;
    bg_image: string;
    corner_image: string;
  }[] | null; // Changed to accept null for loading state
}

export default function Products({ products }: ProductsProps) {
  const { t, i18n } = useTranslation();
  const [showImage, setShowImage] = useState(true);
  const [prevProduct, setPrevProduct] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [activeProduct, setActiveProduct] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    // Set loading to false when products are available
    if (products && products.length > 0) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [products]);

  const handleProductChange = (index: number) => {
    if (index === activeProduct || !products) return;

    setPrevProduct(activeProduct);
    setActiveProduct(index);
    setAnimating(true);
    setShowImage(false);

    setTimeout(() => {
      setAnimating(false);
    }, 600);
    setTimeout(() => {
      setAnimating(false);
      setShowImage(true);
    }, 300);
  };

  if (isLoading || !products) {
    return (
      <section className="h-screen relative mx-auto container my-10 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-64 h-64 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="h-screen relative mx-auto container my-10">
      <button className="swiper-button-prev custom-prev-arrow"></button>
      <button className="swiper-button-next custom-next-arrow"></button>
      <div className="h-full w-full absolute overflow-hidden rounded rounded-2xl">
        <img
          src={products[prevProduct]?.bg_image}
          className="absolute h-full w-full object-cover"
          alt="previous"
        />
        <img
          src={products[activeProduct]?.bg_image}
          className={`absolute h-full w-full object-cover ${
            animating ? "animate-reveal" : "clip-full"
          }`}
          alt="active"
        />
      </div>

      <Image
        src="/assets/images/image-6.png"
        alt="spice chicken"
        width={150}
        height={150}
        className={`${
          i18n.language === "en" ? "right-0 scale-x-[-1]" : "left-0"
        } absolute bottom-10 transition-opacity hidden md:block duration-300 h-auto ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
      />

      {products[activeProduct]?.corner_image && (
        <Image
          src={products[activeProduct]?.corner_image}
          alt="spice chicken"
          width={180}
          height={180}
          className={`${
            i18n.language === "en" ? "left-0 scale-x-[-1]" : "right-0"
          } absolute top-20 hidden md:block transition-opacity duration-300 ${
            showImage ? "opacity-100" : "opacity-0"
          }`}
          priority      
        />
      )}

      <Swiper
        dir="ltr"
        className="h-[70%] mt-4"
        spaceBetween={30}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: false,
            translate: [0, "-100%", 0],
          },
          next: {
            translate: [0, "100%", 0],
          },
        }}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => handleProductChange(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next-arrow",
          prevEl: ".custom-prev-arrow",
        }}
        modules={[Pagination, Navigation, EffectCreative, Autoplay]}
      >
        {products.map((product, index) => (
          <SwiperSlide className="z-[1]" key={index}>
            <article className="product-card1 flex flex-col items-center justify-center gap-5">
              <Image
                src={product.product_image}
                width={400}
                height={200}
                alt="product"
                className="w-[200px] md:w-[400px]"
                priority      
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <h3
        className={`text-center w-full absolute py-5 md:py-10 duration-300 text-4xl px-5 md:text-[3rem] lg:text-[4rem] ${
          showImage ? "opacity-100" : "opacity-0"
        } ${i18n.language === "ar" ? "product-name" : "product-name-en"}`}
      >
        {i18n.language === "ar"
          ? products[activeProduct]?.name_ar
          : products[activeProduct]?.name_en}
      </h3>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
        <Link
          href="/products"
          className="relative bg-primary text-white px-8 py-3 rounded-md shadow-md 
                    transform transition-all duration-300 ease-in-out 
                    hover:scale-105 hover:-translate-y-1 hover:shadow-lg
                    group overflow-hidden"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 to-primary/20 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          ></span>

          <span className="relative flex items-center justify-center gap-2">
            {t("see all products")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}