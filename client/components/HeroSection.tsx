import Link from "next/link";

interface HeroSectionProps {
  isLoaded: boolean;
}

export const HeroSection = ({ isLoaded }: HeroSectionProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.005), rgba(0, 0, 0, 0.7)), url("/images/background/sanpham.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundAttachment: "fixed",
          filter: "brightness(0.95) contrast(1.1)",
        }}
      ></div>

      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/images/noise.svg')`,
          backgroundSize: "200px",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative py-8">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-transparent via-green-400/40 to-transparent rounded-full"></div>

        {/* Main content with animations */}
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000 ease-out`}
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4 text-white drop-shadow-lg">
              <span className="animate-text-shimmer inline-block bg-gradient-to-r from-white via-green-200 to-white bg-clip-text text-transparent">
                CÔNG TY THỰC PHẨM CHẾ BIẾN PHẨM BÒ NÉ HẠNH
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
            <p className="text-base md:text-lg font-medium mb-6 !text-white max-w-2xl mx-auto drop-shadow-md">
              Mang đến hương vị truyền thống, chuẩn Sài Gòn với nguyên liệu tươi
              ngon hàng đầu
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/60"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full"></div>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/60"></div>
            </div>
          </div>

          <div
            className={`transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000 delay-500 ease-out`}
          >
            <div className="glass-card relative overflow-hidden p-5 md:p-7 rounded-2xl backdrop-blur-md border border-white/20 shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-[#27AE60]/30 to-[#27AE60]/50 z-0"></div>
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-green-400/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 space-y-2 md:space-y-4">
                <div className="flex items-center justify-center space-x-3 mb-1 md:mb-2">
                  <div className="h-[2px] w-10 bg-gradient-to-r from-transparent to-white/80 rounded-full"></div>
                  <p
                    className="text-lg md:text-2xl font-bold !text-white"
                    style={{
                      textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    UY TÍN – AN TOÀN – CHUẨN VỊ SÀI GÒN
                  </p>
                  <div className="h-[2px] w-10 bg-gradient-to-l from-transparent to-white/80 rounded-full"></div>
                </div>

                <p
                  className="relative z-10 text-xl md:text-3xl font-bold !text-white"
                  style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}
                >
                  NGUYÊN LIỆU TUYỂN CHỌN - GIÁ CẢ HỢP LÍ
                </p>

                <p className="text-sm md:text-base !text-white drop-shadow-sm">
                  Phục vụ hơn 100+ nhà hàng & quán ăn tại Đà Nẵng
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`mt-6 md:mt-8 flex flex-wrap gap-4 justify-center transform ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } transition-all duration-1000 delay-700 ease-out`}
          >
            <Link
              href="#san-pham"
              className="px-6 md:px-8 py-2.5 md:py-3.5 bg-white hover:bg-white/90 text-[#27AE60] font-bold rounded-full transform hover:scale-105 transition-transform shadow-lg flex items-center border border-white/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 mr-2 text-[#27AE60]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="text-[#27AE60]">Khám Phá Sản Phẩm</span>
            </Link>
            <Link
              href="#lien-he"
              className="px-6 md:px-8 py-2.5 md:py-3.5 bg-gradient-to-r from-[#27AE60] to-[#219653] text-white font-bold rounded-full transform hover:scale-105 hover:shadow-[0_0_15px_rgba(39,174,96,0.5)] transition-all shadow-lg flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 md:h-5 md:w-5 mr-2 text-white"
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
              <span className="text-white">Liên Hệ Ngay</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center">
        <p className="text-white/80 text-xs mb-2">Khám phá thêm</p>
        <div className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center group hover:border-white/80 transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white/80 group-hover:text-white transition-colors"
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
  );
};
