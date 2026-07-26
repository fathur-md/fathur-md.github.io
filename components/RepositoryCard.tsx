'use client';

import RepositoryModal from '@/components/RepositoryModal';
import { GithubRepo } from '@/types/github';
import { StarIcon } from 'lucide-react';
import { useState } from 'react';

export default function RepositoryCard({ repo }: { repo: GithubRepo }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        key={repo.id}
        className="hover:bg-surface block rounded-xl border border-gray-200 p-5 text-left transition-all duration-200"
      >
        <h3 className="text-lg font-semibold text-cyan-600">{repo.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-400">
          {repo.description || 'No description provided.'}
        </p>
        <div className="mt-4 flex gap-4 font-mono text-xs text-gray-500">
          {repo.language && (
            <span className="flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-500"></span>
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1">
            {repo.stargazers_count > 0 && <StarIcon className="h-4 w-4" />}
            {repo.stargazers_count}
          </span>
        </div>
      </button>

      <RepositoryModal
        repo={repo}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
