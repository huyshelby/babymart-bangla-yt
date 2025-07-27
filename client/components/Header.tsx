"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import SmoothScrollLink from "./SmoothScrollLink";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScrolled = window.scrollY > 50;
      setScrolled(newScrolled);
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
      className={`bg-white shadow-md sticky top-0 z-50 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        {/* Top Row: Logo and Contact Info */}
        <div className="flex flex-wrap justify-between items-center mb-3">
          {/* Logo and site name */}
          <div className="flex items-center group">
            <div className="relative overflow-hidden rounded-full transition-transform duration-300 transform group-hover:scale-105">
              <Image
                src="/images/logo/logo.jpg"
                alt="Logo 33 Ngon"
                width={48}
                height={48}
                className="h-12 w-12 mr-3 rounded-full object-cover"
                onError={(e) => {
                  // Fallback for image error
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/48x48/27AE60/FFFFFF?text=33";
                }}
              />
              <div className="absolute inset-0 bg-[#27AE60]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
            <Link
              href="/"
              className="text-[#27AE60] font-bold text-xl relative group-hover:text-[#219653] transition-colors duration-300"
            >
              33 NGON
              <span className="block h-0.5 w-0 bg-[#27AE60] transition-all duration-500 group-hover:w-full absolute bottom-0"></span>
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex flex-row items-center space-x-4">
            <div className="flex items-center text-sm text-[#212529] hover:text-[#27AE60] transition-colors duration-300 bg-gray-50/80 px-3 py-1.5 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#27AE60] mr-2 flex-shrink-0"
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
              <span className="font-medium">
                66 HUỲNH NGỌC HUỆ, PHƯỜNG AN KHÊ, THANH PHỐ ĐÀ NẴNG
              </span>
            </div>
            <div className="flex items-center text-sm hover:text-[#27AE60] transition-colors duration-300">
              <div className="flex items-center bg-gray-50/80 px-3 py-1.5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-[#27AE60] mr-2 flex-shrink-0"
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
                <a
                  href="tel:0935330134"
                  className="font-medium text-[#27AE60] hover:text-[#219653] transition-colors duration-300 relative group whitespace-nowrap"
                >
                  0935 33 0134
                  <span className="block h-0.5 w-0 bg-[#27AE60] transition-all duration-300 group-hover:w-full absolute -bottom-0.5"></span>
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Contact Button & Menu Button */}
          <div className="md:hidden flex items-center">
            <a
              href="tel:0935330134"
              className="mr-4 bg-[#27AE60] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 hover:shadow-md transition-all duration-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
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
              Gọi Ngay
            </a>
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-300"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
        </div>

        {/* Bottom Row: Navigation */}
        <div className="hidden md:block border-t border-gray-200 pt-3">
          <nav className="flex justify-center items-center space-x-6">
            <SmoothScrollLink
              href="#gioi-thieu"
              className="nav-link font-medium"
            >
              Giới Thiệu
            </SmoothScrollLink>
            <SmoothScrollLink href="#san-pham" className="nav-link font-medium">
              Sản Phẩm
            </SmoothScrollLink>
            <SmoothScrollLink href="#bang-gia" className="nav-link font-medium">
              Bảng Giá
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#chung-nhan"
              className="nav-link font-medium"
            >
              Chứng Nhận
            </SmoothScrollLink>
            <SmoothScrollLink
              href="#lien-he"
              className="bg-[#27AE60] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
            >
              Liên Hệ Ngay
            </SmoothScrollLink>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden transition-opacity duration-300"
          onClick={closeMobileMenu}
        >
          <div
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-out overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideIn 0.3s ease-out forwards" }}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="33 NGON Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-bold text-lg text-[#27AE60]">
                  33 NGON
                </span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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

            <div className="p-6 border-b">
              <div className="text-[#212529] mb-3">
                <p className="font-bold text-sm mb-1">Địa chỉ:</p>
                <p className="text-sm">
                  66 HUỲNH NGỌC HUỆ, PHƯỜNG AN KHÊ, THANH PHỐ ĐÀ NẴNG
                </p>
              </div>
              <div className="text-[#212529]">
                <p className="font-bold text-sm mb-1">Điện thoại:</p>
                <a
                  href="tel:0935330134"
                  className="text-[#27AE60] text-sm font-medium"
                >
                  0935 33 0134
                </a>
              </div>
            </div>

            <div className="py-4">
              <nav className="space-y-1">
                <SmoothScrollLink
                  href="#gioi-thieu"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#27AE60]"
                  onClick={closeMobileMenu}
                >
                  Giới Thiệu
                </SmoothScrollLink>
                <SmoothScrollLink
                  href="#san-pham"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#27AE60]"
                  onClick={closeMobileMenu}
                >
                  Sản Phẩm
                </SmoothScrollLink>
                <SmoothScrollLink
                  href="#bang-gia"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#27AE60]"
                  onClick={closeMobileMenu}
                >
                  Bảng Giá
                </SmoothScrollLink>
                <SmoothScrollLink
                  href="#chung-nhan"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#27AE60]"
                  onClick={closeMobileMenu}
                >
                  Chứng Nhận
                </SmoothScrollLink>
                <SmoothScrollLink
                  href="#lien-he"
                  className="block px-4 py-2 bg-[#27AE60] text-white font-medium mx-4 my-2 rounded-md text-center"
                  onClick={closeMobileMenu}
                >
                  Liên Hệ Ngay
                </SmoothScrollLink>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animation */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
