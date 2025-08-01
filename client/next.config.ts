/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "cdn.thucphambonehanh.com",
      },
      // Add other valid hostnames if needed
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    minimumCacheTTL: 86400 * 365, // Cache for 1 year
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    scrollRestoration: true,
  },
  // swcMinify is default
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Headers for performance and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Cache optimization
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Optimize core web vitals by preloading critical assets
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</images/logo/logo.jpg>; rel=preload; as=image',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
