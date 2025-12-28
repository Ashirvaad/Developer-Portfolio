import React from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";

// Import images
import LuxuryWebsite from "../assets/projects/luxury-website.png";
import LandingPage from "../assets/projects/LandingPage.png";
import WCAGThemeInspector from "../assets/projects/WCAGThemeInspector.png";

const projects = [
  {
    title: "Luxury Website",
    desc: "Responsive e-commerce fashion store built with React + Tailwind.",
    image: LuxuryWebsite,
    link: "https://github.com/Ashirvaad/E-Commerce-app",
  },
  {
    title: "Modern Luxury page UI",
    desc: "A sleek landing page for a luxury brand using HTML, CSS & JS.",
    image: LandingPage,
    link: "#",
  },
  {
    title: "WCAG Theme Inspector",
    desc: "Accessibility tool to test color contrast & UI themes.",
    image: WCAGThemeInspector,
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="projects-title glow"
      >
        Featured Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="project-card"
          >
            <div className="project-image">
              <img src={p.image} alt={p.title} />
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link}>View Project →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
