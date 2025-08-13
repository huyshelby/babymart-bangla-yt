import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ProductSection } from "@/components/ProductSection";
import { AboutSection } from "@/components/AboutSection";
import { BusinessPhilosophySection } from "@/components/BusinessPhilosophySection";
import { FoodSafetySection } from "@/components/FoodSafetySection";
import { ColdStorageSection } from "@/components/ColdStorageSection";
import { FoodDishesSection } from "@/components/FoodDishesSection";
import { PromotionsSection } from "@/components/PromotionsSection";
import { LocalBusinessJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang chủ | Thực phẩm Bò Né Hạnh - Thực phẩm sạch Đà Nẵng",
  description:
    "Công ty Thực phẩm Bò Né Hạnh - Nhà cung cấp thực phẩm chế biến chất lượng cao tại Đà Nẵng. Bo Ne Hanh - Thuc pham sach Da Nang. Chuyên các sản phẩm từ bò tươi ngon, an toàn.",
  alternates: {
    canonical: "https://thucphambonehanh.com",
  },
};

export default function Home() {
  return (
    <>
      <WebsiteJsonLd />
      <LocalBusinessJsonLd
        name="Công ty thực phẩm bò né hạnh"
        description="Chuyên cung cấp sỉ lẻ các loại thực phẩm chế biến Bò né, bò kho, patê, nem nướng... tại Đà Nẵng. Đảm bảo chất lượng, an toàn vệ sinh thực phẩm."
        url="https://thucphambonehanh.com"
        telephone="+84-935-33-0134"
        address={{
          streetAddress: "66 HUỲNH NGỌC HUỆ, PHƯỜNG AN KHÊ, THANH PHỐ ĐÀ NẴNG",
          addressLocality: "Đà Nẵng",
          addressRegion: "Đà Nẵng",
          postalCode: "50000",
          addressCountry: "VN"
        }}
        geo={{
          latitude: 16.0544,
          longitude: 108.2022
        }}
        images={[
          "https://thucphambonehanh.com/images/logo/logo.jpg",
          "https://thucphambonehanh.com/images/background/sanpham.jpg"
        ]}
        openingHours={[
          "Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 08:00-21:00"
        ]}
        priceRange="$$"
      />
      
      <Header />
      <main className="overflow-hidden">
        <HeroSection isLoaded={true} />
        <AboutSection />
        <ProductSection />
        <BusinessPhilosophySection />
        <FoodSafetySection />
        <ColdStorageSection />
        <FoodDishesSection />
        <PromotionsSection />
      </main>
      <Footer />
    </>
  );
}
