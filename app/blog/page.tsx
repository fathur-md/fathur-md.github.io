import HeroBlog from '@/components/sections/HeroBlog';

export default function page() {
  return (
    <>
      <HeroBlog />
      <section className="mx-auto w-full max-w-5xl p-5">
        <div className="pt-10">
          <h2 className="font-normal">Blog</h2>

          <p className="font-round mt-4 italic">
            Under construction, please check back later for updates.
          </p>
        </div>
      </section>
    </>
  );
}
