'use client';

import Image from 'next/image';
import walpp from '@/public/images/wallpp.webp';
import { motion } from 'motion/react';

export default function HeroLab() {
  return (
    <section className="relative flex min-h-[50dvh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={walpp}
          alt="Hero Blog Image"
          fill
          priority
          placeholder="blur"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col justify-end p-5 pb-10"
      >
        <h1 className="text-4xl leading-none font-medium text-white drop-shadow-sm">
          Thoughts & Documentations.
        </h1>
        <p className="mt-3 max-w-2xl text-base leading-tight text-white md:text-lg">
          Notes and documentations from my academic journey.
        </p>
      </motion.div>
    </section>
  );
}
