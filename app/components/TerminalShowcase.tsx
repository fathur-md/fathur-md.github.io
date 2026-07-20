import Image from 'next/image';

const TerminalShowcase = () => {
  return (
    <div className="mt-32 bg-black px-6 py-24 text-center">
      <h3 className="mb-6 text-3xl font-semibold text-gray-300 md:text-5xl">
        Implementing AI Agent
      </h3>
      <p className="text-muted mx-auto mb-16 max-w-4xl text-base leading-relaxed md:text-xl">
        Built with Antigravity CLI and Opencode. The first full-stack SaaS
        platfrom I&apos;ve orchestrated purely through advanced prompt
        engineering and agentic coding workflows.
      </p>
      <div className="relative aspect-video">
        <Image
          src="/terminal.png"
          alt="Terminal"
          fill
          className="h-auto w-full rounded-xl object-contain"
        />
      </div>

      <div className="px-5 pt-32 text-center">
        <h3 className="mb-12 text-3xl font-medium tracking-tight text-white md:text-5xl">
          Built as the Final Capstone Project for Web Programming.
        </h3>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://uas-saas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-fg rounded-full bg-teal-600 px-8 py-3 text-sm font-bold tracking-wide shadow-xl transition-transform hover:scale-105"
          >
            Launch Live App
          </a>

          <a
            href="#semesters"
            className="rounded-full border border-teal-300 bg-transparent px-8 py-3 text-sm font-bold tracking-wide text-teal-300"
          >
            Explore Courseworks &darr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default TerminalShowcase;

const temp = () => {
  return (
    <section className="bg-background min-h-dvh w-full pt-12 pb-32">
      <div className="mt-12 bg-black px-5 pt-24 pb-32 text-center">
        <h3 className="mb-6 text-3xl font-bold text-gray-300 md:text-5xl">
          Implementing AI Agent
        </h3>
        <p className="text-muted mx-auto mb-16 max-w-4xl text-base leading-relaxed md:text-xl">
          Built with Antigravity CLI and Opencode. The first full-stack SaaS
          platfrom I&apos;ve orchestrated purely through advanced prompt
          engineering and agentic coding workflows.
        </p>

        <div className="relative aspect-video">
          <Image
            src="/terminal.png"
            alt="Terminal"
            fill
            className="h-auto w-full rounded-xl object-contain"
          />
        </div>
        <div className="px-5 pt-32 text-center">
          <span className="text-primary mb-4 block text-sm font-bold tracking-widest uppercase">
            Academic Milestone
          </span>
          <h3 className="mb-12 text-3xl font-medium tracking-tight text-white md:text-5xl">
            Built as the Final Capstone Project for Web Programming.
          </h3>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://uas-saas.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-fg rounded-full px-8 py-3 text-sm font-bold tracking-wide shadow-xl transition-transform hover:scale-105"
            >
              Launch Live App
            </a>

            <a
              href="#semesters"
              className="border-border text-primary-fg hover:bg-surface rounded-full border bg-transparent px-8 py-3 text-sm font-bold tracking-wide transition-colors"
            >
              Explore Courseworks &darr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
