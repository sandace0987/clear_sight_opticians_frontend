import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, HelpCircle, Eye, Sparkles, BookOpen } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";

export const Route = createFileRoute("/what-are-progressive-lenses")({
  head: () =>
    createSeoHead({
      title: "What Are Progressive Lenses? Complete Guide, Types & Price in India",
      description:
        "Learn how progressive no-line multifocal lenses work, progressive vs bifocal differences, adaptation tips, and ZEISS progressive lens prices at Clear Sight Opticians Hyderabad.",
      path: "/what-are-progressive-lenses",
      type: "website",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "What are Progressive Lenses", path: "/what-are-progressive-lenses" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "What Are Progressive Lenses? Complete Guide, Types, Adaptation & Price in India",
          description:
            "Comprehensive clinical guide explaining progressive lens optics, focal zones, progressive vs bifocal differences, adaptation tips, and customization at Clear Sight Opticians.",
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
          mainEntityOfPage: `${SITE_URL}/what-are-progressive-lenses`,
        },
        faqSchema(PROGRESSIVE_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: ProgressiveLensesGuidePage,
});

const PROGRESSIVE_FAQS = [
  {
    question: "What are progressive lenses and how do they work?",
    answer:
      "Progressive lenses (also called no-line multifocals) are optical spectacle lenses designed with a seamless gradient of focal powers. The top section corrects distance vision (driving/TV), the middle corridor provides intermediate focus (computer monitors/car dashboard), and the bottom area gives clear close-up vision (reading/mobile phones), eliminating visible bifocal lines.",
  },
  {
    question: "What is the difference between progressive lenses and bifocal lenses?",
    answer:
      "Bifocal lenses have a visible horizontal dividing line separating distance and reading areas with no intermediate zone. Progressive lenses have zero visible lines, offering a smooth, continuous transition across distance, intermediate, and near viewing distances.",
  },
  {
    question: "Who needs progressive lenses?",
    answer:
      "Anyone over age 40 experiencing presbyopia—the natural gradual loss of the eye's ability to focus on nearby objects—who wants to see clearly at all distances without carrying separate reading glasses or wearing bifocals.",
  },
  {
    question: "How long does it take to adapt to progressive lenses?",
    answer:
      "Most wearers adapt within 3 to 7 days. High-precision digital progressive lenses (like ZEISS SmartLife Progressive) customized with digital centration scanning significantly reduce adaptation time down to 1–2 days.",
  },
  {
    question: "Why do some people experience blurriness or swim effect with cheap progressive lenses?",
    answer:
      "Entry-level progressive lenses have narrow intermediate corridors and higher soft peripheral distortion. Customized digital progressives mapped with ZEISS i.Terminal 2 measure your exact pupil distance, pantoscopic tilt, and frame wrap, eliminating peripheral swim distortion.",
  },
  {
    question: "What is the price of progressive lenses in Hyderabad, India?",
    answer:
      "Standard progressive lenses start from approximately ₹2,500 per pair, while customized digital progressive series from ZEISS, Essilor, and Hoya range between ₹6,500 to ₹35,000+ depending on index, coatings, and i.Scription personalization.",
  },
  {
    question: "Can I get progressive lenses with blue cut anti-glare coatings?",
    answer:
      "Yes. Progressive lenses can be combined with ZEISS BlueGuard, Essilor Crizal Prevencia, or photochromic Transitions® coatings for complete UV and screen blue-light protection.",
  },
  {
    question: "What are occupational or office progressive lenses?",
    answer:
      "Office progressive lenses (like ZEISS Officelens) are customized specifically for desktop environments, providing extra-wide intermediate and near fields of vision for IT professionals and doctors working between monitors and paperwork.",
  },
  {
    question: "How should I move my eyes when wearing progressive lenses?",
    answer:
      "Turn your head slightly toward what you want to view rather than looking out of the extreme lens edges. Look straight ahead for distance, drop your gaze slightly for computer screens, and lower your eyes further to read books or phones.",
  },
  {
    question: "Can any spectacle frame fit progressive lenses?",
    answer:
      "Progressive lenses require a minimum frame height ('B dimension') of 28mm to 30mm so that the distance, intermediate, and reading zones fit comfortably within the lens boundary.",
  },
  {
    question: "Does Clear Sight Opticians offer non-adaptation optical guarantees?",
    answer:
      "Yes. Clear Sight Opticians provides a non-adaptation exchange guarantee on premium progressive lenses fitted at our KPHB, Nizampet, and Bowenpally studios.",
  },
  {
    question: "How do I book a progressive lens consultation at Clear Sight?",
    answer:
      "Book an appointment online or via WhatsApp. Our optometrists will perform a 3D ZEISS refraction, assess your reading distance habits, and take digital 3D centration scans.",
  },
];

function ProgressiveLensesGuidePage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <BookOpen className="size-3.5" /> Clinical Guide · Presbyopia &amp; Multifocals
              </span>
              <h1
                aria-label="What Are Progressive Lenses? Complete Guide, Types & Price in India"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                What are <span className="font-serif italic font-medium text-electric">progressive lenses?</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                The definitive clinical guide to no-line multifocal spectacle lenses. Understand how progressive lenses work, progressive vs. bifocal differences, adaptation tips, and customized ZEISS progressive optics at Clear Sight Opticians Hyderabad.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book Progressive Consultation
                </button>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I'd like to ask about progressive lens options and prices.")}`}
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
                  <Eye className="size-10 text-electric mb-4" />
                  <p className="text-2xl font-bold tracking-tight">Seamless Multifocal Vision</p>
                  <p className="text-xs text-white/70 mt-2 max-w-xs">No lines. No image jump. ZEISS SmartLife Progressive customized with 0.1mm digital centration.</p>
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
              Direct Answer / AEO Definition
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
              What are progressive lenses?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Progressive lenses are no-line multifocal spectacle lenses designed for individuals over age 40 experiencing presbyopia. They feature a smooth, invisible power gradient: the upper portion corrects distance vision, the central corridor provides intermediate focus (computer screens/car dashboards), and the lower portion enables clear close-up reading. Unlike bifocals, progressives have no visible lines or sudden image jumps.
            </p>
          </div>
        </div>
      </section>

      {/* ── Progressive vs Bifocal vs Single Vision Table ── */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Comparison Matrix</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mt-2">
              Progressive vs. Bifocal vs. Single Vision
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-background rounded-2xl overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-4 font-bold">Feature</th>
                  <th className="p-4 font-bold">Single Vision</th>
                  <th className="p-4 font-bold">Bifocal Lenses</th>
                  <th className="p-4 font-bold text-electric">Progressive Lenses</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-semibold">Visible Lines</td>
                  <td className="p-4 text-muted-foreground">None</td>
                  <td className="p-4 text-muted-foreground">Visible half-moon line</td>
                  <td className="p-4 text-foreground font-semibold">100% Invisible / Seamless</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Intermediate Vision (Computer)</td>
                  <td className="p-4 text-muted-foreground">Blurry if set for distance</td>
                  <td className="p-4 text-muted-foreground">Blurry (No intermediate zone)</td>
                  <td className="p-4 text-foreground font-semibold">Crisp intermediate focus</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Image Jump</td>
                  <td className="p-4 text-muted-foreground">None</td>
                  <td className="p-4 text-muted-foreground">Sudden shift at line boundary</td>
                  <td className="p-4 text-foreground font-semibold">Smooth focal transition</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Cosmetic Youthfulness</td>
                  <td className="p-4 text-muted-foreground">Standard</td>
                  <td className="p-4 text-muted-foreground">Reveals age (reading segment line)</td>
                  <td className="p-4 text-foreground font-semibold">Looks identical to single vision</td>
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
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Progressive Guide FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {PROGRESSIVE_FAQS.map((faq) => (
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Get Fitted</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Experience custom progressive clarity.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Visit KPHB, Nizampet, or Bowenpally for ZEISS digital centration scanning and progressive lens trials.
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
        defaultReason="Progressive lens consultation"
      />
    </div>
  );
}
