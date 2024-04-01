'use client'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { BurgerIcon } from '../svgs'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { SheetDemo } from './BurgerMenu'

export default function Header() {
    const { t } = useTranslation()
    return (
        <main
            className="absolute flex w-full flex-row items-center justify-between px-5 py-2 transition-all md:px-7 md:py-3 xl:px-10 xl:py-3 "
            style={{
                backdropFilter: 'blur(10px) saturate(150%)',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
            <div className="hidden flex-row items-center font-normal  text-white  md:flex md:text-base  xl:text-xl">
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
            </div>

            <BurgerIcon className="cursor-pointer text-3xl md:hidden" />
            <SheetDemo />
        </main>
    )
}
