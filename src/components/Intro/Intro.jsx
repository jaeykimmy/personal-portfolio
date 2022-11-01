import React from "react";
import "./Intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../spaceinvader.css";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      className="intro"
      id="intro"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
    >
      <a href="#about" className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Jaeyoung Kim</h1>
        <h2>Full Stack Developer</h2>

        <div>
          <div className="space-invader space-invader-1 classic"></div>
          <div className="space-invader space-invader-2 classic"></div>
          <div className="space-invader space-invader-3 classic"></div>
        </div>

        <h3>Press Anywhere to Start</h3>
      </a>
    </motion.div>
  );
}
