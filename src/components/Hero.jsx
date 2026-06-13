export default function Hero() {
  const mainFont = '"Be Vietnam Pro", "Segoe UI", Arial, sans-serif';
  const displayFont = '"Playfair Display", "Be Vietnam Pro", serif';

  return (
    <section
      id="hero"
      style={{
	minHeight: "82vh",
	padding: "80px 7vw 35px",
        background: "transparent",
        position: "relative",
        overflowX: "hidden",
        overflowY: "visible",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: mainFont
      }}
    >
      {/* ================= BACKGROUND DECOR ================= */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          left: "-8%",
          width: "120%",
          height: "80px",
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.28), rgba(99,102,241,0.18), transparent)",
          transform: "rotate(-10deg)",
          filter: "blur(2px)",
          zIndex: 0
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-5%",
          bottom: "18%",
          width: "70%",
          height: "70px",
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), rgba(236,72,153,0.16), transparent)",
          transform: "rotate(-12deg)",
          filter: "blur(3px)",
          zIndex: 0
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "24%",
          left: "34%",
          fontSize: "36px",
          opacity: 0.28,
          transform: "rotate(-20deg)",
          zIndex: 1
        }}
      >
        🦋
      </div>

      <div
        style={{
          position: "absolute",
          top: "36%",
          right: "35%",
          fontSize: "40px",
          opacity: 0.22,
          transform: "rotate(18deg)",
          zIndex: 1
        }}
      >
        🦋
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "22%",
          right: "10%",
          width: "64px",
          height: "64px",
          borderRadius: "50%",
          background: "rgba(250,204,21,0.18)",
          filter: "blur(1px)",
          zIndex: 1
        }}
      />

      {/* ================= HERO CONTENT ================= */}
      <div
        style={{
          width: "100%",
          maxWidth: "1180px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "48px",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2
        }}
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          style={{
            flex: "1 1 500px",
            maxWidth: "620px",
            textAlign: "left"
          }}
        >
          <div
            style={{
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#5b5f97",
              fontWeight: "900",
              marginBottom: "14px"
            }}
          >
            DIGITAL LEARNING PORTFOLIO
          </div>

          <h1
            style={{
              margin: 0,
              fontFamily: displayFont,
              fontSize: "clamp(50px, 6.8vw, 84px)",
              lineHeight: "1.24",
              fontWeight: "900",
              letterSpacing: "-1px",
              color: "#2e236c",
              maxWidth: "560px",
              paddingBottom: "8px",
              overflow: "visible"
            }}
          >
            Ngô Cẩm
            <br />
            Nhung
          </h1>

          <p
            style={{
              maxWidth: "620px",
              marginTop: "18px",
              color: "#4b5563",
              fontSize: "17px",
              lineHeight: "1.75",
              fontWeight: "500"
            }}
          >
            Một không gian portfolio ghi lại hành trình học tập, thực hành và
            phát triển kỹ năng số trong môn Nhập môn Công nghệ số & Ứng dụng
            Trí tuệ nhân tạo.
          </p>

          {/* ================= TAGS ================= */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "22px"
            }}
          >
            {["MSSV: 25040984", "ULIS", "AI Literacy"].map((tag, index) => (
              <span
                key={index}
                style={{
                  padding: "9px 16px",
                  borderRadius: "999px",
                  background: "rgba(255,255,255,0.6)",
                  color: "#475569",
                  fontWeight: "800",
                  fontSize: "13px",
                  boxShadow: "0 8px 22px rgba(148,91,129,0.12)",
                  border: "1px solid rgba(255,255,255,0.7)"
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ================= BUTTONS ================= */}
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              marginTop: "28px"
            }}
          >
            <a
              href="#introduce"
              style={{
                padding: "14px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "900",
                color: "white",
                background: "linear-gradient(90deg, #6366f1, #7c3aed)",
                boxShadow: "0 14px 30px rgba(99,102,241,0.28)",
                transition: "0.3s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Xem nội dung ↓
            </a>

            <a
              href="#summary"
              style={{
                padding: "14px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "900",
                color: "#4c1d95",
                background: "rgba(255,255,255,0.72)",
                boxShadow: "0 14px 30px rgba(148,91,129,0.14)",
                border: "1px solid rgba(255,255,255,0.8)",
                transition: "0.3s"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Tổng kết hành trình
            </a>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div
          style={{
            flex: "0 1 370px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "370px",
              padding: "16px",
              borderRadius: "28px",
              background: "rgba(255,255,255,0.55)",
              backdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 24px 60px rgba(99,102,241,0.18)",
              position: "relative"
            }}
          >
            <div
              style={{
                height: "330px",
                borderRadius: "22px",
                overflow: "hidden",
                background: "rgba(236,229,206,0.8)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                src="/avatar.jpg"
                alt="Ngô Cẩm Nhung"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <div
              style={{
                marginTop: "14px",
                padding: "14px 16px",
                borderRadius: "18px",
                background: "rgba(255,255,255,0.72)",
                boxShadow: "0 12px 30px rgba(148,91,129,0.12)"
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#6366f1",
                  fontWeight: "900",
                  marginBottom: "6px"
                }}
              >
                Sinh viên
              </div>

              <div
                style={{
                  color: "#475569",
                  fontSize: "15px",
                  lineHeight: "1.7",
                  fontWeight: "600"
                }}
              >
                Ngành Ngôn ngữ Anh
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                right: "28px",
                bottom: "88px",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "rgba(250,204,21,0.25)"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}