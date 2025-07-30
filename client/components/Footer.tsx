"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import BalancedLayout from "./BalancedLayout";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    // Add animation when component mounts
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Footer links organized in a more structured way
  const footerLinks = [
    {
      name: "Giới thiệu",
      href: "#gioi-thieu",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 text-[#27AE60]"
        >
          <path
            d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Sản phẩm",
      href: "#san-pham",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 text-[#27AE60]"
        >
          <path
            d="M16 8H8M16 8C19.3137 8 22 10.6863 22 14V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V14C2 10.6863 4.68629 8 8 8M16 8V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Phương châm",
      href: "#phuongcham",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 text-[#27AE60]"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Hệ thống kho lạnh",
      href: "#hethongkholanh",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 text-[#27AE60]"
        >
          <path
            d="M4 13H20M4 13V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13M4 13L8 7M20 13L16 7M16 7H8M16 7V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Nguồn gốc nguyên liệu",
      href: "#thucphamdauvao",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 text-[#27AE60]"
        >
          <path
            d="M11 3.05493C6.50005 3.55237 3 7.36745 3 12C3 16.9706 7.02944 21 12 21C16.6326 21 20.4476 17.5 20.9451 13H11V3.05493Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.4878 9H15V3.5123C17.5572 4.41613 19.5839 6.44285 20.4878 9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Khuyến mại",
      href: "#khuyen-mai",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-2 text-[#27AE60]"
        >
          <path
            d="M9.5 14.5L14.5 9.5M9.5 9.5H9.51M14.5 14.5H14.51M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

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
      <div className="bg-[#2C3E50] text-white pt-12 pb-8">
        <BalancedLayout>
          <div
            className={`transition-all duration-1000 ease-out transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* Footer Top Section - Mobile First Approach */}
            <div className="grid md:grid-cols-12 gap-6 mb-8">
              {/* Essential Info - Always visible */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start px-4">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="!bg-white p-2 rounded-lg shadow-md">
                    <Image
                      src="/images/logo/logo.jpg"
                      alt="Logo 33 Ngon"
                      width={50}
                      height={50}
                      className="rounded-md"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/50x50/FFFFFF/27AE60?text=33";
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold !text-[#27AE60]">
                      CÔNG TY CP THỰC PHẨM BÒ NÉ HẠNH
                    </h3>
                    <div className="mt-1 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 mr-1 text-[#27AE60]"
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
                        className="text-sm !text-white/90 hover:text-[#27AE60]"
                      >
                        0935 33 0134
                      </a>
                    </div>
                  </div>
                </div>

                {/* Call to action - Essential for mobile */}
                <a
                  href="tel:0935330134"
                  className="w-full mb-6 relative overflow-hidden group inline-flex items-center justify-center bg-[#27AE60] text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-transform shadow-lg"
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
                  GỌI NGAY
                </a>

                {/* Address - Essential */}
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                  <p className="!text-white/80 text-sm">
                    66 Huỳnh Ngọc Huệ, An Khê, Đà Nẵng
                  </p>
                </div>
              </div>

              {/* Collapsible Quick Links Section - Hidden by default on mobile */}
              <div className="md:col-span-4 px-4">
                <button
                  onClick={() => toggleSection("links")}
                  className="w-full flex justify-between items-center py-2 mb-2 border-b border-white/20 md:border-0"
                >
                  <h4 className="!text-white text-lg font-bold md:after:content-[''] md:after:absolute md:after:h-1 md:after:w-12 md:after:bg-[#27AE60] md:after:-bottom-2 md:after:left-0 md:relative">
                    Liên Kết
                  </h4>
                  <svg
                    className={`h-5 w-5 transition-transform md:hidden ${
                      expandedSections["links"] ? "rotate-180" : ""
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
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSections["links"] ? "max-h-96 mt-3" : "max-h-0"
                  } md:max-h-none md:mt-8`}
                >
                  <ul className="space-y-1.5 !text-white/80 w-full">
                    {footerLinks.map((link, index) => (
                      <li
                        key={index}
                        className="transition-colors hover:bg-white/5 rounded-md"
                      >
                        <Link
                          href={link.href}
                          className="relative py-2 px-2 hover:text-[#27AE60] transition-colors flex items-center group w-full"
                          onClick={() => setExpandedSections({})}
                        >
                          <div className="text-[#27AE60] h-3.5 w-3.5 mr-1.5 flex-shrink-0">
                            {link.icon}
                          </div>
                          <span className="text-sm">{link.name}</span>
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#27AE60] group-hover:w-full transition-all duration-300"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Collapsible Contact & Social Section */}
              <div className="md:col-span-4 px-4">
                <button
                  onClick={() => toggleSection("contact")}
                  className="w-full flex justify-between items-center py-2 mb-2 border-b border-white/20 md:border-0"
                >
                  <h4 className="!text-white text-lg font-bold md:after:content-[''] md:after:absolute md:after:h-1 md:after:w-12 md:after:bg-[#27AE60] md:after:-bottom-2 md:after:left-0 md:relative">
                    Thông Tin
                  </h4>
                  <svg
                    className={`h-5 w-5 transition-transform md:hidden ${
                      expandedSections["contact"] ? "rotate-180" : ""
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
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedSections["contact"] ? "max-h-96 mt-3" : "max-h-0"
                  } md:max-h-none md:mt-8`}
                >
                  {/* Service Hours */}
                  <div className="mb-4 text-sm !text-white/70">
                    <p className="font-bold !text-white">Thời gian phục vụ:</p>
                    <p className="!text-white">
                      06:00 - 17:00 | Tất cả các ngày trong tuần
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="mb-4">
                    <p className="!text-white/80 mb-2">Theo dõi:</p>
                    <div className="flex items-center space-x-3">
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
                          <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Section */}
            <div className="mb-8 border border-[#405D7D] rounded-lg overflow-hidden shadow-lg">
              <h4 className="px-4 py-3 bg-[#27AE60] text-white font-bold text-center">
                Vị Trí Của Chúng Tôi
              </h4>
              <div className="h-[300px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9073243519514!2d108.20758007487716!3d16.063717584541406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219a593e2c39b%3A0x4cadea7a2cd9922b!2zNjYgSHXhu7NuaCBOZ-G7jWMgSHXhu4csIEFuIEtow6osIFRoYW5oIEtow6osIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1707528901078!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Địa chỉ công ty"
                  className="absolute top-0 left-0"
                ></iframe>
              </div>
            </div>

            {/* Footer Bottom / Copyright - Simplified for mobile */}
            <div className="pt-6 mt-6 border-t border-[#405D7D] px-4">
              <div className="grid md:grid-cols-2 gap-4 items-center">
                <p className="text-xs text-white/60 text-center md:text-left">
                  &copy; {currentYear}{" "}
                  <span className="font-medium text-white/80">
                    Công ty CP THỰC PHẨM Bò Né Hạnh
                  </span>
                  .
                  <span className="md:hidden">
                    <br />
                  </span>
                  <span className="hidden md:inline"> </span>
                  All rights reserved.
                </p>

                {/* Payment Methods - Hidden on smallest screens */}
                <div className="hidden sm:flex justify-center md:justify-end space-x-3 mt-3 sm:mt-0">
                  <span className="text-xs text-white/60">Thanh toán:</span>
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
        </BalancedLayout>
      </div>

      {/* Bottom wave */}
      <div className="h-12 bg-[#1E2B3A]"></div>
    </footer>
  );
}
