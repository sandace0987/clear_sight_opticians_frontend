import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, Sparkles, Eye } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";

export const Route = createFileRoute("/contact-lenses-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Contact Lenses in Hyderabad | Acuvue, Alcon & CooperVision | Clear Sight",
      description:
        "Buy daily, monthly & toric prescription contact lenses in Hyderabad. Professional contact lens trial fitting & astigmatism consultations at KPHB, Nizampet & Bowenpally.",
      path: "/contact-lenses-hyderabad",
      type: "product",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact Lenses Hyderabad", path: "/contact-lenses-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Prescription Soft Contact Lenses (Daily, Monthly, Toric & Multifocal)",
          image: `${SITE_URL}/clear-sight-logo.avif`,
          description:
            "Authorized supplier of Acuvue, CooperVision, Bausch & Lomb, and Alcon contact lenses in Hyderabad with professional optometrist diagnostic fitting.",
          brand: { "@type": "Brand", name: "CooperVision / Acuvue / Alcon" },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "850",
            highPrice: "4500",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: { "@type": "OpticalBusiness", name: "Clear Sight Opticians" },
          },
        },
        faqSchema(CONTACT_LENS_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: ContactLensesPage,
});

const CONTACT_LENS_FAQS = [
  {
    question: "Which contact lens brands are available at Clear Sight Opticians in Hyderabad?",
    answer:
      "We stock authentic soft contact lenses from leading global eye care manufacturers: Johnson & Johnson Acuvue (Acuvue Oasys, 1-Day Moist), CooperVision (Biofinity, Clariti 1-Day), Alcon (Dailies Total1, Air Optix Aqua), and Bausch & Lomb (Ultra, Biotrue ONEday).",
  },
  {
    question: "Can I get a professional contact lens fitting and trial at Clear Sight?",
    answer:
      "Yes. Our optometrists perform corneal curvature mapping (keratometry), tear film assessment, base curve calculations, and provide trial lenses so you can test comfort before purchasing a full box.",
  },
  {
    question: "Do you offer contact lenses for astigmatism (toric lenses)?",
    answer:
      "Yes. We stock precision toric contact lenses for astigmatism correction from Acuvue Oasys for Astigmatism, CooperVision Biofinity Toric, and Alcon Air Optix for Astigmatism.",
  },
  {
    question: "Are multifocal contact lenses available for presbyopia (reading power)?",
    answer:
      "Yes. We fit multifocal contact lenses that allow you to see clearly at distance, intermediate digital screens, and close reading distances without needing bifocal glasses.",
  },
  {
    question: "What is the price of contact lenses in Hyderabad?",
    answer:
      "Contact lens boxes start from ₹850 onwards for standard monthly disposal lenses and up to ₹3,800+ for premium daily disposable silicon hydrogel boxes and custom toric lenses.",
  },
  {
    question: "Are daily disposable contact lenses better than monthly contact lenses?",
    answer:
      "Daily disposables offer maximum hygiene, convenience, and zero lens-cleaning solution requirements because you discard them each night. Monthly lenses are cost-effective but require disciplined cleaning and storage in multi-purpose contact lens solution.",
  },
  {
    question: "Can I wear contact lenses while swimming or taking a shower?",
    answer:
      "No. Water from swimming pools, tap water, and lakes contains microorganisms like Acanthamoeba that can adhere to contact lenses and cause severe corneal infections. Always remove lenses before swimming or showering.",
  },
  {
    question: "How long can I wear soft contact lenses each day?",
    answer:
      "Modern silicone hydrogel contact lenses allow high oxygen permeability and can generally be worn for 8 to 14 hours daily. Your optometrist will prescribe the safe maximum wearing schedule based on your cornea health.",
  },
  {
    question: "Do you stock colored contact lenses in Hyderabad?",
    answer:
      "Yes. We carry non-prescription and prescription powered colored contact lenses from FreshLook and Air Optix Colors in subtle natural shades like Hazel, Green, Blue, and Grey.",
  },
  {
    question: "Can I order my contact lens supply on WhatsApp and pick up at KPHB, Nizampet, or Bowenpally?",
    answer:
      "Yes! Simply text your prescription or box details to our WhatsApp number, and we will prepare your stock for express pickup or doorstep local delivery in Hyderabad.",
  },
  {
    question: "What should I do if my contact lens feels uncomfortable or dry?",
    answer:
      "Remove the lens immediately, inspect for tears or lint, rinse with fresh lens solution, and reinsert. If discomfort or redness persists, visit any Clear Sight Opticians store in Hyderabad for an optometrist corneal checkup.",
  },
  {
    question: "Can teenagers wear contact lenses safely?",
    answer:
      "Yes. Teenagers who demonstrate good hand hygiene and follow proper lens insertion, removal, and cleaning protocols can safely wear daily or monthly contact lenses for sports and daily school activities.",
  },
];

