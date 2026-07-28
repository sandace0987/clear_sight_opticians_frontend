import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, Sparkles, Award } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ModelCard } from "@/components/site/ModelCard";
import { BRANDS } from "@/lib/brand-catalog";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";
import rayBanLogoSvg from "@/assets/brands/ray-ban-logo.svg";

const rayBanData = BRANDS.find((b) => b.slug === "ray-ban");
const rayBanModels = rayBanData?.models || [];

export const Route = createFileRoute("/ray-ban-glasses-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Ray-Ban Glasses & Sunglasses in Hyderabad | Clear Sight Opticians",
      description:
        "Shop authentic Ray-Ban prescription glasses, Wayfarer, Aviator, Clubmaster & Meta AI frames in Hyderabad. 100% genuine frames with ZEISS precision lenses at KPHB, Nizampet & Bowenpally.",
      path: "/ray-ban-glasses-hyderabad",
      type: "product",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Brands", path: "/brands" },
          { name: "Ray-Ban", path: "/brands/ray-ban" },
          { name: "Ray-Ban Glasses Hyderabad", path: "/ray-ban-glasses-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Authentic Ray-Ban Prescription Glasses & Sunglasses",
          image: `${SITE_URL}/clear-sight-logo.avif`,
          description:
            "Curated collection of 100% original Ray-Ban optical frames and sunglasses in Hyderabad. Custom fitted with ZEISS single-vision, progressive & computer lenses.",
          brand: { "@type": "Brand", name: "Ray-Ban" },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "6500",
            highPrice: "49999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: { "@type": "OpticalBusiness", name: "Clear Sight Opticians" },
          },
        },
        faqSchema(RAYBAN_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: RayBanGlassesPage,
});

const RAYBAN_FAQS = [
  {
    question: "Are all Ray-Ban frames at Clear Sight Opticians 100% authentic?",
    answer:
      "Yes. Clear Sight Opticians is an authorized Luxottica retail partner in Hyderabad. Every Ray-Ban frame and sunglass carries the original brand barcode, serial numbers, microfiber cleaning cloth, certificate, and manufacturer warranty.",
  },
  {
    question: "Can I get my prescription lenses fitted into Ray-Ban frames?",
    answer:
      "Yes. We specialize in fitting high-index single vision, progressive, transition, and blue-cut computer lenses into all Ray-Ban optical and sunglass frames, including iconic models like Wayfarer, Aviator, and Clubmaster.",
  },
  {
    question: "Which popular Ray-Ban models are stocked in your Hyderabad stores?",
    answer:
      "We stock the complete Ray-Ban collection: Wayfarer (RB2140), Aviator (RB3025), Clubmaster (RB3016), Erika (RB4171), Round Metal (RB3447), Justin (RB4165), as well as the new Ray-Ban Meta AI smart glasses collection.",
  },
  {
    question: "What is the starting price for Ray-Ban glasses in Hyderabad?",
    answer:
      "Original Ray-Ban optical frames start from approximately ₹6,500 onwards, with premium sunglasses starting around ₹7,800. Seasonal offers and bundled lens pricing are available in-store.",
  },
  {
    question: "Do you offer Ray-Ban sunglasses with prescription lenses?",
    answer:
      "Yes. We fit custom polarized, tinted, and mirror-coated prescription lenses into authentic Ray-Ban sunglass frames so you get 100% UV protection and perfect vision.",
  },
  {
    question: "How do I check if my Ray-Ban glasses are original?",
    answer:
      "Authentic Ray-Ban glasses feature an etched 'RB' or 'Ray-Ban' logo on the left lens, high-quality metal barrel hinges, precise temple text (model number, size, color code), and come with the official Luxottica leather case.",
  },
  {
    question: "Can I try Ray-Ban frames at the KPHB, Nizampet, or Bowenpally store?",
    answer:
      "Yes! Our full Ray-Ban inventory is distributed across all three Hyderabad stores: KPHB (Padmaja Complex JNTU Rd), Nizampet (Blooming Dale Rd), and Bowenpally (Sikh Rd).",
  },
  {
    question: "Do you stock Ray-Ban Meta smart glasses in Hyderabad?",
    answer:
      "Yes. We carry the latest Ray-Ban Meta Gen 2 smart glasses in Wayfarer and Headliner styles with live hands-free camera and audio demos.",
  },
  {
    question: "What lens coatings do you recommend for Ray-Ban optical frames?",
    answer:
      "We recommend pairing Ray-Ban optical frames with ZEISS DuraVision Platinum anti-reflective coating or ZEISS BlueGuard for digital screen anti-glare protection.",
  },
  {
    question: "How long does it take to prepare prescription Ray-Ban glasses?",
    answer:
      "Standard single-vision lenses are ready in 24 to 48 hours. Custom progressive or high-cylinder ZEISS lenses take 3 to 5 business days.",
  },
  {
    question: "Do you provide genuine replacement nose pads or frame repairs for Ray-Ban?",
    answer:
      "Yes. As an authorized optical service provider, we assist with genuine Ray-Ban frame adjustments, screw tightens, nose pad replacements, and ultrasonic frame cleaning.",
  },
  {
    question: "Can I book a frame styling session with an optometrist?",
    answer:
      "Yes. Walk into any Clear Sight store or schedule an appointment online to get expert guidance on choosing the right Ray-Ban shape for your face structure.",
  },
];

