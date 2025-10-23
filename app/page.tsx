import categories from "@/data/categories.json";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-10 text-center">
      {/* Logo Section */}
      <section className="space-y-4">
        <h1
          className="flex items-center justify-center gap-3 text-5xl sm:text-6xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 font-sans"
          style={{ fontFamily: `'Poppins', 'Inter', 'Segoe UI', sans-serif` }}
        >
          <img
            src="/logo.svg"
            alt="Purchase Power"
            className="h-14 w-14 rounded-2xl"
          />
          <span className="font-semibold">Purchase Power</span>
        </h1>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Pick a category below and power up your next purchase. 
          Each one’s got honest reviews and a bit of cheek.
        </p>
      </section>

      {/* Category Grid */}
      <section
        className="grid gap-4 px-2"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
      >
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="card group relative flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-200"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src={`/images/${c.slug}.jpg`}
                alt={c.name}
                width={800}
                height={600}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg sm:text-xl font-semibold drop-shadow-lg">
                {c.name}
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
