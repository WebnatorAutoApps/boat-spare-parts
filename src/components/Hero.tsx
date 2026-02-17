export default function Hero() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl py-24 text-center sm:py-32">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-6xl">
          Quality Boat Spare Parts
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Find the right parts for your vessel. We stock a wide range of marine
          components, from engine parts to deck hardware, so you can keep your
          boat running smoothly.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4">
          <a
            href="/catalog"
            className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Browse Catalog
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-zinc-900 dark:text-white"
          >
            Contact Us &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
