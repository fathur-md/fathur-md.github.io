import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-accent mb-4 text-[4rem] leading-none font-bold tracking-tighter md:text-[6rem]">
        404
      </h1>

      <p className="text-foreground/70 mb-10 text-lg font-medium tracking-tight md:text-xl">
        Halaman yang Anda cari tidak ditemukan.
      </p>

      <Link
        href="/"
        className="bg-accent shadow-glass-inner inline-flex items-center gap-2 rounded-full px-8 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
      >
        Kembali ke beranda
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-0.5"
        >
          &rarr;
        </span>
      </Link>
    </div>
  );
}
