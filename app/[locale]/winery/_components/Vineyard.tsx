import Image from 'next/image'
import MenInVine from '../../../../public/images/wine/Grapes.jpg'
import GrapesBg from '../../../../public/images/wine/GrapesBg.jpg'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { CardContent } from '@/components/ui/card'

export default function VineYard() {
    const data = [{ img: MenInVine }, { img: MenInVine }, { img: MenInVine }]
    return (
        <section className="relative h-auto w-full pb-10">
            <Image src={GrapesBg} className="h-[250px] w-full  object-cover md:h-full" alt="123" />
            <div className="z-10 -mt-40  flex h-full w-full flex-col items-center md:-mt-[20%] md:items-start  xl:px-24">
                {/* Adjust the negative margin value as needed */}
                <h1 className="font-canela text-3xl text-white md:text-5xl">Tours and Tastings</h1>
                <Carousel opts={{ loop: true }} className="mt-6 md:mt-14">
                    <CarouselContent className="">
                        {data.map((item, index) => (
                            <CarouselItem key={index} className="pr-5 md:basis-1/3">
                                <CardContent className="flex items-center justify-center p-0">
                                    <Image src={item.img} alt="img" className="" />
                                </CardContent>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className="block md:hidden">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}
