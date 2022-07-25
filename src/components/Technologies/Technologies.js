import React from "react";
import { useState } from "react";
import "./Technologies.scss";
import { iconimg, webPortfolio, reactPortfolio } from "../../data";
import Works from "../Works/Works";
export default function Technolgies() {
  const combinePortfolio = reactPortfolio.concat(webPortfolio);
  const [filterTech, setFilterTech] = useState(combinePortfolio);
  // console.log(combinePortfolio);
  const handleButton = (e) => {
    // console.log("button pressed:", e.target.getAttribute("value"));
    if (e.target.getAttribute("value") === "all") {
      setFilterTech(combinePortfolio);
    } else {
      setFilterTech(
        combinePortfolio.filter((x) =>
          x.stacks.some((y) => y.includes(e.target.getAttribute("value")))
        )
      );
    }
  };
  console.log(filterTech);
  return (
    <div className="technologies">
      <h2>Portfolio {"&"} Stacks</h2>
      <h3>Filter By Stack</h3>
      <div className="icons">
        {iconimg.map((icon) => (
          <button key={icon.name} className="button">
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
      <Works filterTech={filterTech} handleButton={handleButton} />
    </div>
  );
}
