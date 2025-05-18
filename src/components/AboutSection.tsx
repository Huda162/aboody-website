"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";

interface aboutSectionProps {
  title: string;
  body: string | { body_ar: string; body_en: string };
  direction: string;
  image: string;
  mainSection: boolean;
}
export default function AboutSection({
  title,
  body,
  image,
  direction,
  mainSection,
}: aboutSectionProps) {
  const { t, i18n } = useTranslation();
  return (
    <section className="md:container md:mx-auto mx-0 my-5 mt-1 min-h-[350px] ">
      <div
        className={`${
          direction === "rtl"
            ? "md:flex-row flex-col"
            : "md:flex-row-reverse flex-col"
        } w-full h-full flex items-center justify-center gap-5`}
      >
        {mainSection ? (
          <div className="relative h-[350px]  w-[83%] sm:w-[50%] md:w-[42%] xl:w-[30%] 2xl:w-[25%]  m-2 ">
            <Image
              src="/assets/images/about1.png"
              alt="spice chicken"
              width={150}
              height={150}
              className="absolute bottom-0 right-0 z-10 w-[130px] md:w-[130px] lg:w-[180px] shadow-xl rounded-md"
            />
            <Image
              src="/assets/images/about2.png"
              alt="spice chicken"
              width={150}
              height={150}
              className="absolute bottom-20 left-0 z-10 w-[130px] md:w-[130px] lg:w-[180px] shadow-xl rounded-md"
            />
            <Image
              src="/assets/images/logo-mobile.png"
              alt="spice chicken"
              width={100}
              height={100}
              className="absolute lg:top-7 lg:right-10 top-20 z-10 w-[130px] md:w-[130px] lg:w-[100]"
            />
            <div className="absolute bottom-5 left-0 lg:left-20 z-10 w-[130px] md:w-[130px] lg:w-[100] bg-[#EE303C] text-white p-2 rounded-lg shadow-xl">
              {t("about")}
            </div>
          </div>
        ) : (
          <div className="relative h-full  w-[83%] sm:w-[50%] md:w-[37%] xl:w-[30%] 2xl:w-[25%] m-2 flex items-center justify-center ">
            <Image
              src={image}
              alt="spice chicken"
              width={100}
              height={100}
              className=" z-10 w-full w-full lg:w-full rounded-lg"
            />
          </div>
        )}
        {mainSection ? (
          <div className="relative h-full m-2 flex flex-col items-start justify-center w-[75%] md:w-[55%]">
            <h1 className="text-2xl text-[#EE303C]">{title}</h1>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html:
                  typeof body === "object"
                    ? i18n.language === "ar"
                      ? body?.body_ar
                      : body?.body_en
                    : "",
              }}
            />
          </div>
        ) : (
          <div className="relative h-full m-2 flex flex-col items-start justify-center w-[75%] md:w-[55%]">
            <h1 className="text-2xl text-[#EE303C]">{title}</h1>
            <p className="whitespace-pre-line">
              {typeof body === "string" ? body : ""}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
