import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BabyMart - Đồ Dùng Trẻ Em Chất Lượng",
  description:
    "Chuyên cung cấp các sản phẩm dành cho trẻ em chất lượng cao, an toàn. Cam kết an toàn vệ sinh, giá cả cạnh tranh. Đối tác tin cậy cho các bậc phụ huynh.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
