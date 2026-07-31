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
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-background fixed inset-0 z-90"
        onClick={onClose}
      />
      <motion.div
        layoutId={`card-${repo.id}`}
        className="bg-surface fixed inset-x-0 top-20 z-100 mx-auto flex h-[85vh] flex-col overflow-hidden rounded-2xl p-6 shadow-sm sm:inset-x-5 md:max-w-235"
      >
        <motion.button
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10, transition: { duration: 0 } }}
          transition={{ duration: 0.2, delay: 0.3 }}
          onClick={onClose}
          className="absolute top-5 right-5 z-10 rounded-full bg-neutral-200/60 p-2 text-neutral-600 backdrop-blur-md transition-all hover:bg-neutral-300 dark:bg-neutral-800/60 dark:text-neutral-300 dark:hover:bg-neutral-700"
        >
          <X className="h-5 w-5" />
        </motion.button>

        <div className="border-border flex shrink-0 flex-col border-b pb-4 text-left">
          <motion.h3
            layoutId={`name-${repo.id}`}
            className="text-primary text-xl"
          >
            {repo.name}
          </motion.h3>
          <motion.div
            layoutId={`content-fade-${repo.id}`}
            className="h-0 overflow-hidden opacity-0"
          ></motion.div>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-fit text-sm text-cyan-600 hover:underline"
          >
            View on GitHub ↗
          </motion.a>
        </div>
        {isReadyToRead && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
            className="mt-4 flex-1 overflow-y-auto pr-2"
          >
            {isLoading && !readme && (
              <div className="flex justify-center py-20">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
              </div>
            )}

            {!isLoading && readme && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-foreground [&>pre]:bg-surface-hover max-w-none [&>h1]:mb-4 [&>h1]:text-3xl [&>h1]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>h2]:text-2xl [&>h2]:font-semibold [&>h3]:text-xl [&>h3]:font-semibold [&>p]:mb-4 [&>pre]:mb-4 [&>pre]:overflow-x-auto [&>pre]:rounded-lg [&>pre]:p-4 [&>ul]:mb-4 [&>ul]:ml-6 [&>ul]:list-disc"
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
