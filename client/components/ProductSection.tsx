"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";
import BalancedLayout from "./BalancedLayout";

export const ProductSection = () => {
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
      className="py-16 bg-gradient-to-b from-white to-[#f8f9fa] relative overflow-hidden flex justify-center"
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
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            <span className="!text-[#27AE60] uppercase">
              Một số sản phẩm chính
            </span>
            <div className="h-1 w-24 bg-[#27AE60] mx-auto mt-3"></div>
          </h2>
          <p className=" !text-2xl max-w-2xl mx-auto text-gray-600 !text-[#27AE60]">
            Chúng tôi cung cấp các thực phẩm cao cấp, đảm bảo vệ sinh an toàn
            thực phẩm với hương vị đặc trưng từ bí quyết công thức chế biến độc
            đáo
          </p>
        </div>

        {/* Elegant Product Showcase */}
        <div
          className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Product Image with Overlay Effect */}
          <div className="md:w-1/2 relative group overflow-hidden rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
              <span className="text-white text-xl font-semibold bg-[#27AE60]/80 px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                Sản Phẩm Đặc Trưng
              </span>
            </div>
            <ImageWithFallback
              src="/images/background/sanpham.jpg"
              alt="Sản phẩm đặc trưng"
              width={600}
              height={600}
              className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              fallbackSrc="/images/product/sanpham.jpg"
            />
          </div>

          {/* Product List with Elegant Styling */}
          <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="!text-[#27AE60] text-2xl font-bold mb-6  flex items-center">
              <span className="!text-[#27AE60] h-6 w-1.5 bg-[#27AE60] rounded-full mr-3 inline-block"></span>
              Danh mục sản phẩm
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mr-4">
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
                <span className="!text-2xl font-medium !text-[#27AE60]">
                  Bò né (bò tươi ướp sẵn)
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mr-4">
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
                <span className="!text-2xl font-medium !text-[#27AE60]">
                  Bitstet (bò miếng tươi ướp sẵn)
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mr-4">
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
                <span className="!text-2xl font-medium !text-[#27AE60]">
                  Pate, nem nướng, chả quế
                </span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mr-4">
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
                <span className="!text-2xl font-medium !text-[#27AE60]  ">
                  Dầu dấm, xíu mại, xông khói
                </span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-[#E8F5E9]/50 rounded-lg border border-[#27AE60]/20">
              <p className="!text-[#27AE60] !text-2xl italic flex items-center">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Và nhiều chủng loại thực phẩm phong phú khác nữa…
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="#lien-he"
                className="!text-white inline-flex items-center bg-[#27AE60]  px-6 py-3 rounded-lg hover:bg-[#219653] transition-colors duration-300"
              >
                <span className="!text-white ">Liên hệ đặt hàng</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
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
