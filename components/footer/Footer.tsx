import { Message, PhoneCall, WhiteFb, WhiteInsta, WhiteWatsapp } from '../svgs'

export const Social = () => {
    return (
        <>
            <div className="flex flex-row  gap-x-6">
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/RoommateGeorgia.ge"
                >
                    <WhiteFb className="h-5 w-5" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/roommate.ge?igsh=NHRseWl5MHgyaW1o&utm_source=qr"
                >
                    <WhiteInsta className="h-5 w-5" />
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/%2B995599976385">
                    <WhiteWatsapp className="h-5 w-5" />
                </a>
            </div>
        </>
    )
}

export default function Footer() {
    return (
        <>
            <section className="bg-bottleBg relative flex h-auto w-full flex-col bg-cover bg-center bg-no-repeat">
                <div className="absolute h-full w-full  bg-[#71716c] opacity-70 "></div>
                <div className="z-50 w-full px-5 py-2 pt-12  md:px-7 md:pt-16 xl:px-24 xl:pt-20">
                    <div className="flex flex-col px-6  md:flex-row md:items-start md:justify-between md:px-0">
                        <span className="text-center font-moderline text-4xl font-bold text-white md:text-5xl">
                            Chateau Iveri
                        </span>

                        <div className="mt-10 flex flex-col gap-y-4 md:mt-0">
                            <span className="cursor-pointer text-sm  text-white hover:underline ">
                                Main
                            </span>

                            <div className="grid grid-cols-2 gap-y-4 md:grid-cols-2 lg:gap-x-20">
                                <span className="cursor-pointer text-sm text-white hover:underline">
                                    Hotel
                                </span>

                                <span className="cursor-pointer text-sm text-white hover:underline">
                                    Kitchen
                                </span>

                                <span className="cursor-pointer text-sm text-white hover:underline">
                                    Winery
                                </span>

                                <span className="cursor-pointer text-sm text-white hover:underline">
                                    Events
                                </span>

                                <span className="cursor-pointer text-sm text-white hover:underline">
                                    Hotel
                                </span>
                                <span className="cursor-pointer text-sm text-white hover:underline">
                                    About us
                                </span>
                            </div>
                        </div>
                        <div className="mt-10 flex flex-col md:mt-0 ">
                            <h1 className="text-sm font-semibold text-white">Contact</h1>
                            <div className="mt-4 flex  flex-col gap-4 md:grid md:grid-cols-1 ">
                                <div className="flex cursor-pointer  flex-row items-center">
                                    <PhoneCall className="h-4 w-4" />
                                    <span className="ml-2 text-sm text-white hover:underline">
                                        599 976 385
                                    </span>
                                </div>

                                <div className="flex cursor-pointer  flex-row items-center">
                                    <Message className="h-4 w-4" />
                                    <span className="ml-2 text-sm text-white hover:underline">
                                        info@roommate.ge
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col px-6 md:flex-row  md:items-center md:justify-end md:px-0 md:py-4">
                        <div className="mt-8 flex flex-col md:order-2 md:mt-0 ">
                            <div className="mt-4 md:mt-0">
                                <Social />
                            </div>
                        </div>

                        <div className="mt-8 h-[1px] w-full bg-white md:mt-0 md:hidden "></div>
                    </div>
                    <div className="mt-6 hidden h-[1px]  w-full bg-white md:block"></div>
                    <div className="flex flex-row items-center  justify-center  py-4 md:justify-center">
                        <p className="text-[10px] text-white">Copyrighyt 2024</p>
                    </div>
                </div>
            </section>
        </>
    )
}
