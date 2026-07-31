import RepoGrid from '@/components/features/projects/RepoGrid';
import HeroProject from '@/components/sections/HeroProject';

export default function page() {
  return (
    <main className="min-h-screen-nav bg-background flex flex-col pt-12">
      <HeroProject />
      <RepoGrid />
    </main>
  );
}
