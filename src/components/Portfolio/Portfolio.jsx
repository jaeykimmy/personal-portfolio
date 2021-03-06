import React, { useEffect } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import { useState } from "react";
import { reactPortfolio, webPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("react");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "react",
      title: "React",
    },
    {
      id: "web",
      title: "Web Apps",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "react":
        setData(reactPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(reactPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <a href={data.src}>
            <div className="item">
              <img src={data.img} alt="" href={data.src} />
              <h3>{data.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
