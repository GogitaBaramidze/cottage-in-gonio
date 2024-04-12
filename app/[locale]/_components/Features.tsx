/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import ScrollTrigger from 'react-scroll-trigger'

import { motion } from 'framer-motion'
import { useState } from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'
import Building from '../../../public/images/Building.jpg'
import { Visitors } from '@/components/svgs'

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: (custom: string | any) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.1 },
    }),
}

const imageAnimation = {
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
const ScrollTriggerComponent = ScrollTrigger as React.ComponentType<any>
export default function Features() {
    const [count, setCount] = useState(false)
    return (
        <>
            <ScrollTriggerComponent onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <motion.section
                    viewport={{ amount: 0.2 }}
                    initial="hidden"
                    whileInView="visible"
                    className="flex h-full w-full flex-row px-6"
                >
                    <div className="flex h-full  flex-col gap-2">
                        <motion.div
                            custom={1}
                            variants={textAnimation}
                            className="ml-2 flex w-[200px]  flex-row items-center rounded-md bg-zinc-800 p-2"
                        >
                            <Visitors />
                            {count && (
                                <CountUp
                                    className="ml-1 text-white"
                                    start={1}
                                    end={20000}
                                    duration={3}
                                />
                            )}
                            <span className="ml-1 text-white">+ visitors</span>
                        </motion.div>
                        <motion.div
                            custom={2}
                            variants={textAnimation}
                            className="ml-4 flex w-[200px]  flex-row items-center rounded-md bg-zinc-800 p-2"
                        >
                            <Visitors />
                            {count && (
                                <CountUp
                                    className="ml-1 text-white"
                                    start={1}
                                    end={19}
                                    duration={3}
                                />
                            )}
                            <span className="ml-1 text-white">+ weddings</span>
                        </motion.div>
                        <motion.div
                            custom={3}
                            variants={textAnimation}
                            className="ml-6 flex  w-[200px]   flex-row items-center rounded-md bg-zinc-800 p-2"
                        >
                            <Visitors />
                            {count && (
                                <CountUp
                                    className="ml-1 text-white"
                                    start={1}
                                    end={30}
                                    duration={3}
                                />
                            )}
                            <span className="ml-1 text-white">+ meeting</span>
                        </motion.div>
                        <motion.div
                            custom={4}
                            variants={textAnimation}
                            className="ml-8 flex w-[200px]  flex-row items-center rounded-md bg-zinc-800 p-2"
                        >
                            <Visitors />
                            {count && (
                                <CountUp
                                    className="ml-1 text-white"
                                    start={1}
                                    end={15}
                                    duration={3}
                                />
                            )}
                            <span className="ml-1 text-white">+ event</span>
                        </motion.div>
                    </div>

                    <motion.div variants={imageAnimation} custom={1}>
                        <Image src={Building} width={1400} height={1400} alt="building" />
                    </motion.div>
                    <motion.div variants={imageAnimation} custom={2}>
                        <Image src={Building} width={1400} height={1400} alt="building" />
                    </motion.div>
                    <motion.div variants={imageAnimation} custom={3}>
                        <Image src={Building} width={1400} height={1400} alt="building" />
                    </motion.div>
                </motion.section>
            </ScrollTriggerComponent>
        </>
    )
}
