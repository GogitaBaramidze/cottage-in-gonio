'use client'

import { motion } from 'framer-motion'

export default function Com() {
    const textAnimation = {
        hidden: {
            x: 100,
            opacity: 0,
            scale: 0.2,
        },
        visible: {
            x: 0,
            opacity: 1,

            scale: 1,
            transition: {
                delay: 0.1,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="flex h-full w-full flex-col"
        >
            <motion.div variants={textAnimation} className="text-red h-40 w-40 bg-[red] text-xl">
                <h1>qe;kgjqeognoqengoqengqeuguoqebgoqbuogeobuqgobuqgeobuqebgouqbgeuqge</h1>
            </motion.div>
            <motion.div variants={textAnimation} className="text-red h-40 w-40 bg-[red] text-xl">
                <h1>qe;kgjqeognoqengoqengqeuguoqebgoqbuogeobuqgobuqgeobuqebgouqbgeuqge</h1>
            </motion.div>
            <motion.div variants={textAnimation} className="text-red h-40 w-40 bg-[red] text-xl">
                <h1>qe;kgjqeognoqengoqengqeuguoqebgoqbuogeobuqgobuqgeobuqebgouqbgeuqge</h1>
            </motion.div>
            <motion.div variants={textAnimation} className="text-red h-40 w-40 bg-[red] text-xl">
                <h1>qe;kgjqeognoqengoqengqeuguoqebgoqbuogeobuqgobuqgeobuqebgouqbgeuqge</h1>
            </motion.div>
            <motion.div variants={textAnimation} className="text-red h-40 w-40 bg-[red] text-xl">
                <h1>qe;kgjqeognoqengoqengqeuguoqebgoqbuogeobuqgobuqgeobuqebgouqbgeuqge</h1>
            </motion.div>
        </motion.section>
    )
}
