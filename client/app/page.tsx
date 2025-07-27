"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ImageModal } from "@/components/ImageModal";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after page load
    setIsLoaded(true);
  }, []);

  const openModal = (imageSrc: string, title: string) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <>
      <Header />

      <main>
        {/* Hero Section - Enhanced */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background with parallax effect */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/images/background/sanpham.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: "fixed",
              filter: "brightness(0.9)",
            }}
          >
            {/* Animated overlay pattern */}
            <div
              className="absolute inset-0 opacity-20 animate-aurora"
              style={{
                backgroundImage: `url("/images/food-pattern.svg")`,
                backgroundSize: "300px",
              }}
            />
          </div>

          {/* Content */}
          <div className="container mx-auto px-6 z-10 relative py-20">
            {/* Decorative elements */}
            <div className="absolute left-10 top-10 opacity-70 hidden lg:block animate-float">
              <Image
                src="/images/spoon-divider.svg"
                alt=""
                width={100}
                height={40}
              />
            </div>
            <div className="absolute right-10 bottom-10 opacity-70 hidden lg:block animate-float-slow">
              <Image src="/images/bo-ne.svg" alt="" width={80} height={80} />
            </div>

            {/* Main content with animations */}
            <div className="text-center max-w-4xl mx-auto">
              <div
                className={`transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } transition-all duration-1000 ease-out`}
              >
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-wider mb-6 text-white">
                  <span className="animate-text-shimmer inline-block bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
                    CÔNG TY THỰC PHẨM CHẾ BIẾN BÒ NÉ HẠNH
                  </span>
                </h1>
              </div>

              <div
                className={`transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } transition-all duration-1000 delay-300 ease-out`}
              >
                <p className="text-xl md:text-3xl font-medium mb-10 text-white/90">
                  Chuyên cung cấp Bò Né - Bò Kho Sài Gòn tại Đà Nẵng
                </p>
              </div>

              <div
                className={`transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } transition-all duration-1000 delay-500 ease-out`}
              >
                <div className="glass-card relative overflow-hidden p-6 rounded-xl backdrop-blur-md border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#27AE60]/40 to-[#27AE60]/40 z-0"></div>
                  <p
                    className="relative z-10 text-xl md:text-3xl font-bold text-white mb-2"
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
                  >
                    UY TÍN – AN TOÀN -CHUẨN VỊ SÀI GÒN
                  </p>
                  <p
                    className="relative z-10 text-2xl md:text-4xl font-bold text-white"
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
                  >
                    MUA BÁN THẢ GA - KHÔNG LO VỀ GIÁ
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`mt-10 flex flex-wrap gap-4 justify-center transform ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } transition-all duration-1000 delay-700 ease-out`}
              >
                <Link
                  href="#san-pham"
                  className="px-8 py-3 bg-white/90 hover:bg-white text-[#27AE60] font-bold rounded-full transform hover:scale-105 transition-transform shadow-lg"
                >
                  Xem Sản Phẩm
                </Link>
                <Link
                  href="#lien-he"
                  className="px-8 py-3 bg-[#27AE60]/90 hover:bg-[#27AE60] text-white font-bold rounded-full transform hover:scale-105 transition-transform shadow-lg"
                >
                  Liên Hệ Ngay
                </Link>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white/70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="gioi-thieu" className="py-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60]">Giới Thiệu Chung</h2>
            {/* <div className="max-w-4xl mx-auto text-center text-lg text-[#212529] mb-12">
              <p>
                Đại lý 33 Ngon là đối tác đáng tin cậy của nhiều cửa hàng, quán
                ăn tại Đà Nẵng, chuyên cung cấp các loại thực phẩm chế biến sẵn,
                đặc biệt là Bò né và Bò kho chuẩn vị Sài Gòn.
              </p>
            </div> */}
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#27AE60]">
                  GIÁ CẢ TỐT NHẤT
                </h3>
                <p className="text-[#212529]">
                  Chuyên cung cấp các loại thực phẩm cao cấp chế biến Bò né cho
                  các nhà hàng, quán ăn theo yêu cầu đảm bảo GIÁ CẢ TỐT NHẤT VÀ
                  CẠNH TRANH.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#27AE60]">
                  CHẤT LƯỢNG HÀNG ĐẦU
                </h3>
                <p className="text-[#212529]">
                  Các thực phẩm được sản xuất đảm bảo ATVSTP, chuẩn vị gốc, đảm
                  bảo CHẤT LƯỢNG VÀ TRỌNG LƯỢNG và đang được khách hàng yên mến,
                  tin dùng trên thị trường hiện nay.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#27AE60]">
                  DỊCH VỤ TẬN TÂM
                </h3>
                <p className="text-[#212529]">
                  Đến với chúng tôi quý khách yên tâm về GIÁ và luôn được phục
                  vụ tận tâm chu đáo cùng với nhiều chương trình khuyến mại hấp
                  dẫn.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Products Section */}
        <section className="py-16 bg-white" id="san-pham">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60]">
              MỘT SỐ SẢN PHẨM CHÍNH
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* Bò Né Card */}
                <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src="/images/products/z6821648799474_a215026adaba679db43c7e534b85dace.jpg"
                      alt="Bò né"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/600x400/27AE60/FFFFFF?text=Bò+Né";
                      }}
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
                    <img
                      src="/images/products/z6821648986534_fed0effdd4f409e144c416d976b0a954.jpg"
                      alt="Bitstet"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/600x400/27AE60/FFFFFF?text=Bitstet";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#212529]">
                      Bitstet
                    </h3>
                    <p className="text-sm text-gray-600">
                      Bò miếng tươi ướp sẵn
                    </p>
                  </div>
                </div>

                {/* Pate Card */}
                <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src="/images/mau1.jpg"
                      alt="Pate"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/600x400/27AE60/FFFFFF?text=Pate";
                      }}
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
                    <img
                      src="/images/snap.jpeg"
                      alt="Nem nướng"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/600x400/27AE60/FFFFFF?text=Nem+Nướng";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#212529]">
                      Nem nướng
                    </h3>
                    <p className="text-sm text-gray-600">Thơm ngon đặc biệt</p>
                  </div>
                </div>

                {/* Chả quế Card */}
                <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src="/images/us.jpg"
                      alt="Chả quế"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/600x400/27AE60/FFFFFF?text=Chả+Quế";
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-[#212529]">
                      Chả quế
                    </h3>
                    <p className="text-sm text-gray-600">Đậm đà hương vị</p>
                  </div>
                </div>

                {/* Xíu mại Card */}
                <div className="bg-[#F8F9FA] rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
                  <div className="h-48 relative overflow-hidden">
                    <img
                      src="/images/uss.jpg"
                      alt="Xíu mại & Xông khói"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/600x400/27AE60/FFFFFF?text=Xíu+Mại+%26+Xông+Khói";
                      }}
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

        {/* PHƯƠNG CHÂM KINH DOANH Section */}
        <section id="phuong-cham" className="py-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60]">
              PHƯƠNG CHÂM KINH DOANH
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                    <div className="space-y-6 text-[#212529]">
                      <p className="text-lg">
                        Với tâm huyết mang hương vị bò né, bò kho đậm đà chuẩn
                        gốc Sài Gòn đến với thực khách Đà thành, chúng tôi đã
                        xây dựng nên một thương hiệu dựa trên nền tảng của sự tử
                        tế và trách nhiệm.
                      </p>

                      <p className="text-lg">
                        Triết lý kinh doanh của chúng tôi gói gọn trong câu nói:{" "}
                        <span className="text-[#27AE60] font-bold">
                          "Khách hàng là ân nhân"
                        </span>
                        . Mỗi đối tác không chỉ là một khách hàng, mà là một
                        người bạn đồng hành. Chúng tôi hiểu rằng, thành công của
                        quán chính là thuộc do cho sự thành công của chúng tôi.
                      </p>

                      <p className="text-lg">
                        Vì vậy, chúng tôi không chỉ giao hàng, chúng tôi giao cả
                        sự tận tâm, cam kết về chất lượng ổn định và sự an toàn
                        tuyệt đối trong từng sản phẩm.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="order-1 md:order-2 space-y-6">
                  <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02]">
                    <img
                      src="/images/phuongcham/phuongcham1.jpg"
                      alt="Phương châm kinh doanh"
                      className="w-full h-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/600x400/27AE60/FFFFFF?text=Phương+Châm+Kinh+Doanh";
                      }}
                    />
                  </div>

                  <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] hidden md:block">
                    <img
                      src="/images/phuongcham/phuongcham2.jpg"
                      alt="Chất lượng sản phẩm"
                      className="w-full h-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/600x400/27AE60/FFFFFF?text=Chất+Lượng+Sản+Phẩm";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cold Storage System Section */}
        <section id="he-thong-kho-lanh" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60]">
              HỆ THỐNG KHO LẠNH MỚI - HIỆN ĐẠI
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-lg text-[#212529]">
                  Chúng tôi đầu tư hệ thống kho lạnh hiện đại đảm bảo chất lượng
                  sản phẩm luôn được bảo quản tốt nhất
                </p>
              </div>

              {/* Image gallery - Desktop view (3 columns) */}
              <div className="hidden md:grid md:grid-cols-3 gap-6 mb-6">
                <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:scale-[1.02]">
                  <img
                    src="/images/hethongkholanh/anh1.jpg"
                    alt="Hệ thống kho lạnh 1"
                    className="w-full h-60 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh";
                    }}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:scale-[1.02]">
                  <img
                    src="/images/hethongkholanh/anh2.jpg"
                    alt="Hệ thống kho lạnh 2"
                    className="w-full h-60 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh";
                    }}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl hover:scale-[1.02]">
                  <img
                    src="/images/hethongkholanh/anh3.jpg"
                    alt="Hệ thống kho lạnh 3"
                    className="w-full h-60 object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh";
                    }}
                  />
                </div>
              </div>

              {/* Image gallery - Mobile view (carousel-like) */}
              <div className="grid grid-cols-1 md:hidden gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl">
                  <img
                    src="/images/hethongkholanh/anh1.jpg"
                    alt="Hệ thống kho lạnh 1"
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+1";
                    }}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl">
                  <img
                    src="/images/hethongkholanh/anh2.jpg"
                    alt="Hệ thống kho lạnh 2"
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+2";
                    }}
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg transform transition-all hover:shadow-xl">
                  <img
                    src="/images/hethongkholanh/anh3.jpg"
                    alt="Hệ thống kho lạnh 3"
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Kho+Lạnh+3";
                    }}
                  />
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-[#212529] italic">
                  Hệ thống kho lạnh hiện đại đảm bảo chất lượng sản phẩm luôn
                  tươi ngon và an toàn
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Food Safety Section */}
        <section id="thuc-pham-dau-vao" className="py-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60]">
              THỰC PHẨM ĐẦU VÀO SẠCH – AN TOÀN VSTP
            </h2>
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left column - Image */}
                <div className="overflow-hidden rounded-lg shadow-xl">
                  <div className="relative group">
                    <img
                      src="/images/thucphamdauvao/anh1.jpg"
                      alt="Thực phẩm đầu vào sạch"
                      className="w-full h-auto rounded-lg transform transition-transform group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/800x600/27AE60/FFFFFF?text=Thực+Phẩm+Đầu+Vào+Sạch";
                      }}
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
                    Chúng tôi cam kết sử dụng nguồn thực phẩm đầu vào sạch, đảm
                    bảo an toàn vệ sinh thực phẩm theo các tiêu chuẩn nghiêm
                    ngặt.
                  </p>
                  <p className="text-lg text-[#212529]">
                    Tất cả nguyên liệu được kiểm soát chặt chẽ từ khâu nhập
                    hàng, với quy trình kiểm tra nghiêm ngặt và lựa chọn kỹ càng
                    từ các nhà cung cấp uy tín.
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
                <div className="relative group">
                  <img
                    src="/images/thucphamdauvao/anh2.jpg"
                    alt="Quy trình kiểm soát chất lượng"
                    className="w-full h-auto rounded-lg"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/1200x500/27AE60/FFFFFF?text=Quy+Trình+Kiểm+Soát+Chất+Lượng";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                    <p className="text-white font-medium text-xl text-center">
                      Quy trình kiểm soát chất lượng nghiêm ngặt đảm bảo thực
                      phẩm an toàn đến tay khách hàng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Food Dishes Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60] leading-relaxed">
              NHIỀU MÓN ẨM THỰC TẠI CÁC NHÀ HÀNG, QUÁN ĂN DO CÔNG TY THỰC PHẨM
              BÒ NÉ HẠNH CUNG CẤP ĐƯỢC KHÁCH HÀNG YÊU MẾN
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-lg text-[#212529]">
                  Các món ăn được chế biến từ nguyên liệu của công ty chúng tôi
                  luôn nhận được sự yêu mến từ thực khách
                </p>
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Image 1 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
                  <img
                    src="/images/monamthuc/anh1.jpg"
                    alt="Món ăn từ Bò Né Hạnh"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+1";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg">
                      Bò né đặc biệt
                    </h3>
                    <p className="text-white/90 text-sm">
                      Hương vị đậm đà, thơm ngon
                    </p>
                  </div>
                </div>

                {/* Image 2 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
                  <img
                    src="/images/monamthuc/anh2.jpg"
                    alt="Món ăn từ Bò Né Hạnh"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+2";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 flex flex-col justify-end">
                    <h3 className="text-white font-bold text-lg">
                      Bò kho đậm vị
                    </h3>
                    <p className="text-white/90 text-sm">
                      Mềm, thơm, đúng vị Sài Gòn
                    </p>
                  </div>
                </div>

                {/* Image 3 */}
                <div className="relative overflow-hidden rounded-lg shadow-lg group h-64 md:h-80">
                  <img
                    src="/images/monamthuc/anh3.jpg"
                    alt="Món ăn từ Bò Né Hạnh"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+3";
                    }}
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
                  <img
                    src="/images/monamthuc/anh4.jpg"
                    alt="Món ăn từ Bò Né Hạnh"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/600x400/27AE60/FFFFFF?text=Món+Ăn+4";
                    }}
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
                  Đa dạng các món ăn ngon được chế biến từ nguyên liệu chất
                  lượng cao của Công ty Thực phẩm Bò Né Hạnh
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

        {/* Promotions Section */}
        <section id="khuyen-mai" className="py-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60] leading-relaxed">
              NHIỀU CHƯƠNG TRÌNH KHUYẾN MẠI, QUÀ TẶNG PHONG PHÚ HẤP DẪN ĐẾN VỚI
              KHÁCH HÀNG
            </h2>

            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-lg text-[#212529]">
                  Chúng tôi thường xuyên tổ chức nhiều chương trình ưu đãi đặc
                  biệt dành cho khách hàng thân thiết và đối tác
                </p>
              </div>

              {/* Promotions Content */}
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Image */}
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl transform transition-all hover:shadow-2xl">
                    <img
                      src="/images/khuyenmai/anh1.jpg"
                      alt="Chương trình khuyến mãi"
                      className="w-full h-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/800x600/27AE60/FFFFFF?text=Khuyến+Mãi+Đặc+Biệt";
                      }}
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
                          Giảm giá đặc biệt cho khách hàng có doanh số cao, áp
                          dụng với nhiều mức ưu đãi khác nhau.
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
                          Tặng sản phẩm mới khi mua đủ số lượng, hoặc quà tặng
                          vào các dịp lễ, Tết, sinh nhật.
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
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="/images/khuyenmai/anh2.jpg"
                    alt="Chương trình khuyến mãi đặc biệt"
                    className="w-full h-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src =
                        "https://placehold.co/1200x500/27AE60/FFFFFF?text=Chương+Trình+Khuyến+Mãi";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center p-8 md:p-12">
                    <div className="max-w-md text-white">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Đồng Hành Cùng Đối Tác
                      </h3>
                      <p className="mb-6">
                        Chúng tôi không chỉ cung cấp sản phẩm chất lượng mà còn
                        mang đến nhiều chương trình ưu đãi hấp dẫn giúp đối tác
                        phát triển kinh doanh.
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
      </main>

      <Footer />

      {/* Image Modal */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={modalImage}
        imageTitle={modalTitle}
      />
    </>
  );
}
