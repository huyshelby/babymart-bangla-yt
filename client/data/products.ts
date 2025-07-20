import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "p001",
    name: "Bộ Áo Quần Cotton Hữu Cơ cho Bé",
    slug: "bo-ao-quan-cotton-huu-co-cho-be",
    description:
      "Bộ quần áo trẻ em cao cấp được làm từ 100% cotton hữu cơ, không chứa hóa chất độc hại, an toàn cho làn da nhạy cảm của bé. Chất vải mềm mại, thấm hút mồ hôi tốt, giúp bé luôn thoải mái và khô ráo. Thiết kế dễ thương với họa tiết động vật đáng yêu, phù hợp cho cả bé trai và bé gái. Sản phẩm được sản xuất tại Việt Nam, đạt tiêu chuẩn an toàn Châu Âu về chất lượng vải và phụ kiện.",
    shortDescription: "Bộ quần áo cotton hữu cơ mềm mại, an toàn cho làn da bé",
    specifications: [
      { key: "Chất liệu", value: "100% cotton hữu cơ" },
      { key: "Độ tuổi", value: "6-24 tháng" },
      { key: "Kích thước", value: "S, M, L" },
      { key: "Màu sắc", value: "Trắng, Xanh nhạt, Hồng nhạt" },
      { key: "Xuất xứ", value: "Việt Nam" },
      {
        key: "Bảo quản",
        value: "Giặt máy ở nhiệt độ thấp, không sử dụng chất tẩy",
      },
    ],
    features: [
      "100% cotton hữu cơ, không hóa chất",
      "Mềm mại, thoáng khí, thấm hút tốt",
      "Không gây kích ứng da",
      "Thiết kế thoải mái, dễ mặc, dễ thay",
      "Màu sắc an toàn, không phai màu",
    ],
    price: 250000,
    salePrice: 199000,
    category: "Quần áo",
    images: [
      {
        src: "/images/products/clothing-1.jpg",
        alt: "Bộ quần áo màu trắng với họa tiết gấu",
      },
      {
        src: "/images/products/clothing-2.jpg",
        alt: "Bộ quần áo màu xanh nhạt",
      },
      {
        src: "/images/products/clothing-3.jpg",
        alt: "Bộ quần áo màu hồng nhạt",
      },
      { src: "/images/products/clothing-4.jpg", alt: "Chi tiết chất liệu vải" },
    ],
    videos: [
      {
        src: "/videos/product-demo-1.mp4",
        thumbnail: "/images/products/video-thumb-1.jpg",
      },
    ],
    stock: 50,
    ageRange: "6-24 tháng",
    brand: "BabyOrganic",
    tags: ["quần áo", "cotton hữu cơ", "trẻ em", "thời trang bé"],
    reviews: {
      rating: 4.8,
      count: 124,
    },
    relatedProducts: ["p002", "p003", "p004"],
  },
  {
    id: "p002",
    name: "Bộ Đồ Chơi Phát Triển Kỹ Năng Vận Động",
    slug: "bo-do-choi-phat-trien-ky-nang-van-dong",
    description:
      "Bộ đồ chơi phát triển kỹ năng vận động được thiết kế đặc biệt cho trẻ từ 1-3 tuổi, giúp phát triển các kỹ năng vận động tinh và thô. Bộ sản phẩm bao gồm các khối xếp hình đa dạng màu sắc và kích thước, các mảnh ghép, vòng tròn và hình khối phù hợp với độ tuổi. Sản phẩm được làm từ gỗ tự nhiên cao cấp, sơn màu an toàn không chứa chì và kim loại nặng, đã qua kiểm nghiệm an toàn cho trẻ em.",
    shortDescription:
      "Bộ đồ chơi giáo dục phát triển kỹ năng vận động cho trẻ 1-3 tuổi",
    specifications: [
      { key: "Chất liệu", value: "Gỗ tự nhiên, sơn an toàn" },
      { key: "Độ tuổi", value: "1-3 tuổi" },
      { key: "Số lượng chi tiết", value: "25 mảnh" },
      { key: "Kích thước hộp", value: "30 x 20 x 10 cm" },
      { key: "Xuất xứ", value: "Việt Nam" },
      { key: "Chứng nhận", value: "Đạt tiêu chuẩn EN71, ASTM F963" },
    ],
    features: [
      "Phát triển kỹ năng vận động tinh và thô",
      "Kích thích trí tò mò và sáng tạo",
      "Rèn luyện khả năng tập trung",
      "Nhận biết màu sắc và hình dáng",
      "Vật liệu tự nhiên, an toàn cho trẻ",
    ],
    price: 350000,
    category: "Đồ chơi",
    images: [
      {
        src: "/images/products/toy-1.jpg",
        alt: "Bộ đồ chơi phát triển vận động",
      },
      {
        src: "/images/products/toy-2.jpg",
        alt: "Bộ đồ chơi với nhiều màu sắc",
      },
      {
        src: "/images/products/toy-3.jpg",
        alt: "Trẻ đang chơi với bộ đồ chơi",
      },
      { src: "/images/products/toy-4.jpg", alt: "Chi tiết các mảnh ghép" },
    ],
    videos: [
      {
        src: "/videos/product-demo-2.mp4",
        thumbnail: "/images/products/video-thumb-2.jpg",
      },
    ],
    stock: 35,
    ageRange: "1-3 tuổi",
    brand: "KidWood",
    tags: ["đồ chơi", "phát triển", "gỗ tự nhiên", "giáo dục"],
    reviews: {
      rating: 4.9,
      count: 87,
    },
    relatedProducts: ["p001", "p004", "p005"],
  },
  {
    id: "p003",
    name: "Sữa Công Thức Hữu Cơ Dành Cho Trẻ 0-6 Tháng",
    slug: "sua-cong-thuc-huu-co-danh-cho-tre-0-6-thang",
    description:
      "Sữa công thức hữu cơ cao cấp dành cho trẻ sơ sinh từ 0-6 tháng, được sản xuất từ sữa bò hữu cơ không sử dụng hormone tăng trưởng và kháng sinh. Bổ sung DHA, ARA, choline và lutein hỗ trợ phát triển não bộ và thị lực. Sữa chứa prebiotics GOS/FOS giúp hệ tiêu hóa khỏe mạnh và tăng cường hệ miễn dịch. Không chứa GMO, đường tinh luyện, hương liệu và màu nhân tạo. Đạt tiêu chuẩn hữu cơ Châu Âu và Mỹ.",
    shortDescription:
      "Sữa công thức hữu cơ cao cấp, hỗ trợ phát triển toàn diện cho trẻ 0-6 tháng",
    specifications: [
      { key: "Độ tuổi phù hợp", value: "0-6 tháng" },
      { key: "Khối lượng", value: "800g/hộp" },
      {
        key: "Thành phần",
        value: "Sữa bò hữu cơ, DHA, ARA, Choline, Lutein, Prebiotics GOS/FOS",
      },
      { key: "Chứng nhận", value: "Organic EU, USDA Organic" },
      { key: "Xuất xứ", value: "New Zealand" },
      { key: "Hạn sử dụng", value: "24 tháng kể từ ngày sản xuất" },
    ],
    features: [
      "100% nguyên liệu hữu cơ, không GMO",
      "Bổ sung DHA và ARA hỗ trợ phát triển não bộ",
      "Prebiotics GOS/FOS hỗ trợ hệ tiêu hóa",
      "Không chứa đường tinh luyện, hương liệu và màu nhân tạo",
      "Hệ dưỡng chất toàn diện cho sự phát triển của trẻ",
    ],
    price: 580000,
    salePrice: 495000,
    category: "Dinh dưỡng",
    images: [
      {
        src: "/images/products/formula-1.jpg",
        alt: "Hộp sữa công thức hữu cơ",
      },
      {
        src: "/images/products/formula-2.jpg",
        alt: "Chi tiết thành phần dinh dưỡng",
      },
      { src: "/images/products/formula-3.jpg", alt: "Bảng so sánh dưỡng chất" },
      { src: "/images/products/formula-4.jpg", alt: "Chứng nhận hữu cơ" },
    ],
    stock: 100,
    ageRange: "0-6 tháng",
    brand: "NatureBaby",
    tags: ["sữa công thức", "hữu cơ", "dinh dưỡng", "trẻ sơ sinh"],
    reviews: {
      rating: 4.7,
      count: 156,
    },
    relatedProducts: ["p006", "p007", "p008"],
  },
  {
    id: "p004",
    name: "Tã Quần Siêu Mềm Mại Size M (6-11kg)",
    slug: "ta-quan-sieu-mem-mai-size-m-6-11kg",
    description:
      "Tã quần siêu mềm mại cao cấp với công nghệ thấm hút 3 chiều, giúp thấm hút nhanh và giữ khô lâu đến 12 giờ. Bề mặt tiếp xúc làm từ vải không dệt mềm mịn như cotton, giúp tránh hăm tã và kích ứng da. Thiết kế ôm khít nhưng không gây cảm giác bó, cho bé thoải mái vận động. Dễ dàng tháo lắp nhờ đai quần co giãn 360 độ và vạch báo thay tã thông minh. Không chứa paraben, không thử nghiệm trên động vật.",
    shortDescription:
      "Tã quần cao cấp với công nghệ thấm hút 3 chiều, mềm mại và không gây hăm tã",
    specifications: [
      { key: "Size", value: "M (6-11kg)" },
      { key: "Số lượng", value: "76 miếng/gói" },
      { key: "Thời gian thấm hút", value: "Lên đến 12 giờ" },
      {
        key: "Chất liệu",
        value: "Bề mặt vải không dệt mềm mại, lõi thấm hút 3 chiều",
      },
      { key: "Đặc tính", value: "Không paraben, không hương liệu" },
      { key: "Xuất xứ", value: "Nhật Bản" },
    ],
    features: [
      "Công nghệ thấm hút 3 chiều, khô thoáng 12 giờ",
      "Bề mặt mềm mại như cotton, không gây hăm tã",
      "Thiết kế ôm khít, không cản trở vận động",
      "Vạch báo thay tã thông minh",
      "Không chứa paraben và các chất gây hại",
    ],
    price: 380000,
    category: "Chăm sóc",
    images: [
      { src: "/images/products/diaper-1.jpg", alt: "Tã quần siêu mềm mại" },
      { src: "/images/products/diaper-2.jpg", alt: "Cấu tạo 3 lớp của tã" },
      { src: "/images/products/diaper-3.jpg", alt: "Bề mặt tã mềm mại" },
      { src: "/images/products/diaper-4.jpg", alt: "Đóng gói sản phẩm" },
    ],
    stock: 200,
    ageRange: "6-18 tháng",
    brand: "BabySoft",
    tags: ["tã quần", "chăm sóc bé", "không hăm tã"],
    reviews: {
      rating: 4.6,
      count: 320,
    },
    relatedProducts: ["p001", "p003", "p007"],
  },
];
