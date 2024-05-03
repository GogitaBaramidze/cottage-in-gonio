import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../ui/carousel'
import { CardContent } from '../ui/card'
import Bath1 from '../../public/images/hotel/img1.webp'
import Bath2 from '../../public/images/hotel/img2.webp'
import Bath3 from '../../public/images/hotel/img4.webp'
import test from '../../public/images/wine/Bottle.jpg'
import Image from 'next/image'

export default function Hotel() {
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
    return (
        <section className="h-auto w-full bg-letterC py-16 ">
            <div className="mb-10 flex flex-col md:flex-row justify-center gap-6 md:gap-20 px-10">
                <h1 className="font-canela text-5xl">
                    Exquisite <br /> Accommodations
                </h1>
                <div className="flex md:w-[400px] flex-col items-start gap-6">
                    <span>
                        Reminiscent of an elegant French country estate, our legendary resort is
                        home to luxurious guest rooms, exquisite two- and three-bedroom private
                        villas, and lavish spa suites.
                    </span>
                    <button className="underline">VIEW ACCOMMODATIONS</button>
                </div>
            </div>
            <Carousel opts={{ loop: true }}>
                <CarouselContent className="pr-16 md:pr-10 xl:pr-32">
                    {data.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-2/3   ">
                            <CardContent className="flex items-center justify-center  p-0">
                                <Image
                                    src={item.img}
                                    alt="img"
                                    className="h-[300px] w-full object-cover md:h-[440px] md:w-[800px] "
                                />
                            </CardContent>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="hidden md:block">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </section>
    )
}
