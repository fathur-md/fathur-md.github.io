'use client';

import { siteConfig } from '@/config/site';
import { containerVariants, itemVariants } from '@/lib/motion';
import { Activity, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="mx-auto flex w-full max-w-5xl grow flex-col px-5 pt-24 pb-12"
    >
      <motion.h1
        variants={itemVariants}
        className="font-round text-accent text-center text-3xl leading-tight font-bold tracking-tight md:text-left md:text-5xl"
      >
        <span className="text-foreground">Academic</span>{' '}
        <span className="from-accent to-accent-secondary bg-linear-to-r bg-clip-text text-transparent">
          Documentation.
        </span>
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-muted mt-2 text-center text-lg md:text-left md:text-xl"
      >
        Archive of university projects and coding experiments.
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="mt-8 flex flex-wrap items-center gap-4"
      >
        <Link
          href="/projects"
          className="bg-accent border-border-glass shadow-glass-inner mx-auto flex items-center gap-2 rounded-full border px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 md:mx-0"
        >
          Explore Projects <ArrowRight size={16} />
        </Link>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-10 flex grow flex-col space-y-4"
      >
        <div className="border-border-glass bg-card-bg hover:bg-card-bg/80 shadow-glass-inner relative flex min-h-40 w-full flex-col items-start justify-center overflow-hidden rounded-3xl border p-6 backdrop-blur-xl transition-transform">
          <h3 className="text-foreground/80 mb-4 flex w-full items-center gap-2 text-left text-sm font-bold tracking-widest uppercase">
            <Activity size={16} /> Github Activity
          </h3>
          <div className="w-full overflow-x-auto pb-2">
            <Image
              src="https://ghchart.rshah.org/f97316/fathur-md"
              alt="Github Activity"
              width={800}
              height={120}
              loading="eager"
              unoptimized
              className="h-full w-full min-w-150 object-contain opacity-80 mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {siteConfig.heroStats.map((box, index) => (
            <div
              key={index}
              className={`bg-card-bg border-border-glass hover:bg-card-bg/80 shadow-glass-inner flex flex-col justify-center rounded-3xl border p-6 backdrop-blur-xl transition-transform ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span className="text-accent text-2xl font-bold">
                {box.value}
              </span>
              <span className="text-foreground/70 mt-2 text-sm font-medium md:text-base">
                {box.title}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
