import axios from 'axios';

interface Product {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  images?: string[];
  price?: number;
  category?: string;
}

interface ApiProduct {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  images?: string[];
  price?: number;
  category?: string;
  // Use more specific types for additional fields that might exist in the API
  [key: string]: string | number | boolean | string[] | undefined;
}

/**
 * Fetches product data from the API for sitemap generation
 */
export async function fetchProductsForSitemap(): Promise<Product[]> {
  try {
    // Use the backend API to fetch products
    // Replace with your actual API endpoint
    const response = await axios.get<ApiProduct[]>('https://thucphambonehanh.com/api/products');
    
    return response.data.map((product: ApiProduct) => ({
      ...product,
      // Generate slugs if they don't exist
      slug: product.slug || generateSlug(product.name),
    }));
  } catch (error) {
    console.error('Error fetching products for sitemap:', error);
    
    // Return sample products as fallback
    return getSampleProducts();
  }
}

/**
 * Generate a URL-friendly slug from a string
 */
function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD') // Normalize diacritical marks
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritical marks
    .replace(/đ/g, 'd') // Replace Vietnamese đ with d
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
    .trim();
}

/**
 * Returns sample product data for when API is not available
 */
function getSampleProducts(): Product[] {
  return [
    { id: '1', name: 'Bò Né Sài Gòn', slug: 'bo-ne-sai-gon' },
    { id: '2', name: 'Bò Kho Đặc Biệt', slug: 'bo-kho-dac-biet' },
    { id: '3', name: 'Patê', slug: 'pate' },
    { id: '4', name: 'Nem Nướng', slug: 'nem-nuong' },
    { id: '5', name: 'Chả Lụa', slug: 'cha-lua' },
  ];
} 