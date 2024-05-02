'use client'

import Image from 'next/image'
import TestImage1 from '../../public/images/weddingTest3.jpg'
import Meeting from '../../public/images/meeting.jpg'
import TestImage3 from '../../public/images/weddingTest5.jpg'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { useMediaQuery } from 'react-responsive'

export default function Events() {
    const media = useMediaQuery({
        query: '(max-width: 1024px)',
    })
    const data = [
        {
            img: TestImage1,
            header: 'Refined Meetings',
        },
        {
            img: TestImage3,
            header: 'Timeless Weddings',
        },

        {
            img: Meeting,
            header: 'Timeless Weddings',
        },
    ]

    return (
        <section className="order-y-2 flex h-auto w-full  flex-col border-[#484848] bg-letterC bg-contain  bg-center bg-no-repeat  px-7  py-10 md:py-20  xl:px-24">
            <div className="mb-14 flex h-auto w-full flex-col items-center">
                <span className=" mr-24 font-moderline text-5xl md:mr-40">
                    evenT<em className=" font-moderlineTail">s</em>
                </span>
                <span className="ml-12  mt-2 font-canela text-3xl md:ml-20">
                    meetings & weddings
                </span>
            </div>

            <Carousel opts={{ watchDrag: media }}>
                <CarouselContent className=" -ml-0 pr-10 md:pr-0 ">
                    {data.map((item, index) => (
                        <CarouselItem
                            className="px-2 sm:basis-1/2  md:pl-6  lg:basis-1/3 lg:px-10"
                            key={index}
                        >
                            <div className="h-full w-full">
                                <Card className="h-full w-full overflow-hidden">
                                    <CardContent className="relative h-full w-full  p-0   ">
                                        <Image
                                            src={item.img}
                                            alt="123"
                                            className="h-full w-full rounded-lg object-cover "
                                        />
                                        <div className="absolute bottom-0 left-0 flex h-full  w-full flex-col justify-end  ">
                                            <span className="cursor-pointer bg-black  p-4 text-center  font-canela text-3xl  text-white opacity-60 hover:underline hover:underline-offset-2">
                                                {item.header} ----
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
