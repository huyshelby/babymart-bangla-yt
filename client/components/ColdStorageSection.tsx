"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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
  },
  {
    id: "img2",
    src: "/images/tudong/tudong2.png",
    fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+2",
    alt: "Hệ thống kho lạnh hiện đại 2",
    caption: "Hệ thống tủ đông công nghiệp",
  },
  {
    id: "img3",
    src: "/images/tudong/tudong3.png",
    fallbackSrc: "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+3",
    alt: "Hệ thống kho lạnh hiện đại 3",
    caption: "Đảm bảo thực phẩm luôn tươi ngon",
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
  const [isLoaded, setIsLoaded] = useState(false);
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hethongkholanh"
      ref={sectionRef}
      className="py-12 md:py-16 relative overflow-hidden flex justify-center"
      style={{
        background: `linear-gradient(to bottom, #f8f9fa, #ffffff)`,
        backgroundImage: `url('/images/noise.svg'), linear-gradient(to bottom, #f8f9fa, #ffffff)`,
        backgroundSize: "200px, cover",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#27AE60]/10 via-[#27AE60] to-[#27AE60]/10"></div>

      <div className="absolute top-16 left-8 w-56 h-56 rounded-full bg-[#27AE60]/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-16 right-8 w-72 h-72 rounded-full bg-[#27AE60]/5 blur-3xl pointer-events-none"></div>

      {/* Frozen effect elements */}
      <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-white/20 blur-sm opacity-40"></div>
      <div className="absolute top-1/3 left-1/3 w-6 h-6 rounded-full bg-white/20 blur-sm opacity-30"></div>
      <div className="absolute bottom-1/4 right-1/3 w-10 h-10 rounded-full bg-white/20 blur-sm opacity-50"></div>

      <BalancedLayout className="relative z-10">
        {/* Section heading */}
        <div
          ref={titleRef}
          className={`text-center mb-8 md:mb-12 transform transition-all duration-1000 ${
            titleInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className={`${
              isMobile ? "text-2xl" : "text-3xl md:text-4xl"
            } font-bold text-[#212529] mb-4 relative inline-block`}
          >
            <span className="!text-[#27AE60] uppercase">
              Hệ thống kho lạnh hiện đại
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#27AE60] mx-auto mb-4 md:mb-6 rounded-full"></div>
          {!isMobile && (
            <p className="!text-2xl !text-[#27AE60] max-w-2xl mx-auto">
              Chúng tôi đầu tư hệ thống kho lạnh hiện đại đảm bảo chất lượng sản
              phẩm luôn được bảo quản tốt nhất, giữ trọn vẹn hương vị và độ tươi
              ngon
            </p>
          )}
        </div>

        {/* Main content area */}
        <div
          className={isMobile ? "" : "grid md:grid-cols-2 gap-10 items-center"}
        >
          {/* Left side: Features - hidden on mobile */}
          {!isMobile && (
            <div
              ref={featuresRef}
              className={`space-y-6 transform transition-all duration-1000 ${
                featuresInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-[#212529] mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#27AE60]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="!text-[#27AE60]">
                    Hệ thống kho lạnh đạt chuẩn – Nền tảng bảo chứng cho chất
                    lượng sản phẩm.
                  </span>
                </h3>

                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div
                      key={feature.id}
                      className={`flex items-start transform transition-all duration-700 delay-${
                        index * 200
                      } ${
                        featuresInView
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#E8F5E9] flex items-center justify-center mr-4">
                        <div className="text-[#27AE60]">{feature.icon}</div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#27AE60] mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-[#E8F5E9] rounded-lg border border-[#27AE60]/20">
                  <p className="text-[#212529] font-medium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-[#27AE60] mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Nhiệt độ được kiểm soát chuẩn xác trong ngưỡng -18°C đến
                    -22°C, khóa trọn chất lượng sản phẩm.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Right side: Image gallery/slider - always shown */}
          <div
            className={`transform transition-all duration-1000 ${
              !isMobile && "delay-300"
            } ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
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
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="storage-swiper rounded-xl overflow-hidden aspect-[4/3]"
              >
                {storageImages.map((image) => (
                  <SwiperSlide key={image.id}>
                    <div className="relative w-full h-full">
                      <ImageWithFallback
                        src={image.src}
                        fallbackSrc={image.fallbackSrc}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-lg"
                      />
                      {isMobile && (
                        <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3 rounded-b-lg">
                          <h4 className="text-white text-center font-medium text-sm">
                            {image.caption}
                          </h4>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-[#27AE60] font-bold text-xl md:text-2xl">
                  -20°C
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Nhiệt độ lý tưởng
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-[#27AE60] font-bold text-xl md:text-2xl">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  Giám sát liên tục
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300">
                <div className="text-[#27AE60] font-bold text-xl md:text-2xl">
                  100%
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  An toàn thực phẩm
                </div>
              </div>
            </div>
          </div>

          {/* Features section for mobile view */}
          {isMobile && (
            <div className="mt-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-[#27AE60] mb-4 text-center">
                Hệ thống kho lạnh đạt chuẩn
              </h3>
              
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E8F5E9] flex items-center justify-center mr-3">
                      <div className="text-[#27AE60]">{feature.icon}</div>
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-[#27AE60] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 p-3 bg-[#E8F5E9] rounded-lg border border-[#27AE60]/20">
                <p className="text-sm text-[#212529] font-medium flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#27AE60] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
          )}
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
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .storage-swiper .swiper-button-next:after,
        .storage-swiper .swiper-button-prev:after {
          font-size: 16px;
        }
        .storage-swiper .swiper-button-next:hover,
        .storage-swiper .swiper-button-prev:hover {
          background-color: rgba(39, 174, 96, 0.9);
        }

        /* Responsive styles for swiper controls */
        @media (max-width: 640px) {
          .storage-swiper .swiper-button-next,
          .storage-swiper .swiper-button-prev {
            width: 32px;
            height: 32px;
          }
          .storage-swiper .swiper-button-next:after,
          .storage-swiper .swiper-button-prev:after {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};
