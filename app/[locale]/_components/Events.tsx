import Image from 'next/image'
import TestImage from '../../../public/images/weddingTest.jpg'
import TestImage1 from '../../../public/images/weddingTest3.jpg'
import TestImage2 from '../../../public/images/weddingTest4.jpg'
import TestImage3 from '../../../public/images/weddingTest5.jpg'

export default function Events() {
    return (
        <section className="flex h-auto w-full flex-col  bg-letterC bg-contain  bg-center bg-no-repeat px-20 py-10 pb-20">
            <div className="flex h-auto w-full flex-col items-center">
                <span className="mr-40 font-moderline text-5xl">
                    evenT<em className=" font-moderlineTail">s</em>
                </span>
                <span className="  ml-20 mt-2 font-canela text-3xl">meetings & weddings</span>
            </div>
            <div className=" relative grid  h-[500px] grid-cols-3 grid-rows-1 items-center justify-center ">
                <div className="relative h-full w-full">
                    <Image src={TestImage} className=" h-full w-full object-contain" alt="!23" />
                    <span className="absolute text-[red] top-20  right-20"> Weddind rarmamra</span>
                </div>
                <Image src={TestImage3} className="mt-20 h-full w-full object-contain" alt="!23" />
                <Image src={TestImage1} className=" h-full w-full object-contain" alt="!23" />
            </div>
        </section>
    )
}
