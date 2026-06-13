export default function Introduce() {
  return (
    <div
      id="introduce"
      style={{
        padding: "80px 20px",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        background: "#f5f5f5"
      }}
    >
      {/* CARD 1 */}
      <div
        style={{
          width: "320px",
          padding: "30px",
          borderRadius: "16px",
          background: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <h2>🎓 Education</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Studying English Language with focus on communication,
          linguistics, teaching methodology, and intercultural skills.
        </p>
      </div>

      {/* CARD 2 */}
      <div
        style={{
          width: "320px",
          padding: "30px",
          borderRadius: "16px",
          background: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
        }}
      >
        <h2>🌍 Skills</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Communication, presentation, writing, intercultural awareness,
          and digital literacy tools.
        </p>
      </div>
    </div>
  );
}