"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import BalancedLayout from "./BalancedLayout";

// Import Swiper components and styles
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

// Product data for the slides
const productData = [
  {
    id: "p1",
    name: "Bò né",
    description: "Bò tươi ướp sẵn",
    image: "/images/products/bone.jpg",
    fallbackImage: "https://placehold.co/600x400/27AE60/FFFFFF?text=Bò+Né",
  },
  {
    id: "p2",
    name: "Bitstet",
    description: "Bò miếng tươi ướp sẵn",
    image: "/images/products/bittet.jpg",
    fallbackImage: "https://placehold.co/600x400/27AE60/FFFFFF?text=Bitstet",
  },
  {
    id: "p3",
    name: "Pate",
    description: "Hương vị thơm ngon",
    image: "/images/products/pate.jpg",
    fallbackImage: "https://placehold.co/600x400/27AE60/FFFFFF?text=Pate",
  },
  {
    id: "p4",
    name: "Nem nướng",
    description: "Thơm ngon đặc biệt",
    image: "/images/products/nemnuong.jpg",
    fallbackImage: "https://placehold.co/600x400/27AE60/FFFFFF?text=Nem+Nướng",
  },
  {
    id: "p5",
    name: "Chả quế",
    description: "Đậm đà hương vị",
    image: "/images/products/chaque.jpg",
    fallbackImage: "https://placehold.co/600x400/27AE60/FFFFFF?text=Chả+Quế",
  },
  {
    id: "p6",
    name: "Dầu dấm, xíu mại, xông khói",
    description: "Sản phẩm đặc biệt",
    image: "/images/uss.jpg",
    fallbackImage:
      "https://placehold.co/600x400/27AE60/FFFFFF?text=Xíu+Mại+%26+Xông+Khói",
  },
];

export const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-10 bg-gradient-to-b from-white to-[#f8f9fa] relative overflow-hidden flex justify-center"
      id="san-pham"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-[#27AE60]/10"></div>
        <div className="absolute right-10 bottom-40 w-60 h-60 rounded-full bg-[#27AE60]/10"></div>
        <div className="absolute left-1/4 top-3/4 w-20 h-20 rounded-full bg-[#27AE60]/10"></div>
      </div>

      <BalancedLayout className="relative z-10">
        <div
          className={`text-center mb-8 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* <span className="inline-block px-4 py-1.5 bg-[#E8F5E9] text-[#27AE60] text-sm font-medium rounded-full mb-3">
            Sản phẩm của chúng tôi
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="text-[#212529]">MỘT SỐ SẢN PHẨM CHÍNH</span>
            <div className="h-1 w-24 bg-[#27AE60] mx-auto mt-3"></div>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Chúng tôi cung cấp các sản phẩm chất lượng cao, đảm bảo vệ sinh an
            toàn thực phẩm với hương vị đặc trưng từ công thức độc đáo
          </p>
        </div>

        {/* Main product display area with Swiper */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="product-swiper"
          >
            {productData.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-60 overflow-hidden group">
                    <ImageWithFallback
                      src={product.image}
                      fallbackSrc={product.fallbackImage}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        {/* <span className="inline-block px-2 py-1 bg-[#27AE60] text-white text-xs rounded-md">
                          Sản phẩm đặc trưng
                        </span> */}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-[#27AE60] font-medium">
                        Xem chi tiết
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-[#27AE60]"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </BalancedLayout>

      {/* Add custom styles for Swiper navigation and pagination */}
      <style jsx global>{`
        .product-swiper .swiper-pagination-bullet {
          background-color: #27ae60;
          opacity: 0.5;
        }
        .product-swiper .swiper-pagination-bullet-active {
          background-color: #27ae60;
          opacity: 1;
        }
        .product-swiper .swiper-button-next,
        .product-swiper .swiper-button-prev {
          color: #27ae60;
          background-color: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .product-swiper .swiper-button-next:after,
        .product-swiper .swiper-button-prev:after {
          font-size: 18px;
        }
        .product-swiper .swiper-button-next:hover,
        .product-swiper .swiper-button-prev:hover {
          background-color: #ffffff;
        }
      `}</style>
    </section>
  );
};
