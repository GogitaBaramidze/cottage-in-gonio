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
        <main className="  flex  w-full    flex-row items-center justify-between bg-[#f1efeb] px-5 py-2  opacity-90 shadow-md   md:px-7 md:py-3 xl:px-24 xl:py-3  ">
            <div className="relative h-16 w-20 md:h-16 md:w-20 xl:h-20 xl:w-24">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Chateau iver logo"
                        layout="fill"
                        className=" absolute cursor-pointer"
                    />
                </Link>
            </div>
            <div className="hidden flex-row items-center font-normal  text-black  md:flex md:text-base xl:text-[18px]">
                <Link href="/">
                    <span className="cursor-pointer  underline-offset-8 hover:underline   md:ml-7">
                        {t('main')}
                    </span>
                </Link>
                <Link href="/hotel">
                    <span className="cursor-pointer  underline-offset-8 hover:underline md:ml-7 ">
                        Hotel
                    </span>
                </Link>
                <Link href="/winery">
                    <span className="cursor-pointer  underline-offset-8 hover:underline md:ml-7 ">
                        {t('winery')}
                    </span>
                </Link>
                <Link href="/about">
                    <span className="cursor-pointer underline-offset-8 hover:underline  md:ml-7">
                        {t('about')}
                    </span>
                </Link>
                <Link href="/contact">
                    <span className="cursor-pointer underline-offset-8 hover:underline  md:ml-7">
                        {t('contact')}
                    </span>
                </Link>
                <LangChoose className={''} spanClassname={''} />
            </div>

            <BurgerMenu />
        </main>
    )
}
