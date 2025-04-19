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
  }, [i18n.language])

  return <>{children}</>
}
