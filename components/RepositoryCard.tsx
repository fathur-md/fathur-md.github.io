'use client';

import RepositoryModal from '@/components/RepositoryModal';
import { GithubRepo } from '@/types/github';
import { StarIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function RepositoryCard({
  repo,
  index,
}: {
  repo: GithubRepo;
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.3 + index * 0.1,
        }}
        onClick={() => setIsOpen(true)}
        key={repo.id}
        className="border-border block rounded-xl border p-5 text-left"
      >
        <h3 className="text-primary text-lg font-semibold">{repo.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-400">
          {repo.description || 'No description provided.'}
        </p>
        <div className="text-muted mt-4 flex gap-4 font-mono text-xs">
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
      </motion.button>

      <RepositoryModal
        repo={repo}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
