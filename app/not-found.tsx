import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <h1 className="text-[4rem] md:text-[6rem] font-bold tracking-tighter leading-none text-primary mb-2">
        404
      </h1>

      <p className="text-xl md:text-2xl font-medium tracking-tight text-muted mb-10">
        Halaman yang Anda cari tidak ditemukan.
      </p>

      <Link
        href="/"
        className="text-primary font-semibold hover:text-primary-hover transition-colors text-[17px] flex items-center gap-1.5 group"
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
