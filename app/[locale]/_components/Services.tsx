'use client'

import Image from 'next/image'
import test from '../../../public/images/test.jpg'
import test2 from '../../../public/images/test2.webp'
import test3 from '../../../public/images/test3.webp'
import test4 from '../../../public/images/test4.jpg'
import test5 from '../../../public/images/test5.webp'
import { motion } from 'framer-motion'
import ServicesMobile from './ServicesMobile'
import Link from 'next/link'

export default function Services() {
    return (
        <>
            <main className=" mt-10  hidden h-[1100px] w-full flex-col items-center gap-4  px-7      py-20 md:flex xl:h-[760px] xl:flex-row xl:gap-10 xl:px-20">
                <div className="order-1  grid h-1/3    w-1/2 grid-rows-1 xl:order-none xl:h-full xl:w-full">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 1 }}
                        className="relative flex   cursor-pointer flex-row items-end justify-center overflow-hidden rounded-lg "
                    >
                        <Image src={test} layout="fill" objectFit="cover" alt="123" />
                        <h1 className=" z-30 mb-5 rounded-md bg-[#b39062]  p-2  text-xl  text-white  backdrop-blur-3xl ">
                            Wedding and event place
                        </h1>
                    </motion.div>
                </div>
                <>
                    <div className="grid h-1/3 w-full grid-cols-2 gap-4 xl:h-full xl:grid-cols-1 xl:grid-rows-2  xl:gap-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 1 }}
                            className="relative flex   cursor-pointer flex-row items-end justify-center overflow-hidden rounded-lg "
                        >
                            <Link href="/hotel">
                                <Image src={test2} layout="fill" objectFit="cover" alt="123" />
                                <h1 className=" z-30 mb-5 rounded-md bg-[#a98250]  p-2  text-xl  text-white  backdrop-blur-3xl ">
                                    Hotel service
                                </h1>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 1 }}
                            className="relative flex   cursor-pointer flex-row items-end justify-center overflow-hidden rounded-lg "
                        >
                            <Image src={test3} layout="fill" objectFit="cover" alt="123" />
                            <h1 className=" z-30 mb-5 rounded-md bg-[#a98250]  p-2  text-xl  text-white  backdrop-blur-3xl ">
                                Restourant service
                            </h1>
                        </motion.div>
                    </div>
                    <div className="grid h-1/3  w-full  grid-cols-2 gap-4 xl:h-full  xl:grid-cols-1 xl:grid-rows-2 xl:gap-10">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 1 }}
                            className="relative flex   cursor-pointer flex-row items-end justify-center overflow-hidden rounded-lg "
                        >
                            <Image src={test4} layout="fill" objectFit="cover" alt="123" />
                            <h1 className=" z-30 mb-5 rounded-md bg-[#a98250]  p-2  text-xl  text-white  backdrop-blur-3xl ">
                                Kitchen Masterclass
                            </h1>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            initial={{ scale: 1 }}
                            className="relative flex   cursor-pointer flex-row items-end justify-center overflow-hidden rounded-lg "
                        >
                            <Image src={test5} layout="fill" objectFit="cover" alt="123" />
                            <h1 className=" z-30 mb-5 rounded-md bg-[#a98250]  p-2  text-xl  text-white  backdrop-blur-3xl ">
                                Degustation service
                            </h1>
                        </motion.div>
                    </div>
                </>
            </main>
            <main className="flex md:hidden">
                <ServicesMobile />
            </main>
        </>
    )
}
