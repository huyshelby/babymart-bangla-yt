/** @type {import('next-sitemap').IConfig} */

// Hàm chuyển đổi text có dấu sang không dấu
function removeAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
}

// Tạo danh sách các trang với cả phiên bản có dấu và không dấu
const generateAlternatePages = (pages) => {
  const result = [];
  
  pages.forEach(page => {
    // Thêm phiên bản gốc
    result.push({
      loc: page.loc,
      lastmod: page.lastmod,
      changefreq: page.changefreq,
      priority: page.priority,
    });
    
    // Thêm meta description với cả phiên bản có dấu và không dấu
    if (page.alternateRefs) {
      const alternateWithoutAccents = page.alternateRefs.map(alt => {
        // Thêm phiên bản không dấu vào trường hrefLang
        return {
          ...alt,
          title: `${alt.title} - ${removeAccents(alt.title)}`,
          description: `${alt.description} - ${removeAccents(alt.description)}`,
        };
      });
      
      result[result.length - 1].alternateRefs = alternateWithoutAccents;
    }
  });
  
  return result;
};

// Danh sách các trang chính
const pages = [
  {
    loc: '/',
    lastmod: new Date().toISOString(),
    changefreq: 'daily',
    priority: 1.0,
    alternateRefs: [
      {
        title: 'Thực phẩm Bò Né Hạnh - Trang chủ',
        description: 'Công ty Thực phẩm Bò Né Hạnh cung cấp các sản phẩm thực phẩm chất lượng cao tại Đà Nẵng',
        hrefLang: 'vi-VN',
      },
    ],
  },
  {
    loc: '/san-pham',
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
    alternateRefs: [
      {
        title: 'Sản phẩm Bò Né Hạnh - Bò Né, Bò Kho, Patê',
        description: 'Danh sách các sản phẩm thực phẩm chất lượng cao của Công ty Bò Né Hạnh tại Đà Nẵng',
        hrefLang: 'vi-VN',
      },
    ],
  },
];

module.exports = {
  siteUrl: 'https://thucphambonehanh.com',
  generateRobotsTxt: true,
  outDir: 'public',
  sitemapSize: 7000,
  exclude: ['/admin/*', '/private/*'],
  additionalPaths: async (config) => {
    const result = [];
    const enhancedPages = generateAlternatePages(pages);
    
    for (const page of enhancedPages) {
      result.push({
        loc: page.loc,
        lastmod: page.lastmod,
        changefreq: page.changefreq,
        priority: page.priority,
        alternateRefs: page.alternateRefs,
      });
    }
    
    return result;
  },
  // Thêm các trang bổ sung nếu cần
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs || [],
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://thucphambonehanh.com/server-sitemap.xml',
    ],
  },
}; 