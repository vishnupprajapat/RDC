"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
    hero?: string;
  }

const TextAnimation: React.FC<HeroProps> = ({ hero }) => {
  return (
    <>
      {hero?.split(" ").map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, filter: "blur(4px)", y: 50 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.8,
            delay: index * 0.2,
            ease: "easeInOut",
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </>
  );
};

export default TextAnimation;
