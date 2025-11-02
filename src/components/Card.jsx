import { motion } from "motion/react";
import { memo, useState, useEffect, useRef } from "react";

const Card = memo(({ style, text, image, containerRef }) => {
  const [key, setKey] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Force re-render to recalculate drag constraints
      setKey(prev => prev + 1);
    };

    // Wait for container to have dimensions
    const checkContainer = () => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setIsReady(true);
          setKey(prev => prev + 1);
        } else {
          setTimeout(checkContainer, 50);
        }
      }
    };

    checkContainer();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [containerRef]);

  if (!isReady) return null;

  return image && !text ? (
    <motion.img
      key={key}
      className="absolute w-15 cursor-grab active:cursor-grabbing"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
    />
  ) : (
    <motion.div
      key={key}
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab active:cursor-grabbing"
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 15 }}
    >
      {text}
    </motion.div>
  );
});

Card.displayName = 'Card';

export default Card;
