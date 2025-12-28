import React from "react";
import { motion } from "framer-motion";
import "../styles/about.css";
import profilePic from "../assets/profile.jpg"; // your profile image

export default function About() {
  return (
    <section id="about" className="about">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="about-title glow"
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            Hi, I’m <strong>Ashirvaad</strong>, a passionate Web Developer with a flair for modern,
            interactive, and user-friendly designs. I love building stylish web apps that are
            visually appealing and performant.
          </p>
          <p>
            I specialize in <strong>React, Tailwind CSS, and modern JavaScript frameworks</strong>,
            creating projects that combine design with functionality. I’m always learning new
            technologies to improve my craft and deliver creative solutions.
          </p>
          <p>
            When I’m not coding, I enjoy <strong>digital art and design</strong>, which inspires my
            web projects and keeps my interfaces fresh and unique.
          </p>
        </motion.div>

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={profilePic} alt="Ashirvaad Bhat" />
        </motion.div>
      </div>
    </section>
  );
}
