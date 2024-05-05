import Image from 'next/image'
import obj from '../../../../public/images/wine/obj.png'
import Shelf from '../../../../public/images/wine/Shelf.jpg'

export default function Kind() {
    return (
        <section className="flex h-auto w-full flex-col border-t-2 border-[#a28964] bg-pageBg ">
            <Image
                src={Shelf}
                className="border-gray hidden md:block h-auto w-1/4  border-b-2 border-r-2 border-t-2 object-contain  shadow-xl "
                alt="!23"
            />
            <div className="flex h-full w-full flex-row justify-center items-center">
                <span>qqegqegqe qg qeg qeg qeg qeg qeg qeg qeg eqg eq</span>
                <Image src={obj} className="h-auto w-full  object-contain  " alt="!23" />
            </div>
        </section>
    )
}
