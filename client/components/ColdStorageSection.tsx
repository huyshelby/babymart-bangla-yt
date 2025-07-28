"use client";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";

export const ColdStorageSection = () => {
  return (
    <section id="he-thong-kho-lanh" className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-[#27AE60] mb-6">
          HỆ THỐNG KHO LẠNH MỚI - HIỆN ĐẠI
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-lg text-[#212529]">
              Chúng tôi đầu tư hệ thống kho lạnh hiện đại đảm bảo chất lượng sản
              phẩm luôn được bảo quản tốt nhất
            </p>
          </div>

          {/* Image gallery - Desktop view (3 columns) */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 mb-4">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:scale-[1.02] relative h-60">
              <ImageWithFallback
                src="/images/hethongkholanh/anh1.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh"
                alt="Hệ thống kho lạnh 1"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:scale-[1.02] relative h-60">
              <ImageWithFallback
                src="/images/hethongkholanh/anh2.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh"
                alt="Hệ thống kho lạnh 2"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:scale-[1.02] relative h-60">
              <ImageWithFallback
                src="/images/hethongkholanh/anh3.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh"
                alt="Hệ thống kho lạnh 3"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Image gallery - Mobile view (carousel-like) */}
          <div className="grid grid-cols-1 md:hidden gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl relative aspect-[4/3]">
              <ImageWithFallback
                src="/images/hethongkholanh/anh1.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+1"
                alt="Hệ thống kho lạnh 1"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl relative aspect-[4/3]">
              <ImageWithFallback
                src="/images/hethongkholanh/anh2.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+2"
                alt="Hệ thống kho lạnh 2"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl relative aspect-[4/3]">
              <ImageWithFallback
                src="/images/hethongkholanh/anh3.jpg"
                fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+3"
                alt="Hệ thống kho lạnh 3"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-[#212529] italic">
              Hệ thống kho lạnh hiện đại đảm bảo chất lượng sản phẩm luôn tươi
              ngon và an toàn
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
