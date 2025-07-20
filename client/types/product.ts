export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  specifications: {
    key: string;
    value: string;
  }[];
  features: string[];
  price: number;
  salePrice?: number;
  category: string;
  images: {
    src: string;
    alt: string;
  }[];
  videos?: {
    src: string;
    thumbnail: string;
  }[];
  stock: number;
  ageRange: string;
  brand: string;
  tags: string[];
  reviews?: {
    rating: number;
    count: number;
  };
  relatedProducts?: string[];
};
