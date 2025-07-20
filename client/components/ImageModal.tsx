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

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Add a small delay to allow the fade out animation to complete
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-250 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white p-4 rounded-lg max-w-4xl max-h-full overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{imageTitle}</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black text-2xl"
          >
            &times;
          </button>
        </div>
        <div className="relative w-full h-[600px]">
          <Image
            src={imageSrc}
            alt={imageTitle}
            fill
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
