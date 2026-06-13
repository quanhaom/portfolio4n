import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      {/* NAVBAR cố định */}
      <Navbar />

      {/* HERO / BÌA */}
      <section id="hero">
        <Hero />
      </section>

      {/* INTRODUCE */}
      <section id="introduce">
        <Introduce />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <Projects />
      </section>

      {/* SUMMARY */}
      <section id="summary">
        <Summary />
      </section>
    </>
  );
}

export default App;