/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function SectionOne() {
    const { t } = useTranslation()
    const textAnimation = {
        hidden: { opacity: 0, x: -100 },
        visible: (i: any) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.03,
                ease: 'easeIn',
            },
        }),
    }

    const delayedTextAnimation = {
        hidden: { opacity: 0 },
        visible: (i: any) => ({
            opacity: 1,
            transition: {
                delay: i * 0.03, // Added a 2 second delay
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

    return (
        <section className="  flex min-h-screen w-full flex-col items-center bg-mainBgMobile bg-contain bg-top bg-no-repeat text-white  shadow-xl md:bg-mainBg  md:bg-cover ">
            <span className="mt-24 text-4xl  font-moderline tracking-wider md:mt-[400px] md:text-[72px]">
                {title}
            </span>
            <span className="text-3xl">{subtitle}</span>
        </section>
    )
}
