import { motion } from "framer-motion";
import { wordReveal, stagger, easeOutExpo } from "@/lib/motion-variants";
import { useReducedMotion } from "@/hooks/use-motion-prefs";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Extra content (e.g. trailing italic span) appended after the kinetic words */
  trailing?: ReactNode;
};

export function KineticHeading({
  text,
  className,
  delay = 0.1,
  staggerDelay = 0.06,
  as = "h1",
  trailing,
}: Props) {
  const reduced = useReducedMotion();
  const words = text.split(" ");
  const Tag = motion[as] as typeof motion.h1;

  if (reduced) {
    const Static = as as "h1";
    return (
      <Static className={className}>
        {text}
        {trailing}
      </Static>
    );
  }

  return (
    <Tag
      className={cn("relative", className)}
      initial="hidden"
      animate="show"
      variants={stagger(staggerDelay, delay)}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-baseline pb-[0.12em]"
          style={{ marginRight: i === words.length - 1 && !trailing ? 0 : "0.28em" }}
        >
          <motion.span
            variants={wordReveal}
            className="inline-block will-change-transform"
            transition={{ duration: 0.95, ease: easeOutExpo }}
          >
            {w}
          </motion.span>
        </span>
      ))}
      {trailing}
    </Tag>
  );
}
