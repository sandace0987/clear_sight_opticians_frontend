export const SITE_URL = "https://www.clearsightopticians.in";
export const SITE_NAME = "Clear Sight Opticians";
export const SITE_LOGO = `${SITE_URL}/clear-sight-logo.avif`;
export const DEFAULT_SOCIAL_IMAGE = SITE_LOGO;

import { CONTACT_PHONE, CONTACT_PHONE_RAW } from "./contact-config";

type SeoMeta = Record<string, string>;
type SeoLink = Record<string, string>;
type SeoScript = { type: "application/ld+json"; children: string };

type BreadcrumbItem = {
  name: string;
  path: string;
};

type SeoHeadOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "product";
  image?: string;
  noindex?: boolean;
  /**
   * When true, no <link rel="canonical"> is emitted.
   * Use only in the root layout where each child route
   * emits its own canonical — prevents duplicate canonicals.
   */
  noCanonical?: boolean;
  meta?: SeoMeta[];
  links?: SeoLink[];
  schema?: unknown[];
};

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatCanonicalUrl(path = "/"): string {
  let cleanPath = path;
  if (cleanPath.startsWith("http://") || cleanPath.startsWith("https://")) {
    try {
      const parsed = new URL(cleanPath);
      cleanPath = parsed.pathname;
    } catch {
      // fallback
    }
  }

  // Strip query parameters and hash fragments
  cleanPath = cleanPath.split("?")[0].split("#")[0];

  // Collapse duplicate slashes
  cleanPath = cleanPath.replace(/\/+/g, "/");

  // Ensure leading slash
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  // Homepage canonical
  if (cleanPath === "/") {
    return `${SITE_URL}/`;
  }

  // Non-root routes: trim trailing slash for clean canonicals
  if (cleanPath.length > 1 && cleanPath.endsWith("/")) {
    cleanPath = cleanPath.slice(0, -1);
  }

  return `${SITE_URL}${cleanPath}`;
}

export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function createSeoHead({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_SOCIAL_IMAGE,
  noindex = false,
  noCanonical = false,
  meta = [],
  links = [],
  schema = [],
}: SeoHeadOptions): {
  meta: SeoMeta[];
  links: SeoLink[];
  scripts?: SeoScript[];
} {
  const canonicalUrl = formatCanonicalUrl(path);
  const canonicalLink = noCanonical ? [] : [{ rel: "canonical", href: canonicalUrl }];
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: noindex ? "noindex, follow" : "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonicalUrl },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
      ...meta,
    ],
    links: [...canonicalLink, ...links],
    scripts: schema.length
      ? schema.map((entry) => ({
        type: "application/ld+json" as const,
        children: JSON.stringify(entry),
      }))
      : undefined,
  };
}

export type StoreLocation = {
  id: "kphb" | "nizampet" | "bowenpally";
  name: string;
  tag: string;
  address: string;
  streetAddress: string;
  locality: string;
  postalCode: string;
  phone: string;
  phoneHref: string;
  hours: string;
  latitude: number;
  longitude: number;
  nearbyAreas: string[];
  services: string[];
  visitNote: string;
  parkingNote: string;
  mapsUrl: string;
};

