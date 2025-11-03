// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path');

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://efesurucukursu.example';

const generateSitemap = () => {
  // Static pages with priorities
  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/hakkimizda', priority: 0.8, changefreq: 'monthly' },
    { url: '/subelerimiz', priority: 0.8, changefreq: 'monthly' },
    { url: '/programlar', priority: 0.9, changefreq: 'weekly' },
    { url: '/iletisim', priority: 0.7, changefreq: 'monthly' },
    { url: '/sss', priority: 0.6, changefreq: 'monthly' },
  ];

  // Dynamic pages (add your dynamic routes here)
  const dynamicPages = [
    // Example: { url: '/blog/post-1', priority: 0.7, changefreq: 'monthly' },
  ];

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      const lastmod = new Date().toISOString().split('T')[0];
      return `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;

  const filePath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(filePath, sitemap, 'utf-8');
  console.log('✅ sitemap.xml generated successfully!');
};

generateSitemap();

