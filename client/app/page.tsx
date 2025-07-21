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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("/images/background.jpg")`,
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
                    Đại Lý Thực Phẩm 33 Ngon
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
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-amber-600/40 z-0"></div>
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
                  className="px-8 py-3 bg-white/90 hover:bg-white text-red-600 font-bold rounded-full transform hover:scale-105 transition-transform shadow-lg"
                >
                  Xem Sản Phẩm
                </Link>
                <Link
                  href="#lien-he"
                  className="px-8 py-3 bg-red-600/90 hover:bg-red-600 text-white font-bold rounded-full transform hover:scale-105 transition-transform shadow-lg"
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
        <section id="gioi-thieu" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title brand-text-green">Về Chúng Tôi</h2>
            <div className="max-w-4xl mx-auto text-center text-lg text-gray-600 mb-12">
              <p>
                Đại lý 33 Ngon là đối tác đáng tin cậy của nhiều cửa hàng, quán
                ăn tại Đà Nẵng, chuyên cung cấp các loại thực phẩm chế biến sẵn,
                đặc biệt là Bò né và Bò kho chuẩn vị Sài Gòn.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="brand-bg-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                <h3 className="text-xl font-bold mb-2 brand-text-green">
                  GIÁ CẢ TỐT NHẤT
                </h3>
                <p className="text-gray-600">
                  Chúng tôi cam kết mang đến mức giá cạnh tranh nhất thị trường,
                  giúp quý khách tối ưu hóa lợi nhuận kinh doanh.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="brand-bg-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                <h3 className="text-xl font-bold mb-2 brand-text-green">
                  CHẤT LƯỢNG HÀNG ĐẦU
                </h3>
                <p className="text-gray-600">
                  Sản phẩm được sản xuất đảm bảo ATVSTP, chuẩn vị gốc, đúng
                  trọng lượng, được khách hàng tin dùng.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <div className="brand-bg-green text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
                <h3 className="text-xl font-bold mb-2 brand-text-green">
                  DỊCH VỤ TẬN TÂM
                </h3>
                <p className="text-gray-600">
                  Phục vụ chu đáo, giao hàng tận nơi nhanh chóng cùng nhiều
                  chương trình khuyến mãi hấp dẫn cho đối tác.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="san-pham" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="section-title brand-text-green">Sản Phẩm Nổi Bật</h2>
            <div className="flex justify-center">
              <img
                src="/images/background/sanpham.jpg"
                alt="Các sản phẩm của 33 Ngon"
                className="rounded-lg shadow-2xl max-w-full md:max-w-4xl h-auto"
                onError={(e) => {
                  // Fallback for image error
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src =
                    "https://placehold.co/1024x683/cccccc/FFFFFF?text=A%CC%89nh+Sa%CC%89n+Ph%C3%A2%CC%89m";
                }}
              />
            </div>
            <p className="text-center mt-4 text-gray-600 italic">
              Bao gồm: Bò né, Bò kho, Patê, Chả quế, Nem nướng và nhiều sản phẩm
              khác.
            </p>
          </div>
        </section>

        {/* Price List Section */}
        <section id="bang-gia" className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="section-title brand-text-green">
              Sản phẩm đa dạng và được đáp ứng kịp thời
            </h2>
            <div className="max-w-5xl mx-auto overflow-x-auto shadow-lg rounded-lg">
              <table className="w-full text-sm md:text-base price-table">
                <thead className="table-header">
                  <tr>
                    <th className="w-8">TT</th>
                    <th>Tên sản phẩm</th>
                    <th>ĐVT</th>
                    <th>Đơn giá (VND)</th>
                    <th>Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
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
            <p className="text-center mt-6 text-gray-600">
              Và còn nhiều sản phẩm khác. Vui lòng liên hệ để biết thêm chi
              tiết.
            </p>
          </div>
        </section>

        {/* Food Safety Certification Section */}
        <section id="chung-nhan" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="section-title brand-text-green">
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
                <p className="text-center font-semibold mt-2">
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
                <p className="text-center font-semibold mt-2">
                  Kết quả thử nghiệm ATVSTP - Thịt bò ướp sẵn
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* After-sales & Partners Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="section-title brand-text-green">
              Đối Tác & Hậu Mãi
            </h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 brand-text-green">
                  Đối Tác Tin Cậy
                </h3>
                <p className="text-gray-600">
                  Chúng tôi tự hào là nhà cung cấp cho nhiều quán ăn, nhà hàng
                  lớn nhỏ tại Đà Nẵng và các khu vực lân cận.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-3 brand-text-green">
                  Chế Độ Hậu Mãi
                </h3>
                <p className="text-gray-600">
                  Nhiều chương trình khuyến mãi hấp dẫn, quà tặng sinh nhật và
                  chiết khấu đặc biệt cho các đối tác thân thiết.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="lien-he" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="section-title brand-text-green">
              Liên Hệ Với Chúng Tôi
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Thông Tin Liên Hệ</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600 mr-3 mt-1"
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
                        <p className="font-medium">Địa chỉ</p>
                        <p className="text-gray-600">
                          66 Huỳnh Ngọc Huệ, Thanh Khê, Đà Nẵng
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600 mr-3 mt-1"
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
                        <p className="font-medium">Điện thoại</p>
                        <p className="text-gray-600">
                          <a
                            href="tel:0935330134"
                            className="text-red-600 hover:underline"
                          >
                            0935.330.134
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-600 mr-3 mt-1"
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
                        <p className="font-medium">Giờ làm việc</p>
                        <p className="text-gray-600">
                          Thứ 2 - Chủ Nhật: 6:00 - 21:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Gửi Yêu Cầu</h3>
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
                      className="brand-bg-red text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity"
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
