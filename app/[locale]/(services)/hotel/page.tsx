import Image from 'next/image'
import King from '../../../../public/hotelImages/king.webp'

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

export default function page() {
    return (
        <main className="flex min-h-screen w-full flex-col  items-center  ">
            <h1 className="text-xl">Rooms & suits</h1>
            <div className="flex-wrap-nowrap mt-10  grid w-full grid-cols-2 grid-rows-2 flex-row  justify-between gap-10 bg-[#D9D9D9] p-10 px-20">
                <div className=" flex h-full w-full flex-col justify-center ">
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
                            Бесплатные туалетно-косметические принадлежности &nbsp;&bull;&nbsp; Душ
                            &nbsp;&bull;&nbsp; Халат &nbsp;&bull;&nbsp; Дополнительная ванная
                            &nbsp;&bull;&nbsp; Туалет &nbsp;&bull;&nbsp; Диван &nbsp;&bull;&nbsp;
                            Розетка около кровати &nbsp;&bull;&nbsp; Рабочий стол &nbsp;&bull;&nbsp;
                            Отдельный вход &nbsp;&bull;&nbsp; Телевизор &nbsp;&bull;&nbsp; Москитная
                            сетка &nbsp;&bull;&nbsp; Спутниковые каналы &nbsp;&bull;&nbsp; Отопление
                            &nbsp;&bull;&nbsp; Фен &nbsp;&bull;&nbsp; Удлиненные кровати (более 2
                            метров) &nbsp;&bull;&nbsp; Гардеробная &nbsp;&bull;&nbsp; Электрический
                            чайник &nbsp;&bull;&nbsp; Вешалка для одежды &nbsp;&bull;&nbsp; Сушилка
                            для одежды &nbsp;&bull;&nbsp; Туалетная бумага
                        </span>
                    </div>
                </div>
                <div className="bg-white p-6">
                    <Image src={King} className="h-full max-w-full " alt="123" />
                </div>

                <div className="bg-white p-6">
                    <Image src={King} className="h-full max-w-full " alt="123" />
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
                            Бесплатные туалетно-косметические принадлежности &nbsp;&bull;&nbsp; Душ
                            &nbsp;&bull;&nbsp; Халат &nbsp;&bull;&nbsp; Дополнительная ванная
                            &nbsp;&bull;&nbsp; Туалет &nbsp;&bull;&nbsp; Диван &nbsp;&bull;&nbsp;
                            Розетка около кровати &nbsp;&bull;&nbsp; Рабочий стол &nbsp;&bull;&nbsp;
                            Отдельный вход &nbsp;&bull;&nbsp; Телевизор &nbsp;&bull;&nbsp; Москитная
                            сетка &nbsp;&bull;&nbsp; Спутниковые каналы &nbsp;&bull;&nbsp; Отопление
                            &nbsp;&bull;&nbsp; Фен &nbsp;&bull;&nbsp; Удлиненные кровати (более 2
                            метров) &nbsp;&bull;&nbsp; Гардеробная &nbsp;&bull;&nbsp; Электрический
                            чайник &nbsp;&bull;&nbsp; Вешалка для одежды &nbsp;&bull;&nbsp; Сушилка
                            для одежды &nbsp;&bull;&nbsp; Туалетная бумага
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
                            Бесплатные туалетно-косметические принадлежности &nbsp;&bull;&nbsp; Душ
                            &nbsp;&bull;&nbsp; Халат &nbsp;&bull;&nbsp; Дополнительная ванная
                            &nbsp;&bull;&nbsp; Туалет &nbsp;&bull;&nbsp; Диван &nbsp;&bull;&nbsp;
                            Розетка около кровати &nbsp;&bull;&nbsp; Рабочий стол &nbsp;&bull;&nbsp;
                            Отдельный вход &nbsp;&bull;&nbsp; Телевизор &nbsp;&bull;&nbsp; Москитная
                            сетка &nbsp;&bull;&nbsp; Спутниковые каналы &nbsp;&bull;&nbsp; Отопление
                            &nbsp;&bull;&nbsp; Фен &nbsp;&bull;&nbsp; Удлиненные кровати (более 2
                            метров) &nbsp;&bull;&nbsp; Гардеробная &nbsp;&bull;&nbsp; Электрический
                            чайник &nbsp;&bull;&nbsp; Вешалка для одежды &nbsp;&bull;&nbsp; Сушилка
                            для одежды &nbsp;&bull;&nbsp; Туалетная бумага
                        </span>
                    </div>
                </div>
                <div className="bg-white p-6">
                    <Image src={King} className="h-full max-w-full " alt="123" />
                </div>
            </div>
        </main>
    )
}
