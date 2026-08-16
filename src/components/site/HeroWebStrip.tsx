import { motion } from "framer-motion";
import heroWebStitched from "@/assets/homepage/hero-portrait-light.webp";
import { useReducedMotion } from "@/hooks/use-motion-prefs";
import { cn } from "@/lib/utils";

/**
 * Hero image background with subtle Ken Burns zoom.
 */
export function HeroWebStrip({ className }: { className?: string }) {
  const reducedMotion = useReducedMotion();

  return (
    <div className={cn("absolute inset-0 overflow-hidden bg-white", className)}>
      <motion.img
        src={heroWebStitched}
        alt="Clear Sight Opticians Eyewear Collection"
        width={2544}
        height={1511}
        fetchPriority="high"
        decoding="sync"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover object-center select-none will-change-transform"
        animate={reducedMotion ? { scale: 1 } : { scale: [1, 1.08, 1] }}
        transition={
          reducedMotion
            ? { duration: 0 }
            : { duration: 16, repeat: Infinity, ease: "easeInOut" }
        }
      />
    </div>
  );
}

export const HERO_WEB_PRELOAD = heroWebStitched;
