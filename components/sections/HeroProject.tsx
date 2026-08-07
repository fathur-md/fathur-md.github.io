'use client';

import { containerVariants, itemVariants } from '@/lib/motion';
import { motion } from 'motion/react';

export default function HeroProject() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="mx-auto max-w-5xl px-5 pt-24">
        <motion.h1
          variants={itemVariants}
          className="font-round text-center text-3xl leading-tight font-bold tracking-tight md:text-left md:text-5xl"
        >
          <span className="from-accent to-accent-secondary bg-linear-to-r bg-clip-text text-transparent">
            Projects.
          </span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-muted mt-2 text-center text-lg md:text-left md:text-xl"
        >
          A collection of things I&apos;ve built, broken, and learned from. From
          academic research to midnight experiments.
        </motion.p>
      </div>
    </motion.section>
  );
}