const RAYBAN_ICONS = [
  { name: "Wayfarer (RB2140)", tag: "Timeless Icon", desc: "The definitive square silhouette crafted in premium acetate. Available in classic G-15 green, tortoiseshell & Meta AI." },
  { name: "Aviator (RB3025)", tag: "Aviation Classic", desc: "Originally designed for US aviators in 1937. Ultra-light teardrop metal frame with double bridge." },
  { name: "Clubmaster (RB3016)", tag: "Retro Intellectual", desc: "Classic browline design combining polished acetate upper rims with gold or silver metal unders." },
  { name: "Erika & Round Metal", tag: "Modern Lifestyle", desc: "Soft round curves and rubberized finishes for comfortable everyday casual wear." },
];

function RayBanGlassesPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <ShieldCheck className="size-3.5" /> Authorized Luxottica Partner · 100% Genuine
              </span>
              <h1
                aria-label="Ray-Ban Glasses & Sunglasses in Hyderabad | Clear Sight Opticians"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Ray-Ban glasses &amp; <span className="font-serif italic font-medium text-electric">sunglasses</span> in Hyderabad.
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Explore the complete Ray-Ban eyewear collection in Hyderabad at Clear Sight Opticians. From Wayfarers and Aviators to Ray-Ban Meta AI smart glasses, get authentic frames fitted with precision ZEISS prescription lenses.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/brands/$brand"
                  params={{ brand: "ray-ban" }}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  Explore Collection <ArrowUpRight className="size-4" />
                </Link>
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  <CalendarCheck className="size-4" /> Book Consultation
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-ink p-8 text-white text-center flex flex-col items-center justify-center min-h-[340px]">
                  <img src={rayBanLogoSvg} alt="Ray-Ban Genuine Logo" className="h-16 w-auto brightness-0 invert mb-6" />
                  <p className="text-xl font-bold tracking-tight">Authentic American Icon</p>
                  <p className="text-xs text-white/70 mt-2 max-w-xs">Wayfarer, Aviator, Clubmaster &amp; Meta AI collections stocked at KPHB, Nizampet &amp; Bowenpally.</p>
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
              Where to buy genuine Ray-Ban glasses in Hyderabad?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Clear Sight Opticians is an authorized retailer for authentic Ray-Ban optical frames and sunglasses in Hyderabad, operating stores in Kukatpally (KPHB JNTU Road), Nizampet, and Bowenpally. Every frame carries an official Luxottica warranty and serial number, starting from ₹6,500. Clear Sight fits custom ZEISS prescription lenses, single-vision anti-glare coatings, and progressive lenses tailored to your power.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Ray-Ban Models Grid ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-12">
            <div>
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">In-Stock Catalog</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
                Popular Ray-Ban <span className="font-serif italic font-medium text-electric">frames &amp; sunglasses.</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                Explore popular Ray-Ban spectacle frames available in Hyderabad. Click any model to view colorways, dimensions, and enquire.
              </p>
            </div>
            <Link
              to="/brands/$brand"
              params={{ brand: "ray-ban" }}
              className="text-sm font-bold border-b-2 border-electric pb-1 tracking-[0.2em] uppercase w-fit"
            >
              Full Ray-Ban Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rayBanModels.slice(0, 6).map((m, i) => (
              <Reveal key={m.model} delay={i * 0.05}>
                <ModelCard m={m} index={i} brandName="Ray-Ban" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Iconic Silhouettes</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3">
              The legendary Ray-Ban <span className="font-serif italic font-medium text-electric">hallmarks.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RAYBAN_ICONS.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.05}>
                <div className="bg-secondary/60 border border-border rounded-3xl p-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-electric bg-electric/10 px-3 py-1 rounded-full border border-electric/20 inline-block mb-4">
                      {item.tag}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{item.desc}</p>
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
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Ray-Ban FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {RAYBAN_FAQS.map((faq) => (
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Try Them On</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Find your Ray-Ban style in Hyderabad.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Visit KPHB, Nizampet, or Bowenpally to try genuine frames and get custom ZEISS prescription lenses.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/brands/$brand"
                params={{ brand: "ray-ban" }}
                className="bg-electric text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                View Ray-Ban Models
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
        defaultReason="Ray-Ban styling"
      />
    </div>
  );
}
