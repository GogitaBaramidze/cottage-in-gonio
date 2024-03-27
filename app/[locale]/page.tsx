import Com from '@/components/Com'
import initTranslations from '../../utils/i18n'
import Two from '@/components/Two'

const i18nNamespaces = ['home']

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { t } = await initTranslations(locale, i18nNamespaces)

    return (
        <main className=" flex min-h-screen w-full flex-col">
            <div className=" bg-mainBgMobile h-[1080px] w-full bg-contain bg-no-repeat md:bg-mainBg  md:bg-contain"></div>
            <Com />
            <Two />
            <h1>{t('hello')}</h1>
        </main>
    )
}

export default Home
