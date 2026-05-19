import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed bottom-6 right-6 z-50 grid place-items-center size-12 rounded-full",
        "bg-ink text-white shadow-lg ring-1 ring-white/10",
        "hover:bg-electric transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <svg
        className="absolute inset-0 -rotate-90 size-12 pointer-events-none"
        viewBox="0 0 48 48"
        aria-hidden
      >
        <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" />
        <motion.circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="hsl(var(--electric, 220 100% 50%))"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength={1}
          style={{ pathLength: progress, stroke: "currentColor" }}
          className="text-electric"
        />
      </svg>
      <ArrowUp className="size-5 relative" strokeWidth={2.5} />
    </button>
  );
}
