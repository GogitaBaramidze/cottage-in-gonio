'use client'

import Image from 'next/image'
import King1 from '../../../../../public/images/hotel/img4.webp'
import King2 from '../../../../../public/images/hotel/img4.webp'
import King3 from '../../../../../public/images/hotel/img4.webp'
import King4 from '../../../../../public/images/hotel/img4.webp'
import Bath2 from '../../../../../public/images/hotel/img4.webp'
import Bath1 from '../../../../../public/images/hotel/img4.webp'
import Bath4 from '../../../../../public/images/hotel/img4.webp'

import {
    Sqm,
    KingBed,
    OpenedDoors,
    BalconyView,
    GardenView,
    MountainView,
    RiverView,
    AirCondition,
    Bathroom,
    TV,
    Soundproof,
    Minibar,
    Wifi,
} from '@/components/svgs'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from 'embla-carousel-autoplay'
import Loading from '../../loading'
import { useEffect, useState } from 'react'

const data = [
    {
        bathDeluxe: [
            {
                image: Bath1,
                lado: '1',
            },
            {
                image: Bath2,
                lado: '2',
            },
            {
                image: Bath4,
                lado: '13333',
            },
            {
                image: Bath1,
                lado: '13333',
            },
        ],
        kingRoom: [
            {
                image: King1,
                lado: '1',
            },
            {
                image: King2,
                lado: '2',
            },
            {
                image: King3,
                lado: '13333',
            },
            {
                image: King4,
                lado: '13333',
            },
        ],
    },
]

