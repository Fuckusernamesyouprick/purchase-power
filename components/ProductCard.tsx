
import Link from "next/link";

export default function ProductCard({p}:{p:any}){
  return (
    <div className="card flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-lg">{p.name}</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">{p.summary}</p>
        </div>
        <div className="text-right">
          <div className="text-xs">Rating</div>
          <div className="text-xl font-bold">{p.rating.toFixed(1)}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link href={`/product/${p.slug}`} className="btn btn-ghost">Read review</Link>
        <a className="btn btn-primary a aff" data-midas="1" href={p.affiliate_url} target="_blank">Check price ↗</a>
      </div>
    </div>
  )
}
