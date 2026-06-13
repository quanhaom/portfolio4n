import { useState } from "react";

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imgIndex, setImgIndex] = useState(0);

  const projects = [
    "Bài tập 1: Thao tác cơ bản với tệp tin và thư mục",
    "Bài tập 2: Tìm kiếm và đánh giá thông tin học thuật",
    "Bài tập 3: Viết Prompt hiệu quả cho các tác vụ học tập",
    "Bài tập 4: Công cụ hợp tác trực tuyến trong dự án nhóm",
    "Bài tập 5: AI tạo sinh hỗ trợ sáng tạo nội dung",
    "Bài tập 6: AI có trách nhiệm trong học tập và nghiên cứu"
  ];

  const cardPreview = [
    ["File Explorer", "Copy / Move / Delete", "Windows cơ bản"],
    ["Google Scholar", "Tài liệu học thuật", "Đánh giá nguồn"],
    ["Prompt AI", "Viết prompt", "Tối ưu AI"],
    ["Team tools", "Docs / Drive", "Làm việc nhóm"],
    ["AI sáng tạo", "Text / Image", "Sản phẩm số"],
    ["AI ethics", "AI có trách nhiệm", "Đạo đức học thuật"]
  ];

  const popupContent = [
`📌 BÀI 1 - THAO TÁC FILE

I. Mục tiêu:

- Thành thạo quản lý file trên Windows
- Hiểu cấu trúc thư mục

II. Nội dung:

- File Explorer
- Tạo folder
- Copy / Move / Delete
- Restore Recycle Bin

III. Thực hành mở rộng:

- Tạo 5 thư mục con
- Sắp xếp dữ liệu khoa học
- Chụp màn hình từng bước

IV. Kết quả:

- Nắm vững thao tác hệ điều hành
- Tăng kỹ năng quản lý dữ liệu`,

`📌 BÀI 2 - TÀI LIỆU HỌC THUẬT

I. Mục tiêu:

- Tìm kiếm và đánh giá nguồn tin

II. Công cụ:

- Google Scholar
- IEEE / Springer
- Thư viện số

III. Tiêu chí đánh giá:

- Tác giả
- Năm xuất bản
- Trích dẫn
- Độ uy tín

IV. Mở rộng:

- So sánh 5 bài báo
- Tạo bảng tổng hợp

V. Kết quả:

- 10+ tài liệu học thuật`,

`📌 BÀI 3 - PROMPT ENGINEERING

I. Mục tiêu:

- Tối ưu giao tiếp với AI

II. Kỹ thuật:

- Role prompting
- Few-shot prompting
- Chain-of-thought

III. Thực hành:

- 3 prompt cho mỗi nhiệm vụ
- So sánh output

IV. Kết quả:

- Hiểu cách AI phản hồi tốt hơn`,

`📌 BÀI 4 - LÀM VIỆC NHÓM

I. Công cụ:

- Trello
- Notion
- Google Docs
- Discord

II. Hoạt động:

- Phân chia task
- Theo dõi tiến độ
- Thảo luận realtime

III. Minh chứng:

- Screenshot đóng góp
- Lịch sử chỉnh sửa

IV. Kết quả:

- Quản lý dự án hiệu quả`,

`📌 BÀI 5 - AI SÁNG TẠO

I. Công cụ:

- ChatGPT
- Midjourney
- Canva AI

II. Quy trình:

- Lên ý tưởng
- Tạo nội dung
- Thiết kế sản phẩm

III. Mở rộng:

- Tạo infographic
- Video ngắn AI

IV. Kết quả:

- Sản phẩm sáng tạo hoàn chỉnh`,

`📌 BÀI 6 - AI CÓ TRÁCH NHIỆM

I. Nội dung:

- Đạo đức AI
- Minh bạch sử dụng AI
- Tránh gian lận học thuật

II. Phân tích:

- Ranh giới hỗ trợ vs gian lận
- Quyền sở hữu trí tuệ
- Tác động học tập

III. Nguyên tắc cá nhân:

- 5–7 quy tắc sử dụng AI

IV. Kết quả:

- Bộ nguyên tắc AI cá nhân`
  ];

  const popupImages = [
    ["/images/bai1-1.png", "/images/bai1-2.png", "/images/bai1-3.png"],
    ["/images/bai2-1.png", "/images/bai2-2.png", "/images/bai2-3.png"],
    ["/images/bai3-1.png", "/images/bai3-2.png", "/images/bai3-3.png"],
    ["/images/bai4-1.png", "/images/bai4-2.png", "/images/bai4-3.png"],
    ["/images/bai5-1.png", "/images/bai5-2.png", "/images/bai5-3.png"],
    ["/images/bai6-1.png", "/images/bai6-2.png", "/images/bai6-3.png"]
  ];

  const colors = [
    "#6366f1",
    "#06b6d4",
    "#22c55e",
    "#f97316",
    "#ec4899",
    "#8b5cf6"
  ];

  const openPopup = (i) => {
    setSelectedIndex(i);
    setImgIndex(0);
  };

  const nextImg = () => {
    setImgIndex((p) =>
      p < popupImages[selectedIndex].length - 1 ? p + 1 : 0
    );
  };

  const prevImg = () => {
    setImgIndex((p) =>
      p > 0 ? p - 1 : popupImages[selectedIndex].length - 1
    );
  };

  return (
    <section
      id="projects"
      style={{
        padding: "64px 20px 72px",
        background: "transparent",
        boxSizing: "border-box"
      }}
    >
      {/* HEADER PAGE */}
      <div style={{ textAlign: "center", margin: "0 0 30px" }}>
        <h1
          style={{
            fontSize: "34px",
            fontWeight: "800",
            margin: "0 0 8px",
            background: "linear-gradient(90deg,#6366f1,#ec4899,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Bài học
        </h1>

        <p
          style={{
            color: "#666",
            margin: 0,
            fontSize: "15px"
          }}
        >
          Tổng hợp bài tập ứng dụng AI trong học tập
        </p>
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          maxWidth: "1120px",
          margin: "0 auto"
        }}
      >
        {projects.map((title, i) => (
          <div
            key={i}
            onClick={() => openPopup(i)}
            style={{
              background: "rgba(255,255,255,0.85)",
              borderRadius: "20px",
              cursor: "pointer",
              minHeight: "235px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.75)",
              transition: "0.3s"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              style={{
                background: colors[i],
                color: "#fff",
                padding: "14px",
                fontWeight: "700",
                lineHeight: "1.45"
              }}
            >
              {title}
            </div>

            <div style={{ padding: "16px 18px" }}>
              <ul
                style={{
                  paddingLeft: "18px",
                  color: "#444",
                  margin: 0,
                  lineHeight: "1.8",
                  fontSize: "14px"
                }}
              >
                {cardPreview[i].map((x, idx) => (
                  <li key={idx}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {selectedIndex !== null && (
        <div
          onClick={() => setSelectedIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.65)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "85vw",
              height: "85vh",
              background: "#fff",
              borderRadius: "18px",
              padding: "30px",
              overflowY: "auto",
              position: "relative"
            }}
          >
            <button
              onClick={() => setSelectedIndex(null)}
              style={{
                position: "absolute",
                top: 15,
                right: 15,
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "none",
                background: "#111",
                color: "#fff",
                cursor: "pointer"
              }}
            >
              ✕
            </button>

            <h1
              style={{
                fontSize: "26px",
                fontWeight: "800",
                paddingRight: "45px",
                background: "linear-gradient(90deg,#6366f1,#ec4899,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {projects[selectedIndex]}
            </h1>

            <pre
              style={{
                whiteSpace: "pre-wrap",
                fontSize: "15px",
                color: "#333",
                lineHeight: "1.7",
                marginTop: "20px",
                fontFamily: '"Be Vietnam Pro", "Segoe UI", Arial, sans-serif'
              }}
            >
              {popupContent[selectedIndex]}
            </pre>

            <div style={{ marginTop: "30px", textAlign: "center" }}>
              <h4>Hình minh hoạ</h4>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                  marginTop: "12px"
                }}
              >
                <button onClick={prevImg}>⬅</button>

                <div
                  style={{
                    width: "220px",
                    height: "125px",
                    border: "1px dashed #ccc",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    color: "#888"
                  }}
                >
                  {popupImages[selectedIndex][imgIndex]}
                </div>

                <button onClick={nextImg}>➡</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}