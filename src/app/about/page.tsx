"use client";
import AboutSection from "@/components/AboutSection";
import useFetchData from "hooks/general/useFetchData";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const { data, loading } = useFetchData("about");
  console.log(data)
  return (
    <div>
      <AboutSection
        title={t("aboody")}
        body={{ body_ar: data?.about?.[0]?.body_ar, body_en: data?.about?.[0]?.body_en }}
        direction="rtl"
        image="image"
        mainSection={true}
      />
      <AboutSection
        title={t("our vision")}
        body={t("our vision content")}
        direction="ltr"
        image="/assets/images/about3.png"
        mainSection={false}
      />
      <AboutSection
        title={t("our mission")}
        body={t("our mission content")}
        direction="rtl"
        image="/assets/images/about4.png"
        mainSection={false}
      />
      <AboutSection
        title={t("our value")}
        body={t("our value content")}
        direction="ltr"
        image="/assets/images/about3.png"
        mainSection={false}
      />
      <AboutSection
        title={t("why us")}
        body={t("why us content")}
        direction="rtl"
        image="/assets/images/about4.png"
        mainSection={false}
      />
      <AboutSection
        title={t("join us")}
        body={t("join us content")}
        direction="ltr"
        image="/assets/images/about3.png"
        mainSection={false}
      />
    </div>
  );
};

export default AboutUs;
