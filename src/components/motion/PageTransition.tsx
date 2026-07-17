import { motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-motion-prefs";
import { pageTransition } from "@/lib/motion-variants";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const reduced = useReducedMotion();

  useEffect(() => {
    // Reset scroll to top instantly upon new page mount/transition
    window.scrollTo(0, 0);
  }, [pathname]);

  if (reduced) return <>{children}</>;

  // Enter-only transition: each route animates in fresh on commit. We deliberately
  // avoid AnimatePresence "wait" mode here — holding the exiting <Outlet/> caused the
  // previous page (e.g. home) to flash briefly before the new page mounted.
  return (
    <motion.div
      key={pathname}
      initial="hidden"
      animate="show"
      variants={pageTransition}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
