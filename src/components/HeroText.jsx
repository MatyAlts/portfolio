import { FlipWords } from "./FlipWords.jsx";
import { motion } from "motion/react";
import { memo } from "react";

const HeroText = memo(() => {
  const words = ["Smart", "Modern", "Powerful"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 md:mt-40 rounded-3xl bg-clip-text">
  {/* DesktopView */}
  <div className="hidden md:flex flex-col items-start md:pl-16 c-space">
    <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 1 }}
        >
          Hi, I'm Matias
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 1.2 }}
          >
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              duration={3000}
              className="font-black text-white text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 1.8 }}
          >
            Web / Backend Solutions
          </motion.p>
        </div>
      </div>
      {/* MobileView */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium"
          variants={variants}
          initial={"hidden"}
          animate={"visible"}
          transition={{ delay: 1 }}
        >
          Hi, I'm Matias
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-neutral-300"
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className={"font-bold text-white text-7xl"}
              duration={3000}
            />
          </motion.div>

          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial={"hidden"}
            animate={"visible"}
            transition={{ delay: 1.8 }}
          >
            Web / Backend Solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
});

HeroText.displayName = 'HeroText';

export default HeroText;
