
import products from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Page(){
  const featured = products.slice(0,4);
  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="flex items-center justify-center gap-3 text-4xl sm:text-5xl font-bold">
  <img src="/logo.svg" alt="Purchase Power" className="h-10 w-10 rounded-xl" />
  <span>Purchase Power</span>
</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Honest reviews, slightly cheeky tone, and zero fluff. We test things, we say what’s good,
          and we admit when something’s a bit mid. Power up your next purchase.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/category/tech" className="btn btn-primary">Start with Tech</Link>
          <Link href="/category/home-kitchen" className="btn btn-ghost">Explore Categories</Link>
        </div>
      </section>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map(p => <ProductCard key={p.slug} p={p} />)}
      </section>
    </div>
  )
}
