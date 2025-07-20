"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="BabyMart Logo"
            width={48}
            height={48}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-800">BabyMart</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link
            href="#about"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            Về Chúng Tôi
          </Link>
          <Link
            href="#products"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            Sản Phẩm
          </Link>
          <Link
            href="#quality"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            Cam Kết Chất Lượng
          </Link>
          <Link
            href="#partners"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            Đối Tác
          </Link>
          <Link
            href="#contact"
            className="text-gray-600 hover:text-orange-600 transition"
          >
            Liên Hệ
          </Link>
        </nav>

        <Link href="tel:0123456789" className="hidden md:block">
          <Button
            variant="default"
            className="bg-orange-500 hover:bg-orange-600"
          >
            Gọi Tư Vấn Ngay
          </Button>
        </Link>

        <button onClick={toggleMobileMenu} className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden px-6 pt-2 pb-4 ${mobileMenuOpen ? "" : "hidden"}`}
      >
        <Link
          href="#about"
          className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
          onClick={closeMobileMenu}
        >
          Về Chúng Tôi
        </Link>
        <Link
          href="#products"
          className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
          onClick={closeMobileMenu}
        >
          Sản Phẩm
        </Link>
        <Link
          href="#quality"
          className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
          onClick={closeMobileMenu}
        >
          Cam Kết Chất Lượng
        </Link>
        <Link
          href="#partners"
          className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
          onClick={closeMobileMenu}
        >
          Đối Tác
        </Link>
        <Link
          href="#contact"
          className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
          onClick={closeMobileMenu}
        >
          Liên Hệ
        </Link>
        <Link
          href="tel:0123456789"
          className="block mt-4 w-full text-center bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition"
          onClick={closeMobileMenu}
        >
          Gọi Tư Vấn
        </Link>
      </div>
    </header>
  );
}
