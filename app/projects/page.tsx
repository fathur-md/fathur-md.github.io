import RepositoryGrid from '@/components/RepositoryGrid';
import HeroProject from '@/components/sections/HeroProject';

export default function page() {
  return (
    <main className="min-h-screen-nav bg-surface flex flex-col pt-12">
      <HeroProject />
      <RepositoryGrid />
    </main>
  );
}
