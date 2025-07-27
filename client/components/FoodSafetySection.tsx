"use client";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";

export const FoodSafetySection = () => {
  return (
    <section id="thuc-pham-dau-vao" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-[#27AE60]">
          THỰC PHẨM ĐẦU VÀO SẠCH – AN TOÀN VSTP
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left column - Image */}
            <div className="overflow-hidden rounded-lg shadow-xl">
              <div className="relative group aspect-[4/3]">
                <ImageWithFallback
                  src="/images/thucphamdauvao/anh1.jpg"
                  fallbackSrc="https://placehold.co/800x600/27AE60/FFFFFF?text=Thực+Phẩm+Đầu+Vào+Sạch"
                  alt="Thực phẩm đầu vào sạch"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <p className="text-white font-medium text-center">
                    Cam kết nguồn thực phẩm sạch
                  </p>
                </div>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="space-y-4">
              <p className="text-lg text-[#212529]">
                Chúng tôi cam kết sử dụng nguồn thực phẩm đầu vào sạch, đảm bảo
                an toàn vệ sinh thực phẩm theo các tiêu chuẩn nghiêm ngặt.
              </p>
              <p className="text-lg text-[#212529]">
                Tất cả nguyên liệu được kiểm soát chặt chẽ từ khâu nhập hàng,
                với quy trình kiểm tra nghiêm ngặt và lựa chọn kỹ càng từ các
                nhà cung cấp uy tín.
              </p>
              <div className="pt-4">
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#27AE60] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#212529] font-medium">
                    Nguồn thịt bò tươi, chất lượng cao
                  </span>
                </div>
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#27AE60] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#212529] font-medium">
                    Gia vị tự nhiên, không chất bảo quản
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#27AE60] mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-[#212529] font-medium">
                    Đảm bảo tiêu chuẩn vệ sinh an toàn thực phẩm
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom image */}
          <div className="mt-10 overflow-hidden rounded-lg shadow-xl">
            <div className="relative group aspect-[21/9]">
              <ImageWithFallback
                src="/images/thucphamdauvao/anh2.jpg"
                fallbackSrc="https://placehold.co/1200x500/27AE60/FFFFFF?text=Quy+Trình+Kiểm+Soát+Chất+Lượng"
                alt="Quy trình kiểm soát chất lượng"
                fill
                sizes="100vw"
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                <p className="text-white font-medium text-xl text-center">
                  Quy trình kiểm soát chất lượng nghiêm ngặt đảm bảo thực phẩm
                  an toàn đến tay khách hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
