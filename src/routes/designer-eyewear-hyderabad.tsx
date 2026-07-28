import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, Sparkles, Gem, Award } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ModelCard } from "@/components/site/ModelCard";
import { BRANDS, type GlassItem } from "@/lib/brand-catalog";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";
import { HOUSES } from "@/lib/brand-catalog";

const luxuryModels: { model: GlassItem; brandName: string }[] = [];
["prada", "montblanc", "silhouette", "maui-jim", "ray-ban", "oakley"].forEach((slug) => {
  const brand = BRANDS.find((b) => b.slug === slug);
  if (brand && brand.models[0]) {
    luxuryModels.push({ model: brand.models[0], brandName: brand.name });
  }
});

export const Route = createFileRoute("/designer-eyewear-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Luxury & Designer Eyewear in Hyderabad | Prada, Tom Ford, Ray-Ban",
      description:
        "Explore luxury designer frames in Hyderabad from Prada, Oakley, Montblanc, Silhouette, Maui Jim & Tom Ford at Clear Sight Opticians. Authorized optical boutique with certified fitting.",
      path: "/designer-eyewear-hyderabad",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
          { name: "Designer Eyewear Hyderabad", path: "/designer-eyewear-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Designer Eyewear Houses at Clear Sight Opticians Hyderabad",
          url: `${SITE_URL}/designer-eyewear-hyderabad`,
          itemListElement: HOUSES.slice(0, 10).map((h, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: h.name,
            url: `${SITE_URL}/brands/${h.slug}`,
          })),
        },
        faqSchema(DESIGNER_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: DesignerEyewearPage,
});

const DESIGNER_FAQS = [
  {
    question: "Which luxury designer eyewear brands are available at Clear Sight Opticians in Hyderabad?",
    answer:
      "Clear Sight Opticians carries an exclusive curated edit of world-renowned luxury optical houses including Prada Milano, Prada Linea Rossa, Oakley, Ray-Ban, Montblanc, Silhouette (rimless titanium), Tom Ford, Maui Jim, Burberry, Philipp Plein, Police, and Carrera.",
  },
  {
    question: "How do I know the designer eyewear frames are 100% genuine?",
    answer:
      "Clear Sight Opticians is an authorized retailer for official global eyewear distributors (Luxottica, Kering Eyewear, Marchon, Safilo, Silhouette Austria). Every frame includes manufacturer barcode tags, serial numbers, authentic case packaging, microfiber cloths, and official brand certificates.",
  },
  {
    question: "Can I customize luxury designer frames with ZEISS prescription lenses?",
    answer:
      "Yes. We specialize in fitting high-index single-vision, progressive, transition, and blue-cut computer lenses into all designer spectacle frames using ZEISS digital centration scanning for precise optical alignment.",
  },
  {
    question: "Do you stock rimless titanium frames like Silhouette in Hyderabad?",
    answer:
      "Yes. We stock Silhouette Austria ultra-light rimless titanium frames, known worldwide as the lightest spectacles on earth, customized with exact lens shapes and prescription powers.",
  },
  {
    question: "What is the price range of luxury designer frames in Hyderabad?",
    answer:
      "Designer optical frames range from approximately ₹6,500 to ₹45,000+ depending on the brand house, titanium or acetate craftsmanship, and limited-edition releases.",
  },
  {
    question: "Which designer frames are recommended for small or narrow face shapes?",
    answer:
      "Brands like Silhouette, Prada Milano, and Ray-Ban offer specialized narrow and Asian-fit nasal bridge geometries. Our optical consultants provide personalized face-shape styling sessions in-store.",
  },
  {
    question: "Can I get polarized prescription lenses fitted into designer sunglasses?",
    answer:
      "Yes. We fit custom prescription polarized lenses (including Maui Jim PolarizedPlus2® technology and ZEISS Skylet) into designer sunglass frames from Prada, Tom Ford, and Ray-Ban.",
  },
  {
    question: "Do you carry Ray-Ban Meta AI smart glasses in your luxury stores?",
    answer:
      "Yes. Ray-Ban Meta Wayfarer and Headliner smart glasses are available for live in-store demos and custom prescription lens fitting at KPHB, Nizampet, and Bowenpally.",
  },
  {
    question: "What warranty comes with luxury designer eyewear?",
    answer:
      "All designer frames carry a 1-year to 2-year official manufacturer warranty against manufacturing defects, alongside Clear Sight's complimentary lifetime frame maintenance and realignment service.",
  },
  {
    question: "Do I need an appointment to try designer frames at Clear Sight?",
    answer:
      "Walk-ins are welcome daily between 9:00 AM and 9:30 PM across all three stores. You can also book a priority optical consultation online or via WhatsApp.",
  },
  {
    question: "Which store location in Hyderabad has the largest luxury collection?",
    answer:
      "Our flagship KPHB studio (Padmaja Complex JNTU Road) features our broadest boutique showroom display, while our Nizampet and Bowenpally studios house curated luxury edits.",
  },
  {
    question: "Do you provide complimentary frame adjustment and fitting services?",
    answer:
      "Yes. We provide ultrasonic cleaning, nose pad replacements, screw tightens, and custom temple adjustments for all designer glasses bought at Clear Sight Opticians.",
  },
];

