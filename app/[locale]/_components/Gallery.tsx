'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Bath1 from '../../../public/images/hotel/img1.webp'
import Bath2 from '../../../public/images/hotel/img2.webp'
import Bath3 from '../../../public/images/hotel/img4.webp'
import test from '../../../public/images/wine/Bottle.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { InstagramGold } from '@/components/svgs'
import Link from 'next/link'

export default function Gallery() {
    const data = [
        {
            img: test,
        },
        {
            img: Bath3,
        },
        {
            img: Bath2,
        },
        {
            img: Bath2,
        },
        {
            img: Bath1,
        },
        {
            img: Bath2,
        },
    ]

    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)

    useEffect(() => {
        if (!api) {
            return
        }
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const getTransformValue = (index: number) => {
        return index === current + 1 ? 'translateY(120px)' : 'translateY(0)'
    }

    return (
        <section className="order-y-2 relative flex  h-auto flex-col items-center justify-center border-[484848]   bg-letterC bg-contain bg-center bg-no-repeat py-10  md:px-7   md:py-32 lg:px-7 xl:px-16">
            <div className="right-0 top-0 z-50 flex w-full flex-col items-center  md:absolute md:mt-10 md:flex md:w-auto md:items-end">
                <p className="font-moderline text-6xl md:mr-6  lg:mr-7 lg:text-7xl xl:mr-36">
                    imagin<em className="font-moderlineTail">e</em>
                </p>
                <p className="ml-28 font-canela text-4xl md:ml-0 md:mr-6  lg:mr-7 lg:mt-1 lg:text-5xl xl:mr-20 xl:mt-2">
                    Yourself here
                </p>
                <div className="mb-5 mt-5 flex w-full flex-row items-center justify-start px-7 md:mb-0 md:w-4/5  md:px-0 ">
                    <Link
                        href="https://www.instagram.com/chateau.iveri/"
                        target="_blank"
                        className=" flex cursor-pointer flex-row items-center hover:text-[#a28964]"
                    >
                        <InstagramGold className="h-10 w-10" />
                        <p>chateau.iveri</p>
                    </Link>
                    <div className="ml-2 h-[0.5px] w-full bg-[#484848]"></div>
                </div>
            </div>
            <Carousel setApi={setApi} className="z-20 h-full  w-full">
                <CarouselContent className="-ml-0 pr-8 md:pr-0">
                    {data.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis p-0 pr-2 md:basis-1/3 md:px-4 "
                            style={{
                                transform: getTransformValue(index),
                                transition: 'transform 0.7s ease-in-out',
                            }}
                        >
                            <div className="pl-0 md:pb-32 ">
                                <Card>
                                    <CardContent className="z-40 flex  h-[300px] w-full  items-center justify-center p-0 md:h-[250px] lg:h-[320px] ">
                                        <Image
                                            src={item.img}
                                            className="h-full w-full cursor-pointer  object-cover     shadow-slate-100 md:rounded-sm  "
                                            alt="123"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div></div>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
            <div className="z-10  mt-5 h-[0.5px] w-full bg-[#484848] md:absolute md:bottom-52"></div>
            <button className="z-[100] mt-5  snap-center border border-[#484848] px-3 py-2 text-xl hover:bg-[#a28964] hover:text-white md:absolute md:bottom-32">
                View Our Gallery
            </button>
        </section>
    )
}
