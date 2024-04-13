/* eslint-disable @typescript-eslint/no-explicit-any */
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
    const [visible, setVisible] = useState(false)
    const ScrollTriggerComponent = ScrollTrigger as React.ComponentType<any>
    const textAnimation = {
        hidden: {
            y: 100,
            opacity: 0,
            scale: 0.9,
        },
        visible: (custom: string | any) => ({
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { delay: custom * 0.1 },
        }),
    }

   

    return (
        <ScrollTriggerComponent onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
            <motion.section
                viewport={{ amount: 0.3 }}
                initial="hidden"
                whileInView="visible"
                className="grid h-full w-full grid-cols-1 items-start justify-center gap-6 bg-teal-950 px-5 py-5  md:grid-cols-3  md:items-center md:gap-10 md:gap-10 md:px-10"
            >
                <div className="flex h-auto w-full flex-col rounded-md  ">
                    <motion.h1
                        variants={textAnimation}
                        custom={1}
                        className="mt-4 text-xl text-white"
                    >
                        Chateau iver wine !!!!!!!!!!!!
                    </motion.h1>
                    <motion.p
                        variants={textAnimation}
                        custom={2}
                        className="mb-4 mt-4 rounded-md text-white"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        1500s, when an unknown printer.
                    </motion.p>
                    <motion.div variants={textAnimation} custom={3} className="rounded-md">
                        <Image
                            src={Cheers}
                            alt="bottle"
                            className="h-auto w-full rounded-md border border-white"
                        />
                    </motion.div>
                </div>

                <div className="flex h-auto w-full flex-col items-start md:h-full">
                    <motion.h1
                        variants={textAnimation}
                        custom={5}
                        className="mt-4 text-white md:order-2"
                    >
                        What is Lorem Ipsum?
                    </motion.h1>
                    <motion.p
                        variants={textAnimation}
                        custom={6}
                        className="mb-4 mt-4 text-white md:order-3"
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </motion.p>
                    <motion.div
                        variants={textAnimation}
                        custom={4}
                        className="rounded-md  md:order-1 md:mt-20 "
                    >
                        <Image
                            src={WineSort}
                            alt="bottle"
                            className=" h-auto w-full rounded-md border border-white  "
                        />
                    </motion.div>
                    <motion.div className="mt-6 flex w-full justify-center md:order-5 md:justify-start">
                        <Button className=" h-12 w-full md:w-1/2">Find More</Button>
                    </motion.div>
                </div>
                <div className="hidden h-2/3 items-start justify-center overflow-hidden rounded-md  border border-white  md:flex">
                    <ReactPlayer
                        url="./Bath.mp4"
                        width="100%"
                        height="100%"
                        playing={visible}
                        muted={true}
                        loop={true}
                    />
                </div>
            </motion.section>
        </ScrollTriggerComponent>
    )
}
