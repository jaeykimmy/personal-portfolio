import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { Card } from "@mui/material";
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
      <Card className="card">
        <p>
          I am a full stack web developer with emphasis on front-end work using
          React and Javascript. Previously working as an x-ray technologist, I
          was entrusted by my seniors to analyze software issues and mentored
          students towards attaining their MRT certification. After 3 years of
          working in healthcare, I decided to leave my full-time role to work a
          career doing what I love - solving problems and making things.
        </p>
        <br />
        <p>Check out some of my projects down below!</p>
      </Card>
    </motion.div>
  );
}
