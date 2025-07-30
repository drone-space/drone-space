import accessories from '@/data/accessories';
import { REVALIDATE } from '@/data/constants';
import products from '@/data/products';
import { postsGet } from '@/handlers/requests/database/post';
import { PostRelations } from '@/types/models/post';
import { linkify } from '@/utilities/formatters/string';
import { MetadataRoute } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = REVALIDATE.WEEK;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dronespace.co.ke';

  const staticRoutes = [
    '', // homepage
    '/about',
    '/about/contact',
    '/about/gallery',
    '/drone-solutions',
    '/drone-solutions/light-shows',
    '/drone-training',
    '/drone-training/pricing',
    '/legal/policy',
    '/legal/terms',
    '/resources/blog',
    '/resources/faq',
    '/shop',
    '/shop/accessories',
    '/shop/drones/agriculture',
    '/shop/drones/camera',
    '/shop/drones/cinematography',
    '/shop/drones/enterprise',
    '/shop/drones/mapping',
    '/shop/drones/upcoming',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const { posts }: { posts: PostRelations[] } = await postsGet();

  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/resources/blog/${linkify(post.title)}-${post.id}`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const beginningOfYear = new Date(new Date().getFullYear(), 0, 1);

  const accessoryRoutes = accessories.map((accessory) => ({
    url: `${baseUrl}/shop/accessories/${linkify(accessory.title.long)}`,
    lastModified: beginningOfYear,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const agricultureDrones = products.filter((p) => p.category == 'agriculture');

  const agricultureDroneRoutes = agricultureDrones.map((drone) => ({
    url: `${baseUrl}/shop/drones/agriculture/${linkify(drone.title.long)}`,
    lastModified: beginningOfYear,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const cameraDrones = products.filter((p) => p.category == 'camera');

  const cameraDroneRoutes = cameraDrones.map((drone) => ({
    url: `${baseUrl}/shop/drones/camera/${linkify(drone.title.long)}`,
    lastModified: beginningOfYear,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const cinematographyDrones = products.filter(
    (p) => p.category == 'cinematography'
  );

  const cinematographyDroneRoutes = cinematographyDrones.map((drone) => ({
    url: `${baseUrl}/shop/drones/cinematography/${linkify(drone.title.long)}`,
    lastModified: beginningOfYear,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const enterpriseDrones = products.filter((p) => p.category == 'enterprise');

  const enterpriseDroneRoutes = enterpriseDrones.map((drone) => ({
    url: `${baseUrl}/shop/drones/enterprise/${linkify(drone.title.long)}`,
    lastModified: beginningOfYear,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const mappingDrones = products.filter((p) => p.category == 'mapping');

  const mappingDroneRoutes = mappingDrones.map((drone) => ({
    url: `${baseUrl}/shop/drones/mapping/${linkify(drone.title.long)}`,
    lastModified: beginningOfYear,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const upcomingDrones = products.filter((p) => p.category == 'upcoming');

  const upcomingDroneRoutes = upcomingDrones.map((drone) => ({
    url: `${baseUrl}/shop/drones/upcoming/${linkify(drone.title.long)}`,
    lastModified: beginningOfYear,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  const dynamicRoutes = [
    ...postRoutes,
    ...accessoryRoutes,
    ...agricultureDroneRoutes,
    ...cameraDroneRoutes,
    ...cinematographyDroneRoutes,
    ...enterpriseDroneRoutes,
    ...mappingDroneRoutes,
    ...upcomingDroneRoutes,
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
