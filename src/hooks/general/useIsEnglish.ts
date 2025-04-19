import { useTranslation } from "react-i18next";

export function useIsEnglish() {
    const { i18n } = useTranslation()
    let isEnglish = i18n.language == "en"
    let isHebrew = i18n.language == 'he'
    let isArabic = i18n.language == 'ar'

    return { isEnglish, isHebrew, isArabic }
}