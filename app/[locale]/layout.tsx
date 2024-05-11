import TranslationsProvider from '@/libs/i18next/TranslationsProvider'
import initTranslations from '../../libs/i18next/i18n'
import { Noto_Sans_Georgian } from 'next/font/google'
import { ReactNode } from 'react'
import { dir } from 'i18next'
import './globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

const notoSansGeorgian = Noto_Sans_Georgian({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
})

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: ReactNode
    params: { locale: string }
}) {
    const namespaces = ['main', 'contact']

    const { resources } = await initTranslations(locale, namespaces)

    return (
        <html lang={locale} dir={dir(locale)} className={notoSansGeorgian.className}>
            <body>
                <TranslationsProvider namespaces={namespaces} locale={locale} resources={resources}>
                    <Header />
                    {children}
                    <Footer />
                </TranslationsProvider>
            </body>
        </html>
    )
}
