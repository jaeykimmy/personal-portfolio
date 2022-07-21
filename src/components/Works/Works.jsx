import { useState, useEffect } from "react";
import "./Works.scss";
import { works, webPortfolio } from "../../data"; 
import PortfolioList from "../PortfolioList/PortfolioList";

export default function Works() {
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
        setData(works);
        break;
      case "web":
        setData(webPortfolio);
        break;
      default:
        setData(works);
    }
  }, [selected]);
  return (
    <div className="works" id="works">
      {/* we know from css that -100vw or 100vw changes the slide over left or right respectively */}
      <h1>Works</h1>
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
      <div
        className="slider"
      >
        {data.map((data) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={data.icon} alt="" />
                  </div>
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                  <a href={data.src}>
                    <span>Project</span>
                  </a>
                </div>
              </div>
              <div className="right">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
