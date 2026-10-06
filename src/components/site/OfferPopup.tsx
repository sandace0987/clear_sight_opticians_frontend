import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { RAYBAN_META_PROMO } from "@/lib/promo-config";
import offerPoster from "@/assets/miscellaneous/ray-ban-meta-offer-poster.jpg";

// ── Session gate hook ─────────────────────────────────────────────────────────
function usePromoSession(storageKey: string, durationHours: number): [boolean, () => void] {
  const [shouldShow, setShouldShow] = React.useState(false);

  React.useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    if (!raw) { setShouldShow(true); return; }
    const lastShown = parseInt(raw, 10);
    if (isNaN(lastShown)) { setShouldShow(true); return; }
    if ((Date.now() - lastShown) / 3_600_000 >= durationHours) setShouldShow(true);
  }, [storageKey, durationHours]);

  const dismiss = React.useCallback(() => {
    localStorage.setItem(storageKey, String(Date.now()));
    setShouldShow(false);
  }, [storageKey]);

  return [shouldShow, dismiss];
}

// ── OfferPopup ────────────────────────────────────────────────────────────────
export function OfferPopup() {
  const [shouldShow, dismiss] = usePromoSession(
    RAYBAN_META_PROMO.storageKey,
    RAYBAN_META_PROMO.sessionDurationHours,
  );
  const [visible, setVisible] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!shouldShow) return;
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, [shouldShow]);

  const handleClose = React.useCallback(() => {
    setVisible(false);
    setTimeout(dismiss, 350);
  }, [dismiss]);

  const handleShop = () => {
    handleClose();
    setTimeout(() => navigate({ to: "/ray-ban-meta-offer-hyderabad" }), 350);
  };

  React.useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, handleClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="offer-overlay"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
        >
          {/* Card */}
          <motion.div
            key="offer-card"
            role="dialog"
            aria-modal="true"
            aria-label="Limited time offer: 20% off Ray-Ban Meta Gen-2 Wayfarers"
            className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-3xl overflow-hidden shadow-2xl bg-background border border-border/40 my-auto"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1,   y: 0  }}
            exit={{    opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Poster Image with Close Button */}
            <div
              className="relative bg-secondary/30 overflow-hidden cursor-pointer group"
              onClick={handleShop}
            >
              <img
                src={offerPoster}
                alt="Ray-Ban Meta Gen-2 Wayfarer 20% Off Offer Poster"
                className="w-full h-auto object-contain block max-h-[66vh] mx-auto select-none group-hover:scale-[1.01] transition-transform duration-300"
                draggable={false}
              />

              {/* Close button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                aria-label="Close offer"
                className="absolute top-3 right-3 inline-flex size-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/85 transition-colors border border-white/20 shadow-lg z-10"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Bottom Content Bar */}
            <div className="p-4 sm:p-5 bg-background border-t border-border/40">
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric block">
                    Limited Time Offer
                  </span>
                  <h2 className="text-base font-bold tracking-tight">
                    Ray-Ban Meta Gen-2 Wayfarer
                  </h2>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] text-muted-foreground line-through">
                    ₹{RAYBAN_META_PROMO.originalPrice.toLocaleString("en-IN")}
                  </p>
                  <p className="text-base font-black text-electric">
                    ₹{RAYBAN_META_PROMO.discountedPrice.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={handleShop}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-electric text-white rounded-full py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-ink transition-colors shadow-sm"
                >
                  Claim 20% Off Deal <ArrowUpRight className="size-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors rounded-full border border-border hover:border-foreground/30 shrink-0"
                >
                  Later
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
