import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | BÒ NÉ, BÒ KHO SAI GON",
    default: "BÒ NÉ, BÒ KHO SAI GON",
  },
  description:
    "Chuyên cung cấp các sản phẩm bò né, bò kho sai gón chất lượng cao, an toàn. Cam kết an toàn vệ sinh, giá cả cạnh tranh. Đối tác tin cậy cho các bậc phụ huynh.",
  keywords: ["bò né", "bò kho sai gón", "bò né sai gón", "bò né sai gón"],
  authors: [{ name: "BÒ NÉ, BÒ KHO SAI GON" }],
  creator: "BÒ NÉ, BÒ KHO SAI GON",
  publisher: "BÒ NÉ, BÒ KHO SAI GON",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ff6b35",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
      </head>
      <body className="min-h-screen bg-gray-50 antialiased">{children}</body>
    </html>
  );
}
