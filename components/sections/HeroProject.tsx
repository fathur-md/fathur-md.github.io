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
      <div className="mx-auto max-w-5xl px-5 py-10">
        <motion.h1
          variants={itemVariants}
          className="font-round text-primary leading-normal md:text-5xl"
        >
          Projects.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-muted mt-2 md:text-xl"
        >
          A collection of things I&apos;ve built, broken, and learned from. From
          academic research to midnight experiments.
        </motion.p>
      </div>
    </motion.section>
  );
}
