"use client"
import { Variants, motion } from "framer-motion"

const cardVariants: Variants = {
    hide: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

const ScrollCardAnimation = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <motion.div
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={cardVariants}
        >
            {children}
        </motion.div>
    )
}

export default ScrollCardAnimation