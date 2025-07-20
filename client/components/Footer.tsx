export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} BabyMart - Đồ Dùng Trẻ Em. All
          Rights Reserved.
        </p>
        <p className="text-sm text-gray-400 mt-2">
          Website được xây dựng và phát triển bởi BabyMart Team.
        </p>
      </div>
    </footer>
  );
}
