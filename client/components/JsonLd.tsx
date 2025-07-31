import React from 'react';
import Script from 'next/script';

interface JsonLdProps {
  organizationData?: boolean;
  localBusinessData?: boolean;
  breadcrumbData?: {
    items: Array<{
      position: number;
      name: string;
      item: string;
    }>;
  };
}

export default function JsonLd({ 
  organizationData = true, 
  localBusinessData = true, 
  breadcrumbData 
}: JsonLdProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Công ty thực phẩm bò né hạnh',
    url: 'https://bonehanh.com',
    logo: 'https://bonehanh.com/images/logo/logo.jpg',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+84-XXX-XXX-XXX', // Add actual phone number
      contactType: 'customer service',
      areaServed: 'VN',
      availableLanguage: ['Vietnamese']
    },
    sameAs: [
      'https://www.facebook.com/bonehanh', // Add actual Facebook URL
      'https://www.instagram.com/bonehanh' // Add actual Instagram URL
    ]
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Công ty thực phẩm bò né hạnh',
    image: 'https://bonehanh.com/images/logo/logo.jpg',
    '@id': 'https://bonehanh.com',
    url: 'https://bonehanh.com',
    telephone: '+84-XXX-XXX-XXX', // Add actual phone number
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Đà Nẵng', // Add actual street address
      addressLocality: 'Đà Nẵng',
      addressRegion: 'Đà Nẵng',
      postalCode: '550000', // Add actual postal code
      addressCountry: 'VN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 16.0544, // Replace with actual coordinates
      longitude: 108.2022 // Replace with actual coordinates
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '08:00',
      closes: '21:00'
    },
    priceRange: '$$',
    servesCuisine: 'Vietnamese',
    menu: 'https://bonehanh.com/#san-pham'
  };

  const breadcrumbSchema = breadcrumbData ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbData.items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item
    }))
  } : null;

  // Combine all schemas
  const schemas = [];
  if (organizationData) schemas.push(organizationSchema);
  if (localBusinessData) schemas.push(localBusinessSchema);
  if (breadcrumbData) schemas.push(breadcrumbSchema);

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`json-ld-${index}`}
          id={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
} 