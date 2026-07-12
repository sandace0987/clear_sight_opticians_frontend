import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingVideoCard } from "@/components/site/FloatingVideoCard";
import { ScrollToTop } from "@/components/site/ScrollToTop";
import { ChatBot } from "@/components/site/ChatBot";
import { PageTransition } from "@/components/motion/PageTransition";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Clear Sight Opticians — Luxury Eyewear & Smart Glasses in Hyderabad" },
      { name: "description", content: "Hyderabad's premium destination for luxury eyewear, prescription glasses, sunglasses, contact lenses and Ray-Ban Meta & Oakley Meta smart glasses." },
      { name: "author", content: "Clear Sight Opticians" },
      { property: "og:title", content: "Clear Sight Opticians — Luxury Eyewear & Smart Glasses" },
      { property: "og:description", content: "Curated luxury frames and next-generation smart glasses, fitted by experts across Hyderabad." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#ffffff", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#0b0b12", media: "(prefers-color-scheme: dark)" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/avif", href: "/clear-sight-logo.avif" },
      { rel: "apple-touch-icon", href: "/clear-sight-logo.avif" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@type": "OpticalBusiness",
  "name": "Clear Sight Opticians",
  "image": "https://www.clearsightopticians.in/clear-sight-logo.avif",
  "@id": "https://www.clearsightopticians.in/#organization",
  "url": "https://www.clearsightopticians.in/",
  "telephone": "+919440525789",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB Colony, Kukatpally",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500085",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.493921,
    "longitude": 78.397634
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "09:00",
    "closes": "21:30"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+919440525789",
    "contactType": "customer service",
    "areaServed": "IN",
    "availableLanguage": ["English", "Telugu", "Hindi"]
  },
  "department": [
    {
      "@type": "Optician",
      "name": "Clear Sight Opticians - Kukatpally (KPHB)",
      "image": "https://www.clearsightopticians.in/clear-sight-logo.avif",
      "telephone": "+919440525789",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500085",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.493921,
        "longitude": 78.397634
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:30"
      }
    },
    {
      "@type": "Optician",
      "name": "Clear Sight Opticians - Nizampet",
      "image": "https://www.clearsightopticians.in/clear-sight-logo.avif",
      "telephone": "+919440525789",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Beside Vazra Nirman Pushpak, Nizampet Colony",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500090",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.5186,
        "longitude": 78.3854
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:30"
      }
    },
    {
      "@type": "Optician",
      "name": "Clear Sight Opticians - Bowenpally",
      "image": "https://www.clearsightopticians.in/clear-sight-logo.avif",
      "telephone": "+919440525789",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Delhi Public School, Sikh Village Road, Bowenpally",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500009",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 17.4764,
        "longitude": 78.4842
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "21:30"
      }
    }
  ]
};

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SCHEMA_DATA),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    // Disable browser's auto scroll restoration on page reload
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Enforce scroll to top on route change or initial load
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        <SiteFooter />
        {isHome && <FloatingVideoCard />}
        <ScrollToTop />
        <ChatBot />
      </div>
    </QueryClientProvider>
  );
}
