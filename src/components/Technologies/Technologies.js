import React from "react";
import { useState } from "react";
import "./Technologies.scss";
import { iconimg } from "../../data";
export default function Technolgies() {
  const [filterLanguage, setFilterLanguage] = useState([]);
  const handleButton = (e) => {
    if (e.target.value === "All") {
      setFilterLanguage("all");
    } else {
      setFilterLanguage(iconimg.filter((x) => x.name === e.target.value));
    }
  };
  return (
    <div className="technologies">
      <h1>Technologies</h1>
      <div className="icons">
        {iconimg.map((icon) => (
          <img src={icon.src} alt="" onClick={handleButton} />
        ))}
      </div>
    </div>
  );
}
