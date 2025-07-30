"use client";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BalancedLayout from "./BalancedLayout";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export const PromotionsSection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const isMobile = useMediaQuery("(max-width: 768px)");

  const promotions = [
    {
      title: "Khuyến mãi theo doanh số",
      description:
        "Giảm giá đặc biệt cho khách hàng có doanh số cao, áp dụng với nhiều mức ưu đãi khác nhau.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
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
    },
    {
      title: "Quà tặng đặc biệt",
      description: "Quà tặng vào các dịp lễ, Tết, sinh nhật.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      ),
    },
    {
      title: "Ưu đãi khách hàng thân thiết",
      description: "Ưu đãi đặc biệt dành riêng cho khách hàng thường xuyên.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
  ];

  // Promotion images for mobile carousel
  const promoImages = [
    {
      src: "/images/khuyenmai/anh1.jpg",
      fallbackSrc:
        "https://placehold.co/800x600/27AE60/FFFFFF?text=Khuyến+Mãi+1",
      alt: "Chương trình khuyến mãi",
      title: "Ưu đãi đặc biệt",
    },
  ];

  return (
    <section
      id="khuyen-mai"
      className="py-12 md:py-16 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7fafc] to-white z-0"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#27AE60]/20 via-[#27AE60] to-[#27AE60]/20"></div>
      <div className="absolute top-40 right-0 w-64 h-64 rounded-full bg-[#27AE60]/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-[#27AE60]/5 blur-3xl"></div>

      <BalancedLayout className="relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center mb-3 px-4 py-1.5 bg-[#27AE60]/10 rounded-full">
            <span className="text-sm text-[#27AE60] font-medium tracking-wider">
              ƯU ĐÃI ĐẶC BIỆT
            </span>
          </div>
          <h2
            className={`${
              isMobile ? "text-2xl" : "text-3xl md:text-4xl"
            } font-bold mb-3`}
          >
            <span className="text-[#212529]">CHƯƠNG TRÌNH </span>
            <span className="text-[#27AE60]">KHUYẾN MÃI</span>
          </h2>
          {!isMobile && (
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi tổ chức nhiều chương trình ưu đãi đặc biệt dành cho
              khách hàng và đối tác
            </p>
          )}

          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-[#27AE60] rounded-full"></div>
          </div>
        </motion.div>

        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Mobile View: Image Carousel */}
          {isMobile ? (
            <div className="mb-8">
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                spaceBetween={0}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="promo-swiper rounded-xl overflow-hidden shadow-xl"
              >
                {promoImages.map((image, index) => (
                  <SwiperSlide key={index} className="relative aspect-[16/9]">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
                    <ImageWithFallback
                      src={image.src}
                      fallbackSrc={image.fallbackSrc}
                      alt={image.alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />

                    {/* Overlay content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 z-20">
                      <div>
                        <h3 className="text-2xl font-bold !text-white mb-2">
                          {image.title}
                        </h3>
                        <div className="flex items-center">
                          <div className="w-8 h-0.5 bg-[#27AE60] mr-3"></div>
                          <p className="!text-white/90 text-sm">
                            Liên hệ ngay để biết thêm chi tiết
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Mobile CTA Button */}
              <div className="text-center mt-6">
                <a
                  href="tel:0935330134"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#27AE60] to-[#25A65B] text-white font-medium rounded-xl shadow-lg transform transition-transform active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Liên Hệ: 0935 33 0134
                </a>
              </div>
            </div>
          ) : (
            /* Desktop View: Grid Layout */
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Left Side - Image */}
              <div className="relative">
                <div className="rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-green-100 hover:scale-[1.02] aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#27AE60]/20 to-transparent mix-blend-overlay z-10"></div>
                  <ImageWithFallback
                    src="/images/khuyenmai/anh1.jpg"
                    fallbackSrc="https://placehold.co/800x600/27AE60/FFFFFF?text=Khuyến+Mãi+Đặc+Biệt"
                    alt="Chương trình khuyến mãi"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>

                {/* Floating promo tag */}
                {/* <motion.div
                  initial={{ rotate: 12, scale: 0.8 }}
                  animate={{ rotate: 12, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.6,
                  }}
                  className="absolute -top-6 -right-6 bg-[#27AE60] text-white rounded-full w-28 h-28 flex items-center justify-center shadow-xl"
                >
                  <div className="text-center transform -rotate-12">
                    <div className="text-lg font-medium">SALE</div>
                    <div className="text-3xl font-black">20%</div>
                    <div className="text-sm font-light mt-1">Đặc biệt</div>
                  </div>
                </motion.div> */}
              </div>

              {/* Right Side - Content */}
              <div className="space-y-8">
                {/* <h3 className="text-2xl font-bold text-[#212529] relative inline-block">
                  Ưu Đãi Đặc Biệt
                  <div className="h-1 w-1/2 bg-[#27AE60] absolute bottom-0 left-0 rounded-full"></div>
                </h3> */}

                <div className="space-y-6">
                  {promotions.map((promo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        contentInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: 20 }
                      }
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                      className="flex items-start group"
                    >
                      <div className="bg-white shadow-lg rounded-full p-3 mr-5 mt-1 text-[#27AE60] border border-[#27AE60]/10 group-hover:bg-[#27AE60] group-hover:text-white transition-colors duration-300">
                        {promo.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-[#212529] group-hover:text-[#27AE60] transition-colors">
                          {promo.title}
                        </h4>
                        <p className="text-gray-600 mt-1 leading-relaxed">
                          {promo.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="tel:0935330134"
                    className="inline-flex items-center px-8 py-3 mt-4 bg-gradient-to-r from-[#27AE60] to-[#25A65B] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Liên hệ ngay: 0935 33 0134
                  </a>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>
      </BalancedLayout>

      {/* Swiper custom styles */}
      <style jsx global>{`
        .promo-swiper {
          height: 100%;
        }

        .promo-swiper .swiper-pagination-bullet {
          background-color: white;
          opacity: 0.7;
        }

        .promo-swiper .swiper-pagination-bullet-active {
          background-color: #27ae60;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};
