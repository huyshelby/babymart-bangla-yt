import { getServerSideSitemap } from 'next-sitemap';
import type { NextRequest } from 'next/server';
import type { ISitemapField } from 'next-sitemap';
import { fetchProductsForSitemap } from '@/lib/fetchSitemapData';

export async function GET(request: NextRequest) {
  const baseUrl = 'https://thucphambonehanh.com';
  
  // Fetch dynamic product data using our utility function
  const products = await fetchProductsForSitemap();
  
  // Create sitemap entries for products
  const productUrls: ISitemapField[] = products.map(product => ({
    loc: `${baseUrl}/san-pham/${product.slug}`,
    lastmod: new Date().toISOString(),
    changefreq: 'daily' as const,
    priority: 0.8,
  }));

  // You can add more dynamic pages here, such as:
  
  // Blog posts
  // const posts = await fetchBlogPosts();
  // const postUrls: ISitemapField[] = posts.map(post => ({ ... }));
  
  // News items
  // const news = await fetchNewsItems();
  // const newsUrls: ISitemapField[] = news.map(item => ({ ... }));

  // Combine all dynamic entries
  const allFields = [...productUrls];

  // Return the sitemap XML
  return getServerSideSitemap(allFields);
} 