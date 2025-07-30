"use client";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import BalancedLayout from "./BalancedLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { useMediaQuery } from "../hooks/useMediaQuery";

// Philosophy values for the slider
const philosophyValues = [
  {
    id: "value1",
    title: "Khách hàng là ân nhân",
    description:
      "Triết lý kinh doanh của chúng tôi gói gọn trong câu nói này. Mỗi đối tác không chỉ là một khách hàng, mà là một người bạn đồng hành.",
    image: "/images/phuongcham/phuongcham1.jpg",
    fallbackImage:
      "https://placehold.co/600x400/27AE60/FFFFFF?text=Phương+Châm+Kinh+Doanh",
  },
  {
    id: "value2",
    title: "Chất lượng là nền tảng",
    description:
      "Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất với hương vị đặc trưng và nguyên liệu tươi ngon.",
    image: "/images/phuongcham/phuongcham2.jpg",
    fallbackImage:
      "https://placehold.co/600x400/27AE60/FFFFFF?text=Chất+Lượng+Sản+Phẩm",
  },
  {
    id: "value3",
    title: "Đồng hành cùng phát triển",
    description:
      "Thành công của khách hàng chính là thành công của chúng tôi. Chúng tôi không chỉ giao hàng, chúng tôi giao cả sự tận tâm.",
    image: "/images/phuongcham/phuongcham1.jpg",
    fallbackImage:
      "https://placehold.co/600x400/27AE60/FFFFFF?text=Đồng+Hành+Phát+Triển",
  },
];

