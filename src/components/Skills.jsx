import React from "react";
import { motion } from "framer-motion";
import "../styles/skills.css";

const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "Git"];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="skills-title glow"
      >
        Skills & Tools
      </motion.h2>

      <div className="skills-box">
        
      <div className="skills-grid">
        {skills.map((s, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale:1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="skill-item"
          >
            {s}
          </motion.span>
        ))}
      </div>
      </div>
    </section>
  );
}
