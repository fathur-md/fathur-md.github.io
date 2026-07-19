import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-primary mb-2 text-[4rem] leading-none font-bold tracking-tighter md:text-[6rem]">
        404
      </h1>

      <p className="text-muted mb-10 text-xl font-medium tracking-tight md:text-2xl">
        Halaman yang Anda cari tidak ditemukan.
      </p>

      <Link
        href="/"
        className="text-primary hover:text-primary-hover group flex items-center gap-1.5 text-[17px] font-semibold transition-colors"
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
