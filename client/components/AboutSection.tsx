"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export const AboutSection = () => {
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
      id="gioi-thieu"
      ref={sectionRef}
      className="py-12 bg-gradient-to-b from-[#F8F9FA] to-white relative overflow-hidden"
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="inline-block relative text-3xl md:text-4xl font-bold mb-3 text-[#212529]">
            <span className="text-[#27AE60]">Giới Thiệu</span> Chung
            <div
              className={`h-1 w-24 bg-[#27AE60] mx-auto mt-4 transition-all duration-1000 ${
                isVisible ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
            ></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Chúng tôi tự hào cung cấp những sản phẩm thực phẩm chất lượng cao
            với giá cả cạnh tranh, mang đến trải nghiệm ẩm thực tuyệt vời cho
            khách hàng.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* First card */}
          <div
            className={`bg-white p-8 rounded-xl shadow-lg border-b-4 border-[#27AE60] transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } hover:shadow-2xl hover:-translate-y-1`}
          >
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E8F5E9] rounded-full"></div>
              <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center relative z-10 transform transition-transform hover:rotate-6">
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
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#27AE60] flex items-center">
              <span>GIÁ CẢ TỐT NHẤT</span>
              <div className="ml-2 w-10 h-0.5 bg-[#27AE60]"></div>
            </h3>
            <p className="text-[#212529] leading-relaxed">
              Chuyên cung cấp các loại thực phẩm cao cấp chế biến Bò né cho các
              nhà hàng, quán ăn theo yêu cầu đảm bảo
              <span className="font-semibold">
                {" "}
                GIÁ CẢ TỐT NHẤT VÀ CẠNH TRANH
              </span>
              .
            </p>
          </div>

          {/* Second card */}
          <div
            className={`bg-white p-8 rounded-xl shadow-lg border-b-4 border-[#27AE60] transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } hover:shadow-2xl hover:-translate-y-1`}
          >
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E8F5E9] rounded-full"></div>
              <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center relative z-10 transform transition-transform hover:rotate-6">
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
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#27AE60] flex items-center">
              <span>CHẤT LƯỢNG HÀNG ĐẦU</span>
              <div className="ml-2 w-10 h-0.5 bg-[#27AE60]"></div>
            </h3>
            <p className="text-[#212529] leading-relaxed">
              Các thực phẩm được sản xuất đảm bảo ATVSTP, chuẩn vị gốc, đảm bảo
              <span className="font-semibold">
                {" "}
                CHẤT LƯỢNG VÀ TRỌNG LƯỢNG
              </span>{" "}
              và đang được khách hàng yên mến, tin dùng trên thị trường hiện
              nay.
            </p>
          </div>

          {/* Third card */}
          <div
            className={`bg-white p-8 rounded-xl shadow-lg border-b-4 border-[#27AE60] transform transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } hover:shadow-2xl hover:-translate-y-1`}
          >
            <div className="relative mb-8">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#E8F5E9] rounded-full"></div>
              <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center relative z-10 transform transition-transform hover:rotate-6">
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
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#27AE60] flex items-center">
              <span>DỊCH VỤ TẬN TÂM</span>
              <div className="ml-2 w-10 h-0.5 bg-[#27AE60]"></div>
            </h3>
            <p className="text-[#212529] leading-relaxed">
              Đến với chúng tôi quý khách yên tâm về
              <span className="font-semibold"> GIÁ</span> và luôn được phục vụ
              tận tâm chu đáo cùng với nhiều chương trình khuyến mại hấp dẫn.
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        {/* <div className="mt-16 flex justify-center">
          <Image
            src="/images/spoon-divider.svg"
            alt="Divider"
            width={200}
            height={30}
            className={`opacity-70 transform transition-all duration-1000 ${
              isVisible ? "scale-100 opacity-70" : "scale-50 opacity-0"
            }`}
          />
        </div> */}
      </div>
    </section>
  );
};
