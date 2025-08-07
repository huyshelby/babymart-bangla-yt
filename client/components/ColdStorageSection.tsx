"use client";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ImageWithFallback from "./ImageWithFallback";
import BalancedLayout from "./BalancedLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useMediaQuery } from "../hooks/useMediaQuery";

// Cold storage facility images data
const storageImages = [
  {
    id: "img1",
    src: "/images/tudong/tudong1.jpg",
    fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+1",
    alt: "Hệ thống kho lạnh hiện đại 1",
    caption: "Kho lạnh công nghệ mới nhất",
    width: 800,
    height: 600,
  },
  {
    id: "img2",
    src: "/images/tudong/tudong2.png",
    fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+2",
    alt: "Hệ thống kho lạnh hiện đại 2",
    caption: "Hệ thống tủ đông công nghiệp",
    width: 800,
    height: 600,
  },
  {
    id: "img3",
    src: "/images/tudong/tudong3.png",
    fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+3",
    alt: "Hệ thống kho lạnh hiện đại 3",
    caption: "Đảm bảo thực phẩm luôn tươi ngon",
    width: 800,
    height: 600,
  },
];

// Features of the cold storage system
const features = [
  {
    id: "feature1",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Công nghệ hiện đại",
    description:
      "Công nghệ làm lạnh đa chiều, giúp duy trì nhiệt độ ổn định tuyệt đối.",
  },
  {
    id: "feature2",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "An toàn vệ sinh",
    description:
      "Môi trường bảo quản hoàn toàn vô trùng, kiểm soát nghiêm ngặt theo tiêu chuẩn HACCP.",
  },
  {
    id: "feature3",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Giữ trọn vị tươi ngon",
    description:
      "Ức chế vi khuẩn, làm chậm quá trình oxy hóa, giữ nguyên giá trị dinh dưỡng và hương vị sản phẩm.",
  },
];

export const ColdStorageSection = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  // Preload the first image for better LCP
  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.as = 'image';
    preloadLink.href = storageImages[0].src;
    document.head.appendChild(preloadLink);
    
    return () => {
      if (document.head.contains(preloadLink)) {
        document.head.removeChild(preloadLink);
      }
    };
  }, []);

  return (
    <section
      id="hethongkholanh"
      ref={sectionRef}
      className="py-12 md:py-16 relative overflow-hidden flex justify-center"
      style={{
        backgroundImage: `url('/images/noise.svg'), linear-gradient(to bottom, #f8f9fa, #ffffff)`,
        backgroundSize: "200px, cover",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#27AE60]/10 via-[#27AE60] to-[#27AE60]/10" aria-hidden="true" />

      <BalancedLayout className="relative z-10">
        {/* Section heading */}
        <div
          ref={titleRef}
          className={`text-center mb-8 md:mb-12 transform transition-all duration-1000 ${
            titleInView ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className={`${isMobile ? "text-2xl" : "text-3xl md:text-4xl"} font-bold !text-[#27AE60] uppercase mb-4`}>
            Hệ thống kho lạnh hiện đại
          </h2>
          
          <div className="w-24 h-1 bg-[#27AE60] mx-auto mb-4 rounded-full" aria-hidden="true" />
          
          {!isMobile && (
            <p className="text-2xl !text-[#27AE60] max-w-2xl mx-auto">
              Chúng tôi đầu tư hệ thống kho lạnh hiện đại đảm bảo chất lượng sản phẩm luôn được bảo quản tốt nhất
            </p>
          )}
        </div>

        {/* Main content area - simplified structure */}
        <div className={isMobile ? "" : "grid md:grid-cols-2 gap-10 items-center"}>
          {/* Left side: Features - hidden on mobile */}
          {!isMobile && (
            <div
              ref={featuresRef}
              className={`transition-opacity duration-1000 ${
                featuresInView ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold !text-[#27AE60] mb-6">
                  Hệ thống kho lạnh đạt chuẩn – Nền tảng bảo chứng cho chất lượng sản phẩm
                </h3>

                <ul className="space-y-6">
                  {features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E8F5E9] flex items-center justify-center mr-4">
                        <span className="!text-[#27AE60]">{feature.icon}</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold !text-[#27AE60] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 bg-[#E8F5E9] rounded-lg border border-[#27AE60]/20">
                  <p className="!text- font-medium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#27AE60] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Nhiệt độ được kiểm soát chuẩn xác trong ngưỡng -18°C đến -22°C
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Right side: Image gallery/slider - always shown */}
          <div className={`transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-white p-3 rounded-2xl shadow-xl overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2,
                  slideShadows: false,
                }}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: true,
                }}
                loop={true}
                className="storage-swiper rounded-xl overflow-hidden aspect-[4/3]"
              >
                {storageImages.map((image, index) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative w-full h-full">
                      <ImageWithFallback
                        src={image.src}
                        fallbackSrc={image.fallbackSrc}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-lg"
                        priority={index === 0} // Priority loading for the first image
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Stats - Simplified */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { value: "-20°C", label: "Nhiệt độ lý tưởng" },
                { value: "24/7", label: "Giám sát liên tục" },
                { value: "100%", label: "An toàn thực phẩm" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-[#27AE60] font-bold text-xl md:text-2xl">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
    
        </div>
      </BalancedLayout>

      {/* Custom styles for the Swiper */}
      <style jsx global>{`
        .storage-swiper .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.7;
        }
        .storage-swiper .swiper-pagination-bullet-active {
          background-color: #27ae60;
          opacity: 1;
        }
        .storage-swiper .swiper-button-next,
        .storage-swiper .swiper-button-prev {
          color: white;
          background-color: rgba(39, 174, 96, 0.7);
          width: 36px;
          height: 36px;
          border-radius: 50%;
        }
        .storage-swiper .swiper-button-next:after,
        .storage-swiper .swiper-button-prev:after {
          font-size: 16px;
        }
      `}</style>
    </section>
  );
};
