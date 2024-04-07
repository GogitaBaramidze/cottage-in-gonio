import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import test2 from '../../../public/images/test2.webp'
import test3 from '../../../public/images/test3.webp'
import test4 from '../../../public/images/test4.jpg'
import test5 from '../../../public/images/test5.webp'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
export default function ServicesMobile() {
    const data = [
        {
            image: test2,
            lado: '1',
        },
        {
            image: test3,
            lado: '2',
        },
        {
            image: test4,
            lado: '13333',
        },
        {
            image: test5,
            lado: '13333',
        },
    ]

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 4000,
                }),
            ]}
            className="w-full "
        >
            <CarouselContent>
                {data?.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-6">
                                    <Image
                                        src={item.image}
                                        objectFit="cover"
                                        layout="fill"
                                        alt="123"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
