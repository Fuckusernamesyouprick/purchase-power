
import products from "@/data/products.json";
import Link from "next/link";

export async function generateStaticParams(){
  return products.map((p:any)=>({ slug: p.slug }));
}

export default function ProductPage({ params }:{ params:{ slug: string }}){
  const p = products.find((x:any)=>x.slug === params.slug);
  if(!p) return <div className="prose"><h1>Product not found</h1></div>;

  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="!mb-2">{p.name} — Honest Review</h1>
      <p className="text-slate-600 dark:text-slate-400 !mt-0">Rating: <b>{p.rating.toFixed(1)}/5</b> • Price: ~£{p.price}</p>
      <p><i>Summary:</i> {p.summary} (Yes, I wrote this. Yes, I drank coffee first.)</p>

      <h2>Why you might love it</h2>
      <ul>
        {p.pros.map((it:string, i:number)=><li key={i}>{it}</li>)}
      </ul>

      <h2>Where it trips up a bit</h2>
      <ul>
        {p.cons.map((it:string, i:number)=><li key={i}>{it}</li>)}
      </ul>

      <p>
        If it fits your vibe and your budget, it’s a strong pick. If not, I won’t cry about it—there are plenty of fish in the checkout.
      </p>

      <p className="not-prose">
        <a className="btn btn-primary a aff" data-midas="1" href={p.affiliate_url} target="_blank">
          See today’s price ↗
        </a>
      </p>

      <hr/>

      <p className="text-sm text-slate-500 dark:text-slate-400">
        We use open-source info and hands-on testing where possible. If we missed something, tell us and we’ll fix it—promise.
      </p>

      <p>
        <Link href={`/category/${p.category}`} className="underline">Back to category</Link>
      </p>
    </article>
  )
}
