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
          I am a full stack web developer transitioning from an experienced
          healthcare worker role as an x-ray technologist. Due to my knack for
          picking up the electronic health record systems quickly and being
          entrusted by the senior technologists to deal with many software
          issues and bugs, I decided to leave my full-time role to work a career
          doing what I love - solving problems and making things.
        </p>
        <br />
        <p>
          I recently participated in the Hack the 6ix 2022 hackathon and won
          ‘Best Blockchain Project Using Hedera’. I was in charge of recruiting
          each member of the group based on their respective strengths and
          focussed on connecting the front and back end together. I spend my
          time making personal coding projects using Javascript and
          React/TypeScript, however as a quick learner I have interest in
          learning any technology stacks I will need for the job including C,
          C++, Java and Python. I keep up my Data Structure and Algorithms
          skills by doing daily HackerRank and Codewars questions. I am a proven
          team player with soft skills developed working as a healthcare
          professional. With this experience, I am able to put customers first
          in my work as well as collaborate with different departments to
          deliver the best product possible.
        </p>
      </Card>
    </motion.div>
  );
}
