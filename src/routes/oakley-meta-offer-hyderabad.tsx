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
  MapPin,
  Eye,
  Percent,
  Activity,
} from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ModelCard } from "@/components/site/ModelCard";
import { BRANDS } from "@/lib/brand-catalog";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";
import { OAKLEY_META_PROMO } from "@/lib/promo-config";
import offerPoster from "@/assets/miscellaneous/oakley-meta-offer-poster.png";

const oakleyData = BRANDS.find((b) => b.slug === "oakley");
const hstnModel = oakleyData?.models.find((m) => m.model.toLowerCase().includes("hstn"));
const vanguardModel = oakleyData?.models.find((m) => m.model.toLowerCase().includes("vanguard"));

export const Route = createFileRoute("/oakley-meta-offer-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Oakley Meta AI Smart Glasses Offer in Hyderabad | Up to 20% Off | Clear Sight",
      description:
        "Limited time deal on Oakley Meta AI Glasses at Clear Sight Opticians Hyderabad. Get 20% off Oakley Meta HSTN (₹33,440) and 10% off Oakley Meta Vanguard (₹47,070) with official warranty, live demo, and custom ZEISS optical fitting.",
      path: "/oakley-meta-offer-hyderabad",
      type: "product",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services & Guides", path: "/#corporate-gifting" },
          { name: "Oakley Meta Smart Glasses Offer", path: "/oakley-meta-offer-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Oakley Meta AI Smart Glasses — Up to 20% Off Limited Time Offer",
          image: `${SITE_URL}/clear-sight-logo.avif`,
          description:
            "Performance sport Oakley Meta AI Glasses featuring 12MP camera, open-ear audio, Prizm optics, and Meta AI. Up to 20% off on Meta HSTN and Meta Vanguard at Clear Sight Opticians Hyderabad.",
          brand: { "@type": "Brand", name: "Oakley" },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: String(OAKLEY_META_PROMO.hstn.discountedPrice),
            highPrice: String(OAKLEY_META_PROMO.vanguard.discountedPrice),
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
  component: OakleyMetaOfferPage,
});

const DEAL_FAQS = [
  {
    question: "What is the discount offer on Oakley Meta smart glasses in Hyderabad?",
    answer:
      "For a limited time, Clear Sight Opticians offers up to 20% off authentic Oakley Meta AI smart glasses. The Oakley Meta HSTN is 20% off (reduced from ₹41,800 to ₹33,440, saving ₹8,360), and the sport-focused Oakley Meta Vanguard is 10% off (reduced from ₹52,300 to ₹47,070, saving ₹5,230). Both include full manufacturer warranty and smart charging cases.",
  },
  {
    question: "What is the difference between Oakley Meta HSTN and Oakley Meta Vanguard?",
    answer:
      "Oakley Meta HSTN features an iconic modern-round silhouette suitable for all-day lifestyle and everyday wear with Prizm and Transitions lens options. Oakley Meta Vanguard is engineered with an aggressive, aerodynamic wrap design with enhanced grip and sweat resistance, tailored for runners, cyclists, and outdoor athletes.",
  },
  {
    question: "Can I get prescription lenses fitted in Oakley Meta smart glasses?",
    answer:
      "Yes! Clear Sight Opticians is a certified optical laboratory and ZEISS Vision Expert in Hyderabad. We can custom fit single vision, progressive, Transitions, and blue-cut digital lenses into your Oakley Meta frames with millimeter-precise digital centration.",
  },
  {
    question: "Where in Hyderabad can I demo and purchase the Oakley Meta glasses?",
    answer:
      "You can test live hands-free features and purchase Oakley Meta AI smart glasses at all three Clear Sight Opticians stores in Hyderabad: KPHB (Padmaja Complex, JNTU Road), Nizampet (Blooming Dale Road), and Bowenpally (Sikh Road). Walk in or book an appointment online to reserve your desired colourway.",
  },
  {
    question: "Are authentic Luxottica warranty and accessories included?",
    answer:
      "Yes. Every pair is 100% genuine Luxottica stock backed by full manufacturer warranty, official Oakley smart charging case (providing up to 36 hours of total power), cleaning cloth, and GST invoice.",
  },
];

