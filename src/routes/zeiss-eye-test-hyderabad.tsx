import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, ShieldCheck, MapPin, Phone, CalendarCheck, Award, Cpu, Sparkles } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";
import storeInterior from "@/assets/miscellaneous/store-interior.webp";
import eyeTestImg from "@/assets/miscellaneous/eye-test.webp";

export const Route = createFileRoute("/zeiss-eye-test-hyderabad")({
  head: () =>
    createSeoHead({
      title: "ZEISS Certified Eye Test in Hyderabad | Clear Sight Opticians",
      description:
        "Experience Hyderabad's 1st ZEISS Vision Expert certified 3D eye testing at Clear Sight Opticians. i.Profiler plus diagnostic accuracy, digital refraction & SmartLife lens fitting.",
      path: "/zeiss-eye-test-hyderabad",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Eye Test Hyderabad", path: "/eye-test-hyderabad" },
          { name: "ZEISS Eye Test Hyderabad", path: "/zeiss-eye-test-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "ZEISS Vision Expert Certified 3D Eye Examination",
          serviceType: "Precision Wave-Front Refraction & Diagnostics",
          provider: {
            "@type": "OpticalBusiness",
            name: "Clear Sight Opticians",
            url: SITE_URL,
            telephone: `+${CONTACT_PHONE_RAW}`,
          },
          areaServed: [
            { "@type": "City", name: "Hyderabad" },
            { "@type": "AdministrativeArea", name: "Kukatpally KPHB" },
            { "@type": "AdministrativeArea", name: "Nizampet" },
            { "@type": "AdministrativeArea", name: "Bowenpally Secunderabad" },
          ],
          description:
            "ZEISS Vision Expert certified eye testing utilizing i.Profiler plus wave-front technology, i.Terminal 2 digital centration, and customized ZEISS SmartLife & DriveSafe lens prescriptions.",
        },
        faqSchema(ZEISS_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: ZeissEyeTestPage,
});

const ZEISS_FAQS = [
  {
    question: "What makes a ZEISS Vision Expert eye test different from a normal eye test?",
    answer:
      "A ZEISS Vision Expert eye test uses wave-front technology (i.Profiler plus) to map over 1,500 points per eye, measuring micro-aberrations under pupil dilation in low light. Standard eye tests measure only basic sphere/cylinder power in 0.25 diopter steps, whereas ZEISS calculates precision down to 0.01 diopters.",
  },
  {
    question: "Is Clear Sight Opticians an official ZEISS Vision Expert in Telangana?",
    answer:
      "Yes. Clear Sight Opticians was the 1st Eye Care Professional in Telangana to partner with ZEISS and achieve official ZEISS Vision Expert status, equipping our KPHB, Nizampet, and Bowenpally centers with certified diagnostic suites.",
  },
  {
    question: "What is ZEISS i.Profiler plus technology?",
    answer:
      "The ZEISS i.Profiler plus is an 4-in-1 diagnostic instrument that combines ocular wave-front autorefraction, corneal topography, keratometry, and Zernike aberration analysis in under 60 seconds per eye.",
  },
  {
    question: "How does ZEISS i.Terminal 2 digital centration work?",
    answer:
      "ZEISS i.Terminal 2 takes digital 3D measurements of your frame posture, pantoscopic tilt, corneal vertex distance, and interpupillary distance (PD) with sub-millimeter precision. This eliminates peripheral swim and distortion in progressive lenses.",
  },
  {
    question: "Can ZEISS eye testing help with night driving glare and halos?",
    answer:
      "Yes. By measuring night-time pupil dilation and higher-order corneal aberrations, ZEISS diagnostic testing enables custom ZEISS i.Scription® technology, providing up to 25% better contrast and dramatically reduced glare during night driving in Hyderabad traffic.",
  },
  {
    question: "What ZEISS lens series are available at Clear Sight?",
    answer:
      "We fit the full lineup of authentic ZEISS optical lenses: ZEISS SmartLife (digital screen optimization), ZEISS DriveSafe (anti-glare driving lenses), ZEISS MyoCare (children's myopia control), ZEISS EnergizeMe (for contact lens wearers), and ZEISS ClearView single vision lenses.",
  },
  {
    question: "How long does a full ZEISS diagnostic eye test take?",
    answer:
      "A full ZEISS diagnostic workflow takes 25 to 35 minutes, including i.Profiler wave-front scan, visual acuity trial refraction, corneal screening, and i.Terminal 2 frame centration.",
  },
  {
    question: "Are ZEISS eye tests suitable for children experiencing myopia?",
    answer:
      "Yes. We specialize in ZEISS MyoCare diagnostic consultations to measure axial length indicators and fit specialized myopia-control spectacle lenses designed for growing eyes in school-age children.",
  },
  {
    question: "What is the price of ZEISS prescription lenses in Hyderabad?",
    answer:
      "ZEISS prescription lenses start at accessible single-vision tiers and range up to customized i.Scription progressive lenses. Our optical consultants provide transparent, itemized quotes before ordering.",
  },
  {
    question: "Do I get an authentic ZEISS certificate of authenticity with my lenses?",
    answer:
      "Yes. All genuine ZEISS prescription lenses fitted at Clear Sight Opticians feature the laser-engraved ZEISS 'Z' logo on the lens surface and come with a digital ZEISS Authenticity Card and global warranty.",
  },
  {
    question: "Can I book a ZEISS eye test at the Nizampet or Bowenpally store?",
    answer:
      "Yes. ZEISS diagnostic optical consultations are available across all three Clear Sight stores: KPHB (Padmaja Complex JNTU Rd), Nizampet (Blooming Dale Rd), and Bowenpally (Sikh Rd).",
  },
  {
    question: "Is the ZEISS eye test fee credited towards my lens purchase?",
    answer:
      "Yes. When you order your prescription lenses or frames at Clear Sight Opticians, the full ZEISS diagnostic testing service is complimentary.",
  },
];

const ZEISS_TECH_PILLARS = [
  {
    title: "ZEISS i.Profiler® plus",
    subtitle: "Wave-Front Refraction & Topography",
    desc: "Analyzes 1,500 optical profile points per eye. Measures higher-order aberrations that cause night-time glare around headlights and streetlamps.",
    icon: Cpu,
  },
  {
    title: "ZEISS i.Terminal® 2",
    subtitle: "Digital 3D Centration Scanning",
    desc: "Captures 0.1mm precise fitting height, pupil distance, wrap angle, and pantoscopic tilt so your progressive lenses feel natural from day one.",
    icon: Sparkles,
  },
  {
    title: "ZEISS i.Scription® Tech",
    subtitle: "Customized 0.01D Lens Profile",
    desc: "Translates your wave-front eye profile into ultra-precise prescription lenses tailored to how your pupils dilate in dim light conditions.",
    icon: Award,
  },
  {
    title: "ZEISS SmartLife Optics",
    subtitle: "Digital Age Dynamic Vision",
    desc: "Engineered specifically for how eyes switch rapidly between smartphone screens, laptop monitors, and street navigation throughout the day.",
    icon: ShieldCheck,
  },
];

function ZeissEyeTestPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <Award className="size-3.5" /> 1st ZEISS Partner in Telangana · Est. 2009
              </span>
              <h1
                aria-label="ZEISS Certified Eye Test in Hyderabad | Precision 3D Refraction at Clear Sight"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                ZEISS certified <span className="font-serif italic font-medium text-electric">3D eye testing</span> in Hyderabad.
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Experience next-generation precision vision care. As Hyderabad's premier ZEISS Certified Vision Experts, Clear Sight Opticians combines ZEISS i.Profiler wave-front refraction and i.Terminal digital centration for 0.01D prescription accuracy.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book ZEISS Consultation
                </button>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I'd like to book a ZEISS 3D eye test.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp Consultation <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                  <img
                    src={storeInterior}
                    alt="ZEISS Vision Expert diagnostic center at Clear Sight Opticians Hyderabad"
                    width={800}
                    height={600}
                    loading="eager"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">ZEISS Vision Partner</p>
                    <p className="text-lg font-bold mt-1">Certified 3D Diagnostic Center</p>
                    <p className="text-xs text-white/70 mt-1">KPHB · Nizampet · Bowenpally</p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── AEO Lead Answer ── */}
      <section className="px-6 lg:px-10 py-10 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-5xl">
          <div className="bg-background border border-electric/30 rounded-2xl p-6 sm:p-8 shadow-sm">
            <span className="text-electric text-[10px] font-bold uppercase tracking-[0.25em] block mb-2">
              Direct Answer / AEO Definition
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
              What is a ZEISS Certified Eye Test in Hyderabad?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              A ZEISS Certified Eye Test at Clear Sight Opticians is a high-precision optical diagnostic process performed by certified optometrists using ZEISS i.Profiler plus wave-front refractors and i.Terminal 2 digital centration devices. Unlike basic computerized vision checks, ZEISS testing evaluates corneal topography and night pupil dilation to calculate prescription lenses down to 0.01 diopters, drastically reducing night driving glare and digital eye strain.
            </p>
          </div>
        </div>
      </section>

      {/* ── Technology Pillars ── */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Diagnostic Suite</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3">
              ZEISS diagnostic <span className="font-serif italic font-medium text-electric">technology suite.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ZEISS_TECH_PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="bg-secondary/60 border border-border rounded-3xl p-7 flex flex-col justify-between h-full">
                  <div>
                    <span className="size-11 rounded-2xl bg-electric/10 border border-electric/20 grid place-items-center mb-6">
                      <p.icon className="size-5 text-electric" />
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
                    <p className="text-xs text-electric font-semibold uppercase tracking-wider mt-1">{p.subtitle}</p>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    <CheckCircle2 className="size-3.5 text-electric" /> Certified Protocol
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZEISS Lens Portfolio Table ── */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Lens Solutions</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mt-2">
              ZEISS Lens Family <span className="font-serif italic font-medium text-electric">Selection Guide</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-background rounded-2xl overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-4 font-bold">ZEISS Lens Line</th>
                  <th className="p-4 font-bold">Primary Benefit</th>
                  <th className="p-4 font-bold">Ideal User Profile</th>
                  <th className="p-4 font-bold">Special Tech Option</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-bold text-electric">ZEISS SmartLife</td>
                  <td className="p-4 text-muted-foreground">All-day digital comfort &amp; rapid focal switching</td>
                  <td className="p-4 text-foreground">Smartphone, laptop &amp; active professionals</td>
                  <td className="p-4 text-muted-foreground">SmartView Technology</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-electric">ZEISS DriveSafe</td>
                  <td className="p-4 text-muted-foreground">Up to 64% night glare reduction in traffic</td>
                  <td className="p-4 text-foreground">Night drivers &amp; frequent highway commuters</td>
                  <td className="p-4 text-muted-foreground">Luminance Design® &amp; DuraVision</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-electric">ZEISS Progressive Individual</td>
                  <td className="p-4 text-muted-foreground">Zero peripheral distortion multifocal optics</td>
                  <td className="p-4 text-foreground">Presbyopes (40+ years) wanting seamless focus</td>
                  <td className="p-4 text-muted-foreground">i.Scription® 0.01D Customization</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-electric">ZEISS MyoCare</td>
                  <td className="p-4 text-muted-foreground">Slows myopia progression in growing eyes</td>
                  <td className="p-4 text-foreground">Children &amp; teenagers aged 6–16 years</td>
                  <td className="p-4 text-muted-foreground">Cylindrical Annular Refractive Elements</td>
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
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">ZEISS Knowledge</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {ZEISS_FAQS.map((faq) => (
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

      {/* ── CTA Banner ── */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-ink text-white p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div>
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Experience ZEISS Clarity</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Book your ZEISS 3D eye test today.
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Visit Clear Sight Opticians at KPHB, Nizampet, or Bowenpally for certified diagnostic refraction.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <button
                type="button"
                onClick={() => setBookingOpen(true)}
                className="bg-electric text-white px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-ink transition-colors inline-flex items-center gap-2 shadow-lg"
              >
                <CalendarCheck className="size-4" /> Book ZEISS Test
              </button>
              <Link
                to="/eye-test-hyderabad"
                className="border border-white/20 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                All Eye Test Options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultReason="ZEISS 3D Eye Test"
      />
    </div>
  );
}
