// src/app/layout.tsx
import LayoutWrapper from '@/components/LayoutWrapper'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import '@/styles/base.scss'
import '@/styles/layout.scss'
import '@/styles/state.scss'
import '@/styles/modules.scss'
import 'remixicon/fonts/remixicon.css'
import I18nProvider from 'i18n/i18nProvider'

export const metadata = {
  title: "عبودي",
  description: "عبودي للمواد الغذائية والاستثمار",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body>
        <I18nProvider>
          <LayoutWrapper>
            <Header />
            {children}
            <Footer />
          </LayoutWrapper>
        </I18nProvider>
      </body>
    </html>
  )
}
