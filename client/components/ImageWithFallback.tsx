"use client";

import { useState, CSSProperties } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  fallbackSrc: string;
  alt: string;
  title?: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  fill,
  title,
  priority = false,
  loading = "lazy",
  sizes,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Add height: '100%' and width: '100%' to the container div when fill is true
  // This ensures the parent container properly sizes the Image component
  const containerStyle: CSSProperties = fill
    ? { position: "relative" as const, height: "100%", width: "100%" }
    : {};

  return (
    <div className="relative" style={containerStyle}>
      <Image
        {...props}
        fill={fill}
        src={imgSrc}
        alt={alt}
        title={title || alt}
        onError={() => setImgSrc(fallbackSrc)}
        onLoad={() => setIsLoaded(true)}
        loading={priority ? "eager" : loading}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        fetchPriority={priority ? "high" : "auto"}
        className={`transition-opacity duration-300 ${props.className || ""} ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" aria-hidden="true"></div>
      )}
    </div>
  );
}
