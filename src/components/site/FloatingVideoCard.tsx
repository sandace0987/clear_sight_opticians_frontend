import { useState } from "react";
import { Play, X } from "lucide-react";
import eyeTest from "@/assets/eye-test.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export function FloatingVideoCard() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [expanded, setExpanded] = useState(false);

  if (dismissed) return null;

  return (
    <>
      <div
        className="fixed bottom-[88px] right-6 z-40 animate-[fade-up_0.9s_cubic-bezier(0.16,1,0.3,1)_0.6s_both]"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        {/* Collapsed pill */}
        {!expanded && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            onFocus={() => setExpanded(true)}
            aria-label="See how it works video"
            className="group relative size-14 rounded-full bg-card overflow-hidden shadow-2xl border border-border/60 grid place-items-center cursor-pointer"
          >
            <img
              src={eyeTest}
              alt="Eye testing equipment"
              width={120}
              height={120}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute inset-0 bg-foreground/25" />
            <span className="relative size-8 bg-background/95 rounded-full grid place-items-center shadow-md transition-transform group-hover:scale-110">
              <Play className="size-3.5 text-foreground fill-foreground ml-0.5" />
            </span>
          </button>
        )}

        {/* Expanded card */}
        {expanded && (
          <div className="bg-card text-card-foreground p-4 rounded-2xl shadow-2xl flex gap-4 items-center max-w-xs border border-border/60 animate-[fade-up_0.4s_cubic-bezier(0.16,1,0.3,1)_both]">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Play how it works video"
              className="size-20 rounded-xl bg-secondary overflow-hidden relative shrink-0 group cursor-pointer"
            >
              <img
                src={eyeTest}
                alt="Eye testing equipment"
                width={200}
                height={200}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-9 bg-background/95 rounded-full grid place-items-center shadow-md transition-transform group-hover:scale-110">
                  <Play className="size-4 text-foreground fill-foreground ml-0.5" />
                </div>
              </div>
            </button>
            <div className="min-w-0">
              <h4 className="font-bold text-sm mb-1 text-foreground">See How It Works</h4>
              <p className="text-[11px] text-muted-foreground leading-snug mb-2">
                Advanced digital eye testing across all branches.
              </p>
              <div className="flex -space-x-2">
                <div className="size-6 rounded-full border-2 border-card bg-electric" />
                <div className="size-6 rounded-full border-2 border-card bg-secondary" />
                <div className="size-6 rounded-full border-2 border-card bg-foreground" />
              </div>
            </div>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss"
              className="absolute -top-2 -right-2 size-6 rounded-full bg-foreground text-background grid place-items-center shadow-md hover:bg-electric hover:text-white transition-colors"
            >
              <X className="size-3" />
            </button>
          </div>
        )}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden border-0 bg-ink text-white">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="text-white text-2xl font-bold tracking-tight">
              See How It Works
            </DialogTitle>
            <DialogDescription className="text-white/60">
              A short look inside our digital eye testing experience.
            </DialogDescription>
          </DialogHeader>
          <div className="px-6 pb-6">
            <div className="aspect-video w-full rounded-xl bg-black border border-white/10 overflow-hidden">
              {open && (
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/N_hAs3p1F5g?autoplay=1&rel=0"
                  title="See How It Works Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
