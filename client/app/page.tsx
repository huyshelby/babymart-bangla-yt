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

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection isLoaded={isLoaded} />

        {/* About Us Section */}
        <AboutSection />

        {/* Main Products Section */}
        <ProductSection />

        {/* PHƯƠNG CHÂM KINH DOANH Section */}
        <BusinessPhilosophySection />

        {/* Cold Storage System Section */}
        <ColdStorageSection />

        {/* Food Safety Section */}
        <FoodSafetySection />

        {/* Food Dishes Section */}
        <FoodDishesSection />

        {/* Promotions Section */}
        <PromotionsSection />
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
