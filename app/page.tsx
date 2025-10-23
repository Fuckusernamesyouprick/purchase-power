"use client";

import Link from "next/link";
import categories from "@/data/categories.json";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* Logo + Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex items-center gap-3 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Purchase Power
          </h1>
        </div>
        <p className="text-lg max-w-2xl text-gray-600 dark:text-gray-400">
          Empowering smarter buying decisions — honest reviews, powerful picks.
        </p>
      </section>

      {/* Category Grid */}
      <section className="px-6 pb-20">
        <div
          className="grid gap-6 sm:gap-8 md:gap-10"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
        >
     {categories.map((c) => (
  <Link
    key={c.slug}
    href={`/category/${c.slug}`}
    className="group relative block aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
  >
    {/* Image fills the square */}
    <img
      src={c.image}
      alt={c.name}
      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
    />

    {/* Always-visible overlay text */}
    <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl font-semibold transition duration-300 group-hover:bg-black/25 group-hover:text-blue-200">
      {c.name}
    </div>
  </Link>
))}
        </div>
      </section>
    </main>
  );
}
