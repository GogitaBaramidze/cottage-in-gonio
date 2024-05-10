'use client'

import ScrollTrigger from 'react-scroll-trigger'
import { motion } from 'framer-motion'
import { useState } from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'
import Family from '../../../public/images/about/Family.jpg'
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

const ScrollTriggerComponent = ScrollTrigger as React.ComponentType<any>
export default function About() {
    const [count, setCount] = useState(false)
    return (
        <>
            <ScrollTriggerComponent onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                <div className="relative flex h-auto w-full flex-row gap-20 py-10 pl-24">
                    <div className="flex h-[600px] w-full flex-col items-center gap-5">
                        <h1>qeglqmegqegqeg</h1>
                        <p>
                            kqefmjqeimgfqeim gik qemgqe mgmqegqegmqegeq kqefmjqeimgfqeim gik qemgqe
                            mgmqegqegmqegeqkqefmjqeimgfqeim gik qemgqe
                            mgmqegqegmqegeqkqefmjqeimgfqeim gik qemgqe mgmqegqegmqegeq
                        </p>
                        <p>
                            kqefmjqeimgfqeim gik qemgqe mgmqegqegmqegeq kqefmjqeimgfqeim gik qemgqe
                            mgmqegqegmqegeqkqefmjqeimgfqeim gik qemgqe
                            mgmqegqegmqegeqkqefmjqeimgfqeim gik qemgqe mgmqegqegmqegeq
                        </p>
                        <p>
                            kqefmjqeimgfqeim gik qemgqe mgmqegqegmqegeq kqefmjqeimgfqeim gik qemgqe
                            mgmqegqegmqegeqkqefmjqeimgfqeim gik qemgqe
                            mgmqegqegmqegeqkqefmjqeimgfqeim gik qemgqe mgmqegqegmqegeq
                        </p>
                        <motion.section
                            viewport={{ amount: 0.2 }}
                            initial="hidden"
                            whileInView="visible"
                            className="flex h-auto  w-full  flex-col items-center gap-5  "
                        >
                            <div className="flex w-full flex-col">
                                <div className="grid h-auto w-full grid-cols-2 grid-rows-2  gap-5  ">
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
                            </div>
                        </motion.section>
                    </div>
                    <Image src={Family} className="h-full w-1/2 object-cover" alt="building" />
                </div>
            </ScrollTriggerComponent>
        </>
    )
}
