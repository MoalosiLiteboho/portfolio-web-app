import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {cn} from "@nextui-org/react";

export interface FlipWordsProps {
    words: string[];
    duration?: number;
    className?: string;
}

export const FlipWords = ({words, duration = 3000, className }: FlipWordsProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={cn("z-10", className)}
            >
                {words[currentIndex].split("").map((letter, index) => (
                    <motion.span
                        key={words[currentIndex] + index}
                        initial={{opacity: 0, y: 10, filter: "blur(8px)"}}
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                        transition={{delay: index * 0.08, duration: 0.4}}
                        className="inline-block"
                    >
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
