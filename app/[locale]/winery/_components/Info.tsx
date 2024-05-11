import initTranslations from '@/libs/i18next/i18n'

export default async function Info({ locale }: { locale: string }) {
    const i18nNamespaces = ['winery']
    const { t } = await initTranslations(locale, i18nNamespaces)
    return (
        <section className="flex h-auto w-full    flex-col items-center justify-center bg-[#f1efeb] bg-stain bg-contain bg-left-top  bg-no-repeat py-20 md:bg-left md:py-40 xl:px-24">
            <h1 className="mb-6 text-xl font-medium">{t('vintage')}</h1>
            <span className="px-5 text-center text-sm md:text-base xl:px-40">
                {t('vintageText')}
            </span>
        </section>
    )
}
