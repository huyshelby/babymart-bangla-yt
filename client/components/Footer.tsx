"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="lien-he" className="brand-bg-green text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <Image
                src="/images/logo/logo.jpg"
                alt="Logo 33 Ngon"
                width={40}
                height={40}
                className="h-10 w-10 mr-3 rounded-full"
                onError={(e) => {
                  // Fallback for image error
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/40x40/FFFFFF/166534?text=33";
                }}
              />
              <h3 className="text-2xl font-bold">Đại Lý 33 Ngon</h3>
            </div>
            <p className="mb-2">Giao hàng tận nơi trong vòng 24 giờ.</p>
            <p className="font-bold text-lg">
              Phục vụ từ 6h00 đến 21h00 hàng ngày
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4 uppercase">
              Thông tin liên hệ
            </h4>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              66 Huỳnh Ngọc Huệ, Thanh Khê, Đà Nẵng
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:0935330134" className="hover:underline">
                0935.330.134
              </a>
            </p>
          </div>

          {/* Column 3: Call to action */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-xl font-bold mb-4 uppercase">Đặt Hàng Ngay!</h4>
            <a
              href="tel:0935330134"
              className="brand-bg-red text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              GỌI 0935.330.134
            </a>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-6 text-center text-sm">
          <p>
            &copy; {currentYear} Đại Lý Thực Phẩm 33 Ngon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
