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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="phuong-cham"
      className="py-20 relative overflow-hidden flex justify-center"
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

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-[#27AE60]/5 animate-aurora blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-[#27AE60]/5 animate-aurora-delayed blur-3xl"></div>

      <BalancedLayout className="relative z-10">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* <div className="flex items-center justify-center mb-3">
            <div className="h-px w-10 bg-[#27AE60]/60 mr-4"></div>
            <span className="text-sm uppercase tracking-widest text-[#27AE60]/80 font-semibold">
              Tầm nhìn & Phương châm
            </span>
            <div className="h-px w-10 bg-[#27AE60]/60 ml-4"></div>
          </div> */}

          <h2 className="text-4xl font-bold text-[#27AE60] mb-6 relative inline-block">
            PHƯƠNG CHÂM KINH DOANH
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-36 h-1">
              <div
                className="w-full h-full bg-[#27AE60] rounded-full animate-shimmer-slow opacity-70"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, transparent, rgba(39, 174, 96, 0.8), transparent)",
                }}
              ></div>
            </div>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Tâm huyết và chất lượng là nền tảng cho mọi hoạt động kinh doanh của
            chúng tôi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={textRef}
            className={`order-2 md:order-1 transform transition-all duration-1000 ${
              textInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden backdrop-blur-sm">
              {/* Decorative side accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#27AE60] via-[#2ecc71] to-[#27AE60]"></div>

              {/* Background decorative shapes */}
              <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#27AE60]/10 rounded-full"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#27AE60]/10 rounded-full"></div>
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#27AE60]/5 rounded-full"></div>

              <div className="space-y-6 text-[#212529] relative z-10">
                <div className="flex justify-start mb-6">
                  <Image
                    src="/images/spoon-divider.svg"
                    alt="Decorative divider"
                    width={40}
                    height={40}
                    className="opacity-70"
                  />
                </div>

                <p className="text-lg leading-relaxed">
                  Với tâm huyết mang hương vị bò né đậm đà chuẩn gốc Sài Gòn đến
                  với thực khách Đà thành, chúng tôi đã xây dựng nên một thương
                  hiệu dựa trên nền tảng của sự tử tế và trách nhiệm.
                </p>

                {/* <div className="my-8 px-6 py-4 border-l-4 border-[#27AE60]/60 bg-[#27AE60]/5 rounded-r-lg">
                  <p className="text-xl font-medium italic text-[#27AE60]">
                    &ldquo;Khách hàng là ân nhân&rdquo;
                  </p>
                </div> */}

                <p className="text-lg leading-relaxed">
                  Triết lý kinh doanh của chúng tôi gói gọn trong câu nói :
                  <p className="text-xl font-medium italic text-[#27AE60]">
                    &ldquo;Khách hàng là ân nhân&rdquo;
                  </p>
                  <br />
                  Mỗi đối tác không chỉ là một khách hàng, mà là một người bạn
                  đồng hành. Chúng tôi hiểu rằng, thành công của các bạn chính
                  là thước đo cho sự thành công của chúng tôi.
                </p>

                <p className="text-lg leading-relaxed">
                  Vì vậy, chúng tôi không chỉ giao hàng, chúng tôi giao cả sự
                  tận tâm, cam kết về chất lượng ổn định và sự an toàn tuyệt đối
                  trong từng sản phẩm.
                </p>

                <div className="pt-6 flex items-center space-x-2">
                  <div className="w-8 h-1 bg-[#27AE60]/40 rounded-full"></div>
                  <div className="w-2 h-1 bg-[#27AE60]/60 rounded-full"></div>
                  <div className="w-1 h-1 bg-[#27AE60]/80 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={imageRef}
            className={`order-1 md:order-2 transform transition-all duration-1000 ${
              imageInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-16"
            }`}
          >
            {/* Beautiful Swiper Slider */}
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] relative">
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
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* <div className="absolute inset-0 flex flex-col justify-end p-8 z-20 text-white">
                      <div className="max-w-md">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                          {item.title}
                        </h3>
                        <div className="w-16 h-1 bg-[#27AE60] rounded-full mb-4"></div>
                        <p className="text-base md:text-lg text-white/90">
                          {item.description}
                        </p>
                      </div>
                    </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Philosophy values display */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {philosophyValues.map((value, index) => (
            <div
              key={value.id}
              className={`bg-white rounded-xl shadow-lg p-6 transform transition-all duration-1000 delay-${
                index * 200
              } hover:shadow-xl border-b-4 border-[#27AE60] hover:-translate-y-1 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mr-3">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#27AE60]">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div> */}
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
