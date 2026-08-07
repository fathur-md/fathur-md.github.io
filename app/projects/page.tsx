import RepoGrid from '@/components/features/projects/RepoGrid';
import HeroProject from '@/components/sections/HeroProject';

export default function page() {
  return (
    <main className="min-h-screen-nav flex flex-col">
      <HeroProject />
      <RepoGrid />
    </main>
  );
}
