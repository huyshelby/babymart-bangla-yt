"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  fallbackSrc: string;
  alt: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc,
  alt,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className="relative">
      <Image
        {...props}
        src={imgSrc}
        alt={alt}
        onError={() => setImgSrc(fallbackSrc)}
        onLoad={() => setIsLoaded(true)}
        className={`transition-opacity duration-300 ${props.className || ""} ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse"></div>
      )}
    </div>
  );
}
