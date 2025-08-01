import Script from 'next/script';

interface LocalBusinessJsonLdProps {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  images: string[];
  openingHours: string[];
  priceRange: string;
}

export const LocalBusinessJsonLd = ({
  name,
  description,
  url,
  telephone,
  address,
  geo,
  images,
  openingHours,
  priceRange,
}: LocalBusinessJsonLdProps) => {
  // Chuyển đổi các từ khóa có dấu sang không dấu
  const nameNonAccent = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
  
  const descriptionWithBoth = `${description} - ${
    nameNonAccent
  }. Thuc pham Bo Ne Hanh Da Nang (Thực phẩm Bò Né Hạnh Đà Nẵng)`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name,
    alternateName: nameNonAccent,
    description: descriptionWithBoth,
    url,
    telephone,
    address: {
      '@type': 'PostalAddress',
      ...address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...geo,
    },
    image: images,
    openingHours,
    priceRange,
    servesCuisine: ['Vietnamese', 'Beef', 'Food Processing'],
    keywords: [
      'Thực phẩm Bò Né Hạnh',
      'Bo Ne Hanh',
      'Bò né Đà Nẵng',
      'Bo ne Da Nang',
      'Bò kho Sài Gòn',
      'Bo kho Sai Gon',
      'Thực phẩm chế biến sẵn',
      'Thuc pham che bien san',
      'Đồ ăn đông lạnh',
      'Do an dong lanh',
      'Thực phẩm tươi sạch',
      'Thuc pham tuoi sach',
    ]
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const ProductJsonLd = ({
  name,
  description,
  image,
  price,
  category,
  brand,
}: {
  name: string;
  description: string;
  image: string;
  price: string;
  category: string;
  brand: string;
}) => {
  // Chuyển đổi các từ khóa có dấu sang không dấu
  const nameNonAccent = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
  
  const descriptionWithBoth = `${description} - ${nameNonAccent}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    alternateName: nameNonAccent,
    description: descriptionWithBoth,
    image,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'VND',
      availability: 'https://schema.org/InStock',
    },
    category,
    brand: {
      '@type': 'Brand',
      name: brand,
    },
  };

  return (
    <Script
      id="product-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const BreadcrumbJsonLd = ({
  items,
}: {
  items: { name: string; url: string }[];
}) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': item.url,
        name: item.name,
      },
    })),
  };

  return (
    <Script
      id="breadcrumb-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export const WebsiteJsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CTY Thực Phẩm Bò Né Hạnh',
    alternateName: 'CTY Thuc Pham Bo Ne Hanh',
    url: 'https://thucphambonehanh.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://thucphambonehanh.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <Script
      id="website-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}; 