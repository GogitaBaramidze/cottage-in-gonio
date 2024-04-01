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
                delay: i * 0.05, // Made the animation faster
            },
        }),
    }

    const delayedTextAnimation = {
        hidden: { opacity: 0 },
        visible: (i: any) => ({
            opacity: 1,
            transition: {
                delay: i * 0.05 + 0.4, // Added a 2 second delay
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

    const subtitle = 'Best place to enjoy'.split('').map((char, i) => (
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
        <section className="flex min-h-screen w-full flex-col  bg-mainBgMobile bg-cover bg-no-repeat px-20 md:bg-mainBg md:bg-cover">
            <div className="left-0 mt-[400px] text-[72px] font-semibold tracking-wider  text-white ">
                {title}
                <div className="ml-10 mt-[4px] text-[16px] font-bg">{subtitle}</div>
            </div>
        </section>
    )
}