const PHONE_DISPLAY = CONTACT_PHONE;
const PHONE_E164 = `+${CONTACT_PHONE_RAW}`;

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: "kphb",
    name: "Kukatpally (KPHB)",
    tag: "Flagship",
    address: "Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB, Hyderabad - 500085",
    streetAddress: "Shop #4, Padmaja Complex, JNTU Road, 6th Phase, KPHB",
    locality: "Hyderabad",
    postalCode: "500085",
    phone: PHONE_DISPLAY,
    phoneHref: `tel:${PHONE_E164}`,
    hours: "Mon-Sun: 9:00 AM - 9:30 PM",
    latitude: 17.493921,
    longitude: 78.397634,
    nearbyAreas: ["KPHB Colony", "Kukatpally", "JNTU", "Miyapur", "Pragathi Nagar"],
    services: [
      "ZEISS eye testing",
      "designer eyewear styling",
      "Ray-Ban Meta AI glasses demos",
      "progressive and computer lenses",
      "frame adjustments",
    ],
    visitNote: "Best for premium frame selection, smart glasses demos, and full-service prescription lens fitting near JNTU Road.",
    parkingNote: "Street and complex-side parking is usually easiest outside peak evening hours.",
    mapsUrl: mapsSearchUrl("Clear Sight Opticians KPHB Padmaja Complex JNTU Road Hyderabad 500085"),
  },
  {
    id: "nizampet",
    name: "Nizampet",
    tag: "Studio",
    address: "58, Blooming Dale Rd, Madhura Nagar, Nizampet, Hyderabad, Telangana 500090",
    streetAddress: "58, Blooming Dale Road, Madhura Nagar, Nizampet",
    locality: "Hyderabad",
    postalCode: "500090",
    phone: PHONE_DISPLAY,
    phoneHref: `tel:${PHONE_E164}`,
    hours: "Mon-Sun: 9:00 AM - 9:30 PM",
    latitude: 17.5186,
    longitude: 78.3854,
    nearbyAreas: ["Nizampet", "Bachupally", "Pragathi Nagar", "Miyapur", "Hyder Nagar"],
    services: [
      "walk-in eye tests",
      "contact lens guidance",
      "kids eyewear",
      "computer glasses",
      "designer frame repairs",
    ],
    visitNote: "A convenient studio for Nizampet and Bachupally families who need eye checks, kids frames, and everyday prescription eyewear.",
    parkingNote: "Plan a little extra time during weekend evenings on Blooming Dale Road.",
    mapsUrl: mapsSearchUrl("Clear Sight Opticians 58 Blooming Dale Road Madhura Nagar Nizampet Hyderabad 500090"),
  },
  {
    id: "bowenpally",
    name: "Bowenpally",
    tag: "Studio",
    address:
      "Sikh Rd, Cantonment Co-op Housing Society, Radha Swamy Colony, Bowenpally, Secunderabad, Telangana 500009",
    streetAddress: "Sikh Road, Cantonment Co-op Housing Society, Radha Swamy Colony, Bowenpally",
    locality: "Secunderabad",
    postalCode: "500009",
    phone: PHONE_DISPLAY,
    phoneHref: `tel:${PHONE_E164}`,
    hours: "Mon-Sun: 9:00 AM - 9:30 PM",
    latitude: 17.4764,
    longitude: 78.4842,
    nearbyAreas: ["Bowenpally", "Sikh Village", "Cantonment", "Paradise", "Begumpet"],
    services: [
      "precision eye testing",
      "premium sunglasses",
      "progressive lenses",
      "frame fitting",
      "lifetime adjustments",
    ],
    visitNote: "Ideal for Secunderabad and Cantonment customers looking for premium sunglasses, prescription lenses, and reliable frame service.",
    parkingNote: "Local road parking is typically available near the studio outside school pickup hours.",
    mapsUrl: mapsSearchUrl("Clear Sight Opticians Sikh Road Bowenpally Secunderabad 500009"),
  },
];

function openingHoursSchema() {
  return {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "09:00",
    closes: "21:30",
  };
}

export function storeSchema(location: StoreLocation) {
  const id = `${SITE_URL}/stores#${location.id}`;
  return {
    "@type": ["OpticalBusiness", "LocalBusiness"],
    "@id": id,
    name: `${SITE_NAME} - ${location.name}`,
    description: location.visitNote,
    image: SITE_LOGO,
    url: `${SITE_URL}/stores#${location.id}`,
    telephone: PHONE_E164,
    priceRange: "$$",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Card, UPI",
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    sameAs: [location.mapsUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: location.streetAddress,
      addressLocality: location.locality,
      addressRegion: "Telangana",
      postalCode: location.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    openingHoursSpecification: openingHoursSchema(),
    areaServed: location.nearbyAreas.map((area) => ({ "@type": "Place", name: area })),
    availableLanguage: ["English", "Telugu", "Hindi"],
    hasMap: location.mapsUrl,
    // AggregateRating enables star ratings in Google local pack and Knowledge Panel.
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "97",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sandeep" },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
        reviewBody: "Had an excellent experience buying Oakley Meta HSTN glasses here. Patient, knowledgeable, and customer-first service!",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Tejaswi R." },
        reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
        reviewBody: "Relying on Clear Sight for 16+ years. Extraordinary commitment to customer care.",
      },
    ],
  };
}

// Social profiles for entity linkage — used in Organization sameAs
const SOCIAL_PROFILES = [
  "https://www.instagram.com/clearsight.official",
  "https://www.facebook.com/clearsight.official/",
  // Google Business Profile shared link
  "https://share.google/5bjvX2n0dfikf7Dcf",
];

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      logo: SITE_LOGO,
      image: SITE_LOGO,
      telephone: PHONE_E164,
      // foundingDate enables the "Est. 2009" Knowledge Panel signal
      foundingDate: "2009",
      slogan: "Vision, made personal.",
      sameAs: SOCIAL_PROFILES,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: PHONE_E164,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Telugu", "Hindi"],
      },
      department: STORE_LOCATIONS.map((location) => ({ "@id": `${SITE_URL}/stores#${location.id}` })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
      // SearchAction enables Sitelinks Searchbox in Google SERP
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/brands?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    ...STORE_LOCATIONS.map(storeSchema),
  ],
};

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function itemListSchema(name: string, path: string, items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function imageObjectSchema(url: string, caption?: string, width = 1200, height = 630) {
  return {
    "@type": "ImageObject",
    contentUrl: absoluteUrl(url),
    url: absoluteUrl(url),
    width: `${width}`,
    height: `${height}`,
    ...(caption ? { caption } : {}),
  };
}

export function reviewSchema(reviews: { author: string; rating: number; body: string }[]) {
  return reviews.map((r) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: r.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: r.body,
  }));
}
