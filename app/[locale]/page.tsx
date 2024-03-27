import Com from '@/components/Com'
import initTranslations from '../../utils/i18n'
import Two from '@/components/Two'
import Link from 'next/link'

const i18nNamespaces = ['home']

async function Home({ params: { locale } }: { params: { locale: string } }) {
    const { t } = await initTranslations(locale, i18nNamespaces)

    return (
        <main className=" flex min-h-screen w-full flex-col">
            <div className=" h-[700px] w-full bg-mainBg bg-contain bg-no-repeat md:bg-mainBg  md:bg-contain"></div>
            <Link href="/login">
                <h1 className="text-3xl text-[red]">goooooooooooo</h1>
            </Link>
            <Com />
            <Two />
            <h1>{t('hello')}</h1>
        </main>
    )
}

export default Home
