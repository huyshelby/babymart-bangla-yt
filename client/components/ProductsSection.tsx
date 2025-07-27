"use client";

import Image from "next/image";
import Link from "next/link";
import ImageWithFallback from "./ImageWithFallback";

export const ProductsSection = () => {
  return (
    <section className="py-16 bg-white" id="san-pham">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-[#27AE60]">MỘT SỐ SẢN PHẨM CHÍNH</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Bò Né Card */}
            <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src="/images/products/z6821648799474_a215026adaba679db43c7e534b85dace.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Bò+Né"
                  alt="Bò né"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#212529]">Bò né</h3>
                <p className="text-sm text-gray-600">Bò tươi ướp sẵn</p>
              </div>
            </div>

            {/* Bitstet Card */}
            <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src="/images/products/z6821648986534_fed0effdd4f409e144c416d976b0a954.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Bitstet"
                  alt="Bitstet"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#212529]">Bitstet</h3>
                <p className="text-sm text-gray-600">Bò miếng tươi ướp sẵn</p>
              </div>
            </div>

            {/* Pate Card */}
            <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src="/images/mau1.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Pate"
                  alt="Pate"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#212529]">Pate</h3>
                <p className="text-sm text-gray-600">Hương vị thơm ngon</p>
              </div>
            </div>

            {/* Nem nướng Card */}
            <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src="/images/snap.jpeg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Nem+Nướng"
                  alt="Nem nướng"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#212529]">Nem nướng</h3>
                <p className="text-sm text-gray-600">Thơm ngon đặc biệt</p>
              </div>
            </div>

            {/* Chả quế Card */}
            <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src="/images/us.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Chả+Quế"
                  alt="Chả quế"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#212529]">Chả quế</h3>
                <p className="text-sm text-gray-600">Đậm đà hương vị</p>
              </div>
            </div>

            {/* Xíu mại Card */}
            <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 relative overflow-hidden">
                <ImageWithFallback
                  src="/images/uss.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Xíu+Mại+%26+Xông+Khói"
                  alt="Xíu mại & Xông khói"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#212529]">
                  Dầu dấm, xíu mại, xông khói
                </h3>
                <p className="text-sm text-gray-600">Sản phẩm đặc biệt</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
