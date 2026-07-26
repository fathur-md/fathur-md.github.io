'use client';

import Image from 'next/image';
import { useState } from 'react';

const SETUP_MEDIA = [
  {
    type: 'image',
    src: '/setup/banner-now.png',
    alt: 'Banner Current',
  },
  {
    type: 'image',
    src: '/setup/banner-techie.png',
    alt: 'Banner 2024-2025',
  },
  {
    type: 'image',
    src: '/setup/banner-2025.png',
    alt: 'Banner 2022-2024',
  },
  {
    type: 'image',
    src: '/setup/banner-2023-2024.png',
    alt: 'Banner 2022-2023',
  },
  {
    type: 'image',
    src: '/setup/banner-2020-2022.png',
    alt: 'Banner 2021-2022',
  },
];

export default function SetupBanner() {
  const [currentInd, setCurrentInd] = useState(0);

  return (
    <div className="group relative flex min-h-24 w-full flex-col overflow-hidden rounded-2xl shadow-sm">
      <div className="relative aspect-square w-full md:aspect-16/8">
        {SETUP_MEDIA.map((media, index) => (
          <Image
            key={index}
            src={media.src}
            alt={media.alt}
            width={1920}
            height={1080}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ease-in-out ${currentInd === index ? 'z-10 opacity-100' : 'z-0 opacity-0'}`}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute inset-x-4 bottom-4 z-30 md:inset-x-6 md:bottom-6 md:max-w-md">
        <div className="flex flex-col gap-2 rounded-xl border border-white/20 bg-white/10 p-4 shadow-sm backdrop-blur-md">
          {/* Badge & Title */}
          <div className="flex flex-col items-start justify-between">
            <h3 className="text-lg font-medium tracking-wide text-white">
              Setup Evolution.
            </h3>
            <p className="mt-1 text-sm font-light text-gray-300">
              Through the years.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2">
        {SETUP_MEDIA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentInd(index)}
            className={`h-2 rounded-full transition-all duration-300 ${currentInd === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
