import React from "react";
import "./Technologies.scss";
export default function Technolgies() {
  const iconimg = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-plain.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/storybook/storybook-original.svg",
  ];
  return (
    <div className="technolgies">
      <h1>Technologies</h1>
      <div className="icons">
        {iconimg.map((icon) => (
          <img src={icon} alt="" />
        ))}
      </div>
    </div>
  );
}
