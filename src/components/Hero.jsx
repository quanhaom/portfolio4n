export default function Hero() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
        background: "transparent"
      }}
    >
      {/* ================= HEADER (GRADIENT TEXT) ================= */}
      <div
        style={{
          fontSize: "34px",
          fontWeight: "bold",
          letterSpacing: "2px",
          marginBottom: "25px",
          background: "linear-gradient(90deg, #6366f1, #06b6d4, #22c55e)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}
      >
        PORTFOLIO HỌC TẬP - 2026
      </div>

      {/* ================= AVATAR ================= */}
      <img
        src="/avatar.jpg"
        alt="avatar"
        style={{
          width: "170px",
          height: "170px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
        }}
      />

      {/* ================= NAME (NỔI BẬT HƠN) ================= */}
      <h1
        style={{
          marginBottom: "8px",
          fontSize: "30px",
          fontWeight: "700",
          color: "#111"
        }}
      >
        Ngô Cẩm Nhung
      </h1>

      <h2 style={{ color: "#555", fontWeight: "normal" }}>
        Trường Đại học Ngoại ngữ – Đại học Quốc gia Hà Nội
      </h2>

      {/* ================= MSSV + TRƯỜNG (TO HƠN) ================= */}
      <div
        style={{
          marginTop: "12px",
          color: "#444",
          fontSize: "16px",
          lineHeight: "1.6",
          fontWeight: "500"
        }}
      >
        <div>MSSV: 25040984</div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <p
        style={{
          maxWidth: "600px",
          marginTop: "15px",
          color: "#555"
        }}
      >
        Passionate about language education, communication,
        intercultural exchange, and digital literacy.
      </p>

      {/* ================= BUTTON (GRADIENT) ================= */}
      <a
        href="#introduce"
        style={{
          marginTop: "25px",
          padding: "12px 22px",
          borderRadius: "10px",
          textDecoration: "none",
          fontWeight: "bold",
          color: "white",
          background: "linear-gradient(90deg, #6366f1, #06b6d4)",
          boxShadow: "0 10px 25px rgba(99,102,241,0.3)",
          transition: "0.3s"
        }}
        onMouseOver={(e) =>
          (e.target.style.transform = "scale(1.05)")
        }
        onMouseOut={(e) =>
          (e.target.style.transform = "scale(1)")
        }
      >
        Show More ↓
      </a>
    </div>
  );
}