// textTimeline.ts — Apple-style marketing copy keyed to scroll progress [0-1]

import type { TextCue } from "./types";

export const SMART_GLASSES_TEXT_TIMELINE: TextCue[] = [
  {
    eyebrow: "Ray-Ban Meta",
    headline: "Iconic.\nReengineered.",
    inStart: 0.0,
    inEnd: 0.06,
    outStart: 0.14,
    outEnd: 0.20,
  },
  {
    headline: "Precision\nin every millimeter.",
    inStart: 0.20,
    inEnd: 0.26,
    outStart: 0.34,
    outEnd: 0.40,
  },
  {
    headline: "Technology\nthat disappears.",
    inStart: 0.40,
    inEnd: 0.46,
    outStart: 0.54,
    outEnd: 0.60,
  },
  {
    headline: "Seamlessly\nintegrated.",
    inStart: 0.60,
    inEnd: 0.66,
    outStart: 0.74,
    outEnd: 0.80,
  },
  {
    headline: "Uncompromised\nStyle.",
    inStart: 0.80,
    inEnd: 0.86,
    outStart: 0.92,
    outEnd: 0.97,
  },
  {
    eyebrow: "Available Now",
    headline: "The future\nis in sight.",
    inStart: 0.97,
    inEnd: 1.0,
    outStart: 9999, // never fades out — holds at end
    outEnd: 9999,
    showCTA: true,
  },
];
