import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

const THEMES = [
  // ── Tier 1 ─────────────────────────────────────────────
  { id: "classic-light",    label: "Classic Light",               bg: "#ffffff",  accent: "#2563EB" },
  { id: "deep-midnight",    label: "Deep Midnight",               bg: "#0f0f13",  accent: "#60A5FA" },
  { id: "charcoal-ember",   label: "Charcoal & Ember",            bg: "#1a1a1a",  accent: "#e85d3a" },

  // ── New palettes (from uploaded screenshots) ────────────
  { id: "butter-green",     label: "Butter / Green",              bg: "#ffefb3",  accent: "#013e37" },
  { id: "aureolin-bistre",  label: "Aureolin / Bistre",           bg: "#261606",  accent: "#fbe311" },
  { id: "cream-cherry",     label: "Cream Vanilla / Cherry Cola", bg: "#efe6dd",  accent: "#9a0002" },
  { id: "violet-imperial",  label: "Violet / Imperial Red",       bg: "#321847",  accent: "#f15153" },
  { id: "lime-red",         label: "Lime / Vibrant Red",          bg: "#d3f00a",  accent: "#f9100c" },

  // ── Existing palettes ───────────────────────────────────
  { id: "noir-gold",        label: "Noir & Gold",                 bg: "#0d0d0d",  accent: "#c9a84c" },
  { id: "emerald-prestige", label: "Emerald Prestige",            bg: "#064e3b",  accent: "#c9a84c" },
  { id: "paper-ink",        label: "Paper & Ink",                 bg: "#f5f3ee",  accent: "#2d2d2d" },
  { id: "whiskey-walnut",   label: "Whiskey & Walnut",            bg: "#F6F1EA",  accent: "#8A5A44" },
  { id: "sapphire",         label: "Sapphire",                    bg: "#F7FAFC",  accent: "#2563EB" },
  { id: "forest-luxe",      label: "Forest Luxe",                 bg: "#071A14",  accent: "#0F766E" },
  { id: "neo-glass",        label: "Neo Glass",                   bg: "#050816",  accent: "#3B82F6" },

  // ── Legacy — commented out pending final removal ──────────────────────────
  // { id: "titanium",         label: "Titanium",                    bg: "#F3F4F6",  accent: "#7C8A99" },
  // { id: "obsidian",         label: "Obsidian",                    bg: "#09090B",  accent: "#C0C0C0" },
  // { id: "midnight-indigo",  label: "Midnight Indigo",             bg: "#0a0a1a",  accent: "#4f46e5" },
  // { id: "amethyst",         label: "Amethyst",                    bg: "#09090B",  accent: "#7C3AED" },
  // { id: "champagne",        label: "Champagne",                   bg: "#FCFAF7",  accent: "#B9975B" },
];

const DARK_THEMES = [
  "deep-midnight", "charcoal-ember", "noir-gold", "emerald-prestige",
  "aureolin-bistre", "violet-imperial",
  "forest-luxe", "neo-glass",
  // legacy (commented out): "midnight-indigo", "obsidian", "amethyst"
];

const ZOOM_LEVELS = [
  { id: "compact", label: "Compact", size: "14px" },
  { id: "classic", label: "Classic", size: "16px" },
  { id: "relaxed", label: "Relaxed", size: "18px" },
] as const;

type ZoomId = (typeof ZOOM_LEVELS)[number]["id"];

export function ThemeSwatches() {
  const [mounted, setMounted] = useState(false);
  const [activeTheme, setActiveTheme] = useState("classic-light");
  const [activeZoom, setActiveZoom] = useState<ZoomId>("classic");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Theme ──
    const saved = localStorage.getItem("theme") || "classic-light";
    const resolved =
      saved === "dark" ? "deep-midnight" : saved === "light" ? "classic-light" : saved;
    applyTheme(resolved, false);

    // ── Zoom ──
    const savedZoom = (localStorage.getItem("zoom") as ZoomId | null) || "classic";
    applyZoom(savedZoom, false);

    setMounted(true);

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const applyTheme = (theme: string, close = true) => {
    setActiveTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
    if (DARK_THEMES.includes(theme)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    if (close) setIsOpen(false);
  };

  const applyZoom = (zoom: ZoomId, save = true) => {
    setActiveZoom(zoom);
    const level = ZOOM_LEVELS.find((z) => z.id === zoom) ?? ZOOM_LEVELS[1];
    document.documentElement.style.fontSize = level.size;
    if (save) localStorage.setItem("zoom", zoom);
  };

  if (!mounted) return <div className="w-10 h-10" />;

  const currentThemeObj = THEMES.find((t) => t.id === activeTheme) || THEMES[0];

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-background/50 backdrop-blur-md px-2 py-1.5 rounded-full border border-border/40 shadow-sm hover:bg-accent transition-colors"
        aria-label="Select theme"
      >
        <div className="relative block overflow-hidden size-6 rounded-full border border-foreground/20 shadow-inner [transform:translateZ(0)] isolate shrink-0">
          <div className="absolute inset-0" style={{ backgroundColor: currentThemeObj.bg }} />
          <div
            className="absolute inset-0"
            style={{ backgroundColor: currentThemeObj.accent, clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
          />
        </div>
        <ChevronDown className="size-4 text-muted-foreground mr-1" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-2 w-72 max-h-[75vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-2xl p-2 z-50 thin-scrollbar"
          >
            {/* ── Zoom control ── */}
            <div className="px-2 pt-1 pb-2 mb-1 border-b border-border/40">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2 px-1">
                Zoom
              </p>
              <div className="relative flex bg-muted/50 rounded-lg p-0.5">
                {ZOOM_LEVELS.map((z) => (
                  <button
                    key={z.id}
                    onClick={() => applyZoom(z.id)}
                    className={cn(
                      "relative flex-1 py-1.5 text-xs font-semibold rounded-md transition-colors z-10",
                      activeZoom === z.id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {activeZoom === z.id && (
                      <motion.span
                        layoutId="zoom-pill"
                        className="absolute inset-0 bg-background rounded-md shadow-sm"
                        style={{ zIndex: -1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                    {z.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ── Theme list ── */}
            <div className="flex flex-col gap-1 pt-1">
              {THEMES.map((theme) => {
                const isActive = activeTheme === theme.id;
                return (
                  <button
                    key={theme.id}
                    onClick={() => applyTheme(theme.id)}
                    className={cn(
                      "flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium transition-colors text-left",
                      isActive
                        ? "bg-accent/50 text-foreground"
                        : "text-muted-foreground hover:bg-accent/30 hover:text-foreground"
                    )}
                  >
                    <div className="relative block overflow-hidden size-5 rounded-full border border-foreground/20 shadow-inner [transform:translateZ(0)] isolate shrink-0">
                      <div className="absolute inset-0" style={{ backgroundColor: theme.bg }} />
                      <div
                        className="absolute inset-0"
                        style={{ backgroundColor: theme.accent, clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
                      />
                    </div>
                    <span className="flex-1 truncate">{theme.label}</span>
                    {isActive && <Check className="size-4 text-electric shrink-0" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

