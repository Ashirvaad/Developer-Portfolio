import React from "react";
import { motion } from "framer-motion";
import "../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="contact-title glow"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="contact-subtitle"
      >
        Have a project in mind? Let’s collaborate and build something amazing!
      </motion.p>

      <div className="contact-container">
        {/* Left Column */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Reach Me At</h3>
          <p>Email: <a href="mailto:ashirvaad05@gmail.com">ashirvaad05@gmail.com</a></p>
          <p>Phone: +91-XXXXXXXXXX</p>

          <div className="contact-socials">
            <a href="https://github.com/Ashirvaad" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ashirvaad" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com/ashirvaad" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          action="https://formspree.io/f/yourFormID" 
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </motion.form>
      </div>
    </section>
  );
}
