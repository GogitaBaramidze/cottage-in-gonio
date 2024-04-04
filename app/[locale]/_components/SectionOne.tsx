/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function SectionOne() {
    const { t } = useTranslation()
    const textAnimation = {
        hidden: { opacity: 0 },
        visible: (i: any) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1, // Made the animation faster
            },
        }),
    }

    const delayedTextAnimation = {
        hidden: { opacity: 0 },
        visible: (i: any) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1 + 0.4, // Added a 2 second delay
            },
        }),
    }

    const title = t('chateau')
        .split('')
        .map((char: any, i: any) => (
            <motion.span
                key={i}
                variants={textAnimation}
                custom={i}
                initial="hidden"
                animate="visible"
            >
                {char}
            </motion.span>
        ))

    const subtitle = t('enjoy')
        .split('')
        .map((char, i) => (
            <motion.span
                key={i}
                variants={delayedTextAnimation}
                custom={i}
                initial="hidden"
                animate="visible"
            >
                {char}
            </motion.span>
        ))
    const buttonVariants = {
        hidden: { y: 100, scale: 0 },
        visible: {
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 120,
                damping: 20,
            },
        },
        hover: {
            scale: [1, 1.1, 1, 1.1, 1],
            transition: {
                duration: 0.8,
                repeat: Infinity,
            },
        },
    }
    return (
        <section className="flex min-h-screen w-full  flex-col items-center bg-mainBgMobile bg-contain bg-top bg-no-repeat text-white  shadow-xl md:bg-mainBg  md:bg-cover ">
            <span className="mt-24 text-4xl font-semibold tracking-wider md:mt-[400px] md:text-[72px]">
                {title}
            </span>
            <span className="text-3xl">{subtitle}</span>

            <motion.button
                className="rounded-lg bg-[#c7995e99] p-10 text-4xl hover:bg-[#00610bcc]"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
            >
                Book Now !
            </motion.button>
        </section>
    )
}
