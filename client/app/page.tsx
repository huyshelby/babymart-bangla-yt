"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageModal } from "@/components/ImageModal";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProductSection } from "@/components/ProductSection";
import { BusinessPhilosophySection } from "@/components/BusinessPhilosophySection";
import { ColdStorageSection } from "@/components/ColdStorageSection";
import { FoodSafetySection } from "@/components/FoodSafetySection";
import { FoodDishesSection } from "@/components/FoodDishesSection";
import { PromotionsSection } from "@/components/PromotionsSection";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after page load
    setIsLoaded(true);
  }, []);

  const openModal = (imageSrc: string, title: string) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setModalOpen(true);
  };

  // Breadcrumb data for structured data
  const breadcrumbData = {
    items: [
      {
        position: 1,
        name: "Trang chủ",
        item: "https://bonehanh.com"
      },
      {
        position: 2,
        name: "Giới thiệu",
        item: "https://bonehanh.com/#gioi-thieu"
      },
      {
        position: 3,
        name: "Sản phẩm",
        item: "https://bonehanh.com/#san-pham"
      }
    ]
  };

  return (
    <>
      <JsonLd 
        organizationData={true} 
        localBusinessData={true}
        breadcrumbData={breadcrumbData}
      />
      <Header />

      <main itemScope itemType="https://schema.org/WebPage">
        {/* Hero Section */}
        <HeroSection isLoaded={isLoaded} />

        {/* About Us Section */}
        <section id="gioi-thieu" itemScope itemType="https://schema.org/AboutPage">
          <AboutSection />
        </section>

        {/* Main Products Section */}
        <section id="san-pham" itemScope itemType="https://schema.org/ItemList">
          <meta itemProp="numberOfItems" content="5" />
          <ProductSection />
        </section>

        {/* PHƯƠNG CHÂM KINH DOANH Section */}
        <section id="phuong-cham">
          <BusinessPhilosophySection />
        </section>

        {/* Cold Storage System Section */}
        <section id="kho-lanh">
          <ColdStorageSection />
        </section>

        {/* Food Safety Section */}
        <section id="an-toan-thuc-pham" itemScope itemType="https://schema.org/HealthAndSafetyInfo">
          <FoodSafetySection />
        </section>

        {/* Food Dishes Section */}
        <section id="mon-an" itemScope itemType="https://schema.org/MenuSection">
          <FoodDishesSection />
        </section>

        {/* Promotions Section */}
        <section id="khuyen-mai" itemScope itemType="https://schema.org/PromotionEvent">
          <PromotionsSection />
        </section>
      </main>

      <Footer />

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={modalImage}
        imageTitle={modalTitle}
      />
    </>
  );
}
