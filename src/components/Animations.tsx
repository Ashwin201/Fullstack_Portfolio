import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const animationVariants: any = {
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    },
    slideUp: {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
    slideDown: {
        hidden: { opacity: 0, y: -15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    },
    slideLeft: {
        hidden: { opacity: 0, x: -15 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    slideRight: {
        hidden: { opacity: 0, x: 15 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    },
    zoomIn: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
    zoomOut: {
        hidden: { opacity: 0, scale: 1.2 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    },
};

const AnimateOnVisible = ({ children, animation = "fade", className = "", duration = 0.8 }: any) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const customVariants = {
        ...animationVariants[animation],
        visible: {
            ...animationVariants[animation]?.visible,
            transition: { ...animationVariants[animation]?.visible?.transition, duration },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={customVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
};

export default AnimateOnVisible;
