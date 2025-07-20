import Image from "next/image";

type ProductCardProps = {
  imageSrc: string;
  name: string;
  description: string;
  price: string;
  unit?: string;
};

export function ProductCard({
  imageSrc,
  name,
  description,
  price,
  unit,
}: ProductCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300">
      <div className="relative w-full h-48">
        <Image src={imageSrc} alt={name} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="text-2xl font-bold text-orange-600">
          {price}{" "}
          {unit && (
            <span className="text-base font-normal text-gray-500">
              / {unit}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
