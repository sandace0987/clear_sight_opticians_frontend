import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp } from "@/lib/motion-variants";
import { useReducedMotion } from "@/hooks/use-motion-prefs";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  amount?: number;
  as?: "div" | "section" | "article" | "header" | "li";
};

export function Reveal({ children, delay = 0, amount = 0.2, as = "div", ...rest }: Props) {
  const reduced = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  if (reduced) {
    return <MotionTag {...rest}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={fadeUp}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
