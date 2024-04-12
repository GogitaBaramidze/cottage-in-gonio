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
                    className="flex min-h-screen w-full flex-row items-center gap-10 px-20 py-10"
                >
                    {/* <div className="flex w-[600px] flex-col">
                        <p>
                            qegkpqeigjqgjqeipgqeipgqeigqeipjgqipejgqijgqejpjipgeqijqgeijpgqjiqgejiqegjpiqjpiqjpg
                        </p>
                        <div className="grid h-full w-full grid-cols-2 grid-rows-2  gap-5  ">
                            <motion.div
                                custom={1}
                                variants={textAnimation}
                                className=" flex w-full flex-row items-center rounded-md bg-zinc-800 p-2"
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
                                className="flex w-full flex-row items-center rounded-md bg-zinc-800 p-2"
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
                                className=" flex  w-full  flex-row items-center rounded-md bg-zinc-800 p-2"
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
                                className="flex w-full flex-row items-center rounded-md bg-zinc-800 p-2"
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
                    </div> */}

                    <motion.div variants={imageAnimation} custom={1} className="">
                        <Image src={Building} className="h-full max-w-full" alt="building" />
                    </motion.div>

                    <motion.div variants={imageAnimation} custom={2}>
                        <Image src={Building} className="h-full max-w-full" alt="building" />
                    </motion.div>
                    <motion.div variants={imageAnimation} custom={3}>
                        <Image src={Building} className="h-full max-w-full" alt="building" />
                    </motion.div>
                    <motion.div variants={imageAnimation} custom={4}>
                        <Image src={Building} className="h-full max-w-full" alt="building" />
                    </motion.div>
                    <video width="320" height="240" controls>
                        <source src="./Bath.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.section>
            </ScrollTriggerComponent>
        </>
    )
}
