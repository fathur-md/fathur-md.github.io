'use client';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { siteConfig } from '@/config/site';
import { ExternalLink, MenuIcon, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useScrollLock(isOpen);

  return (
    <>
      <header className="bg-background/50 border-border sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-colors">
        <div className="mx-auto flex h-12 max-w-5xl items-center justify-between px-6 text-sm">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`text-foreground hover:text-primary font-semibold tracking-normal ${pathname === '/' ? 'text-primary' : ''}`}
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden space-x-6 md:flex">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`hover:text-primary text-foreground/80 flex items-center gap-2 font-medium transition-colors ${pathname.includes(link.href) ? 'text-primary' : ''}`}
              >
                {link.name}
                {link.name === 'Github' && (
                  <ExternalLink className="inline-block h-4 w-4" />
                )}
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
            <X
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
            className="bg-background/95 fixed inset-x-0 top-12 bottom-0 z-40 flex pt-6 backdrop-blur-xl md:hidden"
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
              {siteConfig.navLinks.map((link) => (
                // Key cukup di elemen terluar dalam loop
                <motion.div variants={animasiTautan} key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-foreground/80 flex items-center gap-2 py-3 font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    {link.name === 'Github' && (
                      <ExternalLink className="inline-block h-8 w-8" />
                    )}
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
