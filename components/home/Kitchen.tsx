'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Test5 from '../../public/images/kitchen/kitchen5.jpg'
import Test6 from '../../public/images/kitchen/kitchen6.jpg'
import Test7 from '../../public/images/kitchen/kitchen7.jpg'

export default function Kitchen() {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center md:py-20  gap-5  overflow-hidden bg-[#f1efeb] py-10 shadow-md   md:flex-row xl:px-24">
            <div className="relative h-full w-full md:order-2 md:pl-16">
                <Image
                    src={Test7}
                    className="h-full w-full rounded-lg border-2 border-white shadow-xl"
                    alt="123"
                />
                <div className="absolute -bottom-1/3 -right-1/4 z-50 h-2/3 w-2/3 overflow-hidden rounded-lg border-2 border-white shadow-xl md:-bottom-5">
                    <Image src={Test6} className=" h-full w-full" alt="123" />
                </div>
                <Button className=" hidden md:flex mt-16">Button ButtonButtonButton</Button>
            </div>
            <div className="mt-20 flex h-full w-full flex-col gap-2  px-6 md:pl-7 md:pr-0  xl:pl-0 md:mt-0 md:w-2/3  ">
                <span className="  text-left font-moderline text-4xl">
                    Restouran<em className=" font-moderlineTail">t</em>
                </span>

                <span className="ml-24 text-left font-canela text-3xl">Kitchen masterclass</span>
                <span className="text-center md:text-left">
                    kitchen kitchen kitchen kitchen kitchen kitchen kitchen kitchen kitchen kitchen
                    kitchen kitchen kitchen kitchen kitchen kitchen itchen kitchen kitchen kitchen
                    kitchen kitchen kitchen kitchen kitchen kitchen kitchen
                </span>
                <Button className="flex md:hidden ">Button ButtonButtonButton</Button>
                <Image
                    src={Test5}
                    className="mt-2 h-full w-full  rounded-lg border-2 border-white shadow-xl"
                    alt="123"
                />
            </div>
        </section>
    )
}
