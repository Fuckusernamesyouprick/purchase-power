
import Link from "next/link";
import categories from "@/data/categories.json";

export default function Nav() {
  return (
    <nav className="border-b border-slate-200 dark:border-slate-800">
      <div className="container py-3 flex flex-wrap gap-3 items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <img src="/logo.svg" alt="Purchase Power" className="h-8 w-8 rounded-xl" />
            <span>Purchase Power</span>
          </Link>
        </div>
        <div className="flex items-center gap-3 text-sm overflow-x-auto">
          {categories.map(c => (
            <Link key={c.slug} href={`/category/${c.slug}`} className="px-3 py-1 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
