"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { BalancedLayout } from "./BalancedLayout";

export const FoodSupplySection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Nội dung bên trái
  const leftContent = (
    <div className="pr-0 md:pr-6 lg:pr-12">
      <div
        className={`transform transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="text-sm font-semibold uppercase text-[#27AE60] tracking-wider mb-3">
          DỊCH VỤ
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#27AE60] mb-4">
          CUNG CẤP THỰC PHẨM
        </h2>
        <div className="h-1 w-16 bg-[#27AE60] mb-6"></div>

        <p className="text-lg md:text-xl font-bold mb-8 text-gray-800">
          TƯƠI MỚI - LÀNH MẠNH - SẠCH SẼ
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            Được thành lập từ năm 2022, 33 Ngon với nền tảng từ công ty TNHH MTV
            Thành Nam đã không ngừng phát triển nhanh chóng, từng bước vươn lên
            trên thị trường thực phẩm.
          </p>

          <p>
            Đến với dịch vụ cung cấp thực phẩm, chúng tôi xây dựng hệ thống nông
            trại nuôi trồng chuẩn VIETGAP cùng nhà máy sơ chế - giết mổ hiện
            đại, năng suất cao cùng chi phí hợp lý. Góp phần cung cấp ra thị
            trường mỗi ngày hàng chục tấn thịt heo, thịt gà, trứng, rau, củ,
            quả,...
          </p>

          <p>
            Chúng tôi mang đến nguồn nguyên liệu chất lượng cao "từ nông trại
            đến bàn ăn". Phục vụ cho việc chế biến món ăn ngon bổ dưỡng cho từng
            phân khúc khách hàng khác nhau tại các tỉnh thành như Bình Dương,
            Đồng Nai, TP. HCM, Long An, Tiền Giang,...
          </p>
        </div>

        <div className="mt-8 inline-flex">
          <a
            href="tel:0977912208"
            className="flex items-center px-6 py-3 bg-[#27AE60] text-white rounded-lg hover:bg-[#219653] transition-colors shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            HOTLINE: 0977 912 208
          </a>
        </div>
      </div>
    </div>
  );

  // Nội dung bên phải - grid hình ảnh
  const rightContent = (
    <div
      ref={ref}
      className={`grid grid-cols-2 gap-4 transform transition-all duration-1000 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Hình ảnh thủy sản */}
      <div className="col-span-2 md:col-span-1 row-span-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="text-white font-bold text-xl">
            Thủy sản tươi sống
          </span>
        </div>
        <Image
          src="/images/thucphamdauvao/anh1.jpg"
          alt="Thủy sản tươi sống"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Hình ảnh gia cầm */}
      <div className="col-span-2 md:col-span-1 row-span-1 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative">
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="text-white font-bold text-xl">Gia cầm</span>
        </div>
        <Image
          src="/images/thucphamdauvao/anh2.jpg"
          alt="Gia cầm"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Hình ảnh trứng */}
      <div className="col-span-1 row-span-1 aspect-square rounded-2xl overflow-hidden shadow-lg relative">
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="text-white font-bold text-xl">Trứng</span>
        </div>
        <Image
          src="/images/monamthuc/anh2.jpg"
          alt="Trứng"
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* Hình ảnh rau củ */}
      <div className="col-span-1 row-span-1 aspect-square rounded-2xl overflow-hidden shadow-lg relative">
        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <span className="text-white font-bold text-xl">Rau củ quả</span>
        </div>
        <Image
          src="/images/thucphamdauvao/anh2.jpg"
          alt="Rau củ quả"
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="cung-cap-thuc-pham">
      <div className="container mx-auto px-6">
        <BalancedLayout
          leftContent={leftContent}
          rightContent={rightContent}
          leftWidth="w-full md:w-1/2 lg:w-5/12"
          rightWidth="w-full md:w-1/2 lg:w-7/12"
          leftAnimation="none" // Animation đã được xử lý riêng trong leftContent
          rightAnimation="none" // Animation đã được xử lý riêng trong rightContent
          gap="gap-8 md:gap-12"
          alignItems="items-start"
        />
      </div>
    </section>
  );
};
