import React from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { Card } from "@mui/material";
import resumePdf from "../../assets/resume.pdf";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
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
          React and Javascript. After 3 years of working in healthcare, I
          decided to start anew and work a career doing what I love - solving
          problems and making things.
        </p>
        <br />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflowY: "hidden",
          }}
        >
          <p>This is everything I've accomplished so far -&gt; </p>
          <div className="trophybounce">
            <a style={{ color: "white" }} href={resumePdf}>
              <EmojiEventsIcon fontSize="large" />
            </a>
          </div>
        </div>
        <br />
      </Card>
    </motion.div>
  );
}
