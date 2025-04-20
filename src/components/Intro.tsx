"use client";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Intro() {
  const [animation, setAnimation] = React.useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
      console.log("Delayed for 2 second.");
    }, 300);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <section className="relative h-screen flex items-center justify-center intro-background overflow-hidden">
      <div className="absolute z-10 top-10">
        <h1
          className={`intro-title text-[3rem] md:text-[5rem] text-center ${
            animation ? "animate-move-title-ar visible" : "hidden"
          } `}
        >
          بهار دجاج خاص
        </h1>
        <h1
          className={`intro-title text-center text-[3rem] md:text-[5rem] intro-title-en ${
            animation ? "animate-move-title-en visible" : "hidden"
          } `}
        >
          Fried Chicken{" "}
        </h1>
      </div>
      <Image
        src="/assets/images/image-2.png"
        alt="spice chicken"
        width={150}
        height={150}
        className="absolute top-10 left-0 z-10 hidden md:block md:w-[110px] lg:w-[150px]"
      />
      <Image
        src="/assets/images/image-3.png"
        alt="spice chicken"
        width={150}
        height={150}
        className="absolute bottom-20 right-0 z-10 hidden md:block md:w-[130px] lg:w-[150px]"
      />
      <Image
        src="/assets/images/image-4.png"
        alt="chicken"
        width={700}
        height={700}
        className={`absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 ${
          animation ? "animate-intro-image" : ""
        }`}
      />
      <div className="relative md:mt-[200px] xl:mt-[150px] z-10 flex items-start justify-center">
        {animation && (
          <Image
            src="/assets/images/cover.png"
            alt="cover"
            width={250}
            height={250}
            className={`absolute z-20 top-2 md:top-3 left-[47%] transform -translate-x-1/2 w-[165px] md:w-[250px] ${
              animation ? "animate-show-cover" : ""
            }`}
          />
        )}
        <Image
          src="/assets/images/image-1.png"
          alt="spice box"
          width={300}
          height={300}
          className="relative z-10 w-[200px] md:w-[300px]"
        />
      </div>
    </section>
  );
}
