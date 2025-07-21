"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import SmoothScrollLink from "./SmoothScrollLink";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Set initial animation complete after component mount
    const timer = setTimeout(() => setAnimationComplete(true), 800);

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
      clearTimeout(timer);
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
      {/* Animated decorative elements */}
      <div className="absolute inset-x-0 top-0 h-1.5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500 animate-shimmer"></div>
      </div>

      {/* Decorative food-themed background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[10%] w-4 h-4 rounded-full bg-yellow-300/30 animate-float-slow"></div>
        <div className="absolute top-10 right-[15%] w-3 h-3 rounded-full bg-orange-300/20 animate-float"></div>
        <div className="absolute bottom-2 left-[25%] w-2 h-2 rounded-full bg-red-300/20 animate-float-slow"></div>
        <div className="absolute bottom-5 right-[30%] w-2.5 h-2.5 rounded-full bg-yellow-300/20 animate-float"></div>
      </div>

      {scrolled && (
        <>
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
          <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
        </>
      )}

      <div className="container mx-auto px-6 flex justify-between items-center relative">
        <Link href="/" className="flex items-center space-x-3 group">
          <div
            className={`relative h-16 w-16 overflow-hidden rounded-full border-2 border-orange-400 shadow-lg transition-all duration-500 ${
              animationComplete ? "animate-gentle-pulse" : ""
            } group-hover:scale-110 group-hover:border-orange-500 group-hover:shadow-xl`}
          >
            {/* Light rays background effect */}
            <div className="absolute inset-0 origin-center">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-orange-300/40 to-transparent"
                  style={{
                    transform: `rotate(${i * 45}deg)`,
                    transformOrigin: "left center",
                    opacity: 0.3,
                    animation: `pulse-slow ${3 + i * 0.2}s infinite ${
                      i * 0.1
                    }s`,
                  }}
                ></div>
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent rounded-full z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full z-0 animate-spin-slow"></div>
            <Image
              src="/images/logo/logo.jpg"
              alt="Bò Né Sài Gòn Logo"
              fill
              className="object-cover p-1 z-10 transition-transform duration-500 group-hover:scale-[1.03] group-hover:brightness-110 rounded-full"
            />
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-300 to-orange-400 rounded-full blur-md opacity-0 group-hover:opacity-20 transition duration-300 z-0"></div>
          </div>
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <span
                className={`text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent drop-shadow-sm transition-all duration-300 bg-[size:200%] animate-text-shimmer`}
              >
                BÒ NÉ, BÒ KHO SAI GON
              </span>
            </div>
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
                } italic`}
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
            <SmoothScrollLink
              key={item.href}
              href={item.href}
              offset={80}
              className={`relative px-3 py-2 transition-all duration-300 group font-medium ${
                scrolled
                  ? "text-gray-700 hover:text-orange-600"
                  : "text-white hover:text-orange-300"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
                opacity: animationComplete ? 1 : 0,
                transform: animationComplete
                  ? "translateY(0)"
                  : "translateY(10px)",
              }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-300 group-hover:w-full"></span>
              <span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400/30 blur-sm transition-all duration-500 group-hover:w-full"
                style={{ transitionDelay: "0.1s" }}
              ></span>
            </SmoothScrollLink>
          ))}
        </nav>

        <div
          className="hidden lg:flex items-center space-x-4"
          style={{
            opacity: animationComplete ? 1 : 0,
            transform: animationComplete ? "translateX(0)" : "translateX(20px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            transitionDelay: "0.4s",
          }}
        >
          <Link href="tel:0935330134" className="relative">
            <span className="absolute -inset-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
            <Button
              variant="default"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full blur opacity-30 group-hover:opacity-70 transition duration-300 group-hover:blur-md"></div>
              <div className="relative flex items-center gap-2">
                <div className="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 animate-phone-ring"
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
                </div>
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
            className={`h-6 w-6 relative transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-90 scale-95" : ""
            }`}
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
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-br from-orange-50 via-white to-yellow-50 shadow-xl transform transition-transform duration-500 ease-out overflow-y-auto custom-scrollbar"
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

            {/* Decorative spice illustration */}
            <div className="absolute bottom-0 left-0 w-full h-40 opacity-10 pointer-events-none">
              <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-orange-300/20 to-transparent"></div>
              <div
                className="absolute bottom-5 left-5 w-20 h-20"
                style={{
                  backgroundImage: "url('/images/spice-illustration.svg')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom left",
                }}
              ></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-center p-6 border-b border-orange-100">
                <div className="flex items-center space-x-2">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-orange-300 shadow-lg transition-transform hover:scale-105 duration-300 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/30 to-transparent rounded-full z-0"></div>
                    <Image
                      src="/images/logo/logo.jpg"
                      alt="Bò Né Sài Gòn Logo"
                      fill
                      className="object-cover p-0.5 z-10 group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 via-yellow-300/10 to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 animate-text-shimmer bg-[size:200%]">
                      BÒ NÉ, BÒ KHO
                    </span>
                    <span className="text-xs text-orange-400">SAI GON</span>
                  </div>
                </div>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-orange-100 transition-all duration-300 text-gray-500 group hover:rotate-90"
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
                <div className="space-y-2 relative">
                  {/* Decorative line */}
                  <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-orange-100 via-yellow-100 to-transparent"></div>

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
                    <SmoothScrollLink
                      key={item.href}
                      href={item.href}
                      offset={80}
                      className="flex items-center p-4 rounded-lg text-gray-700 hover:bg-orange-100 hover:text-orange-700 transition-all duration-300 group hover:translate-x-1"
                      onClick={closeMobileMenu}
                      style={{
                        animation: `fadeInSlideUp 0.3s ease-out forwards`,
                        animationDelay: `${index * 0.05 + 0.1}s`,
                        opacity: 0,
                        transform: "translateY(10px)",
                      }}
                    >
                      <span className="bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-600 p-2 rounded-full mr-3 group-hover:from-orange-200 group-hover:to-yellow-200 transition-all duration-300 shadow-sm relative">
                        <span className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping-slow opacity-75"></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 relative z-10"
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
                    </SmoothScrollLink>
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
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-4 mb-6 border border-orange-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex items-center mb-2">
                      <div className="relative">
                        <span className="absolute -inset-1 rounded-full bg-orange-500/20 animate-ping opacity-30"></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-orange-500 mr-2 relative z-10"
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
                      </div>
                      <h4 className="font-semibold text-orange-800">Địa Chỉ</h4>
                    </div>
                    <p className="text-gray-700 text-sm">
                      66 Huỳnh Ngọc Huệ - Thanh Khê - Đà Nẵng
                    </p>
                  </div>

                  <Link
                    href="tel:0935330134"
                    className="flex items-center justify-center w-full gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold py-3.5 px-4 rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg relative group overflow-hidden"
                    onClick={closeMobileMenu}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 bg-[size:200%] animate-shimmer-slow opacity-60"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-red-600 rounded-lg blur opacity-20 group-hover:opacity-50 transition duration-300"></div>
                    <div className="relative flex items-center gap-2">
                      <div className="relative">
                        <span className="absolute -inset-1 bg-white/30 rounded-full animate-ping-slow opacity-50"></span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 animate-phone-ring"
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
                      </div>
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

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes shimmer-slow {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes gentle-pulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.5;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes phone-ring {
          0%,
          100% {
            transform: rotate(-5deg) scale(1);
          }
          25% {
            transform: rotate(5deg) scale(1.1);
          }
          50% {
            transform: rotate(-5deg) scale(1);
          }
          75% {
            transform: rotate(5deg) scale(1.1);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s linear infinite;
          background-size: 200% 100%;
        }

        .animate-shimmer-slow {
          animation: shimmer-slow 4s linear infinite;
          background-size: 200% 100%;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }

        .animate-gentle-pulse {
          animation: gentle-pulse 3s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }

        .animate-phone-ring {
          animation: phone-ring 2s ease-in-out infinite;
        }

        .animate-text-shimmer {
          animation: shimmer 3s linear infinite;
          background-size: 200% auto;
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(251, 146, 60, 0.5) rgba(251, 146, 60, 0.1);
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(251, 146, 60, 0.1);
          border-radius: 20px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(251, 146, 60, 0.5);
          border-radius: 20px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(251, 146, 60, 0.7);
        }
      `}</style>
    </header>
  );
}
