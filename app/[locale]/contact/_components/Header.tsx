import React from 'react'

export default function Header() {
    return (
        <section className="flex h-auto w-full flex-col items-center gap-10 px-5">
            <h1 className=" font-moderline text-4xl lg:text-5xl font-semibold">Chateau Iveri</h1>
            <div className="grid grid-cols-1 md:grid-cols-2   gap-x-4 md:gap-y-4 gap-y-3 text-sm  ">
                <span>
                    <span className=" font-semibold ">address:</span> qfqefqefqefqef
                </span>
                <span>
                    <span className=" font-semibold ">Phone:</span> qfqefqefqefqef
                </span>
                <span>
                    <span className=" font-semibold ">facebook:</span> qfqefqefqefqef
                </span>
                <span>
                    <span className=" font-semibold ">Instagram:</span> qfqefqefqefqef
                </span>
                <span>
                    <span className=" font-semibold ">Email:</span> qfqefqefqefqef
                </span>
            </div>
        </section>
    )
}
