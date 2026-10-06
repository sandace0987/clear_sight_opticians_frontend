import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, Camera, Volume2, Cpu, Sparkles, Video, Play } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { ModelCard } from "@/components/site/ModelCard";
import { BRANDS } from "@/lib/brand-catalog";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";

const rayBanData = BRANDS.find((b) => b.slug === "ray-ban");
const rayBanMetaModels = rayBanData?.models.filter((m) => m.model.toLowerCase().includes("meta")) || rayBanData?.models || [];

export const Route = createFileRoute("/ray-ban-meta-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Ray-Ban Meta Smart Glasses in Hyderabad | Demo & Buy | Clear Sight",
      description:
        "Try & buy authentic Ray-Ban Meta AI smart glasses in Hyderabad with custom prescription lenses. Live hands-free 12MP camera, audio & Meta AI demo at KPHB, Nizampet & Bowenpally.",
      path: "/ray-ban-meta-hyderabad",
      type: "product",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "AI Glasses", path: "/ai-glasses" },
          { name: "Ray-Ban Meta Hyderabad", path: "/ray-ban-meta-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Ray-Ban Meta AI Smart Glasses (Wayfarer & Headliner Gen 2)",
          image: `${SITE_URL}/clear-sight-logo.avif`,
          description:
            "Iconic Ray-Ban frames equipped with Meta AI assistant, 12MP hands-free camera, open-ear audio, and custom prescription lens options at Clear Sight Opticians Hyderabad.",
          brand: { "@type": "Brand", name: "Ray-Ban" },
          offers: {
            "@type": "AggregateOffer",
            lowPrice: "29999",
            highPrice: "49999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            seller: { "@type": "OpticalBusiness", name: "Clear Sight Opticians" },
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "Ray-Ban Meta AI Glasses Live Demo — Clear Sight Opticians Hyderabad",
          description:
            "Watch hands-free 12MP video capture, open-ear audio and Meta AI voice prompts on Ray-Ban Meta frames at Clear Sight Opticians.",
          thumbnailUrl: `${SITE_URL}/clear-sight-logo.avif`,
          uploadDate: "2025-01-01",
          contentUrl: `${SITE_URL}/videos/rayban-meta.mp4`,
          embedUrl: `${SITE_URL}/ray-ban-meta-hyderabad`,
          publisher: { "@type": "Organization", name: "Clear Sight Opticians" },
        },
        faqSchema(RAYBAN_META_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: RayBanMetaPage,
});

