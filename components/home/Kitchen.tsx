'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Test5 from '../../public/images/kitchen/kitchen5.jpg'
import Test6 from '../../public/images/kitchen/kitchen6.jpg'
import Test7 from '../../public/images/kitchen/kitchen7.jpg'
import { useTranslation } from 'react-i18next'
import { ArrowRight } from '../svgs'

export default function Kitchen() {
    const { t } = useTranslation()
    return (
        <section className="flex h-auto w-full flex-col items-center justify-center gap-5  overflow-hidden  bg-[#f1efeb] py-10 shadow-md md:flex-row   md:py-20 xl:px-24">
            <div className="relative h-full w-full md:order-2 md:pl-16">
                <Image
                    src={Test7}
                    className="h-full w-full rounded-lg  md:border-2 border-white shadow-xl"
                    alt="123"
                />
                <div className="absolute -bottom-1/3 -right-1/4 z-50 h-2/3 w-2/3 overflow-hidden rounded-lg border-2 border-white shadow-xl md:-bottom-5">
                    <Image src={Test6} className=" h-full w-full" alt="123" />
                </div>
                <Button className=" mt-16 hidden h-12 items-center  md:flex ">
                    <span>{t('viewMore')}</span>
                    <ArrowRight className="ml-2 h-5 w-5 " />
                </Button>
            </div>
            <div className="mt-[20%] flex h-full w-full flex-col items-center  gap-2 px-6 md:mt-0 md:w-2/3  md:pl-7 md:pr-0 xl:pl-0  ">
                <span className="  text-left font-moderline text-4xl">
                    Restouran<em className=" font-moderlineTail">t</em>
                </span>

                <span className="ml-24 text-left font-canela text-3xl">Kitchen masterclass</span>
                <span className="mt-4 text-center md:text-left">
                    kitchen kitchen kitchen kitchen kitchen kitchen kitchen kitchen kitchen kitchen
                    kitchen kitchen kitchen kitchen kitchen kitchen itchen kitchen kitchen kitchen
                    kitchen kitchen kitchen kitchen kitchen kitchen kitchen
                </span>
                <Button className=" mb-4 mt-4 flex w-2/3  items-center md:hidden">
                    <span>{t('viewMore')}</span>
                    <ArrowRight className="ml-2 h-5 w-5 " />
                </Button>
                <Image
                    src={Test5}
                    className="mt-2 h-full w-full  rounded-lg border-2 border-white shadow-xl"
                    alt="123"
                />
            </div>
        </section>
    )
}
