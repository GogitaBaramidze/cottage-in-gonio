'use client'

import Image from 'next/image'
import test from '../../../public/images/test.jpg'
import test2 from '../../../public/images/test2.webp'
import test3 from '../../../public/images/test3.webp'
import test4 from '../../../public/images/test4.jpg'
import test5 from '../../../public/images/test5.webp'
import { motion } from 'framer-motion'

export default function Services() {
    return (
        <>
            <main className="mt-10 grid h-[760px] w-full  grid-cols-3 gap-4 bg-[#D9D9D9] px-7 py-12 xl:gap-10 xl:px-10">
                <div className="grid grid-rows-1">
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
                <div className="grid grid-rows-2 gap-4 xl:gap-10">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        initial={{ scale: 1 }}
                        className="relative flex   cursor-pointer flex-row items-end justify-center overflow-hidden rounded-lg "
                    >
                        <Image src={test2} layout="fill" objectFit="cover" alt="123" />
                        <h1 className=" z-30 mb-5 rounded-md bg-[#a98250]  p-2  text-xl  text-white  backdrop-blur-3xl ">
                            Hotel service
                        </h1>
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
                <div className="grid grid-rows-2 gap-4 xl:gap-10">
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
            </main>
        </>
    )
}
