"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SectionTitle from "./sectionTitle";

export default function ProductUse() {
  const { t, i18n } = useTranslation();

  const steps = [
    {
      image: "/assets/images/step1.png",
      description_ar:
        "نأتي بأجنحة دجاج متوسطة الحجم (45-35) غم مقطعة قطعتين وبعد ذلك يتم غسلها بقليل من الليمون والملح فقط.",
      description_en: "",
    },
    {
      image: "/assets/images/step2.png",
      description_ar:
        "في وعاء كبير نخلط بهار الدجاج الخاص من عبودي بنسبة 45 غرام لكل كيلو من الدجاج،",
      description_en: "",
    },
    {
      image: "/assets/images/step3.png",
      description_ar:
        "ويوضع الدجاج في وعاء محكم الإغلاق و يوضع في الثلاجة لمدة لا تقل عن 6 ساعات.",
      description_en: "",
    },
    {
      image: "/assets/images/step4.png",
      description_ar: "توضع الأجنحة المبهرة في الزبدة وتقلب",
      description_en: "",
    },
    {
      image: "/assets/images/step5.png",
      description_ar:
        "ويوضع الطحين الأبيض في وعاء آخر دون أي إضافات اخرى للطحين.",
      description_en: "",
    },
    {
      image: "/assets/images/step6.png",
      description_ar:
        "توضع زبدة الدجاج في وعاء ويضافٍ لها الماء بنسبة (50غم زبدة لكل 120مل من الماء) وتحرك جيداً، ",
      description_en: "",
    },
    {
      image: "/assets/images/step7.png",
      description_ar:
        "ومن ثم نضعها في الطحين, بعدها يتم هز الأجنحة قليلا ليتساقط الطحين الزائد عن الأجنحة",
      description_en: "",
    },
    {
      image: "/assets/images/step8.png",
      description_ar:
        "يغمر المقلى بالزيت ويوضع على درجة حرارة 165 مئوية ويتم إلقاء أجنحة الدجاج قطعة قطعة",
      description_en: "",
    },
  ];

  const columns = 3;

  return (
    <div className="w-full py-5 mx-auto">
      <SectionTitle title={t("how to use the product")} />
      <div className="w-full relative">
        {Array.from({ length: Math.ceil(steps.length / columns) }).map(
          (_, rowIndex) => {
            const start = rowIndex * columns;
            const end = start + columns;
            const isLTR = rowIndex % 2 === 0;

            const rowSteps = steps.slice(start, end);
            if (!isLTR) rowSteps.reverse();

            return (
              <div
                key={rowIndex}
                className="grid grid-cols-3 gap-4 py-5 relative"
              >
                {rowSteps.map((step, i) => {
                  const actualIndex = isLTR ? start + i : end - 1 - i;
                  const isLastItem = actualIndex === steps.length - 1;
                  const isEndOfRow = isLTR
                    ? i === columns - 1
                    : actualIndex % start === columns - 1;
                  const hasNextRow = actualIndex + 1 < steps.length;
                  console.log(actualIndex, i);
                  const arrow = (() => {
                    if (isLastItem) return null;

                    if (i18n.language === "en") {
                      if (isLTR) {
                        if (isEndOfRow) {
                          return hasNextRow
                            ? "/assets/images/arrow-b-right.png"
                            : null;
                        }
                        return "/assets/images/arrow-right.png";
                      } else {
                        if (isEndOfRow) {
                          return hasNextRow
                            ? "/assets/images/arrow-b-left.png"
                            : null;
                        }
                        return "/assets/images/arrow-left.png";
                      }
                    } else {
                      if (isLTR) {
                        if (isEndOfRow) {
                          return hasNextRow
                            ? "/assets/images/arrow-b-left.png"
                            : null;
                        }
                        return "/assets/images/arrow-left.png";
                      } else {
                        if (isEndOfRow) {
                          return hasNextRow
                            ? "/assets/images/arrow-b-right.png"
                            : null;
                        }
                        return "/assets/images/arrow-right.png";
                      }
                    }
                  })();

                  return (
                    <div
                      key={actualIndex}
                      className="text-center flex flex-col items-center justify-center px-5 relative"
                    >
                      <Image
                        src={step.image}
                        alt={`Step ${actualIndex + 1}`}
                        width={5000}
                        height={5000}
                        className="p-2 w-[90%] mx-auto"
                      />
                      <p className="text-sm py-2">
                        {step.description_ar} {actualIndex + 1}
                      </p>

                      {arrow && (
                        <div
                          className={`${isEndOfRow ? "top-2/2" : "top-[40%]"} ${
                            i18n.language === 'en' ? !isLTR ? "left-[-60px]" : "right-[-60px]" :  !isLTR ? "right-[-60px]" : "left-[-60px]"
                          } text-2xl absolute  transform -translate-y-1/2`}
                        >
                          <Image
                            src={arrow}
                            alt={`Arrow from step ${actualIndex + 1}`}
                            width={5000}
                            height={5000}
                            className="p-2 w-[90%] mx-auto"
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
