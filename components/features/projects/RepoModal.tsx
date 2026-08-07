import { motion } from 'motion/react';
import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { GithubRepo } from '@/types/github';
import { useRepoReadme } from '@/hooks/useRepoReadme';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useScrollLock } from '@/hooks/use-scroll-lock';

export default function RepoModal({
  repo,
  isOpen,
  onClose,
}: {
  repo: GithubRepo;
  isOpen: boolean;
  onClose: () => void;
}) {
  const { readme, isLoading } = useRepoReadme(repo.name, isOpen);
  const [isReadyToRead, setIsReadyToRead] = useState(false);

  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsReadyToRead(true), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className="bg-background/50 fixed inset-0 z-30 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        layoutId={`card-${repo.id}`}
        transition={{ type: 'spring', stiffness: 350, damping: 35 }}
        style={{
          WebkitBackfaceVisibility: 'hidden',
          transform: 'translateZ(0)',
        }}
        className="border-border-glass bg-card-bg fixed inset-x-0 top-20 z-30 mx-auto flex h-[85vh] flex-col overflow-hidden rounded-3xl border p-6 shadow-(--glass-shadow) backdrop-blur-sm sm:inset-x-5 md:max-w-4xl"
      >
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.2, delay: 0.3 },
          }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
          onClick={onClose}
          className="bg-background/50 border-border-glass hover:bg-foreground/10 text-foreground/70 absolute top-5 right-5 z-10 rounded-full border p-2 backdrop-blur-md transition-all active:scale-95"
        >
          <X className="h-5 w-5" />
        </motion.button>

        <div className="border-border-glass flex shrink-0 flex-col border-b pb-5 text-left">
          <motion.h3
            layoutId={`name-${repo.id}`}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}

            className="text-accent text-xl font-semibold"
          >
            {repo.name}
          </motion.h3>
          <motion.div
            layoutId={`content-fade-${repo.id}`}
            transition={{ type: 'spring', stiffness: 350, damping: 35 }}
            className="h-0 overflow-hidden opacity-0"
          ></motion.div>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.3 },
            }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-secondary mt-3 w-fit text-sm font-semibold transition-colors hover:underline"
          >
            View on GitHub ↗
          </motion.a>
        </div>
        {isReadyToRead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-6 flex-1 overflow-y-auto pr-2"
          >
            {isLoading && !readme && (
              <div className="flex justify-center py-20">
                <div className="border-accent h-10 w-10 animate-spin rounded-full border-4 border-t-transparent"></div>
              </div>
            )}

            {!isLoading && readme && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-foreground [&>pre]:bg-background/40 [&>pre]:border-border-glass max-w-none [&>h1]:mb-5 [&>h1]:text-4xl [&>h1]:font-semibold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-3xl [&>h2]:font-bold [&>h3]:mt-6 [&>h3]:text-2xl [&>h3]:font-semibold [&>p]:mb-4 [&>p]:leading-relaxed [&>pre]:mb-6 [&>pre]:overflow-x-auto [&>pre]:rounded-xl [&>pre]:border [&>pre]:p-5 [&>pre]:backdrop-blur-md [&>ul]:mb-4 [&>ul]:ml-6 [&>ul]:list-disc"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {readme}
                </ReactMarkdown>
              </motion.div>
            )}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
