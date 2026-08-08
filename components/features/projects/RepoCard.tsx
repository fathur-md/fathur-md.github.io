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
        transition={{ type: 'spring', stiffness: 350, damping: 35 }}
        className="border-border-glass bg-card-bg hover:bg-card-bg/80 shadow-glass-inner relative z-10 flex h-full w-full flex-col rounded-3xl border p-6 text-left backdrop-blur-xl"
      >
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
          className="mt-3 flex flex-1 flex-col"
        >
          <p className="text-foreground/70 line-clamp-3 text-sm leading-relaxed">
            {repo.description || 'No description provided.'}
          </p>
          <div className="text-muted mt-auto flex gap-4 pt-4 font-mono text-xs">
            {repo.language && (
              <span className="flex items-center gap-1">
                <span className="bg-accent-secondary inline-block h-2.5 w-2.5 rounded-full"></span>
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
