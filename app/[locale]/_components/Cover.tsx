'use client'

import { useTranslation } from 'react-i18next'

export default function Cover() {
    const { t } = useTranslation()

    return (
        <section className="flex min-h-screen w-full flex-col items-center bg-mainBgMobile bg-contain bg-top bg-no-repeat text-white  shadow-xl md:bg-mainBg  md:bg-cover ">
            <span className="mt-24 font-moderline  text-4xl tracking-wider md:mt-[400px] md:text-[72px]">
                {t('chateau')}
            </span>
        </section>
    )
}
