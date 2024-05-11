/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Garden from '../../../../public/images/wine/VineGarden.jpg'
import initTranslations from '@/libs/i18next/i18n'

export default async function WineYard({ locale }: { locale: string }) {
    const i18nNamespaces = ['winery']
    const { t } = await initTranslations(locale, i18nNamespaces)
    return (
        <section className="h-auto w-full py-10  xl:px-24">
            <div className="flex h-full w-full flex-col items-center   gap-10 md:flex-row md:gap-20">
                <Image
                    src={Garden}
                    className="h-[350px] object-cover md:h-[450px] rounded-sm md:w-[550px]"
                    alt="123"
                />
                <div className="flex h-full w-full flex-col items-center gap-5  px-5  ">
                    <h1 className="text-xl  font-medium">{t('wineHead')}</h1>
                    <p className="text-center text-sm md:text-base">{t('wineText')}</p>
                    <p className="text-center text-sm md:text-base">{t('wineText2')}</p>
                </div>
            </div>
        </section>
    )
}
