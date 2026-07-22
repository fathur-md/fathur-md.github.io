const FloatingBadge = () => {
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <div className="bg-background/80 border-border/50 flex animate-bounce items-center gap-3 rounded-full border px-4 py-2 shadow-lg backdrop-blur-md">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500"></span>
        </span>
        <span className="text-xs font-medium tracking-wide text-amber-600 sm:text-sm">
          Under Development
        </span>
      </div>
    </div>
  );
};

export default FloatingBadge;
