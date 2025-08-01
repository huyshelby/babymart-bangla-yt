"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback, memo } from "react";
import SmoothScrollLink from "./SmoothScrollLink";

// Tạo component DropdownMemoized để tối ưu render
const DropdownMemoized = memo(({ 
  items, 
  onClose 
}: { 
  items: { name: string; href: string }[]; 
  onClose: () => void 
}) => (
  <div className="absolute top-full left-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
    <div className="py-1">
      {items.map((item, index) => (
        <SmoothScrollLink
          key={index}
          href={item.href}
          onClick={onClose}
          className="block px-4 py-2 text-sm text-[#27AE60] hover:bg-gray-50 hover:text-[#27AE60] transition-colors duration-200"
        >
          {item.name}
        </SmoothScrollLink>
      ))}
    </div>
  </div>
));

// Add display name to fix the linter error
DropdownMemoized.displayName = 'DropdownMemoized';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<{ [key: string]: boolean }>(
    {}
  );
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sử dụng useCallback để tối ưu hàm xử lý scroll
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Sử dụng useCallback cho hàm đóng dropdown khi click ra ngoài
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen({});
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // Tối ưu hàm toggle menu với useCallback
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  // Đồng bộ trạng thái menu mobile với overflow body
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    // Cleanup khi component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Tối ưu hàm đóng menu
  const closeAllMenus = useCallback(() => {
    setMobileMenuOpen(false);
    setDropdownOpen({});
  }, []);

  // Tối ưu hàm hover dropdown
  const handleMouseEnter = useCallback((key: string) => {
    setDropdownOpen(prev => ({ ...prev, [key]: true }));
  }, []);

  const handleMouseLeave = useCallback((key: string) => {
    setDropdownOpen(prev => ({ ...prev, [key]: false }));
  }, []);

  const aboutSubmenu = [
    { name: "Đến với chúng tôi", href: "#gioithieu" },
    { name: "Phương châm kinh doanh", href: "#phuongcham" },
    { name: "Hệ thống kho lạnh", href: "#hethongkholanh" },
    { name: "Nguồn nguyên liệu", href: "#thucphamdauvao" },
  ];

  return (
    <header
      className={`bg-white ${
        scrolled ? "shadow-lg" : "shadow-md"
      } sticky top-0 z-50 transition-shadow duration-300 w-full flex justify-center`}
    >
      <div className="max-w-[1300px] w-full py-2">
        {/* Top Row: Logo and Contact Info */}
        <div className="flex justify-between items-center mb-2 px-4 sm:px-6">
          {/* Logo and site name */}
          <div className="flex items-center group">
            <div className="relative overflow-hidden rounded-full transition-transform duration-300 transform group-hover:scale-105 flex-shrink-0">
              <Image
                src="/images/logo/logo.jpg"
                alt="Logo CTY THỰC PHẨM BÒ NÉ HẠNH"
                width={60}
                height={60}
                className="h-10 w-10 mr-2 rounded-full object-cover"
                priority // Ưu tiên tải ảnh logo
                quality={85} // Giảm chất lượng để tối ưu
                onError={(e) => {
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
              className="text-[#27AE60] font-bold text-[20px] xs:text-sm sm:text-base md:text-lg relative group-hover:text-[#219653] transition-colors duration-300"
            >
              CTY THỰC PHẨM BÒ NÉ HẠNH
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

          {/* Mobile Menu Button Only */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors duration-300"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
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
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <div
          className="hidden md:block border-t border-gray-200 pt-3"
          ref={dropdownRef}
        >
          <nav
            className="flex justify-center items-center space-x-1 lg:space-x-3 xl:space-x-6 flex-wrap"
            role="navigation"
            aria-label="Main Navigation"
          >
            {/* Trang chủ */}
            <Link
              href="/"
              className="nav-link font-medium relative py-2 px-2 text-gray-700 hover:text-[#27AE60] transition-colors duration-300 group flex items-center"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
              >
                <path
                  d="M3 9.5L12 4L21 9.5"
                  stroke="#27AE60"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
                  stroke="#27AE60"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#27AE60] lg:text-base">Trang chủ</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Giới Thiệu with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={() => handleMouseLeave("about")}
            >
              <button
                className="nav-link font-medium relative py-2 px-2 text-gray-700 hover:text-[#27AE60] transition-colors duration-300 group flex items-center"
                aria-expanded={dropdownOpen["about"]}
                aria-controls="about-dropdown"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
                >
                  <path
                    d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="#27AE60"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#27AE60] lg:text-base">Giới Thiệu</span>
                <svg
                  className={`ml-1 h-3 w-3 transition-transform duration-200 ${
                    dropdownOpen["about"] ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
              </button>

              {dropdownOpen["about"] && (
                <DropdownMemoized 
                  items={aboutSubmenu} 
                  onClose={() => setDropdownOpen({})} 
                />
              )}
            </div>

            {/* Sản Phẩm */}
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
                <path
                  d="M16 8H8M16 8C19.3137 8 22 10.6863 22 14V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V14C2 10.6863 4.68629 8 8 8M16 8V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V8"
                  stroke="#27AE60"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#27AE60] lg:text-base">Sản Phẩm</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </SmoothScrollLink>

            {/* Khuyến Mại */}
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
                <path
                  d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12Z"
                  stroke="#27AE60"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-[#27AE60] lg:text-base">Khuyến Mại</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
            </SmoothScrollLink>

            {/* Liên Hệ */}
            <SmoothScrollLink
              href="#lien-he"
              className="bg-[#27AE60] hover:bg-[#219653] !text-white px-3 lg:px-5 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-md flex items-center text-sm lg:text-base focus:ring-2 focus:ring-[#27AE60]/50 focus:outline-none"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 mr-1.5"
              >
                <path
                  d="M21 5.5L12 13.5L3 5.5M3 5.5H21V18.5H3V5.5Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
          onClick={closeAllMenus}
        >
          <div
            className="fixed right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-out overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: "slideIn 0.3s ease-out forwards" }}
            id="mobile-menu"
            aria-hidden={!mobileMenuOpen}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="CTY THỰC PHẨM BÒ NÉ HẠNH Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                  quality={85}
                />
                <span className="font-bold !text-2xl text-[#27AE60]">
                  CTY THỰC PHẨM BÒ NÉ HẠNH
                </span>
              </div>
              <button
                onClick={closeAllMenus}
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
                <p className="text-sm !text-[#27AE60]">
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
                {/* Trang chủ - Mobile */}
                <Link
                  href="/"
                  className="flex items-center px-4 py-2.5 text-[#27AE60] hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <path
                      d="M3 9.5L12 4L21 9.5"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Trang chủ
                </Link>

                {/* Đến với chúng tôi - Mobile */}
                <SmoothScrollLink
                  href="#gioi-thieu"
                  className="flex items-center px-4 py-2.5 text-[#27AE60] hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <path
                      d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Đến với chúng tôi
                </SmoothScrollLink>

                {/* Phương châm kinh doanh - Mobile */}
                <SmoothScrollLink
                  href="#phuongcham"
                  className="flex items-center px-4 py-2.5 text-[#27AE60] hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <path
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Phương châm kinh doanh
                </SmoothScrollLink>

                {/* Hệ thống kho lạnh - Mobile */}
                <SmoothScrollLink
                  href="#hethongkholanh"
                  className="flex items-center px-4 py-2.5 text-[#27AE60] hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <path
                      d="M20 7h-3m3 0v11a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0V5a2 2 0 00-2-2h-3M4 7h3m-3 0V5a2 2 0 012-2h3m0 0v3m0-3h4m0 0v3"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  Hệ thống kho lạnh
                </SmoothScrollLink>

                {/* Nguồn nguyên liệu - Mobile */}
                <SmoothScrollLink
                  href="#thucphamdauvao"
                  className="flex items-center px-4 py-2.5 text-[#27AE60] hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <path
                      d="M3 6l9 4.5L21 6m-18 0l9-4.5L21 6m-18 0v12l9 4.5m9-16.5v12l-9 4.5m0-12V18"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Nguồn nguyên liệu
                </SmoothScrollLink>

                {/* Sản Phẩm - Mobile */}
                <SmoothScrollLink
                  href="#products"
                  className="flex items-center px-4 py-2.5 text-[#27AE60] hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <path
                      d="M16 8H8M16 8C19.3137 8 22 10.6863 22 14V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V14C2 10.6863 4.68629 8 8 8M16 8V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V8"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Sản Phẩm
                </SmoothScrollLink>

                {/* Khuyến Mại - Mobile */}
                <SmoothScrollLink
                  href="#promotions"
                  className="flex items-center px-4 py-2.5 text-[#27AE60] hover:bg-gray-50 hover:text-[#27AE60] border-l-4 border-transparent hover:border-[#27AE60] transition-all duration-300"
                  onClick={closeAllMenus}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2 text-[#27AE60]"
                  >
                    <path
                      d="M12 7V20M12 7H8.46429C7.94332 7 7.4437 6.78929 7.07533 6.41421C6.70695 6.03914 6.5 5.53043 6.5 5C6.5 4.46957 6.70695 3.96086 7.07533 3.58579C7.4437 3.21071 7.94332 3 8.46429 3C11.2143 3 12 7 12 7ZM12 7H15.5357C16.0567 7 16.5563 6.78929 16.9247 6.41421C17.293 6.03914 17.5 5.53043 17.5 5C17.5 4.46957 17.293 3.96086 16.9247 3.58579C16.5563 3.21071 16.0567 3 15.5357 3C12.7857 3 12 7 12 7ZM5 12H19V17.8C19 18.9201 19 19.4802 18.782 19.908C18.5903 20.2843 18.2843 20.5903 17.908 20.782C17.4802 21 16.9201 21 15.8 21H8.2C7.07989 21 6.51984 21 6.09202 20.782C5.71569 20.5903 5.40973 20.2843 5.21799 19.908C5 19.4802 5 18.9201 5 17.8V12Z"
                      stroke="#27AE60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Khuyến Mại
                </SmoothScrollLink>

                {/* Liên Hệ - Mobile */}
                <SmoothScrollLink
                  href="#lien-he"
                  className="flex items-center justify-center px-4 py-3 mx-4 my-3 rounded-md text-center bg-[#27AE60] text-white shadow-sm hover:bg-[#219653] transition-colors duration-300"
                  onClick={closeAllMenus}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1.5"
                  >
                    <path
                      d="M21 5.5L12 13.5L3 5.5M3 5.5H21V18.5H3V5.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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