import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BatteryCharging, Camera, CalendarCheck, MapPin, MessageCircle, Mic, Sparkles } from "lucide-react";
import { ModelCard } from "@/components/site/ModelCard";
import { BookingModal } from "@/components/site/BookingModal";
import { useState } from "react";
import { BRANDS } from "@/lib/brand-catalog";
import { CONTACT_PHONE_RAW } from "@/lib/contact-config";
import { breadcrumbSchema, createSeoHead, SITE_URL, STORE_LOCATIONS } from "@/lib/seo";

const ROUTE_PATH = "/ray-ban-meta-gen-3-hyderabad";
const gen3Models = BRANDS.find((brand) => brand.slug === "ray-ban")?.models.filter(
  (model) => model.line === "Meta Glasses Gen 3",
) ?? [];

const GEN3_FAQS = [
  {
    question: "Where can I buy Ray-Ban Meta Gen 3 in Hyderabad?",
    answer:
      "Ray-Ban Meta Gen 3 Wayfarer and Aviator smart glasses are available for demo and purchase at Clear Sight Opticians in KPHB, Nizampet and Bowenpally, Hyderabad. Contact the store to confirm your preferred colourway before visiting.",
  },
  {
    question: "Which Ray-Ban Meta Gen 3 styles does Clear Sight carry?",
    answer:
      "Clear Sight showcases Ray-Ban Meta Gen 3 Wayfarer and Aviator styles in the colourways listed on this page. Zena is not included in this collection.",
  },
  {
    question: "How much do Ray-Ban Meta Gen 3 glasses cost in India?",
    answer:
      "Ray-Ban Meta Gen 3 starts at ₹44,300. Prices vary by frame and lens colour; a Shiny Black Wayfarer with Transitions Grey is ₹50,100. Visit Clear Sight Opticians in Hyderabad to explore colourways and prescription options.",
  },
  {
    question: "What is new in Ray-Ban Meta Gen 3?",
    answer:
      "Ray-Ban Meta Gen 3 adds 3K video, a 12 MP ultra-wide camera, a six-microphone array, an assignable action button and up to nine hours of battery life, with up to 50 additional hours from the charging case.",
  },
  {
    question: "Can Ray-Ban Meta Gen 3 be fitted with prescription lenses?",
    answer:
      "Meta describes Ray-Ban Meta Gen 3 as prescription-ready. Ask Clear Sight's opticians about compatible prescription lens options, power range and fit for your chosen frame.",
  },
];

const productSchemas = gen3Models.map((model) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: model.model,
  image: model.variants?.map((variant) => `${SITE_URL}${variant.images.front}`),
  description: `${model.model} smart glasses with Meta AI, 3K video, a 12 MP camera, open-ear audio and prescription-ready lenses. Available for demo and purchase at Clear Sight Opticians in Hyderabad.`,
  brand: { "@type": "Brand", name: "Ray-Ban" },
  category: "Smart glasses",
  additionalProperty: [
    { "@type": "PropertyValue", name: "Styles", value: "Ray-Ban Meta Gen 3" },
    { "@type": "PropertyValue", name: "Colourways", value: model.colour },
  ],
}));

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Ray-Ban Meta Gen 3 styles at Clear Sight Opticians, Hyderabad",
  itemListElement: gen3Models.map((model, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: model.model,
    url: `${SITE_URL}${ROUTE_PATH}#${model.shape}`,
  })),
};

export const Route = createFileRoute("/ray-ban-meta-gen-3-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Ray-Ban Meta Gen 3 in Hyderabad | Wayfarer & Aviator | Clear Sight",
      description:
        "Explore Ray-Ban Meta Gen 3 Wayfarer and Aviator in Hyderabad from ₹44,300. See colourways, prescription options and book a demo at KPHB, Nizampet or Bowenpally.",
      path: ROUTE_PATH,
      type: "product",
      image: `${SITE_URL}/products/ray-ban-meta-gen3/colourways/wayfarer-shiny-black-transitions-grey-front.webp`,
      meta: [
        { name: "keywords", content: "Ray-Ban Meta Gen 3 Hyderabad, buy Ray-Ban Meta Gen 3 Hyderabad, Ray-Ban Meta Wayfarer Gen 3, Ray-Ban Meta Aviator Gen 3, Meta smart glasses KPHB, Nizampet, Bowenpally" },
      ],
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Ray-Ban Meta", path: "/ray-ban-meta-hyderabad" },
          { name: "Ray-Ban Meta Gen 3 Hyderabad", path: ROUTE_PATH },
        ]),
        productListSchema,
        ...productSchemas,
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: GEN3_FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        },
        ...STORE_LOCATIONS.map((store) => ({
          "@context": "https://schema.org",
          "@type": "OpticalStore",
          name: `Clear Sight Opticians ${store.name}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: store.streetAddress,
            addressLocality: store.locality,
            addressRegion: "Telangana",
            postalCode: store.postalCode,
            addressCountry: "IN",
          },
          telephone: store.phone,
          url: `${SITE_URL}/stores#${store.id}`,
        })),
      ],
    }),
  component: RayBanMetaGen3Page,
});

const FEATURE_CARDS = [
  { icon: Camera, title: "12 MP camera · 3K video", text: "Capture hands-free photos and high-resolution video with the ultra-wide camera." },
  { icon: Mic, title: "Six-microphone array", text: "Open-ear audio and a six-microphone array support clear calls and voice commands." },
  { icon: Sparkles, title: "Meta AI and action button", text: "Reach Meta AI and your chosen shortcut with a voice prompt or assignable action button." },
  { icon: BatteryCharging, title: "Up to 9 hours", text: "Up to nine hours of battery life, with up to 50 additional hours from the charging case." },
];

