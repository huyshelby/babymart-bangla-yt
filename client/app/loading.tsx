export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#FFFBEB]">
      <div className="flex flex-col items-center gap-2">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-300 border-t-green-700"></div>
        <p className="text-lg font-medium text-green-700">Đang tải...</p>
      </div>
    </div>
  );
} 