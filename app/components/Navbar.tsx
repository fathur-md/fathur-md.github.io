'use client';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './Icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'GitHub', href: 'https://github.com/fathur-md' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const wadahTautan = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const animasiTautan = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Z-50 agar Header selalu di atas */}
      <header className="bg-background/50 border-border fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-colors">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6 text-sm">
          {/* Logo tidak lagi disembunyikan */}
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-foreground hover:text-primary font-normal"
          >
            Fathurrahman Muhammad
          </Link>

          <nav className="hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-primary text-foreground/80 font-normal transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground relative flex h-6 w-6 items-center justify-center focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            {/* Ikon Hamburger */}
            <MenuIcon
              className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${
                isOpen
                  ? 'scale-50 rotate-90 opacity-0'
                  : 'scale-100 rotate-0 opacity-100'
              }`}
            />

            {/* Ikon Close (X) */}
            <CloseIcon
              className={`absolute h-6 w-6 transition-all duration-300 ease-in-out ${
                isOpen
                  ? 'scale-100 rotate-0 opacity-100'
                  : 'scale-50 -rotate-90 opacity-0'
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            // Z-40 agar berada di bawah Header. inset-0 menuhi layar. pt-24 mendorong konten ke bawah Header.
            className="bg-background/95 fixed inset-x-0 top-12 bottom-0 z-40 pt-24 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <motion.nav
              className="flex flex-col gap-4 px-10 text-3xl"
              variants={wadahTautan}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((link) => (
                // Key cukup di elemen terluar dalam loop
                <motion.div variants={animasiTautan} key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-foreground/80 block py-3 font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
