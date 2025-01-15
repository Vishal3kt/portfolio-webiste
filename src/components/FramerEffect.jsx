import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import './FramerEffect.scss';

const FramerEffect = () => {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    const leftContainerVariant = {
        hidden: { x: "-100%" },
        visible: { x: 0, transition: { duration: 1 } },
        exit: { x: 0, opacity: 0, transition: { duration: 1 } },
    };

    const topContainerVariant = {
        hidden: { y: "-100%" },
        visible: { y: 0, transition: { duration: 1, delay: 0.5 } },
        exit: { y: 0, opacity: 0, transition: { duration: 1, delay: 1 } },
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAnimationComplete(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="app">
            {!isAnimationComplete && (
                <>
                    <motion.div
                        className="left-container"
                        variants={leftContainerVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />

                    <motion.div
                        className="top-container"
                        variants={topContainerVariant}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    />
                </>
            )}

            {isAnimationComplete && (
                <div className="content">
                    <h1>Welcome to the Website</h1>
                    <p>Your content goes here.</p>
                </div>
            )}
        </div>
    );
};

export default FramerEffect;
