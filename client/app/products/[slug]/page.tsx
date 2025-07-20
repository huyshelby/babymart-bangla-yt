"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import ImageWithFallback from "@/components/ImageWithFallback";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { formatPrice } from "@/lib/utils";
import { products } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm",
      description: "Sản phẩm không tồn tại hoặc đã bị xóa.",
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0].src,
          width: 1200,
          height: 630,
          alt: product.images[0].alt,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "reviews"
  >("description");

  const relatedProducts = product.relatedProducts
    ? products
        .filter((p) => product.relatedProducts?.includes(p.id))
        .slice(0, 4)
    : [];

  const handleQuantityChange = (value: number) => {
    if (value < 1) return;
    if (value > product.stock) return;
    setQuantity(value);
  };

  return (
    <>
      <Header />

      <main className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumbs */}
          <nav className="flex mb-8 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/danh-muc/${product.category.toLowerCase()}`}
              className="hover:text-gray-700 transition-colors"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>

          {/* Main product showcase section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column: Product images gallery */}
            <div className="space-y-4">
              <div className="aspect-square relative rounded-lg overflow-hidden border border-gray-200 bg-white">
                <ImageWithFallback
                  src={mainImage.src}
                  fallbackSrc="/images/product-placeholder.jpg"
                  alt={mainImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Thumbnail gallery */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, i) => (
                  <button
                    key={i}
                    onClick={() => setMainImage(image)}
                    className={`aspect-square relative rounded-md overflow-hidden border ${
                      mainImage.src === image.src
                        ? "border-orange-500 ring-2 ring-orange-500/20"
                        : "border-gray-200 hover:border-orange-300"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={`${product.name} - Hình ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 25vw, 10vw"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right column: Product information */}
            <div className="space-y-6">
              {/* Product brand */}
              <div className="inline-block px-3 py-1 text-sm font-medium bg-orange-100 text-orange-800 rounded-full">
                {product.brand}
              </div>

              {/* Product name */}
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>

              {/* Product rating */}
              {product.reviews && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.reviews!.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.reviews.rating.toFixed(1)} ({product.reviews.count}{" "}
                    đánh giá)
                  </span>
                </div>
              )}

              {/* Price information */}
              <div className="py-4 border-t border-b border-gray-200">
                <div className="flex items-baseline gap-2 mb-2">
                  {product.salePrice ? (
                    <>
                      <span className="text-3xl font-bold text-orange-600">
                        {formatPrice(product.salePrice)}
                      </span>
                      <span className="text-xl text-gray-400 line-through">
                        {formatPrice(product.price)}
                      </span>
                      <span className="text-sm font-medium bg-orange-100 text-orange-800 px-2 py-0.5 rounded">
                        Tiết kiệm{" "}
                        {formatPrice(product.price - product.salePrice)}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-orange-600">
                      {formatPrice(product.price)}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `Còn ${product.stock} sản phẩm`
                    : "Hết hàng"}
                </p>
              </div>

              {/* Age range */}
              <div className="flex items-center text-sm text-gray-600">
                <span className="font-medium mr-2">Độ tuổi phù hợp:</span>
                <span>{product.ageRange}</span>
              </div>

              {/* Short description */}
              <p className="text-gray-700">{product.shortDescription}</p>

              {/* Quantity selector and CTA */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-700">Số lượng:</span>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                      className="px-3 py-2 border-r border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(parseInt(e.target.value) || 1)
                      }
                      min="1"
                      max={product.stock}
                      className="w-12 text-center border-0 focus:ring-0 focus:outline-none"
                    />
                    <button
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product.stock}
                      className="px-3 py-2 border-l border-gray-300 text-gray-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Call-to-action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="default"
                    size="lg"
                    className="flex-1 bg-orange-500 hover:bg-orange-600"
                    disabled={product.stock === 0}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50"
                    disabled={product.stock === 0}
                  >
                    Mua ngay
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 flex flex-wrap gap-2">
                {product.tags.map((tag, i) => (
                  <Link
                    key={i}
                    href={`/tag/${tag}`}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed information tabs */}
          <div className="mt-16">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8" aria-label="Tabs">
                {(["description", "specifications", "reviews"] as const).map(
                  (tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`${
                        activeTab === tab
                          ? "border-orange-500 text-orange-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      } py-4 px-1 text-center border-b-2 font-medium text-sm sm:text-base transition-colors capitalize`}
                    >
                      {tab === "description" && "Mô tả"}
                      {tab === "specifications" && "Thông số kỹ thuật"}
                      {tab === "reviews" && "Đánh giá"}
                    </button>
                  )
                )}
              </nav>
            </div>

            <div className="py-8 animate-fade-in">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="whitespace-pre-line">{product.description}</p>
                  <h3 className="text-xl font-semibold mt-8 mb-4">
                    Đặc điểm nổi bật
                  </h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "specifications" && (
                <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {product.specifications.map((spec, i) => (
                        <tr
                          key={i}
                          className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                        >
                          <td className="px-6 py-4 text-sm font-medium text-gray-700">
                            {spec.key}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === "reviews" && (
                <div>
                  {product.reviews ? (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-semibold">
                            Đánh giá của khách hàng
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {product.reviews.count} đánh giá
                          </p>
                        </div>
                        <Button variant="default" size="sm">
                          Viết đánh giá
                        </Button>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-5xl font-bold text-gray-900">
                              {product.reviews.rating.toFixed(1)}
                            </div>
                            <div className="flex mt-2 justify-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-5 h-5 ${
                                    i < Math.floor(product.reviews!.rating)
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {product.reviews.count} đánh giá
                            </div>
                          </div>

                          <div className="flex-1 pl-6 border-l">
                            {[5, 4, 3, 2, 1].map((star) => (
                              <div
                                key={star}
                                className="flex items-center mb-2"
                              >
                                <div className="w-10 text-sm text-gray-600">
                                  {star} sao
                                </div>
                                <div className="w-full h-2 mx-2 bg-gray-200 rounded">
                                  <div
                                    className="h-2 bg-yellow-400 rounded"
                                    style={{
                                      width: `${Math.random() * 100}%`,
                                    }}
                                  ></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Sample reviews would go here */}
                      <div className="space-y-8 divide-y divide-gray-200">
                        <p className="text-center text-gray-500 py-12">
                          Không có đánh giá nào hiển thị.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-500">
                        Chưa có đánh giá nào cho sản phẩm này.
                      </p>
                      <Button variant="default" size="sm" className="mt-4">
                        Viết đánh giá đầu tiên
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <section className="mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Sản phẩm liên quan
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.slug}`}
                    className="group block"
                  >
                    <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={relatedProduct.images[0].src}
                        alt={relatedProduct.images[0].alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-2 text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-1">
                      {relatedProduct.shortDescription}
                    </p>
                    <p className="mt-1 text-sm font-medium text-orange-600">
                      {relatedProduct.salePrice
                        ? formatPrice(relatedProduct.salePrice)
                        : formatPrice(relatedProduct.price)}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
