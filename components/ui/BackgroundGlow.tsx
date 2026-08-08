export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-[-20%] left-[-50%] h-[120vw] min-h-150 w-[80vw] min-w-150 rounded-full bg-[radial-gradient(ellipse,var(--color-accent)_0%,transparent_70%)] opacity-20 mix-blend-multiply md:top-[-60%] md:left-[-20%] dark:opacity-10 dark:mix-blend-screen"></div>

      <div className="absolute top-[-20%] right-[-40%] h-[120vw] min-h-150 w-[80vw] min-w-150 rounded-full bg-[radial-gradient(ellipse,var(--color-accent-secondary)_0%,transparent_70%)] opacity-15 mix-blend-multiply md:top-[-40%] md:right-[-20%] dark:opacity-8 dark:mix-blend-screen"></div>

      <div className="absolute top-1/2 left-1/2 h-[100vw] min-h-150 w-screen min-w-150 -translate-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(6,182,212,1)_0%,transparent_70%)] opacity-20 mix-blend-multiply dark:opacity-5 dark:mix-blend-screen"></div>

      <div className="from-background absolute inset-x-0 top-0 h-32 bg-linear-to-b to-transparent"></div>
    </div>
  );
}
