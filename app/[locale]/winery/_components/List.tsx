import Image from 'next/image'
import Bottles from '../../../../public/images/wine/Bottles.png'
import Draw from '../../../../public/images/wine/Draw.jpg'

export default function List() {
    return (
        <section className="flex h-auto w-full flex-col border-t-2 border-[#a28964] bg-white    md:flex-row">
            <Image src={Draw} className="border-gray  h-auto w-full   md:block  " alt="!23" />
            <div className="flex h-full w-full flex-row  items-start md:items-center">
                <div className="grid h-full w-full grid-cols-1   gap-y-4 text-center text-sm md:text-base  ">
                    <span className="mb-10 font-moderline text-2xl md:text-3xl  lg:text-6xl ">
                        Our <span className="font-canela">wines</span>
                    </span>
                    <span>example qegqgq</span>
                    <span>example qeg</span>
                    <span>example qegqe </span>
                    <span>example qegq</span>
                </div>
                <Image src={Bottles} className="h-auto w-full  object-contain  " alt="!23" />
            </div>
        </section>
    )
}