export const BusinessPhilosophySection = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="phuongcham"
      className="py-10 md:py-20 relative overflow-hidden flex justify-center"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(39, 174, 96, 0.07) 0%, transparent 25%),
          radial-gradient(circle at 80% 70%, rgba(39, 174, 96, 0.05) 0%, transparent 25%),
          linear-gradient(to bottom, #F8F9FA, white)
        `,
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#27AE60] to-transparent"></div>

      {/* Only show decorative spoon icon on desktop */}
      {!isMobile && (
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-lg border border-[#27AE60]/20">
          <div className="relative animate-spin-slow">
            <Image
              src="/images/spoon.svg"
              alt="Decorative icon"
              width={28}
              height={28}
              className="opacity-80"
            />
          </div>
        </div>
      )}

      {/* Animated background elements - responsive sizes */}
      <div className="absolute top-1/4 left-10 w-32 sm:w-64 h-32 sm:h-64 rounded-full bg-[#27AE60]/5 animate-aurora blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-[#27AE60]/5 animate-aurora-delayed blur-3xl"></div>

      <BalancedLayout className="relative z-10">
        {/* Section heading - shown on both mobile and desktop with different styling */}
        <div
          className={`text-center mb-8 md:mb-16 transform transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2
            className={`${
              isMobile ? "text-2xl" : "text-3xl md:text-4xl"
            } font-bold text-[#27AE60] mb-3 md:mb-6 relative inline-block`}
          >
            PHƯƠNG CHÂM<span className="!text-[#27AE60]"> KINH DOANH</span>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-36 h-1">
              <div
                className="w-full h-full bg-[#27AE60] rounded-full animate-shimmer-slow opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, transparent, rgba(39, 174, 96, 0.8), transparent)",
                }}
              ></div>
            </div>
          </h2>

          {!isMobile && (
            <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-base md:text-lg">
              &quot;Chất lượng làm nên thương hiệu&quot; là nền tảng cho mọi
              hoạt động kinh doanh
            </p>
          )}
        </div>

        <div
          className={
            isMobile ? "" : "grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          }
        >
          {/* Text content - only visible on desktop */}
          {!isMobile && (
            <div
              ref={textRef}
              className={`order-2 md:order-1 transform transition-all duration-1000 ${
                textInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-16"
              }`}
            >
              <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden backdrop-blur-sm">
                {/* Decorative side accent */}
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#27AE60] via-[#2ecc71] to-[#27AE60]"></div>

                {/* Background decorative shapes - responsive sizes */}
                <div className="absolute -bottom-12 -right-12 sm:-bottom-16 sm:-right-16 w-24 sm:w-32 h-24 sm:h-32 bg-[#27AE60]/10 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-12 sm:w-16 h-12 sm:h-16 bg-[#27AE60]/10 rounded-full"></div>
                <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 w-24 sm:w-32 h-24 sm:h-32 bg-[#27AE60]/5 rounded-full"></div>

                <div className="space-y-4 md:space-y-6 text-[#212529] relative z-10">
                  <div className="flex justify-start mb-4 md:mb-6">
                    <Image
                      src="/images/spoon-divider.svg"
                      alt="Decorative divider"
                      width={40}
                      height={40}
                      className="opacity-70"
                    />
                  </div>

                  <p className="text-base md:text-lg leading-relaxed">
                    Với tâm huyết khát khao mang trọn vẹn hương vị Bò Né chuẩn
                    gốc Sài Gòn đến với thực khách Đà thành, chúng tôi kiến tạo
                    một thương hiệu không chỉ bằng công thức, mà bằng sự tử tế
                    và trách nhiệm.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed">
                    Triết lý kinh doanh của chúng tôi gói gọn trong 5 chữ :
                    <p className="text-lg md:text-xl font-medium  text-[#27AE60]">
                      &ldquo;Khách hàng là ân nhân&rdquo;
                    </p>
                    <br />
                    Chúng tôi tìm kiếm khách hàng là tìm kiếm những người bạn
                    đồng hành. Bởi chúng tôi tin rằng, thành công của bạn chính
                    là thước đo cho thành công của chúng tôi. Mỗi sản phẩm được
                    trao đi không chỉ là món ăn, mà còn là sự tận tâm, là cam
                    kết bền chặt về chất lượng ổn định và an toàn tuyệt đối.
                  </p>

                  {/* <p className="text-base md:text-lg leading-relaxed">
                    Vì vậy, chúng tôi không chỉ giao hàng, chúng tôi giao cả sự
                    tận tâm, cam kết về chất lượng ổn định và sự an toàn tuyệt
                    đối trong từng sản phẩm.
                  </p> */}

                  <div className="pt-4 md:pt-6 flex items-center space-x-2">
                    <div className="w-6 md:w-8 h-1 bg-[#27AE60]/40 rounded-full"></div>
                    <div className="w-2 h-1 bg-[#27AE60]/60 rounded-full"></div>
                    <div className="w-1 h-1 bg-[#27AE60]/80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Image slider - always visible */}
          <div
            ref={imageRef}
            className={`${
              isMobile ? "w-full" : "order-1 md:order-2"
            } transform transition-all duration-1000 ${
              imageInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            {/* Beautiful Swiper Slider */}
            <div
              className={`rounded-2xl overflow-hidden shadow-2xl ${
                isMobile ? "h-[400px]" : "h-[300px] sm:h-[400px] md:h-[500px]"
              } relative`}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                navigation
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="h-full philosophy-swiper rounded-2xl"
              >
                {philosophyValues.map((item) => (
                  <SwiperSlide key={item.id} className="h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                    <ImageWithFallback
                      src={item.image}
                      fallbackSrc={item.fallbackImage}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* Display text overlay on the image for mobile view */}
                    {isMobile && (
                      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                        <div className="!text-white mb-8">
                          <h3 className="text-2xl font-bold mb-2 !text-white">
                            {item.title}
                          </h3>
                          <div className="w-16 h-1 bg-[#27AE60] rounded-full mb-3"></div>
                          <p className="text-sm !text-white/90">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </BalancedLayout>

      {/* Custom styles for the Swiper */}
      <style jsx global>{`
        .philosophy-swiper .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.5;
        }
        .philosophy-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: #27ae60;
        }
        .philosophy-swiper .swiper-button-next,
        .philosophy-swiper .swiper-button-prev {
          color: white;
          background-color: rgba(39, 174, 96, 0.5);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .philosophy-swiper .swiper-button-next:after,
        .philosophy-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        .philosophy-swiper .swiper-button-next:hover,
        .philosophy-swiper .swiper-button-prev:hover {
          background-color: rgba(39, 174, 96, 0.8);
        }

        /* Responsive styles for swiper controls */
        @media (max-width: 640px) {
          .philosophy-swiper .swiper-button-next,
          .philosophy-swiper .swiper-button-prev {
            width: 32px;
            height: 32px;
          }
          .philosophy-swiper .swiper-button-next:after,
          .philosophy-swiper .swiper-button-prev:after {
            font-size: 14px;
          }
        }

        @keyframes aurora {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        @keyframes aurora-delayed {
          0% {
            transform: translateY(0) scale(1.1);
          }
          50% {
            transform: translateY(-15px) scale(1);
          }
          100% {
            transform: translateY(0) scale(1.1);
          }
        }
        @keyframes shimmer-slow {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-aurora {
          animation: aurora 15s infinite ease-in-out;
        }
        .animate-aurora-delayed {
          animation: aurora-delayed 18s infinite ease-in-out;
        }
        .animate-shimmer-slow {
          animation: shimmer-slow 3s infinite;
          background-size: 200% 100%;
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};
