import { getRepoReadme } from '@/lib/github';
import { useEffect, useState } from 'react';

export function useRepoReadme(repoName: string, isOpen: boolean) {
  const [readme, setReadme] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen && !readme) {
      const fetchReadme = async () => {
        setIsLoading(true);
        try {
          const text = await getRepoReadme(repoName);
          setReadme(text);
        } catch (error) {
          console.error('Error fetching README:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchReadme();
    }
  }, [isOpen, repoName, readme]);

  return { readme, isLoading };
}
