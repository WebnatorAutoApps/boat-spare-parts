"use client";

import { useState } from "react";
import type { Boat } from "@/data/boats";

export default function BoatCard({ boat }: { boat: Boat }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      <div className="relative aspect-[3/2] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {imgError ? (
          <div className="flex h-full items-center justify-center text-zinc-400 dark:text-zinc-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-12 w-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
          </div>
        ) : (
          /* eslint-disable @next/next/no-img-element */
          <img
            src={boat.imageUrl}
            alt={boat.name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          {boat.name}
        </h3>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {boat.type}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {boat.length} ft
          </span>
          <span className="text-lg font-bold text-zinc-900 dark:text-white">
            ${boat.price.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}
