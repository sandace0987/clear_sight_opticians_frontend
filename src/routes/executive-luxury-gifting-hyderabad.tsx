import * as React from "react";
import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Sparkles,
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Glasses,
  Briefcase,
  Users,
  Gem,
  Crown,
  Building2,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { FAQSection } from "@/components/site/FAQSection";
import corporateBanner from "@/assets/miscellaneous/corporate-gifting.webp";
import { CONTACT_PHONE, CONTACT_PHONE_RAW, CONTACT_EMAIL } from "@/lib/contact-config";

export const Route = createFileRoute("/executive-luxury-gifting-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Executive Luxury Eyewear & AI Smart Glasses Gifting in Hyderabad | Clear Sight Opticians",
      description:
        "Bespoke luxury eyewear gifting for CXOs, board members, and VIP clients in Hyderabad. Ray-Ban Meta AI smart glasses, Prada Milano, Silhouette Titanium, and Montblanc luxury frames with white-glove packaging.",
      path: "/executive-luxury-gifting-hyderabad",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services & Guides", path: "/#corporate-gifting" },
          { name: "Executive Luxury Gifting Hyderabad", path: "/executive-luxury-gifting-hyderabad" },
        ]),
        faqSchema(LUXURY_FAQS),
      ],
    }),
  component: ExecutiveLuxuryGiftingPage,
});

const LUXURY_FAQS = [
  {
    question: "Which luxury optical houses are available for executive corporate gifting in Hyderabad?",
    answer:
      "We carry an authorized collection of the world's most prestigious eyewear houses including Ray-Ban Meta & Oakley Meta AI Smart Glasses, Prada Milano, Prada Linea Rossa, Montblanc, Silhouette (Austrian rimless titanium), Tom Ford, Maui Jim, and Burberry.",
  },
  {
    question: "Can Ray-Ban Meta AI smart glasses be customized with prescription lenses for executive gifts?",
    answer:
      "Yes! Our in-house optical lab specializes in fitting precision single vision, progressive, transition, and blue-light filtering prescription lenses into Ray-Ban Meta and Oakley Meta smart glasses without altering open-ear audio or dual 12MP camera functionality.",
  },
  {
    question: "What luxury packaging options are provided for VIP corporate gifts?",
    answer:
      "Every executive gift item comes in manufacturer-certified authentic leather cases, branded microfibre cloths, certificates of authenticity, and optional velvet gift packaging with personalized corporate greeting ribbons.",
  },
  {
    question: "Do you offer white-glove executive delivery to corporate headquarters in Hyderabad?",
    answer:
      "Yes. We offer scheduled white-glove concierge delivery directly to corporate offices in HITEC City, Gachibowli, Financial District, Jubliee Hills, and Banjara Hills, or personal executive fitting sessions at our studios.",
  },
  {
    question: "Are luxury executive gifts eligible for GST business tax invoices?",
    answer:
      "Yes. All corporate orders—from individual CXO recognition pieces to volume VIP executive gifts—are issued with complete GST tax invoices for business expense compliance.",
  },
];

const EXECUTIVE_HIGHLIGHTS = [
  {
    title: "Ray-Ban Meta AI Smart Glasses",
    tag: "Next-Gen Tech & Executive Audio",
    desc: "Hands-free Meta AI voice assistance, open-ear spatial audio speakers, and 12MP ultra-wide camera. The pinnacle gift for tech leaders & senior executives.",
    brands: "Wayfarer, Headliner & Skyler styles",
  },
  {
    title: "Prada Milano & Linea Rossa",
    tag: "Italian Haute Couture",
    desc: "Architectural acetate frames and refined metallic accents from Milan. Perfect for board members, keynote speakers, and high-net-worth partner honors.",
    brands: "Prada Eyewear Collection",
  },
  {
    title: "Silhouette Rimless Titanium",
    tag: "Austrian Ultra-Light Precision",
    desc: "Featherweight 1.8-gram screwless rimless frames crafted in Austria. Unmatched ergonomic comfort for executives who spend full days in global leadership calls.",
    brands: "Titan Minimal Art Collection",
  },
  {
    title: "Montblanc Luxury Eyewear",
    tag: "Timeless Craftsmanship",
    desc: "Elegantly detailed with Montblanc's signature star emblem and gold/platinum plated temples. The quintessential corporate luxury gift for milestone achievements.",
    brands: "Montblanc Masterpiece Eyewear",
  },
];

function ExecutiveLuxuryGiftingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleLuxurySubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = [
      "Hi Clear Sight Opticians, I have an Executive Luxury Gifting inquiry.",
      fd.get("name") && `Name: ${fd.get("name")}`,
      fd.get("company") && `Company: ${fd.get("company")}`,
      fd.get("mobile") && `Mobile: ${fd.get("mobile")}`,
      fd.get("email") && `Work Email: ${fd.get("email")}`,
      fd.get("brand") && `Preferred Luxury House / AI Glasses: ${fd.get("brand")}`,
      fd.get("quantity") && `Estimated Units: ${fd.get("quantity")}`,
      fd.get("notes") && `Executive Delivery / Customization Notes: ${fd.get("notes")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Hero Header */}
      <section className="px-6 lg:px-10 pt-12 lg:pt-20 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase flex items-center gap-2">
                <Crown className="size-4" /> VIP &amp; C-Suite Gifting Concierge
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
                Executive Luxury Eyewear &amp;{" "}
                <span className="font-serif italic font-medium text-electric">
                  AI Smart Glasses Gifting.
                </span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Honour C-suite leaders, key clients, and milestone achievers with the world's finest optical craftsmanship. Clear Sight Opticians provides curated executive gifting featuring Ray-Ban Meta AI smart glasses, Prada Milano, Silhouette Titanium, and Montblanc with bespoke concierge delivery in Hyderabad.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#luxury-catalog"
                  className="bg-electric text-white px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:bg-ink transition-colors inline-flex items-center gap-2"
                >
                  <Gem className="size-4" /> Request Luxury Catalog
                </a>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I would like to inquire about executive luxury gifting (Ray-Ban Meta / Prada / Montblanc).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-foreground border border-border px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:border-electric transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="size-4 text-electric" /> WhatsApp VIP Desk
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                <img
                  src={corporateBanner}
                  alt="Clear Sight Opticians Executive Luxury Eyewear Gifting in Hyderabad"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-sm font-bold flex items-center gap-2">
                    <Sparkles className="size-4 text-electric" /> Flagship Luxury Collections
                  </p>
                  <p className="text-xs text-white/70 mt-1">Ray-Ban Meta AI · Prada Milano · Silhouette · Montblanc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Guide Content (500+ Words SEO/AEO Article) */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-4xl space-y-10 text-foreground">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why Luxury Eyewear &amp; AI Smart Glasses Make the Ultimate Corporate Gift
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              When recognizing corporate board members, managing directors, enterprise founders, or high-value global clients, traditional corporate gifts like pens or wristwatches often lack modern technological flair or personal daily impact. <strong>Luxury optical frames and AI smart glasses</strong> represent the modern benchmark of executive gifting—combining cutting-edge technology, haute couture design, and daily functional health.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              With <strong>Ray-Ban Meta AI smart glasses</strong>, executives can take hands-free phone calls, stream podcasts during commutes, prompt Meta AI for instant summaries, and capture 12MP video moments on the go. For formal executive attire, luxury frames from <strong>Prada Milano</strong>, <strong>Silhouette Titanium</strong>, or <strong>Montblanc</strong> exude elegance, confidence, and prestige during high-stakes board meetings and international summits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">Meta AI</span>
              <h3 className="font-bold text-sm mt-2">Smart Eyewear</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Open-ear audio &amp; AI camera tech in iconic Ray-Ban frames.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">1.8g</span>
              <h3 className="font-bold text-sm mt-2">Ultra-Lightweight</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Austrian Silhouette titanium frames for supreme daily comfort.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">100%</span>
              <h3 className="font-bold text-sm mt-2">Authentic Certification</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Original serial numbers, cases, and manufacturer warranties.</p>
            </div>
          </div>

          {/* Executive Houses Breakdown */}
          <div className="space-y-6 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Curated Executive Optical Houses</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Explore our primary executive gifting collections curated for corporate leadership in Hyderabad:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {EXECUTIVE_HIGHLIGHTS.map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-electric">{item.tag}</span>
                    <h3 className="font-bold text-xl mt-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-foreground/80 font-medium">
                    <span>{item.brands}</span>
                    <CheckCircle2 className="size-4 text-electric shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Concierge White-Glove Service &amp; Prescription Customization</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              At Clear Sight Opticians, we do not merely ship a box; we deliver a complete concierge optical experience. Recipients of corporate executive gifts can visit any of our flagship studios in <strong>KPHB, Nizampet, or Bowenpally</strong> for complimentary ZEISS precision eye testing, frame adjustments, and custom prescription lens fitting. Alternatively, our senior optometrist can provide direct on-site executive fitting for senior corporate leadership upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Luxury Catalog Inquiry Form */}
      <section id="luxury-catalog" className="scroll-mt-24 px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">VIP Gifting Desk</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tighter">
              Request executive luxury{" "}
              <span className="font-serif italic font-medium text-electric">gifting catalog.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Speak directly with our executive gifting specialist. We will provide custom model availability, corporate GST pricing, and presentation options for your leadership gift.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">VIP Hotline</h3>
                <a href={`tel:+${CONTACT_PHONE_RAW}`} className="text-2xl font-bold tracking-tight inline-flex items-center gap-3">
                  <Phone className="size-5 text-electric" /> {CONTACT_PHONE}
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Email Desk</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl font-bold tracking-tight inline-flex items-center gap-3 break-all">
                  <Mail className="size-5 text-electric" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Concierge Delivery</h3>
                <p className="text-sm text-muted-foreground leading-relaxed inline-flex items-start gap-3">
                  <MapPin className="size-5 text-electric mt-0.5 shrink-0" />
                  <span>Direct white-glove corporate delivery across HITEC City, Gachibowli, Jubilee Hills &amp; Begumpet</span>
                </p>
              </div>
            </aside>

            <form onSubmit={handleLuxurySubmit} className="lg:col-span-8 bg-secondary/60 border border-border rounded-3xl p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Full Name *</span>
                <input name="name" type="text" required placeholder="Executive Lead / Coordinator..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Company / Organization *</span>
                <input name="company" type="text" required placeholder="Company name..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Work Mobile *</span>
                <input name="mobile" type="tel" required placeholder="+91 …" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Work Email *</span>
                <input name="email" type="email" required placeholder="you@company.com" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Preferred Luxury House</span>
                <select name="brand" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors">
                  <option className="bg-card text-foreground">Ray-Ban Meta AI Smart Glasses</option>
                  <option className="bg-card text-foreground">Prada Milano &amp; Linea Rossa</option>
                  <option className="bg-card text-foreground">Silhouette Rimless Titanium</option>
                  <option className="bg-card text-foreground">Montblanc Luxury Eyewear</option>
                  <option className="bg-card text-foreground">Curated VIP Mix</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Estimated Gift Count</span>
                <select name="quantity" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors">
                  <option className="bg-card text-foreground">1 – 5 Executive Pieces (CXO Gifting)</option>
                  <option className="bg-card text-foreground">5 – 20 VIP Units (Leadership Retreats)</option>
                  <option className="bg-card text-foreground">20 – 50 Key Client Gifts</option>
                  <option className="bg-card text-foreground">50+ Enterprise Rewards</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Special Instructions / Requirements</span>
                <textarea name="notes" rows={4} placeholder="Mention any prescription lens fitting, custom velvet presentation boxes, or specific delivery deadlines..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors resize-none" />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 mt-4 inline-flex items-center justify-center gap-2 bg-electric text-white py-4 rounded-full font-bold tracking-[0.18em] uppercase text-xs hover:bg-ink transition-colors cursor-pointer"
              >
                <MessageCircle className="size-4" /> Request Luxury Executive Catalog
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Luxury FAQs */}
      <FAQSection />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="Executive Luxury Eyewear Gifting Inquiry"
      />
    </div>
  );
}
