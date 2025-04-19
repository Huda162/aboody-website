"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ProductsIntro() {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className={`relative h-[60vh] md:h-[70vh] flex items-center justify-center products-background overflow-hidden  `}
    >
      <div
        className={`relative w-full h-full ${
          animation ? "animate-move-products-intro visible" : "hidden"
        }`}
      >
        <div className="h-full w-[70%] relative">
          <div className="absolute z-10 top-1/3 left-[5%] md:left-[20%] text-center flex gap-3 flex-col">
            <div className="flex gap-2 items-center justify-center">
              <h1
                className={`products-sub-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold `}
              >
                قرمشة
              </h1>
              <h1
                className={`products-title flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold `}
              >
                استمتع بطعم
              </h1>
            </div>
            <h1
              className={`products-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold`}
            >
              لا يقاوم
            </h1>
          </div>
        </div>

        <Image
          src="/assets/images/fries2.png"
          alt="fries"
          width={170}
          height={170}
          className="absolute bottom-5 left-2 w-[20%] max-w-[120px] sm:max-w-[150px] md:max-w-[170px] z-10"
        />

        <Image
          src="/assets/images/cans.png"
          alt="cans"
          width={500}
          height={500}
          className="absolute bottom-0 right-[10%] w-[40%] max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] z-10 h-auto"
        />

        <Image
          src="/assets/images/crispy2.png"
          alt="crispy"
          width={400}
          height={400}
          className="absolute -bottom-4 right-0 w-[30%] max-w-[200px] sm:max-w-[300px] md:max-w-[400px] z-10"
        />
      </div>
    </section>
  );
}
