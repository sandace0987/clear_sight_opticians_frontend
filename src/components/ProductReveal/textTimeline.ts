// textTimeline.ts — Apple-style marketing copy keyed to scroll progress [0-1]

import type { TextCue } from "./types";

export const SMART_GLASSES_TEXT_TIMELINE: TextCue[] = [
  {
    eyebrow: "Meta Smart Glasses",
    headline: "Visionary Tech.\nSeamless Design.",
    inStart: 0.0,
    inEnd: 0.06,
    outStart: 0.14,
    outEnd: 0.20,
    keyframe: 20,
  },
  {
    headline: "Intelligence\nin plain sight.",
    inStart: 0.20,
    inEnd: 0.26,
    outStart: 0.34,
    outEnd: 0.40,
    keyframe: 125,
  },
  {
    headline: "Captured moments.\nHands-free.",
    inStart: 0.40,
    inEnd: 0.46,
    outStart: 0.54,
    outEnd: 0.60,
    keyframe: 194,
  },
  {
    headline: "Audio that surrounds,\nyet stays personal.",
    inStart: 0.60,
    inEnd: 0.66,
    outStart: 0.74,
    outEnd: 0.80,
    keyframe: 228,
  },
  {
    headline: "Uncompromised\nengineering.",
    inStart: 0.80,
    inEnd: 0.86,
    outStart: 0.92,
    outEnd: 0.97,
    keyframe: 308,
  },
  {
    eyebrow: "Smart Eyewear",
    headline: "The future\nis in sight.",
    inStart: 0.97,
    inEnd: 1.0,
    outStart: 9999, // never fades out — holds at end
    outEnd: 9999,
    showCTA: true,
    keyframe: 369,
  },
];
