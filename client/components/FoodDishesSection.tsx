"use client";

import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";

export const FoodDishesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-[#27AE60] leading-relaxed">
          NHIỀU MÓN ẨM THỰC TẠI CÁC NHÀ HÀNG, QUÁN ĂN DO CÔNG TY THỰC PHẨM BÒ NÉ
          HẠNH CUNG CẤP ĐƯỢC KHÁCH HÀNG YÊU MẾN
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-[#212529]">
              Các món ăn được chế biến từ nguyên liệu của công ty chúng tôi luôn
              nhận được sự yêu mến từ thực khách
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Image 1 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
              <ImageWithFallback
                src="/images/monamthuc/anh1.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+1"
                alt="Món ăn từ Bò Né Hạnh"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg">Bò né đặc biệt</h3>
                <p className="text-white/90 text-sm">
                  Hương vị đậm đà, thơm ngon
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
              <ImageWithFallback
                src="/images/monamthuc/anh2.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+2"
                alt="Món ăn từ Bò Né Hạnh"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg">Bò kho đậm vị</h3>
                <p className="text-white/90 text-sm">
                  Mềm, thơm, đúng vị Sài Gòn
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
              <ImageWithFallback
                src="/images/monamthuc/anh3.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+3"
                alt="Món ăn từ Bò Né Hạnh"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg">
                  Bít tết nóng hổi
                </h3>
                <p className="text-white/90 text-sm">
                  Thịt bò tươi, chất lượng cao
                </p>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
              <ImageWithFallback
                src="/images/monamthuc/anh4.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+4"
                alt="Món ăn từ Bò Né Hạnh"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold text-lg">
                  Món ngon đặc biệt
                </h3>
                <p className="text-white/90 text-sm">
                  Được khách hàng yêu thích
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-[#212529] italic mb-6">
              Đa dạng các món ăn ngon được chế biến từ nguyên liệu chất lượng
              cao của Công ty Thực phẩm Bò Né Hạnh
            </p>
            <Link
              href="#lien-he"
              className="px-8 py-3 bg-[#27AE60] text-white font-bold rounded-full transform hover:scale-105 transition-transform shadow-lg inline-block"
            >
              Đặt Hàng Ngay
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