const DEAL_PERKS = [
  {
    icon: Tag,
    title: "Up to 20% Direct Savings",
    desc: "Save ₹8,360 instantly on Oakley Meta HSTN and ₹5,230 on Oakley Meta Vanguard with zero hidden costs.",
  },
  {
    icon: Activity,
    title: "Prizm™ Sport Optics",
    desc: "Oakley's patented lens technology tunes color wavelengths to enhance contrast and detail on the road or trail.",
  },
  {
    icon: ShieldCheck,
    title: "100% Genuine with Warranty",
    desc: "Authorized Oakley & Luxottica stock with full manufacturer warranty and official high-speed charging case.",
  },
  {
    icon: Eye,
    title: "Custom ZEISS Lens Fitting",
    desc: "Expert on-site lab fitment for prescription single vision, progressive, and anti-glare driving lenses.",
  },
];

function OakleyMetaOfferPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Top Offer Announcement Bar ── */}
      <div className="bg-electric text-white text-xs font-bold py-2.5 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-2">
        <Zap className="size-3.5 fill-white animate-pulse" />
        <span>Limited Time Deal: Up to 20% Off Oakley Meta AI Smart Glasses · Starting at ₹33,440</span>
      </div>

      {/* ── Hero Section ── */}
      <section className="relative px-6 lg:px-10 pt-12 lg:pt-20 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-electric/10 border border-electric/30 text-electric text-[11px] font-black uppercase tracking-[0.2em] px-3.5 py-1">
                  <Percent className="size-3" /> {OAKLEY_META_PROMO.badgeText} LIMITED DEAL
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary text-muted-foreground text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-1">
                  <Clock className="size-3" /> While Stocks Last
                </span>
              </div>

              <h1
                aria-label="Oakley Meta AI Smart Glasses Limited Time Deal in Hyderabad — Up to 20% Off"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Performance optics meet Meta AI.{" "}
                <span className="font-serif italic font-medium text-electric">Now Up to 20% Off.</span>
              </h1>

              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Experience high-performance optics engineered for movement. Oakley Meta combines hands-free 12MP video capture, open-ear spatial audio, and on-demand Meta AI assistance with Oakley’s legendary Prizm™ optics. For a limited time at Clear Sight Opticians, own <strong>Oakley Meta HSTN</strong> starting at <strong>₹33,440</strong> and <strong>Oakley Meta Vanguard</strong> at <strong>₹47,070</strong>.
              </p>

              {/* Price comparison cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                {/* HSTN Card */}
                <div className="p-5 bg-secondary/50 border border-border/80 rounded-3xl">
                  <div className="flex items-center justify-between pb-3 border-b border-border/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Meta HSTN
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-electric bg-electric/10 px-2 py-0.5 rounded-full">
                      20% OFF
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Was
                      </span>
                      <span className="text-sm font-bold line-through text-muted-foreground">
                        ₹{OAKLEY_META_PROMO.hstn.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-electric block">
                        Offer Price
                      </span>
                      <span className="text-xl font-black text-electric">
                        ₹{OAKLEY_META_PROMO.hstn.discountedPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    Save ₹{OAKLEY_META_PROMO.hstn.saving.toLocaleString("en-IN")} · 8 colourways
                  </p>
                </div>

                {/* Vanguard Card */}
                <div className="p-5 bg-secondary/50 border border-border/80 rounded-3xl">
                  <div className="flex items-center justify-between pb-3 border-b border-border/60">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Meta Vanguard
                    </span>
                    <span className="text-[11px] font-black uppercase tracking-wider text-electric bg-electric/10 px-2 py-0.5 rounded-full">
                      10% OFF
                    </span>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Was
                      </span>
                      <span className="text-sm font-bold line-through text-muted-foreground">
                        ₹{OAKLEY_META_PROMO.vanguard.originalPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-electric block">
                        Offer Price
                      </span>
                      <span className="text-xl font-black text-electric">
                        ₹{OAKLEY_META_PROMO.vanguard.discountedPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] text-muted-foreground">
                    Save ₹{OAKLEY_META_PROMO.vanguard.saving.toLocaleString("en-IN")} · 7 sport finishes
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-electric shrink-0" /> GST included · Official manufacturer warranty · Smart charging case included
              </p>

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
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I would like to reserve the Oakley Meta AI smart glasses promotional offer.")}`}
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
                    alt="Oakley Meta AI Smart Glasses Sale Poster"
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
              Why get your Oakley Meta at <span className="font-serif italic font-medium text-electric">Clear Sight?</span>
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Featured Silhouettes</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-2">
                Inspect <span className="font-serif italic font-medium text-electric">HSTN &amp; Vanguard</span> models.
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                Click any colour swatch below to view frame angles, Prizm tints, and included smart charging cases.
              </p>
            </div>
            <Link
              to="/brands/$brand"
              params={{ brand: "oakley" }}
              className="text-xs font-bold border-b-2 border-electric pb-1 tracking-[0.2em] uppercase w-fit"
            >
              Browse Full Oakley Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {hstnModel && (
              <TiltCard max={4}>
                <div className="h-full">
                  <div className="mb-2 text-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-electric bg-electric/10 px-3 py-1 rounded-full">
                      20% Off · Starting ₹33,440
                    </span>
                  </div>
                  <ModelCard m={hstnModel} index={0} brandName="Oakley" />
                </div>
              </TiltCard>
            )}
            {vanguardModel && (
              <TiltCard max={4}>
                <div className="h-full">
                  <div className="mb-2 text-center">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-electric bg-electric/10 px-3 py-1 rounded-full">
                      10% Off · Starting ₹47,070
                    </span>
                  </div>
                  <ModelCard m={vanguardModel} index={1} brandName="Oakley" />
                </div>
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
                Sport Optics &amp; Intelligence
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter leading-tight">
                Built for movement.{" "}
                <span className="font-serif italic font-medium text-electric">Empowered by Meta AI.</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Oakley Meta merges high-performance O-Matter™ frames with discreet smart technology. Stay completely immersed in your workout, ride, or daily routine while capturing perspective shots, listening to music, and talking to Meta AI without reaching for your phone.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-full bg-electric/10 text-electric grid place-items-center shrink-0 mt-0.5">
                    <Camera className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Hands-Free 12MP Ultra-Wide Camera</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Capture high-speed cycling, running, or golf POV video in full HD (1080p) and snap ultra-crisp photos instantly with temple tap or voice commands.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-full bg-electric/10 text-electric grid place-items-center shrink-0 mt-0.5">
                    <Volume2 className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Open-Ear Spatial Audio &amp; Wind Reduction</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Hear coaching prompts, playlists, and crystal-clear calls without blocking situational traffic sounds. Wind-resistant 5-microphone array ensures voice clarity at speed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="size-8 rounded-full bg-electric/10 text-electric grid place-items-center shrink-0 mt-0.5">
                    <Cpu className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Real-Time 'Hey Meta' AI Assistance</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Ask for instant stats, translation, navigation tips, or hands-free text responses while keeping your eyes on the road.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-secondary/40 border border-border rounded-3xl p-8 sm:p-10 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-electric block">
                Optical Lab Precision
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                Prizm™ &amp; ZEISS Prescription Optical Fitment
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Need corrective lenses? At Clear Sight Opticians, we don’t just deliver the standard plano pair. Our in-house computerized optical lab fits precision corrective lenses into your Oakley Meta frames:
              </p>
              <ul className="space-y-3 text-xs text-foreground/90">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-electric shrink-0" />
                  <span><strong>Oakley Prizm™ Lenses</strong> — engineered to enhance contrast and fine terrain details for cycling, golf, and water</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-electric shrink-0" />
                  <span><strong>ZEISS SmartLife Digital Progressives</strong> — seamless vision from dashboard to distance during high activity</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-electric shrink-0" />
                  <span><strong>Transitions® GEN S™</strong> — dynamic light adaptation transitioning ultra-fast from clear indoors to sunglass depth outdoors</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-electric shrink-0" />
                  <span><strong>Polarized &amp; Mirror Treatments</strong> — eliminate harsh asphalt glare and water reflection with hydrophobic coatings</span>
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
              Visit our stores to test &amp; claim the Oakley Meta deal
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Try on the HSTN and Vanguard silhouettes, experience spatial speaker clarity, and inspect all colorways in person.
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
            <Link to="/ray-ban-meta-offer-hyderabad" className="hover:text-electric transition-colors">
              Ray-Ban Meta 20% Off Offer →
            </Link>
            <Link to="/ai-glasses" className="hover:text-electric transition-colors">
              All AI Glasses (Ray-Ban &amp; Oakley) →
            </Link>
            <Link to="/ray-ban-vs-oakley" className="hover:text-electric transition-colors">
              Ray-Ban vs Oakley Comparison →
            </Link>
            <Link to="/brands/$brand" params={{ brand: "oakley" }} className="hover:text-electric transition-colors">
              Oakley Full Catalog →
            </Link>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="Oakley Meta Offer Demo"
      />
    </div>
  );
}
