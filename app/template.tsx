'use client';

import { motion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
      className="flex min-h-full w-full flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
