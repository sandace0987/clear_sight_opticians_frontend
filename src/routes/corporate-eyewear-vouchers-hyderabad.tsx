import * as React from "react";
import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Gift,
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
  BadgePercent,
  FileText,
  CreditCard,
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

export const Route = createFileRoute("/corporate-eyewear-vouchers-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Corporate Eyewear Vouchers & Employee Rewards in Hyderabad | Clear Sight Opticians",
      description:
        "Custom branded corporate optical vouchers, employee wellness gift cards, and milestone reward packages in Hyderabad redeemable at KPHB, Nizampet, and Bowenpally studios.",
      path: "/corporate-eyewear-vouchers-hyderabad",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services & Guides", path: "/#corporate-gifting" },
          { name: "Corporate Eyewear Vouchers Hyderabad", path: "/corporate-eyewear-vouchers-hyderabad" },
        ]),
        faqSchema(VOUCHER_FAQS),
      ],
    }),
  component: CorporateEyewearVouchersPage,
});

const VOUCHER_FAQS = [
  {
    question: "Where can employees redeem Clear Sight corporate gift vouchers in Hyderabad?",
    answer:
      "Employees can redeem vouchers at any of our 3 premier optical studios in Hyderabad: Kukatpally (KPHB JNTU Road), Nizampet (Blooming Dale Road), and Bowenpally (Sikh Road, Secunderabad). Vouchers are valid across frames, prescription lenses, computer glasses, and sunglasses.",
  },
  {
    question: "Can corporate vouchers be customized with our company logo and branding?",
    answer:
      "Yes! We design bespoke digital and physical voucher cards complete with your company logo, custom appreciation messages, tenure milestones, and corporate color schemes.",
  },
  {
    question: "What is the validity period of Clear Sight corporate vouchers?",
    answer:
      "Our corporate vouchers typically carry a generous 6-to-12 month validity period, allowing employees ample flexibility to visit our stores at their convenience without rushing.",
  },
  {
    question: "What happens if an employee purchases eyewear exceeding the voucher value?",
    answer:
      "If the selected eyewear exceeds the voucher value, the employee simply pays the remaining balance via UPI, credit card, or cash at checkout. If the cost is less, the balance can be retained for future purchases or lens upgrades.",
  },
  {
    question: "Are corporate voucher bulk purchases eligible for GST invoices and corporate discounts?",
    answer:
      "Yes. All voucher packages receive complete GST tax invoices for seamless corporate accounting. We offer tiered bulk volume discounts based on total order size.",
  },
];

const VOUCHER_TIERS = [
  {
    title: "Silver Vision Pass",
    val: "₹1,500 – ₹3,000",
    icon: Gift,
    idealFor: "Workplace Wellness & Annual Health Days",
    includes: [
      "Full coverage for Blue-Cut Anti-Glare Computer Glasses",
      "Redeemable for single-vision prescription lenses",
      "Valid across all 3 Hyderabad studios",
      "Physical & Digital PDF delivery",
    ],
  },
  {
    title: "Gold Reward Voucher",
    val: "₹3,500 – ₹7,500",
    icon: CreditCard,
    idealFor: "Diwali Gifting, Annual Performance & Service Milestones",
    includes: [
      "Covers branded prescription frames (Ray-Ban, Guess, Puma, Vogue)",
      "Option for ZEISS / Essilor anti-reflective lens upgrades",
      "Custom branded envelope & employee greeting card",
      "Complimentary advanced eye test included",
    ],
  },
  {
    title: "Platinum Executive Pass",
    val: "₹10,000 – ₹25,000+",
    icon: Award,
    idealFor: "CXO Gifting, VIP Client Honors & Senior Leadership",
    includes: [
      "Full access to flagship luxury houses (Prada, Montblanc, Silhouette)",
      "Valid for Ray-Ban Meta AI Smart Glasses",
      "VIP white-glove styling session at store",
      "Custom velvet luxury presentation box",
    ],
  },
];

function CorporateEyewearVouchersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleVoucherSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = [
      "Hi Clear Sight Opticians, I would like to order Corporate Eyewear Vouchers.",
      fd.get("name") && `Name: ${fd.get("name")}`,
      fd.get("company") && `Company: ${fd.get("company")}`,
      fd.get("mobile") && `Mobile: ${fd.get("mobile")}`,
      fd.get("email") && `Work Email: ${fd.get("email")}`,
      fd.get("tier") && `Selected Tier / Denomination: ${fd.get("tier")}`,
      fd.get("quantity") && `Voucher Quantity: ${fd.get("quantity")}`,
      fd.get("notes") && `Custom Branding / Notes: ${fd.get("notes")}`,
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
                <CreditCard className="size-4" /> B2B Eyewear Gift Cards &amp; Pass
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
                Corporate Eyewear Vouchers &amp;{" "}
                <span className="font-serif italic font-medium text-electric">
                  Employee Rewards in Hyderabad.
                </span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Replace generic gift cards with a meaningful gift of health, style, and visual clarity. Clear Sight Opticians provides customizable corporate optical vouchers for employee rewards, festive gifts (Diwali, New Year), and executive appreciation packages.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#order-vouchers"
                  className="bg-electric text-white px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:bg-ink transition-colors inline-flex items-center gap-2"
                >
                  <Gift className="size-4" /> Order Corporate Vouchers
                </a>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I want to inquire about bulk corporate gift vouchers for our team.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-foreground border border-border px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:border-electric transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="size-4 text-electric" /> WhatsApp Voucher Desk
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                <img
                  src={corporateBanner}
                  alt="Clear Sight Opticians Corporate Eyewear Vouchers in Hyderabad"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-sm font-bold flex items-center gap-2">
                    <ShieldCheck className="size-4 text-electric" /> 100% Genuine Brand Choice
                  </p>
                  <p className="text-xs text-white/70 mt-1">Redeemable at KPHB · Nizampet · Bowenpally Studios</p>
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
              Why Corporate Eyewear Vouchers Outperform Traditional Corporate Gifts
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Corporate HR departments and employee rewards committees frequently struggle to find corporate gifts that combine high utility, personal relevance, and premium brand perception. Generic desk gadgets, sweets, or retail gift cards often end up unused or forgotten. In contrast, <strong>corporate optical vouchers</strong> deliver a personalized health and lifestyle solution that directly addresses everyday employee wellness.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Whether your employees need anti-reflective computer glasses for long coding sprints, prescription reading glasses, progressive lenses, or stylish UV-protection sunglasses for outdoor weekend travel, a Clear Sight voucher gives them complete freedom of choice across 30+ international optical brands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">30+</span>
              <h3 className="font-bold text-sm mt-2">World Brands</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Ray-Ban, Oakley, Prada, Silhouette, Montblanc, ZEISS &amp; more.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">100%</span>
              <h3 className="font-bold text-sm mt-2">GST Compliant</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Tax invoice billing for effortless corporate accounting claims.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">12 Mo.</span>
              <h3 className="font-bold text-sm mt-2">Extended Validity</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Generous time window allowing employees to visit at leisure.</p>
            </div>
          </div>

          {/* Voucher Tiers */}
          <div className="space-y-6 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Corporate Voucher Tiers &amp; Customization Options</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              We structure our corporate voucher packages into flexible budget tiers to match your specific corporate initiative:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              {VOUCHER_TIERS.map((t) => (
                <div key={t.title} className="bg-card border border-border rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <span className="size-10 rounded-full bg-electric/10 grid place-items-center mb-4">
                      <t.icon className="size-5 text-electric" />
                    </span>
                    <h3 className="font-bold text-lg">{t.title}</h3>
                    <p className="text-sm font-bold text-electric mt-1">{t.val}</p>
                    <p className="text-xs text-muted-foreground mt-2 italic font-serif">{t.idealFor}</p>

                    <ul className="mt-4 space-y-2 border-t border-border pt-4">
                      {t.includes.map((inc) => (
                        <li key={inc} className="flex items-start gap-2 text-xs text-foreground/80">
                          <CheckCircle2 className="size-3.5 text-electric shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Custom Corporate Branding &amp; Physical Packaging</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Every voucher order can be customized with your organization's logo, branding colors, and personalized employee appreciation notes. For physical distributions during Diwali or annual town halls, we supply luxury gift envelopes or gold-embossed presentation boxes. For remote hybrid teams across Hyderabad, we issue instant digital PDF vouchers with unique QR codes for store redemption.
            </p>
          </div>
        </div>
      </section>

      {/* Voucher Order Form */}
      <section id="order-vouchers" className="scroll-mt-24 px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Corporate Procurement</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tighter">
              Order corporate vouchers for{" "}
              <span className="font-serif italic font-medium text-electric">your team.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Request a voucher quotation or bulk discount structure below. Our corporate desk will share a detailed sample format and GST pricing breakdown within 2 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="lg:col-span-4 space-y-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Direct Phone</h3>
                <a href={`tel:+${CONTACT_PHONE_RAW}`} className="text-2xl font-bold tracking-tight inline-flex items-center gap-3">
                  <Phone className="size-5 text-electric" /> {CONTACT_PHONE}
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Corporate Email</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl font-bold tracking-tight inline-flex items-center gap-3 break-all">
                  <Mail className="size-5 text-electric" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Store Locations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed inline-flex items-start gap-3">
                  <MapPin className="size-5 text-electric mt-0.5 shrink-0" />
                  <span>Redeemable at Kukatpally (KPHB), Nizampet, &amp; Bowenpally optical studios</span>
                </p>
              </div>
            </aside>

            <form onSubmit={handleVoucherSubmit} className="lg:col-span-8 bg-secondary/60 border border-border rounded-3xl p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Full Name *</span>
                <input name="name" type="text" required placeholder="Your name..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Company Name *</span>
                <input name="company" type="text" required placeholder="Company / Organization..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
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
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Preferred Voucher Tier</span>
                <select name="tier" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors">
                  <option className="bg-card text-foreground">Silver Pass (₹1,500 – ₹3,000)</option>
                  <option className="bg-card text-foreground">Gold Reward (₹3,500 – ₹7,500)</option>
                  <option className="bg-card text-foreground">Platinum Executive (₹10,000+)</option>
                  <option className="bg-card text-foreground">Custom Denomination</option>
                </select>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Voucher Quantity</span>
                <select name="quantity" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors">
                  <option className="bg-card text-foreground">10 – 50 Vouchers</option>
                  <option className="bg-card text-foreground">50 – 200 Vouchers</option>
                  <option className="bg-card text-foreground">200 – 500 Vouchers</option>
                  <option className="bg-card text-foreground">500+ Enterprise Bulk</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Custom Branding &amp; Notes</span>
                <textarea name="notes" rows={4} placeholder="Mention any custom logo printing, physical card vs digital PDF requirements, or event deadline..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors resize-none" />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 mt-4 inline-flex items-center justify-center gap-2 bg-electric text-white py-4 rounded-full font-bold tracking-[0.18em] uppercase text-xs hover:bg-ink transition-colors cursor-pointer"
              >
                <MessageCircle className="size-4" /> Request Voucher Quotation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Voucher FAQs */}
      <FAQSection />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="Corporate Eyewear Vouchers Inquiry"
      />
    </div>
  );
}
