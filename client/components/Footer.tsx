"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
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

  // Memoize toggle function to prevent recreation on each render
  const toggleSection = useCallback((section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

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
          className="h-4 w-4 mr-2 text-white"
          aria-hidden="true"
        >
          <path
            d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="white"
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
          className="h-4 w-4 mr-2 text-white"
          aria-hidden="true"
        >
          <path
            d="M16 8H8M16 8C19.3137 8 22 10.6863 22 14V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V14C2 10.6863 4.68629 8 8 8M16 8V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V8"
            stroke="white"
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
          className="h-4 w-4 mr-2 text-white"
          aria-hidden="true"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="white"
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
          className="h-4 w-4 mr-2 text-white"
          aria-hidden="true"
        >
          <path
            d="M4 13H20M4 13V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13M4 13L8 7M20 13L16 7M16 7H8M16 7V5C16 4.44772 15.5523 4 15 4H9C8.44772 4 8 4.44772 8 5V7"
            stroke="white"
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
          className="h-4 w-4 mr-2 text-white"
          aria-hidden="true"
        >
          <path
            d="M11 3.05493C6.50005 3.55237 3 7.36745 3 12C3 16.9706 7.02944 21 12 21C16.6326 21 20.4476 17.5 20.9451 13H11V3.05493Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.4878 9H15V3.5123C17.5572 4.41613 19.5839 6.44285 20.4878 9Z"
            stroke="white"
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
          className="h-4 w-4 mr-2 text-white"
          aria-hidden="true"
        >
          <path
            d="M9.5 14.5L14.5 9.5M9.5 9.5H9.51M14.5 14.5H14.51M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z"
            stroke="white"
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
          aria-hidden="true"
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
                      priority={true}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold !text-[#27AE60] !text-2xl">
                      CÔNG TY CP THỰC PHẨM BÒ NÉ HẠNH
                    </h3>
                    <div className="mt-1 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5 mr-1 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        aria-hidden="true"
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
                        className="!text-2xl !text-white/90 hover:text-[#27AE60]"
                      >
                        0935 33 0134
                      </a>
                    </div>
                  </div>
                </div>

                {/* Call to action - Essential for mobile */}
                <a
                  href="tel:0935330134"
                  className="w-full mb-6 relative overflow-hidden group inline-flex items-center justify-center bg-[#27AE60] !text-white font-bold py-3 px-6 rounded-full transform hover:scale-105 transition-transform shadow-lg"
                >
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 animate-pulse"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
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
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="!text-white/80 !text-2xl">
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
                  <h4 className="!text-white !text-2xl font-bold md:after:content-[''] md:after:absolute md:after:h-1 md:after:w-12 md:after:bg-[#27AE60] md:after:-bottom-2 md:after:left-0 md:relative">
                    Liên Kết
                  </h4>
                  <svg
                    className={`h-5 w-5 transition-transform md:hidden ${
                      expandedSections["links"] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
                          <div className="text-white h-3.5 w-3.5 mr-1.5 flex-shrink-0">
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
                  <h4 className="!text-white !text-2xl font-bold md:after:content-[''] md:after:absolute md:after:h-1 md:after:w-12 md:after:bg-[#27AE60] md:after:-bottom-2 md:after:left-0 md:relative">
                    Thông Tin
                  </h4>
                  <svg
                    className={`h-5 w-5 transition-transform md:hidden ${
                      expandedSections["contact"] ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
                    <p className="font-bold !text-white !text-2xl">Thời gian phục vụ:</p>
                    <p className="!text-white !text-2xl">
                      06:00 - 17:00 | Tất cả các ngày trong tuần
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Section - Lazy load */}
            <div className="mb-8 border border-[#405D7D] rounded-lg overflow-hidden shadow-lg">
              <h4 className="px-4 py-3 bg-[#27AE60] !text-white font-bold text-center !text-2xl">
                Vị trí của chúng tôi
              </h4>
              <div className="h-[300px] w-full relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.9073243519514!2d108.20758007487716!3d16.063717584541406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219a593e2c39b%3A0x4cadea7a2cd9922b!2zNjYgSHXhu7NuaCBOZ-G7jWMgSHXhu4csIEFuIEtow6osIFRoYW5oIEtow6gsIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1707528901078!5m2!1svi!2s"
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