function RayBanMetaGen3Page() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(
    "Hi Clear Sight Opticians, I'd like to check Ray-Ban Meta Gen 3 availability, current price and book a demo in Hyderabad.",
  )}`;

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border bg-ink text-white">
        <div className="absolute inset-0 opacity-35" style={{ background: "radial-gradient(ellipse at 75% 45%, #6d7a82 0%, transparent 54%)" }} />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 sm:py-20 lg:grid-cols-12 lg:px-10 lg:py-24">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="mb-8 text-xs text-white/60">
              <Link to="/" className="hover:text-white">Home</Link><span className="px-2">/</span>
              <Link to="/ray-ban-meta-hyderabad" className="hover:text-white">Ray-Ban Meta</Link><span className="px-2">/</span>
              <span className="text-white">Gen 3 · Hyderabad</span>
            </nav>
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/85">
              Now at Clear Sight · KPHB · Nizampet · Bowenpally
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.02] tracking-tighter sm:text-6xl lg:text-7xl">
              Ray-Ban Meta <span className="font-serif font-medium italic text-[#d8c8a7]">Gen 3</span> in Hyderabad.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Discover the Wayfarer and Aviator smart glasses with Meta AI, 3K video, open-ear audio and prescription-ready lenses. Explore the official colourways and try Gen 3 at any of our three Hyderabad stores.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-semibold">
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">From ₹44,300</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">Wayfarer &amp; Aviator</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2">In-store demos</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-ink">
                <CalendarCheck className="size-4" /> Book a demo
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/10">
                <MessageCircle className="size-4" /> Check price &amp; colourways
              </a>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -inset-5 rounded-[40px] bg-white/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/15 bg-[#e4e2df] shadow-2xl">
              <img src="/products/ray-ban-meta-gen3/colourways/wayfarer-shiny-black-transitions-grey-front.webp" alt="Ray-Ban Meta Gen 3 Wayfarer in Shiny Black with Transitions Grey lenses" className="aspect-[4/3] w-full object-cover" fetchPriority="high" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-5 pt-12 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65">New generation · iconic Wayfarer fit</p>
                <p className="mt-1 text-lg font-bold">3K video · Meta AI · up to 9-hour battery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 rounded-3xl border border-electric/25 bg-electric/5 p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-electric">Direct answer</span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">Where to try Gen 3 in Hyderabad?</h2>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground lg:col-span-5">
              Clear Sight Opticians has Ray-Ban Meta Gen 3 Wayfarer and Aviator available for demo and purchase at KPHB, Nizampet and Bowenpally. Choose a store, try the fit and ask the opticians about current colourways, price and prescription lens options.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-electric lg:col-span-3">
              Ask about stock <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <span className="text-electric text-xs font-bold uppercase tracking-[0.22em]">Two Gen 3 styles · no Zena</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tighter sm:text-5xl">Choose your <span className="font-serif font-medium italic text-electric">frame.</span></h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Explore eight Wayfarer and six Aviator colourways. Select a model to inspect its frame and lens combinations, then visit a store to experience your preferred variant.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {gen3Models.map((model, index) => (
              <div id={model.shape} key={model.model}>
                <ModelCard m={model} index={index} brandName="Ray-Ban" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <span className="text-electric text-xs font-bold uppercase tracking-[0.22em]">Made for everyday moments</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tighter sm:text-5xl">What Gen 3 <span className="font-serif font-medium italic text-electric">adds.</span></h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURE_CARDS.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-3xl border border-border bg-background p-6">
                <span className="mb-5 grid size-11 place-items-center rounded-2xl border border-electric/20 bg-electric/10 text-electric"><Icon className="size-5" /></span>
                <h3 className="font-bold tracking-tight">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <span className="text-electric text-xs font-bold uppercase tracking-[0.22em]">Local availability</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tighter sm:text-5xl">Three Clear Sight stores in <span className="font-serif font-medium italic text-electric">Hyderabad.</span></h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Gen 3 demos and purchases are available across our KPHB, Nizampet and Bowenpally stores. Contact us before visiting to confirm a particular colourway.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {STORE_LOCATIONS.map((store) => (
              <article key={store.id} className="rounded-2xl border border-border bg-secondary/40 p-5">
                <h3 className="flex items-center gap-2 font-bold"><MapPin className="size-4 text-electric" /> {store.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{store.address}</p>
                <p className="mt-3 text-xs font-semibold text-electric">Gen 3 demo &amp; purchase available</p>
                <Link to="/stores" hash={store.id} className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider hover:text-electric">Store details <ArrowUpRight className="size-3" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30 px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <span className="text-electric text-xs font-bold uppercase tracking-[0.22em]">Ray-Ban Meta Gen 3 FAQ</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tighter sm:text-4xl">Your questions, <span className="font-serif font-medium italic text-electric">answered.</span></h2>
          </div>
          <div className="space-y-3">
            {GEN3_FAQS.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-background p-5 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold"><span>{faq.question}</span><span className="text-electric transition-transform group-open:rotate-180">⌄</span></summary>
                <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white hover:bg-ink"><CalendarCheck className="size-4" /> Book a Gen 3 demo</button>
            <Link to="/ray-ban-meta-hyderabad" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-xs font-bold uppercase tracking-[0.15em] hover:border-electric/50">Gen 2 &amp; Ray-Ban Meta guide <ArrowUpRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} defaultReason="Ray-Ban Meta Gen 3 demo" />
    </div>
  );
}
