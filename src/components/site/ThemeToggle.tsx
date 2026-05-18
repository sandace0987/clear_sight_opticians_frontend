import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const COLORS = { light: "#ffffff", dark: "#0b0b12" } as const;

function applyThemeColor(dark: boolean) {
  const content = dark ? COLORS.dark : COLORS.light;
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((el) => el.parentNode?.removeChild(el));
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = content;
  document.head.appendChild(meta);
}

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const dark = localStorage.getItem("theme") === "dark";
    document.documentElement.classList.toggle("dark", dark);
    applyThemeColor(dark);
    setIsDark(dark);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    applyThemeColor(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      suppressHydrationWarning
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/80 hover:text-foreground hover:bg-accent transition-colors"
    >
      {mounted && isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
