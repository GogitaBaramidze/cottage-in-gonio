'use client'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { BurgerMenu } from './_components/BurgerMenu'
import LangChoose from './_components/LangChoose'
import { usePathname } from 'next/navigation'

export default function Header() {
    const { t } = useTranslation()

    const pathname = usePathname()
    const isRootRoute = pathname === '/' || pathname === '/en'

    return (
        <main
            className={` flex w-full flex-row items-center justify-between px-5 py-2 transition-all md:px-7 md:py-3 xl:px-10 xl:py-3 ${isRootRoute ? 'absolute' : 'flex'}`}
            style={
                !isRootRoute
                    ? {
                          backdropFilter: 'blur(10px) saturate(150%)',
                          backgroundColor: 'rgba(255, 255, 255, 0.3)',
                          position: 'absolute',
                      }
                    : {
                          background: 'white,',
                      }
            }
        >
            <div className="relative h-16 w-20 md:h-16 md:w-20 xl:h-20 xl:w-24">
                <Image
                    src={Logo}
                    alt="Chateau iver logo"
                    layout="fill"
                    className=" absolute cursor-pointer"
                />
            </div>
            <div className="hidden flex-row items-center font-normal  text-black  md:flex md:text-base xl:text-[18px]">
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
