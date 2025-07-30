"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import BalancedLayout from "./BalancedLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "../hooks/useMediaQuery";

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

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

  // Card data for reusability
  const cards = [
    {
      id: "card1",
      title: "GIÁ CẢ TỐT NHẤT",
      content: (
        <>
          Chuyên cung cấp các loại thực phẩm cao cấp chế biến Bò né cho các nhà
          hàng, quán ăn theo yêu cầu đảm bảo
          <span className="font-semibold"> GIÁ CẢ TỐT NHẤT VÀ CẠNH TRANH</span>.
          Đến với chúng tôi quý khách yên tâm về giá.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
          />
        </svg>
      ),
      delay: "",
    },
    {
      id: "card2",
      title: "CHẤT LƯỢNG HÀNG ĐẦU",
      content: (
        <>
          Các thực phẩm được sản xuất đảm bảo ATVSTP, chuẩn vị gốc, đảm bảo
          <span className="font-semibold"> CHẤT LƯỢNG VÀ TRỌNG LƯỢNG</span> và
          đang được khách hàng yên mến, tin dùng trên thị trường hiện nay.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      delay: "delay-200",
    },
    {
      id: "card3",
      title: "DỊCH VỤ GIAO NHẬN, HẬU MÃI",
      content: (
        <>
          Đến với chúng tôi quý khách yên tâm và luôn được phục vụ{" "}
          <span className="font-semibold uppercase">
            TẬN TÂM, CHU ĐÁO, ĐÚNG HẸN;
          </span>{" "}
          sản phẩm có thể được đổi/trả(Nếu do lỗi bên cung cấp) cùng với nhiều
          chương trình khuyến mại hấp dẫn.
        </>
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 17a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
          />
        </svg>
      ),
      delay: "delay-400",
    },
  ];

  // Define Card props interface
  interface CardProps {
    title: string;
    content: React.ReactNode;
    icon: React.ReactNode;
    delay: string;
  }

  // Card component for reuse
  const Card = ({ title, content, icon, delay }: CardProps) => (
    <div
      className={`bg-white p-6 md:p-8 rounded-xl shadow-lg border-b-4 border-[#27AE60] transform transition-all duration-700 ${delay} ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } hover:shadow-2xl hover:-translate-y-1 h-full`}
    >
      <div className="relative mb-8">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E8F5E9] rounded-full"></div>
        <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center relative z-10 transform transition-transform hover:rotate-6">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 !text-[#27AE60] flex items-center">
        <span>{title}</span>
        {/* <div className="ml-2 w-10 h-0.5 bg-[#27AE60]"></div> */}
      </h3>
      <p className="text-[#212529] leading-relaxed">{content}</p>
    </div>
  );

  return (
    <section
      id="gioi-thieu"
      ref={sectionRef}
      className="py-12 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden flex justify-center"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <Image
          src="/images/food-pattern.svg"
          alt="Pattern background"
          width={800}
          height={800}
          className="absolute -right-20 -top-20 rotate-12 opacity-30"
        />
        <Image
          src="/images/food-pattern.svg"
          alt="Pattern background"
          width={800}
          height={800}
          className="absolute -left-40 -bottom-40 -rotate-12 opacity-30"
        />
      </div>

      <BalancedLayout className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="inline-block relative text-3xl md:text-4xl font-bold mb-3 text-[#212529]">
            ĐẾN VỚI<span className="!text-[#27AE60] uppercase"> chúng tôi</span>
            <div
              className={`h-1 w-24 bg-[#27AE60] mx-auto mt-4 transition-all duration-1000 ${
                isVisible ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            ></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Với mong muốn trở thành đối tác tin cậy của mọi nhà hàng, quán ăn
            tại Đà Nẵng và các tỉnh thành lân cận, Bò Né Hạnh không ngừng nỗ lực
            để mang đến những sản phẩm chất lượng với chi phí tối ưu nhất.
          </p>
        </div>

        {/* Desktop view - Grid */}
        {!isMobile && (
          <div className="grid md:grid-cols-3 gap-8">
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                content={card.content}
                icon={card.icon}
                delay={card.delay}
              />
            ))}
          </div>
        )}

        {/* Mobile view - Swiper */}
        {isMobile && (
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="about-swiper pb-12"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <Card
                    title={card.title}
                    content={card.content}
                    icon={card.icon}
                    delay=""
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </BalancedLayout>

      {/* Custom styles for Swiper */}
      <style jsx global>{`
        .about-swiper .swiper-pagination-bullet {
          background-color: #27ae60;
          opacity: 0.5;
        }
        .about-swiper .swiper-pagination-bullet-active {
          background-color: #27ae60;
          opacity: 1;
        }
        .about-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};
