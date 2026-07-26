import Image from 'next/image';

export default function HeroBlog() {
  return (
    <section className="relative flex min-h-[40dvh] flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/wallpp.jpeg"
          alt="Hero Blog Image"
          width={1920}
          height={1080}
          loading="eager"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-5 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      <div className="relative z-10 mx-auto mb-4 flex w-full max-w-5xl flex-wrap items-center justify-between gap-8 p-5 md:gap-4">
        <div>
          <h1 className="text-4xl leading-none font-medium text-white">
            Thoughts & Documentations.
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-tight text-white md:text-lg">
            Notes and documentations from my academic journey.
          </p>
        </div>
        <div className="flex grow flex-col gap-4 md:items-end">
          <div className="flex w-full items-center gap-4 md:justify-end">
            <Image
              src="https://raw.githubusercontent.com/fathur-md/ppw/main/assets/img/gambar3.png"
              alt="Avatar"
              width={100}
              height={100}
              className="pointer-events-none h-12 w-full max-w-12 rounded-full object-cover object-top"
            />
            <div>
              <p className="text-base text-white">Fathurrahman Muhammad</p>
              <span className="text-sm text-white">
                Placeholder • 26 Jul 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
