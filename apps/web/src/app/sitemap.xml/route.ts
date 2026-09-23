import { NextResponse } from 'next/server';
import { sitemapRoutes } from '@web/data/links';
import { PostRelations } from '@repo/types';
import { postsGet } from '@repo/handlers';
// import accessories from '@web/data/accessories';
import { linkify } from '@repo/utils';
import { getApiUrl, products } from '@repo/constants';
import { getBaseUrl } from '@repo/constants';

export const dynamic = 'force-static';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const beginningOfYear = new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0];

  const baseUrl = (await getBaseUrl()).WEB;

  // --- POST ROUTES ---
  let postRoutes: any[] = [];
  try {
    const { items: posts }: { items: PostRelations[] } = await postsGet({
      apiUrl: await getApiUrl(),
    });

    if (posts) {
      postRoutes = posts.map((post) => ({
        loc: `${baseUrl}/blog/${linkify(post.title)}-${post.id}`,
        lastmod: post.updatedAt,
        changefreq: 'weekly',
        priority: 0.5,
      }));
    }
  } catch (e) {
    console.error('Posts fetch error:', e);
  }

  // --- PRODUCT ROUTES BY CATEGORY ---
  const productRoutes = [
    { key: 'agriculture', base: 'agriculture' },
    { key: 'camera', base: 'camera' },
    { key: 'cinematography', base: 'cinematography' },
    { key: 'enterprise', base: 'enterprise' },
    { key: 'mapping', base: 'mapping' },
    { key: 'upcoming', base: 'upcoming' },
  ]
    .map(({ key, base }) =>
      products
        .filter((p) => p.category === key)
        .map((p) => ({
          loc: `${baseUrl}/shop/drones/${base}/${linkify(p.title.long)}`,
          lastmod: beginningOfYear,
          changefreq: 'weekly',
          priority: 0.5,
        })),
    )
    .flat();

  // --- STATIC ROUTES (Strings mapped to Objects) ---
  const rawStaticRoutes = [
    '', // homepage
    ...sitemapRoutes,
  ];

  const staticRoutes = rawStaticRoutes.map((route) => ({
    loc: `${baseUrl}${route}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // --- MERGE ALL ALREADY-FORMATTED ROUTES ---
  const allRoutes = [...staticRoutes, ...postRoutes, ...productRoutes];

  // --- CONVERT TO XML ---
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map((r) => {
    return `<url>
  <loc>${escapeXml(r.loc)}</loc>
  <lastmod>${escapeXml(r.lastmod)}</lastmod>
  <changefreq>${escapeXml(r.changefreq)}</changefreq>
  <priority>${escapeXml(String(r.priority))}</priority>
</url>`;
  })
  .join('\n')}
</urlset>`.trim();

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
