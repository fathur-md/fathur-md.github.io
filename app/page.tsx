import RepositoryGrid from '@/components/RepositoryGrid';

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center py-20">
      <div className="mb-10 w-full max-w-5xl px-5">
        <h1 className="font-borel mb-2 text-4xl leading-none font-bold text-cyan-500">
          {"Fathur's Repositories"}
        </h1>
        <p className="text-muted font-round text-xl">
          A live directory of my university journey, open-source projects, and
          coding experiments.
        </p>
      </div>
      <div className="w-full max-w-5xl px-5">
        <RepositoryGrid />
      </div>
    </div>
  );
}
