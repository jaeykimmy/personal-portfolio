import React from "react";
import "./Intro.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import clouds from "../../assets/clouds.png";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      className="intro"
      id="intro"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="left">
        <div className="imgContainer">
          <img src={clouds} alt="" />
        </div>
        {/* <div className="clouds"></div> */}
      </div>
      <div className="right">
        <div className="wrapper">
          <h4>{"<intro>"}</h4>
          <h2>Hi There, I'm</h2>
          <h1>Jaeyoung Kim</h1>
          <h3>
            <span> Full Stack Developer</span>
          </h3>
          <h4>{"</intro>"}</h4>
        </div>
        {/* <a href="#portfolio">
          <KeyboardArrowDownIcon className={"arrow"} />
        </a> */}
      </div>
    </motion.div>
  );
}
