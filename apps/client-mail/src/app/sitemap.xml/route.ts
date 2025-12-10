// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';
import { sitemapRoutes } from '@/data/routes';
import { PostRelations } from '@repo/types/models/post';
import { postsGet } from '@repo/handlers/requests/database/posts';
// import accessories from '@/data/accessories';
import { linkify } from '@repo/utilities/url';
import products from '@/data/products';

export const dynamic = 'force-static';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const beginningOfYear = new Date(new Date().getFullYear(), 0, 1)
    .toISOString()
    .split('T')[0];

  // --- STATIC ROUTES ---
  const staticRoutes = ['', ...sitemapRoutes].map((route) => ({
    loc: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}${route}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // --- POSTS ---
  let postRoutes: any[] = [];

  try {
    const { items: posts }: { items: PostRelations[] } = await postsGet();
    if (posts) {
      postRoutes = posts.map((post) => ({
        loc: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/blog/${linkify(
          post.title
        )}-${post.id}`,
        lastmod: post.updated_at,
        changefreq: 'weekly',
        priority: 0.5,
      }));
    }
  } catch (e) {
    console.error('Posts fetch error:', e);
  }

  // // --- ACCESSORIES ---
  // const accessoryRoutes = accessories.map((acc) => ({
  //   loc: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/shop/accessories/${linkify(
  //     acc.title.long
  //   )}`,
  //   lastmod: beginningOfYear,
  //   changefreq: 'weekly',
  //   priority: 0.5,
  // }));

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
          loc: `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/shop/drones/${base}/${linkify(
            p.title.long
          )}`,
          lastmod: beginningOfYear,
          changefreq: 'weekly',
          priority: 0.5,
        }))
    )
    .flat();

  // --- MERGE ALL ROUTES ---
  const allRoutes = [
    ...staticRoutes,
    ...postRoutes,
    // ...accessoryRoutes,
    ...productRoutes,
  ];

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
