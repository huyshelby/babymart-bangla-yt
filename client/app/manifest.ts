import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Công ty thực phẩm bò né hạnh',
    short_name: 'Bò né hạnh',
    description: 'Chuyên cung cấp sỉ lẻ các loại thực phẩm chế biến Bò né, bò kho tại Đà Nẵng.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFBEB',
    theme_color: '#166534',
    icons: [
      {
        src: '/images/logo/logo.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/images/logo/logo.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
    lang: 'vi',
    dir: 'ltr',
    categories: ['food', 'business', 'shopping'],
  };
} 