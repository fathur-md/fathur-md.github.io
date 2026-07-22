import { GithubRepo } from '@/types/github';

export async function getGithubRepositories(): Promise<GithubRepo[]> {
  const res = await fetch(
    'https://api.github.com/users/fathur-md/repos?sort=updated',
    {
      next: { revalidate: 3600 },
    },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch repositories');
  }
  const raw: GithubRepo[] = await res.json();

  return raw.filter((repo) => repo.fork === false);
}
