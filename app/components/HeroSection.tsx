'use client';
import { motion, Variants } from 'motion/react';

export default function HeroSection() {
  const title = 'Hello there.';
  const letters = title.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="border-border/50 flex flex-col items-center justify-center border-b-8 px-6 py-8 pb-16 text-center md:py-20">
      <motion.h1
        className="font-borel flex justify-center text-6xl font-medium tracking-tighter text-cyan-600 md:mt-10 md:text-8xl"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={item}
            className="inline-block pt-24 pb-2 leading-0"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="text-muted font-round mt-6 text-xl font-medium md:text-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: 'easeOut' }}
      >
        Welcome to the repository of my university journey.
      </motion.p>
    </section>
  );
}
