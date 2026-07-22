export default function RepositorySkeleton() {
  const skeletons = Array(4).fill(0);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border border-gray-300 p-5"
        >
          <div className="mb-4 h-6 w-3/4 rounded-md bg-gray-200"></div>

          <div className="mb-2 h-4 w-full rounded-md bg-gray-300"></div>
          <div className="mb-6 h-4 w-5/6 rounded-md bg-gray-300"></div>

          <div className="flex gap-4">
            <div className="h-4 w-16 rounded-md bg-gray-200"></div>
            <div className="h-4 w-12 rounded-md bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
