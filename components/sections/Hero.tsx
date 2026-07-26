'use client';

import { siteConfig } from '@/config/site';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="mx-auto flex w-full max-w-5xl grow flex-col px-5 py-10"
    >
      <motion.h1
        variants={itemVariants}
        className="font-round leading-normal text-cyan-600 md:text-5xl"
      >
        Academic Documentation
      </motion.h1>
      <motion.p variants={itemVariants} className="text-muted text-xl">
        Archive of university projects and coding experiments.
      </motion.p>
      <motion.div variants={itemVariants}>
        <Link
          href="/projects"
          className="hover:bg-primary/80 text-primary-fg mt-5 inline-flex w-fit items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium transition-colors"
        >
          Explore
        </Link>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-12 grow space-y-4">
        <div className="bg-surface relative flex min-h-40 flex-col items-start justify-center overflow-hidden rounded-2xl p-6 shadow-sm">
          <h3 className="text-muted mb-4 w-full text-left text-sm font-bold tracking-widest uppercase">
            Github Activity
          </h3>
          <Image
            src="https://ghchart.rshah.org/fathur-md"
            alt="Github Activity"
            width={800}
            height={120}
            loading="eager"
            unoptimized
            className="h-full w-full object-contain opacity-80 mix-blend-multiply dark:mix-blend-normal"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {siteConfig.heroStats.map((box, index) => (
            <div
              key={index}
              className={`bg-surface flex flex-col rounded-2xl p-6 shadow-sm ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span className="text-2xl font-bold text-cyan-600">
                {box.value}
              </span>
              <span className="text-muted mt-2 text-lg font-medium">
                {box.title}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
