import Image from 'next/image'
import Garden from '../../../../public/images/wine/VineGarden.jpg'

export default function WineYard() {
    return (
        <section className="h-auto w-full py-10  xl:px-24">
            <div className="flex h-full w-full flex-col items-center   gap-10 md:flex-row md:gap-20">
                <Image
                    src={Garden}
                    className="h-[350px] object-cover md:h-[450px] md:w-[550px]"
                    alt="123"
                />
                <div className="flex h-full w-full flex-col items-center gap-6  px-5 md:gap-10 ">
                    <h1>qegqegqegqe qeg qeg qeg qeg </h1>
                    <span className="text-center">
                        qegqeg qeg qeg qeg eqg eqg qeg qeg qeqegqeg qeg qeg qeg eqg eqg qeg qeg
                        qeqegqeg qeg qeg qeg eqg eqg qeg qeg qeqegqeg qeg qeg qeg eqg eqg qeg qeg
                        qeqegqeg qeg qeg qeg eqg eqg qeg qeg qe qegqeg qeg qeg qeg eqg eqg qeg qeg
                        qeqegqeg qeg qeg qeg eqg eqg qeg
                    </span>
                </div>
            </div>
        </section>
    )
}
