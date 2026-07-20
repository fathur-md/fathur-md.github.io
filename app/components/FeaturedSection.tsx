import Milestone from '@/app/components/Milestone';
import ProjectShowcase from '@/app/components/ProjectShowcase';
import TerminalShowcase from '@/app/components/TerminalShowcase';

const FeaturedSection = () => {
  const features = [
    'Mobile-first layout approach',
    'Fluid typography and spacing',
    'Optimized for touch interactions',
  ];

  return (
    <section className="border-border/40 relative min-h-dvh w-full border-t-8 py-24">
      <h2 className="mx-auto mb-12 max-w-5xl px-5 text-center font-semibold">
        Recent Featured Project
      </h2>
      <div className="">
        <ProjectShowcase features={features} />
        <TerminalShowcase />
        {/* <Milestone /> */}
      </div>
    </section>
  );
};

export default FeaturedSection;
