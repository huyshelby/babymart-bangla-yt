"use client";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";

export const BusinessPhilosophySection = () => {
  return (
    <section id="phuong-cham" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-[#27AE60]">PHƯƠNG CHÂM KINH DOANH</h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <div className="space-y-6 text-[#212529]">
                  <p className="text-lg">
                    Với tâm huyết mang hương vị bò né, bò kho đậm đà chuẩn gốc
                    Sài Gòn đến với thực khách Đà thành, chúng tôi đã xây dựng
                    nên một thương hiệu dựa trên nền tảng của sự tử tế và trách
                    nhiệm.
                  </p>

                  <p className="text-lg">
                    Triết lý kinh doanh của chúng tôi gói gọn trong câu nói:{" "}
                    <span className="text-[#27AE60] font-bold">
                      &ldquo;Khách hàng là ân nhân&rdquo;
                    </span>
                    . Mỗi đối tác không chỉ là một khách hàng, mà là một người
                    bạn đồng hành. Chúng tôi hiểu rằng, thành công của quán
                    chính là thuộc do cho sự thành công của chúng tôi.
                  </p>

                  <p className="text-lg">
                    Vì vậy, chúng tôi không chỉ giao hàng, chúng tôi giao cả sự
                    tận tâm, cam kết về chất lượng ổn định và sự an toàn tuyệt
                    đối trong từng sản phẩm.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] relative aspect-[4/3]">
                <ImageWithFallback
                  src="/images/phuongcham/phuongcham1.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Phương+Châm+Kinh+Doanh"
                  alt="Phương châm kinh doanh"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] hidden md:block relative aspect-[4/3]">
                <ImageWithFallback
                  src="/images/phuongcham/phuongcham2.jpg"
                  fallbackSrc="https://placehold.co/600x400/27AE60/FFFFFF?text=Chất+Lượng+Sản+Phẩm"
                  alt="Chất lượng sản phẩm"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
