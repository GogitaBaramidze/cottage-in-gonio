import Image from 'next/image'
import Bottles from '../../../../public/images/wine/Bottles.png'
import Draw from '../../../../public/images/wine/Draw.jpg'
import initTranslations from '@/libs/i18next/i18n'

export default async function List({ locale }: { locale: string }) {
    const i18nNamespaces = ['winery']
    const { t } = await initTranslations(locale, i18nNamespaces)
    return (
        <section className="flex h-auto w-full flex-col  bg-white  px-5   md:flex-row md:items-center">
            <Image src={Draw} className="border-gray  h-auto w-full   md:block  " alt="!23" />
            <div className="md:bg-fill flex  h-full w-full flex-row items-center   bg-contain  bg-left bg-no-repeat  md:items-center md:bg-center">
                <div className="grid h-full w-full grid-cols-1   gap-y-3 text-center text-sm   md:text-base ">
                    <span
                        className="mb-10   font-moderline text-3xl   font-medium leading-5 lg:text-6xl"
                        style={{ fontFamily: locale === 'en' ? 'moderline' : 'georgian' }}
                    >
                        {t('listHead1')}
                        <span
                            className="ml-2 font-medium"
                            style={{ fontFamily: locale === 'en' ? 'canela' : 'georgian' }}
                        >
                            {t('listHead2')}
                        </span>
                    </span>

                    <span>aq iqneba linki infostvis</span>
                </div>
                <Image src={Bottles} className=" h-auto w-2/3 object-fill  " alt="!23" />
            </div>
        </section>
    )
}
