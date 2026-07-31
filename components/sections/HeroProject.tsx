'use client';

import { containerVariants, itemVariants } from '@/lib/motion';
import { motion } from 'motion/react';
import Link from 'next/link';

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
        <motion.div variants={itemVariants}>
          <Link
            href="/lab"
            className="hover:bg-primary/80 bg-primary mt-5 inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
          >
            See the Lab
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
