'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { siteConfig } from '@/config/site';
import { ExternalLink, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useScrolled } from '@/hooks/use-scrolled';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isScrolled = useScrolled(20);
  useScrollLock(isOpen);

  return (
    <>
      <header
        className={`md:shadow-glass-inner fixed top-0 z-50 flex w-full justify-center transition-all duration-500 ease-out md:px-4 md:pt-4 ${
          isScrolled ? 'px-0 pt-0' : 'px-4 pt-2'
        }`}
      >
        <nav
          className={`border-border-glass md:bg-card-bg flex flex-col border-b backdrop-blur-2xl transition-all duration-500 ease-out md:w-auto md:max-w-2xl md:rounded-full md:border ${
            isScrolled
              ? 'bg-background/50 w-full max-w-full rounded-none border-x-0 border-t-0 border-b'
              : 'bg-card-bg/80 shadow-glass-inner w-full max-w-2xl rounded-3xl border'
          }`}
        >
          <div className="flex items-center justify-between gap-8 px-4 py-2 md:px-5">
            <Link
              href="/"
              className={`font-bold tracking-tight transition-opacity hover:opacity-70 ${
                pathname === '/' ? 'text-accent' : 'text-foreground/60'
              }`}
              onClick={() => setIsOpen(false)}
            >
              FathurM
            </Link>
            <ul className="text-foreground/70 hidden items-center gap-6 text-sm font-medium md:flex">
              {siteConfig.navLinks.map((link) => {
                const isExternal = link.href.startsWith('http');
                const isActive =
                  !isExternal &&
                  (pathname === link.href ||
                    (link.href !== '/' && pathname.startsWith(link.href)));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className={`flex items-center transition-opacity hover:opacity-70 ${
                        isActive ? 'text-accent' : ''
                      }`}
                    >
                      {link.name}
                      {isExternal && (
                        <ExternalLink className="ml-1 inline-block h-4 w-4" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button
              className="text-foreground/70 flex p-1 transition-transform hover:scale-110 active:scale-95 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="bg-background/50 fixed inset-0 z-40 flex items-start justify-center px-6 pt-16 backdrop-blur-sm md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
              className={`border-border-glass bg-card-bg flex w-full rounded-2xl border backdrop-blur-2xl`}
            >
              <ul className="flex w-full flex-col gap-6 px-6 py-5 text-xl font-medium">
                {siteConfig.navLinks.map((link) => {
                  const isExternal = link.href.startsWith('http');
                  const isActive =
                    !isExternal &&
                    (pathname === link.href ||
                      (link.href !== '/' && pathname.startsWith(link.href)));

                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center py-1 transition-opacity hover:opacity-70 ${
                          isActive ? 'text-accent' : 'text-foreground/70'
                        }`}
                      >
                        {link.name}
                        {isExternal && (
                          <ExternalLink className="ml-1 inline-block h-5 w-5" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
