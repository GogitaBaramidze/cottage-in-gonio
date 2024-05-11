import Image from 'next/image'
import CoverImg from '../../../../public/images/wine/WineryCover.jpg'
import initTranslations from '@/libs/i18next/i18n'
import './styles.css'

export default async function Cover({ locale }: { locale: string }) {
    const i18nNamespaces = ['winery']
    const { t } = await initTranslations(locale, i18nNamespaces)
    return (
        <section className="h-auto w-full">
            <Image src={CoverImg} className="h-screen w-full object-cover" alt="123" />
            <h1 className={`absolute ${locale === 'en' ? 'en' : 'ge'}`}>
                {t('from')}
                <br />
                <span
                    className="ml-14  md:ml-16"
                    style={{ fontFamily: locale === 'en' ? 'moderline' : 'georgian' }}
                >
                    {t('grape')}
                    <span className="font-moderlineTail">{t('s')}</span>
                </span>
                <br />
                <span
                    className="ml-40"
                    style={{ fontFamily: locale === 'en' ? 'canela' : 'georgian' }}
                >
                    {' '}
                    {t('toGlass')}
                </span>
            </h1>
        </section>
    )
}
