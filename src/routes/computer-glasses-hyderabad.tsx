import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, Laptop, Monitor, Sparkles } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";

export const Route = createFileRoute("/computer-glasses-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Blue Cut Computer Glasses in Hyderabad | Anti-Glare Eye Protection",
      description:
        "Protect your eyes from digital eye strain with blue light blocking computer glasses in Hyderabad. Custom anti-glare prescription lenses from ZEISS & Essilor for IT professionals & kids.",
      path: "/computer-glasses-hyderabad",
      type: "product",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Computer Glasses Hyderabad", path: "/computer-glasses-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Blue Cut Anti-Glare Computer Glasses (Prescription & Zero-Power)",
          image: `${SITE_URL}/clear-sight-logo.avif`,
          description:
            "Custom blue light blocking computer lenses engineered for IT professionals, remote workers, and students in Hyderabad. Reduces digital eye strain, dryness, and headaches.",
          brand: { "@type": "Brand", name: "ZEISS BlueGuard / Crizal Prevencia" },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "1200",
            highPrice: "18500",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: { "@type": "OpticalBusiness", name: "Clear Sight Opticians" },
          },
        },
        faqSchema(COMPUTER_GLASSES_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: ComputerGlassesPage,
});

const COMPUTER_GLASSES_FAQS = [
  {
    question: "What are computer glasses and how do blue cut lenses work?",
    answer:
      "Computer glasses are specialized spectacle lenses coated with blue-light filtering technology (such as ZEISS BlueGuard or Crizal Prevencia) and anti-reflective AR coatings. They block high-energy visible (HEV) blue light emitted between 400nm–455nm by laptops, monitors, smartphones, and LED lighting, eliminating glare and preventing retinal fatigue.",
  },
  {
    question: "Can I get computer glasses without any prescription power (zero-power / plain blue cut)?",
    answer:
      "Yes! We provide zero-power blue cut computer glasses for individuals who have 20/20 vision but suffer from eye strain, burning sensation, or headaches after long screen hours at work.",
  },
  {
    question: "Which blue light lens brands are recommended at Clear Sight Opticians?",
    answer:
      "We fit leading high-index blue light filtering lenses: ZEISS BlueGuard (integrated material protection without yellow tint), Essilor Crizal Prevencia, Hoya BlueControl, and Essilor Crizal Sapphire HR anti-glare coatings.",
  },
  {
    question: "What is the price of blue cut computer glasses in Hyderabad?",
    answer:
      "Computer glasses start from ₹1,200 onwards for standard zero-power blue cut packages, with premium ZEISS BlueGuard and Essilor Crizal prescription lenses ranging between ₹2,800 to ₹12,500.",
  },
  {
    question: "What are the common symptoms of Computer Vision Syndrome (CVS)?",
    answer:
      "Key symptoms include dry eyes, eye fatigue, blurred vision, burning or itching eyes, neck and shoulder stiffness, frequent headaches, and difficulty refocusing between screen and paper.",
  },
  {
    question: "Are computer glasses effective for IT professionals working 8-12 hours daily?",
    answer:
      "Yes! IT professionals in Hitec City, Gachibowli, and Kukatpally report immediate relief from dry eyes, reduced glare reflection, improved sleep cycles, and sharper text contrast when wearing custom anti-glare computer lenses.",
  },
  {
    question: "Can children and students wear blue light blocking computer glasses?",
    answer:
      "Yes. With online learning and tablet usage, children's eyes absorb more blue light due to clearer crystalline lenses. We fit lightweight, impact-resistant kids' computer frames with ZEISS SmartLife Young blue protection.",
  },
  {
    question: "Do blue light computer glasses change color perception or look yellow?",
    answer:
      "Older blue blocker coatings produced a yellowish tint. Modern ZEISS BlueGuard technology integrates blue light blocking directly into the lens polymer material, leaving the lens virtually crystal clear with natural color perception.",
  },
  {
    question: "Can progressive lenses be customized with computer blue cut coatings?",
    answer:
      "Yes. We specialize in tailoring progressive and occupational office lenses (like ZEISS Officelens) with integrated blue cut and anti-reflective coatings for seamless transition between monitor and desk paperwork.",
  },
  {
    question: "How quickly can I get my computer glasses ready at KPHB, Nizampet, or Bowenpally?",
    answer:
      "Standard zero-power and single-vision blue cut computer glasses are prepared within 24 hours. Custom ZEISS progressive computer lenses take 3 to 4 business days.",
  },
  {
    question: "Do computer glasses help improve night sleep quality?",
    answer:
      "Yes. Exposure to screen blue light at night suppresses melatonin secretion. Wearing blue cut glasses in the evening helps preserve your body's circadian rhythm and improves sleep onset.",
  },
  {
    question: "Why choose Clear Sight Opticians for computer glasses in Hyderabad?",
    answer:
      "Our optometrists perform a visual ergonomics analysis to measure your exact screen distance, prescribing anti-fatigue optics tailored to your desk setup at our KPHB, Nizampet, and Bowenpally studios.",
  },
];

