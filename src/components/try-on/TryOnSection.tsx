import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

type Props = { id?: string };

export function TryOnSection({ id }: Props) {
  return (
    <section
      id={id}
      className="scroll-mt-24 px-6 lg:px-10 py-32 lg:py-48 bg-secondary/40 flex items-center justify-center text-center"
    >
      <Reveal className="max-w-2xl mx-auto flex flex-col items-center">
        <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase inline-flex items-center gap-2 mb-6">
          <Sparkles className="size-4" /> Coming Soon
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">
          Building something <br className="hidden sm:block" />
          <span className="font-serif italic font-medium text-electric">awesome.</span>
        </h2>
        <p className="mt-6 text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed mx-auto">
          We're currently re-engineering our virtual try-on experience to bring you a next-generation augmented reality fit. Stay tuned.
        </p>
      </Reveal>
    </section>
  );
}
