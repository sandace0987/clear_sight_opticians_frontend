import { HOUSES } from '@/lib/brand-catalog';

const SITE_URL = 'https://www.clearsightopticians.in';

const BUILD_DATE = new Date().toISOString().split('T')[0];

const pages = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
  },
  {
    path: '/eye-test-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/zeiss-eye-test-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/ray-ban-meta-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/ray-ban-meta-offer-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/ray-ban-glasses-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/designer-eyewear-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/contact-lenses-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/computer-glasses-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/optician-kphb',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/what-are-progressive-lenses',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/ray-ban-vs-oakley',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/ai-glasses',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/corporate-gifting',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/corporate-eye-test-camps-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/corporate-eyewear-vouchers-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/executive-luxury-gifting-hyderabad',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/brands',
    priority: '0.9',
    changefreq: 'weekly',
  },
  {
    path: '/stores',
    priority: '0.9',
    changefreq: 'monthly',
  },
  {
    path: '/about',
    priority: '0.8',
    changefreq: 'monthly',
  },
  {
    path: '/privacy-policy',
    priority: '0.3',
    changefreq: 'yearly',
  },
  {
    path: '/terms-and-conditions',
    priority: '0.3',
    changefreq: 'yearly',
  },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildSitemap(): string {
  const brandPages = HOUSES.map((h) => ({
    path: `/brands/${h.slug}`,
    priority: '0.7',
    changefreq: 'weekly' as const,
  }));

  const allPages = [...pages, ...brandPages];

  const urls = allPages
    .map(
      ({ path, priority, changefreq }) => `
  <url>
    <loc>${escapeXml(`${SITE_URL}${path}`)}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const GET = async () => {
  return new Response(buildSitemap(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control':
        'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
};