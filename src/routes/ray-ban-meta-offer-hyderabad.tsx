import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Zap,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  CalendarCheck,
  Camera,
  Volume2,
  Cpu,
  Phone,
  Tag,
  Gift,
  MapPin,
  Eye,
  Percent,
} from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ModelCard } from "@/components/site/ModelCard";
import { BRANDS } from "@/lib/brand-catalog";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";
import { RAYBAN_META_PROMO } from "@/lib/promo-config";
import offerPoster from "@/assets/miscellaneous/ray-ban-meta-offer-poster.jpg";

const rayBanData = BRANDS.find((b) => b.slug === "ray-ban");
const wayfarerModel =
  rayBanData?.models.find((m) => m.model.toLowerCase().includes("meta") && m.model.toLowerCase().includes("wayfarer")) ??
  rayBanData?.models.find((m) => m.model.toLowerCase().includes("meta"));

export const Route = createFileRoute("/ray-ban-meta-offer-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Ray-Ban Meta Gen-2 Wayfarer Offer in Hyderabad | 20% Off | Clear Sight",
      description:
        "Limited time offer: 20% off on Ray-Ban Meta Gen-2 Wayfarers at Clear Sight Opticians Hyderabad. Get starting price ₹31,840 (regular ₹39,800) with official warranty, live demo, and custom ZEISS prescription lenses.",
      path: "/ray-ban-meta-offer-hyderabad",
      type: "product",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services & Guides", path: "/#corporate-gifting" },
          { name: "Ray-Ban Meta 20% Off Offer", path: "/ray-ban-meta-offer-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Ray-Ban Meta Wayfarer (Gen 2) — 20% Off Limited Time Offer",
          image: `${SITE_URL}/clear-sight-logo.avif`,
          description:
            "Iconic Ray-Ban Meta Gen-2 Wayfarer smart glasses with 12MP POV camera, open-ear audio, and Meta AI. Exclusive 20% discount offer starting at ₹31,840 at Clear Sight Opticians Hyderabad.",
          brand: { "@type": "Brand", name: "Ray-Ban" },
          offers: {
            "@type": "Offer",
            price: "31840",
            priceCurrency: "INR",
            priceValidUntil: "2026-12-31",
            availability: "https://schema.org/InStock",
            seller: { "@type": "OpticalBusiness", name: "Clear Sight Opticians" },
          },
        },
        faqSchema(DEAL_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: RayBanMetaOfferPage,
});

const DEAL_FAQS = [
  {
    question: "What is the 20% off offer on Ray-Ban Meta Wayfarers in Hyderabad?",
    answer:
      "For a limited time, Clear Sight Opticians is offering an exclusive 20% discount on the authentic Ray-Ban Meta Gen-2 Wayfarer collection. The starting price is reduced from ₹39,800 to ₹31,840 (a direct saving of ₹7,960). The deal includes full 100% manufacturer warranty, charging case, and free in-store optical fitting.",
  },
  {
    question: "Which Ray-Ban Meta models are covered by the 20% discount?",
    answer:
      "The 20% promotional offer applies specifically to the iconic Ray-Ban Meta Gen-2 Wayfarer frames across 6 premium colourways, including Matte Black with Clear lenses, Shiny Black with G-15 Green, Cosmic Blue with Transitions Sapphire, and Transparent Grey finishes.",
  },
  {
    question: "Can I add prescription or ZEISS progressive lenses with this deal?",
    answer:
      "Yes! As certified ZEISS Vision Experts in Hyderabad, our optometrists can custom fit single vision, progressive (SmartLife/DriveSafe), blue-block computer, and Transitions lenses into your discounted Meta Wayfarer frames with precision digital optical centration.",
  },
  {
    question: "Where in Hyderabad can I claim this offer and try a live demo?",
    answer:
      "You can claim this deal and try live hands-free demos at any of our three Hyderabad flagship locations: KPHB (Padmaja Complex, JNTU Road), Nizampet (Blooming Dale Road), and Bowenpally (Sikh Road). Walk in or book an appointment online to reserve your frame finish.",
  },
  {
    question: "Is warranty and original box packaging included in the discounted price?",
    answer:
      "Absolutely. All pairs sold under this promotion are 100% brand-new, genuine Luxottica stock with complete manufacturer warranty, the official smart portable charging case (up to 36h total battery), microfibre cleaning cloth, and tax invoice.",
  },
];

const DEAL_PERKS = [
  {
    icon: Tag,
    title: "Instant 20% Saving",
    desc: "Starting at ₹31,840 instead of ₹39,800 — save ₹7,960 instantly on India's most popular smart glasses.",
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine & Warranty",
    desc: "Authorized Ray-Ban stock with official manufacturer warranty and original smart charging case.",
  },
  {
    icon: Eye,
    title: "Custom ZEISS Fitting",
    desc: "Certified optical lens fitment for single vision, digital progressives, and blue-cut computer wear.",
  },
  {
    icon: CalendarCheck,
    title: "Free Live In-Store Demo",
    desc: "Test the 12MP POV camera, spatial directional audio, and 'Hey Meta' voice assistant before purchasing.",
  },
];

function RayBanMetaOfferPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Top Offer Announcement Bar ── */}
      <div className="bg-electric text-white text-xs font-bold py-2.5 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-2">
        <Zap className="size-3.5 fill-white animate-pulse" />
        <span>Limited Time Deal: 20% Off Ray-Ban Meta Gen-2 Wayfarers · Save ₹7,960</span>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative px-6 lg:px-10 pt-12 lg:pt-20 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 border border-electric/30 text-electric text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1">
                  <Percent className="size-3" /> {RAYBAN_META_PROMO.badgeText} LIMITED DEAL
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-muted-foreground text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1">
                  <Clock className="size-3" /> While Stocks Last
                </span>
              </div>

              <h1
                aria-label="Ray-Ban Meta Gen-2 Wayfarer Limited Time Deal in Hyderabad — 20% Off"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Smart Tech meets iconic style.{" "}
                <span className="font-serif italic font-medium text-electric">Now 20% Off.</span>
              </h1>

              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Elevate your everyday vision with hands-free 12MP video capture, open-ear directional audio, and on-demand Meta AI voice assistance. For a limited time at Clear Sight Opticians, own the <strong>Ray-Ban Meta Gen-2 Wayfarer</strong> starting at <strong>₹31,840</strong> (regular price ₹39,800).
              </p>

              {/* Price comparison card */}
              <div className="mt-8 p-6 bg-secondary/50 border border-border/80 rounded-3xl max-w-xl">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-border/60">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground block">
                      Original Retail Price
                    </span>
                    <span className="text-xl sm:text-2xl font-bold line-through text-muted-foreground">
                      ₹{RAYBAN_META_PROMO.originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="text-center px-3 py-1.5 rounded-full bg-electric/10 border border-electric/25 text-electric font-black text-xs uppercase tracking-wider">
                    Save ₹{(RAYBAN_META_PROMO.originalPrice - RAYBAN_META_PROMO.discountedPrice).toLocaleString("en-IN")} (-20%)
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric block">
                      Limited Offer Price
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-electric">
                      ₹{RAYBAN_META_PROMO.discountedPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-electric shrink-0" /> GST included · 100% Genuine warranty · Charging case included
                </p>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book Live Demo Slot
                </button>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I would like to reserve the Ray-Ban Meta Wayfarer 20% off offer.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-foreground hover:bg-ink hover:text-white border border-border px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors inline-flex items-center gap-2"
                >
                  Reserve via WhatsApp <ArrowUpRight className="size-4" />
                </a>
                <a
                  href={`tel:+${CONTACT_PHONE_RAW}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-electric transition-colors px-2 py-3.5"
                >
                  <Phone className="size-4 text-electric" /> {CONTACT_PHONE}
                </a>
              </div>
            </div>

            {/* Promotional Poster Image */}
            <div className="lg:col-span-5">
              <TiltCard max={4}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-secondary/30 group">
                  <img
                    src={offerPoster}
                    alt="Ray-Ban Meta Gen-2 Wayfarer 20% Off Official Offer Poster"
                    className="w-full h-auto object-contain block rounded-3xl group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none" />
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Buy With This Offer Strip ── */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Deal Privileges</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              Why claim your Ray-Ban Meta at <span className="font-serif italic font-medium text-electric">Clear Sight?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEAL_PERKS.map((perk, i) => (
              <Reveal key={perk.title} delay={i * 0.05}>
                <div className="bg-background border border-border rounded-3xl p-6 h-full flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="size-11 rounded-2xl bg-electric/10 border border-electric/20 grid place-items-center mb-5 text-electric">
                      <perk.icon className="size-5" />
                    </span>
                    <h3 className="text-lg font-bold tracking-tight">{perk.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Frame Showcase ── */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/20 border-b border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-10">
            <div>
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Interactive Preview</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
                Inspect 6 official <span className="font-serif italic font-medium text-electric">Wayfarer colourways.</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                Click any colour swatch below to inspect high-resolution front, angle, and charging case views.
              </p>
            </div>
            <Link
              to="/brands/$brand"
              params={{ brand: "ray-ban" }}
              className="text-xs font-bold border-b-2 border-electric pb-1 tracking-[0.2em] uppercase w-fit"
            >
              Browse Full Catalog →
            </Link>
          </div>

          <div className="max-w-md mx-auto">
            {wayfarerModel && (
              <TiltCard max={4}>
                <ModelCard m={wayfarerModel} index={0} brandName="Ray-Ban" />
              </TiltCard>
            )}
          </div>
        </div>
      </section>

      {/* ── Feature Breakdown Section ── */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">
                Hardware &amp; AI Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter leading-tight">
                Everything you love about Wayfarer.{" "}
                <span className="font-serif italic font-medium text-electric">Intelligently engineered.</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                The Ray-Ban Meta Gen-2 Wayfarer retains the exact silhouette that defined cultural icons for decades, discreetly integrating ultra-compact microelectronics that do not weigh you down.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-full bg-electric/10 text-electric grid place-items-center shrink-0 mt-0.5">
                    <Camera className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Ultra-Wide 12MP POV Camera</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Record hands-free 1080p vertical video or snap high-res photos from your perspective. Stream straight to Instagram and Facebook.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-full bg-electric/10 text-electric grid place-items-center shrink-0 mt-0.5">
                    <Volume2 className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Open-Ear Spatial Audio &amp; 5-Mic Array</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Custom directional speakers deliver punchy bass and crystal-clear voice calls while keeping you alert to ambient city sounds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-full bg-electric/10 text-electric grid place-items-center shrink-0 mt-0.5">
                    <Cpu className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Multimodal 'Hey Meta' AI Assistant</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ask questions, translate signs, draft messages, or control audio playback completely hands-free with responsive AI.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-secondary/40 border border-border rounded-3xl p-8 sm:p-10 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric block">
                Direct Optical Fitting
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Prescription Lenses with ZEISS Vision Partners
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Many smart glasses retailers only sell demo plano lenses. At Clear Sight Opticians, our state-of-the-art laboratory custom crafts precision optical lenses tailored exactly to your prescription:
              </p>
              <ul className="space-y-3 text-xs text-foreground/90">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-electric shrink-0" />
                  <span><strong>ZEISS SmartLife &amp; DriveSafe Progressives</strong> — fluid near-to-far transition without sensor blockage</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-electric shrink-0" />
                  <span><strong>Transitions® Photochromic Lenses</strong> — crystal clear indoors, deeply tinted dark sunglasses outdoors</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-electric shrink-0" />
                  <span><strong>BlueProtect Computer Lenses</strong> — filter high-energy blue-violet light for programmers and screen workers</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-electric shrink-0" />
                  <span><strong>Digital Centration Accuracy</strong> — pupil distance and optical center measured with 0.1mm tolerance</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  to="/zeiss-eye-test-hyderabad"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-electric hover:underline"
                >
                  Learn about ZEISS 3D Refraction <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stores & In-Store Demo Section ── */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Authorized Centers</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              Visit our stores to test &amp; claim the 20% deal
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Try on frame sizes (Standard &amp; Large), listen to speaker clarity, and inspect all 6 colourways in person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORE_LOCATIONS.map((store) => (
              <div
                key={store.name}
                className="bg-background border border-border rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.2em] text-electric bg-electric/10 px-2.5 py-1 rounded-full mb-3">
                    <MapPin className="size-3" /> {store.name}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight">{store.address}</h3>
                  <p className="text-xs text-muted-foreground mt-2">{store.hours}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between gap-3">
                  <a
                    href={`tel:+${CONTACT_PHONE_RAW}`}
                    className="text-xs font-bold text-foreground hover:text-electric transition-colors"
                  >
                    {store.phone}
                  </a>
                  <button
                    type="button"
                    onClick={() => setBookingOpen(true)}
                    className="text-[11px] font-bold uppercase tracking-wider bg-electric text-white px-3.5 py-1.5 rounded-full hover:bg-ink transition"
                  >
                    Book Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Promotion Details</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {DEAL_FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group bg-background border border-border rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer font-bold text-base text-foreground">
                  {faq.question}
                  <span className="text-electric group-open:rotate-180 transition-transform text-lg ml-2">↓</span>
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-4">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides / Internal Links Strip ── */}
      <section className="px-6 lg:px-10 py-12 bg-secondary/20 border-t border-border">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Explore Related AI Eyewear:
          </span>
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
            <Link to="/ray-ban-meta-hyderabad" className="hover:text-electric transition-colors">
              Ray-Ban Meta Complete Hub →
            </Link>
            <Link to="/ai-glasses" className="hover:text-electric transition-colors">
              All AI Glasses (Ray-Ban &amp; Oakley) →
            </Link>
            <Link to="/ray-ban-vs-oakley" className="hover:text-electric transition-colors">
              Ray-Ban vs Oakley Comparison →
            </Link>
            <Link to="/brands/$brand" params={{ brand: "ray-ban" }} className="hover:text-electric transition-colors">
              Ray-Ban Full Optical Catalog →
            </Link>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="Ray-Ban Meta 20% Offer demo"
      />
    </div>
  );
}