export default function ClientWrapper() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
    }, [])
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <main className="flex min-h-screen w-full flex-col  items-center">
                    <h1 className="mt-28 text-xl">Rooms & suits</h1>
                    <div className="flex-wrap-nowrap mt-10  grid w-full grid-cols-2 grid-rows-2 flex-row  justify-between gap-10 bg-[#D9D9D9] p-10 px-20">
                        <div className=" flex h-full w-full flex-col justify-center ">
                            <h1 className="text-3xl font-bold text-black">
                                Deluxe suite with bath
                            </h1>
                            <div className="flex w-full flex-row items-center">
                                <KingBed className="h-10 w-10 fill-[#9392a0]" />
                                <span className="ml-1">One large double bed</span>
                            </div>
                            <div className="mt-2 flex w-full  flex-row flex-wrap gap-3">
                                <div className="flex flex-row items-center">
                                    <OpenedDoors className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Room</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Sqm className="ml-1 h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">40 m²</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <BalconyView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Balcony</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <GardenView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Garden view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <MountainView className="h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">Mountain view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <RiverView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">River view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <AirCondition className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Air conditioning</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Bathroom className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Ensuite bathroom</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <TV className="h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">Flat-screen TV</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Soundproof className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Soundproofing</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Minibar className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Minibar</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <BalconyView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Terrace</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Wifi className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Free WiFi</span>
                                </div>
                                <span>
                                    Бесплатные туалетно-косметические принадлежности
                                    &nbsp;&bull;&nbsp; Душ &nbsp;&bull;&nbsp; Халат
                                    &nbsp;&bull;&nbsp; Дополнительная ванная &nbsp;&bull;&nbsp;
                                    Туалет &nbsp;&bull;&nbsp; Диван &nbsp;&bull;&nbsp; Розетка около
                                    кровати &nbsp;&bull;&nbsp; Рабочий стол &nbsp;&bull;&nbsp;
                                    Отдельный вход &nbsp;&bull;&nbsp; Телевизор &nbsp;&bull;&nbsp;
                                    Москитная сетка &nbsp;&bull;&nbsp; Спутниковые каналы
                                    &nbsp;&bull;&nbsp; Отопление &nbsp;&bull;&nbsp; Фен
                                    &nbsp;&bull;&nbsp; Удлиненные кровати (более 2 метров)
                                    &nbsp;&bull;&nbsp; Гардеробная &nbsp;&bull;&nbsp; Электрический
                                    чайник &nbsp;&bull;&nbsp; Вешалка для одежды &nbsp;&bull;&nbsp;
                                    Сушилка для одежды &nbsp;&bull;&nbsp; Туалетная бумага
                                </span>
                            </div>
                        </div>
                        <div className="bg-white ">
                            <Carousel
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                    }),
                                ]}
                            >
                                <CarouselContent className="">
                                    {data[0].bathDeluxe?.map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="relative flex h-full w-full items-center justify-center overflow-hidden p-0 ">
                                                        <Image
                                                            src={item.image}
                                                            className="h-full w-full object-cover"
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
                        </div>

                        <div className="bg-white ">
                            <Carousel
                                plugins={[
                                    Autoplay({
                                        delay: 4000,
                                    }),
                                ]}
                            >
                                <CarouselContent className="">
                                    {data[0].kingRoom?.map((item, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="relative flex h-full w-full items-center justify-center overflow-hidden p-0 ">
                                                        <Image
                                                            src={item.image}
                                                            className="h-full w-full object-cover"
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
                        </div>
                        <div className=" flex h-full w-full flex-col  justify-center ">
                            <div className="flex w-full flex-row items-center">
                                <KingBed className="h-10 w-10 fill-[#9392a0]" />
                                <span className="ml-1">One large double bed</span>
                            </div>
                            <div className="mt-2 flex w-full flex-row flex-wrap gap-3">
                                <div className="flex flex-row items-center">
                                    <OpenedDoors className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Room</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Sqm className="ml-1 h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">40 m²</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <BalconyView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Balcony</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <GardenView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Garden view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <MountainView className="h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">Mountain view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <RiverView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">River view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <AirCondition className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Air conditioning</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Bathroom className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Ensuite bathroom</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <TV className="h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">Flat-screen TV</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Soundproof className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Soundproofing</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Minibar className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Minibar</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <BalconyView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Terrace</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Wifi className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Free WiFi</span>
                                </div>
                                <span>
                                    Бесплатные туалетно-косметические принадлежности
                                    &nbsp;&bull;&nbsp; Душ &nbsp;&bull;&nbsp; Халат
                                    &nbsp;&bull;&nbsp; Дополнительная ванная &nbsp;&bull;&nbsp;
                                    Туалет &nbsp;&bull;&nbsp; Диван &nbsp;&bull;&nbsp; Розетка около
                                    кровати &nbsp;&bull;&nbsp; Рабочий стол &nbsp;&bull;&nbsp;
                                    Отдельный вход &nbsp;&bull;&nbsp; Телевизор &nbsp;&bull;&nbsp;
                                    Москитная сетка &nbsp;&bull;&nbsp; Спутниковые каналы
                                    &nbsp;&bull;&nbsp; Отопление &nbsp;&bull;&nbsp; Фен
                                    &nbsp;&bull;&nbsp; Удлиненные кровати (более 2 метров)
                                    &nbsp;&bull;&nbsp; Гардеробная &nbsp;&bull;&nbsp; Электрический
                                    чайник &nbsp;&bull;&nbsp; Вешалка для одежды &nbsp;&bull;&nbsp;
                                    Сушилка для одежды &nbsp;&bull;&nbsp; Туалетная бумага
                                </span>
                            </div>
                        </div>
                        <div className=" flex h-full w-full flex-col  justify-center ">
                            <div className="flex w-full flex-row items-center">
                                <KingBed className="h-10 w-10 fill-[#9392a0]" />
                                <span className="ml-1">One large double bed</span>
                            </div>
                            <div className="mt-2 flex w-full flex-row flex-wrap gap-3">
                                <div className="flex flex-row items-center">
                                    <OpenedDoors className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Room</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Sqm className="ml-1 h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">40 m²</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <BalconyView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Balcony</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <GardenView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Garden view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <MountainView className="h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">Mountain view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <RiverView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">River view</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <AirCondition className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Air conditioning</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Bathroom className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Ensuite bathroom</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <TV className="h-7 w-7 text-[#9392a0]" />
                                    <span className="ml-1">Flat-screen TV</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Soundproof className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Soundproofing</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Minibar className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Minibar</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <BalconyView className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Terrace</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <Wifi className="h-7 w-7 fill-[#9392a0]" />
                                    <span className="ml-1">Free WiFi</span>
                                </div>
                                <span>
                                    Бесплатные туалетно-косметические принадлежности
                                    &nbsp;&bull;&nbsp; Душ &nbsp;&bull;&nbsp; Халат
                                    &nbsp;&bull;&nbsp; Дополнительная ванная &nbsp;&bull;&nbsp;
                                    Туалет &nbsp;&bull;&nbsp; Диван &nbsp;&bull;&nbsp; Розетка около
                                    кровати &nbsp;&bull;&nbsp; Рабочий стол &nbsp;&bull;&nbsp;
                                    Отдельный вход &nbsp;&bull;&nbsp; Телевизор &nbsp;&bull;&nbsp;
                                    Москитная сетка &nbsp;&bull;&nbsp; Спутниковые каналы
                                    &nbsp;&bull;&nbsp; Отопление &nbsp;&bull;&nbsp; Фен
                                    &nbsp;&bull;&nbsp; Удлиненные кровати (более 2 метров)
                                    &nbsp;&bull;&nbsp; Гардеробная &nbsp;&bull;&nbsp; Электрический
                                    чайник &nbsp;&bull;&nbsp; Вешалка для одежды &nbsp;&bull;&nbsp;
                                    Сушилка для одежды &nbsp;&bull;&nbsp; Туалетная бумага
                                </span>
                            </div>
                        </div>
                        <div className="bg-white p-6">
                            <Image src={Bath1} className="h-full max-w-full " alt="123" />
                        </div>
                    </div>
                </main>
            )}
        </>
    )
}
