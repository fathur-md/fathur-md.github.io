import { subjects } from '@/lib/data';
import Link from 'next/link';

export async function generateStaticParams() {
  return subjects.map((sub) => ({
    id: sub.semester.toString(),
    subject: sub.slug,
  }));
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string; subject: string }>;
}) {
  const { id, subject } = await params;

  const detail = subjects.find(
    (s) => s.slug === subject && s.semester.toString() === id,
  );

  if (!detail) {
    return <h1>Mata Kuliah Tidak Ditemukan</h1>;
  }

  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-12 md:py-20">
      <div>
        <small>Semester {id}</small>
        <h1>{detail.title}</h1>
        <p>{detail.description}</p>
      </div>
    </div>
  );
}
