'use client';

import RepoCard from '@/components/features/projects/RepoCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { useRepos } from '@/hooks/useRepos';

export default function RepoGrid() {
  const { repos, isLoading, error } = useRepos();

  return (
    <section
      aria-label="Github Repositories"
      className="mx-auto w-full max-w-5xl px-5 py-12"
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && (
        <p className="text-muted text-center italic">
          Failed to load repositories. Please try again later.
        </p>
      )}

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-5">
        {repos.map((repo, index) => {
          const isWide = index % 4 === 0 || index % 4 === 3;
          return (
            <li
              key={repo.id}
              className={`${isWide ? 'md:col-span-3' : 'md:col-span-2'} min-h-`}
            >
              <RepoCard repo={repo} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
