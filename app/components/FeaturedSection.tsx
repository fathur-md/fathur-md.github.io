import { subjects } from '@/lib/data';
import Link from 'next/link';

const FeaturedSection = () => {
  const featuredSubjects = subjects.filter((subject) => subject.semester === 4);

  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-5xl flex-col px-5 py-24">
        <div className="mb-12 flex flex-col gap-2">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Current Focus
          </span>
          <h2 className="text-muted text-3xl font-semibold tracking-tight md:text-4xl">
            Recent Coursework
          </h2>
          <p className="text-muted max-w-2xl text-lg">
            The core subjects I am currently studying and documenting this
            semester.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredSubjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/subject/${subject.slug}`}
              className="bg-surface border-border hover:bg-surface-hover hover:border-muted/30 group flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="group-hover:text-primary mb-3 text-xl font-semibold tracking-tight transition-colors">
                {subject.title}
              </h3>
              <p className="text-muted mb-8 grow text-sm leading-relaxed">
                {subject.description}
              </p>

              <div className="text-primary mt-auto flex items-center text-sm font-medium">
                View Subject
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
