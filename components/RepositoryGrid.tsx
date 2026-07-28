import RepositoryCard from '@/components/RepositoryCard';
import { getGithubRepositories } from '@/lib/github';

export default async function RepositoryGrid() {
  let repos = [];
  try {
    repos = await getGithubRepositories();
  } catch {
    return (
      <p className="text-muted text-lg">
        Failed to fetch repositories. Please try again later.
      </p>
    );
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {repos.map((repo, index) => (
          <RepositoryCard key={repo.id} repo={repo} index={index} />
        ))}
      </div>
    </section>
  );
}
