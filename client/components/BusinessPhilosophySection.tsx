"use client";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

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
      className="py-20 relative overflow-hidden"
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

      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center mb-3">
            <div className="h-px w-10 bg-[#27AE60]/60 mr-4"></div>
            <span className="text-sm uppercase tracking-widest text-[#27AE60]/80 font-semibold">
              Tầm nhìn & Phương châm
            </span>
            <div className="h-px w-10 bg-[#27AE60]/60 ml-4"></div>
          </div>

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

        <div className="max-w-6xl mx-auto">
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
                    Với tâm huyết mang hương vị bò né đậm đà chuẩn gốc Sài Gòn
                    đến với thực khách Đà thành, chúng tôi đã xây dựng nên một
                    thương hiệu dựa trên nền tảng của sự tử tế và trách nhiệm.
                  </p>

                  <div className="my-8 px-6 py-4 border-l-4 border-[#27AE60]/60 bg-[#27AE60]/5 rounded-r-lg">
                    <p className="text-xl font-medium italic text-[#27AE60]">
                      &ldquo;Khách hàng là ân nhân&rdquo;
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Triết lý kinh doanh của chúng tôi gói gọn trong câu nói
                    trên. Mỗi đối tác không chỉ là một khách hàng, mà là một
                    người bạn đồng hành. Chúng tôi hiểu rằng, thành công của các
                    bạn chính là thước đo cho sự thành công của chúng tôi.
                  </p>

                  <p className="text-lg leading-relaxed">
                    Vì vậy, chúng tôi không chỉ giao hàng, chúng tôi giao cả sự
                    tận tâm, cam kết về chất lượng ổn định và sự an toàn tuyệt
                    đối trong từng sản phẩm.
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
              className={`order-1 md:order-2 space-y-6 transform transition-all duration-1000 ${
                imageInView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              }`}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] relative aspect-[4/3] group">
                <div className="absolute inset-0 bg-[#27AE60] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
                <ImageWithFallback
                  src="/images/phuongcham/phuongcham1.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Phương+Châm+Kinh+Doanh"
                  alt="Phương châm kinh doanh"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-7000 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="!text-white font-medium text-lg mb-2">
                    Cam kết chất lượng luôn là ưu tiên hàng đầu
                  </p>
                  <div className="w-20 h-0.5 bg-white/80 rounded-full"></div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] hidden md:block relative aspect-[4/3] group">
                <div className="absolute inset-0 bg-[#27AE60] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
                <ImageWithFallback
                  src="/images/phuongcham/phuongcham2.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Chất+Lượng+Sản+Phẩm"
                  alt="Chất lượng sản phẩm"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-7000 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-0 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="!text-white font-medium text-lg mb-2">
                    Trải nghiệm khách hàng là ưu tiên hàng đầu
                  </p>
                  <div className="w-20 h-0.5 bg-white/80 rounded-full"></div>
                </div>
              </div>

              {/* Additional mobile image for smaller screens */}
              {/* <div className="rounded-2xl overflow-hidden shadow-xl transform transition-all hover:scale-[1.02] block md:hidden relative aspect-[4/3] group mt-4">
                <div className="absolute inset-0 bg-[#27AE60] mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-50"></div>
                <ImageWithFallback
                  src="/images/phuongcham/phuongcham2.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Chất+Lượng+Sản+Phẩm"
                  alt="Chất lượng sản phẩm"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-7000 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="!text-white font-medium text-lg mb-2">
                    Trải nghiệm khách hàng là ưu tiên hàng đầu
                  </p>
                  <div className="w-20 h-0.5 bg-white/80 rounded-full"></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
