import React from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1 className="hero-title glow">Hi, I'm Ashirvaad</h1>
        <p className="hero-subtitle">
          A Passionate Web Developer & Designer
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Hire Me</a>
        </div>
      </motion.div>
    </section>
  );
}
