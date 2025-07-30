/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      // Xóa bỏ entry không hợp lệ "hostname: '**'"
      // Thêm các hostname hợp lệ khác của bạn vào đây nếu cần
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    // optimizeCss đã được tích hợp sẵn
    scrollRestoration: true,
  },
  // swcMinify đã là mặc định
};

export default nextConfig;
