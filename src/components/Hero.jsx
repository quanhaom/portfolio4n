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
        background: "transparent", // QUAN TRỌNG
        color: "#111"
      }}
    >
      <img
        src="/avatar.jpg"
        alt="avatar"
        style={{
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "20px"
        }}
      />

      <h1>Nguyễn Thị A</h1>

      <h2 style={{ color: "#666", fontWeight: "normal" }}>
        English Language Student
      </h2>

      <p style={{ maxWidth: "600px", color: "#555" }}>
        Passionate about language education, communication,
        intercultural exchange, and digital literacy.
      </p>

      <a
        href="#introduce"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#111",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Explore ↓
      </a>
    </div>
  );
}