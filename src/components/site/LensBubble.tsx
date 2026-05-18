import { cn } from "@/lib/utils";

interface LensBubbleProps {
  className?: string;
  size?: number;
}

/**
 * Apple-style "liquid glass" lens bubble. Pure CSS — uses backdrop-blur and
 * layered gradients to fake refraction + a catchlight highlight. Decorative.
 */
export function LensBubble({ className, size = 170 }: LensBubbleProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none hidden md:block absolute rounded-full",
        "animate-[float-lens_9s_ease-in-out_infinite]",
        className,
      )}
      style={{
        width: size,
        height: size,
        filter: "drop-shadow(0 30px 50px rgba(15, 23, 42, 0.25))",
      }}
    >
      {/* Glass body — blurs & saturates what's behind it */}
      <div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          backdropFilter: "blur(14px) saturate(160%) contrast(105%)",
          WebkitBackdropFilter: "blur(14px) saturate(160%) contrast(105%)",
          background:
            "radial-gradient(120% 120% at 30% 25%, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.18) 35%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.18) 100%)",
          boxShadow:
            "inset 0 1px 1px rgba(255,255,255,0.9), inset 0 -2px 6px rgba(15,23,42,0.18), inset 0 0 30px rgba(255,255,255,0.25)",
        }}
      />

      {/* Crisp glass rim */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow:
            "inset 0 0 0 1px rgba(0,71,255,0.08), 0 1px 0 rgba(255,255,255,0.6)",
        }}
      />

      {/* Top-left catchlight */}
      <div
        className="absolute rounded-full"
        style={{
          top: "10%",
          left: "14%",
          width: "44%",
          height: "28%",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.85), rgba(255,255,255,0) 70%)",
          filter: "blur(2px)",
        }}
      />

      {/* Bottom refractive arc */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: "8%",
          left: "20%",
          right: "20%",
          height: "18%",
          background:
            "radial-gradient(ellipse at center, rgba(0,71,255,0.18), rgba(0,71,255,0) 70%)",
          filter: "blur(3px)",
        }}
      />
    </div>
  );
}
