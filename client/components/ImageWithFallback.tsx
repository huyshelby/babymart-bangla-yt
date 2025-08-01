"use client";

import { useState, useEffect, useRef, CSSProperties } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "alt"> {
  src: string;
  fallbackSrc: string;
  alt: string;
  title?: string;
  placeholderType?: "blur" | "pulse" | "gradient";
  placeholderColor?: string;
  showPlaceholder?: boolean;
  onImageError?: (error: Error) => void;
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
  width,
  height,
  placeholderType = "pulse",
  placeholderColor = "#f3f4f6",
  showPlaceholder = true,
  onImageError,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [imgError, setImgError] = useState<boolean>(false);
  const [showFallbackPlaceholder, setShowFallbackPlaceholder] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoaded(false);
    setImgError(false);
    setShowFallbackPlaceholder(false);
    
    // Clear any pending timeouts
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [src]);

  // Add height: '100%' and width: '100%' to the container div when fill is true
  const containerStyle: CSSProperties = fill
    ? { position: "relative" as const, height: "100%", width: "100%" }
    : {};

  // Create image props to ensure we never use both fill and width/height
  const imageProps = (() => {
    // If fill is explicitly provided, prioritize it and remove width/height
    if (fill === true) {
      return {
        fill: true,
        width: undefined,
        height: undefined
      };
    } 
    // If width and height are provided, use them and ensure fill is undefined
    else if (width && height) {
      return {
        fill: undefined,
        width,
        height
      };
    } 
    // Fallback for edge cases
    else {
      return {
        fill: fill || undefined,
        width: width || undefined,
        height: height || undefined
      };
    }
  })();

  // Handle error safely with fallback
  const handleError = () => {
    if (!imgError) {
      // Show placeholder briefly before loading fallback
      setIsLoaded(false);
      setShowFallbackPlaceholder(true);
      
      timerRef.current = setTimeout(() => {
        setImgSrc(fallbackSrc);
        setImgError(true);
        setShowFallbackPlaceholder(false);
        
        // Call custom error handler if provided
        if (onImageError) {
          onImageError(new Error(`Failed to load image: ${src}`));
        }
      }, 300);
    }
  };

  // Handle successful image load
  const handleLoad = () => {
    setIsLoaded(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  // Render placeholder based on type
  const renderPlaceholder = () => {
    if (!showPlaceholder) return null;
    
    switch (placeholderType) {
      case "blur":
        return (
          <div 
            className="absolute inset-0 bg-gray-200 animate-pulse blur-sm"
            style={{ backgroundColor: placeholderColor }}
            aria-hidden="true"
          />
        );
      case "gradient":
        return (
          <div 
            className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-gradient-x"
            style={{ backgroundSize: "200% 200%" }}
            aria-hidden="true"
          />
        );
      case "pulse":
      default:
        return (
          <div 
            className="absolute inset-0 animate-pulse"
            style={{ backgroundColor: placeholderColor }}
            aria-hidden="true"
          />
        );
    }
  };

  return (
    <div className="relative" style={containerStyle}>
      <Image
        {...props}
        {...imageProps}
        src={imgSrc}
        alt={alt}
        title={title || alt}
        onError={handleError}
        onLoad={handleLoad}
        loading={priority ? "eager" : loading}
        priority={priority}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        fetchPriority={priority ? "high" : "auto"}
        className={`transition-opacity duration-300 ${props.className || ""} ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
      
      {/* Placeholder while loading */}
      {!isLoaded && !showFallbackPlaceholder && renderPlaceholder()}
      
      {/* Fallback placeholder during transition */}
      {showFallbackPlaceholder && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          aria-hidden="true"
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#27AE60]"></div>
        </div>
      )}
    </div>
  );
}