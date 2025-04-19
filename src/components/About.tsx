import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
    const {t} = useTranslation()
    return (
        <section className="container mx-auto mb-10 mt-10">
            <div className="about rounded-2xl px-8 flex flex-col md:flex-row items-center justify-center gap-20">
                <div className="absolute inset-0 bg-[url('/assets/images/pattern.png')] bg-cover bg-bottom opacity-60 rounded-2xl"></div>

                <div className="relative mt-6 md:mt-0">
                    <Image src="/assets/images/can2.png" alt="Spice Jar Back" width={300} height={300} className="absolute -left-6 top-6 drop-shadow-lg" />
                    <Image src="/assets/images/can1.png" alt="Spice Jar Front" width={350} height={350} className="relative z-10 drop-shadow-lg" />
                </div>
                <div className="relative text-center md:text-right max-w-lg flex flex-col gap-3">
                    <h2 className="text-2xl font-bold">{t("about")}</h2>
                    <p className="text-lg leading-relaxed">
                        شركة عبودي للمواد الغذائية والاستثمار هي علامة متخصصة في خلطات البهارات الأصلية، تقدم نكهات مميزة مثل بهار الدجاج المقرمش لتمنحك طعماً لا يُقاوم وقلياً ذهبياً ومقرمشاً.
                        جودة عالية وطعم يعكس خبرة وتقاليد في عالم التوابل.
                    </p>
                </div>

            </div>
        </section>

    )
}