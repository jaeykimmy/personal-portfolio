import React from "react";
import { useState } from "react";
import "./Technologies.scss";
import { iconimg, webPortfolio, reactPortfolio } from "../../data";
import Works from "../Works/Works";
export default function Technolgies() {
  const [filterTech, setFilterTech] = useState([]);
  const combinePortfolio = reactPortfolio.concat(webPortfolio);
  console.log(combinePortfolio);
  const handleButton = (e) => {
    console.log("button pressed:", e.target.getAttribute("value"));
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
      <h2>Technologies (its also a filter button for works)</h2>
      <div className="icons">
        {iconimg.map((icon) => (
          <button key={icon.name}>
            <img
              defaultValue="all"
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
