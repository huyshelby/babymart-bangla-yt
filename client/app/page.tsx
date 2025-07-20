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
      imageSrc: "/images/giaychungnhan1.jpg",
    },
    {
      id: 2,
      title: "Chứng nhận an toàn 2",
      imageSrc: "/images/giaychungnhan2.jpg",
    },
    {
      id: 3,
      title: "Chứng nhận an toàn 3",
      imageSrc: "/images/giaychungnhan3.jpg",
    },
    {
      id: 4,
      title: "Chứng nhận an toàn 4",
      imageSrc: "/images/giaychungnhan4.jpg",
    },
    {
      id: 5,
      title: "Chứng nhận an toàn 5",
      imageSrc: "/images/giaychungnhan5.jpg",
    },
  ];

  return (
    <>
      <Header />

      <main className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative text-white min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/85 to-black/80"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              opacity: 0.95,
            }}
          ></div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-[10%] w-40 h-40 rounded-full bg-orange-500/10 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-[15%] w-52 h-52 rounded-full bg-yellow-500/10 animate-float"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-red-500/5 animate-float-slow"></div>
          </div>

          <div
            className={`container relative z-10 mx-auto px-6 py-24 md:py-32 text-center ${
              isLoaded ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 animate-slide-up bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-white">
                Sản Phẩm Cho Bé Yêu Của Bạn
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded-full"></div>
              <p
                className="text-lg md:text-2xl font-semibold mb-8 animate-slide-up text-orange-100"
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
                    className="bg-white text-orange-600 font-bold hover:bg-gray-200 hover:scale-105 transition duration-300 text-lg focus-ring relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-100 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    Xem Sản Phẩm
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold hover:from-orange-600 hover:to-red-700 hover:scale-105 transition duration-300 text-lg focus-ring relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-300/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Liên Hệ Ngay
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Decorative wave divider */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 120"
              className="fill-gray-50 w-full h-auto"
            >
              <path d="M0,64L48,80C96,96,192,128,288,122.7C384,117,480,75,576,64C672,53,768,75,864,85.3C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -rotate-45 opacity-5 w-96 h-96">
            <Image
              src="/images/spoon-divider.svg"
              alt="Decorative"
              width={384}
              height={384}
              className="opacity-30"
            />
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Về Chúng Tôi
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
              Chúng tôi không chỉ bán sản phẩm, chúng tôi mang đến giải pháp
              toàn diện và an toàn cho các bậc phụ huynh.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src="/images/about-us.jpg"
                    alt="Về chúng tôi"
                    fill
                    className="rounded-2xl object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="md:w-1/2 text-gray-700 space-y-5">
                <p className="text-xl leading-relaxed">
                  Với tâm huyết mang đến những sản phẩm chất lượng cao dành cho
                  trẻ em, chúng tôi đã xây dựng nên một thương hiệu dựa trên nền
                  tảng của sự tận tâm và trách nhiệm.
                </p>
                <p className="text-lg">
                  Triết lý kinh doanh của chúng tôi gói gọn trong câu nói:{" "}
                  <strong className="text-orange-600 text-xl">
                    &ldquo;Khách hàng là ân nhân&rdquo;
                  </strong>
                  . Mỗi khách hàng không chỉ là một người mua, mà còn là người
                  đồng hành cùng chúng tôi trong việc chăm sóc các bé.
                </p>
                <p className="text-lg">
                  Vì vậy, chúng tôi không chỉ bán hàng, chúng tôi còn mang đến
                  sự tận tâm, cam kết về chất lượng ổn định và sự an toàn tuyệt
                  đối trong từng sản phẩm.
                </p>
                <div className="pt-4">
                  <Link href="#products">
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]">
                      Khám phá sản phẩm
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="py-20 bg-white relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('/images/food-pattern.svg')",
              backgroundSize: "300px",
              backgroundRepeat: "repeat",
            }}
          ></div>

          <div className="container mx-auto px-6 relative">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Sản Phẩm Nổi Bật
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
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
            <div className="text-center mt-14">
              <Link href="/products">
                <Button
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-6 text-lg font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
                >
                  Xem tất cả sản phẩm
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section id="quality" className="py-20 relative overflow-hidden">
          <div className="absolute -bottom-20 -left-20 opacity-10 w-80 h-80">
            <Image
              src="/images/spoon-divider.svg"
              alt="Decorative"
              width={320}
              height={320}
            />
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Cam Kết Chất Lượng
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
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
            <div className="mt-14 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 text-green-800 p-8 rounded-r-xl rounded-tr-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-lg">
                  &ldquo;Tất cả sản phẩm của chúng tôi đều đạt tiêu chuẩn{" "}
                  <strong className="text-green-900">An toàn</strong> về chất
                  liệu và không chứa hóa chất độc hại. Các chỉ số về kim loại
                  nặng và chất gây dị ứng đều
                  <strong className="text-green-900"> Không phát hiện</strong>.
                  Sử dụng sản phẩm của chúng tôi là sự bảo vệ vững chắc cho sức
                  khỏe của bé yêu và sự yên tâm của các bậc phụ huynh.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section
          id="partners"
          className="py-20 bg-white relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "url('/images/food-pattern.svg')",
              backgroundSize: "300px",
              backgroundRepeat: "repeat",
            }}
          ></div>

          <div className="container mx-auto px-6 relative">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Trở Thành Đối Tác
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
              Chúng tôi cung cấp nhiều hơn là sản phẩm. Chúng tôi là đối tác
              chiến lược, đồng hành cùng sự thành công của bạn.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Tư Vấn Mở Cửa Hàng
                </h3>
                <p className="text-gray-600 text-lg">
                  Hỗ trợ tư vấn set-up cửa hàng mới với chi phí tối ưu, chia sẻ
                  kinh nghiệm vận hành hiệu quả.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Chính Sách Đại Lý
                </h3>
                <p className="text-gray-600 text-lg">
                  Chính sách ưu đãi đặc biệt dành cho đối tác, hỗ trợ marketing
                  và xây dựng thương hiệu.
                </p>
              </div>
              <div className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                <div className="bg-gradient-to-br from-orange-100 to-yellow-100 text-orange-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
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
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Đào Tạo Nhân Viên
                </h3>
                <p className="text-gray-600 text-lg">
                  Hướng dẫn chi tiết về sản phẩm, kỹ năng tư vấn và chăm sóc
                  khách hàng chuyên nghiệp.
                </p>
              </div>
            </div>
            <div className="text-center mt-14">
              <Link href="#contact">
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold hover:from-orange-600 hover:to-red-700 transition-all duration-300 text-lg px-8 py-6 rounded-full hover:shadow-lg hover:translate-y-[-2px]"
                >
                  Liên Hệ Hợp Tác Ngay
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -rotate-45 opacity-5 w-96 h-96">
            <Image
              src="/images/spoon-divider.svg"
              alt="Decorative"
              width={384}
              height={384}
              className="opacity-30"
            />
          </div>

          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 text-center mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Liên Hệ Với Chúng Tôi
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
              Chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tốt nhất cho
              bạn.
            </p>
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row gap-8 overflow-hidden relative group hover:shadow-2xl transition-shadow duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-yellow-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="md:w-1/2 space-y-6 relative z-10">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500 mr-2"
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
                    Địa chỉ
                  </h3>
                  <p className="text-gray-600 pl-7 text-lg">
                    123 Đường ABC, Quận XYZ, Thành Phố
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500 mr-2"
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
                    Điện thoại (Zalo)
                  </h3>
                  <a
                    href="tel:0123456789"
                    className="text-orange-600 text-2xl font-bold hover:underline focus-ring rounded pl-7 inline-block"
                  >
                    0123.456.789
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email
                  </h3>
                  <a
                    href="mailto:info@babymart.vn"
                    className="text-orange-600 hover:underline focus-ring rounded pl-7 text-lg"
                  >
                    info@babymart.vn
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500 mr-2"
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
                    Giờ làm việc
                  </h3>
                  <p className="text-gray-600 pl-7 text-lg">
                    Thứ 2 - Chủ Nhật: 8:00 - 20:00
                  </p>
                </div>
                <div className="relative w-full h-[250px] rounded-xl overflow-hidden shadow-lg group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <Image
                    src="/images/store.jpg"
                    alt="Cửa hàng"
                    fill
                    className="rounded-xl shadow-md object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="md:w-1/2 relative z-10">
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-3"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-3"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-3"
                      placeholder="0123 456 789"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-lg p-3"
                      placeholder="Nhập nội dung liên hệ..."
                    ></textarea>
                  </div>
                  <div>
                    <Button
                      type="submit"
                      variant="default"
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-lg py-6 rounded-xl transition-all duration-300 hover:shadow-lg relative group overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-orange-300/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span className="relative flex items-center justify-center gap-2">
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
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Gửi tin nhắn
                      </span>
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
