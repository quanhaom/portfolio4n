import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce";
import Projects from "./components/Projects";
import Summary from "./components/Summary";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Introduce />
        <Projects />
        <Summary />
      </main>
    </>
  );
}

export default App;