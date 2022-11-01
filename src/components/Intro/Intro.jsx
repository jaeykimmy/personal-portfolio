import React from "react";
import "./Intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <br />
        <br />

        <h3>Press Anywhere to Start</h3>
      </a>
    </motion.div>
  );
}
