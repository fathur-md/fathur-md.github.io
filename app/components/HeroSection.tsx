const HeroSection = () => {
  return (
    <section
      className="min-h-dvh bg-brand w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/aurora.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="text-white">
        <h1 className="text-7xl font-bold">Hello There</h1>
        <p className="text-2xl font-semibold">My Academic Web</p>
      </div>
    </section>
  );
};

export default HeroSection;
