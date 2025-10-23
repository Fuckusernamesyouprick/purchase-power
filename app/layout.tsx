"use client";

import "./globals.css";
import { ReactNode } from "react";
import Nav from "@/components/Nav";
import ThemeProvider from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";


export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            {!isHome && (
              <div className="sticky top-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
                <div className="container py-2 flex items-center justify-between">
                  <Nav />
                  <ThemeToggle />
                </div>
              </div>
            )}
            <main className="container py-8 flex-1">{children}</main>
            <footer className="container py-10 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <p>
                  © {new Date().getFullYear()} Purchase Power — built for smart
                  shoppers.
                </p>
                <p>
                  Affiliate links may earn us a small commission at no extra
                  cost to you.
                </p>
              </div>
              <script src="/midas.js" defer></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.MIDAS_KEYWORDS=['power','value','deal','top-pick']`,
                }}
              />
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
