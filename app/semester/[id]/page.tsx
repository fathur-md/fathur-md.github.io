import { subjects } from '@/lib/data';
import Link from 'next/link';
import * as motion from 'motion/react-client';

export async function generateStaticParams() {
  const uniqueSemesters = Array.from(new Set(subjects.map((s) => s.semester)));
  return uniqueSemesters.map((sem) => ({
    id: sem.toString(),
  }));
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const semesterSubjects = subjects.filter((s) => s.semester.toString() === id);

  return (
    <div className="mx-auto w-full max-w-5xl px-5 py-12 md:py-20">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold md:text-5xl">Semester {id}</h1>
        <p className="text-muted mt-2 text-lg">Daftar Mata Kuliah.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {semesterSubjects.map((sub) => (
          <Link
            key={sub.id}
            href={`/semester/${id}/${sub.slug}`}
            className="block h-full"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-surface hover:bg-surface-hover border-border h-full rounded-2xl border p-6 transition-colors"
            >
              <h3 className="text-xl font-semibold">{sub.title}</h3>
              <p className="text-muted mt-3 line-clamp-3 leading-relaxed">
                {sub.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
