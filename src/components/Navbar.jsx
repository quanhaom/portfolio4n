import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("introduce");

  const navItems = [
    { id: "introduce", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "summary", label: "Summary" }
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      setActive(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.38;

      let currentSection = "introduce";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = item.id;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <nav>
      {navItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => scrollToSection(item.id)}
          className={active === item.id ? "nav-btn active" : "nav-btn"}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}