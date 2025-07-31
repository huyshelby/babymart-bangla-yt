import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FFFBEB] p-4 text-center">
      <h1 className="mb-4 text-5xl font-bold text-green-800">404</h1>
      <h2 className="mb-6 text-2xl font-semibold">Không tìm thấy trang</h2>
      <p className="mb-8 max-w-md text-gray-600">
        Trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </p>
      <Link
        href="/"
        className="rounded-md bg-green-700 px-6 py-2 text-white transition-colors hover:bg-green-800"
      >
        Về trang chủ
      </Link>
    </div>
  );
} 