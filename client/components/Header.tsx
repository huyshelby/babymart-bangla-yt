"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrolled = window.scrollY > 50;
      setScrolled(newScrolled);

      // Calculate scroll progress for animation effects
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(window.scrollY / (scrollHeight * 0.1), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling again
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg py-2"
          : "bg-gradient-to-b from-black/80 via-black/50 to-transparent py-6"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500"></div>

      {scrolled && (
        <div
          className="absolute inset-0 bg-white opacity-95"
          style={{
            backgroundImage: "url('/images/food-pattern.svg')",
            backgroundSize: "200px",
            backgroundRepeat: "repeat",
            mixBlendMode: "soft-light",
            opacity: 0.05,
          }}
        ></div>
      )}

      <div className="container mx-auto px-6 flex justify-between items-center relative">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-orange-400 shadow-lg transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent rounded-full z-0"></div>
            <Image
              src="/images/logo.png"
              alt="Bò Né Sài Gòn Logo"
              fill
              className="object-contain p-1.5 z-10 transition-transform duration-500 group-hover:rotate-3"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm transition-all duration-300">
              BÒ NÉ, BÒ KHO SAI GON
            </span>
            <div
              className={`flex items-center space-x-2 transition-all duration-300`}
            >
              <span
                className={`text-xs ${
                  scrolled ? "text-gray-600" : "text-gray-300"
                } font-medium`}
              >
                Đặc Sản Sài Gòn - Đà Nẵng
              </span>
              <div className="relative w-4 h-px">
                <div
                  className={`absolute inset-0 ${
                    scrolled ? "bg-orange-400" : "bg-orange-300"
                  }`}
                ></div>
              </div>
              <span
                className={`text-xs ${
                  scrolled ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Since 2005
              </span>
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1">
          {[
            { href: "#about", label: "Về Chúng Tôi" },
            { href: "#products", label: "Sản Phẩm" },
            { href: "#quality", label: "Cam Kết Chất Lượng" },
            { href: "#partners", label: "Đối Tác" },
            { href: "#contact", label: "Liên Hệ" },
          ].map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 transition-all duration-300 group font-medium ${
                scrolled
                  ? "text-gray-700 hover:text-orange-600"
                  : "text-white hover:text-orange-300"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Link href="tel:0935330134">
            <Button
              variant="default"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300 group-hover:blur-md"></div>
              <div className="relative flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
                0935.330.134
              </div>
            </Button>
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className={`lg:hidden p-2 rounded-full ${
            scrolled
              ? "text-gray-700 hover:bg-gray-100"
              : "text-white hover:bg-white/20"
          } transition-colors focus:outline-none relative`}
          aria-label="Menu"
        >
          <span className="absolute -inset-1 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 relative"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-br from-orange-50 via-white to-yellow-50 shadow-xl transform transition-transform duration-500 ease-out overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideIn 0.3s ease-out forwards" }}
          >
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/images/food-pattern.svg')",
                backgroundSize: "200px",
                backgroundRepeat: "repeat",
                opacity: 0.05,
              }}
            ></div>

            <div className="relative z-10">
              <div className="flex justify-between items-center p-6 border-b border-orange-100">
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent rounded-full"></div>
                    <Image
                      src="/images/logo.png"
                      alt="Bò Né Sài Gòn Logo"
                      width={40}
                      height={40}
                      className="rounded-full border border-orange-300 relative z-10"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                      BÒ NÉ, BÒ KHO
                    </span>
                    <span className="text-xs text-orange-400">SAI GON</span>
                  </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-orange-100 transition-colors text-gray-500 group"
                >
                  <div className="absolute -inset-1 bg-orange-200 rounded-full blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 relative"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="py-6 px-6">
                <div className="space-y-2">
                  {[
                    {
                      href: "#about",
                      label: "Về Chúng Tôi",
                      icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    },
                    {
                      href: "#products",
                      label: "Sản Phẩm",
                      icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
                    },
                    {
                      href: "#quality",
                      label: "Cam Kết Chất Lượng",
                      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                    },
                    {
                      href: "#partners",
                      label: "Đối Tác",
                      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                    },
                    {
                      href: "#contact",
                      label: "Liên Hệ",
                      icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    },
                  ].map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center p-4 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-all duration-300 group"
                      onClick={closeMobileMenu}
                      style={{
                        animation: `fadeInSlideUp 0.3s ease-out forwards`,
                        animationDelay: `${index * 0.05 + 0.1}s`,
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                    >
                      <span className="bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-600 p-2 rounded-full mr-3 group-hover:from-orange-200 group-hover:to-yellow-200 transition-colors duration-300 shadow-sm">
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
                            d={item.icon}
                          />
                        </svg>
                      </span>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>

                <div
                  className="mt-8 pt-6 border-t border-orange-100"
                  style={{
                    animation: `fadeInSlideUp 0.3s ease-out forwards`,
                    animationDelay: "0.4s",
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                >
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 mb-6 border border-orange-100 shadow-sm">
                    <div className="flex items-center mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-orange-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <h4 className="font-semibold text-orange-800">Địa Chỉ</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      66 Huỳnh Ngọc Huệ - Thanh Khê - Đà Nẵng
                    </p>
                  </div>

                  <Link
                    href="tel:0935330134"
                    className="flex items-center justify-center w-full gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3.5 px-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg relative group"
                    onClick={closeMobileMenu}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-red-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative flex items-center gap-2">
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
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      Gọi Ngay: 0935.330.134
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeInSlideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
