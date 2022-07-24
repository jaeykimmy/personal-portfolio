import React from "react";
import { useState } from "react";
import "./Technologies.scss";
import { iconimg, webPortfolio, reactPortfolio } from "../../data";
import Works from "../Works/Works";
export default function Technolgies() {
  const [filterTech, setFilterTech] = useState([]);
  const handleButton = (e) => {
    console.log("button pressed:", e.target.getAttribute("value"));
    setFilterTech(
      reactPortfolio.filter((x) =>
        x.stacks.filter((y) => y === e.target.getAttribute("value"))
      )
    );
  };
  console.log(filterTech);
  return (
    <div className="technologies">
      <h1>Technologies</h1>
      <div className="icons">
        {iconimg.map((icon) => (
          <button key={icon.name}>
            <img
              className="icon"
              src={icon.src}
              alt=""
              value={icon.name}
              onClick={handleButton}
            />
          </button>
        ))}
      </div>
      <Works filterTech={filterTech} />
    </div>
  );
}
