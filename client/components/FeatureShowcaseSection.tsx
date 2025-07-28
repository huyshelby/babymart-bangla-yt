"use client";

import { useState } from "react";
import {
  BalancedLayout,
  ImageTextLayout,
  TextImageLayout,
  CardGridLayout,
} from "./BalancedLayout";
import Image from "next/image";

export const FeatureShowcaseSection = () => {
  const [activeTab, setActiveTab] = useState("quality");

  const features = {
    quality: {
      title: "Chất Lượng Hàng Đầu",
      description:
        "Chúng tôi đặt chất lượng lên hàng đầu trong mỗi sản phẩm. Từ nguồn nguyên liệu tươi sạch đến quy trình chế biến nghiêm ngặt, mọi khâu đều được kiểm soát kỹ lưỡng để đảm bảo bạn nhận được những sản phẩm hoàn hảo nhất.",
      features: [
        "Nguyên liệu được tuyển chọn kỹ càng",
        "Quy trình sản xuất theo tiêu chuẩn HACCP",
        "Bảo quản lạnh đúng tiêu chuẩn vệ sinh",
        "Đóng gói an toàn, bảo vệ hương vị",
      ],
      image: "/images/thucphamdauvao/anh1.jpg",
    },
    service: {
      title: "Dịch Vụ Chuyên Nghiệp",
      description:
        "Đội ngũ nhân viên được đào tạo chuyên nghiệp, tận tâm với khách hàng. Chúng tôi đảm bảo giao hàng đúng hẹn, chính xác và với tâm thế phục vụ cao nhất để mang đến trải nghiệm tốt nhất cho khách hàng.",
      features: [
        "Giao hàng nhanh chóng trong vòng 24h",
        "Đội ngũ tư vấn nhiệt tình, am hiểu sản phẩm",
        "Hỗ trợ khách hàng 24/7",
        "Chính sách đổi trả linh hoạt",
      ],
      image: "/images/phuongcham/phuongcham1.jpg",
    },
    value: {
      title: "Giá Trị Bền Vững",
      description:
        "Chúng tôi không chỉ cung cấp sản phẩm mà còn xây dựng mối quan hệ đối tác lâu dài. Bằng cách tập trung vào giá trị bền vững, chúng tôi giúp doanh nghiệp của bạn phát triển cùng chúng tôi.",
      features: [
        "Chính sách giá cả cạnh tranh, minh bạch",
        "Ưu đãi đặc biệt cho đối tác thân thiết",
        "Hỗ trợ kỹ thuật và tư vấn chuyên sâu",
        "Cam kết đồng hành cùng thành công của bạn",
      ],
      image: "/images/monamthuc/anh1.jpg",
    },
  };

  const activeFeature = features[activeTab];

  // Feature cards for bottom section
  const featureCards = [
    {
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Chất Lượng Đảm Bảo",
      description:
        "Nguyên liệu tươi sạch, đảm bảo vệ sinh an toàn thực phẩm theo tiêu chuẩn quốc tế.",
    },
    {
      icon: (
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Giao Hàng Nhanh Chóng",
      description:
        "Đặt hàng dễ dàng, giao hàng nhanh chóng trong vòng 24h tại Đà Nẵng.",
    },
    {
      icon: (
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
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Thanh Toán Linh Hoạt",
      description:
        "Nhiều phương thức thanh toán tiện lợi, an toàn và bảo mật cao.",
    },
    {
      icon: (
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
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Hỗ Trợ 24/7",
      description:
        "Đội ngũ tư vấn viên nhiệt tình, sẵn sàng hỗ trợ mọi lúc mọi nơi.",
    },
  ];

  // Tab selection component
  const TabSelector = () => (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
      {Object.keys(features).map((key) => (
        <button
          key={key}
          className={`px-6 py-3 rounded-full transition-all ${
            activeTab === key
              ? "bg-[#27AE60] text-white shadow-md"
              : "bg-white text-[#212529] hover:bg-gray-100"
          }`}
          onClick={() => setActiveTab(key)}
        >
          {key === "quality" && "Chất Lượng"}
          {key === "service" && "Dịch Vụ"}
          {key === "value" && "Giá Trị"}
        </button>
      ))}
    </div>
  );

  // Main feature content using BalancedLayout
  const MainFeature = () => (
    <ImageTextLayout
      imageSrc={activeFeature.image}
      imageAlt={activeFeature.title}
      title={activeFeature.title}
      description={activeFeature.description}
      features={activeFeature.features}
      ctaText="Tìm hiểu thêm"
      ctaLink="#san-pham"
      reverseOnMobile={activeTab === "service"}
      bgColor="bg-gray-50"
      imageClassName="shadow-xl"
    />
  );

  return (
    <section
      id="tinh-nang"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#212529] mb-4">
            Tại Sao Chọn Chúng Tôi?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá những giá trị mà chúng tôi mang đến cho doanh nghiệp của
            bạn, từ chất lượng sản phẩm đến dịch vụ tận tâm.
          </p>
        </div>

        <TabSelector />

        <div className="mb-20">
          <MainFeature />
        </div>

        <div className="mt-20 pt-12 border-t border-gray-200">
          <CardGridLayout
            title="Dịch Vụ Của Chúng Tôi"
            subtitle="Cam kết mang đến những dịch vụ tốt nhất, đáp ứng mọi nhu cầu của doanh nghiệp bạn"
            cards={featureCards}
          />
        </div>
      </div>
    </section>
  );
};
