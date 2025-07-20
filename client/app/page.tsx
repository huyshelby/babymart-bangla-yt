"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { CertificateCard } from "@/components/CertificateCard";
import { ImageModal } from "@/components/ImageModal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate content loaded for fade-in animations
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const openModal = (imageSrc: string, title: string) => {
    setModalImage(imageSrc);
    setModalTitle(title);
    setModalOpen(true);
  };

  // Featured products (first 4 products)
  const featuredProducts = products.slice(0, 4);

  const certificates = [
    {
      id: 1,
      title: "Chứng nhận an toàn 1",
      imageSrc: "/images/certificate1.jpg",
    },
    {
      id: 2,
      title: "Chứng nhận an toàn 2",
      imageSrc: "/images/certificate2.jpg",
    },
    {
      id: 3,
      title: "Chứng nhận an toàn 3",
      imageSrc: "/images/certificate3.jpg",
    },
    {
      id: 4,
      title: "Chứng nhận an toàn 4",
      imageSrc: "/images/certificate4.jpg",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative text-white min-h-[80vh] flex items-center">
          <div
            className="absolute inset-0 bg-black"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay",
              opacity: 0.8,
            }}
          ></div>
          <div
            className={`container relative z-10 mx-auto px-6 py-24 md:py-32 text-center ${
              isLoaded ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-slide-up">
              Sản Phẩm Cho Bé Yêu Của Bạn
            </h1>
            <p
              className="text-lg md:text-2xl font-semibold mb-8 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              CHẤT LƯỢNG - AN TOÀN - GIÁ CẢ HỢP LÝ
            </p>
            <div
              className="flex justify-center flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="#products">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-orange-600 font-bold hover:bg-gray-200 transition text-lg focus-ring"
                >
                  Xem Sản Phẩm
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-orange-500 text-white font-bold hover:bg-orange-600 transition text-lg focus-ring"
                >
                  Liên Hệ Ngay
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
              Về Chúng Tôi
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Chúng tôi không chỉ bán sản phẩm, chúng tôi mang đến giải pháp
              toàn diện và an toàn cho các bậc phụ huynh.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative w-full h-[400px]">
                  <Image
                    src="/images/about-us.jpg"
                    alt="Về chúng tôi"
                    fill
                    className="rounded-lg shadow-xl object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2 text-gray-700 space-y-4">
                <p className="text-lg">
                  Với tâm huyết mang đến những sản phẩm chất lượng cao dành cho
                  trẻ em, chúng tôi đã xây dựng nên một thương hiệu dựa trên nền
                  tảng của sự tận tâm và trách nhiệm.
                </p>
                <p>
                  Triết lý kinh doanh của chúng tôi gói gọn trong câu nói:{" "}
                  <strong className="text-orange-600">
                    &ldquo;Khách hàng là ân nhân&rdquo;
                  </strong>
                  . Mỗi khách hàng không chỉ là một người mua, mà còn là người
                  đồng hành cùng chúng tôi trong việc chăm sóc các bé.
                </p>
                <p>
                  Vì vậy, chúng tôi không chỉ bán hàng, chúng tôi còn mang đến
                  sự tận tâm, cam kết về chất lượng ổn định và sự an toàn tuyệt
                  đối trong từng sản phẩm.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
              Sản Phẩm Nổi Bật
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Sản phẩm chất lượng cao, an toàn cho bé, đảm bảo sức khỏe và sự
              phát triển toàn diện.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  priority={index < 2} // Only prioritize loading the first two products
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/products">
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50"
                >
                  Xem tất cả sản phẩm
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section id="quality" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
              Cam Kết Chất Lượng
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Minh bạch là sức mạnh. Chúng tôi tự tin công khai toàn bộ hồ sơ
              chứng nhận chất lượng và an toàn sản phẩm để quý khách hàng hoàn
              toàn an tâm.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {certificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  imageSrc={cert.imageSrc}
                  title={cert.title}
                  onClick={() => openModal(cert.imageSrc, cert.title)}
                />
              ))}
            </div>
            <div className="mt-12 bg-green-50 border-l-4 border-green-500 text-green-800 p-6 rounded-r-lg">
              <p className="font-semibold">
                &ldquo;Tất cả sản phẩm của chúng tôi đều đạt tiêu chuẩn{" "}
                <strong className="text-green-900">An toàn</strong> về chất liệu
                và không chứa hóa chất độc hại. Các chỉ số về kim loại nặng và
                chất gây dị ứng đều
                <strong className="text-green-900"> Không phát hiện</strong>. Sử
                dụng sản phẩm của chúng tôi là sự bảo vệ vững chắc cho sức khỏe
                của bé yêu và sự yên tâm của các bậc phụ huynh.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
              Trở Thành Đối Tác
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Chúng tôi cung cấp nhiều hơn là sản phẩm. Chúng tôi là đối tác
              chiến lược, đồng hành cùng sự thành công của bạn.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 text-orange-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Tư Vấn Mở Cửa Hàng
                </h3>
                <p className="text-gray-600">
                  Hỗ trợ tư vấn set-up cửa hàng mới với chi phí tối ưu, chia sẻ
                  kinh nghiệm vận hành hiệu quả.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 text-orange-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Chính Sách Đại Lý
                </h3>
                <p className="text-gray-600">
                  Chính sách ưu đãi đặc biệt dành cho đối tác, hỗ trợ marketing
                  và xây dựng thương hiệu.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 text-orange-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
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
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Đào Tạo Nhân Viên
                </h3>
                <p className="text-gray-600">
                  Hướng dẫn chi tiết về sản phẩm, kỹ năng tư vấn và chăm sóc
                  khách hàng chuyên nghiệp.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="#contact">
                <Button
                  variant="default"
                  className="bg-orange-500 text-white font-bold hover:bg-orange-600 transition text-lg"
                >
                  Liên Hệ Hợp Tác Ngay
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4">
              Liên Hệ Với Chúng Tôi
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tốt nhất cho
              bạn.
            </p>
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Địa chỉ
                  </h3>
                  <p className="text-gray-600">
                    123 Đường ABC, Quận XYZ, Thành Phố
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Điện thoại (Zalo)
                  </h3>
                  <a
                    href="tel:0123456789"
                    className="text-orange-600 text-xl font-bold hover:underline focus-ring rounded"
                  >
                    0123.456.789
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                  <a
                    href="mailto:info@babymart.vn"
                    className="text-orange-600 hover:underline focus-ring rounded"
                  >
                    info@babymart.vn
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Giờ làm việc
                  </h3>
                  <p className="text-gray-600">
                    Thứ 2 - Chủ Nhật: 8:00 - 20:00
                  </p>
                </div>
                <div className="relative w-full h-[200px]">
                  <Image
                    src="/images/store.jpg"
                    alt="Cửa hàng"
                    fill
                    className="rounded-lg shadow-md object-cover"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="0123 456 789"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      placeholder="Nhập nội dung liên hệ..."
                    ></textarea>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      variant="default"
                      className="w-full bg-orange-500 hover:bg-orange-600"
                    >
                      Gửi tin nhắn
                    </Button>
                  </div>
                </form>
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
