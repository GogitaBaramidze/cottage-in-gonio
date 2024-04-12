/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useState } from 'react'
import ReactPlayer from 'react-player'
import ScrollTrigger from 'react-scroll-trigger'
import Cheers from '../../../public/wine/Cheers.jpg'
import WineSort from '../../../public/wine/WineSort.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'

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

    const videoAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
            scale: 0.6,
        },
        visible: (custom: string | any) => ({
            x: 0,
            opacity: 1,
            scale: 1,
            transition: { delay: custom * 0.3 },
        }),
    }

    return (
        <ScrollTriggerComponent onEnter={() => setVisible(true)} onExit={() => setVisible(false)}>
            <motion.section
                viewport={{ amount: 0.3 }}
                initial="hidden"
                whileInView="visible"
                className="grid h-full w-full grid-cols-3 items-start gap-10   bg-rose-700 px-10 pt-10"
            >
                <div className="flex h-auto w-full flex-col rounded-md  ">
                    <motion.h1 variants={textAnimation} custom={1} className="mt-4 text-white">
                        What is Lorem Ipsum?
                    </motion.h1>
                    <motion.p variants={textAnimation} custom={2} className="mt-4 text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </motion.p>
                    <motion.div variants={textAnimation} custom={3}>
                        <Image
                            src={Cheers}
                            alt="bottle"
                            className="h-auto max-w-full  object-contain"
                        />
                    </motion.div>
                </div>

                <div className="mt-20 flex h-full w-full flex-col ">
                    <motion.div variants={textAnimation} custom={4}>
                        <Image
                            src={WineSort}
                            alt="bottle"
                            className=" h-auto max-w-full rounded-md object-contain"
                        />
                    </motion.div>
                    <motion.h1 variants={textAnimation} custom={5} className="mt-4 text-white">
                        What is Lorem Ipsum?
                    </motion.h1>
                    <motion.p variants={textAnimation} custom={6} className="mt-4 text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </motion.p>
                </div>
                <div className="flex h-2/3 items-center justify-center rounded-md border border-white py-4 ">
                    <motion.div className="h-full w-full" variants={videoAnimation} custom={1}>
                        <ReactPlayer
                            url="./Bath.mp4"
                            width="100%"
                            height="100%"
                            playing={visible}
                            muted={true}
                            loop={true}
                        />
                    </motion.div>
                </div>
            </motion.section>
        </ScrollTriggerComponent>
    )
}
