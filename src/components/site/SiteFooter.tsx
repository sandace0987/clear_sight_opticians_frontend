import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, ChevronDown, ChevronUp } from "lucide-react";
import logoUrl from "@/assets/miscellaneous/clear-sight-logo.avif";
import { CONTACT_PHONE, CONTACT_PHONE_RAW, DEVELOPER_EMAIL } from "@/lib/contact-config";

const GUIDE_LINKS = [
  { to: "/eye-test-hyderabad", label: "Eye Test Hyderabad" },
  { to: "/zeiss-eye-test-hyderabad", label: "ZEISS 3D Refraction" },
  { to: "/ray-ban-meta-hyderabad", label: "Ray-Ban Meta Smart Glasses" },
  { to: "/ray-ban-glasses-hyderabad", label: "Ray-Ban Glasses & Frames" },
  { to: "/designer-eyewear-hyderabad", label: "Designer Eyewear Edit" },
  { to: "/contact-lenses-hyderabad", label: "Prescription Contact Lenses" },
  { to: "/computer-glasses-hyderabad", label: "Blue Cut Computer Glasses" },
  { to: "/corporate-gifting", label: "Corporate Gifting & Eye Camps" },
  { to: "/corporate-eye-test-camps-hyderabad", label: "On-Site Corporate Eye Camps" },
  { to: "/corporate-eyewear-vouchers-hyderabad", label: "Corporate Eyewear Vouchers" },
  { to: "/executive-luxury-gifting-hyderabad", label: "Executive Luxury AI Gifting" },
  { to: "/optician-kphb", label: "Best Optician in KPHB" },
  { to: "/what-are-progressive-lenses", label: "Progressive Lenses Guide" },
  { to: "/ray-ban-vs-oakley", label: "Ray-Ban vs Oakley Comparison" },
] as const;

const INITIAL_VISIBLE_COUNT = 5;

export function SiteFooter() {
  const [showAllGuides, setShowAllGuides] = useState(false);

  const visibleGuides = showAllGuides
    ? GUIDE_LINKS
    : GUIDE_LINKS.slice(0, INITIAL_VISIBLE_COUNT);
  const remainingCount = GUIDE_LINKS.length - INITIAL_VISIBLE_COUNT;

  return (
    <footer className="bg-ink text-white px-6 lg:px-10 pt-20 pb-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <img
            src={logoUrl}
            alt="Clear Sight Opticians"
            className="h-16 w-auto mb-6 brightness-0 invert opacity-90"
          />
          <p className="text-white/60 max-w-sm leading-relaxed text-sm">
            The premier optical destination in Hyderabad - luxury frames, AI eyewear
            and clinical-grade eye care, fitted by experts.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.instagram.com/clearsight.official?igsh=MTg2OXFwZDJtZ3B6NA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="size-10 rounded-full border border-white/15 grid place-items-center hover:bg-electric hover:border-electric transition-colors"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href="https://www.facebook.com/clearsight.official/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="size-10 rounded-full border border-white/15 grid place-items-center hover:bg-electric hover:border-electric transition-colors"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Explore</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/brands" className="hover:text-electric">Brands</Link></li>
            <li><Link to="/ai-glasses" className="hover:text-electric">AI Glasses</Link></li>
            <li><Link to="/corporate-gifting" className="hover:text-electric">Corporate Gifting</Link></li>
            <li><Link to="/stores" className="hover:text-electric">Store Locator</Link></li>
            <li><Link to="/about" className="hover:text-electric">About Us</Link></li>
          </ul>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-3 mt-8">Legal</p>
          <ul className="space-y-3 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-electric">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="hover:text-electric">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Services &amp; Guides</p>
          <ul className="space-y-2.5 text-xs text-white/75">
            {visibleGuides.map((guide) => (
              <li key={guide.to}>
                <Link to={guide.to} className="hover:text-electric transition-colors">
                  {guide.label}
                </Link>
              </li>
            ))}
          </ul>

          {remainingCount > 0 && (
            <button
              type="button"
              onClick={() => setShowAllGuides(!showAllGuides)}
              className="mt-3.5 inline-flex items-center gap-1 text-[11px] font-bold text-electric uppercase tracking-wider hover:text-white transition-colors cursor-pointer"
            >
              {showAllGuides ? (
                <>
                  <ChevronUp className="size-3.5" /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="size-3.5" /> Show More ({remainingCount})
                </>
              )}
            </button>
          )}
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-5">Kukatpally (KPHB) Flagship</p>
          <p className="text-sm text-white/70 leading-relaxed">
            Shop #4, Padmaja Complex,<br />
            JNTU Road, 6th Phase, KPHB,<br />
            Hyderabad - 500085
          </p>
          <p className="mt-3 text-xs text-white/70">
            Also at Nizampet &amp; Bowenpally · Open daily 9:00 AM – 9:30 PM
          </p>
          <a href={`tel:+${CONTACT_PHONE_RAW}`} className="mt-4 inline-block text-sm font-semibold text-white hover:text-electric">
            {CONTACT_PHONE}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© {new Date().getFullYear()} Clear Sight Opticians Private Limited.</p>
        <p>
          made with ❤️ by{" "}
          <a
            href={`mailto:${DEVELOPER_EMAIL}`}
            className="hover:text-electric transition-colors underline decoration-dotted"
          >
            skb
          </a>
        </p>
        <p className="font-serif italic">Vision, made personal.</p>
      </div>
    </footer>
  );
}
