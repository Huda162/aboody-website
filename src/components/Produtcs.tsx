"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  EffectFade,
  EffectFlip,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useState } from "react";
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
  }[];
}
export default function Products({ products }: ProductsProps) {
  const { t, i18n } = useTranslation();
  // const products = [
  //   {
  //     name: `${t("fried chicken spices")}`,
  //     image: "/assets/images/jar1.png",
  //     bg: "/assets/images/Ellipse 4.png",
  //     corner: "/assets/images/crispy.png",
  //   },
  //   {
  //     name: `${t("chicken fillet spices")}`,
  //     image: "/assets/images/jar2.png",
  //     bg: "/assets/images/Ellipse 2.png",
  //     corner: "/assets/images/chicken.png",
  //   },
  //   {
  //     name: `${t("crunchy fried potato spices")}`,
  //     image: "/assets/images/jar3.png",
  //     bg: "/assets/images/Ellipse 1.png",
  //     corner: "/assets/images/fries.png",
  //   },
  //   {
  //     name: `${t("chicken shawarma spices")}`,
  //     image: "/assets/images/jar4.png",
  //     bg: "/assets/images/Ellipse 3.png",
  //     corner: "/assets/images/image-5.png",
  //   },
  // ];
  const [showImage, setShowImage] = useState(true);
  const [prevProduct, setPrevProduct] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleProductChange = (index: number) => {
    if (index === activeProduct) return;

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

  const [activeProduct, setActiveProduct] = useState<number>(0);
  return (
    <section className="h-screen relative mx-auto container my-10 ">
      <button className="swiper-button-prev custom-prev-arrow"></button>
      <button className="swiper-button-next custom-next-arrow"></button>
      <div className="h-full w-full absolute overflow-hidden rounded rounded-2xl">
        <img
          src={products?.[prevProduct]?.bg_image}
          className="absolute h-full w-full object-cover"
          alt="previous"
        />
        <img
          src={products?.[activeProduct]?.bg_image}
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
        } absolute bottom-10 transition-opacity hidden md:block duration-300  ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
      />
      {products?.[activeProduct]?.corner_image && (
        <Image
          src={products?.[activeProduct]?.corner_image}
          alt="spice chicken"
          width={180}
          height={180}
          className={` ${
            i18n.language === "en" ? "left-0 scale-x-[-1]" : "right-0 "
          }
        absolute top-20 hidden md:block transition-opacity duration-300 ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
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
        onSlideChange={(swiper) => handleProductChange(swiper.activeIndex)}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next-arrow",
          prevEl: ".custom-prev-arrow",
        }}
        fadeEffect={{ crossFade: true }}
        modules={[Pagination, Navigation, EffectCreative]}
      >
        {products?.map((product, index) => (
          <SwiperSlide className="z-[1]" key={index}>
            <article className="product-card1 flex flex-col items-center justify-center gap-5 ">
              <Image
                src={product?.product_image}
                width={400}
                height={200}
                alt="product"
                className="w-[200px] md:w-[400px]"
              />
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <h3
        className={` text-center w-full absolute py-5 md:py-10 duration-300 text-4xl px-5 md:text-[3rem] lg:text-[4rem] ${
          showImage ? "opacity-100" : "opacity-0"
        } ${i18n.language === "ar" ? "product-name" : "product-name-en"}`}
      >
        {i18n.language === "ar"
          ? products?.[activeProduct]?.name_ar
          : products?.[activeProduct]?.name_en}
      </h3>
      {/* <a
        href="/products"
        className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-primary-dark transition-all duration-300"
      >
        {t("see all products")}
      </a> */}
    </section>
  );
}
