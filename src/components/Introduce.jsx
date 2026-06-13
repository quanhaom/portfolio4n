export default function Introduce() {
  return (
    <div
      id="introduce"
      style={{
        padding: "55px 20px 60px",
        textAlign: "center",
        background: "transparent"
      }}
    >
      {/* ================= GRADIENT SMALL LABEL ================= */}
      <div
        style={{
          fontSize: "12px",
          letterSpacing: "3px",
          marginBottom: "10px",
          textTransform: "uppercase",
          background: "linear-gradient(90deg, #6366f1, #06b6d4, #22c55e)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "bold"
        }}
      >
        Về Portfolio
      </div>

      {/* ================= HEADER ================= */}
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          margin: "0 0 10px",
          color: "#1e293b"
        }}
      >
        Hành trình 6 tuần học tập
      </h2>

      {/* ================= SUMMARY ================= */}
      <p
        style={{
          maxWidth: "680px",
          margin: "0 auto 36px",
          color: "#555",
          lineHeight: "1.7",
          fontSize: "15px"
        }}
      >
        Portfolio này ghi lại toàn bộ quá trình học tập, thực hành và cảm nhận
        của tôi trong môn học Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo
        - từ quản lý tệp đến sử dụng AI có trách nhiệm.
      </p>

      {/* ================= CARDS ================= */}
      <div
        style={{
          width: "100%",
          maxWidth: "1120px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "56px",
          flexWrap: "wrap"
        }}
      >
        {/* CARD 1 */}
        <div
          style={{
            width: "500px",
            maxWidth: "100%",
            padding: "24px 26px",
            borderRadius: "18px",
            background: "rgba(238, 242, 255, 0.85)",
            textAlign: "left",
            boxShadow: "0 14px 35px rgba(99,102,241,0.12)",
            border: "1px solid rgba(255,255,255,0.7)"
          }}
        >
          <h3
            style={{
              color: "#4f46e5",
              margin: "0 0 14px",
              fontSize: "20px"
            }}
          >
            🎯 Mục tiêu môn học
          </h3>

          <p
            style={{
              color: "#333",
              lineHeight: "1.8",
              fontSize: "15px",
              margin: 0
            }}
          >
            • Nắm vững kỹ năng quản lý tệp & thư mục hiệu quả
            <br />
            • Thành thạo tìm kiếm và đánh giá thông tin online
            <br />
            • Ứng dụng Prompt Engineering với các AI tool
            <br />
            • Khai thác công cụ hợp tác trực tuyến
            <br />
            • Sáng tạo nội dung số bằng AI
            <br />• Hiểu và thực hành đạo đức AI
          </p>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            width: "500px",
            maxWidth: "100%",
            padding: "24px 26px",
            borderRadius: "18px",
            background: "rgba(236, 254, 255, 0.85)",
            textAlign: "left",
            boxShadow: "0 14px 35px rgba(6,182,212,0.12)",
            border: "1px solid rgba(255,255,255,0.7)"
          }}
        >
          <h3
            style={{
              color: "#06b6d4",
              margin: "0 0 14px",
              fontSize: "20px"
            }}
          >
            📄 Thông tin Portfolio
          </h3>

          <p
            style={{
              color: "#333",
              lineHeight: "1.8",
              fontSize: "15px",
              margin: 0
            }}
          >
            • <strong>Họ tên:</strong> Ngô Cẩm Nhung
            <br />
            • <strong>Trường:</strong> Trường Đại học Ngoại ngữ – Đại học Quốc
            gia Hà Nội
            <br />
            • <strong>Môn học:</strong> Nhập môn Công nghệ số & Ứng dụng Trí tuệ
            nhân tạo
            <br />
            • <strong>Số tuần:</strong> 6 tuần học & thực hành
            <br />
            • <strong>Hình thức:</strong> Portfolio cá nhân trực tuyến
            <br />• <strong>Thời gian:</strong> 2026
          </p>
        </div>
      </div>
    </div>
  );
}