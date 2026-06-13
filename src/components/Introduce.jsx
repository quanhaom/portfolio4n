export default function Introduce() {
  return (
    <div
      id="introduce"
      style={{
        padding: "80px 20px",
        textAlign: "center"
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
          marginBottom: "10px"
        }}
      >
        Hành trình 6 tuần học tập
      </h2>

      {/* ================= SUMMARY ================= */}
      <p
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          color: "#555",
          marginBottom: "50px",
          lineHeight: "1.6"
        }}
      >
       Portfolio này ghi lại toàn bộ quá trình học tập, thực hành và cảm nhận của tôi trong môn học Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo - từ quản lý tệp đến sử dụng AI có trách nhiệm.
      </p>

      {/* ================= CARDS ================= */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}
      >
        {/* CARD 1 */}
        <div
          style={{
            width: "700px",
            padding: "25px",
            borderRadius: "14px",
            background: "#eef2ff",
            textAlign: "left"
          }}
        >
          <h3 style={{ color: "#4f46e5", marginBottom: "10px" }}>
            🎯 Mục tiêu môn học
          </h3>

          <p style={{ color: "#333", lineHeight: "1.8" }}>
  	• Nắm vững kỹ năng quản lý tệp & thư mục hiệu quả<br />
 	 • Thành thạo tìm kiếm và đánh giá thông tin online<br />
 	 • Ứng dụng Prompt Engineering với các AI tool<br />
	  • Khai thác công cụ hợp tác trực tuyến (Google Workspace...)<br />
	  • Sáng tạo nội dung số bằng AI<br />
 	 • Hiểu và thực hành đạo đức AI
	</p>
        </div>

        {/* CARD 2 */}
        <div
          style={{
            width: "700px",
            padding: "25px",
            borderRadius: "14px",
            background: "#ecfeff",
            textAlign: "left"
          }}
        >
          <h3 style={{ color: "#06b6d4", marginBottom: "10px" }}>
            📄Thông tin Portfolio
          </h3>

          <p style={{ color: "#333", lineHeight: "1.8" }}>
 	 • <strong>Họ tên:</strong> Ngô Cẩm Nhung<br />
	  • <strong>Trường:</strong> Trường Đại học Ngoại ngữ – Đại học Quốc gia Hà Nội <br />
	  • <strong>Môn học:</strong> Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo<br />
	  • <strong>Số tuần:</strong> 6 tuần học & thực hành<br />
	  • <strong>Hình thức:</strong> Portfolio cá nhân trực tuyến<br />
	  • <strong>Thời gian:</strong> 2026
	</p>
        </div>
      </div>
    </div>
  );
}