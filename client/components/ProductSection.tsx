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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const currentRef = sectionRef.current;
      observer.observe(currentRef);
      
      return () => {
        observer.unobserve(currentRef);
      };
    }
  }, []);
  
  const products = [
    {
      id: 1,
      name: "Bò né (bò tươi ướp sẵn)",
      image: "/images/product/sanpham.jpg",
      description: "Thịt bò tươi ngon, ướp sẵn gia vị đặc biệt",
    },
    {
      id: 2,
      name: "Bò bít tết (bò miếng tươi ướp sẵn)",
      image: "/images/product/sanpham.jpg",
      description: "Thịt bò thái miếng dày, thơm ngon hảo hạng",
    },
    {
      id: 3,
      name: "Bò lúc lắc (bò cục ướp sẵn)",
      image: "/images/product/sanpham.jpg",
      description: "Thịt bò thái hạt lựu, ướp gia vị truyền thống",
    },
    {
      id: 4,
      name: "Nem nướng",
      image: "/images/product/sanpham.jpg",
      description: "Nem thơm ngon, đậm đà hương vị truyền thống",
    },
    {
      id: 5,
      name: "Chả quế",
      image: "/images/product/sanpham.jpg",
      description: "Hương vị đặc trưng với quế thơm nồng",
    },
    {
      id: 6,
      name: "Pate",
      image: "/images/product/sanpham.jpg",
      description: "Mịn màng, thơm ngon, dễ dàng sử dụng",
    },
    {
      id: 7,
      name: "Dầu dấm (nước trộn)",
      image: "/images/product/sanpham.jpg",
      description: "Hỗn hợp đặc biệt cho các món trộn",
    },
    {
      id: 8,
      name: "Cá hộp",
      image: "/images/product/sanpham.jpg",
      description: "Cá được chế biến và đóng hộp kỹ lưỡng",
    },
    {
      id: 9,
      name: "Nước tương",
      image: "/images/product/sanpham.jpg",
      description: "Được lên men tự nhiên, đậm đà hương vị",
    },
    {
      id: 10,
      name: "Khoai tây",
      image: "/images/product/sanpham.jpg",
      description: "Khoai tây tươi ngon, chất lượng cao",
    },
    {
      id: 11,
      name: "Xúc xích",
      image: "/images/product/sanpham.jpg",
      description: "Xúc xích thơm ngon, đảm bảo chất lượng",
    },
    {
      id: 12,
      name: "Xông khói",
      image: "/images/product/sanpham.jpg",
      description: "Hương vị đặc trưng từ quá trình xông khói",
    },
    {
      id: 13,
      name: "Phô mai",
      image: "/images/product/sanpham.jpg",
      description: "Phô mai mềm mịn, thơm béo tự nhiên",
    },
    {
      id: 14,
      name: "Bơ",
      image: "/images/product/sanpham.jpg",
      description: "Bơ thượng hạng, mịn màng và thơm ngon",
    },
    {
      id: 15,
      name: "Tương ớt",
      image: "/images/product/sanpham.jpg",
      description: "Cay nồng, đậm đà hương vị",
    },
    {
      id: 16,
      name: "Dầu ăn",
      image: "/images/product/sanpham.jpg",
      description: "Dầu ăn tinh khiết, tốt cho sức khỏe",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-white to-[#f8f9fa] relative overflow-hidden flex justify-center"
      id="san-pham"
    >
      {/* Enhanced background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -left-20 top-20 w-40 h-40 rounded-full bg-[#27AE60]/20"></div>
        <div className="absolute right-10 bottom-40 w-60 h-60 rounded-full bg-[#27AE60]/20"></div>
        <div className="absolute left-1/4 top-3/4 w-20 h-20 rounded-full bg-[#27AE60]/20"></div>
        <div className="absolute right-1/3 top-1/4 w-16 h-16 rounded-full bg-[#27AE60]/20 hidden md:block"></div>
      </div>

      <BalancedLayout className="relative z-10">
        <div
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative inline-block">
            <span className="text-[#27AE60]">Các thực phẩm nổi bật</span>
            <div className="h-1.5 w-32 bg-[#27AE60] mx-auto mt-4 rounded-full"></div>
          </h2>    
          <p className="!text-2xl max-w-2xl mx-auto text-gray-600 !text-[#27AE60]">
            Chúng tôi cung cấp các thực phẩm cao cấp, đảm bảo vệ sinh an toàn
            thực phẩm với hương vị đặc trưng từ bí quyết công thức chế biến độc
            đáo
          </p>
        </div>

        {/* Elegant Product Showcase */}
        <div
          className={`flex flex-col gap-8 items-center transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Product List with Elegant Styling */}
          <div className="w-full bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="!text-[#27AE60] text-2xl font-bold mb-6 flex items-center">
              <span className="h-6 w-1.5 bg-[#27AE60] rounded-full mr-3 inline-block"></span>
              Danh mục sản phẩm
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product) => (
                <div key={product.id} className="flex items-start p-2 rounded-lg hover:bg-[#E8F5E9]/30 transition-colors duration-300">
                  <div className="h-10 w-10 rounded-full bg-[#E8F5E9] flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                  <div>
                    <span className="text-2xl md:text-xl font-medium text-[#27AE60] block">
                      {product.name}
                    </span>
                
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-[#E8F5E9]/50 rounded-lg border border-[#27AE60]/20">
              <p className="!text-[#27AE60] text-lg md:text-xl italic flex items-center">
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

            <div className="mt-8 text-center">
              <Link
                href="#lien-he"
                className="text-white inline-flex items-center bg-[#27AE60] px-6 py-3 rounded-lg hover:bg-[#219653] transition-colors duration-300 shadow-md"
              >
                <span className="text-white text-2xl">Liên hệ đặt hàng</span>
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