const RAYBAN_META_FAQS = [
  {
    question: "Where can I try and buy Ray-Ban Meta AI smart glasses in Hyderabad?",
    answer:
      "Clear Sight Opticians offers live in-store hands-free demos and authorized sales for Ray-Ban Meta AI glasses across all three Hyderabad locations: KPHB (Padmaja Complex JNTU Rd), Nizampet (Blooming Dale Rd), and Bowenpally (Sikh Rd).",
  },
  {
    question: "Can I fit prescription power lenses into Ray-Ban Meta smart glasses?",
    answer:
      "Yes! Our optometrists customize and fit single vision, progressive, transition (photochromic), and blue-cut computer lenses into Ray-Ban Meta Wayfarer and Headliner frames without interfering with the 12MP camera, open-ear speakers, or capacitive touch controls.",
  },
  {
    question: "What are the core features of Ray-Ban Meta Gen 2 smart glasses?",
    answer:
      "Key features include a ultra-wide 12MP camera (1080p video recording & photo capture), open-ear directional audio speakers, 5-microphone array for crisp calls, hands-free 'Hey Meta' AI voice assistant, touch control pad, and compact charging case offering up to 36 hours total battery life.",
  },
  {
    question: "How does the Meta AI assistant work on the glasses?",
    answer:
      "By saying 'Hey Meta', you can ask questions, translate text, get real-time landmark descriptions, send WhatsApp/SMS messages, place phone calls, and control music playback hands-free.",
  },
  {
    question: "What is the price of Ray-Ban Meta smart glasses in Hyderabad, India?",
    answer:
      "Ray-Ban Meta smart glasses start from approximately ₹29,999 onwards in India depending on frame finish and lens choice. Currently, Clear Sight Opticians offers a limited-time 20% discount on Ray-Ban Meta Gen-2 Wayfarers starting at ₹31,840 (regularly ₹39,800).",
  },
  {
    question: "Are Ray-Ban Meta smart glasses water-resistant?",
    answer:
      "Ray-Ban Meta glasses feature IPX4 water resistance, making them safe against light rain, splashes, and sweat during everyday workouts or outdoor walks in Hyderabad.",
  },
  {
    question: "Which frame styles are available in the Ray-Ban Meta collection?",
    answer:
      "The collection includes the iconic Wayfarer (Standard & Large fits), Headliner (rounded unisex fit), and Skyler silhouettes available in various frame colors and lens tints.",
  },
  {
    question: "How do I pair Ray-Ban Meta glasses with my smartphone?",
    answer:
      "The glasses connect via Bluetooth and Wi-Fi to both iOS and Android smartphones using the free Meta View app for easy photo/video syncing and firmware updates.",
  },
  {
    question: "How long does the battery last on a single charge?",
    answer:
      "The glasses provide up to 4 hours of active usage per single charge. The included portable charging case provides up to 8 additional recharges (36 hours total operation time).",
  },
  {
    question: "Does the camera indicator light inform others when recording?",
    answer:
      "Yes. An ultra-bright capture LED light turns on automatically whenever video recording or photo capture is active to respect public privacy.",
  },
  {
    question: "Can I buy Ray-Ban Meta glasses with ZEISS progressive lenses at Clear Sight?",
    answer:
      "Yes. Clear Sight Opticians is a certified ZEISS Vision Partner in Hyderabad. We combine ZEISS SmartLife or DriveSafe digital progressive lenses with your Ray-Ban Meta frames for ultimate clarity and AI connectivity.",
  },
  {
    question: "Do you offer warranty and authentic box packaging for Ray-Ban Meta in Hyderabad?",
    answer:
      "Yes. All Ray-Ban Meta glasses sold at Clear Sight Opticians are 100% genuine products with manufacturer warranty, charging case, microfiber cloth, and original brand packaging.",
  },
  {
    question: "Is there a demo booking fee at Clear Sight Opticians?",
    answer:
      "No. Hands-free Ray-Ban Meta demos are 100% free at our KPHB, Nizampet, and Bowenpally stores. Walk in anytime or schedule a priority slot online.",
  },
  {
    question: "Can I live stream directly to Instagram or Facebook from the glasses?",
    answer:
      "Yes. Ray-Ban Meta allows you to live stream video and audio directly to your Instagram or Facebook followers hands-free.",
  },
  {
    question: "Why buy Ray-Ban Meta from Clear Sight Opticians instead of online store?",
    answer:
      "Buying in-store at Clear Sight allows you to physically test frame sizing, experience live audio quality, get precise digital optical centration for your prescription power, and receive immediate local warranty assistance.",
  },
];

const META_FEATURES = [
  { icon: Camera, title: "12MP Ultra-Wide Camera", desc: "Hands-free 1080p vertical video & photo capture directly from your point-of-view." },
  { icon: Volume2, title: "Open-Ear Directional Audio", desc: "Custom discrete speakers deliver rich bass and clear audio without blocking ambient sound." },
  { icon: Cpu, title: "Meta AI Voice Assistant", desc: "Say 'Hey Meta' to get answers, translate signs, send messages & control media." },
  { icon: Sparkles, title: "Prescription Lens Ready", desc: "Fitted with custom ZEISS single vision, progressive, or Transition lenses at Clear Sight." },
];

function RayBanMetaPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <Video className="size-3.5" /> Next-Gen AI Eyewear · In-Store Demos Available
              </span>
              <h1
                aria-label="Ray-Ban Meta Smart Glasses in Hyderabad | Demo & Buy at Clear Sight"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Ray-Ban Meta <span className="font-serif italic font-medium text-electric">smart glasses</span> in Hyderabad.
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Experience iconic style fused with Meta AI. Capture 12MP point-of-view video, take phone calls, stream music, and talk to Meta AI—custom fitted with your optical prescription power at Clear Sight Opticians (KPHB, Nizampet, Bowenpally).
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book In-Store Demo
                </button>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I'd like to check Ray-Ban Meta AI glasses price and availability in Hyderabad.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp Inquiry <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-electric/10 border border-electric/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-electric block">
                    ⚡ Limited Time Promotion
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-foreground mt-0.5">
                    20% Off Ray-Ban Meta Gen-2 Wayfarers — Starting at ₹31,840 (Was ₹39,800)
                  </p>
                </div>
                <Link
                  to="/ray-ban-meta-offer-hyderabad"
                  className="inline-flex items-center justify-center gap-1 bg-electric text-white px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider hover:bg-ink transition-colors shrink-0 w-fit"
                >
                  View Offer Details <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-ink aspect-video md:aspect-[4/3] flex items-center justify-center p-4">
                  <video
                    src="/videos/rayban-meta.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur border border-white/20 p-3 rounded-xl text-white text-xs flex items-center justify-between">
                    <span>Ray-Ban Meta Wayfarer Gen 2</span>
                    <span className="text-electric font-bold">In Stock · KPHB</span>
                  </div>
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
              Direct Answer / AEO Overview
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
              Where to buy Ray-Ban Meta AI smart glasses in Hyderabad?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Ray-Ban Meta AI smart glasses are available for live demonstration and authorized purchase at Clear Sight Opticians in Hyderabad across three stores: Kukatpally (KPHB JNTU Road), Nizampet, and Bowenpally. Prices start at ₹29,999 in India, with Ray-Ban Meta Gen-2 Wayfarers currently available at a limited-time 20% discount starting at ₹31,840 (reduced from ₹39,800). Clear Sight Opticians provides on-site optical customization, fitting high-index single vision, progressive, transition, and blue-cut computer lenses into your Ray-Ban Meta frames with digital centration accuracy.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Ray-Ban Meta Models Grid ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-12">
            <div>
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">In-Stock Models</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
                Ray-Ban Meta <span className="font-serif italic font-medium text-electric">model lineup.</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                Explore available Ray-Ban Meta smart glasses styles. Click any frame to inspect color variants, lens powers, and enquire directly.
              </p>
            </div>
            <Link
              to="/brands/$brand"
              params={{ brand: "ray-ban" }}
              className="text-sm font-bold border-b-2 border-electric pb-1 tracking-[0.2em] uppercase w-fit"
            >
              All Ray-Ban Frames
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rayBanMetaModels.slice(0, 6).map((m, i) => (
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
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Hardware Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3">
              Iconic Ray-Ban look. <span className="font-serif italic font-medium text-electric">Quietly intelligent.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {META_FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.05}>
                <div className="bg-secondary/60 border border-border rounded-3xl p-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="size-11 rounded-2xl bg-electric/10 border border-electric/20 grid place-items-center mb-6">
                      <f.icon className="size-5 text-electric" />
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{f.title}</h3>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Spec Comparison Table ── */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Tech Specifications</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mt-2">
              Ray-Ban Meta Gen 2 <span className="font-serif italic font-medium text-electric">Specifications</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-background rounded-2xl overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-4 font-bold">Specification</th>
                  <th className="p-4 font-bold">Ray-Ban Meta Wayfarer / Headliner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-semibold">Camera Resolution</td>
                  <td className="p-4 text-muted-foreground">12 Megapixel Ultra-Wide (1080p @ 30fps video)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Audio System</td>
                  <td className="p-4 text-muted-foreground">Open-ear directional speakers + 5-mic array</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Processor &amp; Connectivity</td>
                  <td className="p-4 text-muted-foreground">Qualcomm Snapdragon AR1 Gen 1 · Wi-Fi 6 · Bluetooth 5.3</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Prescription Support</td>
                  <td className="p-4 text-foreground font-semibold text-electric">Full support for Single Vision &amp; ZEISS Progressive power</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Water Resistance</td>
                  <td className="p-4 text-muted-foreground">IPX4 splash &amp; sweat resistant</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Battery &amp; Case</td>
                  <td className="p-4 text-muted-foreground">4 hrs active per charge / 36 hrs with charging case</td>
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
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Smart Glasses FAQ</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {RAYBAN_META_FAQS.map((faq) => (
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Try It In-Store</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Experience Ray-Ban Meta in Hyderabad.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Visit KPHB, Nizampet, or Bowenpally to test live audio, camera capture, and prescription lens options.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="bg-electric text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <CalendarCheck className="size-4" /> Book Demo Slot
              </button>
              <Link
                to="/ai-glasses"
                className="border border-white/20 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                View Oakley &amp; Meta Suite
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="AI glasses demo"
      />
    </div>
  );
}
