import { Metadata } from 'next';

// Hàm chuyển đổi text có dấu sang không dấu
const removeAccents = (str: string): string => {
  return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D');
};

// Danh sách từ khóa chính - thêm cả bản có dấu và không dấu
const keyProductTerms = [
  'Bò Né Hạnh', 'Bo Ne Hanh',
  'Thực phẩm bò né', 'Thuc pham bo ne',
  'Thực phẩm Đà Nẵng', 'Thuc pham Da Nang',
  'Bò Bít Tết', 'Bo Bit Tet',
  'Đồ ăn sạch', 'Do an sach',
];

// Tạo metadata cơ bản
export const baseMetadata: Metadata = {
  title: 'CTY Thực Phẩm Bò Né Hạnh | Thực phẩm sạch Đà Nẵng',
  description: 
    'CTY Thực Phẩm Bò Né Hạnh cung cấp thực phẩm sạch, an toàn, chất lượng cao tại Đà Nẵng. ' + 
    'Chuyên các sản phẩm bò né, bò bít tết, thực phẩm tươi sống và đã chế biến sẵn.',
  keywords: keyProductTerms.join(', '),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://thucphambonehanh.com',
  },
  openGraph: {
    title: 'CTY Thực Phẩm Bò Né Hạnh | Thực phẩm sạch Đà Nẵng',
    description: 
      'CTY Thực Phẩm Bò Né Hạnh cung cấp thực phẩm sạch, an toàn, chất lượng cao tại Đà Nẵng. ' + 
      'Chuyên các sản phẩm bò né, bò bít tết, thực phẩm tươi sống và đã chế biến sẵn.',
    url: 'https://bonehanh.com',
    siteName: 'CTY Thực Phẩm Bò Né Hạnh',
    images: [
      {
        url: 'https://thucphambonehanh.com/images/logo/logo.jpg',
        width: 800,
        height: 600,
        alt: 'CTY Thực Phẩm Bò Né Hạnh Logo',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CTY Thực Phẩm Bò Né Hạnh | Thực phẩm sạch Đà Nẵng',
    description: 
      'CTY Thực Phẩm Bò Né Hạnh cung cấp thực phẩm sạch, an toàn, chất lượng cao tại Đà Nẵng. ' + 
      'Chuyên các sản phẩm bò né, bò bít tết, thực phẩm tươi sống và đã chế biến sẵn.',
    images: ['https://thucphambonehanh.com/images/logo/logo.jpg'],
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  authors: [
    { name: 'CTY Thực Phẩm Bò Né Hạnh' }
  ],
  creator: 'CTY Thực Phẩm Bò Né Hạnh',
  publisher: 'CTY Thực Phẩm Bò Né Hạnh',
  category: 'Food & Beverage',
};

// Cấu hình metadata cho các trang con
export function generateMetadata({ 
  title, 
  description,
  path = ''
}: { 
  title?: string; 
  description?: string; 
  path?: string;
}): Metadata {
  const fullTitle = title 
    ? `${title} | CTY Thực Phẩm Bò Né Hạnh`
    : baseMetadata.title as string;
  
  const fullDescription = description || baseMetadata.description as string;
  
  return {
    ...baseMetadata,
    title: fullTitle,
    description: fullDescription,
    alternates: {
      canonical: `https://thucphambonehanh.com${path}`,
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: fullTitle,
      description: fullDescription,
      url: `https://thucphambonehanh.com${path}`,
    }
  };
}

export default baseMetadata; 