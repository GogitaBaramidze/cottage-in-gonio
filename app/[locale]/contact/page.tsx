import initTranslations from '@/libs/i18next/i18n'
import Contact from './_components/Contact'
import Header from './_components/Header'
import Location from './_components/Location'

export default async function page({ params: { locale } }: { params: { locale: string } }) {
    const i18nNamespaces = ['contact']
    const { t } = await initTranslations(locale, i18nNamespaces)
    return (
        <main className="flex h-auto w-full flex-col gap-14 bg-pageBg pt-10 md:pt-16 lg:pt-20">
            <Header locale={locale} />
            <Contact />
            <h2 className="text-center text-xl">{t('directions')}</h2>
            <Location />
        </main>
    )
}
