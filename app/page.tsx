import HeroSection from './components/HeroSection';
import FeaturedSection from './components/FeaturedSection';

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <HeroSection />
      <FeaturedSection />
    </div>
  );
}
