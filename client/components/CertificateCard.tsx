"use client";

import Image from "next/image";

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
  return (
    <div className="cursor-pointer group" onClick={onClick}>
      <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 group-hover:shadow-xl group-hover:border-orange-500 transition">
        <div className="relative w-full h-48 mb-4">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-contain mx-auto"
          />
        </div>
        <h3 className="font-semibold text-gray-700">{title}</h3>
      </div>
    </div>
  );
}
