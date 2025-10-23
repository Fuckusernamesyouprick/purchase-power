"use client";

import Link from "next/link";
import categories from "@/data/categories.json";

export default function HomePage() {
  // basic colors
  const blue600 = "#2563eb";
  const blue200 = "#bfdbfe";

  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", color: "#0f172a" }}>
      {/* Hero */}
      <section style={{ padding: "64px 16px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <svg width="40" height="40" viewBox="0 0 24 24" stroke={blue600} fill="none">
            <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h1 style={{ margin: 0, fontSize: "40px", fontWeight: 800 }}>Purchase Power</h1>
        </div>
        <p style={{ margin: "8px auto 0", maxWidth: 640, fontSize: 18, color: "#475569" }}>
          Empowering smarter buying decisions — honest reviews, powerful picks.
        </p>
      </section>

      {/* Category Grid */}
      <section style={{ padding: "0 24px 80px" }}>
        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {categories.map((c: any) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              style={{
                position: "relative",
                display: "block",
                aspectRatio: "1 / 1", // perfect square
                borderRadius: 16,
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
                textDecoration: "none",
              }}
            >
              {/* Background image layer */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url(${c.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "scale(1)",
                  transition: "transform 300ms ease",
                }}
                className="pp-bg"
              />

              {/* Overlay text (always visible) */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(0,0,0,0.40)",
                  color: "#ffffff",
                  fontSize: 20,
                  fontWeight: 700,
                  transition: "background 300ms ease, color 300ms ease",
                  textAlign: "center",
                  padding: "0 8px",
                }}
                className="pp-overlay"
              >
                {c.name}
              </div>

              {/* Simple hover via a tiny inline scriptless CSS hack */}
              <style jsx>{`
                a:hover .pp-bg { transform: scale(1.05); }
                a:hover .pp-overlay { background: rgba(0,0,0,0.25); color: ${blue200}; }
              `}</style>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
