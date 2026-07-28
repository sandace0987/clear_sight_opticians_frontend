import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, Clock, Car, Star, Award } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { StoreImageCarousel } from "@/components/site/StoreImageCarousel";
import { ModelCard } from "@/components/site/ModelCard";
import { BRANDS, type GlassItem } from "@/lib/brand-catalog";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";
import kphb1 from "@/assets/miscellaneous/kphb-interior-1.webp";
import kphb2 from "@/assets/miscellaneous/kphb-interior-2.webp";

const kphbBestSellers: { model: GlassItem; brandName: string }[] = [];
["ray-ban", "oakley", "prada"].forEach((slug) => {
  const b = BRANDS.find((brand) => brand.slug === slug);
  if (b && b.models[0]) {
    kphbBestSellers.push({ model: b.models[0], brandName: b.name });
  }
});

export const Route = createFileRoute("/optician-kphb")({
  head: () =>
    createSeoHead({
      title: "Best Optician in KPHB Kukatpally | Clear Sight Flagship Store",
      description:
        "Looking for the best optician in KPHB Colony, Kukatpally? Visit Clear Sight Opticians at Padmaja Complex JNTU Road. ZEISS 3D eye test, Ray-Ban Meta AI, designer frames & contact lenses.",
      path: "/optician-kphb",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Stores", path: "/stores" },
          { name: "Optician in KPHB", path: "/optician-kphb" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": ["OpticalBusiness", "LocalBusiness"],
          "@id": `${SITE_URL}/optician-kphb#store`,
          name: "Clear Sight Opticians - Kukatpally (KPHB) Flagship",
          description:
            "Flagship optical store in KPHB Colony Kukatpally. Certified ZEISS 3D vision testing, Ray-Ban Meta AI smart glasses demos, luxury designer frames, and contact lens center.",
          image: `${SITE_URL}/clear-sight-logo.avif`,
          url: `${SITE_URL}/optician-kphb`,
          telephone: `+${CONTACT_PHONE_RAW}`,
          priceRange: "$$",
          currenciesAccepted: "INR",
          paymentAccepted: "Cash, Card, UPI",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB",
            addressLocality: "Hyderabad",
            addressRegion: "Telangana",
            postalCode: "500085",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 17.493921,
            longitude: 78.397634,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "21:30",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "97",
            bestRating: "5",
            worstRating: "1",
          },
        },
        faqSchema(KPHB_FAQS),
      ],
    }),
  component: OpticianKphbPage,
});

const KPHB_FAQS = [
  {
    question: "Where is Clear Sight Opticians located in KPHB Kukatpally?",
    answer:
      "Our flagship studio is located at Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB Colony, Kukatpally, Hyderabad - 500085. We are right on main JNTU Road, easily accessible from JNTU Metro Station.",
  },
  {
    question: "What optical services are provided at the KPHB store?",
    answer:
      "Our KPHB flagship offers comprehensive ZEISS 3D eye testing, digital refraction, Ray-Ban & Oakley Meta smart glasses live demos, designer frame fittings (Prada, Montblanc, Silhouette), contact lens trials, computer blue-cut glasses, and express spectacle repairs.",
  },
  {
    question: "What are the store operating hours for Clear Sight Opticians KPHB?",
    answer:
      "Clear Sight Opticians KPHB is open 7 days a week, Monday through Sunday, from 9:00 AM to 9:30 PM.",
  },
  {
    question: "Is car and bike parking available near Padmaja Complex KPHB?",
    answer:
      "Yes. Dedicated parking space is available outside Padmaja Complex along JNTU Road for both two-wheelers and four-wheelers.",
  },
  {
    question: "Do I need to book an appointment for an eye test in KPHB?",
    answer:
      "Walk-ins are always welcome. However, booking an appointment online or via WhatsApp guarantees immediate priority seating with senior optometrist Madhu A.",
  },
  {
    question: "Which nearby areas in Kukatpally does the KPHB store serve?",
    answer:
      "Our KPHB store conveniently serves residents across KPHB Phase 1 to 15, Kukatpally Housing Board, JNTU, Pragathi Nagar, Malaysian Township, Forum Sujana Mall area, Hafeezpet, and Miyapur.",
  },
  {
    question: "Can I try Ray-Ban Meta AI smart glasses at the KPHB store?",
    answer:
      "Yes! Our KPHB store features a live interactive demo zone for Ray-Ban Meta Wayfarer and Headliner smart glasses with custom prescription lens fitting.",
  },
  {
    question: "Is ZEISS 3D eye testing available at the KPHB store?",
    answer:
      "Yes. Our KPHB studio is equipped with ZEISS i.Profiler wave-front refraction and i.Terminal digital centration diagnostic equipment.",
  },
  {
    question: "What is the phone number to call Clear Sight Opticians KPHB?",
    answer: `You can reach our KPHB optical team directly at ${CONTACT_PHONE} for appointments, inventory inquiries, or prescription order updates.`,
  },
  {
    question: "How long does it take to prepare progressive glasses at KPHB?",
    answer:
      "Standard single-vision prescription glasses are prepared within 24 to 48 hours. Custom ZEISS progressive lenses take 3 to 5 business days with exact digital centration.",
  },
  {
    question: "Are payment methods like UPI, credit card, and Bajaj EMI accepted?",
    answer:
      "Yes. We accept cash, all major credit/debit cards, Google Pay, PhonePe, Paytm, and UPI payments.",
  },
  {
    question: "Why is Clear Sight rated the best optician in KPHB Kukatpally?",
    answer:
      "With over 15+ years of clinical excellence, 97+ verified 5-star Google reviews, ZEISS Vision Expert certification, and transparent pricing, Clear Sight is recognized as Kukatpally's premier optical destination.",
  },
];

function OpticianKphbPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);
  const store = STORE_LOCATIONS.find((s) => s.id === "kphb") || STORE_LOCATIONS[0];

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <Award className="size-3.5" /> Flagship Studio · KPHB Kukatpally JNTU Road
              </span>
              <h1
                aria-label="Best Optician in KPHB Kukatpally | Clear Sight Opticians Flagship"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Best optician in <span className="font-serif italic font-medium text-electric">KPHB Kukatpally.</span>
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Welcome to Clear Sight Opticians Flagship Studio at Padmaja Complex, JNTU Road, KPHB 6th Phase. Hyderabad's trusted ZEISS Certified Vision Expert for 3D eye testing, Ray-Ban Meta AI smart glasses, designer frames, and contact lenses.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book KPHB Appointment
                </button>
                <a
                  href={store.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  <MapPin className="size-4" /> Get Directions
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 text-xs font-medium text-muted-foreground">
                <div>
                  <p className="text-electric font-bold text-lg">5.0 ★★★★★</p>
                  <p className="uppercase tracking-wider text-[10px]">97+ Google Reviews</p>
                </div>
                <div>
                  <p className="text-foreground font-bold text-lg">Padmaja Complex</p>
                  <p className="uppercase tracking-wider text-[10px]">JNTU Road 6th Phase</p>
                </div>
                <div>
                  <p className="text-foreground font-bold text-lg">9 AM – 9:30 PM</p>
                  <p className="uppercase tracking-wider text-[10px]">Open All 7 Days</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                  <StoreImageCarousel images={[kphb1, kphb2]} alt="Clear Sight KPHB Flagship" />
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
              Direct Answer / Local Summary
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
              Where is the best optician in KPHB Colony Kukatpally?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Clear Sight Opticians is rated the best optician in KPHB Colony, Kukatpally, located at Shop #4, Padmaja Complex, JNTU Road, 6th Phase (near JNTU Metro Station). Rated 5.0 stars with 97+ verified reviews, Clear Sight provides certified ZEISS 3D eye testing, Ray-Ban Meta AI smart glasses demos, luxury frames from Prada, Montblanc, and Silhouette, and custom prescription progressive and blue-cut computer lenses. Open daily from 9:00 AM to 9:30 PM.
            </p>
          </div>
        </div>
      </section>

      {/* ── Best-Sellers at KPHB ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-12">
            <div>
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">In-Stock at KPHB</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
                Popular models at <span className="font-serif italic font-medium text-electric">KPHB Flagship.</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                Explore best-selling Ray-Ban Meta AI, Oakley, and Prada frames in stock at our Padmaja Complex studio.
              </p>
            </div>
            <Link to="/brands" className="text-sm font-bold border-b-2 border-electric pb-1 tracking-[0.2em] uppercase w-fit">
              Browse All Brands
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kphbBestSellers.map((item, i) => (
              <Reveal key={item.model.model} delay={i * 0.05}>
                <ModelCard m={item.model} index={i} brandName={item.brandName} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary/60 border border-border rounded-3xl p-8">
              <MapPin className="size-8 text-electric mb-4" />
              <h3 className="text-xl font-bold tracking-tight">Store Location</h3>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB Colony, Kukatpally, Hyderabad - 500085.
              </p>
              <a href={store.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-electric">
                Open in Google Maps <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="bg-secondary/60 border border-border rounded-3xl p-8">
              <Clock className="size-8 text-electric mb-4" />
              <h3 className="text-xl font-bold tracking-tight">Operating Hours</h3>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                Monday to Sunday: 9:00 AM – 9:30 PM.<br />Open on all public holidays.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-foreground">
                <CheckCircle2 className="size-4 text-electric" /> Senior Optometrist Available
              </div>
            </div>

            <div className="bg-secondary/60 border border-border rounded-3xl p-8">
              <Car className="size-8 text-electric mb-4" />
              <h3 className="text-xl font-bold tracking-tight">Parking &amp; Metro Access</h3>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                2-minute drive from JNTU Metro Station. Ample dedicated vehicle parking outside Padmaja Complex on main JNTU Road.
              </p>
              <a href={store.phoneHref} className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-electric">
                <Phone className="size-4" /> Call Store: {store.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">KPHB Store FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {KPHB_FAQS.map((faq) => (
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Visit KPHB Flagship</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Visit Clear Sight Opticians in KPHB.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Shop #4 Padmaja Complex, JNTU Road, KPHB. Book your priority optical appointment now.
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
        defaultReason="Eye test"
      />
    </div>
  );
}
