import Image from 'next/image';

const ProjectShowcase = ({ features }: { features: string[] }) => {
  return (
    <div className="px-5">
      {/* MOCKUP DESKTOP */}
      <div className="bg-surface relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl p-10">
        <h3 className="mb-4 text-center text-lg font-medium md:mb-0 md:text-2xl">
          Next.js, Tailwind, Prisma, and Neon. <br /> Four cutting-edge
          technologies. <br /> One robust SaaS platform.
        </h3>
        <div className="my-5 flex items-center justify-center">
          <a
            href="https://uas-saas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal-600/70 px-8 py-3 text-sm font-semibold tracking-wide text-white shadow-xl backdrop-blur-2xl"
          >
            Launch Live App
          </a>
        </div>

        <Image
          src="/siapsedia-mockup.svg"
          alt="Mockup SiapSedia Landing Page"
          width={1200}
          height={800}
          className="h-auto w-full"
          priority
        />
      </div>
      {/* MOCKUP MOBILE */}
      <div className="mx-auto mt-24 flex max-w-7xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <div className="flex-1 space-y-6">
          <h3 className="text-lg leading-tight md:text-3xl">
            Implementing Responsive Design Principles for Seamless User
            Experience Across Devices.
          </h3>
          <p className="text-base text-neutral-400 md:text-lg">
            Ensuring every pixel and interaction on the web application adapts
            perfectly across various screen sizes. An adaptive interface not
            only enhances comfort but also maintains full functionality without
            compromise, delivering an exceptional user experience on both
            desktop and mobile devices.
          </p>
          <ul className="mt-4 space-y-3 text-neutral-400">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="bg-primary/20 text-primary flex h-6 w-6 items-center justify-center rounded-full text-sm">
                  ✓
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex">
          <Image
            src="/siapsedia-mockup-mobile.svg"
            alt="Mockup SiapSedia About Page"
            width={400}
            height={0}
            className="h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
