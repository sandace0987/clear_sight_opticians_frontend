import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2, Eye, ShieldCheck, MapPin, Phone, CalendarCheck, HelpCircle, Star, Sparkles, Award } from "lucide-react";
import { createSeoHead, breadcrumbSchema, faqSchema, storeSchema, STORE_LOCATIONS, SITE_URL } from "@/lib/seo";
import { BookingModal } from "@/components/site/BookingModal";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "@/lib/contact-config";
import storeInterior from "@/assets/miscellaneous/store-interior.webp";
import eyeTestImg from "@/assets/miscellaneous/eye-test.webp";

export const Route = createFileRoute("/eye-test-hyderabad")({
  head: () =>
    createSeoHead({
      title: "Clinical Eye Test in Hyderabad | ZEISS Vision Expert | Clear Sight",
      description:
        "Book a comprehensive 3D digital eye test in Hyderabad at Clear Sight Opticians (KPHB, Nizampet, Bowenpally). Precise clinical refraction, glaucoma screening & prescription lens fitting.",
      path: "/eye-test-hyderabad",
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Eye Test Hyderabad", path: "/eye-test-hyderabad" },
        ]),
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Clinical Eye Test & 3D Refraction in Hyderabad",
          serviceType: "Optometry & Eye Examination",
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
            "Clinical-grade 3D eye testing, digital refraction, corneal mapping, and precision lens fitting by ZEISS certified optometrists in Hyderabad.",
        },
        faqSchema(EYE_TEST_FAQS),
        ...STORE_LOCATIONS.map(storeSchema),
      ],
    }),
  component: EyeTestPage,
});

const EYE_TEST_FAQS = [
  {
    question: "What does a comprehensive eye test at Clear Sight Opticians include?",
    answer:
      "A complete eye examination at Clear Sight Opticians in Hyderabad includes 3D wave-front refraction, visual acuity assessment, corneal topography, binocular vision balance, intraocular pressure screening for glaucoma risk, and customized prescription lens recommendation tailored to your daily routine.",
  },
  {
    question: "How long does a digital eye test take in Hyderabad?",
    answer:
      "A standard comprehensive eye test takes approximately 20 to 30 minutes. If additional specialized diagnostics—such as contact lens trial fitting or progressive lens centration measurements—are required, allow 35 to 45 minutes.",
  },
  {
    question: "Do I need an appointment for an eye test in KPHB, Nizampet, or Bowenpally?",
    answer:
      "Walk-ins are always welcome at all three Clear Sight Opticians stores in Hyderabad. However, booking an appointment online or via WhatsApp guarantees zero waiting time with our senior optometrist.",
  },
  {
    question: "How often should I get my eyes tested?",
    answer:
      "Optometrists recommend a full eye test at least once every 12 months for adults, every 6 to 12 months for children and teenagers experiencing vision changes, and annually for anyone over 40 to monitor presbyopia and eye health.",
  },
  {
    question: "What is the difference between a regular auto-refractor test and a ZEISS 3D eye test?",
    answer:
      "Standard computerized eye tests measure basic spherical power with high error margins. A ZEISS 3D eye test analyzes over 1,500 data points per eye using wave-front technology, detecting micro-aberrations under low-light conditions to deliver vision accuracy down to 1/100th of a diopter.",
  },
  {
    question: "Can I get an eye test for contact lenses at Clear Sight?",
    answer:
      "Yes. We perform specialized contact lens diagnostic tests including corneal curvature mapping (keratometry), tear film stability assessment, and trial lens fittings for spherical, toric (astigmatism), and multifocal contact lenses.",
  },
  {
    question: "Is eye testing available for kids and teenagers?",
    answer:
      "Yes. Our optometrists specialize in pediatric eye care, offering friendly vision screenings, myopia progression checks, and specialized optical solutions like ZEISS MyoCare and MiYOSMART spectacle lenses.",
  },
  {
    question: "What should I bring to my eye test appointment?",
    answer:
      "Please bring your current pair of spectacles, your existing contact lens box or prescription details (if applicable), and any specific notes about eye strain, headaches, or digital screen usage hours.",
  },
  {
    question: "Do you provide instant prescription printouts after the eye test?",
    answer:
      "Yes. Following your examination, your qualified optometrist provides an accurate, physical and digital prescription copy valid at any certified optical clinic.",
  },
  {
    question: "Are eye tests free with frame or lens purchase?",
    answer:
      "Yes. As part of our commitment to community vision care in Hyderabad, comprehensive ZEISS clinical eye tests are completely complimentary when paired with any spectacle frame or prescription lens purchase.",
  },
  {
    question: "Which Clear Sight store in Hyderabad is closest to me?",
    answer:
      "Choose KPHB (Padmaja Complex, JNTU Road) for Kukatpally, Miyapur, and Pragathi Nagar; Nizampet (Blooming Dale Rd) for Bachupally and Hyder Nagar; and Bowenpally (Sikh Road) for Secunderabad, Cantonment, and Paradise.",
  },
  {
    question: "Can an eye test detect computer eye strain and digital fatigue?",
    answer:
      "Absolutely. Our visual ergonomics assessment evaluates your focal distance, eye muscle coordination, and blue-light exposure to prescribe tailored anti-fatigue and blue-cut computer lenses.",
  },
];

