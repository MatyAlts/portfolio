import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({
  words,
  duration = 3000,
  className
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
        exit={{
          opacity: 0,
          y: -30,
          x: 30,
          filter: "blur(8px)",
          scale: 1.5,
        }}
        className={twMerge(
          "z-10 inline-block text-left will-change-transform",
          className
        )}
        key={currentWord}
        style={{ transform: "translateZ(0)" }}>
        {currentWord.split("").map((letter, letterIndex) => (
          <motion.span
            key={currentWord + letterIndex}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: letterIndex * 0.03,
              duration: 0.2,
              ease: "easeOut",
            }}
            className="inline-block"
            style={{ transform: "translateZ(0)" }}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
