'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import testImage from '../../../public/images/test.jpg'
import test2Image from '../../../public/images/test2.webp'

export default function Features() {
    const imageAnimation = {
        hidden: { opacity: 0, y: '100%' },
        visible: {
            opacity: 1,
            y: '0%',
            transition: {
                delay: 0.1,
                ease: 'easeInOut',
            },
        },
    }
    const delayedImageAnimation = {
        hidden: { opacity: 0, y: '100%' },
        visible: {
            opacity: 1,
            y: '50%',
            transition: {
                delay: 0.5,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <div className="grid w-full grid-cols-2">
            <span className="overflow-hidden whitespace-nowrap">
                123efqefqegfqegqegqegqeg123efqefqegfqegqegqegqeg123efqefq
            </span>
            <div className="relative flex flex-row">
                <motion.div initial="hidden" animate="visible" variants={imageAnimation}>
                    <Image
                        src={testImage}
                        className="h-[400px] w-[400px]"
                        alt="Description of the image"
                    />
                </motion.div>
                <motion.div initial="hidden" animate="visible" variants={delayedImageAnimation}>
                    <Image
                        src={test2Image}
                        className="absolute left-48 top-20 h-[400px] w-[400px]"
                        alt="Description of the image"
                    />
                </motion.div>
            </div>
        </div>
    )
}
