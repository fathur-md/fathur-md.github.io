import { siteConfig } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl grow flex-col px-5 py-10">
      <h1 className="text-primary font-round leading-normal md:text-5xl">
        Academic Documentation
      </h1>
      <p className="text-muted text-xl">
        Archive of university projects and coding experiments.
      </p>
      <Link
        href="/projects"
        className="bg-primary hover:bg-primary/80 mt-5 inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors"
      >
        Explore
      </Link>
      <div className="mt-12 grow space-y-4">
        <div className="relative flex min-h-40 flex-col items-start justify-center overflow-hidden rounded-2xl bg-gray-100 p-6 shadow-sm">
          <h3 className="mb-4 w-full text-left text-sm font-bold tracking-widest text-gray-500 uppercase">
            Github Activity
          </h3>
          <Image
            src="https://ghchart.rshah.org/0ea5e9/fathur-md"
            alt="Github Activity"
            width={800}
            height={120}
            loading="eager"
            unoptimized
            className="h-full w-full object-contain opacity-80 mix-blend-multiply"
          />
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {siteConfig.heroStats.map((box, index) => (
            <div
              key={index}
              className={`flex flex-col rounded-2xl bg-gray-100 p-6 shadow-sm ${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <span className="text-primary text-2xl font-bold">
                {box.value}
              </span>
              <span className="mt-2 text-lg font-medium text-gray-500">
                {box.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
