import RepoModal from '@/components/features/projects/RepoModal';
import { GithubRepo } from '@/types/github';
import { StarIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export default function RepoCard({ repo }: { repo: GithubRepo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="relative h-full">
      <motion.button
        layoutId={`card-${repo.id}`}
        onClick={() => setIsOpen(true)}
        transition={{ type: 'spring', stiffness: 500, damping: 45 }}
        className="bg-surface hover:bg-surface-hover relative z-10 flex h-full w-full flex-col rounded-2xl p-6 text-left shadow-sm"
      >
        <motion.h3
          layoutId={`name-${repo.id}`}
          transition={{ type: 'spring', stiffness: 500, damping: 45 }}
          className="text-primary text-xl"
        >
          {repo.name}
        </motion.h3>
        <motion.div
          layoutId={`content-fade-${repo.id}`}
          transition={{ type: 'spring', stiffness: 500, damping: 45 }}
          className="mt-2 flex flex-1 flex-col"
        >
          <p className="text-muted line-clamp-3 text-sm">
            {repo.description || 'No description provided.'}
          </p>
          <div className="text-muted mt-auto flex gap-4 pt-4 font-mono text-xs">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className="bg-primary inline-block h-2 w-2 rounded-full"></span>
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1">
              {repo.stargazers_count > 0 && <StarIcon className="h-4 w-4" />}
              {repo.stargazers_count}
            </span>
          </div>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <RepoModal
            repo={repo}
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </article>
  );
}
