import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { RAYBAN_META_PROMO, OAKLEY_META_PROMO } from "@/lib/promo-config";
import rayBanPoster from "@/assets/miscellaneous/ray-ban-meta-offer-poster.jpg";
import oakleyPoster from "@/assets/miscellaneous/oakley-meta-offer-poster.png";

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

const OFFERS = [
  {
    id: "rayban-meta",
    badge: "20% OFF",
    brand: "Ray-Ban",
    tagline: "Limited Time Offer · 20% Off",
    title: "Ray-Ban Meta Gen-2 Wayfarer",
    originalPrice: `₹${RAYBAN_META_PROMO.originalPrice.toLocaleString("en-IN")}`,
    discountedPrice: `₹${RAYBAN_META_PROMO.discountedPrice.toLocaleString("en-IN")}`,
    ctaText: "Claim 20% Off Deal",
    route: "/ray-ban-meta-offer-hyderabad",
    poster: rayBanPoster,
    alt: "Ray-Ban Meta Gen-2 Wayfarer 20% Off Offer Poster",
  },
  {
    id: "oakley-meta",
    badge: "UP TO 20% OFF",
    brand: "Oakley",
    tagline: "Limited Time Offer · Up to 20% Off",
    title: "Oakley Meta HSTN & Vanguard",
    originalPrice: `₹${OAKLEY_META_PROMO.hstn.originalPrice.toLocaleString("en-IN")}`,
    discountedPrice: `From ₹${OAKLEY_META_PROMO.hstn.discountedPrice.toLocaleString("en-IN")}`,
    ctaText: "Claim Oakley Meta Deal",
    route: "/oakley-meta-offer-hyderabad",
    poster: oakleyPoster,
    alt: "Oakley Meta AI Smart Glasses Sale Poster",
  },
];

// ── OfferPopup ────────────────────────────────────────────────────────────────
export function OfferPopup() {
  const [shouldShow, dismiss] = usePromoSession(
    "cso_smart_glasses_promo_last_shown",
    24,
  );
  const [visible, setVisible] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!shouldShow) return;
    const t = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(t);
  }, [shouldShow]);

  // Auto rotate carousel every 3s
  React.useEffect(() => {
    if (!visible || isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [visible, isPaused]);

  const handleClose = React.useCallback(() => {
    setVisible(false);
    setTimeout(dismiss, 350);
  }, [dismiss]);

  const activeOffer = OFFERS[currentIndex];

  const handleShop = () => {
    handleClose();
    setTimeout(() => navigate({ to: activeOffer.route }), 350);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + OFFERS.length) % OFFERS.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
  };

  React.useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + OFFERS.length) % OFFERS.length);
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % OFFERS.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, handleClose]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="offer-overlay"
          className="fixed inset-0 z-[200] flex items-center justify-center p-3.5 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
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
            aria-label={`Limited time offer: ${activeOffer.title}`}
            className="relative w-full max-w-[360px] sm:max-w-[400px] rounded-3xl overflow-hidden shadow-2xl bg-background border border-border/50 my-auto select-none"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 16 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* Top Carousel Switcher Dots & Close Button Bar */}
            <div className="absolute top-3 inset-x-3 z-30 flex items-center justify-between pointer-events-none">
              {/* Carousel Indicators / Badges */}
              <div className="pointer-events-auto flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 shadow-md">
                {OFFERS.map((offer, idx) => (
                  <button
                    key={offer.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(idx);
                    }}
                    className={`transition-all duration-300 rounded-full h-1.5 ${
                      currentIndex === idx
                        ? "w-5 bg-electric"
                        : "w-1.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Slide ${idx + 1}: ${offer.brand}`}
                  />
                ))}
                <span className="text-[10px] font-bold text-white/90 pl-1 uppercase tracking-wider">
                  {currentIndex + 1}/{OFFERS.length}
                </span>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                aria-label="Close offer"
                className="pointer-events-auto inline-flex size-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 transition-colors border border-white/20 shadow-lg"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Poster Image Carousel Area */}
            <div
              className="relative bg-secondary/30 overflow-hidden cursor-pointer group flex items-center justify-center min-h-[300px]"
              onClick={handleShop}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeOffer.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="w-full flex items-center justify-center"
                >
                  <img
                    src={activeOffer.poster}
                    alt={activeOffer.alt}
                    className="w-full h-auto object-contain block max-h-[60vh] sm:max-h-[64vh] mx-auto select-none group-hover:scale-[1.01] transition-transform duration-300"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next Carousel Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous offer"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 size-8 rounded-full bg-black/55 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-md opacity-80 hover:opacity-100 hover:scale-110 transition-all z-20"
              >
                <ChevronLeft className="size-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next offer"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 size-8 rounded-full bg-black/55 backdrop-blur-md text-white flex items-center justify-center border border-white/20 shadow-md opacity-80 hover:opacity-100 hover:scale-110 transition-all z-20"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>

            {/* Bottom Content Bar */}
            <div className="p-4 sm:p-5 bg-background border-t border-border/40">
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric block">
                    {activeOffer.tagline}
                  </span>
                  <h2 className="text-base font-bold tracking-tight">
                    {activeOffer.title}
                  </h2>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-[10px] text-muted-foreground line-through">
                    {activeOffer.originalPrice}
                  </p>
                  <p className="text-base font-black text-electric">
                    {activeOffer.discountedPrice}
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
                  {activeOffer.ctaText} <ArrowUpRight className="size-3.5" />
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
