import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactPopup } from "@/components/ContactPopup";
import ScrollProgressBar from "@/components/ScrollProgressBar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

// Add Be Vietnam Pro font
import { Be_Vietnam_Pro } from "next/font/google";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Đại Lý Thực Phẩm 33 Ngon",
    default: "Đại Lý Thực Phẩm 33 Ngon - Bò Né, Bò Kho Sài Gòn",
  },
  description:
    "Chuyên cung cấp sỉ lẻ các loại thực phẩm chế biến Bò né, bò kho, patê, nem nướng... tại Đà Nẵng. Đảm bảo chất lượng, an toàn vệ sinh thực phẩm, giá cả cạnh tranh.",
  keywords: [
    "thực phẩm 33 ngon",
    "bò né đà nẵng",
    "bò kho sài gòn",
    "cung cấp thực phẩm đà nẵng",
  ],
  authors: [{ name: "33 NGON" }],
  creator: "33 NGON",
  publisher: "33 NGON",
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
  themeColor: "#166534", // Updated to new green color
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
    <html
      lang="vi"
      className={`${inter.variable} ${beVietnamPro.variable} scroll-smooth`}
    >
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
        <link rel="icon" href="/images/logo/logo.jpg" type="image/jpg" />
      </head>
      <body className="min-h-screen bg-[#FFFBEB] antialiased">
        <ScrollProgressBar />
        {children}
        <ContactPopup />
      </body>
    </html>
  );
}
