import React from "react";
import "../index.css";

const projects = [
  {
    week: 1,
    title: "Quản lý tệp và thư mục",
    subtitle: "Tổ chức, đặt tên & tìm kiếm",
    desc: "“Thực hành tạo cấu trúc thư mục logic, đặt tên tệp theo quy tắc nhất quán và chụp ảnh minh họa toàn bộ quá trình.”",
    items: [
      "Tạo cấu trúc thư mục nhiều cấp",
      "Áp dụng quy tắc đặt tên tệp",
      "Thao tác tạo, sao chép, đổi tên tệp",
      "Chụp ảnh minh họa từng bước",
    ],
    pdfLink: "/pdfs/tuan-1.pdf", // Đường dẫn tĩnh chạy từ thư mục public
  },
  {
    week: 2,
    title: "Tìm kiếm & Đánh giá thông tin",
    subtitle: "Toán tử nâng cao & tư duy phản biện",
    desc: "“Sử dụng các toán tử tìm kiếm nâng cao (site:, filetype:, “...”) để tra cứu chính xác và đánh giá độ tin cậy của nguồn thông tin.”",
    items: [
      "Thực hành toán tử site:, filetype:, intitle:",
      "So sánh kết quả từ nhiều nguồn",
      "Đánh giá độ tin cậy của thông tin",
      "Chụp ảnh màn hình kết quả tìm kiếm",
    ],
    pdfLink: "/pdfs/tuan-2.pdf",
  },
  {
    week: 3,
    title: "Viết Prompt hiệu quả",
    subtitle: "Nghệ thuật giao tiếp với AI",
    desc: "“Thực hành viết prompt theo cấu trúc rõ ràng (vai trò, bối cảnh, yêu cầu, định dạng) và cải tiến prompt qua nhiều vòng lặp.”",
    items: [
      "Viết prompt ban đầu và phiên bản cải tiến",
      "So sánh chất lượng phản hồi AI",
      "Phân tích cơ chế hoạt động của LLM",
      "Chụp màn hình kết quả từ ChatGPT",
    ],
    pdfLink: "/pdfs/tuan-3.pdf",
  },
  {
    week: 4,
    title: "Hợp tác trực tuyến",
    subtitle: "Làm việc nhóm hiệu quả",
    desc: "“Sử dụng Google Docs, Meet, và Trello để quản lý và tối ưu hóa hiệu suất làm việc nhóm từ xa.”",
    items: [
      "Tạo không gian làm việc chung", 
      "Phân công và quản lý task", 
      "Họp online & ghi biên bản", 
      "Theo dõi và đánh giá tiến độ"
    ],
    pdfLink: "/pdfs/tuan-4.pdf",
  },
  {
    week: 5,
    title: "Sáng tạo nội dung với AI",
    subtitle: "AI trong thiết kế & nội dung",
    desc: "“Tạo slide thuyết trình, hình ảnh minh họa và xây dựng kịch bản nội dung bằng các công cụ AI hiện đại.”",
    items: [
      "Xây dựng prompt tạo slide", 
      "Thiết kế bố cục bài đăng", 
      "Tạo ảnh nghệ thuật bằng AI", 
      "Xuất bản báo cáo dạng PDF"
    ],
    pdfLink: "/pdfs/tuan-5.pdf",
  },
  {
    week: 6,
    title: "AI có trách nhiệm",
    subtitle: "Đạo biến cố & Sử dụng an toàn",
    desc: "“Phân tích các rủi ro về định kiến thông tin và học cách áp dụng AI một cách an toàn, có trách nhiệm.”",
    items: [
      "Tìm hiểu nguyên tắc cốt lõi", 
      "Phân tích và phát hiện bias", 
      "Thiết lập chính sách sử dụng", 
      "Đề xuất giải pháp khắc phục"
    ],
    pdfLink: "/pdfs/tuan-6.pdf",
  },
];

export default function Projects() {
  return (
    <div className="learning-diary-container">
      <div className="diary-header">
        <p className="diary-sup-title">✦ NHẬT KÝ HỌC TẬP</p>
        <h1 className="diary-main-title">6 Tuần thực hành</h1>
        <p className="diary-sub-title">Nhấn vào từng tuần để xem chi tiết kết quả thực hành và file báo cáo đính kèm.</p>
      </div>

      <div className="diary-grid">
        {projects.map((p) => (
          <div className="diary-card" key={p.week}>
            <div className="card-header-banner">
              <div className="week-badge-box">
                <span className="badge-label">Tuần</span>
                <span className="badge-number">{p.week}</span>
              </div>
              <div className="card-title-group">
                <h3 className="card-title">
                  {p.week === 2 && "👑 "}{p.title}
                </h3>
                <p className="card-subtitle">{p.subtitle}</p>
              </div>
            </div>

            <div className="card-body-content">
              <p className="card-description">{p.desc}</p>

              <ul className="card-todo-list">
                {p.items.map((item, idx) => (
                  <li key={idx} className="todo-item">
                    <span className="todo-icon">🌿</span>
                    <span className="todo-text">{item}</span>
                  </li>
                ))}
              </ul>

              <button 
                className="download-pdf-btn"
                onClick={() => window.open(p.pdfLink, "_blank", "noopener,noreferrer")}
              >
                <svg className="pdf-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 012-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Xem / Tải Báo Cáo PDF (Tuần {p.week})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}