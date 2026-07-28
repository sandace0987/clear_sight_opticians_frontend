import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, HelpCircle, Eye, Sparkles, Scale } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ModelCard } from "@/components/site/ModelCard";
import { BRANDS } from "@/lib/brand-catalog";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";

const rayBanBrand = BRANDS.find((b) => b.slug === "ray-ban");
const oakleyBrand = BRANDS.find((b) => b.slug === "oakley");
const featuredRayBan = rayBanBrand?.models.slice(0, 3) || [];
const featuredOakley = oakleyBrand?.models.slice(0, 3) || [];

export const Route = createFileRoute("/ray-ban-vs-oakley")({
  head: () =>
    createSeoHead({
      title: "Ray-Ban vs Oakley: Which Eyewear Brand is Best for You? (2026 Guide)",
      description:
        "In-depth comparison of Ray-Ban vs Oakley glasses, sunglasses, Meta AI technology, frame durability & lens performance. Find out which fits your style and active lifestyle at Clear Sight.",
      path: "/ray-ban-vs-oakley",
      type: "website",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
          { name: "Ray-Ban vs Oakley", path: "/ray-ban-vs-oakley" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Ray-Ban vs Oakley: Detailed Eyewear, Lens & Smart Glasses Comparison Guide",
          description:
            "Expert breakdown comparing Ray-Ban and Oakley optical frames, G-15 vs Prizm lens technologies, Ray-Ban Meta vs Oakley Meta HSTN AI glasses, and frame durability at Clear Sight Opticians.",
          author: {
            "@type": "Person",
            name: "Madhu A",
            jobTitle: "Founder & Chief Optometrist",
            worksFor: { "@id": `${SITE_URL}/#organization` },
          },
          publisher: {
            "@type": "Organization",
            name: "Clear Sight Opticians",
            logo: `${SITE_URL}/clear-sight-logo.avif`,
          },
          mainEntityOfPage: `${SITE_URL}/ray-ban-vs-oakley`,
        },
        faqSchema(RAYBAN_VS_OAKLEY_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: RayBanVsOakleyPage,
});

const RAYBAN_VS_OAKLEY_FAQS = [
  {
    question: "What is the main difference between Ray-Ban and Oakley glasses?",
    answer:
      "Ray-Ban focuses on timeless fashion, classic heritage styling, and everyday urban luxury (such as Wayfarer, Aviator, and Clubmaster silhouettes). Oakley focuses on high-performance sports optics, extreme impact resistance, aerodynamic grip (Unobtainium® earsocks), and contrast-enhancing Prizm™ lens technology.",
  },
  {
    question: "Which brand has better lens technology: Ray-Ban or Oakley?",
    answer:
      "For driving and natural color fidelity, Ray-Ban's classic G-15 green and Chromance polarized lenses excel. For sports, golf, cycling, cricket, and intense sunlight, Oakley's Prizm™ lenses provide superior color separation and contrast enhancement.",
  },
  {
    question: "How do Ray-Ban Meta and Oakley Meta smart glasses compare?",
    answer:
      "Ray-Ban Meta (Wayfarer & Headliner) offers iconic everyday lifestyle styling with hands-free 12MP video capture and Meta AI. Oakley Meta (HSTN series) blends sport-lifestyle frame aesthetics with Meta AI technology and Prizm lens options.",
  },
  {
    question: "Which brand is more durable for active sports: Ray-Ban or Oakley?",
    answer:
      "Oakley is superior for active sports due to its stress-resistant O Matter™ frame materials, Plutonite® impact-resistant lenses, and hydrophilic Unobtainium® grips that increase tackiness when sweating.",
  },
  {
    question: "Can both Ray-Ban and Oakley frames be fitted with prescription power lenses?",
    answer:
      "Yes! At Clear Sight Opticians, we fit custom ZEISS single-vision, progressive, transition, and blue-cut computer lenses into both Ray-Ban and Oakley optical frames.",
  },
  {
    question: "Are Ray-Ban or Oakley glasses more expensive in India?",
    answer:
      "Both brands occupy a similar premium price tier. Ray-Ban frames start from ₹6,500 to ₹15,000+ (Ray-Ban Meta ₹29,999+). Oakley frames start from ₹7,200 to ₹18,000+ (Oakley Meta ₹39,999+).",
  },
  {
    question: "Which brand is better suited for formal business attire?",
    answer:
      "Ray-Ban optical frames (such as Clubmaster, Wayfarer, or thin metal frames) are generally preferred for formal business suits and executive office wear.",
  },
  {
    question: "Which brand is better for driving in Hyderabad daylight?",
    answer:
      "Ray-Ban Chromance polarized lenses and Oakley Prizm Everyday/Deep Water polarized lenses are both outstanding for cutting road tarmac glare in bright Hyderabad sunshine.",
  },
  {
    question: "Can I try both Ray-Ban and Oakley frames side-by-side at Clear Sight Opticians?",
    answer:
      "Yes! All three Clear Sight stores in Hyderabad (KPHB, Nizampet, and Bowenpally) stock extensive inventories of both Ray-Ban and Oakley frames for side-by-side fitting.",
  },
  {
    question: "Do both brands carry an official Luxottica manufacturer warranty?",
    answer:
      "Yes. Both Ray-Ban and Oakley are owned by Luxottica Group and carry official manufacturer warranties against defects when purchased at an authorized retailer like Clear Sight Opticians.",
  },
  {
    question: "How do I choose between Ray-Ban and Oakley?",
    answer:
      "Choose Ray-Ban if your priority is timeless fashion, cultural heritage, and versatile city styling. Choose Oakley if your priority is athletic performance, wrap protection, and maximum impact durability.",
  },
  {
    question: "How do I book a styling trial appointment for Ray-Ban and Oakley at Clear Sight?",
    answer:
      "Book an appointment online or via WhatsApp. Our optical consultants will guide you through frame geometries and lens options at KPHB, Nizampet, or Bowenpally.",
  },
];

function RayBanVsOakleyPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <Scale className="size-3.5" /> Brand Head-to-Head · 2026 Comparison
              </span>
              <h1
                aria-label="Ray-Ban vs Oakley: Which Eyewear Brand is Best for You? (2026 Guide)"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Ray-Ban vs. Oakley: <span className="font-serif italic font-medium text-electric">the ultimate comparison.</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Deciding between Ray-Ban and Oakley? Our expert optometry team breaks down differences in style aesthetics, lens technologies (G-15/Chromance vs. Prizm™), frame durability (Acetate vs. O Matter™), and AI smart glasses at Clear Sight Opticians Hyderabad.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book Frame Trial
                </button>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I'd like to compare Ray-Ban and Oakley frames.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp Expert <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-ink p-8 text-white text-center flex flex-col items-center justify-center min-h-[340px]">
                  <Scale className="size-10 text-electric mb-4" />
                  <p className="text-2xl font-bold tracking-tight">Fashion Icon vs. Sport Performance</p>
                  <p className="text-xs text-white/70 mt-2 max-w-xs">Stocked side-by-side at KPHB, Nizampet &amp; Bowenpally studios.</p>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct Answer AEO Block ── */}
      <section className="px-6 lg:px-10 py-10 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-5xl">
          <div className="bg-background border border-electric/30 rounded-2xl p-6 sm:p-8 shadow-sm">
            <span className="text-electric text-[10px] font-bold uppercase tracking-[0.25em] block mb-2">
              Direct Answer / Summary
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
              Should you buy Ray-Ban or Oakley?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Choose Ray-Ban if you prioritize classic American heritage, timeless fashion (Wayfarer, Aviator, Clubmaster), and versatile urban business styling. Choose Oakley if you prioritize active sports performance, impact resistance, non-slip grip (Unobtainium®), and contrast-enhancing Prizm™ lens optics. Both brands feature prescription lens options and AI smart glasses (Ray-Ban Meta &amp; Oakley Meta HSTN) available at Clear Sight Opticians Hyderabad.
            </p>
          </div>
        </div>
      </section>

      {/* ── Side-by-Side Model Showcase ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Visual Comparison</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Featured Ray-Ban &amp; Oakley <span className="font-serif italic font-medium text-electric">models.</span>
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
              Click any frame to inspect details, colors, lens options, or enquire directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Ray-Ban Showcase */}
            <div className="bg-background border border-border rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Ray-Ban Heritage</h3>
                <Link to="/brands/$brand" params={{ brand: "ray-ban" }} className="text-xs font-bold text-electric uppercase tracking-wider">
                  View All Ray-Ban →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredRayBan.slice(0, 2).map((m, i) => (
                  <ModelCard key={m.model} m={m} index={i} brandName="Ray-Ban" />
                ))}
              </div>
            </div>

            {/* Oakley Showcase */}
            <div className="bg-background border border-border rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 border-b border-border pb-4">
                <h3 className="text-2xl font-bold tracking-tight text-foreground">Oakley Performance</h3>
                <Link to="/brands/$brand" params={{ brand: "oakley" }} className="text-xs font-bold text-electric uppercase tracking-wider">
                  View All Oakley →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredOakley.slice(0, 2).map((m, i) => (
                  <ModelCard key={m.model} m={m} index={i} brandName="Oakley" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Head-to-Head Breakdown</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mt-2">
              Ray-Ban vs. Oakley Feature Comparison
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-background rounded-2xl overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-4 font-bold">Category</th>
                  <th className="p-4 font-bold text-electric">Ray-Ban</th>
                  <th className="p-4 font-bold text-electric">Oakley</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-semibold">Primary Focus</td>
                  <td className="p-4 text-muted-foreground">Timeless fashion &amp; lifestyle heritage</td>
                  <td className="p-4 text-muted-foreground">Athletic performance &amp; active ergonomics</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Flagship Lens Tech</td>
                  <td className="p-4 text-muted-foreground">G-15 Green, Chromance Polarized</td>
                  <td className="p-4 text-muted-foreground">Prizm™ Sport &amp; Everyday Optics</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Primary Frame Material</td>
                  <td className="p-4 text-muted-foreground">Hand-crafted Acetate &amp; Monel Metal</td>
                  <td className="p-4 text-muted-foreground">O Matter™ Stress-Resistant Synthetic</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Smart Glasses Offering</td>
                  <td className="p-4 text-muted-foreground">Ray-Ban Meta (Wayfarer / Headliner)</td>
                  <td className="p-4 text-muted-foreground">Oakley Meta HSTN AI Glasses</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Prescription Compatibility</td>
                  <td className="p-4 text-foreground font-semibold">Full ZEISS single &amp; progressive support</td>
                  <td className="p-4 text-foreground font-semibold">Full ZEISS single &amp; progressive support</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Best Suited For</td>
                  <td className="p-4 text-muted-foreground">Daily city wear, office suits &amp; casual fashion</td>
                  <td className="p-4 text-muted-foreground">Sports, cycling, driving &amp; outdoor fitness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Comparison FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {RAYBAN_VS_OAKLEY_FAQS.map((faq) => (
              <details key={faq.question} className="group bg-background border border-border rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden">
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

      {/* ── CTA ── */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-ink text-white p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div>
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Try Both In-Store</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Compare Ray-Ban &amp; Oakley in Hyderabad.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Visit Clear Sight Opticians at KPHB, Nizampet, or Bowenpally to test both brands side-by-side.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/brands"
                className="bg-electric text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                Browse Brands
              </Link>
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="border border-white/20 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <CalendarCheck className="size-4" /> Book Trial Slot
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="Brand comparison trial"
      />
    </div>
  );
}
