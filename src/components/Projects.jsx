import { useState } from "react";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  // 6 DỰ ÁN GIỮ NGUYÊN
  const projects = [
    "Bài tập 1",
    "Bài tập 2",
    "Bài tập 3",
    "Bài tập 4",
    "Bài tập 5",
    "Bài tập 6"
  ];

  // PLACEHOLDER MÔ TẢ NGẮN
  const descriptions = [
    "Dự án 1: xây dựng giao diện web cơ bản với React.",
    "Dự án 2: xử lý API và hiển thị dữ liệu động.",
    "Dự án 3: bài tập về bảo mật và phân tích hệ thống.",
    "Dự án 4: ứng dụng CRUD với backend đơn giản.",
    "Dự án 5: demo UI/UX và component hóa giao diện.",
    "Dự án 6: tổng hợp kiến thức và tối ưu hiệu năng."
  ];

  // ẢNH MỖI PROJECT
  const projectImages = [
    [
      "https://via.placeholder.com/500x300?text=BT1-1",
      "https://via.placeholder.com/500x300?text=BT1-2",
      "https://via.placeholder.com/500x300?text=BT1-3"
    ],
    [
      "https://via.placeholder.com/500x300?text=BT2-1",
      "https://via.placeholder.com/500x300?text=BT2-2",
      "https://via.placeholder.com/500x300?text=BT2-3"
    ],
    [
      "https://via.placeholder.com/500x300?text=BT3-1",
      "https://via.placeholder.com/500x300?text=BT3-2",
      "https://via.placeholder.com/500x300?text=BT3-3"
    ],
    [
      "https://via.placeholder.com/500x300?text=BT4-1",
      "https://via.placeholder.com/500x300?text=BT4-2",
      "https://via.placeholder.com/500x300?text=BT4-3"
    ],
    [
      "https://via.placeholder.com/500x300?text=BT5-1",
      "https://via.placeholder.com/500x300?text=BT5-2",
      "https://via.placeholder.com/500x300?text=BT5-3"
    ],
    [
      "https://via.placeholder.com/500x300?text=BT6-1",
      "https://via.placeholder.com/500x300?text=BT6-2",
      "https://via.placeholder.com/500x300?text=BT6-3"
    ]
  ];

  const openProject = (index) => {
    setSelectedIndex(index);
    setImgIndex(0);
  };

  const closeModal = () => {
    setSelectedIndex(null);
    setImgIndex(0);
  };

  const next = () => {
    setImgIndex((prev) =>
      prev < projectImages[selectedIndex].length - 1 ? prev + 1 : 0
    );
  };

  const prev = () => {
    setImgIndex((prev) =>
      prev > 0 ? prev - 1 : projectImages[selectedIndex].length - 1
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dự Án</h1>

      {/* GRID */}
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => openProject(i)}
            style={{
              width: "180px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              cursor: "pointer",
              textAlign: "center"
            }}
          >
            <h3>{p}</h3>
            <p style={{ fontSize: "12px", color: "#666" }}>
              Click xem chi tiết
            </p>
          </div>
        ))}
      </div>

{selectedIndex !== null && (
  <div
    onClick={closeModal}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.65)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 999
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "80%",          // 🔥 TO HƠN
        maxWidth: "900px",
        height: "80vh",        // 🔥 CAO HƠN
        background: "#fff",
        borderRadius: "16px",
        padding: "25px",
        position: "relative",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      {/* ❌ CLOSE BUTTON (ĐẸP HƠN) */}
      <button
        onClick={closeModal}
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "none",
          background: "#111",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "0.2s"
        }}
        onMouseOver={(e) => (e.target.style.background = "#444")}
        onMouseOut={(e) => (e.target.style.background = "#111")}
      >
        ✕
      </button>

      {/* TITLE */}
      <h2 style={{ marginBottom: "5px" }}>
        {projects[selectedIndex]}
      </h2>

      <p style={{ color: "#666", fontSize: "14px" }}>
        {descriptions[selectedIndex]}
      </p>

      {/* IMAGE VIEWER */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "15px"
        }}
      >
        <button onClick={prev}>⬅</button>

        <img
          src={projectImages[selectedIndex][imgIndex]}
          alt=""
          style={{
            width: "100%",
            maxHeight: "420px",
            objectFit: "contain",
            borderRadius: "12px"
          }}
        />

        <button onClick={next}>➡</button>
      </div>

      {/* DOTS */}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {projectImages[selectedIndex].map((_, i) => (
          <span
            key={i}
            onClick={() => setImgIndex(i)}
            style={{
              cursor: "pointer",
              margin: "0 5px",
              fontSize: "22px",
              color: i === imgIndex ? "#000" : "#ccc"
            }}
          >
            ●
          </span>
        ))}
      </div>
    </div>
  </div>
)}
    </div>
  );
}