export const AboutSection = () => {
  return (
    <section id="gioi-thieu" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-[#27AE60]">Giới Thiệu Chung</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#27AE60]">
              GIÁ CẢ TỐT NHẤT
            </h3>
            <p className="text-[#212529]">
              Chuyên cung cấp các loại thực phẩm cao cấp chế biến Bò né cho các
              nhà hàng, quán ăn theo yêu cầu đảm bảo GIÁ CẢ TỐT NHẤT VÀ CẠNH
              TRANH.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#27AE60]">
              CHẤT LƯỢNG HÀNG ĐẦU
            </h3>
            <p className="text-[#212529]">
              Các thực phẩm được sản xuất đảm bảo ATVSTP, chuẩn vị gốc, đảm bảo
              CHẤT LƯỢNG VÀ TRỌNG LƯỢNG và đang được khách hàng yên mến, tin
              dùng trên thị trường hiện nay.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="bg-[#27AE60] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#27AE60]">
              DỊCH VỤ TẬN TÂM
            </h3>
            <p className="text-[#212529]">
              Đến với chúng tôi quý khách yên tâm về GIÁ và luôn được phục vụ
              tận tâm chu đáo cùng với nhiều chương trình khuyến mại hấp dẫn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
