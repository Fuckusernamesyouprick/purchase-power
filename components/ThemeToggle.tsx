
"use client";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button className="btn btn-ghost" onClick={()=>setTheme(next)} aria-label="Toggle theme">
      {theme === "dark" ? "🌙" : "☀️"} <span className="hidden sm:inline">Theme</span>
    </button>
  );
}
