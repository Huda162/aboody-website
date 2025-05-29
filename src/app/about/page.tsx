"use client";
import AboutCard from "@/components/AboutCard";
import AboutSection from "@/components/AboutSection";
import useFetchData from "hooks/general/useFetchData";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const { data } = useFetchData("about");

  return (
    <div className="bg-[#f5f5f5] py-8">
      <AboutSection
        title={t("aboody")}
        body={{
          body_ar: data?.about?.[0]?.body_ar,
          body_en: data?.about?.[0]?.body_en,
        }}
        direction="rtl"
        image="image"
        mainSection={true}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AboutCard
            title={t("our vision")}
            body={t("our vision content")}
            direction="ltr"
            image="/assets/images/about3.png"
          />
          <AboutCard
            title={t("our mission")}
            body={t("our mission content")}
            direction="rtl"
            image="/assets/images/about4.png"
          />
          <AboutCard
            title={t("our value")}
            body={t("our value content")}
            direction="ltr"
            image="/assets/images/about3.png"
          />
          <AboutCard
            title={t("why us")}
            body={t("why us content")}
            direction="rtl"
            image="/assets/images/about4.png"
          />
          <AboutCard
            title={t("join us")}
            body={t("join us content")}
            direction="ltr"
            image="/assets/images/about3.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
