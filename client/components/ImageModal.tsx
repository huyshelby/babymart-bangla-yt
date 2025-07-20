"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle: string;
};

export function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
}: ImageModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Add a small delay to trigger the animation after the component is mounted
      setTimeout(() => {
        setIsAnimatingIn(true);
      }, 10);
    } else {
      setIsAnimatingIn(false);
      // Add a small delay to allow the fade out animation to complete
      const timer = setTimeout(() => {
        setIsVisible(false);
        setIsLoading(true);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-all duration-300 ${
        isAnimatingIn ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-gradient-to-br from-white to-orange-50 p-6 rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl transition-all duration-500 border border-orange-100 relative ${
          isAnimatingIn
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-8"
        }`}
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-100 opacity-10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-100 opacity-10 rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 pointer-events-none"></div>

        <div className="flex justify-between items-center mb-6 relative z-10">
          <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            {imageTitle}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="relative w-full h-[600px] bg-white rounded-xl overflow-hidden shadow-inner border border-orange-100 p-4">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={imageSrc}
            alt={imageTitle}
            fill
            className={`w-full h-auto object-contain transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoadingComplete={() => setIsLoading(false)}
          />
        </div>

        {/* Additional information or badge */}
        <div className="absolute top-6 right-6 bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1.5 rounded-full z-10">
          Chứng nhận chính thức
        </div>
      </div>
    </div>
  );
}
