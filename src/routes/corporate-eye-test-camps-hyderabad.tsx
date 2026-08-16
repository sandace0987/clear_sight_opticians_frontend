import * as React from "react";
import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
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
  Stethoscope,
  Activity,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { FAQSection } from "@/components/site/FAQSection";
import corporateBanner from "@/assets/miscellaneous/corporate-gifting.webp";
import { CONTACT_PHONE, CONTACT_PHONE_RAW, CONTACT_EMAIL } from "@/lib/contact-config";

export const Route = createFileRoute("/corporate-eye-test-camps-hyderabad")({
  head: () =>
    createSeoHead({
      title: "On-Site Corporate Eye Testing Camps in Hyderabad | Clear Sight Opticians",
      description:
        "Organize mobile clinical corporate eye test camps at your IT park or office campus in Hyderabad. Complete vision screening, blue-light digital strain checks, and corporate optical wellness programs.",
      path: "/corporate-eye-test-camps-hyderabad",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services & Guides", path: "/#corporate-gifting" },
          { name: "Corporate Eye Test Camps Hyderabad", path: "/corporate-eye-test-camps-hyderabad" },
        ]),
        faqSchema(CAMP_FAQS),
      ],
    }),
  component: CorporateEyeTestCampsPage,
});

const CAMP_FAQS = [
  {
    question: "How do on-site corporate eye testing camps in Hyderabad work?",
    answer:
      "Our team of licensed optometrists and optical technicians brings advanced portable diagnostic equipment directly to your office premises or IT campus in HITEC City, Gachibowli, Financial District, or Madhapur. We set up an efficient clinical testing bay and conduct computerised vision assessments for your staff during working hours.",
  },
  {
    question: "What equipment does Clear Sight Opticians bring for corporate camps?",
    answer:
      "We bring mobile digital autorefractometers, portable slit-lamp biomicroscopes, high-resolution chart projectors, trial lens sets, and digital lensometers to evaluate existing glasses and measure precise sphere, cylinder, axis, and pupil distance.",
  },
  {
    question: "Is there a minimum number of employees required to book a campus eye camp?",
    answer:
      "We conduct corporate eye camps for organizations of all sizes—from mid-sized offices with 30–50 employees to major tech enterprise campuses with 1,000+ staff across multi-day wellness weeks.",
  },
  {
    question: "Do employees get discounts on prescription glasses purchased during the camp?",
    answer:
      "Yes! All camp participants receive special corporate event discounts on ZEISS blue-cut computer lenses, anti-glare prescription spectacles, progressive lenses, and branded designer frames, with convenient corporate desk delivery.",
  },
  {
    question: "Can corporate eye camps be sponsored or co-funded by HR health budgets?",
    answer:
      "Yes. Companies can choose fully sponsored camps, co-funded employee voucher programs, or complimentary screening camps where employees purchase recommended eyewear at corporate-subsidized rates with full GST invoices.",
  },
];

const CLINICAL_STEPS = [
  {
    step: "01",
    title: "Computerized Refraction",
    desc: "State-of-the-art mobile autorefractor scan to accurately detect myopia, hyperopia, and astigmatism in under 60 seconds per employee.",
  },
  {
    step: "02",
    title: "Digital Eye Strain & Computer Vision Screening",
    desc: "Targeted evaluation of binocular vision, tear film stability, and accommodative stress caused by prolonged dual-monitor screen work.",
  },
  {
    step: "03",
    title: "Prescription Verification & Eyewear Trial",
    desc: "Immediate trial lens fitting and on-site frame selection from over 100+ lightweight, ergonomic corporate optical frame designs.",
  },
  {
    step: "04",
    title: "Ergonomic Advisory & Desk Guidance",
    desc: "Personalized advice on monitor height, viewing distances, anti-glare screen lighting, and the 20-20-20 rule for workplace visual comfort.",
  },
];

function CorporateEyeTestCampsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const handleCampSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const msg = [
      "Hi Clear Sight Opticians, I would like to schedule an On-Site Corporate Eye Test Camp.",
      fd.get("name") && `Name: ${fd.get("name")}`,
      fd.get("company") && `Company: ${fd.get("company")}`,
      fd.get("mobile") && `Mobile: ${fd.get("mobile")}`,
      fd.get("email") && `Work Email: ${fd.get("email")}`,
      fd.get("location") && `Office Location: ${fd.get("location")}`,
      fd.get("headcount") && `Estimated Employee Count: ${fd.get("headcount")}`,
      fd.get("notes") && `Preferred Dates / Notes: ${fd.get("notes")}`,
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
                <Stethoscope className="size-4" /> On-Site Workplace Vision Care
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05]">
                Corporate Eye Testing Camps in{" "}
                <span className="font-serif italic font-medium text-electric">
                  Hyderabad Tech Parks &amp; Campuses.
                </span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Bring clinical optical expertise directly to your workplace. Clear Sight Opticians delivers end-to-end mobile eye screening camps, computer vision syndrome evaluations, and corporate prescription lens fittings for IT enterprises, MNCs, and corporate hubs across Hyderabad.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#book-camp"
                  className="bg-electric text-white px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:bg-ink transition-colors inline-flex items-center gap-2"
                >
                  <Briefcase className="size-4" /> Schedule Campus Camp
                </a>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I want to inquire about setting up an on-site corporate eye camp for our company.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-foreground border border-border px-7 py-4 rounded-full text-xs font-bold uppercase tracking-[0.18em] hover:border-electric transition-colors inline-flex items-center gap-2"
                >
                  <MessageCircle className="size-4 text-electric" /> WhatsApp HR Desk
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-xl bg-card">
                <img
                  src={corporateBanner}
                  alt="Clear Sight Opticians On-Site Corporate Eye Testing Camps in Hyderabad"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-sm font-bold flex items-center gap-2">
                    <Activity className="size-4 text-electric" /> Clinical Mobile Screening
                  </p>
                  <p className="text-xs text-white/70 mt-1">HITEC City · Gachibowli · Financial District · Madhapur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Guide Content (500+ Words SEO/AEO Article) */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-4xl space-y-10 text-foreground">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Why Corporate Vision Wellness Matters for Modern Tech Workforce
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              In today's digital-first corporate environment, modern software engineers, financial analysts, and corporate executives spend an average of 9 to 12 hours daily focusing on high-resolution monitors, laptops, smartphones, and tablet screens. Prolonged screen exposure without proper visual correction inevitably leads to <strong>Computer Vision Syndrome (CVS)</strong>—a recognized clinical condition characterized by eye strain, dry eyes, blurry vision, tension headaches, and neck stiffness.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Uncorrected refractive errors and unmanaged screen glare directly impact workplace focus, cognitive stamina, and daily task accuracy. By partnering with <strong>Clear Sight Opticians</strong> for an on-site corporate eye testing camp in Hyderabad, HR leaders and workplace wellness directors provide proactive healthcare that directly boosts employee satisfaction, reduces absenteeism, and demonstrates genuine commitment to employee health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">85%</span>
              <h3 className="font-bold text-sm mt-2">Screen Strain Reduction</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Proper blue-cut lenses significantly lower visual fatigue among software engineers.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">100%</span>
              <h3 className="font-bold text-sm mt-2">Zero Office Disruption</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Fast 10-minute individual appointments scheduled effortlessly during office hours.</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6">
              <span className="text-3xl font-bold text-electric">3 Studio</span>
              <h3 className="font-bold text-sm mt-2">Post-Camp Support</h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">Employees enjoy lifetime free adjustments across our KPHB, Nizampet &amp; Bowenpally stores.</p>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">What Happens During a Clear Sight Corporate Eye Camp?</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Our mobile optical unit operates with the exact same diagnostic precision as our premier vision studios in Kukatpally, Nizampet, and Bowenpally. Here is the step-by-step diagnostic journey every employee experiences during an on-site corporate camp:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {CLINICAL_STEPS.map((s) => (
                <div key={s.step} className="bg-card border border-border rounded-2xl p-6 relative overflow-hidden">
                  <span className="text-4xl font-bold text-electric/15 absolute right-4 bottom-2 font-serif select-none">
                    {s.step}
                  </span>
                  <h3 className="font-bold text-base text-electric">{s.title}</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Servicing IT Corridors &amp; Corporate Hubs Across Hyderabad</h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              Clear Sight Opticians has over 16 years of clinical eye-care experience in Telangana. We regularly conduct campus eye camps across major business parks including <strong>Cyber Towers, Mindspace IT Park, DLF Cyber City, Knowledge City, DivyaSree Omega, and Financial District Nanakramguda</strong>. Our logistics team handles equipment setup, queue management, and digital report delivery seamlessly without placing administrative burdens on your HR staff.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Camp Registration / Booking Form */}
      <section id="book-camp" className="scroll-mt-24 px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">HR &amp; Admin Desk</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tighter">
              Book an on-site camp for{" "}
              <span className="font-serif italic font-medium text-electric">your campus.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill out your company details below. Our corporate health coordinator will connect with you within 2 business hours to schedule a campus inspection and date allocation.
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
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground mb-3">Coverage Areas</h3>
                <p className="text-sm text-muted-foreground leading-relaxed inline-flex items-start gap-3">
                  <MapPin className="size-5 text-electric mt-0.5 shrink-0" />
                  <span>HITEC City, Gachibowli, Madhapur, Financial District, Kondapur, Begumpet &amp; Secunderabad</span>
                </p>
              </div>
            </aside>

            <form onSubmit={handleCampSubmit} className="lg:col-span-8 bg-secondary/60 border border-border rounded-3xl p-8 lg:p-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Full Name *</span>
                <input name="name" type="text" required placeholder="HR / Wellness Lead Name..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Company Name *</span>
                <input name="company" type="text" required placeholder="Organization / Company..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Work Mobile *</span>
                <input name="mobile" type="tel" required placeholder="+91 …" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Work Email *</span>
                <input name="email" type="email" required placeholder="hr@company.com" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Office Location / Tech Park</span>
                <input name="location" type="text" placeholder="e.g. Mindspace Building 12, Madhapur..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Estimated Employee Headcount</span>
                <select name="headcount" className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors">
                  <option className="bg-card text-foreground">30 – 100 Employees</option>
                  <option className="bg-card text-foreground">100 – 300 Employees</option>
                  <option className="bg-card text-foreground">300 – 1,000 Employees</option>
                  <option className="bg-card text-foreground">1,000+ Enterprise Campus</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 sm:col-span-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Preferred Dates &amp; Notes</span>
                <textarea name="notes" rows={4} placeholder="Mention your target health week dates, shift timings, or special requirements..." className="bg-transparent border-b border-border py-3 focus:outline-none focus:border-electric transition-colors resize-none" />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 mt-4 inline-flex items-center justify-center gap-2 bg-electric text-white py-4 rounded-full font-bold tracking-[0.18em] uppercase text-xs hover:bg-ink transition-colors cursor-pointer"
              >
                <MessageCircle className="size-4" /> Request Corporate Eye Camp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Camp FAQs */}
      <FAQSection />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="On-Site Corporate Eye Testing Camp"
      />
    </div>
  );
}
