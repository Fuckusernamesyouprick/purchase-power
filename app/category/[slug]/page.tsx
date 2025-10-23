
import allProducts from "@/data/products.json";
import categories from "@/data/categories.json";
import ProductCard from "@/components/ProductCard";

export async function generateStaticParams(){
  return categories.map((c:any)=>({ slug: c.slug }));
}

export default function CategoryPage({ params }:{ params: { slug: string }}){
  const cat = categories.find((c:any)=>c.slug === params.slug);
  if(!cat) return <div className="prose"><h1>Category not found</h1></div>;
  const products = allProducts.filter((p:any)=>p.category === cat.slug);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{cat.name}</h1>
      {products.length === 0 && <p className="text-slate-600 dark:text-slate-400">We’re writing reviews as fast as our fingers allow—check back soon.</p>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p:any)=> <ProductCard key={p.slug} p={p} />)}
      </div>
    </div>
  )
}
