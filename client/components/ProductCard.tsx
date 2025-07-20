"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { Product } from "@/types/product";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export function ProductCard({
  product,
  className = "",
  priority = false,
}: {
  product: Product;
  className?: string;
  priority?: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>(
    {
      threshold: 0.1,
      rootMargin: "200px",
    },
    true
  );

  return (
    <div
      ref={ref}
      className={`product-card group ${className} ${
        isLoaded ? "animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="product-card-image">
        <Link href={`/products/${product.slug}`} aria-label={product.name}>
          <div className="absolute inset-0">
            {(isInView || priority) && (
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setIsLoaded(true)}
                priority={priority}
              />
            )}
          </div>

          {product.stock <= 5 && product.stock > 0 && (
            <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Còn {product.stock} sản phẩm
            </div>
          )}

          {product.stock === 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Hết hàng
            </div>
          )}

          {product.salePrice && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {Math.round(
                ((product.price - product.salePrice) / product.price) * 100
              )}
              % GIẢM
            </div>
          )}
        </Link>
      </div>

      <div className="product-card-content">
        <div className="mb-1 text-xs text-gray-500">{product.brand}</div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="product-card-title">{product.name}</h3>
        </Link>

        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {product.shortDescription}
        </p>

        {product.reviews && (
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.reviews.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-xs text-gray-500">
                ({product.reviews.count})
              </span>
            </div>
          </div>
        )}

        <div className="flex items-end justify-between mt-auto">
          <div>
            {product.salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-orange-600">
                  {formatPrice(product.salePrice)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.price)}
                </span>
              </div>
            ) : (
              <span className="text-lg font-bold text-orange-600">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-medium text-orange-500 hover:text-orange-600 transition-colors focus-ring rounded-full px-2 py-1"
          >
            Chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}