const EYE_TEST_STEPS = [
  {
    step: "01",
    title: "Pre-Exam & Vision History",
    desc: "We discuss your visual routine, digital screen hours, driving habits, and any eye fatigue symptoms.",
  },
  {
    step: "02",
    title: "3D Wave-Front Auto-Refraction",
    desc: "Advanced ZEISS digital equipment analyzes over 1,500 points per eye for pin-point optical baseline mapping.",
  },
  {
    step: "03",
    title: "Subjective Clinical Refraction",
    desc: "Senior optometrists fine-tune your prescription for crisp distance, intermediate digital, and reading focus.",
  },
  {
    step: "04",
    title: "Corneal & Intraocular Screening",
    desc: "Evaluation of corneal curvature, tear film health, and intraocular pressure (IOP) for early glaucoma prevention.",
  },
  {
    step: "05",
    title: "Centration & Custom Lens Fitting",
    desc: "Digital 3D centration measures pupil distance (PD) and fitting height for zero distortion in progressives.",
  },
];

function EyeTestPage() {
  const [bookingOpen, setBookingOpen] = React.useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* ── Hero Section ── */}
      <section className="relative px-6 lg:px-10 pt-16 lg:pt-24 pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-electric text-xs font-bold tracking-[0.22em] uppercase bg-electric/10 border border-electric/20 px-3.5 py-1.5 rounded-full mb-6">
                <Award className="size-3.5" /> ZEISS Certified Vision Experts · Hyderabad
              </span>
              <h1
                aria-label="Clinical Eye Test in Hyderabad | Precision 3D Digital Refraction at Clear Sight"
                className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.02]"
              >
                Clinical <span className="font-serif italic font-medium text-electric">eye testing</span> in Hyderabad.
              </h1>
              <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                Get a comprehensive 3D digital eye examination at Clear Sight Opticians. Powered by certified optometrists, wave-front diagnostic technology, and ZEISS centration equipment in Kukatpally (KPHB), Nizampet, and Bowenpally.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="bg-electric text-white px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-ink transition-colors inline-flex items-center gap-2 shadow-lg"
                >
                  <CalendarCheck className="size-4" /> Book Eye Test Now
                </button>
                <a
                  href={`https://wa.me/${CONTACT_PHONE_RAW}?text=${encodeURIComponent("Hi Clear Sight Opticians, I'd like to book an eye test appointment.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-border bg-secondary/50 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-secondary transition-colors inline-flex items-center gap-2"
                >
                  WhatsApp Us <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6 text-xs font-medium text-muted-foreground">
                <div>
                  <p className="text-foreground font-bold text-lg">15+ Yrs</p>
                  <p className="uppercase tracking-wider text-[10px]">Clinical Experience</p>
                </div>
                <div>
                  <p className="text-electric font-bold text-lg">5.0 ★★★★★</p>
                  <p className="uppercase tracking-wider text-[10px]">97+ Verified Reviews</p>
                </div>
                <div>
                  <p className="text-foreground font-bold text-lg">3 Stores</p>
                  <p className="uppercase tracking-wider text-[10px]">KPHB, Nizampet, Bowenpally</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <TiltCard max={6}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-card">
                  <img
                    src={eyeTestImg}
                    alt="Clinical digital eye test at Clear Sight Opticians Hyderabad"
                    width={800}
                    height={600}
                    loading="eager"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">Precision Care</p>
                    <p className="text-lg font-bold mt-1">Advanced 3D Refraction Diagnostics</p>
                    <p className="text-xs text-white/70 mt-1">Available daily at KPHB, Nizampet &amp; Bowenpally</p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── AEO Lead Definition Block (Direct Answer) ── */}
      <section className="px-6 lg:px-10 py-10 bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-5xl">
          <div className="bg-background border border-electric/30 rounded-2xl p-6 sm:p-8 shadow-sm">
            <span className="text-electric text-[10px] font-bold uppercase tracking-[0.25em] block mb-2">
              Direct Answer / Summary
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-3">
              Where to get a clinical eye test in Hyderabad?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Clear Sight Opticians provides professional, clinical-grade eye testing across three boutique stores in Hyderabad: Kukatpally (KPHB JNTU Road), Nizampet (Blooming Dale Rd), and Bowenpally (Sikh Road). Every examination includes computerized 3D wave-front refraction, corneal screening, glaucoma pressure checks, and optical centration by ZEISS Certified Vision Experts. Examinations take 20–30 minutes, and complete tests are complimentary with any frame or lens purchase.
            </p>
          </div>
        </div>
      </section>

      {/* ── Detailed Clinical Steps ── */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl mb-14">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Clinical Process</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3">
              Our 5-step <span className="font-serif italic font-medium text-electric">eye examination protocol.</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-relaxed">
              We go far beyond standard letter charts. Our clinical eye tests combine advanced computerized optics with personal consultations to diagnose vision errors, eye muscle imbalance, and digital strain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
            {EYE_TEST_STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="bg-secondary/60 border border-border rounded-2xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-bold tracking-tighter text-electric">{s.step}</span>
                    <h3 className="font-bold text-lg mt-3 leading-snug">{s.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                  <CheckCircle2 className="size-4 text-electric mt-6" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table: Standard Auto-Refractor vs ZEISS 3D Eye Test ── */}
      <section className="px-6 lg:px-10 py-16 bg-secondary/30 border-y border-border">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Diagnostic Comparison</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tighter mt-2">
              Standard Eye Test vs. <span className="font-serif italic font-medium text-electric">ZEISS 3D Diagnostic</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-background rounded-2xl overflow-hidden border border-border text-sm">
              <thead>
                <tr className="bg-ink text-white">
                  <th className="p-4 font-bold">Feature / Technology</th>
                  <th className="p-4 font-bold">Standard Auto-Refractor Test</th>
                  <th className="p-4 font-bold text-electric">Clear Sight ZEISS 3D Test</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="p-4 font-semibold">Measurement Accuracy</td>
                  <td className="p-4 text-muted-foreground">0.25 Diopter increments</td>
                  <td className="p-4 text-foreground font-semibold">0.01 Diopter wave-front precision</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Night Vision / Low Light Analysis</td>
                  <td className="p-4 text-muted-foreground">Not measured</td>
                  <td className="p-4 text-foreground font-semibold">Full pupil wave-front mapping</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Corneal Topography &amp; IOP</td>
                  <td className="p-4 text-muted-foreground">Basic or skipped</td>
                  <td className="p-4 text-foreground font-semibold">Screened for glaucoma &amp; astigmatism</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Digital Centration (PD &amp; Height)</td>
                  <td className="p-4 text-muted-foreground">Manual ruler estimate</td>
                  <td className="p-4 text-foreground font-semibold">3D digital centration scanning</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Optometrist Consultation Time</td>
                  <td className="p-4 text-muted-foreground">5 to 10 minutes</td>
                  <td className="p-4 text-foreground font-semibold">20 to 30 minutes thorough exam</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Locations Section ── */}
      <section className="px-6 lg:px-10 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div>
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Store Locations</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
                Visit our <span className="font-serif italic font-medium text-electric">Hyderabad optical clinics.</span>
              </h2>
            </div>
            <Link to="/stores" className="text-sm font-bold border-b-2 border-electric pb-1 uppercase tracking-[0.2em]">
              View All Locations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {STORE_LOCATIONS.map((loc) => (
              <div key={loc.id} className="bg-secondary/60 border border-border rounded-3xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-electric/10 text-electric text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-electric/20">
                      {loc.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">Open Daily</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{loc.name}</h3>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{loc.address}</p>
                  <p className="text-xs text-foreground font-medium mt-2">{loc.hours}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <a href={loc.phoneHref} className="text-xs font-bold text-electric inline-flex items-center gap-1">
                    <Phone className="size-3.5" /> {loc.phone}
                  </a>
                  <a href={loc.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                    <MapPin className="size-3.5" /> Map
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="px-6 lg:px-10 py-20 bg-secondary/40 border-t border-border">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Got Questions?</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-2">
              Frequently asked <span className="font-serif italic font-medium text-electric">questions.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {EYE_TEST_FAQS.map((faq) => (
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
              <span className="text-electric text-xs font-bold tracking-[0.22em] uppercase">Book Today</span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tighter mt-3 max-w-xl">
                Ready for crystal clear vision?
              </h2>
              <p className="text-white/70 mt-3 max-w-lg text-sm sm:text-base">
                Book your ZEISS 3D eye test in Kukatpally, Nizampet, or Bowenpally. Instant slot confirmation with senior optometrists.
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
              <a
                href={`tel:+${CONTACT_PHONE_RAW}`}
                className="border border-white/20 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="size-4" /> Call {CONTACT_PHONE}
              </a>
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
