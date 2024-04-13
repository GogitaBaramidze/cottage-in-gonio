import Image from 'next/image'
import React from 'react'
import Bath1 from '../../../public/panoramicView/Bath1.jpg'

export default function PanoramicView() {
    return (
        <section className="flex flex-row items-center justify-center">
            <div className="h-full w-full">
                <Image src={Bath1} className=" h-full w-full" alt="123" />
            </div>
        </section>
    )
}
