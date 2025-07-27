"use client";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";

export const PromotionsSection = () => {
  return (
    <section id="khuyen-mai" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-[#27AE60] leading-relaxed">
          NHIỀU CHƯƠNG TRÌNH KHUYẾN MẠI, QUÀ TẶNG PHONG PHÚ HẤP DẪN ĐẾN VỚI
          KHÁCH HÀNG
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-[#212529]">
              Chúng tôi thường xuyên tổ chức nhiều chương trình ưu đãi đặc biệt
              dành cho khách hàng thân thiết và đối tác
            </p>
          </div>

          {/* Promotions Content */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl transform transition-all hover:shadow-2xl aspect-[4/3] relative">
                <ImageWithFallback
                  src="/images/khuyenmai/anh1.jpg"
                  fallbackSrc="https://placehold.co/800x600/27AE60/FFFFFF?text=Khuyến+Mãi+Đặc+Biệt"
                  alt="Chương trình khuyến mãi"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Floating promo tag */}
              <div className="absolute -top-5 -right-5 bg-[#27AE60] text-white rounded-full w-24 h-24 flex items-center justify-center transform rotate-12 shadow-lg font-bold">
                <div className="text-center">
                  <div className="text-xl">SALE</div>
                  <div className="text-2xl">20%</div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#27AE60]">
                Ưu Đãi Đặc Biệt
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#27AE60] rounded-full p-2 mr-4 mt-1 text-white">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#212529]">
                      Khuyến mãi theo doanh số
                    </h4>
                    <p className="text-[#212529] mt-1">
                      Giảm giá đặc biệt cho khách hàng có doanh số cao, áp dụng
                      với nhiều mức ưu đãi khác nhau.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#27AE60] rounded-full p-2 mr-4 mt-1 text-white">
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
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#212529]">
                      Quà tặng đặc biệt
                    </h4>
                    <p className="text-[#212529] mt-1">
                      Tặng sản phẩm mới khi mua đủ số lượng, hoặc quà tặng vào
                      các dịp lễ, Tết, sinh nhật.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="tel:0935330134"
                className="inline-block px-6 py-3 mt-4 bg-[#27AE60] text-white font-bold rounded-full hover:bg-[#219653] transition-colors"
              >
                Liên Hệ Ngay: 0935.330.134
              </a>
            </div>
          </div>

          {/* Second Promotion Image */}
          <div className="mt-16 relative">
            <div className="rounded-lg overflow-hidden shadow-xl aspect-[21/9] relative">
              <ImageWithFallback
                src="/images/khuyenmai/anh2.jpg"
                fallbackSrc="https://placehold.co/1200x500/27AE60/FFFFFF?text=Chương+Trình+Khuyến+Mãi"
                alt="Chương trình khuyến mãi đặc biệt"
                fill
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 md:p-12">
                <div className="max-w-md text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Đồng Hành Cùng Đối Tác
                  </h3>
                  <p className="mb-6">
                    Chúng tôi không chỉ cung cấp sản phẩm chất lượng mà còn mang
                    đến nhiều chương trình ưu đãi hấp dẫn giúp đối tác phát
                    triển kinh doanh.
                  </p>
                  <div className="flex items-center">
                    <div className="mr-4 text-3xl font-bold text-white">
                      Liên hệ:
                    </div>
                    <a
                      href="tel:0935330134"
                      className="text-2xl md:text-3xl font-bold text-white hover:underline"
                    >
                      0935.330.134
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
