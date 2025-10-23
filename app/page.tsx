import categories from "@/data/categories.json";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="space-y-10 text-center">
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
  <Image
  src={`/images/${c.slug}.jpg`}
  alt={c.name}
  width={200}
  height={130}
  className="rounded-lg object-cover w-full h-28 group-hover:scale-105 transition-transform duration-300"
/>

            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-200 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">{c.name}</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
