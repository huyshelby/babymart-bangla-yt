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
        <section className="py-16 bg-white">
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
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6 text-[#212529]">
                <p className="text-lg">
                  Với tâm huyết mang hương vị bò né đậm đà chuẩn gốc Sài Gòn đến
                  với thực khách Đà thành, chúng tôi đã xây dựng nên một thương
                  hiệu dựa trên nền tảng của sự tử tế và trách nhiệm.
                </p>

                <p className="text-lg">
                  Triết lý kinh doanh của chúng tôi gói gọn trong câu nói:{" "}
                  <span className="text-[#27AE60] font-bold">
                    "Khách hàng là ân nhân"
                  </span>
                  . Mỗi đối tác không chỉ là một khách hàng, mà là một người bạn
                  đồng hành. Chúng tôi hiểu rằng, thành công của các bạn chính
                  là thước đo cho sự thành công của chúng tôi.
                </p>

                <p className="text-lg">
                  Vì vậy, chúng tôi không chỉ giao hàng, chúng tôi giao cả sự
                  tận tâm, cam kết về chất lượng ổn định và sự an toàn tuyệt đối
                  trong từng sản phẩm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price List Section */}
        <section id="bang-gia" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60]">
              Sản phẩm đa dạng và được đáp ứng kịp thời
            </h2>
            <div className="max-w-5xl mx-auto overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full text-sm md:text-base price-table">
                <thead className="table-header bg-[#27AE60] text-white">
                  <tr>
                    <th className="w-8">TT</th>
                    <th>Tên sản phẩm</th>
                    <th>ĐVT</th>
                    <th>Đơn giá (VND)</th>
                    <th>Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="text-[#212529]">
                  <tr>
                    <td>01</td>
                    <td>Bò né ướp sẵn</td>
                    <td>kg</td>
                    <td>120.000</td>
                    <td>
                      - Ướp chuẩn vị gốc
                      <br />- Mỗi bịch 2kg
                    </td>
                  </tr>
                  <tr>
                    <td>02</td>
                    <td>Bò bít tết ướp sẵn</td>
                    <td>kg</td>
                    <td>170.000</td>
                    <td>
                      - Ướp chuẩn vị gốc
                      <br />- Mỗi bịch 2kg
                    </td>
                  </tr>
                  <tr>
                    <td>03</td>
                    <td>Bò kho (xắt sẵn)</td>
                    <td>kg</td>
                    <td>80.000</td>
                    <td>
                      - Thịt bò xắt sẵn
                      <br />- Mỗi bịch 2kg
                    </td>
                  </tr>
                  <tr>
                    <td>04</td>
                    <td>Patê</td>
                    <td>kg</td>
                    <td>70.000</td>
                    <td>- Mỗi gói 1 kg</td>
                  </tr>
                  <tr>
                    <td>05</td>
                    <td>Nem nướng</td>
                    <td>kg</td>
                    <td>90.000</td>
                    <td>- Đóng gói mỗi bịch 0,5kg - 10 thanh</td>
                  </tr>
                  <tr>
                    <td>06</td>
                    <td>Chả quế</td>
                    <td>kg</td>
                    <td>95.000</td>
                    <td>- Đóng gói mỗi bịch 0,5kg – 2 thanh</td>
                  </tr>
                  <tr>
                    <td>07</td>
                    <td>Xông khói BigC</td>
                    <td>bịch</td>
                    <td>35.000</td>
                    <td>- 200 gram</td>
                  </tr>
                  <tr>
                    <td>08</td>
                    <td>Xúc xích Vissan</td>
                    <td>bịch</td>
                    <td>32.000</td>
                    <td>- Mỗi bịch 4 thanh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-center mt-6 text-[#212529]">
              Và còn nhiều sản phẩm khác. Vui lòng liên hệ để biết thêm chi
              tiết.
            </p>
          </div>
        </section>

        {/* Food Safety Certification Section */}
        <section id="chung-nhan" className="py-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60]">
              Chứng Nhận An Toàn Thực Phẩm
            </h2>
            <div className="grid md:grid-cols-2 gap-8 justify-items-center">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="/images/kiemdinh/giaychungnhan1.jpg"
                  alt="Kết quả thử nghiệm Pate"
                  className="rounded-md"
                  onClick={() =>
                    openModal(
                      "/images/kiemdinh/giaychungnhan1.jpg",
                      "Kết quả thử nghiệm ATVSTP - Patê"
                    )
                  }
                  onError={(e) => {
                    // Fallback for image error
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/600x800/cccccc/FFFFFF?text=Ch%C6%B0%CC%81ng+nh%C3%A2%CC%A3n+Pate";
                  }}
                  style={{
                    cursor: "pointer",
                    maxHeight: "500px",
                    width: "auto",
                    margin: "0 auto",
                  }}
                />
                <p className="text-center font-semibold mt-2 text-[#212529]">
                  Kết quả thử nghiệm ATVSTP - Patê
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="/images/kiemdinh/giaychungnhan2.jpg"
                  alt="Kết quả thử nghiệm Thịt bò ướp sẵn"
                  className="rounded-md"
                  onClick={() =>
                    openModal(
                      "/images/kiemdinh/giaychungnhan2.jpg",
                      "Kết quả thử nghiệm ATVSTP - Thịt bò ướp sẵn"
                    )
                  }
                  onError={(e) => {
                    // Fallback for image error
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src =
                      "https://placehold.co/600x800/cccccc/FFFFFF?text=Ch%C6%B0%CC%81ng+nh%C3%A2%CC%A3n+Thi%CC%A3t+Bo%CC%80";
                  }}
                  style={{
                    cursor: "pointer",
                    maxHeight: "500px",
                    width: "auto",
                    margin: "0 auto",
                  }}
                />
                <p className="text-center font-semibold mt-2 text-[#212529]">
                  Kết quả thử nghiệm ATVSTP - Thịt bò ướp sẵn
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* After-sales & Partners Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="section-title text-[#27AE60]">Đối Tác & Hậu Mãi</h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-[#27AE60]">
                  Đối Tác Tin Cậy
                </h3>
                <p className="text-[#212529]">
                  Chúng tôi tự hào là nhà cung cấp cho nhiều quán ăn, nhà hàng
                  lớn nhỏ tại Đà Nẵng và các khu vực lân cận.
                </p>
              </div>
              <div className="bg-[#F8F9FA] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 text-[#27AE60]">
                  Chế Độ Hậu Mãi
                </h3>
                <p className="text-[#212529]">
                  Nhiều chương trình khuyến mãi hấp dẫn, quà tặng sinh nhật và
                  chiết khấu đặc biệt cho các đối tác thân thiết.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="lien-he" className="py-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-[#27AE60]">
              Liên Hệ Với Chúng Tôi
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#212529]">
                    Thông Tin Liên Hệ
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#27AE60] mr-3 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div>
                        <p className="font-medium text-[#212529]">Địa chỉ</p>
                        <p className="text-[#212529]">
                          66 Huỳnh Ngọc Huệ, Thanh Khê, Đà Nẵng
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#27AE60] mr-3 mt-1"
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
                      <div>
                        <p className="font-medium text-[#212529]">Điện thoại</p>
                        <p className="text-[#212529]">
                          <a
                            href="tel:0935330134"
                            className="text-[#27AE60] hover:underline"
                          >
                            0935.330.134
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-[#27AE60] mr-3 mt-1"
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
                      <div>
                        <p className="font-medium text-[#212529]">
                          Giờ làm việc
                        </p>
                        <p className="text-[#212529]">
                          Thứ 2 - Chủ Nhật: 6:00 - 21:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-[#212529]">
                    Gửi Yêu Cầu
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Họ và tên"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Số điện thoại"
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Nội dung"
                        rows={4}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#27AE60] text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      Gửi Yêu Cầu
                    </button>
                  </form>
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
