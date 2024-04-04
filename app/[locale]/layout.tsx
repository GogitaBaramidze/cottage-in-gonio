import TranslationsProvider from '@/providers/TranslationsProvider'
import initTranslations from '../../utils/i18n'
import { Noto_Sans_Georgian } from 'next/font/google'
import { ReactNode } from 'react'
import { dir } from 'i18next'
import './globals.css'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../../components/header/Header'), {
    ssr: true,
})

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
    const i18nNamespaces = ['main']
    const { resources } = await initTranslations(locale, i18nNamespaces)

    return (
        <html lang={locale} dir={dir(locale)} className={notoSansGeorgian.className}>
            <body>
                <TranslationsProvider
                    namespaces={i18nNamespaces}
                    locale={locale}
                    resources={resources}
                >
                    <Header />
                    {children}
                </TranslationsProvider>
            </body>
        </html>
    )
}
