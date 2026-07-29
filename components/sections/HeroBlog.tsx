'use client';

import Image from 'next/image';
import walpp from '@/public/images/wallpp.jpeg';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Loader } from 'lucide-react';

export default function HeroBlog() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="relative flex min-h-[50dvh] flex-col justify-end overflow-hidden">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{ opacity: 0 }}
            className="absolute inset-0 top-12 flex items-center justify-center"
          >
            <Loader className="h-8 w-8 animate-spin text-gray-400" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        className="absolute inset-0 z-50 flex items-center justify-center"
      >
        <Image
          src={walpp}
          alt="Hero Blog Image"
          fill
          priority
          placeholder="blur"
          className="object-cover"
          onLoad={() => setIsLoaded(true)}
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/50" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col justify-end p-5 pb-10">
          <h1 className="text-4xl leading-none font-medium text-white drop-shadow-sm">
            Thoughts & Documentations.
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-tight text-white md:text-lg">
            Notes and documentations from my academic journey.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
