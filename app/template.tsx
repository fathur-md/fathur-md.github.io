'use client';

import { motion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="flex flex-1 flex-col"
    >
      {children}
    </motion.div>
  );
}
