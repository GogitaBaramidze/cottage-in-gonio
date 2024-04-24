'use client'

import { useState } from 'react'
import ReactPlayer from 'react-player'
import ScrollTrigger from 'react-scroll-trigger'
import Cheers from '../../../public/wine/Cheers.jpg'
import WineSort from '../../../public/wine/WineSort.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Wine() {
    const ScrollTriggerComponent = ScrollTrigger as React.ComponentType<any>
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)

    const textAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        visible: (custom: any) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { delay: custom * 0.1 },
        }),
    }
    const img = {
        hidden: {
            y: 0,
            opacity: 0,
        },
        visible: (custom: any) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { delay: custom * 0.1 },
        }),
    }

    return (
        <section className="grid min-h-screen w-full grid-cols-1 items-start justify-center gap-6  bg-[#f1efeb]  py-5 shadow-lg md:grid-cols-3 md:items-center  md:gap-10 px-7  md:py-b xl:px-16">
            <ScrollTriggerComponent
                onEnter={() => setVisible1(true)}
                onExit={() => setVisible1(false)}
            >
                <motion.div
                    initial="hidden"
                    whileInView={visible1 ? 'visible' : 'hidden'}
                    className="flex h-auto w-full flex-col rounded-md "
                >
                    <motion.h1
                        variants={textAnimation}
                        custom={1}
                        className="mt-4 font-bgCaps text-xl text-[#111]"
                    >
                        ღვინის მოწრუპა
                    </motion.h1>
                    <motion.p
                        variants={textAnimation}
                        custom={2}
                        className="mb-4 mt-4 rounded-md text-[#111]"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        1500s, when an unknown printer.
                    </motion.p>
                    <motion.div variants={img} custom={3} className="rounded-md">
                        <Image
                            src={Cheers}
                            alt="bottle"
                            className="h-auto w-full rounded-md border border-[#484848] shadow-xl"
                        />
                    </motion.div>
                </motion.div>
            </ScrollTriggerComponent>
            <ScrollTriggerComponent
                onEnter={() => setVisible2(true)}
                onExit={() => setVisible2(false)}
            >
                <motion.div
                    initial="hidden"
                    whileInView={visible2 ? 'visible' : 'hidden'}
                    className="flex h-auto w-full flex-col items-start"
                >
                    <motion.h1
                        variants={textAnimation}
                        custom={1}
                        className="mt-4 font-bgCaps text-[#111] md:order-2"
                    >
                        გინდა პახმელიის გარეშე ?
                    </motion.h1>
                    <motion.p
                        variants={textAnimation}
                        custom={2}
                        className="mb-4 mt-4 text-[#111] md:order-3"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </motion.p>
                    <motion.div variants={img} custom={2} className="rounded-md  md:order-1">
                        <Image
                            src={WineSort}
                            alt="bottle"
                            className=" h-auto w-full rounded-md border border-[#484848] shadow-xl  "
                        />
                    </motion.div>
                    <motion.div
                        variants={textAnimation}
                        custom={1}
                        className="mt-6 flex w-full justify-center md:order-5 md:justify-start"
                    >
                        <Button className=" h-12 w-full md:w-1/2">ვსვათ</Button>
                    </motion.div>
                </motion.div>
            </ScrollTriggerComponent>
            <div className="hidden h-2/3 items-start justify-center overflow-hidden rounded-md  shadow-xl border border-[#484848]  md:flex">
                <ReactPlayer
                    url="./Bath.mp4"
                    width="100%"
                    height="100%"
                    playing={visible1 || visible2}
                    muted={true}
                    loop={true}
                />
            </div>
        </section>
    )
}
