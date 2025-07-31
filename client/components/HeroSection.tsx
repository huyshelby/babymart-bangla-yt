"use client";

import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import SmoothScrollLink from "./SmoothScrollLink";

interface HeroSectionProps {
  isLoaded: boolean;
}

export const HeroSection = ({ isLoaded }: HeroSectionProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    // Use passive listener for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Memoize the dynamic style to avoid recalculations on every render
  const backgroundStyle = useMemo(() => {
    return {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/images/background/sanpham.jpg")`,
      backgroundSize: "cover",
      backgroundPosition: "center 40%",
      backgroundAttachment: "fixed",
      transform: `translateY(${scrollPosition * 0.15}px)`,
      filter: "brightness(0.9) contrast(1.1)",
    };
  }, [scrollPosition]);

  const patternStyle = useMemo(() => {
    return {
      backgroundImage: `url('/images/noise.svg')`,
      backgroundSize: "200px",
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect - improved for mobile */}
      <div className="absolute inset-0" style={backgroundStyle}></div>

      {/* Decorative overlay pattern */}
      <div className="absolute inset-0 opacity-15" style={patternStyle}></div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-60"></div>

      {/* Decorative shapes - adjusted for mobile */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-green-500/10 blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-green-500/10 blur-3xl animate-pulse-slow animation-delay-2000"></div>

      {/* Content - improved spacing for mobile */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 z-10 relative py-6 sm:py-8 max-w-[1300px]">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-green-400/60 to-transparent rounded-full"></div>

        {/* Main content with animations - improved for mobile */}
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000 ease-out`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase tracking-wide sm:tracking-wider mb-4 sm:mb-6 text-white drop-shadow-lg">
              <span className="animate-text-shimmer inline-block bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent uppercase">
                Thực phẩm bò né hạnh <br className="hidden sm:block" />
                <span className="text-white"></span>
              </span>
            </h1>
          </div>

          <div
            className={`transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000 delay-300 ease-out`}
          >
            <p className="!text-3xl sm:text-base md:text-xl font-medium mb-6 sm:mb-8 !text-white max-w-2xl mx-auto drop-shadow-md leading-relaxed px-3 sm:px-0">
              Mang đến hương vị truyền thống, chuẩn vị Sài Gòn với nguyên liệu
              tươi sạch tận nguồn
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent to-white/80"></div>
              <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/80 rounded-full animate-pulse"></div>
              <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent to-white/80"></div>
            </div>
          </div>

          <div
            className={`transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000 delay-500 ease-out`}
          >
            <div className="glass-card relative overflow-hidden p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/30 shadow-2xl mx-1 sm:mx-4 md:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#27AE60]/20 to-[#27AE60]/40 z-0"></div>
              <div className="absolute -top-16 sm:-top-24 -right-16 sm:-right-24 w-32 sm:w-48 h-32 sm:h-48 bg-green-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-16 sm:-bottom-24 -left-16 sm:-left-24 w-32 sm:w-48 h-32 sm:h-48 bg-green-400/20 rounded-full blur-3xl"></div>

              {/* Subtle animated accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-300/0 via-green-300/80 to-green-300/0 animate-shimmer-slow"></div>

              <div className="relative z-10 space-y-2 sm:space-y-3 md:space-y-5">
                <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-1 sm:mb-2 md:mb-3">
                  <div className="h-[1px] sm:h-[2px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-white/90 rounded-full"></div>
                  <p
                    className="text-2xl sm:text-7xl md:text-6xl font-bold !text-[#27AE60] whitespace-normal sm:whitespace-nowrap px-1 sm:px-0"
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    THỰC PHẨM BÒ NÉ HẠNH
                  </p>
                  <div className="h-[1px] sm:h-[2px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-white/90 rounded-full"></div>
                </div>

                <p
                  className="relative z-10 text-xl sm:text-2xl md:text-4xl font-bold !text-[#27AE60] mb-2 sm:mb-3 px-2 sm:px-0"
                  style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                >
                  UY TÍN – CHẤT LƯỢNG – AN TOÀN – ĐẲNG CẤP
                </p>

                <div className="flex items-center justify-center space-x-2 mb-1">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-300/80 rounded-full animate-pulse"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-300/80 rounded-full animate-pulse animation-delay-500"></div>
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-green-300/80 rounded-full animate-pulse animation-delay-1000"></div>
                </div>

                <p className="!text-2xl sm:text-base md:text-lg !text-white/90 drop-shadow-sm">
                  Phục vụ hơn{" "}
                  <span className="font-bold text-green-300">100+</span> nhà
                  hàng & quán ăn tại Đà Nẵng
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons - improved for mobile */}
          <div
            className={`mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000 delay-700 ease-out px-4 sm:px-0`}
          >
            <SmoothScrollLink
              href="#san-pham"
              className="px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-white hover:bg-white/95 text-[#27AE60] font-bold rounded-full transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl flex items-center justify-center border border-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 text-[#27AE60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="text-[#27AE60] text-sm sm:text-base">
                Khám Phá Sản Phẩm
              </span>
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#lien-he"
              className="px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#27AE60] to-[#219653] hover:from-[#219653] hover:to-[#27AE60] text-white font-bold rounded-full transform hover:scale-105 hover:shadow-[0_0_20px_rgba(39,174,96,0.5)] transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-1.5 sm:mr-2 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="!text-white text-sm sm:text-base">
                Liên Hệ Ngay
              </span>
            </SmoothScrollLink>
          </div>
        </div>
      </div>

      {/* Mobile scroll indicator - only shows on mobile */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex sm:hidden flex-col items-center">
        <div className="w-7 h-7 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
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

        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }

        .animate-shimmer-slow {
          animation: shimmer-slow 3s infinite;
          background-size: 200% 100%;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        /* Mobile optimization */
        @media (max-width: 640px) {
          .glass-card {
            margin-left: 6px;
            margin-right: 6px;
          }
        }
      `}</style>
    </section>
  );
};
