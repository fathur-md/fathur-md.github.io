export default function BackgroundGlow() {
  return (
    <>
      <div className="pointer-events-none fixed top-[5%] left-[5%] -z-10 h-[120vw] max-h-200 w-[120vw] max-w-200 rounded-full bg-[radial-gradient(circle_at_center,var(--accent)_0%,transparent_70%)] opacity-20 mix-blend-multiply md:h-[60vw] md:w-[60vw] dark:opacity-15 dark:mix-blend-screen" />

      <div className="pointer-events-none fixed right-[5%] bottom-[5%] -z-10 h-[120vw] max-h-200 w-[120vw] max-w-200 rounded-full bg-[radial-gradient(circle_at_center,var(--accent-secondary)_0%,transparent_60%)] opacity-25 mix-blend-multiply md:h-[60vw] md:w-[60vw] dark:opacity-15 dark:mix-blend-screen" />
    </>
  );
}
