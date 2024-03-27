'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'

export default function Header() {
    return (
        <motion.main
            initial={{ y: 0, opacity: 0 }} // Start off-screen, opaque, and slightly scaled down
            animate={{ y: 0, opacity: 1 }} // Animate down, fade in, and scale up
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Customize transition timing and easing
            className="absolute flex w-full flex-row items-center justify-between px-6 py-3 transition-all md:px-16 md:py-4 lg:px-20"
            style={{
                backdropFilter: 'blur(5px) saturate(150%)',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}
        >
            <Image src={Logo} alt="Chateau iver logo" width={50} height={50} />
            <div className="flex flex-row items-center text-xl font-medium uppercase text-white ">
                <span className="ml-8">Home</span>
                <span className="ml-8">Home</span>
                <span className="ml-8">Home</span>
                <span className="ml-8">Home</span>
            </div>
        </motion.main>
    )
}
