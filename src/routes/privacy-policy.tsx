import { createFileRoute, Link } from "@tanstack/react-router";
import { createSeoHead, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    createSeoHead({
      title: "Privacy Policy | Clear Sight Opticians",
      description:
        "Read the Privacy Policy for Clear Sight Opticians. Learn how we collect, use, and protect your personal information.",
      path: "/privacy-policy",
      noindex: false,
      schema: [
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ]),
      ],
    }),
  component: PrivacyPolicyPage,
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

function PrivacyPolicyPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-muted-foreground mt-2 text-sm">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 lg:px-10 py-14">
        <Section title="1. Introduction">
          <p>
            Welcome to {SITE_NAME} ("{SITE_NAME}", "we", "us", or "our"). We operate
            the website <a href={SITE_URL} className="text-electric hover:underline">{SITE_URL}</a> (the "Site").
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our Site or contact us.
          </p>
          <p>
            Please read this policy carefully. If you disagree with its terms, please discontinue use
            of the Site.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name, phone number, and email address when you book an eye test or contact us via our forms.</li>
            <li>Browser type, operating system, referring URLs, and pages visited - collected automatically via standard server logs and analytics.</li>
            <li>Preferences saved locally in your browser (e.g., theme choice, zoom level) via <code className="text-xs bg-muted px-1 rounded">localStorage</code>. This data never leaves your device.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to enquiries and appointment bookings.</li>
            <li>To improve the functionality and content of our Site.</li>
            <li>To send you occasional updates about promotions or offers (only if you have opted in).</li>
            <li>To comply with applicable legal obligations.</li>
          </ul>
        </Section>

        <Section title="4. Cookies and Local Storage">
          <p>
            Our Site does not use tracking or advertising cookies. We use{" "}
            <code className="text-xs bg-muted px-1 rounded">localStorage</code> to remember your
            theme and display preferences on your device only. No personal data is transmitted to
            our servers through this mechanism.
          </p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>We use the following third-party services that may process data on our behalf:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Vercel</strong> - Our hosting provider. Vercel may collect server-side access
              logs. See{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric hover:underline"
              >
                Vercel Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Google Maps</strong> - Embedded store locator maps. Google's use of data is
              governed by the{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric hover:underline"
              >
                Google Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>WhatsApp (Meta)</strong> - Our "Chat on WhatsApp" links open the WhatsApp
              application. Any communication sent through WhatsApp is subject to{" "}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-electric hover:underline"
              >
                WhatsApp's Privacy Policy
              </a>
              .
            </li>
          </ul>
        </Section>

        <Section title="6. Video Content & Attribution">
          <p>
            Our website features product showcase animations created from video footage. Some video
            content used in the creation of animated sequences on this Site was sourced from publicly
            available videos on <strong>YouTube</strong> and official brand channels (including but
            not limited to Ray-Ban, Meta, and Oakley official channels). This content is used solely
            for informational and illustrative purposes to showcase products available in our store.
          </p>
          <p>
            All brand names, logos, and product imagery remain the intellectual property of their
            respective owners. {SITE_NAME} does not claim ownership over any third-party brand
            assets displayed on this Site.
          </p>
          <p>
            If you are a rights holder and believe your content is used inappropriately, please
            contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-electric hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We retain contact and booking information for as long as necessary to fulfil the purpose
            for which it was collected, or as required by law. Theme/zoom preferences are stored
            entirely on your own device and can be cleared at any time by clearing your browser's
            local storage.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p>
            Depending on your jurisdiction, you may have the right to access, correct, or delete
            personal information we hold about you. To exercise these rights, contact us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-electric hover:underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="9. Children's Privacy">
          <p>
            Our Site is not directed to children under 13. We do not knowingly collect personal
            information from children under 13.
          </p>
        </Section>

        <Section title="10. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Changes will be reflected by
            updating the "Effective date" at the top of this page. We encourage you to review this
            policy periodically.
          </p>
        </Section>

        <Section title="11. Contact Us">
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <address className="not-italic space-y-1">
            <p><strong>Clear Sight Opticians</strong></p>
            <p>KPHB Phase 1, Kukatpally, Hyderabad - 500072</p>
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
            <Link to="/terms-and-conditions" className="text-electric hover:underline">
              Terms &amp; Conditions
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
