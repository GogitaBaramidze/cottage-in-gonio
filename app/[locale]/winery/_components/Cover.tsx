import Image from 'next/image'

import CoverImg from '../../../../public/images/wine/WineryCover.jpg'

export default function Cover() {
    return (
        <section className="h-auto w-full">
            <Image src={CoverImg} className="h-screen w-full object-cover" alt="123" />
            <h1 className="absolute right-[5%] top-[20%] font-canela  text-6xl font-medium  text-white md:right-[15%] md:top-1/4 md:text-7xl lg:text-8xl">
                From <br />
                <span className="ml-14 font-moderline md:ml-16">
                    grape<span className="font-moderlineTail">s</span>
                </span>
                <br />
                <span className="ml-40">to glass</span>
            </h1>
        </section>
    )
}
