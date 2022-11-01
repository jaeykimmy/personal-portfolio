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
      {/* <div className="left">
        <div className="imgContainer">
          <img src={clouds} alt="" />
        </div>
      </div> */}

      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Jaeyoung Kim</h1>
        <h3>
          <p> Full Stack Developer</p>
        </h3>
        <a href="#about">Press Anywhere to Start</a>
      </div>
    </motion.div>
  );
}
