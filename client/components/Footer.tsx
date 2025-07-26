"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add animation when component mounts
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <footer id="lien-he" className="relative overflow-hidden">
      {/* Decorative wave SVG */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12"
          style={{ fill: "#2C3E50" }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="bg-[#2C3E50] text-white pt-16 pb-8">
        <div
          className={`container mx-auto px-6 transition-all duration-1000 ease-out transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Footer Top Section */}
          <div className="grid md:grid-cols-12 gap-8 mb-12">
            {/* Column 1: Logo & Info */}
            <div className="md:col-span-4">
              <div className="flex flex-col items-center md:items-start mb-6">
                <div className="bg-white p-3 rounded-lg shadow-xl mb-3 transform hover:rotate-3 transition-transform">
                  <Image
                    src="/images/logo/logo.jpg"
                    alt="Logo 33 Ngon"
                    width={80}
                    height={80}
                    className="rounded-md"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/80x80/FFFFFF/27AE60?text=33";
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold text-center md:text-left">
                  Đại Lý <span className="text-[#27AE60]">33 Ngon</span>
                </h3>
              </div>

              <p className="mb-4 text-white/80 text-center md:text-left">
                Chuyên cung cấp thực phẩm chất lượng cao với giá cả cạnh tranh.
                Giao hàng tận nơi nhanh chóng trong vòng 24 giờ.
              </p>

              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <div className="text-white/80 font-light">Theo dõi:</div>
                {/* Social Media Icons */}
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#27AE60] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#27AE60] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#27AE60] transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>

              <div className="text-sm text-white/70 text-center md:text-left">
                <p className="font-bold mb-1 text-white">Giờ Phục Vụ:</p>
                <p>06:00 - 21:00 | Tất cả các ngày trong tuần</p>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-2 flex flex-col items-center md:items-start">
              <h4 className="text-xl font-bold mb-5 relative after:content-[''] after:absolute after:h-1 after:w-12 after:bg-[#27AE60] after:-bottom-2 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0">
                Liên Kết
              </h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <Link
                    href="#gioi-thieu"
                    className="hover:text-[#27AE60] transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Giới Thiệu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#san-pham"
                    className="hover:text-[#27AE60] transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Sản Phẩm
                  </Link>
                </li>
                <li>
                  <Link
                    href="#bang-gia"
                    className="hover:text-[#27AE60] transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Bảng Giá
                  </Link>
                </li>
                <li>
                  <Link
                    href="#chung-nhan"
                    className="hover:text-[#27AE60] transition-colors flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Chứng Nhận
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start">
              <h4 className="text-xl font-bold mb-5 relative after:content-[''] after:absolute after:h-1 after:w-12 after:bg-[#27AE60] after:-bottom-2 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0">
                Liên Hệ
              </h4>
              <ul className="space-y-4">
                <li className="flex items-center md:items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#27AE60]">Địa chỉ:</p>
                    <p className="text-white/80">
                      66 Huỳnh Ngọc Huệ, Thanh Khê, Đà Nẵng
                    </p>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#27AE60]">Điện thoại:</p>
                    <a
                      href="tel:0935330134"
                      className="text-white hover:text-[#27AE60] transition-colors"
                    >
                      0935.330.134
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 4: Call to action */}
            <div className="md:col-span-3 flex flex-col items-center md:items-start">
              <h4 className="text-xl font-bold mb-5 relative after:content-[''] after:absolute after:h-1 after:w-12 after:bg-[#27AE60] after:-bottom-2 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0">
                Đặt Hàng Ngay
              </h4>
              <p className="mb-4 text-white/80 text-center md:text-left">
                Hãy liên hệ với chúng tôi để được tư vấn và đặt hàng với nhiều
                ưu đãi hấp dẫn.
              </p>
              <a
                href="tel:0935330134"
                className="relative overflow-hidden group inline-flex items-center bg-[#27AE60] text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-transform shadow-lg"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 animate-pulse"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                GỌI NGAY: 0935.330.134
              </a>
            </div>
          </div>

          {/* Footer Bottom / Copyright */}
          <div className="pt-8 mt-8 border-t border-[#405D7D] text-center">
            <div className="grid md:grid-cols-2 gap-4 items-center">
              <p className="text-sm text-white/60 md:text-left">
                &copy; {currentYear}{" "}
                <span className="font-medium text-white/80">
                  Đại Lý Thực Phẩm 33 Ngon
                </span>
                .
                <br className="md:hidden" /> All rights reserved.
              </p>

              {/* Payment Methods */}
              <div className="flex justify-center md:justify-end space-x-3">
                <span className="text-sm text-white/60">Thanh toán:</span>
                <span className="w-8 h-5 bg-white rounded flex items-center justify-center text-[10px] font-bold text-blue-800">
                  VISA
                </span>
                <span className="w-8 h-5 bg-white rounded flex items-center justify-center text-[10px] font-bold text-[#27AE60]">
                  CASH
                </span>
                <span className="w-8 h-5 bg-white rounded flex items-center justify-center text-[10px] font-bold text-blue-600">
                  BANK
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="h-12 bg-[#1E2B3A]"></div>
    </footer>
  );
}
