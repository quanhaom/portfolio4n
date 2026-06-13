import Navbar from "./components/Navbar";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Navbar />

      <section id="introduce">
        <Introduce />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="summary">
        <Summary />
      </section>
    </>
  );
}

export default App;