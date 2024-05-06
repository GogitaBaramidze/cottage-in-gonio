import Image from 'next/image'

import Taste from '../../../../public/images/wine/Taste.jpg'
import GrapesBg from '../../../../public/images/wine/GrapesBg.jpg'
import Making from '../../../../public/images/wine/Making.jpg'
import InVine from '../../../../public/images/wine/InVine.jpg'
import Collect from '../../../../public/images/wine/Collect.jpg'
import Taste3 from '../../../../public/images/wine/Taste3.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { CardContent } from '@/components/ui/card'

export default function Gallery() {
    const data = [
        { img: Taste },
        { img: Collect },
        { img: InVine },
        { img: Taste3 },
        { img: Making },
    ]
    return (
        <section className="relative h-auto w-full pb-10">
            <Image src={GrapesBg} className="h-[250px] w-full  object-cover md:h-full" alt="123" />
            <div className="z-10 -mt-48  flex h-full w-full flex-col items-center md:-mt-[20%]   xl:px-24">
                <h1 className="font-canela text-3xl text-white md:text-5xl">Tours and Tastings</h1>
                <Carousel opts={{ loop: true }} className="mt-6 h-full w-full md:mt-14">
                    <CarouselContent className="pr-16 md:pr-32">
                        {data.map((item, index) => (
                            <CarouselItem key={index} className="md:basis-1/3 md:px-4">
                                <CardContent className="flex items-center justify-center   p-0">
                                    <Image
                                        src={item.img}
                                        alt="img"
                                        className="h-[400px] w-full  object-cover"
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
            </div>
        </section>
    )
}
