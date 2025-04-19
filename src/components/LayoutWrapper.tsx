'use client'

import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()

  useEffect(() => {
    const currentLang = i18n.language
    const html = document.documentElement

    html.lang = currentLang
    html.dir = currentLang === 'ar' || currentLang === 'he' ? 'rtl' : 'ltr'

    // Reset font classes
    html.classList.remove('ar-font', 'en-font')

    // Add the correct font class
    if (currentLang === 'ar' || currentLang === 'he') {
      html.classList.add('ar-font')
    } else {
      html.classList.add('en-font')
    }
  }, [i18n.language])

  return <>{children}</>
}
