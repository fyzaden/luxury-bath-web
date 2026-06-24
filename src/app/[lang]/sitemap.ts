import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gnldusakabin.com.tr';

  const routes = [
    '',
    '/tr',
    '/en',

    '/tr/hakkimizda',
    '/tr/urunler',
    '/tr/referanslar',
    '/tr/iletisim',

    '/en/about',
    '/en/products',
    '/en/references',
    '/en/contact',
  ];

  return routes.map((route) => {
    const isMainPage = route === '' || route === '/tr' || route === '/en';

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: isMainPage ? 1.0 : 0.8,
    };
  });
}
