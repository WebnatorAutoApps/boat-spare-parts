import type { Metadata } from "next";
import { boats } from "@/data/boats";
import BoatCard from "@/components/BoatCard";

export const metadata: Metadata = {
  title: "Boat Catalog | Boat Spare Parts",
  description:
    "Browse our catalog of 50 boats. Find center consoles, sailboats, motor yachts, and more.",
};

export default function CatalogPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Boat Catalog
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Browse our selection of {boats.length} boats
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {boats.map((boat) => (
            <BoatCard key={boat.id} boat={boat} />
          ))}
        </div>
      </section>
    </main>
  );
}
