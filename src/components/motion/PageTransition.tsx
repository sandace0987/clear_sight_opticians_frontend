import { motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { type ReactNode, useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "@/hooks/use-motion-prefs";
import { pageTransition } from "@/lib/motion-variants";

// Cache to store scroll positions of visited pages
const scrollCache = new Map<string, number>();

export function PageTransition({ children }: { children: ReactNode }) {
  const routePathname = useRouterState({
    select: (s) => s.matches.at(-1)?.pathname ?? s.location.pathname,
  });
  const reduced = useReducedMotion();
  const prevPathnameRef = useRef(routePathname);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const prevPath = prevPathnameRef.current;
    if (prevPath) {
      scrollCache.set(prevPath, window.scrollY);
    }

    const savedScroll = scrollCache.get(routePathname) ?? 0;

    // Use the committed route match rather than the pending URL. Otherwise the
    // old page can be scrolled to the next page's top while it is still visible.
    window.scrollTo({
      top: savedScroll,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });

    prevPathnameRef.current = routePathname;
  }, [routePathname]);

  const isFirstMountRef = useRef(true);

  useLayoutEffect(() => {
    isFirstMountRef.current = false;
  }, [routePathname]);

  if (reduced) return <>{children}</>;

  return (
    <motion.div
      key={routePathname}
      initial={isFirstMountRef.current ? false : "hidden"}
      animate="show"
      variants={pageTransition}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </motion.div>
  );
}
