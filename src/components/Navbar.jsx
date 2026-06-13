import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("introduce");

  useEffect(() => {
    const sections = document.querySelectorAll(
      "#introduce, #projects, #summary"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-20% 0px -55% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <a
        href="#introduce"
        className={active === "introduce" ? "nav-btn active" : "nav-btn"}
      >
        About
      </a>

      <a
        href="#projects"
        className={active === "projects" ? "nav-btn active" : "nav-btn"}
      >
        Projects
      </a>

      <a
        href="#summary"
        className={active === "summary" ? "nav-btn active" : "nav-btn"}
      >
        Summary
      </a>
    </nav>
  );
}