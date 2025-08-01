import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ContactPopup } from "@/components/ContactPopup";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import baseMetadata from "./metadata";

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

// Tạo danh sách từ khóa bao gồm cả có dấu và không dấu
const generateKeywords = () => {
  const baseKeywords = [
    "thực phẩm bò né hạnh",
    "bò né đà nẵng",
    "bò kho sài gòn",
    "cung cấp thực phẩm đà nẵng",
    "thực phẩm đông lạnh đà nẵng",
    "thực phẩm chế biến sẵn",
    "nhà cung cấp thực phẩm uy tín",
  ];
  
  const withoutAccents = baseKeywords.map(keyword => {
    return keyword
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  });
  
  return [...baseKeywords, ...withoutAccents];
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thucphambonehanh.com"),
  title: {
    template: "%s | Công ty thực phẩm bò né hạnh",
    default: "Công ty thực phẩm bò né hạnh - Bò Né, Bò Kho Sài Gòn",
  },
  description:
    "Chuyên cung cấp sỉ lẻ các loại thực phẩm chế biến Bò né, bò kho, patê, nem nướng... tại Đà Nẵng. Đảm bảo chất lượng, an toàn vệ sinh thực phẩm, giá cả cạnh tranh.",
  keywords: generateKeywords(),
  authors: [{ name: "Bò né hạnh" }],
  creator: "Bò né hạnh",
  publisher: "Bò né hạnh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://thucphambonehanh.com",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://thucphambonehanh.com",
    title: "Công ty thực phẩm bò né hạnh - Bò Né, Bò Kho Sài Gòn",
    description: "Chuyên cung cấp sỉ lẻ các loại thực phẩm chế biến Bò né (Bo ne), bò kho (bo kho), patê (pate), nem nướng... tại Đà Nẵng (Da Nang). Đảm bảo chất lượng, an toàn vệ sinh thực phẩm.",
    siteName: "Công ty thực phẩm bò né hạnh",
    images: [
      {
        url: "/images/logo/logo.jpg",
        width: 800,
        height: 600,
        alt: "Công ty thực phẩm bò né hạnh Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Công ty thực phẩm bò né hạnh - Bò Né, Bò Kho Sài Gòn",
    description: "Chuyên cung cấp sỉ lẻ các loại thực phẩm chế biến Bò né (Bo ne), bò kho (bo kho) tại Đà Nẵng (Da Nang)",
    images: ["/images/logo/logo.jpg"],
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
        <link rel="apple-touch-icon" href="/images/logo/logo.jpg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen bg-[#FFFBEB] antialiased">
        <AnalyticsProvider>
          <ScrollProgressBar />
          {children}
          <ContactPopup />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