const COMPUTER_BENEFITS = [
  { icon: Monitor, title: "Eliminate Screen Glare", desc: "Anti-reflective AR multi-coatings remove distracting reflections from monitors and overhead office lights." },
  { icon: Laptop, title: "Block HEV Blue Light", desc: "Filters high-energy 400nm-455nm blue wavelengths emitted by smartphones, laptops & LED displays." },
  { icon: ShieldCheck, title: "Reduce Dry Eyes & Strain", desc: "Micro-assisted focal power relaxes ciliary eye muscles during intensive 8+ hour coding or desk work." },
  { icon: Sparkles, title: "Crystal Clear Transparency", desc: "Next-gen ZEISS BlueGuard tech avoids unsightly yellow lens tints while protecting your retinas." },
];

function ComputerGlassesPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <Laptop className="size-3.5" /> Digital Eye Relief · IT Professional Optics
              </span>
              <h1
                aria-label="Blue Cut Computer Glasses in Hyderabad | Anti-Glare Protection at Clear Sight"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Blue cut <span className="font-serif italic font-medium text-electric">computer glasses</span> in Hyderabad.
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Protect your eyes from digital fatigue, screen glare, and headaches. Custom blue light blocking computer lenses from ZEISS BlueGuard and Essilor Crizal fitted for IT professionals, remote workers, and students at Clear Sight Opticians (KPHB, Nizampet, Bowenpally).
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book Ergonomic Test
                </button>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I'd like to check blue cut computer glasses options.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp Inquiry <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-ink p-8 text-white text-center flex flex-col items-center justify-center min-h-[340px]">
                  <Monitor className="size-10 text-electric mb-4" />
                  <p className="text-2xl font-bold tracking-tight">Zero-Power &amp; Prescription Blue Cut</p>
                  <p className="text-xs text-white/70 mt-2 max-w-xs">ZEISS BlueGuard &amp; Crizal Prevencia lenses pre-stocked at KPHB, Nizampet &amp; Bowenpally.</p>
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
              Where to get blue cut computer glasses in Hyderabad?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Clear Sight Opticians provides custom blue light blocking computer glasses in Hyderabad across three stores: Kukatpally (KPHB JNTU Road), Nizampet, and Bowenpally. Available in zero-power and prescription power starting at ₹1,200. Clear Sight fits premium ZEISS BlueGuard and Essilor Crizal anti-reflective optics engineered to eliminate screen glare, dry eyes, and headaches for IT professionals working long screen hours.
            </p>
          </div>
        </div>
      </section>

      {/* ── Benefits Grid ── */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Protection Tech</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3">
              Designed for your <span className="font-serif italic font-medium text-electric">digital work.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPUTER_BENEFITS.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.05}>
                <div className="bg-secondary/60 border border-border rounded-3xl p-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="size-11 rounded-2xl bg-electric/10 border border-electric/20 grid place-items-center mb-6">
                      <b.icon className="size-5 text-electric" />
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{b.title}</h3>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{b.desc}</p>
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
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Computer Glasses FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {COMPUTER_GLASSES_FAQS.map((faq) => (
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Screen Comfort</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Relieve digital eye strain today.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Visit KPHB, Nizampet, or Bowenpally to test blue cut lenses and pick your lightweight computer frame.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="bg-electric text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors inline-flex items-center gap-2 shadow-lg"
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
        defaultReason="Computer glasses consultation"
      />
    </div>
  );
}
