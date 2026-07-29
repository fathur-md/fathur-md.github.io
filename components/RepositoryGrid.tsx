'use client';

import Loading from '@/app/loading';
import RepositoryCard from '@/components/RepositoryCard';
import { getGithubRepositories } from '@/lib/github';
import { GithubRepo } from '@/types/github';
import { useEffect, useState } from 'react';

export default function RepositoryGrid() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const data = await getGithubRepositories();
        setRepos(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-12">
      {isLoading && <Loading />}
      {!isLoading && error && (
        <p className="text-muted text-center italic">
          Failed to load repositories. Please try again later.
        </p>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {repos.map((repo, index) => (
            <RepositoryCard key={repo.id} repo={repo} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
