export default function Loading() {
  const skeletons = Array(4).fill(0);

  return (
    <div className="flex flex-1 flex-col items-center px-5 py-20">
      <div className="mb-10 w-full max-w-5xl">
        <div className="mb-4 h-10 w-64 animate-pulse rounded-lg bg-gray-300"></div>
        <div className="h-6 w-full max-w-2xl animate-pulse rounded-lg bg-gray-300"></div>
      </div>
      <div className="w-full max-w-5xl">
        <div className="mb-6 h-8 w-48 animate-pulse rounded-lg bg-gray-300"></div>
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
      </div>
    </div>
  );
}
