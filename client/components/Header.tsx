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
      className={`bg-white ${
        scrolled ? "shadow-lg" : "shadow-md"
      } sticky top-0 z-50 transition-shadow duration-300`}
    >
      <div className="container mx-auto px-4 py-2">
        {/* Top Row: Logo and Contact Info */}
        <div className="flex flex-wrap justify-between items-center mb-2">
          {/* Logo and site name */}
          <div className="flex items-center group">
            <div className="relative overflow-hidden rounded-full transition-transform duration-300 transform group-hover:scale-105">
              <Image
                src="/images/logo/logo.jpg"
                alt="Logo 33 Ngon"
                width={36}
                height={36}
                className="h-10 w-10 mr-2 rounded-full object-cover"
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
              className="text-[#27AE60] font-bold text-lg relative group-hover:text-[#219653] transition-colors duration-300"
            >
              33 NGON
              <span className="block h-0.5 w-0 bg-[#27AE60] transition-all duration-500 group-hover:w-full absolute bottom-0"></span>
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex flex-row items-center space-x-3">
            <div className="flex items-center text-xs text-[#212529] hover:text-[#27AE60] transition-colors duration-300 bg-gray-50/80 px-2 py-1 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-[#27AE60] mr-1 flex-shrink-0"
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
            <div className="flex items-center text-xs hover:text-[#27AE60] transition-colors duration-300">
              <div className="flex items-center bg-gray-50/80 px-2 py-1 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-[#27AE60] mr-1 flex-shrink-0"
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
              className="mr-3 bg-[#27AE60] text-white px-3 py-1.5 rounded-full font-medium text-sm hover:opacity-90 hover:shadow-md transition-all duration-300 flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
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
              className="p-1.5 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-300"
              aria-label="Menu"
            >
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <div className="hidden md:block border-t border-gray-200 pt-3">
          <nav
            className="flex justify-center items-center space-x-1 lg:space-x-3 xl:space-x-6 flex-wrap"
            role="navigation"
            aria-label="Main Navigation"
          >
            <SmoothScrollLink
              href="#gioi-thieu"
              className="nav-link font-medium relative py-2 px-2 text-gray-700 hover:text-[#27AE60] transition-colors duration-300 group flex items-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#27AE60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="text-sm lg:text-base">Giới Thiệu</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </SmoothScrollLink>

            <SmoothScrollLink
              href="#san-pham"
              className="nav-link font-medium relative py-2 px-2 text-gray-700 hover:text-[#27AE60] transition-colors duration-300 group flex items-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16 8H8M16 8C19.3137 8 22 10.6863 22 14V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V14C2 10.6863 4.68629 8 8 8M16 8V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V8"
                    stroke="#27AE60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="text-sm lg:text-base">Sản Phẩm</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </SmoothScrollLink>

            <SmoothScrollLink
              href="#phuong-cham"
              className="nav-link font-medium relative py-2 px-2 text-gray-700 hover:text-[#27AE60] transition-colors duration-300 group flex items-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#27AE60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="text-sm lg:text-base">
                Phương Châm Kinh Doanh
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </SmoothScrollLink>

            <SmoothScrollLink
              href="#he-thong-kho-lanh"
              className="nav-link font-medium relative py-2 px-2 text-gray-700 hover:text-[#27AE60] transition-colors duration-300 group flex items-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M20 14V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V14M20 14H4M20 14V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14M16 5V3M8 5V3M12 9.01L12.01 8.99M8 9.01L8.01 8.99M16 9.01L16.01 8.99M12 12.01L12.01 11.99M8 12.01L8.01 11.99M16 12.01L16.01 11.99M12 15.01L12.01 14.99M8 15.01L8.01 14.99M16 15.01L16.01 14.99"
                    stroke="#27AE60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="text-sm lg:text-base">Hệ thống kho lạnh</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </SmoothScrollLink>

            <SmoothScrollLink
              href="#thuc-pham-dau-vao"
              className="nav-link font-medium relative py-2 px-2 text-gray-700 hover:text-[#27AE60] transition-colors duration-300 group flex items-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M15.5 7L14.5 9M12 5L11 7M8.5 3L7.5 5M3 9L5.5 13M14.5 13L16 18M18 12L21 16M3.17961 6.78943C2.37196 8.52339 2.51745 10.5883 3.55685 12.1896C4.59625 13.7908 6.41093 14.7285 8.33333 14.7285C10.2557 14.7285 12.0704 13.7908 13.1098 12.1896C14.1492 10.5883 14.2947 8.52339 13.487 6.78943C12.6794 5.05548 11.0632 3.91764 9.16986 3.74131C7.27654 3.56499 5.43007 4.3773 4.27534 5.87809C3.12061 7.37888 2.84182 9.37315 3.53336 11.1111"
                    stroke="#27AE60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="text-sm lg:text-base">Thực Phẩm Đầu Vào</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </SmoothScrollLink>

            <SmoothScrollLink
              href="#khuyen-mai"
              className="nav-link font-medium relative py-2 px-2 text-gray-700 hover:text-[#27AE60] transition-colors duration-300 group flex items-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z"
                    stroke="#27AE60"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <span className="text-sm lg:text-base">Khuyến Mại</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </SmoothScrollLink>

            <SmoothScrollLink
              href="#lien-he"
              className="bg-[#27AE60] hover:bg-[#219653] text-white px-3 lg:px-5 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md flex items-center text-sm lg:text-base focus:ring-2 focus:ring-[#27AE60]/50 focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1.5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21 5.5L12 13.5L3 5.5M3 5.5H21V18.5H3V5.5Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              Liên Hệ
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
                aria-label="Đóng menu"
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
              <nav
                className="space-y-1"
                role="navigation"
                aria-label="Mobile Navigation"
              >
                <SmoothScrollLink
                  href="#gioi-thieu"
                  className="flex items-center px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#27AE60"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Giới Thiệu
                </SmoothScrollLink>

                <SmoothScrollLink
                  href="#san-pham"
                  className="flex items-center px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M16 8H8M16 8C19.3137 8 22 10.6863 22 14V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V14C2 10.6863 4.68629 8 8 8M16 8V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V8"
                        stroke="#27AE60"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Sản Phẩm
                </SmoothScrollLink>

                <SmoothScrollLink
                  href="#phuong-cham"
                  className="flex items-center px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke="#27AE60"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Phương Châm Kinh Doanh
                </SmoothScrollLink>

                <SmoothScrollLink
                  href="#he-thong-kho-lanh"
                  className="flex items-center px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M20 14V7C20 5.89543 19.1046 5 18 5H6C4.89543 5 4 5.89543 4 7V14M20 14H4M20 14V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14M16 5V3M8 5V3M12 9.01L12.01 8.99M8 9.01L8.01 8.99M16 9.01L16.01 8.99M12 12.01L12.01 11.99M8 12.01L8.01 11.99M16 12.01L16.01 11.99M12 15.01L12.01 14.99M8 15.01L8.01 14.99M16 15.01L16.01 14.99"
                        stroke="#27AE60"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Hệ thống kho lạnh
                </SmoothScrollLink>

                <SmoothScrollLink
                  href="#thuc-pham-dau-vao"
                  className="flex items-center px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M15.5 7L14.5 9M12 5L11 7M8.5 3L7.5 5M3 9L5.5 13M14.5 13L16 18M18 12L21 16M3.17961 6.78943C2.37196 8.52339 2.51745 10.5883 3.55685 12.1896C4.59625 13.7908 6.41093 14.7285 8.33333 14.7285C10.2557 14.7285 12.0704 13.7908 13.1098 12.1896C14.1492 10.5883 14.2947 8.52339 13.487 6.78943C12.6794 5.05548 11.0632 3.91764 9.16986 3.74131C7.27654 3.56499 5.43007 4.3773 4.27534 5.87809C3.12061 7.37888 2.84182 9.37315 3.53336 11.1111"
                        stroke="#27AE60"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Thực Phẩm Đầu Vào
                </SmoothScrollLink>

                <SmoothScrollLink
                  href="#khuyen-mai"
                  className="flex items-center px-4 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12ZM4.6 12H19.4C19.9601 12 20.2401 12 20.454 11.891C20.6422 11.7951 20.7951 11.6422 20.891 11.454C21 11.2401 21 10.9601 21 10.4V8.6C21 8.03995 21 7.75992 20.891 7.54601C20.7951 7.35785 20.6422 7.20487 20.454 7.10899C20.2401 7 19.9601 7 19.4 7H4.6C4.03995 7 3.75992 7 3.54601 7.10899C3.35785 7.20487 3.20487 7.35785 3.10899 7.54601C3 7.75992 3 8.03995 3 8.6V10.4C3 10.9601 3 11.2401 3.10899 11.454C3.20487 11.6422 3.35785 11.7951 3.54601 11.891C3.75992 12 4.03995 12 4.6 12Z"
                        stroke="#27AE60"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Khuyến Mại
                </SmoothScrollLink>

                <SmoothScrollLink
                  href="#lien-he"
                  className="flex items-center justify-center px-4 py-3 mx-4 my-3 rounded-md text-center bg-[#27AE60] text-white shadow-sm hover:bg-[#219653] transition-colors duration-300"
                  onClick={closeMobileMenu}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1.5"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M21 5.5L12 13.5L3 5.5M3 5.5H21V18.5H3V5.5Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  Liên Hệ
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

        .nav-link:focus-visible {
          outline: 2px solid #27ae60;
          outline-offset: 2px;
        }
      `}</style>
    </header>
  );
}
