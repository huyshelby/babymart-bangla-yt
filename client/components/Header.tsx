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
    <header className={`bg-white shadow-md sticky top-0 z-50`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo and site name */}
        <div className="flex items-center">
          <Image
            src="/images/logo/logo.jpg"
            alt="Logo 33 Ngon"
            width={48}
            height={48}
            className="h-12 w-12 mr-3 rounded-full"
            onError={(e) => {
              // Fallback for image error
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = "https://placehold.co/48x48/27AE60/FFFFFF?text=33";
            }}
          />
          <Link href="/" className="text-[#27AE60] font-bold text-xl">
            33 NGON
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <SmoothScrollLink href="#gioi-thieu" className="nav-link font-medium">
            Giới Thiệu
          </SmoothScrollLink>
          <SmoothScrollLink href="#san-pham" className="nav-link font-medium">
            Sản Phẩm
          </SmoothScrollLink>
          <SmoothScrollLink href="#bang-gia" className="nav-link font-medium">
            Bảng Giá
          </SmoothScrollLink>
          <SmoothScrollLink href="#chung-nhan" className="nav-link font-medium">
            Chứng Nhận
          </SmoothScrollLink>
          <SmoothScrollLink
            href="#lien-he"
            className="bg-[#27AE60] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Liên Hệ Ngay
          </SmoothScrollLink>
        </nav>

        {/* Mobile Contact Button */}
        <div className="md:hidden">
          <SmoothScrollLink
            href="#lien-he"
            className="bg-[#27AE60] text-white px-4 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            Liên Hệ
          </SmoothScrollLink>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md ml-4"
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
