"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <section className="container mx-auto container mx-auto mt-1">
      <div
        className="flex flex-col md:flex-row items-ceneter justify-between rounded-2xl"
        style={{ backgroundImage: "url(/assets/images/contact-bg.png)" }}
      >
        <form
          action=""
          className="space-y-7 p-[7rem] md:p-[2rem] lg:p-[4rem] xl:p-[7rem] "
        >
          <h2 className="text-center text-white md:w-[15rem] lg:w-[15rem] xl:w-[27rem] w-fit text-3xl font-semibold pb-7">
            {t("contact us")}
          </h2>
          <input
            type="email"
            id="email"
            className="border border-[#767676] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${t("your name")}`}
            required
          />
          <input
            type="email"
            id="email"
            className=" border border-[#767676] text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={`${t("your phone")}`}
            required
          />
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-white  rounded-lg border border-[#767676] focus:ring-blue-500 focus:border-blue-500"
            placeholder={`${t("your message")}`}
          ></textarea>
        </form>
        <div className="space-y-4 flex items-center justify-center m-1">
          <Image
            src="/assets/images/image-7.png"
            width={800}
            height={500}
            alt="contact us"
            className=" rounded rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
