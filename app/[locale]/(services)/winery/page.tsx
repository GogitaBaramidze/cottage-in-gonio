import Image from 'next/image'
import Rostomi from '../../../../public/images/wine/Rostomi2.jpg'
import tst2 from '../../../../public/images/wine/test3.jpg'

export default function page() {
    return (
        <main className="h-auto w-full bg-pageBg ">
            <div className="h-auto w-full">
                <Image src={tst2} className="h-screen w-full    object-cover" alt="123" />
                <h1 className="absolute  right-[15%] top-1/4 font-canela text-8xl   font-medium text-white">
                    From <br />
                    <span className=" ml-16 font-moderline">
                        grape<span className=" font-moderlineTail">s</span>
                    </span>{' '}
                    <br />
                    <span className="ml-40">to glass</span>
                </h1>
            </div>
        </main>
    )
}
