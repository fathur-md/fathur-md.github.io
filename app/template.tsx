'use client';

import { motion } from 'motion/react';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20, filter: 'blur(5px)' }} // Masuk dari kanan & agak blur
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }} // Jelas di tengah
      transition={{ type: 'spring', stiffness: 260, damping: 20 }} // Efek memantul halus khas iOS
    >
      {children}
    </motion.div>
  );
}
