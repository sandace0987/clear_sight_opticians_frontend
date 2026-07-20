import { createFileRoute, Link } from "@tanstack/react-router";
import { createSeoHead, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    createSeoHead({
      title: "Terms & Conditions | Clear Sight Opticians",
      description:
        "Read the Terms and Conditions for using the Clear Sight Opticians website and services. Includes product, service, and booking terms.",
      path: "/terms-and-conditions",
      noindex: false,
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms & Conditions", path: "/terms-and-conditions" },
        ]),
      ],
    }),
  component: TermsPage,
});

const EFFECTIVE_DATE = "1 July 2025";
const SITE_NAME = "Clear Sight Opticians";
const SITE_URL = "https://www.clearsightopticians.in";
const CONTACT_EMAIL = "clearsightopticians@gmail.com";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-3 text-foreground">{title}</h2>
      <div className="text-muted-foreground leading-relaxed space-y-3 text-sm sm:text-base">
        {children}
      </div>
    </section>
  );
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-secondary/60 border-b border-border py-12 px-6 lg:px-10">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-electric transition-colors mb-6 inline-block"
          >
            ← Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-14">
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the {SITE_NAME} website at{" "}
            <a href={SITE_URL} className="text-electric hover:underline">{SITE_URL}</a> (the "Site"),
            you agree to be bound by these Terms &amp; Conditions ("Terms"). If you do not agree,
            please do not use the Site.
          </p>
        </Section>

        <Section title="2. Use of the Site">
          <p>You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of others. You must not:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use the Site in any way that violates applicable local, national, or international law or regulation.</li>
            <li>Transmit any unsolicited or unauthorised advertising or promotional material (spam).</li>
            <li>Attempt to gain unauthorised access to any part of the Site or its related systems.</li>
            <li>Reproduce, duplicate, copy, or re-sell any part of the Site in contravention of these Terms.</li>
          </ul>
        </Section>

        <Section title="3. Products & Services">
          <p>
            {SITE_NAME} sells premium eyewear, smart glasses, and optical accessories, and provides
            professional eye-testing services at our physical stores in Hyderabad.
          </p>
          <p>
            Descriptions, prices, and availability of products displayed on this Site are for
            informational purposes only and may vary. Final pricing and availability are confirmed
            in-store at the time of purchase.
          </p>
          <p>
            Promotions and offers (e.g., "Second Pair Free", "ZEISS Certified Eye Test") are subject
            to availability, terms, and store-specific conditions. Please contact us or visit a store
            for full details.
          </p>
        </Section>

        <Section title="4. Eye Test Bookings">
          <p>
            Booking an eye test through our Site or via WhatsApp is subject to slot availability.
            We will confirm your appointment by phone or message. Please arrive on time; late arrivals
            may need to be rescheduled.
          </p>
          <p>
            Eye tests are conducted by qualified optometrists. Results are provided for informational
            purposes. For clinical diagnosis and medical advice, please consult a registered
            ophthalmologist.
          </p>
        </Section>

        <Section title="5. Intellectual Property">
          <p>
            All original content on this Site — including text, graphics, logos, icons, and software
            — is the property of {SITE_NAME} and is protected by applicable intellectual property laws.
          </p>
          <p>
            Brand names, logos, and product imagery of third-party brands (including Ray-Ban, Oakley,
            Prada, Maui Jim, Silhouette, Meta, ZEISS, and others) remain the intellectual property of
            their respective owners. Their appearance on this Site does not imply any ownership or
            endorsement by {SITE_NAME} beyond its status as an authorised retailer.
          </p>
          <p>
            Video and image sequences used in scroll animations on this Site may include material
            derived from publicly available sources including YouTube. See our{" "}
            <Link to="/privacy-policy" className="text-electric hover:underline">
              Privacy Policy — Video Content &amp; Attribution
            </Link>{" "}
            section for details. If you believe your rights are affected, please contact us.
          </p>
        </Section>

        <Section title="6. Disclaimer of Warranties">
          <p>
            This Site and its content are provided on an "as is" and "as available" basis. {SITE_NAME}{" "}
            makes no warranties, express or implied, regarding the accuracy, completeness, reliability,
            or availability of the Site or its content.
          </p>
          <p>
            We do not warrant that the Site will be uninterrupted, error-free, or free of viruses or
            other harmful components.
          </p>
        </Section>

        <Section title="7. Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, {SITE_NAME} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including loss of profits,
            data, or goodwill, arising out of your access to or use of (or inability to access or use)
            the Site or its content.
          </p>
        </Section>

        <Section title="8. Third-Party Links">
          <p>
            Our Site may contain links to third-party websites (e.g., brand websites, Google Maps,
            WhatsApp). These links are provided for convenience only. {SITE_NAME} has no control over
            the content or privacy practices of those sites and accepts no responsibility for them.
          </p>
        </Section>

        <Section title="9. Governing Law">
          <p>
            These Terms are governed by and construed in accordance with the laws of India. Any disputes
            arising under these Terms shall be subject to the exclusive jurisdiction of the courts of
            Hyderabad, Telangana.
          </p>
        </Section>

        <Section title="10. Changes to These Terms">
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting to the Site. Your continued use of the Site after changes are
            posted constitutes your acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            For any questions about these Terms, please contact us:
          </p>
          <address className="not-italic space-y-1">
            <p><strong>Clear Sight Opticians</strong></p>
            <p>KPHB Phase 1, Kukatpally, Hyderabad — 500072</p>
            <p>
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-electric hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
            <p>Phone: <a href="tel:+919848012882" className="text-electric hover:underline">+91 98480 12882</a></p>
          </address>
        </Section>

        <div className="mt-12 pt-8 border-t border-border text-xs text-muted-foreground">
          <p>
            See also:{" "}
            <Link to="/privacy-policy" className="text-electric hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
