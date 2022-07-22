import React from "react";
import "./Technologies.scss";
export default function Technolgies() {
  const iconimg = [
    {
      name: "react",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      name: "postgresql",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg",
    },
    {
      name: "express",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    },
    {
      name: "nodejs",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "jest",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
    },
    {
      name: "storybook",
      src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg",
    },
  ];
  return (
    <div className="technologies">
      <h1>Technologies</h1>
      <div className="icons">
        {iconimg.map((icon) => (
          <img src={icon.src} alt="" />
        ))}
      </div>
    </div>
  );
}
