import { animate } from "framer-motion";
import { exit } from "process";

export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 60,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};

export const fadeInDown = {
    initial: {
        opacity: 0,
        y: -60,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
};


export const springRight = {
    initial: {
        x: 1000,
    },
    animate: {
        x: 0,
        transition: {
            type: 'spring',
            ease: 'easeIn',
            stiffness: 100,
            damping: 15,
            mass: 2,
    },
}
};

export const springLeft = {
    initial: {
        x: -1000,
    },
    animate: {
        x: 0,
        transition: {
            type: 'spring',
            stiffness: 100,
            damping: 15,
            mass: 2,
    },
}
};


export const stagger = {
    initial: {
    },
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const routeAnimation = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            ease: 'easeInOut',
        },  
    },
};

