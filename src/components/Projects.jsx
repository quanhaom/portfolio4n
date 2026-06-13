import { useState } from "react";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const projects = [
    "Bài tập 1: Thao tác cơ bản với tệp tin và thư mục",
    "Bài tập 2: Tìm kiếm và đánh giá thông tin học thuật",
    "Bài tập 3: Viết Prompt hiệu quả cho các tác vụ học tập",
    "Bài tập 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    "Bài tập 5: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    "Bài tập 6: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu"
  ];

  const descriptions = [
    ["Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục trên Windows/Linux."],
    ["Phát triển kỹ năng tìm kiếm và đánh giá nguồn học thuật đáng tin cậy."],
    ["Viết prompt hiệu quả để tối ưu mô hình AI trong học tập."],
    ["Sử dụng công cụ online để làm việc nhóm hiệu quả."],
    ["Ứng dụng AI tạo sinh trong sáng tạo nội dung số."],
    ["Hiểu và áp dụng AI có trách nhiệm trong học tập."]
  ];

  const colors = [
    "#6366f1",
    "#06b6d4",
    "#22c55e",
    "#f97316",
    "#ec4899",
    "#8b5cf6"
  ];

  return (
    <div style={{ padding: "60px 40px" }}>
      {/* HEADER */}
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Dự Án Học Tập
      </h2>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {projects.map((title, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            style={{
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 8px 25px rgba(0,0,0,0.10)",
              cursor: "pointer",
              minHeight: "280px",
              overflow: "hidden"
            }}
          >
            {/* HEADER COLOR */}
            <div
              style={{
                background: colors[i],
                color: "white",
                padding: "14px",
                fontWeight: "bold"
              }}
            >
              {title}
            </div>

            {/* BODY */}
            <div style={{ padding: "18px" }}>
              <ul style={{ paddingLeft: "18px", color: "#444", lineHeight: "1.7" }}>
                {descriptions[i].map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <p style={{ fontSize: "12px", color: "#888", marginTop: "10px" }}>
                Click để mở trang →
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= POPUP MODAL (FIXED BIG SIZE) ================= */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "90vw",
              height: "90vh",
              background: "#fff",
              borderRadius: "18px",
              padding: "30px",
              overflowY: "auto",
              boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
              position: "relative"
            }}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedIndex(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background: "#111",
                color: "#fff",
                fontSize: "18px"
              }}
            >
              ✕
            </button>

            {/* TITLE */}
            <h2 style={{ marginBottom: "15px" }}>
              {projects[selectedIndex]}
            </h2>

            {/* DESCRIPTION */}
            <ul style={{ color: "#444", lineHeight: "1.8", fontSize: "15px" }}>
              {descriptions[selectedIndex].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}