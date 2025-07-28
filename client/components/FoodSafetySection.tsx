"use client";

import Image from "next/image";
import ImageWithFallback from "./ImageWithFallback";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const FoodSafetySection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [bottomImageRef, bottomImageInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="thuc-pham-dau-vao"
      className="py-16 bg-gradient-to-b from-[#F8F9FA] to-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-3">
            <div className="h-[1px] w-12 bg-[#27AE60]"></div>
            <span className="mx-4 text-sm text-[#27AE60] font-medium tracking-wider">
              AN TOÀN VỆ SINH
            </span>
            <div className="h-[1px] w-12 bg-[#27AE60]"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#212529] mb-2">
            THỰC PHẨM ĐẦU VÀO SẠCH
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cam kết chất lượng - Đảm bảo sức khỏe - Tạo niềm tin
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            {/* Left column - Image */}
            <div className="overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.01] hover:shadow-green-100">
              <div className="relative group aspect-[4/3]">
                <div className="absolute inset-0 bg-[#27AE60] mix-blend-multiply opacity-10 group-hover:opacity-0 transition-opacity z-10"></div>
                <ImageWithFallback
                  src="/images/thucphamdauvao/anh1.jpg"
                  fallbackSrc="https://placehold.co/800x600/27AE60/FFFFFF?text=Thực+Phẩm+Đầu+Vào+Sạch"
                  alt="Thực phẩm đầu vào sạch"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right column - Content */}
            <div className="space-y-6">
              <div className="p-1 inline-block bg-green-50 rounded-full">
                <div className="w-12 h-12 rounded-full bg-[#27AE60]/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#27AE60]"
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
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Cam kết chất lượng
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Chúng tôi cam kết sử dụng nguồn thực phẩm đầu vào sạch, đảm bảo
                an toàn vệ sinh thực phẩm theo các tiêu chuẩn nghiêm ngặt.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Tất cả nguyên liệu được kiểm soát chặt chẽ từ khâu nhập hàng,
                với quy trình kiểm tra nghiêm ngặt và lựa chọn kỹ càng từ các
                nhà cung cấp uy tín.
              </p>
              <div className="pt-4 space-y-4">
                {[
                  "Nguồn thịt bò tươi, chất lượng cao",
                  "Gia vị tự nhiên, không chất bảo quản",
                  "Đảm bảo tiêu chuẩn vệ sinh an toàn thực phẩm",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-[#27AE60]/20 flex-shrink-0 flex items-center justify-center mt-0.5 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#27AE60]"
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
                    </div>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom image */}
          {/* <motion.div
            ref={bottomImageRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              bottomImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 overflow-hidden rounded-xl shadow-2xl"
          >
            <div className="relative group aspect-[21/9]">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
              <ImageWithFallback
                src="/images/thucphamdauvao/anh2.jpg"
                fallbackSrc="https://placehold.co/1200x500/27AE60/FFFFFF?text=Quy+Trình+Kiểm+Soát+Chất+Lượng"
                alt="Quy trình kiểm soát chất lượng"
                fill
                sizes="100vw"
                className="object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 z-20">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-2xl transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-xl font-bold text-[#27AE60] mb-2">
                    Quy trình kiểm soát chất lượng
                  </h3>
                  <p className="text-gray-800 text-center">
                    Quy trình kiểm soát chất lượng nghiêm ngặt đảm bảo thực phẩm
                    an toàn đến tay khách hàng
                  </p>
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};
