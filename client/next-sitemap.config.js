/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://thucphambonehanh.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://thucphambonehanh.com/server-sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private', '/admin'],
      },
    ],
  },
  outDir: 'public',
}; 