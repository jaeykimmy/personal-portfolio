import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      <h1>About Me</h1>
      <p>
        I am a full stack web developer transitioning from an experienced
        healthcare worker role as an x-ray technologist. Due to my knack for
        picking up the electronic health record systems quickly and being
        entrusted by the senior technologists to deal with many software issues
        and bugs, I decided to leave my full-time role to work a career doing
        what I love - solving problems and making things.
      </p>
      <p>
        I have since worked to become proficient using React, Express,
        PostgreSQL and Node.js. I have experience in a pair programming setting
        as well as using test driven development to ensure my code stays
        performant and efficient. My expertise lies in front-end development
        using MUI, Tailwind CSS, and SCSS to style my work based on industry
        standards.
      </p>
    </motion.div>
  );
}
