import { useEffect, useRef, useState } from "react";

export default function Summary() {
  /* =========================
     TIMELINE DATA
  ========================== */
  const timeline = [
    {
      title: "Bắt đầu dự án Portfolio",
      time: "Phase 1",
      desc:
        "Khởi tạo dự án web, lựa chọn tự code thay vì WordPress/Wix để kiểm soát toàn bộ hệ thống."
    },
    {
      title: "Xây dựng UI hệ thống",
      time: "Phase 2",
      desc:
        "Thiết kế layout React, xây dựng card UI, popup, slider và grid hiện đại."
    },
    {
      title: "Phát triển tính năng",
      time: "Phase 3",
      desc:
        "Xử lý state, animation scroll reveal, popup chi tiết và chuyển ảnh."
    },
    {
      title: "Tối ưu UI/UX",
      time: "Phase 4",
      desc:
        "Thêm glassmorphism, gradient, hover effect và tối ưu trải nghiệm người dùng."
    },
    {
      title: "Deploy dự án",
      time: "Phase 5",
      desc:
        "Deploy website lên Vercel/GitHub và xử lý lỗi build, tối ưu production."
    },
    {
      title: "Hoàn thiện & tổng kết",
      time: "Final",
      desc:
        "Hoàn thiện portfolio, đánh giá kỹ năng đạt được và tối ưu cấu trúc code."
    }
  ];

  /* =========================
     SUMMARY CARDS DATA
  ========================== */
  const cards = [
    {
      title: "🚀 Trải nghiệm thực hiện Portfolio",
      desc:
        "Quá trình xây dựng website từ thiết kế UI đến deploy thực tế, giúp hiểu rõ toàn bộ vòng đời sản phẩm web."
    },
    {
      title: " 🔥 Kiến thức & kỹ năng đạt được",
      desc:
        "React, state management, UI/UX design, animation, component architecture và deploy web."
    },
    {
      title: "💎 Tư duy phát triển",
      desc:
        "Kỹ năng chia nhỏ vấn đề, xử lý logic UI, tối ưu trải nghiệm người dùng và tư duy hệ thống."
    },
    {
      title: "🏆 Điểm tâm đắc",
      desc:
        "Tự xây dựng một sản phẩm hoàn chỉnh từ con số 0 với UI hiện đại và animation mượt."
    },
    {
      title: "⚠️ Thử thách gặp phải",
      desc:
        "Xử lý state phức tạp, animation scroll, tối ưu UI/UX và deploy production."
    },
    {
      title: "🏁 Kết luận",
      desc:
        "Dự án giúp nâng cao kỹ năng sử dụng công nghệ số và ứng dụng trí tuệ nhân tạo."
    }
  ];

  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  /* =========================
     SCROLL ANIMATION (2-WAY)
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

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        padding: "80px 20px",
        background: "#0f172a",
        minHeight: "100vh",
        color: "#e2e8f0"
      }}
    >
      {/* =========================
          HEADER
      ========================== */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "900",
            background:
              "linear-gradient(90deg,#6366f1,#ec4899,#06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Portfoilio Summary
        </h1>

        <p style={{ color: "#94a3b8", marginTop: "10px" }}>
          Hành trình phát triển dự án & kỹ năng đạt được
        </p>
      </div>

      {/* =========================
          SUMMARY CARDS
      ========================== */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "22px",
          maxWidth: "1100px",
          margin: "0 auto 80px"
        }}
      >
        {cards.map((item, i) => (
          <div
            key={i}
            data-index={i}
            ref={(el) => (refs.current[i] = el)}
            style={{
              background: "rgba(30,41,59,0.6)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(148,163,184,0.2)",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",

              opacity: visible[i] ? 1 : 0,
              transform: visible[i]
                ? "translateY(0)"
                : "translateY(40px)",
              transition: "all 0.6s ease"
            }}
          >
            <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>
              {item.title}
            </h3>
            <p style={{ fontSize: "13px", color: "#94a3b8" }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>

      {/* =========================
          TIMELINE SECTION
      ========================== */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "26px"
          }}
        >
          Project Timeline
        </h2>

        <div style={{ position: "relative" }}>
          {/* CENTER LINE */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: "2px",
              background:
                "linear-gradient(#6366f1,#ec4899,#06b6d4)",
              transform: "translateX(-50%)"
            }}
          />

          {timeline.map((item, i) => (
            <div
              key={i}
              data-index={i + 100}
              ref={(el) => (refs.current[i + 100] = el)}
              style={{
                display: "flex",
                justifyContent:
                  i % 2 === 0 ? "flex-start" : "flex-end",
                padding: "30px 0",
                position: "relative"
              }}
            >
              {/* DOT */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "40px",
                  transform: "translateX(-50%)",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#0f172a",
                  border: "3px solid #6366f1"
                }}
              />

              {/* CARD */}
              <div
                style={{
                  width: "45%",
                  background: "rgba(30,41,59,0.6)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(148,163,184,0.2)",
                  borderRadius: "16px",
                  padding: "16px",

                  opacity: visible[i + 100] ? 1 : 0,
                  transform: visible[i + 100]
                    ? "translateY(0)"
                    : "translateY(30px)",
                  transition: "all 0.6s ease"
                }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    color: "#6366f1",
                    marginBottom: "6px"
                  }}
                >
                  {item.time}
                </div>

                <h3 style={{ marginBottom: "6px" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "13px", color: "#94a3b8" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}