const LUXURY_HOUSES = [
  { name: "Prada Milano & Linea Rossa", tag: "Italian Luxury", desc: "Avant-garde Italian styling, iconic Symbole temples, and high-performance sport-luxury frames." },
  { name: "Ray-Ban & Ray-Ban Meta", tag: "American Icon", desc: "Wayfarer, Aviator, Clubmaster, and hands-free AI smart eyewear equipped with 12MP cameras." },
  { name: "Oakley & Oakley Meta", tag: "Sport & Lifestyle", desc: "Prizm™ lens optics, O Matter™ durable frames, and Meta HSTN smart lifestyle eyewear." },
  { name: "Silhouette Austria", tag: "Rimless Craftsmanship", desc: "Ultra-lightweight high-tech titanium frames engineered for weightless all-day comfort." },
  { name: "Montblanc", tag: "German Heritage", desc: "Refined business-class eyewear featuring gold-plated details and classic double-bridge accents." },
  { name: "Maui Jim", tag: "Polarized Optics", desc: "Hawaii-born sunglasses with patented PolarizedPlus2® color, clarity, and glare elimination." },
];

function DesignerEyewearPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <Gem className="size-3.5" /> Curated Eyewear Houses · Hyderabad
              </span>
              <h1
                aria-label="Luxury & Designer Eyewear in Hyderabad | Prada, Tom Ford, Ray-Ban at Clear Sight"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Luxury &amp; designer <span className="font-serif italic font-medium text-electric">eyewear</span> in Hyderabad.
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Discover curated spectacle frames and luxury sunglasses from the world's finest optical houses. Authorized retailer for Prada, Ray-Ban, Oakley, Montblanc, Silhouette, and Maui Jim—fitted with precision ZEISS optics at Clear Sight Opticians.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/brands"
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  View All Brands <ArrowUpRight className="size-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  <CalendarCheck className="size-4" /> Styling Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-ink p-8 text-white text-center flex flex-col items-center justify-center min-h-[340px]">
                  <Sparkles className="size-10 text-electric mb-4" />
                  <p className="text-2xl font-bold tracking-tight">Hand-Selected Atelier Edit</p>
                  <p className="text-xs text-white/70 mt-2 max-w-xs">Italian luxury, Austrian titanium &amp; AI-enabled smart eyewear stocked across KPHB, Nizampet &amp; Bowenpally.</p>
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
              Where to buy luxury designer eyewear in Hyderabad?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Clear Sight Opticians is an authorized luxury optical boutique in Hyderabad stocking 100% original designer frames from Prada, Ray-Ban, Oakley, Montblanc, Silhouette, Maui Jim, Tom Ford, and Burberry. Located in Kukatpally (KPHB JNTU Road), Nizampet, and Bowenpally, Clear Sight pairs designer frames with certified ZEISS digital refraction and custom prescription lens fitting.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Luxury Designer Models Grid ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-12">
            <div>
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Boutique Selection</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
                Curated luxury <span className="font-serif italic font-medium text-electric">designer frames.</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                Inspect luxury optical models from Prada, Montblanc, Silhouette, Maui Jim, Ray-Ban, and Oakley. Click any card to view variants and inquire.
              </p>
            </div>
            <Link
              to="/brands"
              className="text-sm font-bold border-b-2 border-electric pb-1 tracking-[0.2em] uppercase w-fit"
            >
              Explore All 27 Houses
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryModels.map((item, i) => (
              <Reveal key={item.model.model} delay={i * 0.05}>
                <ModelCard m={item.model} index={i} brandName={item.brandName} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Featured Maisons</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3">
              World-class optical <span className="font-serif italic font-medium text-electric">craftsmanship.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LUXURY_HOUSES.map((h, i) => (
              <Reveal key={h.name} delay={i * 0.05}>
                <div className="bg-secondary/60 border border-border rounded-3xl p-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-electric bg-electric/10 px-3 py-1 rounded-full border border-electric/20 inline-block mb-4">
                      {h.tag}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">{h.name}</h3>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{h.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground">100% Genuine</span>
                    <ArrowUpRight className="size-4 text-electric" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Luxury FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {DESIGNER_FAQS.map((faq) => (
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Boutique Visit</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Experience luxury eyewear in Hyderabad.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Visit our KPHB, Nizampet, or Bowenpally boutique studios for personalized frame styling and certified eye tests.
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
                <CalendarCheck className="size-4" /> Book Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="Frame styling"
      />
    </div>
  );
}
