'use client'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { BurgerMenu } from './_components/BurgerMenu'
import LangChoose from './_components/LangChoose'

export default function Header() {
    const { t } = useTranslation()
    return (
        <main
            className=" flex w-full flex-row items-center justify-between px-5 py-2 transition-all md:px-7 md:py-3 xl:px-10 xl:py-3"
            style={{
                backdropFilter: 'blur(10px) saturate(150%)',
                background:
                    'linear-gradient(to bottom, rgba(169, 130, 80, 1), rgba(199, 153, 94, 0.7), rgba(169, 130, 80, 0.5))',
            }}
        >
            <div className="relative h-16 w-20 md:h-16 md:w-20 xl:h-20 xl:w-24">
                <Image
                    src={Logo}
                    alt="Chateau iver logo"
                    layout="fill"
                    className=" absolute cursor-pointer"
                />
            </div>
            <div className="hidden flex-row items-center font-normal  text-white  md:flex md:text-base xl:text-[18px]">
                <Link href="/">
                    <span className="cursor-pointer  underline-offset-8 hover:underline   md:ml-7">
                        {t('main')}
                    </span>
                </Link>
                <span className="cursor-pointer  underline-offset-8 hover:underline md:ml-7 ">
                    {t('tourism')}
                </span>
                <span className="cursor-pointer  underline-offset-8 hover:underline md:ml-7 ">
                    {t('winery')}
                </span>
                <span className="cursor-pointer underline-offset-8 hover:underline  md:ml-7">
                    {t('about')}
                </span>
                <LangChoose className={''} spanClassname={''} />
            </div>

            <BurgerMenu />
        </main>
    )
}
