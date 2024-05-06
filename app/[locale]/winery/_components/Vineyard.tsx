import Image from 'next/image'
import Garden from '../../../../public/images/wine/Garden.jpg'

export default function Vineyard() {
    return (
        <section className="h-auto w-full xl:px-24  py-10">
            <div className="flex h-full w-full flex-col items-center   gap-10 md:gap-20 md:flex-row">
                <Image
                    src={Garden}
                    className="h-[350px] object-cover md:h-[450px] md:w-[550px]"
                    alt="123"
                />
                <div className="flex h-full w-full flex-col items-center gap-6  md:gap-10 px-5 ">
                    <h1>qegqegqegqe qeg qeg qeg qeg </h1>
                    <span className='text-center'>
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
