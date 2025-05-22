"use client";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import SectionTitle from "./sectionTitle";

interface useProps {
  steps: {
    step_image: string;
    step_number: string;
    step_description: string;
  }[];
}

export default function ProductUse({steps}:useProps) {
  const { t, i18n } = useTranslation();

  // const steps = [
  //   {
  //     image: "/assets/images/step1.png",
  //     description_ar:
  //       "نأتي بأجنحة دجاج متوسطة الحجم (45-35) غم مقطعة قطعتين وبعد ذلك يتم غسلها بقليل من الليمون والملح فقط.",
  //     description_en:
  //       "We take medium-sized chicken wings (35–45g), cut in two pieces, and wash them with a little lemon and salt only.",
  //   },
  //   {
  //     image: "/assets/images/step2.png",
  //     description_ar:
  //       "في وعاء كبير نخلط بهار الدجاج الخاص من عبودي بنسبة 45 غرام لكل كيلو من الدجاج،",
  //     description_en:
  //       "In a large bowl, we mix Aboudi's special chicken seasoning at a ratio of 45 grams per kilogram of chicken.",
  //   },
  //   {
  //     image: "/assets/images/step3.png",
  //     description_ar:
  //       "ويوضع الدجاج في وعاء محكم الإغلاق و يوضع في الثلاجة لمدة لا تقل عن 6 ساعات.",
  //     description_en:
  //       "The chicken is placed in an airtight container and refrigerated for no less than 6 hours.",
  //   },
  //   {
  //     image: "/assets/images/step4.png",
  //     description_ar: "توضع الأجنحة المبهرة في الزبدة وتقلب",
  //     description_en: "The seasoned wings are placed in butter and stirred.",
  //   },
  //   {
  //     image: "/assets/images/step5.png",
  //     description_ar:
  //       "ويوضع الطحين الأبيض في وعاء آخر دون أي إضافات اخرى للطحين.",
  //     description_en:
  //       "White flour is placed in a separate bowl without adding anything else to it.",
  //   },
  //   {
  //     image: "/assets/images/step6.png",
  //     description_ar:
  //       "توضع زبدة الدجاج في وعاء ويضافٍ لها الماء بنسبة (50غم زبدة لكل 120مل من الماء) وتحرك جيداً، ",
  //     description_en:
  //       "Chicken butter is placed in a bowl and water is added at a ratio of 50g butter to 120ml water, then mixed well.",
  //   },
  //   {
  //     image: "/assets/images/step7.png",
  //     description_ar:
  //       "ومن ثم نضعها في الطحين, بعدها يتم هز الأجنحة قليلا ليتساقط الطحين الزائد عن الأجنحة",
  //     description_en:
  //       "Then we place the wings in the flour, and shake them slightly to remove the excess flour.",
  //   },
  //   {
  //     image: "/assets/images/step8.png",
  //     description_ar:
  //       "يغمر المقلى بالزيت ويوضع على درجة حرارة 165 مئوية ويتم إلقاء أجنحة الدجاج قطعة قطعة",
  //     description_en:
  //       "The frying pan is filled with oil and heated to 165°C, then the chicken wings are dropped in one by one.",
  //   },
  // ];

  const columns = 3;

  return (
    <div className="w-full py-5 mx-auto flex items-center justify-center flex-col">
      <SectionTitle title={t("how to use the product")} />
      <div className="w-[85%] relative hidden md:block">
        {Array.from({ length: Math.ceil(steps?.length / columns) }).map(
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
                        src={step.step_image}
                        alt={`Step ${actualIndex + 1}`}
                        width={5000}
                        height={5000}
                        className="p-2 w-[90%] mx-auto"
                      />
                      <p className="text-md lg:text-lg h-[20%] py-2">
                        {i18n.language === "ar"
                          ? step.step_description
                          : step.step_description}
                      </p>

                      {arrow && (
                        <div
                          className={`${isEndOfRow ? "top-2/2" : "top-[30%]"} ${
                            i18n.language === "en"
                              ? !isLTR
                                ? "left-[-60px]"
                                : "right-[-60px]"
                              : !isLTR
                              ? "right-[-60px]"
                              : "left-[-60px]"
                          } text-2xl absolute  transform -translate-y-1/2`}
                        >
                          <Image
                            src={arrow}
                            alt={`Arrow from step ${actualIndex + 1}`}
                            width={5000}
                            height={5000}
                            className="p-2 w-[50%] md:w-[70%] lg:w-[100%] mx-auto"
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
      <div className="w-full relative block md:hidden bg-[#f2f2f2] grid grid-cols-2 gap-2 my-2">
        {steps?.map((step, index) => (
          <div
            key={index}
            className="flex items-center justify-start text-center flex-col relative"
          >
            <div className="absolute border rounded-full w-[25px] h-[25px] border-[#EE303C] top-10 start-10 flex items-center justify-center bg-white text-[#EE303C]">
              {index + 1}
            </div>
            <Image
              src={step.step_image}
              alt={`Step ${index + 1}`}
              width={5000}
              height={5000}
              className="p-2 w-[100%] mx-auto"
            />
            <p className="text-sm h-[20%] py-2">
              {i18n.language === "ar"
                ? step.step_description
                : step.step_description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
