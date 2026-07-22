import RepositoryCard from '@/components/RepositoryCard';
import { getGithubRepositories } from '@/lib/github';

export default async function RepositoryGrid() {
  let repos = [];
  try {
    repos = await getGithubRepositories();
  } catch {
    return (
      <div>
        <h2 className="text-muted mb-6 text-2xl font-semibold">
          My Github Projects • 0
        </h2>
        <p className="text-muted text-lg">
          Failed to fetch repositories. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="">
      <h2 className="text-muted mb-6 text-2xl font-semibold">
        My Github Projects • {repos.length}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}
