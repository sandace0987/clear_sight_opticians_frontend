import * as React from "react";
import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Gift,
  Building2,
  ShieldCheck,
  Sparkles,
  Phone,
  Mail,
  Clock,
  MapPin,
  MessageCircle,
  Award,
  CheckCircle2,
  Glasses,
  Briefcase,
  Users,
  Eye,
  BadgePercent,
  FileText,
} from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { FAQSection } from "@/components/site/FAQSection";
import corporateBanner from "@/assets/miscellaneous/corporate-gifting.webp";
import { CONTACT_PHONE, CONTACT_PHONE_RAW, CONTACT_EMAIL } from "@/lib/contact-config";

export const Route = createFileRoute("/corporate-gifting")({
  head: () =>
    createSeoHead({
      title: "Corporate Gifting & Executive Eyewear in Hyderabad | Clear Sight Opticians",
      description:
        "Elevate corporate gifting with luxury eyewear, Ray-Ban Meta AI glasses, custom employee gift vouchers, blue-light computer glasses, and on-site corporate eye test camps in Hyderabad.",
      path: "/corporate-gifting",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Corporate Gifting", path: "/corporate-gifting" },
        ]),
        faqSchema(CORPORATE_FAQS),
      ],
    }),
  component: CorporateGiftingPage,
});

const CORPORATE_FAQS = [
  {
    question: "What corporate gifting options does Clear Sight Opticians provide?",
    answer:
      "We offer luxury branded eyewear (Ray-Ban, Oakley, Prada, Silhouette, Montblanc), Ray-Ban Meta AI smart glasses, blue-light protection computer glasses, redeemable corporate vision gift vouchers, and bespoke corporate packaging with personalized messages.",
  },
  {
    question: "Can we conduct an on-site corporate eye testing camp at our office in Hyderabad?",
    answer:
      "Yes! Our optometrists bring advanced portable optical diagnostic equipment directly to corporate offices, IT parks, and tech campuses across HITEC City, Gachibowli, Madhapur, Financial District, and Kondapur for employee vision wellness days.",
  },
  {
    question: "Do you issue official GST invoices for corporate orders?",
    answer:
      "Absolutely. All corporate gifting orders and voucher packages come with complete GST-compliant invoicing for easy corporate accounting and tax claim compliance.",
  },
  {
    question: "What is the minimum order quantity for bulk corporate discounts?",
    answer:
      "We cater to orders of all sizes—from executive gifts of 5–10 Ray-Ban Meta AI smart glasses for senior leadership to bulk orders of 100+ employee vision vouchers or computer glasses. Custom corporate tier pricing is available for every scale.",
  },
  {
    question: "How do corporate gift vouchers work for employees?",
    answer:
      "We issue customized, branded corporate gift vouchers that employees can redeem at any of our 3 premier optical studios in Hyderabad (KPHB, Nizampet, Bowenpally). Vouchers can cover complete frame & lens purchases or specific dollar-value credits.",
  },
];

const PACKAGES = [
  {
    title: "Executive & VIP Gifting",
    tag: "For C-Suite & Leadership",
    icon: Award,
    description:
      "Make an indelible statement with flagship designer sunglasses and smart eyewear for leadership retreats, board members, and valued clients.",
    features: [
      "Ray-Ban Meta & Oakley Meta AI Smart Glasses",
      "Prada Milano, Tom Ford & Montblanc Luxury Frames",
      "Custom branded presentation boxes & ribbon styling",
      "Direct white-glove executive delivery",
    ],
    highlight: "Popular for CXO Gifting",
  },
  {
    title: "Employee Milestone & Rewards",
    tag: "Appreciation & Tenure",
    icon: Gift,
    description:
      "Recognize work anniversaries, festive celebrations (Diwali, New Year), and high achievers with flexible, premium optical rewards.",
    features: [
      "Custom corporate gift vouchers valid at all 3 studios",
      "Ray-Ban, Oakley, Guess, Puma & Vogue optical collections",
      "Personalized corporate greeting cards included",
      "Flexible voucher denominations for any budget",
    ],
    highlight: "Best Selling Corporate Voucher",
  },
  {
    title: "Workforce Blue-Light Protection",
    tag: "Employee Wellness",
    icon: Glasses,
    description:
      "Shield your tech and engineering teams from digital eye strain with high-grade anti-reflective blue-cut computer glasses.",
    features: [
      "Zero-power or prescription ZEISS / Essilor Blue-Cut lenses",
      "Lightweight, durable ergonomic frames for daily wear",
      "Measurable reduction in screen fatigue & headaches",
      "Bulk company pricing with GST invoice billing",
    ],
    highlight: "Ideal for IT & Software Teams",
  },
  {
    title: "On-Site Corporate Eye Camps",
    tag: "Campus Wellness Days",
    icon: Building2,
    description:
      "Bring clinical vision care directly to your workplace with comprehensive eye diagnostic sessions for your entire workforce.",
    features: [
      "On-site computerised refraction & eye health screening",
      "Certified optometrists & optical technicians",
      "On-the-spot frame selection & trial fitting",
      "Exclusive corporate discounts on prescribed glasses",
    ],
    highlight: "Available Across Hyderabad",
  },
];

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "100% Authentic Brands",
    desc: "Authorized partner for Ray-Ban, Oakley, Prada, ZEISS, and leading international optical houses.",
  },
  {
    icon: BadgePercent,
    title: "Exclusive Corporate Rates",
    desc: "Tiered volume discounts and customized pricing structures tailored to your corporate budget.",
  },
  {
    icon: FileText,
    title: "Seamless GST Invoicing",
    desc: "Hassle-free corporate billing with complete GST compliance and dedicated documentation.",
  },
  {
    icon: Users,
    title: "Dedicated Account Manager",
    desc: "End-to-end support from sample selection to packaging, voucher distribution, and post-delivery care.",
  },
];

function CorporateGiftingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleBookingSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = [
      "Hi Clear Sight Opticians, I have a Corporate Gifting / Bulk Order inquiry.",
      fd.get("name") && `Name: ${fd.get("name")}`,
      fd.get("company") && `Company: ${fd.get("company")}`,
      fd.get("mobile") && `Mobile: ${fd.get("mobile")}`,
      fd.get("email") && `Email: ${fd.get("email")}`,
      fd.get("store") && `Preferred store / location: ${fd.get("store")}`,
      fd.get("reason") && `Requirement: ${fd.get("reason")}`,
      fd.get("notes") && `Notes / Details: ${fd.get("notes")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="px-6 lg:px-10 pt-12 lg:pt-20 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">
                Corporate Eyewear Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
                Premium corporate gifting.{" "}
                <span className="font-serif italic font-medium text-electric">
                  Lasting impressions.
                </span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                Reward leadership, appreciate employees, and protect workplace eye wellness.
                From luxury Ray-Ban Meta smart glasses to custom gift vouchers and on-site eye testing camps in Hyderabad.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="bg-electric text-white px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:bg-ink transition-colors inline-flex items-center gap-2"
                >
                  <Briefcase className="size-4" /> Request Corporate Catalog
                </a>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I would like to inquire about Corporate Gifting / Eye Camps.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-foreground border border-border px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:border-electric transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="size-4 text-electric" /> WhatsApp Business Query
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                <img
                  src={corporateBanner}
                  alt="Clear Sight Opticians Premium Corporate Gifting - Thoughtful gifts, lasting impressions"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Sparkles className="size-5 text-electric shrink-0" />
                    <div>
                      <p className="text-sm font-bold">Custom Branded Packages</p>
                      <p className="text-xs text-white/70">Luxury Eyewear · Vouchers · Eye Camps</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest bg-electric px-3 py-1.5 rounded-full">
                    Est. 2009
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Benefits Bar */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-card border border-border rounded-2xl p-6 flex flex-col items-start gap-4">
                <span className="size-11 rounded-full bg-electric/10 grid place-items-center">
                  <b.icon className="size-5 text-electric" />
                </span>
                <div>
                  <h3 className="font-bold text-base tracking-tight">{b.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Gifting Packages */}
      <section className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-16">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">
              Curated Solutions
            </span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tighter">
              Corporate packages designed for{" "}
              <span className="font-serif italic font-medium text-electric">
                every business scale.
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base">
              Whether you need senior executive rewards, Diwali gifting, corporate wellness eye tests, or blue-light computer glasses for your team, we offer tailored end-to-end service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <Reveal key={pkg.title} delay={idx * 0.1}>
                <div className="relative h-full bg-card border border-border rounded-3xl p-8 lg:p-10 flex flex-col justify-between hover:border-electric/50 transition-colors shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="size-12 rounded-2xl bg-electric/10 grid place-items-center">
                        <pkg.icon className="size-6 text-electric" />
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-secondary text-electric border border-electric/20 px-3.5 py-1 rounded-full">
                        {pkg.highlight}
                      </span>
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{pkg.tag}</p>
                    <h3 className="text-2xl font-bold tracking-tight mt-1">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{pkg.description}</p>

                    <ul className="mt-6 space-y-3 pt-6 border-t border-border">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-3 text-xs text-foreground/90 font-medium">
                          <CheckCircle2 className="size-4 text-electric shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                    <a
                      href="#contact"
                      className="text-xs font-bold uppercase tracking-[0.18em] text-electric hover:text-ink inline-flex items-center gap-2"
                    >
                      Enquire for Package &rarr;
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* On-Site Eye Camp Feature Section */}
      <section className="px-6 lg:px-10 py-20 bg-ink text-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">
              Corporate Wellness Program
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter leading-tight">
              On-Site Corporate Eye Testing Camps in Hyderabad
            </h2>
            <p className="text-white/70 text-base leading-relaxed">
              We bring our optical studio and clinical expertise straight to your office.
              Our qualified optometrists conduct comprehensive vision evaluations, screen for digital eye fatigue, and fit prescription computer glasses for your employees right on campus.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="font-bold text-sm text-electric">HITEC City &amp; Gachibowli</p>
                <p className="text-xs text-white/60 mt-1">Full coverage across IT corridors &amp; Tech Parks</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="font-bold text-sm text-electric">Full Diagnostic Equipment</p>
                <p className="text-xs text-white/60 mt-1">Computerized autorefractometer &amp; lensometer setup</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-3xl p-8 space-y-4">
            <h3 className="text-xl font-bold tracking-tight">Book an Eye Camp for Your Office</h3>
            <p className="text-xs text-white/70 leading-relaxed">
              Fill out the form below or chat directly with our corporate team to schedule an on-site vision screening day for your company.
            </p>
            <a
              href="#contact"
              className="w-full bg-electric text-white py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:bg-white hover:text-ink transition-colors flex items-center justify-center gap-2"
            >
              Schedule Corporate Eye Camp
            </a>
          </div>
        </div>
      </section>

      {/* Corporate FAQs */}
      <FAQSection />

      {/* ============== BOOKING / CONTACT (REUSED CTA) ============== */}
      <section id="contact" className="scroll-mt-24 px-6 lg:px-10 pt-20 lg:pt-28 pb-20 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Corporate Desk</span>
          <h2 className="mt-3 text-4xl lg:text-6xl font-bold tracking-tighter max-w-3xl leading-[1.02]">
            Connect with our corporate gifting{" "}
            <span className="font-serif italic font-medium text-electric">specialists.</span>
          </h2>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Call Desk</h3>
                <a href={`tel:+${CONTACT_PHONE_RAW}`} className="text-2xl font-bold tracking-tight inline-flex items-center gap-3">
                  <Phone className="size-5 text-electric" /> {CONTACT_PHONE}
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">WhatsApp Corporate</h3>
                <a href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I have a Corporate Gifting / Bulk inquiry.")}`} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold tracking-tight inline-flex items-center gap-3">
                  <MessageCircle className="size-5 text-electric" /> Chat on WhatsApp
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Email Inquiries</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl font-bold tracking-tight inline-flex items-center gap-3 break-all">
                  <Mail className="size-5 text-electric" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Hours</h3>
                <p className="text-lg font-bold tracking-tight inline-flex items-center gap-3">
                  <Clock className="size-5 text-electric" /> Mon–Sun: 9:00 AM – 9:30 PM
                </p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Flagship Studio</h3>
                <p className="text-sm text-muted-foreground leading-relaxed inline-flex items-start gap-3">
                  <MapPin className="size-5 text-electric mt-0.5 shrink-0" />
                  <span>Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB, Hyderabad - 500085</span>
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  Servicing corporate clients across HITEC City, Gachibowli, Madhapur, KPHB &amp; Secunderabad.
                </p>
              </div>
            </aside>

            <form onSubmit={handleBookingSubmit} className="lg:col-span-8 bg-secondary/60 border border-border rounded-3xl p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Full name *</span>
                <input name="name" type="text" required placeholder="Your name..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Company / Organization *</span>
                <input name="company" type="text" required placeholder="Company name..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Mobile number *</span>
                <input name="mobile" type="tel" required placeholder="+91 …" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Work email *</span>
                <input name="email" type="email" required placeholder="you@company.com" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Corporate Requirement</span>
                <select name="reason" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors">
                  <option className="bg-card text-foreground">Executive &amp; VIP Luxury Eyewear Gifting</option>
                  <option className="bg-card text-foreground">Ray-Ban Meta AI Glasses Bulk Order</option>
                  <option className="bg-card text-foreground">Corporate Gift Vouchers &amp; Cards</option>
                  <option className="bg-card text-foreground">Employee Blue-Light Computer Glasses</option>
                  <option className="bg-card text-foreground">On-Site Corporate Eye Testing Camp</option>
                  <option className="bg-card text-foreground">Other Corporate Inquiry</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Estimated Quantity / Notes</span>
                <textarea name="notes" rows={4} placeholder="Tell us your quantity, preferred dates, or specific requirements..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors resize-none" />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 mt-4 inline-flex items-center justify-center gap-2 bg-electric text-white py-4 rounded-full font-bold tracking-[0.18em] uppercase text-xs hover:bg-ink transition-colors cursor-pointer"
              >
                <MessageCircle className="size-4" /> Send Inquiry via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="Corporate Gifting & Bulk Order"
      />
    </div>
  );
}
