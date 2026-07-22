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

export async function getRepoReadme(repoName: string): Promise<string> {
  try {
    let res = await fetch(
      `https://raw.githubusercontent.com/fathur-md/${repoName}/main/README.md`,
    );
    if (!res.ok) {
      res = await fetch(
        `https://raw.githubusercontent.com/fathur-md/${repoName}/master/README.md`,
      );
    }
    if (!res.ok) {
      throw new Error('Failed to fetch README');
    }
    const text = await res.text();
    return text;
  } catch {
    return 'README not found';
  }
}
