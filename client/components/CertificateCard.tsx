"use client";

import Image from "next/image";
import { useState } from "react";

type CertificateCardProps = {
  imageSrc: string;
  title: string;
  onClick: () => void;
};

export function CertificateCard({
  imageSrc,
  title,
  onClick,
}: CertificateCardProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="cursor-pointer group" onClick={onClick}>
      <div className="bg-gradient-to-br from-white to-orange-50 p-5 rounded-xl shadow-md border border-orange-100 group-hover:shadow-xl group-hover:border-orange-300 transition-all duration-300 transform group-hover:scale-[1.02] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-orange-100 opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500"></div>

        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-white p-2 border border-orange-100 transition-all duration-300 group-hover:border-orange-200">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={`object-contain mx-auto transition-all duration-500 ${
              isLoading ? "opacity-0" : "opacity-100"
            } group-hover:scale-105`}
            onLoadingComplete={() => setIsLoading(false)}
          />

          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
        </div>

        <h3 className="font-semibold text-gray-700 text-center relative">
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:opacity-100 transition-opacity">
            {title}
          </span>
          <div className="h-0.5 w-0 bg-gradient-to-r from-orange-400 to-red-400 mx-auto group-hover:w-full transition-all duration-300 mt-1"></div>
        </h3>

        {/* Small badge */}
        <div className="absolute top-3 right-3 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
          Xem
        </div>
      </div>
    </div>
  );
}