const LENS_TYPES = [
  { name: "Daily Disposables", tag: "Max Hygiene", desc: "Fresh pair every morning. Zero cleaning required. Ideal for travel, sports & sensitive eyes." },
  { name: "Monthly Disposables", tag: "Best Value", desc: "High oxygen silicone hydrogel lenses designed for 30 days of daily wear with solution care." },
  { name: "Toric (Astigmatism)", tag: "Cylinder Correction", desc: "Specialized stabilized optics that prevent lens rotation for crisp, non-blurry vision." },
  { name: "Multifocal Lenses", tag: "No Reading Glasses", desc: "Seamless focal zones allowing distance, intermediate, and near focus without glasses." },
];

function ContactLensesPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <Eye className="size-3.5" /> Professional Lens Fitting · Hyderabad
              </span>
              <h1
                aria-label="Contact Lenses in Hyderabad | Acuvue, Alcon & CooperVision at Clear Sight"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Prescription <span className="font-serif italic font-medium text-electric">contact lenses</span> in Hyderabad.
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Experience weightless freedom and clear peripheral vision. Authorized partner for Acuvue, CooperVision, Alcon, and Bausch &amp; Lomb. Get expert optometrist trial fittings for spherical, toric (astigmatism), and multifocal contact lenses in KPHB, Nizampet, and Bowenpally.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book Lens Fitting
                </button>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I'd like to order contact lenses in Hyderabad.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  Order via WhatsApp <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-ink p-8 text-white text-center flex flex-col items-center justify-center min-h-[340px]">
                  <Sparkles className="size-10 text-electric mb-4" />
                  <p className="text-2xl font-bold tracking-tight">Certified Contact Lens Clinic</p>
                  <p className="text-xs text-white/70 mt-2 max-w-xs">Acuvue, Alcon, CooperVision &amp; Bausch &amp; Lomb pre-stocked for express pickup &amp; delivery.</p>
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
              Where to buy prescription contact lenses in Hyderabad?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Clear Sight Opticians is a certified contact lens clinic in Hyderabad located in Kukatpally (KPHB JNTU Road), Nizampet, and Bowenpally. Stocking original Acuvue, CooperVision, Alcon, and Bausch &amp; Lomb daily, monthly, toric, and colored contact lenses starting at ₹850 per box. Clear Sight provides optometrist diagnostic corneal mapping, trial lens fittings, and local home delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ── Lens Types Grid ── */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Lens Categories</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3">
              Tailored to your <span className="font-serif italic font-medium text-electric">lifestyle.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LENS_TYPES.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <div className="bg-secondary/60 border border-border rounded-3xl p-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-electric bg-electric/10 px-3 py-1 rounded-full border border-electric/20 inline-block mb-4">
                      {t.tag}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{t.name}</h3>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{t.desc}</p>
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
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Contact Lens FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {CONTACT_LENS_FAQS.map((faq) => (
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Trial Consultation</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Book your contact lens trial in Hyderabad.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Visit KPHB, Nizampet, or Bowenpally for corneal curvature measurement and trial lens fitting.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="bg-electric text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <CalendarCheck className="size-4" /> Book Fitting
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="Contact lens fitting"
      />
    </div>
  );
}
