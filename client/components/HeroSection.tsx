"use client";

import { useEffect, useState, useMemo, CSSProperties, useRef } from "react";
import SmoothScrollLink from "./SmoothScrollLink";

// Extended CSS Properties interface to include webkit prefixed properties
interface ExtendedCSSProperties extends CSSProperties {
  WebkitFilter?: string;
  WebkitBackfaceVisibility?: 'visible' | 'hidden';
  WebkitTransform?: string;
}

interface HeroSectionProps {
  isLoaded: boolean;
}

export const HeroSection = ({ isLoaded }: HeroSectionProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSafari, setIsSafari] = useState(false);
  const preloadLinkRef = useRef<HTMLLinkElement | null>(null);

  useEffect(() => {
    // Safari detection
    const isSafariBrowser = 
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
      /Apple/.test(navigator.vendor);
    
    setIsSafari(isSafariBrowser);

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

  // Optimize LCP: Preload the hero background image
  useEffect(() => {
    // Preload hero background image for better LCP
    if (!preloadLinkRef.current) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = '/images/background/sanpham.jpg';
      document.head.appendChild(preloadLink);
      preloadLinkRef.current = preloadLink;
    }
    
    return () => {
      // Clean up the preload link when component unmounts
      if (preloadLinkRef.current && document.head.contains(preloadLinkRef.current)) {
        document.head.removeChild(preloadLinkRef.current);
      }
    };
  }, []);

  // Memoize the dynamic style to avoid recalculations on every render
  const backgroundStyle = useMemo((): ExtendedCSSProperties => {
    // Safari-optimized approach without background-attachment: fixed
    if (isSafari) {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("/images/background/sanpham.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        // Use transform for Safari instead of fixed attachment
        transform: `translate3d(0, ${scrollPosition * 0.15}px, 0)`,
        // Use -webkit-filter for better Safari performance
        WebkitFilter: "brightness(0.9) contrast(1.1)",
        filter: "brightness(0.9) contrast(1.1)",
        // Force hardware acceleration
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        WebkitTransform: `translate3d(0, ${scrollPosition * 0.15}px, 0)`,
      };
    } else {
      return {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.507), rgba(0, 0, 0, 0.551)), url("/images/background/sanpham.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
        backgroundAttachment: "fixed",
        transform: `translateY(${scrollPosition * 0.15}px)`,
        filter: "brightness(0.9) contrast(1.1)",
      };
    }
  }, [scrollPosition, isSafari]);

  const patternStyle = useMemo((): ExtendedCSSProperties => {
    return {
      backgroundImage: `url('/images/noise.svg')`,
      backgroundSize: "200px",
      // Add Safari-specific optimizations
      WebkitBackfaceVisibility: "hidden",
      backfaceVisibility: "hidden",
    };
  }, []);

  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect - optimized for Safari */}
      <div 
        className="absolute inset-0 will-change-transform" 
        style={backgroundStyle}
        aria-hidden="true"
      />

      {/* Decorative overlay pattern - Safari optimized */}
      <div 
        className="absolute inset-0 opacity-15" 
        style={patternStyle} 
        aria-hidden="true"
      />

      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-60"
        aria-hidden="true" 
      />

      {/* Content container - simplified structure */}
      <div className="container mx-auto px-4 z-10 relative py-6 sm:py-8 max-w-[1300px]">
        {/* Main content */}
        <div 
          className={`text-center max-w-4xl mx-auto transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          } transition-all duration-1000 ease-out`}
        >
          <h1 className="font-black uppercase text-white drop-shadow-xl mb-6  sm:mb-8 text-center">
            <span className="text-5xl bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent inline-block "
                  style={{ textShadow: "0 0 15px rgba(255,255,255,0.5)" }}>
               CTY&nbsp;THỰC&nbsp;PHẨM <br />
              BÒ NÉ HẠNH
            </span>
          </h1>
          
          <p className="text-3xl sm:text-xl md:text-2xl font-medium mb-6 !text-white max-w-2xl mx-auto drop-shadow-md">
            Mang đến hương vị truyền thống, chuẩn vị Sài Gòn với nguyên liệu
            tươi sạch tận nguồn
          </p>
          
          {/* Featured card - simplified DOM structure */}
          <div 
            className={`glass-card relative backdrop-blur-md border border-white/30 shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mx-auto max-w-3xl transform ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            } transition-all duration-1000 delay-500 ease-out`}
          >
            {/* Background gradients combined into fewer elements */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[#27AE60]/20 to-[#27AE60]/40 z-0 rounded-xl sm:rounded-2xl"
              aria-hidden="true"
            />
            
            {/* Card content */}
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-6xl md:text-6xl font-bold !text-[#27AE60] mb-3 sm:mb-4"
                  style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                THỰC PHẨM BÒ NÉ HẠNH
              </h2>
              
              <p className="text-xl sm:text-2xl md:text-4xl font-bold !text-[#27AE60] mb-4"
                 style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
                UY TÍN – CHẤT LƯỢNG – AN TOÀN – ĐẲNG CẤP
              </p>
              
              <p className="text-2xl sm:text-lg md:text-xl !text-[#27AE60] drop-shadow-sm">
                Phục vụ hơn <span className="font-bold text-green-300">100+</span> nhà
                hàng & quán ăn tại Đà Nẵng
              </p>
            </div>
          </div>
          
          {/* CTA Buttons - simplified structure */}
          <div
            className={`mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center transform ${
              isLoaded ? "opacity-100" : "opacity-0"
            } transition-all duration-1000 delay-700 ease-out`}
          >
            <SmoothScrollLink
              href="#san-pham"
              className="px-6 md:px-8 py-3 md:py-4 bg-white text-[#27AE60] font-bold rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center"
            >
              <span className="text-sm sm:text-base">Khám Phá Sản Phẩm</span>
            </SmoothScrollLink>
            
            <SmoothScrollLink
              href="#lien-he"
              className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-[#27AE60] to-[#219653] text-white font-bold rounded-full hover:scale-105 transition-all shadow-lg flex items-center justify-center"
            >
              <span className="text-sm sm:text-base">Liên Hệ Ngay</span>
            </SmoothScrollLink>
          </div>
        </div>
      </div>

      {/* Mobile scroll indicator - simplified */}
      <div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 sm:hidden animate-pulse"
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Add custom styles for animations */}
      <style jsx>{`
        @supports (-webkit-touch-callout: none) {
          .glass-card {
            -webkit-backdrop-filter: blur(12px);
          }
        }
      `}</style>
    </section>
  );
};
