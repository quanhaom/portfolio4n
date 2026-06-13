export default function Projects() {

  const projects = [
    "Bài tập 1",
    "Bài tập 2",
    "Bài tập 3",
    "Bài tập 4",
    "Bài tập 5",
    "Bài tập 6"
  ];

  return (
    <div>

      <h1>Dự Án</h1>

      <div className="project-grid">

        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project}</h3>

            <p>
              Mô tả ngắn về bài tập và sản phẩm đã thực hiện.
            </p>
          </div>
        ))}

      </div>

    </div>
  );
}