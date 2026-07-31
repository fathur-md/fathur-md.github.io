import HeroLab from '@/components/sections/HeroLab';

export default function page() {
  return (
    <main className="flex grow flex-col">
      <HeroLab />
      <section className="mx-auto w-full max-w-5xl p-5">
        <div className="pt-10">
          <h2 className="font-normal">Lab</h2>

          <p className="font-round mt-4 italic">
            Under construction, please check back.
          </p>
        </div>
      </section>
    </main>
  );
}
