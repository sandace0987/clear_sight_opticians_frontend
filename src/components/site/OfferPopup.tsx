import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CONTACT_PHONE_RAW } from "@/lib/contact-config";

const STORAGE_KEY = "cso_smart_glasses_promo_last_shown";
const SESSION_HOURS = 24;

function usePromoSession(): [boolean, () => void] {
  const [shouldShow, setShouldShow] = React.useState(false);

  React.useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw || Number.isNaN(Number(raw))) {
      setShouldShow(true);
      return;
    }
    if ((Date.now() - Number(raw)) / 3_600_000 >= SESSION_HOURS) setShouldShow(true);
  }, []);

  const dismiss = React.useCallback(() => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setShouldShow(false);
  }, []);

  return [shouldShow, dismiss];
}

export function OfferPopup() {
  const [shouldShow, dismiss] = usePromoSession();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (!shouldShow) return;
    const timer = setTimeout(() => setVisible(true), 900);
    return () => clearTimeout(timer);
  }, [shouldShow]);

  const handleClose = React.useCallback(() => {
    setVisible(false);
    setTimeout(dismiss, 350);
  }, [dismiss]);

  React.useEffect(() => {
    if (!visible) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, handleClose]);

  const whatsappUrl = `https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(
    "Hi Clear Sight Opticians, I'd like to check Ray-Ban Meta Gen 3 Wayfarer and Aviator availability and book a demo in Hyderabad.",
  )}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="gen3-launch-overlay"
          className="fixed inset-0 z-[200] flex items-center justify-center p-3.5 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={handleClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="gen3-launch-title"
            className="relative w-full max-w-[510px] rounded-3xl overflow-hidden shadow-[0_28px_100px_-28px_rgba(0,0,0,0.65)] bg-background border border-white/15 my-auto"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-[210px] sm:h-[250px] overflow-hidden bg-[#111417] text-white">
              <img
                src="/products/ray-ban-meta-gen3/colourways/wayfarer-shiny-black-transitions-grey-front.webp"
                alt="Ray-Ban Meta Gen 3 Wayfarer in Shiny Black with Transitions Grey lenses"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111417]/75 via-transparent to-black/20" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-5">
                <span className="rounded-full border border-white/25 bg-black/25 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] backdrop-blur-md">
                  New collection · Gen 3
                </span>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close Gen 3 launch feature"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition-colors hover:bg-black/70"
                >
                  <X className="size-4" />
                </button>
              </div>
              <div className="absolute inset-x-0 bottom-0 px-5 pb-4 sm:px-6 sm:pb-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/75">Ray-Ban Meta · Wayfarer &amp; Aviator</p>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-background">
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-electric">Now at Clear Sight Opticians</p>
                  <h2 id="gen3-launch-title" className="mt-1 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                    Meet <span className="font-serif italic font-medium text-electric">Gen 3.</span>
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">3K video · Meta AI · Up to 9-hour battery</p>
                </div>
                <p className="text-sm font-semibold text-foreground">From ₹44,300</p>
              </div>
              <div className="mb-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                <span>Visit KPHB</span><span aria-hidden>·</span><span>Nizampet</span><span aria-hidden>·</span><span>Bowenpally</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <Link
                  to="/ray-ban-meta-gen-3-hyderabad"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-sm transition-colors hover:bg-ink"
                >
                  Explore Gen 3 <ArrowUpRight className="size-3.5" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.15em] transition-colors hover:border-electric/50 hover:bg-secondary"
                >
                  <MessageCircle className="size-3.5" /> Ask on WhatsApp
                </a>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="mt-3 w-full py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
