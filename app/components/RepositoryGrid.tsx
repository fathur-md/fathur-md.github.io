type GithubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  fork: boolean;
};

export default async function RepositoryGrid() {
  const res = await fetch(
    'https://api.github.com/users/fathur-md/repos?sort=updated',
    {
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    return <div className="text-red-500">Failed to load repositories.</div>;
  }
  
  const raw: GithubRepo[] = await res.json();
  const repos = raw.filter((repo) => repo.fork === false);

  return (
    <div className="">
      <h2 className="text-muted mb-6 text-2xl font-semibold">
        My Github Projects • {repos.length}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-surface block rounded-xl border border-gray-200 p-5 transition-all duration-200"
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
                {repo.stargazers_count > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                )}
                {repo.stargazers_count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
