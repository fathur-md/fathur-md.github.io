import Image from 'next/image';

const FeaturedSection = () => {
  return (
    <section className="bg-background min-h-dvh w-full pt-12 pb-32">
      {/* DESIGN */}
      <div className="mx-auto flex w-full max-w-7xl flex-col p-5">
        <h2 className="mb-12 text-center font-semibold md:text-left">
          Recent Featured Project.
        </h2>
        <div className="group hover:shadow-primary/10 bg-surface relative overflow-hidden rounded-[2.5rem] transition-all duration-700">
          <div className="p-5 md:p-10">
            <h3 className="mb-4 text-center text-lg md:mb-0 md:text-2xl">
              Next.js, Tailwind, Prisma, dan Neon. <br /> Empat teknologi
              mutakhir. <br /> Satu platform SaaS yang kokoh.
            </h3>
            <div className="my-5 flex items-center justify-center">
              <a
                href="https://uas-saas.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-fg rounded-full px-8 py-4 text-sm font-bold tracking-wide shadow-xl transition-transform hover:scale-105"
              >
                Launch Live App
              </a>
            </div>
            <Image
              src="/siapsedia-mockup.svg"
              alt="Mockup SiapSedia Landing Page"
              width={1200}
              height={800}
              className="h-auto w-full object-contain"
              priority
            />
            <div className="mt-20 flex flex-col items-center gap-10 md:flex-row md:gap-16">
              <div className="flex-1 space-y-6">
                <h3 className="text-lg leading-tight md:text-3xl">
                  Implementing Responsive Design Principles for Seamless User
                  Experience Across Devices.
                </h3>
                <p className="text-base text-neutral-400 md:text-lg">
                  Ensuring every pixel and interaction on the web application
                  adapts perfectly across various screen sizes. An adaptive
                  interface not only enhances comfort but also maintains full
                  functionality without compromise, delivering an exceptional
                  user experience on both desktop and mobile devices.
                </p>
                <ul className="mt-4 space-y-3 text-neutral-400">
                  <li className="flex items-center gap-3">
                    <span className="bg- primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full text-sm">
                      ✓
                    </span>
                    Mobile-first layout approach
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg- primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full text-sm">
                      ✓
                    </span>
                    Fluid typography and spacing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="bg- primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full text-sm">
                      ✓
                    </span>
                    Optimized for touch interactions
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 justify-center md:justify-end">
                <Image
                  src="/siapsedia-mockup-mobile.svg"
                  alt="Mockup SiapSedia About Page"
                  width={350}
                  height={0}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TERMINAL */}
      <div className="mt-12 bg-black px-5 pt-12 pb-32 text-center">
        <h3 className="mb-3 text-3xl font-bold text-gray-300 md:text-5xl">
          Implementing AI Agent
        </h3>
        <p className="text-muted mx-auto max-w-4xl text-base leading-relaxed md:text-xl">
          Built with Antigravity CLI and Opencode. The first full-stack SaaS
          platfrom I&apos;ve orchestrated purely through advanced prompt
          engineering and agentic coding workflows.
        </p>
        <br />
        <Image
          src="/terminal.png"
          alt="Terminal"
          width={1400}
          height={0}
          className="rounded-xl object-contain"
        />
      </div>
      <div className="px-5 py-12 text-center">
        <span className="text-primary mb-4 text-sm font-bold tracking-widest uppercase">
          Academic Milestone
        </span>
        <h3 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">
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
            className="border-border text-foreground hover:bg-surface rounded-full border bg-transparent px-8 py-3 text-sm font-bold tracking-wide transition-colors"
          >
            Explore Courseworks &darr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
