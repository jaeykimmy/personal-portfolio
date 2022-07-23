import React from "react";
import { useState } from "react";
import "./Technologies.scss";
import { iconimg } from "../../data";
import Works from "../Works/Works";
export default function Technolgies() {
  const [filterTech, setFilterTech] = useState("");
  const handleButton = (e) => {
    setFilterTech(
      iconimg.filter((x) => x.name === e.target.getAttribute("value"))
    );
  };
  console.log(filterTech[0]);
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
