'use client'

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useChangeLanguage() {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: any) => {
        i18n.changeLanguage(lng)
        localStorage.setItem('lng', lng);

    }

    useEffect(() => {
        if (i18n.language == 'ar' || i18n.language == 'he') {
            document.body.classList.add('rtl')
            document.body.classList.remove('ltr')
        } else if (i18n.language == 'en') {
            document.body.classList.add('ltr')
            document.body.classList.remove('rtl')
        }

    }, [i18n.language])

    return changeLanguage
}