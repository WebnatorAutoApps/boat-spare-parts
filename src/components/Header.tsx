import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-zinc-900 dark:text-white">
          Boat Spare Parts
        </Link>
        <nav className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">
            Home
          </Link>
          <Link href="#catalog" className="hover:text-zinc-900 dark:hover:text-white">
            Catalog
          </Link>
          <Link href="#contact" className="hover:text-zinc-900 dark:hover:text-white">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
