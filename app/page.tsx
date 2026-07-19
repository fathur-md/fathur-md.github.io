export default function Home() {
  return (
    <div className="flex min-h-[80dvh] flex-col items-center px-6 py-20 text-center">
      <h1 className="font-borel mt-10 text-6xl leading-6">Hello there!</h1>
      <p className="text-muted font-round max-w-xl">
        decription placeholder Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Corporis nostrum, harum voluptatem quos ullam dolores
        fugit sequi consequuntur animi perferendis eum repellendus esse. Aperiam
        ut reiciendis ipsa pariatur maxime. Soluta.
      </p>
      <div className="mt-8">
        <a
          href="/palette"
          className="bg-primary text-primary-fg hover:bg-primary-hover inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-colors"
        >
          Palette
        </a>
      </div>
    </div>
  );
}
