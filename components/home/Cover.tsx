'use client'

import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import MainBg from '../../public/images/mainBg.jpg'

export default function Cover() {
    const { t } = useTranslation()

    return (
        <section className="flex h-auto w-full flex-col items-center   text-white  shadow-xl  ">
            <Image src={MainBg} className="h-full w-full object-cover" alt="cover" />

            <span className="absolute mt-24 font-moderline  text-4xl tracking-wider md:mt-[400px] md:text-[72px]">
                {t('chateau')}
            </span>
        </section>
    )
}
