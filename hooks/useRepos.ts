import { getGithubRepositories } from '@/lib/github';
import { GithubRepo } from '@/types/github';
import { useEffect, useState } from 'react';

export function useRepos() {
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

  return { repos, isLoading, error };
}
