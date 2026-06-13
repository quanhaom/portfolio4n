import { useEffect, useRef, useState } from "react";

export default function Summary() {
  const mainFont = '"Be Vietnam Pro", "Segoe UI", Arial, sans-serif';

  /* =========================
     SUMMARY CARDS DATA
  ========================== */
  const cards = [
    {
      title: "Những gì tôi đã học",
      icon: "🌸",
      desc: [
        "📁 Tổ chức tệp và thư mục một cách khoa học",
        "🔎 Kỹ năng tìm kiếm nâng cao như site:, filetype:,...",
        "💬 Viết prompt theo cấu trúc: vai trò – bối cảnh – yêu cầu",
        "🤝 Cộng tác nhóm qua Google Workspace và Trello",
        "🎨 Sáng tạo nội dung số với ChatGPT và Canva AI",
        "🧠 Nhận thức về đạo đức và trách nhiệm khi sử dụng AI"
      ]
    },
    {
      title: "Bài học kinh nghiệm",
      icon: "💖",
      desc: [
        "❓ Đặt câu hỏi rõ ràng giúp AI trả lời chính xác hơn",
        "🗂️ Tổ chức trước, thực hiện sau để tiết kiệm thời gian",
        "🎯 Tìm kiếm có chiến lược quan trọng hơn tìm kiếm thật nhiều",
        "👥 Hợp tác online cần có quy tắc và phân công rõ ràng",
        "🧩 AI là công cụ, người dùng vẫn cần có tư duy phản biện"
      ]
    },
    {
      title: "Định hướng tương lai",
      icon: "🌈",
      desc: [
        "Sau khóa học này, tôi nhận ra rằng việc sử dụng công nghệ một cách thông minh, có trách nhiệm và sáng tạo là kỹ năng cốt lõi của thời đại số.",
        "Tôi sẽ tiếp tục nâng cao kỹ năng prompt engineering, khám phá thêm các công cụ AI mới, đồng thời luôn đặt ra câu hỏi về đạo đức khi ứng dụng trí tuệ nhân tạo vào cuộc sống và công việc."
      ]
    }
  ];

  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  /* =========================
     SCROLL ANIMATION
  ========================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");

          setVisible((prev) => {
            const arr = [...prev];
            arr[index] = entry.isIntersecting;
            return arr;
          });
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="summary"
      style={{
        width: "100%",
        minHeight: "100vh",
        padding: "130px 20px 80px",
        background: "transparent",
        color: "#1e293b",
        overflowX: "hidden",
        boxSizing: "border-box",
        fontFamily: mainFont
      }}
    >
      {/* =========================
          HEADER
      ========================== */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px"
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "900",
            lineHeight: "1.3",
            background: "linear-gradient(90deg,#6366f1,#ec4899,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0
          }}
        >
          Tổng kết nhìn lại hành trình
        </h1>

        <p
          style={{
            color: "#64748b",
            marginTop: "12px",
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          Hành trình phát triển kỹ năng số, tư duy AI và trải nghiệm học tập
        </p>
      </div>

      {/* =========================
          SUMMARY CARDS
      ========================== */}
      <div
        style={{
          width: "100%",
          maxWidth: "1150px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "26px",
          boxSizing: "border-box"
        }}
      >
        {cards.map((item, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => (refs.current[i] = el)}
            style={{
              background:
                "linear-gradient(135deg, rgba(30,41,59,0.92), rgba(15,23,42,0.98))",
              backdropFilter: "blur(14px)",
              border: "1px solid rgba(236,72,153,0.38)",
              borderRadius: "24px",
              padding: "28px",
              minHeight: "420px",
              boxShadow: "0 18px 45px rgba(148,91,129,0.28)",
              position: "relative",
              overflow: "hidden",

              opacity: visible[i] ? 1 : 0,
              transform: visible[i] ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.6s ease"
            }}
          >
            {/* BLING BLING DECOR */}
            <div
              style={{
                position: "absolute",
                top: "14px",
                right: "18px",
                fontSize: "22px",
                opacity: 0.9
              }}
            >
              ✨
            </div>

            <div
              style={{
                fontSize: "44px",
                marginBottom: "16px"
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                margin: "0 0 18px",
                color: "#fbcfe8"
              }}
            >
              ✨ {item.title}
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "11px"
              }}
            >
              {item.desc.map((line, index) => (
                <p
                  key={index}
                  style={{
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "1.75",
                    color: "#e2e8f0"
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}