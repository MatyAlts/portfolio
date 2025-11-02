import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { memo } from "react";

const ParallaxBackground = memo(() => {
    const { scrollYProgress } = useScroll({
      layoutEffect: false,
    });
    const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 400,
      damping: 90,
      mass: 0.2,
    });
    const mountain3Y = useTransform(smoothProgress, [0, 0.5], ["0%", "70%"]);
    const planetsX = useTransform(smoothProgress, [0, 0.5], ["0%", "-20%"]);
    const mountain2Y = useTransform(smoothProgress, [0, 0.5], ["0%", "30%"]);
    const mountain1Y = useTransform(smoothProgress, [0, 0.5], ["0%", "0%"]);
  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 bg-black/40 w-full h-screen -z-50"
          style={{
            backgroundImage: 'url("/assets/sky.jpg")',
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40 will-change-transform"
          style={{
            backgroundImage: 'url("/assets/mountain-3.png")',
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
            willChange: "transform",
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30 bg-no-repeat will-change-transform"
          style={{
            backgroundImage: 'url("/assets/planets.png")',
            backgroundPosition: "center",
            backgroundSize: "contain",
            x: planetsX,
            willChange: "transform",
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div className="absolute inset-0 -z-20 will-change-transform"
          style={{
            backgroundImage: 'url("/assets/mountain-2.png")',
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
            willChange: "transform",
          }}
        />
        {/* Mountain Layer 1 */}
        <motion.div className="absolute inset-0 -z-10 will-change-transform"
          style={{
            backgroundImage: 'url("/assets/mountain-1.png")',
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
            willChange: "transform",
          }}
        />
      </div>
    </section>
  );
});

ParallaxBackground.displayName = 'ParallaxBackground';

export default ParallaxBackground;
